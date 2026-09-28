import { findElementAncestor } from '@mantine/core';

export interface JsonViewerKeyDownOptions {
  expanded?: boolean;
  onToggle?: () => void;
  onSelect?: () => void;
}

function focusParentRow(row: HTMLElement) {
  const wrapper = findElementAncestor(row, '[data-jv-node-wrapper]');
  const parentWrapper = wrapper ? findElementAncestor(wrapper, '[data-jv-node-wrapper]') : null;
  parentWrapper?.querySelector<HTMLElement>('[data-jv-node]')?.focus();
}

function focusFirstChildRow(row: HTMLElement) {
  const wrapper = findElementAncestor(row, '[data-jv-node-wrapper]');
  const group = wrapper
    ? Array.from(wrapper.children).find((child) => child.getAttribute('role') === 'group')
    : undefined;
  group?.querySelector<HTMLElement>('[data-jv-node]')?.focus();
}

function focusSiblingRow(row: HTMLElement, direction: 1 | -1) {
  const root = findElementAncestor(row, '[data-jv-root]');
  if (!root) {
    return;
  }
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-jv-node]'));
  const index = rows.indexOf(row);
  if (index !== -1) {
    rows[index + direction]?.focus();
  }
}

export function handleJsonViewerKeyDown(
  event: React.KeyboardEvent<HTMLElement>,
  { expanded, onToggle, onSelect }: JsonViewerKeyDownOptions = {}
) {
  const { code } = event.nativeEvent;
  const row = event.currentTarget;

  if (code === 'KeyC' && (event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
    const copyControl = row.querySelector<HTMLElement>('[data-jv-copy]');
    if (copyControl && !window.getSelection()?.toString()) {
      event.stopPropagation();
      event.preventDefault();
      copyControl.click();
    }
    return;
  }

  if (code === 'Enter' || code === 'Space') {
    if (event.target !== row) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    (onToggle ?? onSelect)?.();
    return;
  }

  if (code === 'ArrowDown' || code === 'ArrowUp') {
    event.stopPropagation();
    event.preventDefault();
    focusSiblingRow(row, code === 'ArrowDown' ? 1 : -1);
    return;
  }

  if (code === 'ArrowRight') {
    event.stopPropagation();
    event.preventDefault();
    if (expanded) {
      focusFirstChildRow(row);
    } else if (expanded === false) {
      onToggle?.();
    }
    return;
  }

  if (code === 'ArrowLeft') {
    event.stopPropagation();
    event.preventDefault();
    if (expanded && onToggle) {
      onToggle();
    } else {
      focusParentRow(row);
    }
  }
}
