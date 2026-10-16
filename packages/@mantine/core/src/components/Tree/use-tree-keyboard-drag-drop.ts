import { useRef, useState } from 'react';
import {
  findKeyboardDropSlot,
  getKeyboardDropPayload,
  getKeyboardDropRows,
  isSameKeyboardDropSlot,
  KeyboardDropDirection,
  KeyboardDropRow,
  KeyboardDropSlot,
} from './keyboard-drag-drop/keyboard-drag-drop';
import type { TreeDragDropPayload } from './move-tree-node/move-tree-node';
import {
  focusTreeItem,
  getTreeItemKey,
  getTreeRoot,
  getVisibleTreeItemElements,
} from './tree-item';
import type { TreeLabels } from './tree-labels';
import type { TreeStore } from './use-tree';
import type { TreeAllowDrop } from './use-tree-node-drag-drop';

interface KeyboardDragState {
  root: Element;
  draggedValue: string;
  start: KeyboardDropSlot;
  current: KeyboardDropSlot;
}

interface UseTreeKeyboardDragDropInput {
  onDragDrop: ((payload: TreeDragDropPayload) => void) | undefined;
  allowDrop: TreeAllowDrop | undefined;
  labels: TreeLabels;
  store: TreeStore;
}

const PICKUP_DIRECTIONS: Record<string, KeyboardDropDirection> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'out',
  ArrowRight: 'in',
};

const MOVE_DIRECTIONS: Record<string, KeyboardDropDirection> = {
  ...PICKUP_DIRECTIONS,
  Home: 'first',
  End: 'last',
};

function findTreeItem(root: Element, value: string) {
  return getVisibleTreeItemElements(root).find((item) => item.dataset.value === value) || null;
}

function getRows(root: Element): KeyboardDropRow[] {
  return getVisibleTreeItemElements(root).map((item) => ({
    value: item.dataset.value!,
    level: Number(item.dataset.level),
    hasChildren: item.hasAttribute('aria-expanded'),
  }));
}

function getLabelElement(item: HTMLElement) {
  const value = item.dataset.value;
  const label = Array.from(item.querySelectorAll<HTMLElement>('[data-value]')).find(
    (element) => element.getAttribute('role') !== 'treeitem' && element.dataset.value === value
  );
  return label || item;
}

function getNodeName(root: Element, value: string) {
  const item = findTreeItem(root, value);

  if (!item) {
    return value;
  }

  const ariaLabel = item.getAttribute('aria-label');

  if (ariaLabel) {
    return ariaLabel;
  }

  return Array.from(item.childNodes)
    .filter((node) => !(node instanceof Element && node.getAttribute('role') === 'group'))
    .map((node) => node.textContent)
    .join('')
    .trim();
}

function setDragging(root: Element, value: string, dragging: boolean) {
  const item = findTreeItem(root, value);
  [item, item && getLabelElement(item)].forEach((element) => {
    if (dragging) {
      element?.setAttribute('data-dragging', 'true');
    } else {
      element?.removeAttribute('data-dragging');
    }
  });
}

function clearDropIndicator(root: Element) {
  root
    .querySelectorAll('[data-drag-over]')
    .forEach((element) => element.removeAttribute('data-drag-over'));
}

export function useTreeKeyboardDragDrop({
  onDragDrop,
  allowDrop,
  labels,
  store,
}: UseTreeKeyboardDragDropInput) {
  const stateRef = useRef<KeyboardDragState | null>(null);
  const pendingFocusRef = useRef<{ root: Element; value: string } | null>(null);
  const [announcement, setAnnouncement] = useState('');

  const isAllowed = (payload: TreeDragDropPayload) => !allowDrop || allowDrop(payload);

  const getPayload = (state: KeyboardDragState, rows: KeyboardDropRow[]) =>
    getKeyboardDropPayload(rows, state.current, state.draggedValue, isAllowed);

  const getAnnouncementPayload = (state: KeyboardDragState, payload: TreeDragDropPayload) => ({
    node: getNodeName(state.root, payload.draggedNode),
    target: getNodeName(state.root, payload.targetNode),
    position: payload.position,
  });

  const end = (state: KeyboardDragState) => {
    clearDropIndicator(state.root);
    setDragging(state.root, state.draggedValue, false);
    stateRef.current = null;
  };

  const cancel = () => {
    const state = stateRef.current;

    if (state) {
      end(state);
      setAnnouncement(labels.dragDropCancel(getNodeName(state.root, state.draggedValue)));
    }
  };

  const move = (state: KeyboardDragState, direction: KeyboardDropDirection) => {
    const result = getKeyboardDropRows(getRows(state.root), state.draggedValue);

    if (!result) {
      return null;
    }

    const next = findKeyboardDropSlot({
      rows: result.rows,
      current: state.current,
      start: state.start,
      direction,
      draggedValue: state.draggedValue,
      isAllowed,
    });

    if (!next) {
      return null;
    }

    state.current = next;
    clearDropIndicator(state.root);

    const payload = getPayload(state, result.rows);

    if (!payload) {
      return null;
    }

    const target = findTreeItem(state.root, payload.targetNode);
    if (target) {
      const label = getLabelElement(target);
      label.setAttribute('data-drag-over', payload.position);
      label.scrollIntoView?.({ block: 'nearest' });
    }

    return labels.dragDropMove(getAnnouncementPayload(state, payload));
  };

  const drop = (state: KeyboardDragState) => {
    const result = getKeyboardDropRows(getRows(state.root), state.draggedValue);
    const payload = result && getPayload(state, result.rows);

    if (!payload || isSameKeyboardDropSlot(state.current, state.start) || !isAllowed(payload)) {
      cancel();
      return;
    }

    const message = labels.dragDropDrop(getAnnouncementPayload(state, payload));
    end(state);
    pendingFocusRef.current = { root: state.root, value: state.draggedValue };

    if (payload.position === 'inside') {
      store.expand(payload.targetNode);
    }

    onDragDrop?.(payload);
    setAnnouncement(message);
  };

  const pickUp = (event: React.KeyboardEvent<HTMLElement>, value: string, key: string) => {
    const direction = PICKUP_DIRECTIONS[key];
    const root = getTreeRoot(event.currentTarget);

    if (
      !direction ||
      !root ||
      !(event.ctrlKey || event.metaKey) ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }

    const result = getKeyboardDropRows(getRows(root), value);

    if (!result) {
      return false;
    }

    event.preventDefault();
    event.stopPropagation();

    const state: KeyboardDragState = {
      root,
      draggedValue: value,
      start: result.start,
      current: result.start,
    };

    stateRef.current = state;
    setDragging(root, value, true);

    const startMessage = labels.dragDropStart(getNodeName(root, value));
    const moveMessage = move(state, direction);
    setAnnouncement(moveMessage ? `${startMessage} ${moveMessage}` : startMessage);
    return true;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, value: string) => {
    if (!onDragDrop || event.target !== event.currentTarget) {
      return false;
    }

    const key = getTreeItemKey(event);
    const state = stateRef.current;

    if (!state) {
      return pickUp(event, value, key);
    }

    if (state.draggedValue !== value) {
      cancel();
      return false;
    }

    if (key === 'Tab') {
      return false;
    }

    event.preventDefault();
    event.stopPropagation();

    if (key === 'Escape') {
      cancel();
    } else if (key === 'Enter') {
      drop(state);
    } else if (MOVE_DIRECTIONS[key]) {
      const message = move(state, MOVE_DIRECTIONS[key]);
      message && setAnnouncement(message);
    }

    return true;
  };

  const handleBlur = (event: React.FocusEvent<HTMLElement>, value: string) => {
    const state = stateRef.current;

    if (
      state &&
      state.draggedValue === value &&
      !event.currentTarget.contains(event.relatedTarget as Node | null)
    ) {
      cancel();
    }
  };

  const applyPendingFocus = () => {
    const pending = pendingFocusRef.current;

    if (!pending) {
      return;
    }

    pendingFocusRef.current = null;
    const item = findTreeItem(pending.root, pending.value);

    if (item && item.ownerDocument.activeElement !== item) {
      focusTreeItem(item);
    }
  };

  return { handleKeyDown, handleBlur, applyPendingFocus, announcement };
}
