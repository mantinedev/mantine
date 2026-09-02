import { render, userEvent } from '@mantine-tests/core';
import { EmojiPickerInput } from './EmojiPickerInput';

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

describe('@mantine/emoji/EmojiPickerInput', () => {
  it('renders input with placeholder', () => {
    const { container } = render(<EmojiPickerInput data={testData} placeholder="Pick emoji" />);
    expect(container.querySelector('button[type="button"]')).toHaveTextContent('Pick emoji');
  });

  it('displays selected emoji and name when value is set', () => {
    const { container } = render(<EmojiPickerInput data={testData} value="grinning" />);
    const button = container.querySelector('button[type="button"]');
    expect(button).toHaveTextContent('😀');
    expect(button).toHaveTextContent('Grinning Face');
  });

  it('calls onChange with emoji id on selection', async () => {
    const spy = jest.fn();
    const { container } = render(
      <EmojiPickerInput
        data={testData}
        onChange={spy}
        popoverProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    const triggerButton = container.querySelector('button[type="button"]')!;
    await userEvent.click(triggerButton);
    const emojiButton = container.querySelector('[aria-label="Grinning Face"]');
    await userEvent.click(emojiButton!);
    expect(spy).toHaveBeenCalledWith('grinning');
  });

  it('renders label and description', () => {
    const { container } = render(
      <EmojiPickerInput data={testData} label="My label" description="My description" />
    );
    expect(container).toHaveTextContent('My label');
    expect(container).toHaveTextContent('My description');
  });

  it('renders error state', () => {
    const { container } = render(<EmojiPickerInput data={testData} error="Required" />);
    expect(container).toHaveTextContent('Required');
  });
});
