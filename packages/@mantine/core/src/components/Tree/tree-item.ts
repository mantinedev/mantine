import { findElementAncestor } from '../../core';
import type { FlattenedTreeNodeData } from './flatten-tree-data/flatten-tree-data';
import type { TreeStore } from './use-tree';

interface TreeNavigationItem {
  value: string;
  level: number;
}

interface TreeItemBehaviorOptions {
  value: string;
  hasChildren: boolean;
  expanded: boolean;
  store: TreeStore;
  expandOnClick: boolean | undefined;
  selectOnClick: boolean | undefined;
}

interface TreeItemKeyDownOptions extends TreeItemBehaviorOptions {
  expandOnSpace: boolean | undefined;
  checkOnSpace: boolean | undefined;
  allowRangeSelection: boolean | undefined;
  getItems?: () => TreeNavigationItem[];
  onScrollToIndex?: (index: number) => void;
}

const lastFocusedValues = new WeakMap<Element, string>();
const pendingFocusValues = new WeakMap<Element, string>();
const scheduledRoots = new WeakSet<Element>();
const flatPositionsCache = new WeakMap<
  FlattenedTreeNodeData[],
  Map<string, { posInSet: number; setSize: number }>
>();

export function getFlatTreeItemPosition(flatData: FlattenedTreeNodeData[], value: string) {
  let positions = flatPositionsCache.get(flatData);

  if (!positions) {
    const counts = new Map<string | null, number>();
    positions = new Map();

    for (const item of flatData) {
      const posInSet = (counts.get(item.parent) || 0) + 1;
      counts.set(item.parent, posInSet);
      positions.set(item.node.value, { posInSet, setSize: 0 });
    }

    for (const item of flatData) {
      positions.get(item.node.value)!.setSize = counts.get(item.parent)!;
    }

    flatPositionsCache.set(flatData, positions);
  }

  return positions.get(value);
}

export function getFlatTreeItems(flatData: FlattenedTreeNodeData[]): TreeNavigationItem[] {
  return flatData.map((item) => ({ value: item.node.value, level: item.level }));
}

export function getTreeItemCheckedState(store: TreeStore, value: string) {
  if (store.isNodeChecked(value)) {
    return true;
  }

  return store.isNodeIndeterminate(value) ? 'mixed' : false;
}

export function getTreeRoot(element: HTMLElement | null) {
  return element ? findElementAncestor(element, '[data-tree-root]') : null;
}

export function isVisibleTreeItem(item: HTMLElement, root: Element) {
  for (let current: HTMLElement | null = item; current && current !== root;) {
    if (current.style.display === 'none') {
      return false;
    }
    current = current.parentElement;
  }

  return true;
}

function getTreeItemElements(root: Element) {
  return Array.from(root.querySelectorAll<HTMLElement>('[role=treeitem]'));
}

function getVisibleTreeItemElements(root: Element) {
  return getTreeItemElements(root).filter((item) => isVisibleTreeItem(item, root));
}

export function getRenderedTreeItems(root: Element): TreeNavigationItem[] {
  return getVisibleTreeItemElements(root).map((item) => ({
    value: item.dataset.value!,
    level: Number(item.dataset.level),
  }));
}

function findRenderedTreeItem(root: Element, value: string) {
  return getVisibleTreeItemElements(root).find((item) => item.dataset.value === value) || null;
}

export function focusTreeItem(item: HTMLElement | null | undefined) {
  item?.setAttribute('data-focus-ring', 'true');
  item?.focus();
}

function rememberFocusedTreeItem(root: Element, value: string) {
  pendingFocusValues.delete(root);
  lastFocusedValues.set(root, value);
  syncTreeTabStop(root);
}

export function syncTreeTabStop(root: Element | null) {
  if (!root) {
    return;
  }

  const items = getTreeItemElements(root);
  const visibleItems = items.filter((item) => isVisibleTreeItem(item, root));
  const lastFocused = lastFocusedValues.get(root);
  const tabStop =
    visibleItems.find((item) => item.dataset.value === lastFocused) ||
    visibleItems.find((item) => item.getAttribute('aria-selected') === 'true') ||
    visibleItems[0];

  items.forEach((item) => {
    const tabIndex = item === tabStop ? '0' : '-1';
    if (item.getAttribute('tabindex') !== tabIndex) {
      item.setAttribute('tabindex', tabIndex);
    }
  });
}

export function scheduleTreeTabStopSync(root: Element | null) {
  if (!root || scheduledRoots.has(root)) {
    return;
  }

  scheduledRoots.add(root);
  queueMicrotask(() => {
    scheduledRoots.delete(root);
    syncTreeTabStop(root);
  });
}

export function focusPendingTreeItem(root: Element | null, item: HTMLElement | null) {
  if (!root || !item || pendingFocusValues.get(root) !== item.dataset.value) {
    return;
  }

  pendingFocusValues.delete(root);
  const activeElement = item.ownerDocument.activeElement;

  if (!activeElement || activeElement === item.ownerDocument.body || root.contains(activeElement)) {
    focusTreeItem(item);
  }
}

function getTreeItemsRange(items: TreeNavigationItem[], anchor: string, value: string) {
  const anchorIndex = items.findIndex((item) => item.value === anchor);
  const valueIndex = items.findIndex((item) => item.value === value);

  if (anchorIndex === -1 || valueIndex === -1) {
    return [value];
  }

  return items
    .slice(Math.min(anchorIndex, valueIndex), Math.max(anchorIndex, valueIndex) + 1)
    .map((item) => item.value);
}

export function isTreeRangeSelection(
  event: { shiftKey: boolean },
  store: TreeStore,
  allowRangeSelection: boolean | undefined
) {
  return !!(allowRangeSelection && event.shiftKey && store.multiple && store.anchorNode);
}

export function selectTreeItemsRange(store: TreeStore, items: TreeNavigationItem[], value: string) {
  store.setSelectedState(getTreeItemsRange(items, store.anchorNode!, value));
}

export function handleTreeItemFocus(event: React.FocusEvent<HTMLElement>, value: string) {
  const root = getTreeRoot(event.currentTarget);
  if (root && (event.target as HTMLElement).closest('[role=treeitem]') === event.currentTarget) {
    rememberFocusedTreeItem(root, value);
  }
}

export function handleTreeItemBlur(event: React.FocusEvent<HTMLElement>) {
  if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
    event.currentTarget.removeAttribute('data-focus-ring');
  }
}

export function activateTreeItem({
  value,
  hasChildren,
  store,
  expandOnClick,
  selectOnClick,
}: TreeItemBehaviorOptions) {
  if (expandOnClick && hasChildren) {
    store.toggleExpanded(value);
  }

  if (selectOnClick) {
    store.select(value);
  }
}

function getParentIndex(items: TreeNavigationItem[], index: number) {
  for (let i = index - 1; i >= 0; i -= 1) {
    if (items[i].level < items[index].level) {
      return i;
    }
  }

  return -1;
}

const NAVIGATION_KEYS = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];

export function handleTreeItemKeyDown(
  event: React.KeyboardEvent<HTMLElement>,
  options: TreeItemKeyDownOptions
) {
  if (event.target !== event.currentTarget) {
    return;
  }

  const key = event.key === ' ' ? 'Space' : event.key;
  const { value, hasChildren, expanded, store } = options;

  if (key === 'Enter') {
    event.stopPropagation();
    event.preventDefault();
    activateTreeItem(options);
    return;
  }

  if (key === 'Space') {
    if (options.expandOnSpace || options.checkOnSpace) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (options.expandOnSpace && hasChildren) {
      store.toggleExpanded(value);
    }

    if (options.checkOnSpace) {
      store.isNodeChecked(value) ? store.uncheckNode(value) : store.checkNode(value);
    }

    return;
  }

  if (!NAVIGATION_KEYS.includes(key)) {
    return;
  }

  event.stopPropagation();
  event.preventDefault();

  if (key === 'ArrowRight' && hasChildren && !expanded) {
    store.expand(value);
    return;
  }

  if (key === 'ArrowLeft' && hasChildren && expanded) {
    store.collapse(value);
    return;
  }

  const root = getTreeRoot(event.currentTarget);

  if (!root) {
    return;
  }

  const items = options.getItems ? options.getItems() : getRenderedTreeItems(root);
  const index = items.findIndex((item) => item.value === value);

  if (index === -1) {
    return;
  }

  let targetIndex = -1;

  if (key === 'ArrowDown') {
    targetIndex = index + 1;
  } else if (key === 'ArrowUp') {
    targetIndex = index - 1;
  } else if (key === 'Home') {
    targetIndex = 0;
  } else if (key === 'End') {
    targetIndex = items.length - 1;
  } else if (key === 'ArrowRight') {
    targetIndex = items[index + 1]?.level > items[index].level ? index + 1 : -1;
  } else if (key === 'ArrowLeft') {
    targetIndex = getParentIndex(items, index);
  }

  const target = items[targetIndex];

  if (!target) {
    return;
  }

  const targetElement = findRenderedTreeItem(root, target.value);

  if (targetElement) {
    focusTreeItem(targetElement);
  } else if (options.onScrollToIndex) {
    pendingFocusValues.set(root, target.value);
    options.onScrollToIndex(targetIndex);
  }

  if (
    (key === 'ArrowDown' || key === 'ArrowUp') &&
    isTreeRangeSelection(event, store, options.allowRangeSelection)
  ) {
    selectTreeItemsRange(store, items, target.value);
  }
}
