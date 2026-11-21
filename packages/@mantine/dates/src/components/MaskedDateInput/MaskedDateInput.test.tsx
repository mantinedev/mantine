import { createRef, useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import {
  MaskedDateInput,
  MaskedDateInputProps,
  MaskedDateInputStylesNames,
} from './MaskedDateInput';

const defaultProps: MaskedDateInputProps = {
  dayInputLabel: 'test-day',
  monthInputLabel: 'test-month',
  yearInputLabel: 'test-year',
  hoursInputLabel: 'test-hours',
  minutesInputLabel: 'test-minutes',
  secondsInputLabel: 'test-seconds',
  amPmInputLabel: 'test-am-pm',
  clearButtonProps: { 'aria-label': 'test-clear' },
};

describe('@mantine/dates/MaskedDateInput', () => {
  tests.axe([<MaskedDateInput {...defaultProps} />]);

  tests.itSupportsSystemProps<MaskedDateInputProps, MaskedDateInputStylesNames>({
    component: MaskedDateInput,
    props: defaultProps,
    displayName: '@mantine/dates/MaskedDateInput',
    stylesApiSelectors: ['root'],
  });

  it('renders day, month, and year fields by default', () => {
    render(<MaskedDateInput {...defaultProps} />);
    expect(screen.getByLabelText('test-day')).toBeInTheDocument();
    expect(screen.getByLabelText('test-month')).toBeInTheDocument();
    expect(screen.getByLabelText('test-year')).toBeInTheDocument();
  });

  it('does not render time fields by default', () => {
    render(<MaskedDateInput {...defaultProps} />);
    expect(screen.queryByLabelText('test-hours')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('test-minutes')).not.toBeInTheDocument();
  });

  it('renders time fields when withTime is set', () => {
    render(<MaskedDateInput {...defaultProps} withTime />);
    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
    expect(screen.getByLabelText('test-minutes')).toBeInTheDocument();
  });

  it('renders seconds field when withTime and withSeconds are set', () => {
    const { rerender } = render(<MaskedDateInput {...defaultProps} withTime />);
    expect(screen.queryByLabelText('test-seconds')).not.toBeInTheDocument();

    rerender(<MaskedDateInput {...defaultProps} withTime withSeconds />);
    expect(screen.getByLabelText('test-seconds')).toBeInTheDocument();
  });

  it('renders am/pm field for 12h format', () => {
    render(<MaskedDateInput {...defaultProps} withTime format="12h" />);
    expect(screen.getByLabelText('test-am-pm')).toBeInTheDocument();
  });

  it('does not render am/pm field for 24h format', () => {
    render(<MaskedDateInput {...defaultProps} withTime format="24h" />);
    expect(screen.queryByLabelText('test-am-pm')).not.toBeInTheDocument();
  });

  it('renders fields in correct order for custom fieldsOrder', () => {
    render(<MaskedDateInput {...defaultProps} fieldsOrder={['year', 'month', 'day']} />);

    const spinButtons = screen.getAllByRole('spinbutton');
    expect(spinButtons[0]).toHaveAttribute('aria-label', 'test-year');
    expect(spinButtons[1]).toHaveAttribute('aria-label', 'test-month');
    expect(spinButtons[2]).toHaveAttribute('aria-label', 'test-day');
  });

  it('renders custom date separator', () => {
    const { container } = render(<MaskedDateInput {...defaultProps} dateSeparator="-" />);
    const separators = container.querySelectorAll('[class*="dateSeparator"]');
    expect(separators.length).toBeGreaterThan(0);
    expect(separators[0]).toHaveTextContent('-');
  });

  it('advances focus from day to month after typing a complete value', async () => {
    render(<MaskedDateInput {...defaultProps} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    expect(screen.getByLabelText('test-month')).toHaveFocus();
  });

  it('advances focus from month to year after typing a complete value', async () => {
    render(<MaskedDateInput {...defaultProps} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(document.activeElement!, '3');
    expect(screen.getByLabelText('test-year')).toHaveFocus();
  });

  it('calls onChange with YYYY-MM-DD format when all date fields are filled', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(screen.getByLabelText('test-month'), '6');
    await userEvent.type(screen.getByLabelText('test-year'), '2024');

    expect(spy).toHaveBeenCalledWith('2024-06-15');
  });

  it('calls onChange with null when a field is cleared after complete value', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} defaultValue="2024-06-15" onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '{backspace}');
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('updates fields when controlled value changes', () => {
    const { rerender } = render(<MaskedDateInput {...defaultProps} value="2024-01-15" />);

    expect(screen.getByLabelText('test-day')).toHaveValue('15');
    expect(screen.getByLabelText('test-month')).toHaveValue('01');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');

    rerender(<MaskedDateInput {...defaultProps} value="2023-12-25" />);

    expect(screen.getByLabelText('test-day')).toHaveValue('25');
    expect(screen.getByLabelText('test-month')).toHaveValue('12');
    expect(screen.getByLabelText('test-year')).toHaveValue('2023');
  });

  it('clamps day when month changes to a month with fewer days', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} defaultValue="2024-01-31" onChange={spy} />);

    expect(screen.getByLabelText('test-day')).toHaveValue('31');

    await userEvent.clear(screen.getByLabelText('test-month'));
    await userEvent.type(screen.getByLabelText('test-month'), '2');

    expect(screen.getByLabelText('test-day')).toHaveValue('29');
  });

  it('clears all fields when clear button is clicked', async () => {
    const spy = jest.fn();
    render(
      <MaskedDateInput {...defaultProps} clearable defaultValue="2024-06-15" onChange={spy} />
    );

    expect(screen.getByLabelText('test-day')).toHaveValue('15');
    expect(screen.getByLabelText('test-month')).toHaveValue('06');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');

    await userEvent.click(screen.getByLabelText('test-clear'));

    expect(screen.getByLabelText('test-day')).toHaveValue('');
    expect(screen.getByLabelText('test-month')).toHaveValue('');
    expect(screen.getByLabelText('test-year')).toHaveValue('');
    expect(spy).toHaveBeenLastCalledWith(null);
  });

  it('focuses the first field in fieldsOrder when clear button is clicked', async () => {
    render(
      <MaskedDateInput
        {...defaultProps}
        clearable
        defaultValue="2024-06-15"
        fieldsOrder={['year', 'month', 'day']}
      />
    );

    await userEvent.click(screen.getByLabelText('test-clear'));
    expect(screen.getByLabelText('test-year')).toHaveFocus();
  });

  it('allows calendar navigation after a full date is entered', async () => {
    render(
      <MaskedDateInput
        {...defaultProps}
        defaultValue="2024-06-15"
        ariaLabels={{ nextMonth: 'next-month', previousMonth: 'previous-month' }}
      />
    );

    await userEvent.click(screen.getByLabelText('test-day'));
    expect(screen.getByText('June 2024')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('next-month'));
    expect(screen.getByText('July 2024')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('previous-month'));
    await userEvent.click(screen.getByLabelText('previous-month'));
    expect(screen.getByText('May 2024')).toBeInTheDocument();
  });

  it('moves calendar to the entered date when value changes', async () => {
    const { rerender } = render(
      <MaskedDateInput
        {...defaultProps}
        value="2024-06-15"
        ariaLabels={{ nextMonth: 'next-month' }}
      />
    );

    await userEvent.click(screen.getByLabelText('test-day'));
    await userEvent.click(screen.getByLabelText('next-month'));
    expect(screen.getByText('July 2024')).toBeInTheDocument();

    rerender(
      <>
        <MaskedDateInput
          {...defaultProps}
          value="2023-02-10"
          ariaLabels={{ nextMonth: 'next-month' }}
        />
      </>
    );
    expect(screen.getByText('February 2023')).toBeInTheDocument();
  });

  it('disables all fields when disabled is set', () => {
    render(<MaskedDateInput {...defaultProps} disabled />);

    expect(screen.getByLabelText('test-day')).toBeDisabled();
    expect(screen.getByLabelText('test-month')).toBeDisabled();
    expect(screen.getByLabelText('test-year')).toBeDisabled();
  });

  it('prevents editing when readOnly is set', async () => {
    render(<MaskedDateInput {...defaultProps} readOnly />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    expect(screen.getByLabelText('test-day')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-month'), '6');
    expect(screen.getByLabelText('test-month')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-year'), '2024');
    expect(screen.getByLabelText('test-year')).toHaveValue('');
  });

  it('calls onChange with YYYY-MM-DD HH:mm:ss format when withTime is set', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} withTime withSeconds onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(screen.getByLabelText('test-month'), '6');
    await userEvent.type(screen.getByLabelText('test-year'), '2024');
    await userEvent.type(screen.getByLabelText('test-hours'), '10');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '45');

    expect(spy).toHaveBeenCalledWith('2024-06-15 10:30:45');
  });
  it('keeps other fields when a field is cleared in controlled mode', async () => {
    const Wrapper = () => {
      const [value, setValue] = useState<string | null>('2024-06-15');
      return (
        <>
          <MaskedDateInput {...defaultProps} value={value} onChange={setValue} />
          <div data-testid="value">{String(value)}</div>
        </>
      );
    };
    render(<Wrapper />);

    await userEvent.type(screen.getByLabelText('test-day'), '{backspace}');

    expect(screen.getByTestId('value')).toHaveTextContent('null');
    expect(screen.getByLabelText('test-day')).toHaveValue('');
    expect(screen.getByLabelText('test-month')).toHaveValue('06');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
  });

  it('applies external controlled value after a keystroke that did not emit onChange', async () => {
    const Wrapper = () => {
      const [value, setValue] = useState<string | null>(null);
      return (
        <>
          <MaskedDateInput {...defaultProps} value={value} onChange={setValue} />
          <button type="button" onClick={() => setValue('2024-06-15')}>
            set
          </button>
        </>
      );
    };
    render(<Wrapper />);

    await userEvent.type(screen.getByLabelText('test-day'), '1');
    await userEvent.click(screen.getByRole('button', { name: 'set' }));

    expect(screen.getByLabelText('test-day')).toHaveValue('15');
    expect(screen.getByLabelText('test-month')).toHaveValue('06');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
  });

  it('does not clamp the day while the year is incomplete', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '29');
    await userEvent.type(screen.getByLabelText('test-month'), '2');
    await userEvent.type(screen.getByLabelText('test-year'), '2024');

    expect(screen.getByLabelText('test-day')).toHaveValue('29');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('2024-02-29');
  });

  it('calls onChange once when the year is typed digit by digit', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(screen.getByLabelText('test-month'), '6');
    await userEvent.type(screen.getByLabelText('test-year'), '2024');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('2024-06-15');
  });

  it('does not emit an out of range date and keeps the hidden input empty', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MaskedDateInput
        {...defaultProps}
        name="date"
        minDate="2024-01-01"
        maxDate="2024-12-31"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(screen.getByLabelText('test-month'), '6');
    await userEvent.type(screen.getByLabelText('test-year'), '2020');

    expect(spy).not.toHaveBeenCalled();
    expect(container.querySelector('input[name="date"]')).toHaveValue('');

    await userEvent.clear(screen.getByLabelText('test-year'));
    await userEvent.type(screen.getByLabelText('test-year'), '2024');

    expect(spy).toHaveBeenCalledWith('2024-06-15');
    expect(container.querySelector('input[name="date"]')).toHaveValue('2024-06-15');
  });

  it('clamps an out of range date to maxDate when focus leaves the input', async () => {
    const spy = jest.fn();
    render(
      <MaskedDateInput
        {...defaultProps}
        defaultValue="2024-06-15"
        minDate="2024-01-01"
        maxDate="2024-12-31"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-year'), '2025');
    expect(screen.getByLabelText('test-year')).toHaveValue('2025');
    expect(spy).not.toHaveBeenCalledWith('2025-06-15');

    await userEvent.tab();

    expect(screen.getByLabelText('test-day')).toHaveValue('31');
    expect(screen.getByLabelText('test-month')).toHaveValue('12');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
    expect(spy).toHaveBeenLastCalledWith('2024-12-31');
  });

  it('clamps an out of range date to minDate when focus leaves the input', async () => {
    const spy = jest.fn();
    render(
      <MaskedDateInput
        {...defaultProps}
        defaultValue="2024-06-15"
        minDate="2024-03-01"
        maxDate="2024-12-31"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-month'), '1');
    await userEvent.tab();

    expect(screen.getByLabelText('test-day')).toHaveValue('01');
    expect(screen.getByLabelText('test-month')).toHaveValue('03');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
    expect(spy).toHaveBeenLastCalledWith('2024-03-01');
  });

  it('does not clamp an out of range value on blur when readOnly is set', async () => {
    const spy = jest.fn();
    render(
      <MaskedDateInput
        {...defaultProps}
        readOnly
        defaultValue="2025-06-15"
        maxDate="2024-12-31"
        onChange={spy}
      />
    );

    await userEvent.click(screen.getByLabelText('test-year'));
    await userEvent.tab();

    expect(screen.getByLabelText('test-year')).toHaveValue('2025');
    expect(spy).not.toHaveBeenCalled();
  });

  it('calls onChange with date only value for 12h format without withTime', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} format="12h" onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-day'), '15');
    await userEvent.type(screen.getByLabelText('test-month'), '6');
    await userEvent.type(screen.getByLabelText('test-year'), '2024');

    expect(spy).toHaveBeenCalledWith('2024-06-15');
  });

  it('sets fields from a pasted YYYY-MM-DD value by default', () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} onChange={spy} />);

    fireEvent.paste(screen.getByLabelText('test-day'), {
      clipboardData: { getData: () => '2024-06-15' },
    });

    expect(screen.getByLabelText('test-day')).toHaveValue('15');
    expect(screen.getByLabelText('test-month')).toHaveValue('06');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
    expect(spy).toHaveBeenCalledWith('2024-06-15');
  });

  it('ignores paste when readOnly is set', () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} readOnly onChange={spy} />);

    fireEvent.paste(screen.getByLabelText('test-day'), {
      clipboardData: { getData: () => '2024-06-15' },
    });

    expect(screen.getByLabelText('test-day')).toHaveValue('');
    expect(spy).not.toHaveBeenCalled();
  });

  it('ignores paste when disabled is set', () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} disabled onChange={spy} />);

    fireEvent.paste(screen.getByLabelText('test-day'), {
      clipboardData: { getData: () => '2024-06-15' },
    });

    expect(screen.getByLabelText('test-day')).toHaveValue('');
    expect(spy).not.toHaveBeenCalled();
  });

  it('passes ref to the root element and keeps click outside handling', async () => {
    const ref = createRef<HTMLDivElement>();
    render(<MaskedDateInput {...defaultProps} ref={ref} defaultValue="2024-06-15" />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toContainElement(screen.getByLabelText('test-day'));

    await userEvent.click(screen.getByLabelText('test-day'));
    expect(screen.getByText('June 2024')).toBeInTheDocument();

    await act(async () => {
      fireEvent.mouseDown(document.body);
    });
    expect(screen.queryByText('June 2024')).not.toBeInTheDocument();
  });

  it('sets fields when a day is clicked in the dropdown', async () => {
    const spy = jest.fn();
    render(<MaskedDateInput {...defaultProps} defaultValue="2024-06-15" onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-day'));
    await userEvent.click(screen.getByText('20'));

    expect(screen.getByLabelText('test-day')).toHaveValue('20');
    expect(screen.getByLabelText('test-month')).toHaveValue('06');
    expect(screen.getByLabelText('test-year')).toHaveValue('2024');
    expect(spy).toHaveBeenLastCalledWith('2024-06-20');
    expect(screen.queryByText('June 2024')).not.toBeInTheDocument();
  });

  it('reopens the dropdown when an already focused field is clicked after Escape', async () => {
    render(<MaskedDateInput {...defaultProps} defaultValue="2024-06-15" />);

    await userEvent.click(screen.getByLabelText('test-day'));
    expect(screen.getByText('June 2024')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText('June 2024')).not.toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('test-day'));
    expect(screen.getByText('June 2024')).toBeInTheDocument();
  });

  it('names the fields by default and groups them under the label', () => {
    const { rerender } = render(<MaskedDateInput withTime withSeconds format="12h" />);
    expect(screen.getByLabelText('Day')).toHaveAttribute('role', 'spinbutton');
    expect(screen.getByLabelText('Month')).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByLabelText('Hours')).toBeInTheDocument();
    expect(screen.getByLabelText('Minutes')).toBeInTheDocument();
    expect(screen.getByLabelText('Seconds')).toBeInTheDocument();
    expect(screen.getByLabelText('AM/PM')).toBeInTheDocument();
    expect(screen.getByRole('group')).not.toHaveAttribute('aria-labelledby');

    rerender(
      <>
        <MaskedDateInput label="Birth date" />
      </>
    );
    expect(screen.getByRole('group', { name: 'Birth date' })).toContainElement(
      screen.getByLabelText('Day')
    );
  });

  it('does not render dropdown when withDropdown is false', async () => {
    render(<MaskedDateInput {...defaultProps} defaultValue="2024-06-15" withDropdown={false} />);

    await userEvent.click(screen.getByLabelText('test-day'));
    expect(screen.queryByText('June 2024')).not.toBeInTheDocument();
  });
});
