import { useState } from 'react';
import { render, screen, userEvent, within } from '@test-utils';
import { NaturalDateInput } from './NaturalDateInput';
import { NaturalDateInputDemo } from './NaturalDateInputDemo';

// Monday, October 26, 2026, noon
const NOW = new Date(2026, 9, 26, 12, 0);

function renderInput(initialValue: Date | null = null) {
  const onChange = jest.fn();

  function Controlled() {
    const [value, setValue] = useState(initialValue);
    return (
      <>
        <NaturalDateInput
          label="Due date"
          value={value}
          onChange={(date) => {
            setValue(date);
            onChange(date);
          }}
        />
        <button type="button">Elsewhere</button>
      </>
    );
  }

  render(<Controlled />);
  return { onChange, user: userEvent.setup({ advanceTimers: jest.advanceTimersByTime }) };
}

const field = () => screen.getByRole('combobox', { name: 'Due date' });

/** The first line of every option: the phrase it completes to */
const optionPhrases = () =>
  screen
    .getAllByRole('option')
    .map((option) => within(option).getAllByRole('paragraph')[0].textContent);

beforeEach(() => {
  jest.useFakeTimers({ now: NOW, advanceTimers: true });
});

afterEach(() => {
  jest.useRealTimers();
});

describe('suggestions', () => {
  it('shows presets when the empty input is focused', async () => {
    const { user } = renderInput();
    await user.click(field());

    expect(optionPhrases()).toEqual(['Today', 'Tomorrow', 'Next week', 'End of month']);
  });

  it('completes the typed text', async () => {
    const { user } = renderInput();
    await user.type(field(), 'ne');

    expect(optionPhrases()).toEqual([
      'next week',
      'next month',
      'next monday',
      'next tuesday',
      'next wednesday',
    ]);
  });

  it('shows the date and the distance of each suggestion', async () => {
    const { user } = renderInput();
    await user.type(field(), 'fri 3p');

    const option = screen.getByRole('option', { name: /^friday at 3pm/ });
    expect(within(option).getByText('Fri, Oct 30, 3:00 PM · in 4 days')).toBeInTheDocument();
  });

  it('says when the text is not understood', async () => {
    const { user } = renderInput();
    await user.type(field(), 'soon');

    expect(screen.getByText('Could not understand “soon”')).toBeInTheDocument();
  });
});

describe('value', () => {
  it('sets the picked suggestion', async () => {
    const { user, onChange } = renderInput();
    await user.type(field(), 'fri 3p');
    await user.click(screen.getByRole('option', { name: /^friday at 3pm/ }));

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 9, 30, 15));
  });

  it('shows the formatted date after a suggestion is picked', async () => {
    const { user } = renderInput();
    await user.type(field(), 'fri 3p');
    await user.click(screen.getByRole('option', { name: /^friday at 3pm/ }));

    expect(field()).toHaveValue('Fri, Oct 30, 3:00 PM');
  });

  it('sets a preset', async () => {
    const { user, onChange } = renderInput();
    await user.click(field());
    await user.click(screen.getByRole('option', { name: /^Tomorrow/ }));

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 9, 27, 23, 59, 59, 999));
  });

  it('sets the typed date when Enter is pressed', async () => {
    const { user, onChange } = renderInput();
    await user.type(field(), 'march 5 2027{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(new Date(2027, 2, 5, 23, 59, 59, 999));
  });

  it('shows a date without a time without the time', async () => {
    const { user } = renderInput();
    await user.type(field(), 'march 5 2027{Enter}');

    expect(field()).toHaveValue('Fri, Mar 5, 2027');
  });

  it('sets the highlighted suggestion when Enter is pressed', async () => {
    const { user, onChange } = renderInput();
    await user.type(field(), 'ne');
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 10, 1, 23, 59, 59, 999));
  });

  it('selects the text when an input with a value is focused', async () => {
    const { user } = renderInput(new Date(2026, 9, 30, 15));
    await user.click(field());

    const input = field() as HTMLInputElement;
    expect([input.selectionStart, input.selectionEnd]).toEqual([0, 'Fri, Oct 30, 3:00 PM'.length]);
  });

  it('replaces the value with text typed over the selection', async () => {
    const { user, onChange } = renderInput(new Date(2026, 9, 30, 15));
    await user.click(field());
    await user.keyboard('tomorrow{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 9, 27, 23, 59, 59, 999));
  });

  it('sets the typed date on blur', async () => {
    const { user, onChange } = renderInput();
    await user.type(field(), 'in 2 weeks');
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 10, 9, 23, 59, 59, 999));
  });

  it('shows an error on blur when the text is not understood', async () => {
    const { user } = renderInput(new Date(2026, 9, 30, 15));
    await user.clear(field());
    await user.type(field(), 'soon');
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));

    expect(field()).toHaveAccessibleDescription('Could not understand “soon”');
  });

  it('keeps the previous value on blur when the text is not understood', async () => {
    const { user, onChange } = renderInput(new Date(2026, 9, 30, 15));
    await user.clear(field());
    await user.type(field(), 'soon');
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));

    expect(onChange).not.toHaveBeenCalled();
  });

  it('clears the value on blur with empty text', async () => {
    const { user, onChange } = renderInput(new Date(2026, 9, 30, 15));
    await user.clear(field());
    await user.click(screen.getByRole('button', { name: 'Elsewhere' }));

    expect(onChange).toHaveBeenLastCalledWith(null);
  });

  it('clears the value with the clear button', async () => {
    const { user, onChange } = renderInput(new Date(2026, 9, 30, 15));
    await user.click(screen.getByRole('button', { name: 'Clear due date' }));

    expect(onChange).toHaveBeenLastCalledWith(null);
  });

  it('empties the input with the clear button', async () => {
    const { user } = renderInput(new Date(2026, 9, 30, 15));
    await user.click(screen.getByRole('button', { name: 'Clear due date' }));

    expect(field()).toHaveValue('');
  });

  it('shows a value set from outside', () => {
    const { rerender } = render(
      <NaturalDateInput label="Due date" value={null} onChange={() => {}} />
    );
    rerender(
      <NaturalDateInput label="Due date" value={new Date(2026, 10, 2, 9, 30)} onChange={() => {}} />
    );

    expect(field()).toHaveValue('Mon, Nov 2, 9:30 AM');
  });
});

describe('past dates', () => {
  it('warns about a date in the past', async () => {
    const { user } = renderInput();
    await user.type(field(), 'yesterday{Enter}');

    expect(field()).toHaveAccessibleDescription('This date is in the past');
  });

  it('does not warn about today', async () => {
    const { user } = renderInput();
    await user.type(field(), 'today{Enter}');

    expect(screen.queryByText('This date is in the past')).not.toBeInTheDocument();
  });
});

describe('demo', () => {
  it('shows the selected value as an ISO string', async () => {
    render(<NaturalDateInputDemo />);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    await user.type(field(), 'fri 3p{ArrowDown}{Enter}');

    expect(
      screen.getByText(`Value: ${new Date(2026, 9, 30, 15).toISOString()}`)
    ).toBeInTheDocument();
  });
});
