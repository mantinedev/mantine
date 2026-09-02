import { render, userEvent } from '@mantine-tests/core';
import { EmojiPickerPopover } from './EmojiPickerPopover';

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

/**
 * Fixtures are written without type annotations on purpose: `esbuild-jest` runs an extra
 * Babel pass to hoist `jest.mock`, and that pass has no TypeScript preset, so an imported
 * binding referenced from a type annotation fails to transform in any file that calls
 * `jest.mock`. The fixtures are still checked against the component props where they are used.
 */
const testData = {
  categories: [{ id: 'people', label: 'Smileys & People', emojis: ['grinning'] }],
  emojis: {
    grinning: { id: 'grinning', name: 'Grinning Face', keywords: ['happy'], emoji: '😀' },
  },
};

describe('@mantine/emoji/EmojiPickerPopover', () => {
  it('renders target and hides picker by default', () => {
    const { getByText, queryByRole } = render(
      <EmojiPickerPopover
        data={testData}
        popoverProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      >
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    expect(getByText('Open')).toBeInTheDocument();
    expect(queryByRole('grid')).not.toBeInTheDocument();
  });

  it('shows picker when opened is true', () => {
    const { queryByRole } = render(
      <EmojiPickerPopover
        data={testData}
        opened
        popoverProps={{ withinPortal: false, transitionProps: { duration: 0 }, trapFocus: false }}
      >
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    expect(queryByRole('grid')).toBeInTheDocument();
  });

  it('calls onEmojiSelect and closes on selection', async () => {
    const selectSpy = jest.fn();
    const changeSpy = jest.fn();
    const { container } = render(
      <EmojiPickerPopover
        data={testData}
        opened
        onEmojiSelect={selectSpy}
        onOpenedChange={changeSpy}
        popoverProps={{ withinPortal: false, transitionProps: { duration: 0 }, trapFocus: false }}
      >
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    const emojiButton = container.querySelector('[aria-label="Grinning Face"]');
    await userEvent.click(emojiButton!);
    expect(selectSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(false);
  });
});
