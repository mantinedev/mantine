import { useState } from 'react';
import { render, screen, userEvent, within } from '@test-utils';
import { NaturalDateInput } from './NaturalDateInput';

// Wednesday, October 28, 2026, noon (local time)
const NOW = new Date(2026, 9, 28, 12, 0);

function DueDateField({ initialValue = null }: { initialValue?: Date | null }) {
  const [value, setValue] = useState<Date | null>(initialValue);
  return (
    <>
      <NaturalDateInput label="Due date" value={value} onChange={setValue} />
      <p>Value: {value ? value.toISOString() : 'null'}</p>
    </>
  );
}

function setup(initialValue?: Date | null) {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(<DueDateField initialValue={initialValue} />);
  return { user, input: screen.getByRole('combobox', { name: 'Due date' }) };
}

function expectValue(date: Date | null) {
  expect(screen.getByText(`Value: ${date ? date.toISOString() : 'null'}`)).toBeInTheDocument();
}

function optionLabels() {
  return screen.getAllByRole('option').map((option) => option.firstChild?.textContent);
}

beforeEach(() => {
  jest.useFakeTimers({ now: NOW, advanceTimers: true });
});

afterEach(() => {
  jest.useRealTimers();
});

describe('suggestions', () => {
  it('shows presets when the empty input is focused', async () => {
    const { user, input } = setup();
    await user.click(input);
    expect(optionLabels()).toEqual(['Today', 'Tomorrow', 'Next week', 'End of month']);
  });

  it('completes the typed text', async () => {
    const { user, input } = setup();
    await user.type(input, 'ne');
    expect(optionLabels().slice(0, 3)).toEqual(['Next week', 'Next month', 'Next Monday']);
  });

  it('suggests pm and am times for a weekday and an hour', async () => {
    const { user, input } = setup();
    await user.type(input, 'fri 5');
    expect(optionLabels().slice(0, 2)).toEqual(['Friday at 5pm', 'Friday at 5am']);
  });

  it('shows the resolved date and how far away it is in every suggestion', async () => {
    const { user, input } = setup();
    await user.type(input, 'fri 5');
    const option = screen.getByRole('option', { name: /^Friday at 5pm/ });
    expect(within(option).getByText('Fri, Oct 30, 5:00 PM · in 2 days')).toBeInTheDocument();
  });

  it('keeps the presets casing in filtered suggestions', async () => {
    const { user, input } = setup();
    await user.type(input, 'tom');
    expect(optionLabels()[0]).toBe('Tomorrow');
  });

  it('shows at most five suggestions', async () => {
    const { user, input } = setup();
    await user.type(input, '3');
    expect(screen.getAllByRole('option')).toHaveLength(5);
  });

  it('shows a message instead of suggestions for text that is not understood', async () => {
    const { user, input } = setup();
    await user.type(input, 'qwerty');
    expect(screen.getByText('Could not understand “qwerty”')).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});

describe('picking a date', () => {
  it('sets the value when a suggestion is clicked', async () => {
    const { user, input } = setup();
    await user.type(input, 'fri 5');
    await user.click(screen.getByRole('option', { name: /^Friday at 5pm/ }));
    expectValue(new Date(2026, 9, 30, 17, 0));
  });

  it('shows the formatted date in the input after a pick', async () => {
    const { user, input } = setup();
    await user.type(input, 'fri 5');
    await user.click(screen.getByRole('option', { name: /^Friday at 5pm/ }));
    expect(input).toHaveValue('Fri, Oct 30, 5:00 PM');
  });

  it('sets a preset picked with the keyboard', async () => {
    const { user, input } = setup();
    await user.click(input);
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expectValue(new Date(2026, 9, 29, 23, 59, 59, 999));
  });

  it('sets the value when Enter is pressed on text that is understood', async () => {
    const { user, input } = setup();
    await user.type(input, 'next friday at 3pm{Enter}');
    expectValue(new Date(2026, 10, 6, 15, 0));
  });

  it('shows a date without a time without the time', async () => {
    const { user, input } = setup();
    await user.type(input, 'mar 5{Enter}');
    expect(input).toHaveValue('Fri, Mar 5, 2027');
  });

  it('keeps the value when Enter is pressed on text that is not understood', async () => {
    const { user, input } = setup();
    await user.type(input, 'qwerty{Enter}');
    expectValue(null);
  });

  it('selects the text of an input with a value on focus', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(input);
    const element = input as HTMLInputElement;
    expect([element.selectionStart, element.selectionEnd]).toEqual([0, element.value.length]);
  });

  it('replaces the value when the user types over it', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(input);
    await user.keyboard('tomorrow{Enter}');
    expectValue(new Date(2026, 9, 29, 23, 59, 59, 999));
  });

  it('shows presets when an input with a value is focused', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(input);
    expect(optionLabels()).toEqual(['Today', 'Tomorrow', 'Next week', 'End of month']);
  });
});

describe('blur', () => {
  it('shows an error for text that is not understood', async () => {
    const { user, input } = setup();
    await user.type(input, 'qwerty');
    await user.tab();
    expect(input).toHaveAccessibleDescription('Could not understand “qwerty”');
  });

  it('keeps the previous value when the text is not understood', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(input);
    await user.keyboard('qwerty');
    await user.tab();
    expectValue(new Date(2026, 9, 30, 17, 0));
  });

  it('clears the value when the text is empty', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.clear(input);
    await user.tab();
    expectValue(null);
  });

  it('sets the value when the text is understood', async () => {
    const { user, input } = setup();
    await user.type(input, 'in 2 weeks');
    await user.tab();
    expectValue(new Date(2026, 10, 11, 23, 59, 59, 999));
  });

  it('keeps the value when the formatted text is left unchanged', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(input);
    await user.tab();
    expect(input).toHaveValue('Fri, Oct 30, 5:00 PM');
  });
});

describe('value', () => {
  it('shows the value from props formatted in the input', () => {
    const { input } = setup(new Date(2027, 2, 5, 9, 30));
    expect(input).toHaveValue('Fri, Mar 5, 2027, 9:30 AM');
  });

  it('warns about a date in the past', async () => {
    const { user, input } = setup();
    await user.type(input, 'yesterday{Enter}');
    expect(screen.getByText('This date is in the past')).toBeInTheDocument();
  });

  it('does not warn about a date later today', async () => {
    const { user, input } = setup();
    await user.type(input, 'today{Enter}');
    expect(screen.queryByText('This date is in the past')).not.toBeInTheDocument();
  });

  it('clears the value with the clear button', async () => {
    const { user, input } = setup(new Date(2026, 9, 30, 17, 0));
    await user.click(screen.getByRole('button', { name: 'Clear date' }));
    expectValue(null);
    expect(input).toHaveValue('');
  });
});
