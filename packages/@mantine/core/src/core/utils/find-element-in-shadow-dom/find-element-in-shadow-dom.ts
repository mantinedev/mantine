export function findElementBySelector<T extends HTMLElement>(
  selector: string,
  root: Document | Element | ShadowRoot = document
): T | null {
  // Directly try to find the element in the current root
  // querySelector searches all descendants in this root, but cannot cross shadow boundaries
  const element = root.querySelector<T>(selector);
  if (element) {
    return element;
  }

  // Find all elements in the current root to check for shadow roots
  // We need to search all descendants, not just direct children
  const allElements = root.querySelectorAll('*');
  for (let i = 0; i < allElements.length; i += 1) {
    const el = allElements[i];

    // Check if this element has a shadow root
    if ((el as Element).shadowRoot) {
      const shadowElement = findElementBySelector<T>(selector, (el as Element).shadowRoot!);
      if (shadowElement) {
        return shadowElement;
      }
    }
  }

  return null;
}

export function findElementsBySelector<T extends HTMLElement>(
  selector: string,
  root: Document | Element | ShadowRoot = document
): T[] {
  const results: T[] = [];

  // Collect all matching elements in the current root
  // querySelectorAll gets all descendants in this root, but cannot cross shadow boundaries
  const elements = root.querySelectorAll<T>(selector);
  results.push(...Array.from(elements));

  // Find all elements in the current root to check for shadow roots
  // We need to search all descendants, not just direct children
  const allElements = root.querySelectorAll('*');
  for (let i = 0; i < allElements.length; i += 1) {
    const el = allElements[i];

    // Check if this element has a shadow root
    if ((el as Element).shadowRoot) {
      const shadowElements = findElementsBySelector<T>(selector, (el as Element).shadowRoot!);
      results.push(...shadowElements);
    }
  }

  return results;
}

/**
 * Gets the appropriate root element (Document or ShadowRoot) for DOM queries
 * based on the provided target element reference.
 */
export function getRootElement(
  targetElement: HTMLElement | null | undefined
): Document | ShadowRoot {
  if (!targetElement) {
    return document;
  }

  const root = targetElement.getRootNode();
  return root instanceof ShadowRoot || root instanceof Document ? root : document;
}
