import { findTabbableDescendants } from './tabbable';

const NATIVE_TAB_STOPS_INPUT_TYPES = ['date', 'time', 'datetime-local', 'month', 'week'];
const NATIVE_TAB_STOPS_NODES = ['audio', 'video', 'iframe', 'object', 'embed'];

function isRadio(element: Element | null): element is HTMLInputElement {
  return !!element && element.tagName === 'INPUT' && (element as HTMLInputElement).type === 'radio';
}

function isSameRadioGroup(a: HTMLInputElement, b: HTMLInputElement) {
  return a.name !== '' && a.name === b.name && a.form === b.form;
}

function hasNativeTabStops(element: Element) {
  const nodeName = element.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return NATIVE_TAB_STOPS_INPUT_TYPES.includes((element as HTMLInputElement).type);
  }

  return NATIVE_TAB_STOPS_NODES.includes(nodeName);
}

function getTabSequence(node: HTMLElement, activeElement: Element) {
  const tabbable = findTabbableDescendants(node);

  return tabbable.filter((element) => {
    if (element === activeElement || !isRadio(element)) {
      return true;
    }

    if (isRadio(activeElement) && isSameRadioGroup(element, activeElement)) {
      return false;
    }

    if (element.checked) {
      return true;
    }

    return !tabbable.some(
      (item) => isRadio(item) && item.checked && isSameRadioGroup(item, element)
    );
  });
}

function getStartIndex(
  sequence: HTMLElement[],
  activeElement: Element,
  node: HTMLElement,
  backwards: boolean
) {
  const activeIndex = sequence.indexOf(activeElement as HTMLElement);
  if (activeIndex !== -1) {
    return activeIndex + 1;
  }

  if (activeElement === node) {
    return 0;
  }

  const position = backwards ? Node.DOCUMENT_POSITION_PRECEDING : Node.DOCUMENT_POSITION_FOLLOWING;
  const nextIndex = sequence.findIndex(
    (element) => (activeElement.compareDocumentPosition(element) & position) !== 0
  );

  return nextIndex === -1 ? 0 : nextIndex;
}

function getCandidates(node: HTMLElement, activeElement: Element, backwards: boolean) {
  const sequence = getTabSequence(node, activeElement);
  if (backwards) {
    sequence.reverse();
  }

  const startIndex = getStartIndex(sequence, activeElement, node, backwards);
  return [...sequence.slice(startIndex), ...sequence.slice(0, startIndex)].filter(
    (element) => element !== activeElement
  );
}

function focusFirstAvailable(candidates: HTMLElement[], root: DocumentOrShadowRoot) {
  for (const candidate of candidates) {
    candidate.focus();

    if (root.activeElement === candidate) {
      return;
    }
  }
}

export function scopeTab(node: HTMLElement, event: KeyboardEvent) {
  const root = node.getRootNode() as unknown as DocumentOrShadowRoot;
  const activeElement = root.activeElement;

  if (!activeElement || (activeElement !== node && !node.contains(activeElement))) {
    return;
  }

  const candidates = getCandidates(node, activeElement, event.shiftKey);

  if (hasNativeTabStops(activeElement)) {
    setTimeout(() => {
      const current = root.activeElement;
      if (node.isConnected && current !== activeElement && current !== candidates[0]) {
        focusFirstAvailable([...candidates, activeElement as HTMLElement], root);
      }
    });
    return;
  }

  event.preventDefault();
  focusFirstAvailable(candidates, root);
}
