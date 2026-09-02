import { render, userEvent } from '@mantine-tests/core';
import { EmojiPicker } from './EmojiPicker';

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
  categories: [
    { id: 'people', label: 'Smileys & People', emojis: ['grinning', 'thumbsup'] },
    { id: 'nature', label: 'Animals & Nature', emojis: ['dog'] },
  ],
  emojis: {
    grinning: { id: 'grinning', name: 'Grinning Face', keywords: ['happy', 'smile'], emoji: '😀' },
    thumbsup: {
      id: 'thumbsup',
      name: 'Thumbs Up',
      keywords: ['like'],
      emoji: '👍',
      skins: ['👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'],
    },
    dog: { id: 'dog', name: 'Dog Face', keywords: ['puppy'], emoji: '🐶' },
  },
};

const defaultProps = {
  data: testData,
};

describe('@mantine/emoji/EmojiPicker', () => {
  it('renders emoji grid', () => {
    const { container } = render(<EmojiPicker {...defaultProps} />);
    const emojiButtons = container.querySelectorAll('[role="gridcell"]');
    expect(emojiButtons.length).toBe(3);
  });

  it('renders category labels', () => {
    const { getByText } = render(<EmojiPicker {...defaultProps} />);
    expect(getByText('Smileys & People')).toBeInTheDocument();
    expect(getByText('Animals & Nature')).toBeInTheDocument();
  });

  it('calls onEmojiSelect when emoji is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<EmojiPicker {...defaultProps} onEmojiSelect={spy} />);
    const emojiButton = container.querySelector('[aria-label="Grinning Face"]');
    await userEvent.click(emojiButton!);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ id: 'grinning', emoji: '😀' }));
  });

  it('hides search when withSearch is false', () => {
    const { container } = render(<EmojiPicker {...defaultProps} withSearch={false} />);
    expect(container.querySelector('[role="searchbox"]')).not.toBeInTheDocument();
  });

  it('hides category nav when withCategoryNav is false', () => {
    const { container } = render(<EmojiPicker {...defaultProps} withCategoryNav={false} />);
    expect(container.querySelector('button[title="Smileys & People"]')).not.toBeInTheDocument();
  });

  it('shows category nav by default', () => {
    const { container } = render(<EmojiPicker {...defaultProps} />);
    expect(container.querySelector('button[title="Smileys & People"]')).toBeInTheDocument();
  });

  it('hides preview when withPreview is false', () => {
    const { container } = render(
      <EmojiPicker {...defaultProps} withPreview={false} withSkinToneSelector={false} />
    );
    expect(container.querySelector('[aria-live="polite"]')).not.toBeInTheDocument();
  });

  it('applies category label overrides', () => {
    const { getByText, queryByText } = render(
      <EmojiPicker {...defaultProps} categoryLabels={{ people: 'Custom People' }} />
    );
    expect(getByText('Custom People')).toBeInTheDocument();
    expect(queryByText('Smileys & People')).not.toBeInTheDocument();
  });
});
