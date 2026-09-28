import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
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
  categories: [{ id: 'people', label: 'Smileys & People', emojis: ['grinning', 'wave'] }],
  emojis: {
    grinning: { id: 'grinning', name: 'Grinning Face', keywords: ['happy'], emoji: '😀' },
    wave: {
      id: 'wave',
      name: 'Waving Hand',
      keywords: ['hello'],
      emoji: '👋',
      skins: ['👋1', '👋2', '👋3', '👋4', '👋5'],
    },
  },
};

const popoverProps = { withinPortal: false, transitionProps: { duration: 0 } };

const getTrigger = (container: HTMLElement) =>
  container.querySelector<HTMLButtonElement>('button[type="button"]')!;

function ExternalValue({ initialValue }: { initialValue: string | null }) {
  const [value, setValue] = useState<string | null>(initialValue);
  return (
    <>
      <EmojiPickerInput
        data={testData}
        value={value}
        onChange={setValue}
        popoverProps={popoverProps}
        pickerProps={{ defaultSkinTone: 2 }}
      />
      <button type="button" onClick={() => setValue('grinning')}>
        set-grinning
      </button>
      <button type="button" onClick={() => setValue(null)}>
        reset
      </button>
      <button type="button" onClick={() => setValue('wave')}>
        set-wave
      </button>
      <button type="button" onClick={() => setValue('unknown')}>
        set-unknown
      </button>
    </>
  );
}

function AsyncValue({ initialValue }: { initialValue: string | null }) {
  const [value, setValue] = useState<string | null>(initialValue);
  return (
    <EmojiPickerInput
      data={testData}
      value={value}
      onChange={(next) => setTimeout(() => setValue(next), 0)}
      popoverProps={popoverProps}
      pickerProps={{ defaultSkinTone: 2 }}
    />
  );
}

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

  it('displays the emoji of the current value after an external value change', async () => {
    const { container } = render(<ExternalValue initialValue={null} />);
    await userEvent.click(getTrigger(container));
    await userEvent.click(container.querySelector('[aria-label="Waving Hand"]')!);
    expect(getTrigger(container)).toHaveTextContent('👋2');

    await userEvent.click(screen.getByText('set-grinning'));
    expect(getTrigger(container)).toHaveTextContent('😀');
    expect(getTrigger(container)).toHaveTextContent('Grinning Face');

    await userEvent.click(screen.getByText('set-wave'));
    expect(getTrigger(container)).toHaveTextContent('👋Waving Hand');

    await userEvent.click(screen.getByText('set-unknown'));
    expect(getTrigger(container)).not.toHaveTextContent('👋');

    await userEvent.click(screen.getByText('reset'));
    expect(getTrigger(container)).not.toHaveTextContent('👋');
  });

  it.each([null, 'grinning'])(
    'keeps the skin tone when a controlled value is committed asynchronously (initial %s)',
    async (initialValue) => {
      const { container } = render(<AsyncValue initialValue={initialValue} />);
      await userEvent.click(getTrigger(container));
      await userEvent.click(container.querySelector('[aria-label="Waving Hand"]')!);
      await act(() => new Promise((resolve) => setTimeout(resolve, 10)));
      expect(getTrigger(container)).toHaveTextContent('👋2Waving Hand');
    }
  );

  it('displays the toned emoji in uncontrolled mode', async () => {
    const { container } = render(
      <EmojiPickerInput
        data={testData}
        popoverProps={popoverProps}
        pickerProps={{ defaultSkinTone: 4 }}
      />
    );
    await userEvent.click(getTrigger(container));
    await userEvent.click(container.querySelector('[aria-label="Waving Hand"]')!);
    expect(getTrigger(container)).toHaveTextContent('👋4Waving Hand');
  });

  it('keeps internal opened state when opened props are passed through popoverProps', async () => {
    const onChange = jest.fn();
    const onOpenedChange = jest.fn();
    const { container, queryByRole } = render(
      <div>
        <EmojiPickerInput
          data={testData}
          popoverProps={{ ...popoverProps, onChange, opened: true } as any}
          onOpenedChange={onOpenedChange}
        />
        <span>outside</span>
      </div>
    );
    await userEvent.click(getTrigger(container));
    expect(queryByRole('grid')).toBeInTheDocument();
    await userEvent.click(screen.getByText('outside'));
    expect(queryByRole('grid')).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(onOpenedChange).toHaveBeenLastCalledWith(false);

    await userEvent.click(getTrigger(container));
    await userEvent.keyboard('{Escape}');
    expect(queryByRole('grid')).not.toBeInTheDocument();
  });

  it.each([
    { name: 'no id', id: undefined, overrides: false },
    { name: 'custom id', id: 'custom-id', overrides: false },
    { name: 'wrapperProps.id and popoverProps.id passed', id: 'custom-id', overrides: true },
  ])('labels the dropdown dialog with the trigger ($name)', async ({ id, overrides }) => {
    const { container } = render(
      <EmojiPickerInput
        data={testData}
        popoverProps={overrides ? ({ ...popoverProps, id: 'popover-id' } as any) : popoverProps}
        wrapperProps={overrides ? ({ id: 'wrapper-id' } as any) : undefined}
        label="Pick"
        id={id}
      />
    );
    await userEvent.click(getTrigger(container));
    const dialog = container.querySelector('[role="dialog"]')!;
    const labelledBy = dialog.getAttribute('aria-labelledby');
    expect(labelledBy).toBe(getTrigger(container).id);
    expect(labelledBy).toBe(id ?? labelledBy);
    expect(document.getElementById(labelledBy!)).toBe(getTrigger(container));
    expect(getTrigger(container).getAttribute('aria-controls')).toBe(dialog.id);
    expect(container.querySelector('label')!.getAttribute('for')).toBe(labelledBy);
  });

  it('opens on click in uncontrolled mode and closes on Escape', async () => {
    const spy = jest.fn();
    const { container, queryByRole } = render(
      <EmojiPickerInput data={testData} popoverProps={popoverProps} onOpenedChange={spy} />
    );
    await userEvent.click(getTrigger(container));
    expect(queryByRole('grid')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(queryByRole('grid')).not.toBeInTheDocument();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('keeps uncontrolled skin tone when the dropdown is reopened', async () => {
    const { container } = render(<EmojiPickerInput data={testData} popoverProps={popoverProps} />);
    await userEvent.click(getTrigger(container));
    await userEvent.click(container.querySelector('[aria-label="Skin tone"]')!);
    await userEvent.click(container.querySelector('[aria-label="Dark skin tone"]')!);
    await userEvent.click(getTrigger(container));
    await userEvent.click(getTrigger(container));
    expect(container.querySelector('[aria-label="Waving Hand"]')).toHaveTextContent('👋5');
  });

  it('applies input classNames only to the input element', () => {
    const { container } = render(
      <EmojiPickerInput data={testData} classNames={{ input: 'custom-input' }} />
    );
    expect(container.querySelectorAll('.custom-input')).toHaveLength(1);
    expect(container.querySelectorAll('.mantine-EmojiPickerInput-input')).toHaveLength(1);
    expect(getTrigger(container)).toHaveClass('custom-input');
  });

  it('renders the selected value inside inputValue element', () => {
    const { container } = render(<EmojiPickerInput data={testData} value="grinning" />);
    expect(container.querySelector('.mantine-EmojiPickerInput-inputValue')).toHaveTextContent(
      'Grinning Face'
    );
  });

  it('renders clear button with accessible name and returns focus to the input', async () => {
    const spy = jest.fn();
    const { container } = render(
      <EmojiPickerInput data={testData} defaultValue="grinning" clearable onChange={spy} />
    );
    const clearButton = screen.getByRole('button', { name: 'Clear emoji' });
    await userEvent.click(clearButton);
    expect(spy).toHaveBeenCalledWith(null);
    expect(getTrigger(container)).toHaveFocus();
  });

  it('supports clearButtonProps', () => {
    render(
      <EmojiPickerInput
        data={testData}
        defaultValue="grinning"
        clearable
        clearButtonProps={{ 'aria-label': 'Remove reaction' }}
      />
    );
    expect(screen.getByRole('button', { name: 'Remove reaction' })).toBeInTheDocument();
  });
});
