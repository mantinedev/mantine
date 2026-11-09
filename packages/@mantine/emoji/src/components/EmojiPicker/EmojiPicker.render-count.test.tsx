import { fireEvent } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { EmojiPicker } from './EmojiPicker';

const mockRenderCount = { current: 0 };

jest.mock('@tanstack/react-virtual', () => ({
  useVirtualizer: ({ count, estimateSize }: any) => ({
    getTotalSize: () => count * 36,
    getVirtualItems: () =>
      Array.from({ length: count }, (_, i) => ({
        index: i,
        start: i * estimateSize(i),
        size: estimateSize(i),
        key: i,
      })),
    scrollToIndex: () => {},
    measure: () => {},
  }),
}));

jest.mock('@mantine/core', () => {
  const actual = jest.requireActual('@mantine/core');
  const React = jest.requireActual('react');
  const CountingButton = React.forwardRef((props: any, ref: any) => {
    if (props.role === 'gridcell') {
      mockRenderCount.current += 1;
    }
    return React.createElement(actual.UnstyledButton, { ...props, ref });
  });
  return { ...actual, UnstyledButton: CountingButton };
});

const ids = Array.from({ length: 90 }, (_, i) => `e${i}`);

const data = {
  categories: [{ id: 'people', label: 'People', emojis: ids }],
  emojis: Object.fromEntries(ids.map((id) => [id, { id, name: id, keywords: [], emoji: '😀' }])),
};

describe('@mantine/emoji/EmojiPicker render count', () => {
  it('re-renders O(1) emoji buttons on hover and keyboard navigation', () => {
    const { container, getByLabelText } = render(<EmojiPicker data={data} />);
    const grid = container.querySelector<HTMLElement>('[role="grid"]')!;

    mockRenderCount.current = 0;
    fireEvent.mouseMove(getByLabelText('e10'), { clientX: 1, clientY: 1 });
    fireEvent.mouseMove(getByLabelText('e11'), { clientX: 2, clientY: 1 });
    expect(container.querySelector('.mantine-EmojiPicker-previewName')).toHaveTextContent('e11');
    expect(mockRenderCount.current).toBe(0);

    fireEvent.keyDown(grid, { key: 'ArrowRight' });
    fireEvent.keyDown(grid, { key: 'ArrowRight' });
    expect(mockRenderCount.current).toBeLessThanOrEqual(3);
  });
});
