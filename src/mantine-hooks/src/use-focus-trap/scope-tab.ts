import { findTabbableDescendants } from './tabbable';

export function scopeTab(node: HTMLElement, event: KeyboardEvent) {
  const tabbable = findTabbableDescendants(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  const root = node.getRootNode() as unknown as DocumentOrShadowRoot;
  const leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;

  if (!leavingFinalTabbable) {
    return;
  }

  event.preventDefault();

  const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];

  if (target) {
    target.focus();
  }
}
