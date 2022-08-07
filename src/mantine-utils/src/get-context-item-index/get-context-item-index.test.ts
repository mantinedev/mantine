import { getContextItemIndex } from './get-context-item-index';

describe('@mantine/core/utils/get-context-item-index', () => {
  it('returns correct item index based on DOM structure', () => {
    const parent = document.createElement('div');
    parent.classList.add('parent');
    const items = Array(10)
      .fill(0)
      .map(() => {
        const element = document.createElement('span');
        element.classList.add('child');
        return element;
      });

    const nestedContainer = document.createElement('div');
    const nestedItem = document.createElement('span');
    nestedItem.classList.add('child');

    nestedContainer.appendChild(nestedItem);
    items.forEach((item) => parent.appendChild(item));
    parent.appendChild(nestedContainer);

    expect(getContextItemIndex('.child', '.parent', items[0])).toBe(0);
    expect(getContextItemIndex('.child', '.parent', items[5])).toBe(5);
    expect(getContextItemIndex('.child', '.parent', nestedItem)).toBe(10);
  });
});
