/**
 * Finds the index of the element whose horizontal bounds contain `clientX`.
 * When `clientX` falls outside every element, it clamps to the first or last
 * element; returns `null` when no element matches and the row is empty.
 */
export function getIndexFromDragPoint(
  elements: (HTMLElement | null)[],
  clientX: number
): number | null {
  const index = elements.findIndex((node) => {
    if (!node) {
      return false;
    }
    const rect = node.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right;
  });

  if (index >= 0) {
    return index;
  }

  const first = elements[0];
  const last = elements[elements.length - 1];

  if (!first || !last) {
    return null;
  }

  const firstRect = first.getBoundingClientRect();
  const lastRect = last.getBoundingClientRect();

  if (clientX < firstRect.left) {
    return 0;
  }

  if (clientX > lastRect.right) {
    return elements.length - 1;
  }

  return null;
}
