/**
 * Recursively searches for an element by selector in the current root and all nested shadow DOMs.
 * Adapted from the Spotlight component's shadow DOM handling pattern.
 *
 * @param selector - The CSS selector to search for
 * @param root - The root element to start searching from (Document, Element, or ShadowRoot)
 * @returns The found element or null
 */
export function findElementBySelector<T extends HTMLElement>(
  selector: string,
  root: Document | Element | ShadowRoot = document
): T | null {
  // Directly try to find the element in the current root
  const element = root.querySelector<T>(selector);
  if (element) {
    return element;
  }

  // Iterate through all children of the current root
  const children = root instanceof ShadowRoot ? root.host.children : root.children;
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];

    // Recursively search in the child's shadow root if it exists
    if (child.shadowRoot) {
      const shadowElement = findElementBySelector<T>(selector, child.shadowRoot);
      if (shadowElement) {
        return shadowElement;
      }
    }

    // Also search recursively in the child itself if it does not have a shadow root
    // or the element wasn't found in its shadow root
    const nestedElement = findElementBySelector<T>(selector, child);
    if (nestedElement) {
      return nestedElement;
    }
  }

  // Return null if the element isn't found in the current root or any of its shadow DOMs
  return null;
}

/**
 * Returns all elements matching the selector, searching through shadow DOM boundaries.
 *
 * @param selector - The CSS selector to search for
 * @param root - The root element to start searching from
 * @returns NodeList of matching elements
 */
export function findElementsBySelector<T extends HTMLElement>(
  selector: string,
  root: Document | Element | ShadowRoot = document
): T[] {
  const results: T[] = [];

  // Collect all matching elements in the current root
  const elements = root.querySelectorAll<T>(selector);
  results.push(...Array.from(elements));

  // Iterate through all children of the current root
  const children = root instanceof ShadowRoot ? root.host.children : root.children;
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];

    // Recursively search in the child's shadow root if it exists
    if (child.shadowRoot) {
      const shadowElements = findElementsBySelector<T>(selector, child.shadowRoot);
      results.push(...shadowElements);
    } else {
      // Search recursively in the child itself
      const nestedElements = findElementsBySelector<T>(selector, child);
      results.push(...nestedElements);
    }
  }

  return results;
}

/**
 * Gets the appropriate root element (Document or ShadowRoot) for DOM queries
 * based on the provided target element reference.
 *
 * @param targetElement - The target element to find the root from
 * @returns The root node (Document or ShadowRoot), defaulting to document
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

