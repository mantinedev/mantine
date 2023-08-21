import { findTabbableDescendants } from './tabbable';

export function scopeTab(node: HTMLElement, event: KeyboardEvent) {
  const tabbable = findTabbableDescendants(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  const root = node.getRootNode() as unknown as DocumentOrShadowRoot;
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;

  // Handle the case of the active element being in a RadioGroup with the finalTabbable element
  if (root.activeElement instanceof HTMLInputElement && root.activeElement.type === 'radio') {
    const activeRadioGroup = tabbable.filter(
      (element) =>
        element instanceof HTMLInputElement &&
        root.activeElement instanceof HTMLInputElement &&
        element.type === 'radio' &&
        element.name === root.activeElement.name
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }

  if (!leavingFinalTabbable) {
    return;
  }

  event.preventDefault();

  const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];

  if (target) {
    target.focus();
  }
}
