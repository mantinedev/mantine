import { getIndexFromDragPoint } from './get-index-from-drag-point';

function elementWithRect(left: number, right: number): HTMLElement {
  const element = document.createElement('div');
  element.getBoundingClientRect = () =>
    ({
      left,
      right,
      top: 0,
      bottom: 0,
      width: right - left,
      height: 0,
      x: left,
      y: 0,
      toJSON: () => ({}),
    }) as DOMRect;
  return element;
}

describe('@mantine/schedule/get-index-from-drag-point', () => {
  it('returns the index of the element under the x coordinate', () => {
    const elements = [
      elementWithRect(0, 100),
      elementWithRect(100, 200),
      elementWithRect(200, 300),
    ];
    expect(getIndexFromDragPoint(elements, 150)).toBe(1);
  });

  it('clamps to the first element when the x coordinate is before all elements', () => {
    const elements = [elementWithRect(100, 200), elementWithRect(200, 300)];
    expect(getIndexFromDragPoint(elements, 50)).toBe(0);
  });

  it('clamps to the last element when the x coordinate is past all elements', () => {
    const elements = [elementWithRect(100, 200), elementWithRect(200, 300)];
    expect(getIndexFromDragPoint(elements, 999)).toBe(1);
  });

  it('returns null when there are no elements', () => {
    expect(getIndexFromDragPoint([], 100)).toBeNull();
  });

  it('skips null entries when scanning for a match', () => {
    const elements = [null, elementWithRect(100, 200)];
    expect(getIndexFromDragPoint(elements, 150)).toBe(1);
  });
});
