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
});
