import { act, fireEvent, waitFor } from '@testing-library/react';
import { Input } from '@mantine/core';
import { render, userEvent } from '@mantine-tests/core';
import { EmojiPicker } from './EmojiPicker';

const mockScrollToIndex = jest.fn();

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
    scrollToIndex: (...args: any[]) => mockScrollToIndex(...args),
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

const e = (id: string) => ({ id, name: id, keywords: [id], emoji: '😀' });

const boundaryData = {
  categories: [
    { id: 'people', label: 'People', emojis: ['a0', 'a1', 'a2', 'a3'] },
    { id: 'nature', label: 'Nature', emojis: ['b0', 'b1', 'b2', 'b3', 'b4', 'b5'] },
  ],
  emojis: Object.fromEntries(
    ['a0', 'a1', 'a2', 'a3', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5'].map((id) => [id, e(id)])
  ),
};

function getGrid(container: HTMLElement) {
  return container.querySelector<HTMLElement>('[role="grid"]')!;
}

function getActiveEmoji(container: HTMLElement) {
  return container.querySelector('[data-focused]')?.getAttribute('aria-label');
}

function press(element: HTMLElement, key: string, times = 1) {
  for (let i = 0; i < times; i += 1) {
    fireEvent.keyDown(element, { key });
  }
}

function pointerOver(element: Element, x: number) {
  fireEvent.mouseMove(element, { clientX: x, clientY: 10 });
}

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
    expect(container.querySelector('.mantine-EmojiPicker-preview')).not.toBeInTheDocument();
  });

  it('labels the preview with labels.preview and does not announce hover changes', () => {
    const { container } = render(
      <EmojiPicker {...defaultProps} labels={{ preview: 'Vorschau' }} />
    );
    const preview = container.querySelector('.mantine-EmojiPicker-preview')!;
    expect(preview).toHaveAttribute('role', 'group');
    expect(preview).toHaveAttribute('aria-label', 'Vorschau');
    expect(container.querySelector('[aria-live]')).not.toBeInTheDocument();
  });

  it('applies category label overrides', () => {
    const { getByText, queryByText } = render(
      <EmojiPicker {...defaultProps} categoryLabels={{ people: 'Custom People' }} />
    );
    expect(getByText('Custom People')).toBeInTheDocument();
    expect(queryByText('Smileys & People')).not.toBeInTheDocument();
  });

  it('keeps the column when moving down across a category boundary', () => {
    const { container } = render(<EmojiPicker data={boundaryData} columns={3} />);
    const grid = getGrid(container);
    press(grid, 'ArrowRight');
    expect(getActiveEmoji(container)).toBe('a0');
    press(grid, 'ArrowRight', 3);
    expect(getActiveEmoji(container)).toBe('a3');
    press(grid, 'ArrowDown');
    expect(getActiveEmoji(container)).toBe('b0');
    press(grid, 'ArrowRight', 2);
    press(grid, 'ArrowUp');
    expect(getActiveEmoji(container)).toBe('a3');
  });

  it('continues keyboard navigation from the hovered emoji', () => {
    const { container, getByLabelText } = render(<EmojiPicker data={boundaryData} columns={3} />);
    const grid = getGrid(container);
    press(grid, 'ArrowDown', 3);
    pointerOver(getByLabelText('b4'), 5);
    expect(getActiveEmoji(container)).toBeUndefined();
    press(grid, 'ArrowRight');
    expect(getActiveEmoji(container)).toBe('b5');
  });

  it('ignores pointer events without pointer movement', () => {
    const { container, getByLabelText } = render(<EmojiPicker data={boundaryData} columns={3} />);
    const grid = getGrid(container);
    pointerOver(getByLabelText('a1'), 5);
    pointerOver(getByLabelText('b4'), 5);
    press(grid, 'ArrowRight');
    expect(getActiveEmoji(container)).toBe('a2');
  });

  it('selects the clicked emoji with Enter after a click', async () => {
    const spy = jest.fn();
    const { container, getByLabelText } = render(
      <EmojiPicker data={boundaryData} columns={3} onEmojiSelect={spy} />
    );
    const grid = getGrid(container);
    press(grid, 'ArrowDown');
    await userEvent.click(getByLabelText('b1'));
    expect(spy).toHaveBeenLastCalledWith(expect.objectContaining({ id: 'b1' }));
    press(grid, 'Enter');
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(expect.objectContaining({ id: 'b1' }));
  });

  it('does not move focus to the emoji button on click', async () => {
    const { container, getByLabelText } = render(<EmojiPicker data={boundaryData} />);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    search.focus();
    await userEvent.click(getByLabelText('a2'));
    expect(search).toHaveFocus();
  });

  it('selects the first search result with Enter after the query changes', async () => {
    const spy = jest.fn();
    const { container } = render(<EmojiPicker data={boundaryData} onEmojiSelect={spy} />);
    const grid = getGrid(container);
    press(grid, 'ArrowRight', 6);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'b');
    press(search, 'Enter');
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ id: 'b0' }));
  });

  it('selects the first search result with Enter after returning to an earlier query', async () => {
    const spy = jest.fn();
    const { container } = render(<EmojiPicker data={boundaryData} onEmojiSelect={spy} />);
    const grid = getGrid(container);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'b');
    press(grid, 'ArrowRight', 4);
    expect(getActiveEmoji(container)).toBe('b3');
    await userEvent.type(search, '{Backspace}b');
    press(search, 'Enter');
    expect(spy).toHaveBeenLastCalledWith(expect.objectContaining({ id: 'b0' }));
  });

  it('drops the hovered emoji when the query changes and returns to an earlier value', async () => {
    const spy = jest.fn();
    const { container, getByLabelText } = render(
      <EmojiPicker data={boundaryData} onEmojiSelect={spy} />
    );
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'b');
    pointerOver(getByLabelText('b4'), 5);
    pointerOver(getByLabelText('b4'), 8);
    await userEvent.type(search, 'x{Backspace}');
    press(search, 'Enter');
    expect(spy).toHaveBeenLastCalledWith(expect.objectContaining({ id: 'b0' }));
  });

  it('ignores Enter in the search input during IME composition', () => {
    const spy = jest.fn();
    const { container } = render(<EmojiPicker data={boundaryData} onEmojiSelect={spy} />);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    fireEvent.keyDown(search, { key: 'Enter', isComposing: true });
    fireEvent.keyDown(search, { key: 'ArrowDown', isComposing: true });
    expect(spy).not.toHaveBeenCalled();
    expect(getActiveEmoji(container)).toBeUndefined();
    press(search, 'Enter');
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ id: 'a0' }));
  });

  it('selects the only search result with Enter', async () => {
    const spy = jest.fn();
    const { container } = render(<EmojiPicker data={boundaryData} onEmojiSelect={spy} />);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'b3');
    press(search, 'ArrowDown');
    press(search, 'ArrowDown');
    press(search, 'Enter');
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ id: 'b3' }));
  });

  it('uses per-instance ids for aria-activedescendant', () => {
    const { container } = render(
      <>
        <EmojiPicker data={boundaryData} />
        <EmojiPicker data={boundaryData} />
      </>
    );
    const grids = container.querySelectorAll<HTMLElement>('[role="grid"]');
    press(grids[0], 'ArrowRight');
    press(grids[1], 'ArrowRight');
    const first = grids[0].getAttribute('aria-activedescendant')!;
    const second = grids[1].getAttribute('aria-activedescendant')!;
    expect(first).not.toBe(second);
    expect(document.getElementById(first)).toHaveAttribute('aria-label', 'a0');
    expect(grids[0].contains(document.getElementById(first))).toBe(true);
    expect(grids[1].contains(document.getElementById(second))).toBe(true);
    expect(new Set(Array.from(container.querySelectorAll('[id]'), (el) => el.id)).size).toBe(
      container.querySelectorAll('[id]').length
    );
  });

  it('exposes the active emoji on the search input while navigating from it', async () => {
    const { container } = render(<EmojiPicker data={boundaryData} />);
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    expect(search).not.toHaveAttribute('aria-activedescendant');
    expect(document.getElementById(search.getAttribute('aria-controls')!)).toBe(getGrid(container));

    await userEvent.type(search, 'b');
    press(search, 'ArrowDown');
    press(search, 'ArrowDown');
    const activeId = search.getAttribute('aria-activedescendant')!;
    expect(activeId).toBe(getGrid(container).getAttribute('aria-activedescendant'));
    expect(document.getElementById(activeId)).toHaveAttribute('role', 'gridcell');
    expect(document.getElementById(activeId)).toHaveAttribute('aria-label', 'b0');
    expect(document.getElementById(search.getAttribute('aria-controls')!)).toHaveAttribute(
      'role',
      'grid'
    );
  });

  it('keeps grid aria-activedescendant without the search input', () => {
    const { container } = render(<EmojiPicker data={boundaryData} withSearch={false} />);
    const grid = getGrid(container);
    press(grid, 'ArrowRight');
    const activeId = grid.getAttribute('aria-activedescendant')!;
    expect(document.getElementById(activeId)).toHaveAttribute('role', 'gridcell');
    expect(container.querySelector('[role="searchbox"]')).toBeNull();
  });

  it('does not set aria-activedescendant before keyboard navigation', () => {
    const { container } = render(<EmojiPicker data={boundaryData} />);
    expect(getGrid(container)).not.toHaveAttribute('aria-activedescendant');
  });

  it('moves focus to search on Escape in the grid', () => {
    const { container } = render(<EmojiPicker data={boundaryData} />);
    const grid = getGrid(container);
    grid.focus();
    press(grid, 'Escape');
    expect(container.querySelector('[role="searchbox"]')).toHaveFocus();
  });

  it('does not steal focus on Escape handled by an outer layer', () => {
    const { container, getByText } = render(
      <div
        onKeyDownCapture={(event) => {
          if (event.key === 'Escape') {
            getByText('trigger').focus();
          }
        }}
      >
        <button type="button">trigger</button>
        <EmojiPicker data={boundaryData} />
      </div>
    );
    const grid = getGrid(container);
    grid.focus();
    press(grid, 'Escape');
    expect(getByText('trigger')).toHaveFocus();
  });

  it('renders the grid as a single tab stop on the scroll viewport', () => {
    const { container } = render(<EmojiPicker data={boundaryData} />);
    const grid = getGrid(container);
    expect(grid).toHaveClass('mantine-ScrollArea-viewport');
    expect(grid).toHaveAttribute('tabindex', '0');
    expect(grid).toHaveAttribute('aria-label', 'Emojis');
    const content = container.querySelector('.mantine-EmojiPicker-content')!;
    expect(content.querySelectorAll('[tabindex="0"]')).toHaveLength(1);
    expect(content).not.toHaveAttribute('tabindex');
    expect(content.querySelectorAll('[role="columnheader"]')).toHaveLength(2);
  });

  it('clears search with the clear button and keeps focus in the search input', async () => {
    const { container, getByLabelText } = render(
      <EmojiPicker data={boundaryData} labels={{ clearSearch: 'Suche leeren' }} />
    );
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'b');
    await userEvent.click(getByLabelText('Suche leeren'));
    expect(search).toHaveValue('');
    expect(search).toHaveFocus();
  });

  it('aligns the category header to the start on category nav click', async () => {
    mockScrollToIndex.mockClear();
    const { container, getByLabelText } = render(<EmojiPicker data={boundaryData} columns={3} />);
    await userEvent.click(getByLabelText('Nature'));
    expect(mockScrollToIndex).toHaveBeenLastCalledWith(3, { align: 'start' });
    press(getGrid(container), 'ArrowDown');
    expect(getActiveEmoji(container)).toBe('b0');
    expect(mockScrollToIndex).toHaveBeenLastCalledWith(4, { align: 'auto' });
  });

  it('applies category label overrides to category nav buttons', () => {
    const { container } = render(
      <EmojiPicker {...defaultProps} categoryLabels={{ people: 'Custom People' }} />
    );
    expect(container.querySelector('button[aria-label="Custom People"]')).toHaveAttribute(
      'title',
      'Custom People'
    );
  });

  it('does not render nav buttons for empty categories', () => {
    const { container } = render(
      <EmojiPicker
        data={{
          ...testData,
          categories: [{ id: 'frequent', label: 'Frequent', emojis: [] }, ...testData.categories],
        }}
      />
    );
    expect(container.querySelector('button[aria-label="Frequent"]')).not.toBeInTheDocument();
  });

  it('derives emoji font size from emojiSize', () => {
    const { container } = render(<EmojiPicker {...defaultProps} emojiSize={48} />);
    const root = container.querySelector<HTMLElement>('.mantine-EmojiPicker-root')!;
    expect(root.style.getPropertyValue('--ep-emoji-fz')).toBe(
      'calc(1.8125rem * var(--mantine-scale))'
    );
  });

  it('renders empty search content inside the scroll area', async () => {
    const { container } = render(
      <EmojiPicker data={boundaryData} scrollAreaProps={{ style: { height: 500 } }} />
    );
    const search = container.querySelector<HTMLInputElement>('[role="searchbox"]')!;
    await userEvent.type(search, 'zzz');
    const empty = container.querySelector('.mantine-EmojiPicker-empty')!;
    expect(empty).toHaveTextContent('No emojis found');
    const content = container.querySelector<HTMLElement>('.mantine-EmojiPicker-content')!;
    expect(content.contains(empty)).toBe(true);
    expect(content.style.height).toBe('500px');
    expect(container.querySelector('[role="grid"]')).not.toBeInTheDocument();
  });

  it('does not consume an outer Input.Wrapper context in the search input', () => {
    const { container } = render(
      <Input.Wrapper label="Label" description="Description" id="outer">
        <EmojiPicker data={boundaryData} />
      </Input.Wrapper>
    );
    const search = container.querySelector('[role="searchbox"]')!;
    expect(search).not.toHaveAttribute('id', 'outer');
    expect(search).not.toHaveAttribute('aria-describedby');
  });

  it('moves focus into the skin tone dropdown and returns it to the trigger after picking', async () => {
    const spy = jest.fn();
    const { getByLabelText } = render(<EmojiPicker {...defaultProps} onSkinToneChange={spy} />);
    const trigger = getByLabelText('Skin tone');
    await userEvent.click(trigger);
    await waitFor(() => expect(getByLabelText('Dark skin tone')).toBeInTheDocument());
    await waitFor(() =>
      expect(document.activeElement?.closest('.mantine-Popover-dropdown')).not.toBeNull()
    );
    await userEvent.click(getByLabelText('Dark skin tone'));
    expect(spy).toHaveBeenCalledWith(5);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    });
    expect(getByLabelText('Skin tone')).toHaveFocus();
  });

  it('focuses the selected skin tone when the skin tone dropdown opens', async () => {
    const { getByLabelText } = render(<EmojiPicker {...defaultProps} defaultSkinTone={5} />);
    await userEvent.click(getByLabelText('Skin tone'));
    await waitFor(() => expect(getByLabelText('Dark skin tone')).toHaveFocus());
    expect(getByLabelText('Dark skin tone')).toHaveAttribute('aria-pressed', 'true');
  });
});
