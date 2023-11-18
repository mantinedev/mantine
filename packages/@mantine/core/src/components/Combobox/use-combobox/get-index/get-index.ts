export function getPreviousIndex(
  currentIndex: number,
  elements: NodeListOf<HTMLDivElement> | HTMLDivElement[],
  loop: boolean
) {
  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    if (!elements[i].hasAttribute('data-combobox-disabled')) {
      return i;
    }
  }

  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].hasAttribute('data-combobox-disabled')) {
        return i;
      }
    }
  }

  return currentIndex;
}

export function getNextIndex(
  currentIndex: number,
  elements: NodeListOf<HTMLDivElement> | HTMLDivElement[],
  loop: boolean
) {
  for (let i = currentIndex + 1; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute('data-combobox-disabled')) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].hasAttribute('data-combobox-disabled')) {
        return i;
      }
    }
  }

  return currentIndex;
}

export function getFirstIndex(elements: NodeListOf<HTMLDivElement> | HTMLDivElement[]) {
  for (let i = 0; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute('data-combobox-disabled')) {
      return i;
    }
  }

  return -1;
}
