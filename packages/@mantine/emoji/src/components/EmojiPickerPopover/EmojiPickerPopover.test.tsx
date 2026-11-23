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
    grinning: {
      id: 'grinning',
      name: 'Grinning Face',
      keywords: ['happy'],
      emoji: '😀',
      skins: ['😀1', '😀2', '😀3', '😀4', '😀5'],
    },
  },
};

const popoverProps = { withinPortal: false, transitionProps: { duration: 0 } };

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

  it('opens and closes on target click in uncontrolled mode', async () => {
    const spy = jest.fn();
    const targetClick = jest.fn();
    const { getByText, queryByRole } = render(
      <EmojiPickerPopover data={testData} popoverProps={popoverProps} onOpenedChange={spy}>
        <button type="button" onClick={targetClick}>
          Open
        </button>
      </EmojiPickerPopover>
    );
    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).toBeInTheDocument();
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(targetClick).toHaveBeenCalledTimes(1);

    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).not.toBeInTheDocument();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('closes on emoji select in uncontrolled mode', async () => {
    const { getByText, queryByRole, container } = render(
      <EmojiPickerPopover data={testData} popoverProps={popoverProps}>
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).toBeInTheDocument();
    await userEvent.click(container.querySelector('[aria-label="Grinning Face"]')!);
    expect(queryByRole('grid')).not.toBeInTheDocument();
  });

  it('closes on Escape in uncontrolled mode and can be reopened', async () => {
    const { getByText, queryByRole } = render(
      <EmojiPickerPopover data={testData} popoverProps={popoverProps}>
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(queryByRole('grid')).not.toBeInTheDocument();
    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).toBeInTheDocument();
  });

  it('keeps internal opened state when opened props are passed through popoverProps', async () => {
    const onChange = jest.fn();
    const onOpenedChange = jest.fn();
    const { getByText, queryByRole } = render(
      <div>
        <EmojiPickerPopover
          data={testData}
          popoverProps={{ ...popoverProps, onChange, opened: true } as any}
          onOpenedChange={onOpenedChange}
        >
          <button type="button">Open</button>
        </EmojiPickerPopover>
        <span>outside</span>
      </div>
    );
    await userEvent.click(getByText('Open'));
    expect(queryByRole('grid')).toBeInTheDocument();
    await userEvent.click(getByText('outside'));
    expect(queryByRole('grid')).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(onOpenedChange).toHaveBeenLastCalledWith(false);

    await userEvent.click(getByText('Open'));
    await userEvent.keyboard('{Escape}');
    expect(queryByRole('grid')).not.toBeInTheDocument();
  });

  it('closes on outside click in controlled mode', async () => {
    const spy = jest.fn();
    const { getByText } = render(
      <div>
        <span>outside</span>
        <EmojiPickerPopover
          data={testData}
          opened
          onOpenedChange={spy}
          popoverProps={{ ...popoverProps, trapFocus: false }}
        >
          <button type="button">Open</button>
        </EmojiPickerPopover>
      </div>
    );
    await userEvent.click(getByText('outside'));
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('keeps uncontrolled skin tone when the dropdown is reopened', async () => {
    const { getByText, container } = render(
      <EmojiPickerPopover data={testData} popoverProps={popoverProps} closeOnSelect>
        <button type="button">Open</button>
      </EmojiPickerPopover>
    );
    await userEvent.click(getByText('Open'));
    await userEvent.click(container.querySelector('[aria-label="Skin tone"]')!);
    await userEvent.click(container.querySelector('[aria-label="Dark skin tone"]')!);
    await userEvent.click(getByText('Open'));
    await userEvent.click(getByText('Open'));
    expect(container.querySelector('[aria-label="Grinning Face"]')).toHaveTextContent('😀5');
  });
});
