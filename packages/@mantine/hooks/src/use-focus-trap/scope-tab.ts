import { FOCUS_SELECTOR, tabbable } from './tabbable';

function findTabbableDescendants(element: HTMLElement): HTMLElement[] {
  return Array.from(element.querySelectorAll<HTMLElement>(FOCUS_SELECTOR)).filter(tabbable);
}

function isRadioElement(element: Element) {
  return element.tagName === 'INPUT' && element.getAttribute('type') === 'radio';
}

function isSameRadioGroup(a: Element, b: Element) {
  return a.getAttribute('name') === b.getAttribute('name');
}

export function scopeTab(node: HTMLElement, event: KeyboardEvent) {
  const tabbable = findTabbableDescendants(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }

  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];

  const root = node.getRootNode() as unknown as DocumentOrShadowRoot;
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;

  const activeElement = root.activeElement as Element;
  const activeElementIsRadio = isRadioElement(activeElement);
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable.filter(
      (el) => isRadioElement(el) && isSameRadioGroup(el, activeElement)
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
