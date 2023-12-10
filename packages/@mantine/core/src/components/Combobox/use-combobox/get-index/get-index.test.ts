import { getFirstIndex, getNextIndex, getPreviousIndex } from './get-index';

function getElements(count: number = 5, disabledIndices: number[] = []) {
  return Array(count)
    .fill(0)
    .map((_, index) => {
      const element = document.createElement('div');
      if (disabledIndices.includes(index)) {
        element.setAttribute('data-combobox-disabled', 'true');
      }

      return element;
    });
}

describe('@mantine/core/Combobox/get-next-index', () => {
  it('returns correct next index for elements without disabled elements (loop: false)', () => {
    const elements = getElements(5);
    expect(getNextIndex(0, elements, false)).toBe(1);
    expect(getNextIndex(2, elements, false)).toBe(3);
    expect(getNextIndex(4, elements, false)).toBe(4);
  });

  it('returns correct next index for elements without disabled elements (loop: true)', () => {
    const elements = getElements(5);
    expect(getNextIndex(0, elements, true)).toBe(1);
    expect(getNextIndex(2, elements, true)).toBe(3);
    expect(getNextIndex(4, elements, true)).toBe(0);
  });

  it('returns correct next index if current index is -1', () => {
    const elements = getElements(5);
    expect(getNextIndex(-1, elements, true)).toBe(0);
  });

  it('returns correct next index if next element is disabled', () => {
    const elements = getElements(10, [1, 3, 4, 6, 7, 8]);
    expect(getNextIndex(0, elements, false)).toBe(2);
    expect(getNextIndex(2, elements, false)).toBe(5);
    expect(getNextIndex(5, elements, false)).toBe(9);
  });
});

describe('@mantine/core/Combobox/get-previous-index', () => {
  it('returns correct previous index for elements without disabled elements (loop: false)', () => {
    const elements = getElements(5);
    expect(getPreviousIndex(4, elements, false)).toBe(3);
    expect(getPreviousIndex(2, elements, false)).toBe(1);
    expect(getPreviousIndex(0, elements, false)).toBe(0);
  });

  it('returns correct previous index for elements without disabled elements (loop: true)', () => {
    const elements = getElements(5);
    expect(getPreviousIndex(4, elements, true)).toBe(3);
    expect(getPreviousIndex(2, elements, true)).toBe(1);
    expect(getPreviousIndex(0, elements, true)).toBe(4);
  });

  it('returns correct previous index if current index is -1', () => {
    const elements = getElements(5);
    expect(getPreviousIndex(-1, elements, true)).toBe(4);
  });

  it('returns correct previous index if previous element is disabled', () => {
    const elements = getElements(10, [1, 3, 4, 6, 7, 8]);
    expect(getPreviousIndex(9, elements, false)).toBe(5);
    expect(getPreviousIndex(5, elements, false)).toBe(2);
    expect(getPreviousIndex(2, elements, false)).toBe(0);
  });
});

describe('@mantine/core/Combobox/get-first-index', () => {
  it('returns correct first index for elements without disabled elements', () => {
    const elements = getElements(5);
    expect(getFirstIndex(elements)).toBe(0);
  });

  it('returns correct first index when first element is disabled', () => {
    const elements = getElements(10, [0, 1, 2]);
    expect(getFirstIndex(elements)).toBe(3);
  });

  it('returns -1 if all elements are disabled', () => {
    const elements = getElements(5, [0, 1, 2, 3, 4, 5]);
    expect(getFirstIndex(elements)).toBe(-1);
  });
});
