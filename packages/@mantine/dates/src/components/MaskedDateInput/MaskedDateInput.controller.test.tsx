import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { MaskedDateInput, MaskedDateInputProps } from './MaskedDateInput';
import {
  MaskedDateInputController,
  MaskedDateInputControllerOptions,
  useMaskedDateInput,
} from './use-masked-date-input';

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

let currentController: MaskedDateInputController = null as any;

function ControllerTest({
  options,
  ...others
}: { options?: MaskedDateInputControllerOptions } & Omit<MaskedDateInputProps, 'controller'>) {
  const controller = useMaskedDateInput(options);
  currentController = controller;
  return <MaskedDateInput {...defaultProps} controller={controller} {...others} />;
}

function StatePropsTest({ onChange }: { onChange: (value: string | null) => void }) {
  const controller = useMaskedDateInput({ defaultValue: '2024-03-15' });
  currentController = controller;
  return (
    <MaskedDateInput
      {...defaultProps}
      controller={controller}
      value="2020-01-01"
      defaultValue="2021-02-02"
      onChange={onChange}
    />
  );
}

function ExternalClearTest() {
  const controller = useMaskedDateInput({ defaultValue: '2024-03-15' });
  currentController = controller;
  return (
    <>
      <button type="button" onClick={controller.clear}>
        external-clear
      </button>
      <MaskedDateInput {...defaultProps} controller={controller} />
    </>
  );
}

const day = () => screen.getByLabelText('test-day');
const month = () => screen.getByLabelText('test-month');
const year = () => screen.getByLabelText('test-year');

describe('@mantine/dates/MaskedDateInput/controller', () => {
  beforeEach(() => {
    currentController = null as any;
  });

  it('takes the value from the controller and ignores the state props', () => {
    const onChange = jest.fn();
    render(<StatePropsTest onChange={onChange} />);

    expect(day()).toHaveValue('15');
    expect(month()).toHaveValue('03');
    expect(year()).toHaveValue('2024');
    expect(currentController.getValue()).toBe('2024-03-15');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('exposes partial input that the value cannot express', async () => {
    const onChange = jest.fn();
    render(<ControllerTest options={{ onChange }} />);

    await userEvent.type(day(), '15');
    await userEvent.type(month(), '03');

    expect(currentController.getDay()).toBe(15);
    expect(currentController.getMonth()).toBe(3);
    expect(currentController.getYear()).toBe(null);
    expect(currentController.getValue()).toBe(null);
    expect(currentController.hasValue()).toBe(true);
    expect(onChange).not.toHaveBeenCalled();

    await userEvent.type(year(), '2024');
    expect(currentController.getValue()).toBe('2024-03-15');
    expect(onChange).toHaveBeenLastCalledWith('2024-03-15');
  });

  it('updates the rendered fields when field actions are called from outside', () => {
    render(<ControllerTest />);

    act(() => currentController.setMonth(2));
    act(() => currentController.setYear(2024));
    expect(month()).toHaveValue('02');
    expect(year()).toHaveValue('2024');
    expect(day()).toHaveValue('');
    expect(currentController.getValue()).toBe(null);

    act(() => currentController.setDay(29));
    expect(currentController.getValue()).toBe('2024-02-29');
  });

  it('keeps every field when several field actions are called in one batch', () => {
    const onChange = jest.fn();
    render(<ControllerTest options={{ defaultValue: '2024-01-01', onChange }} />);

    act(() => {
      currentController.setDay(2);
      currentController.setMonth(2);
    });

    expect(day()).toHaveValue('02');
    expect(month()).toHaveValue('02');
    expect(currentController.getValue()).toBe('2024-02-02');
    expect(onChange).toHaveBeenLastCalledWith('2024-02-02');
  });

  it('sets and clears all fields with setValue', () => {
    const onChange = jest.fn();
    render(<ControllerTest options={{ onChange }} />);

    act(() => currentController.setValue('2024-03-15'));
    expect(day()).toHaveValue('15');
    expect(month()).toHaveValue('03');
    expect(year()).toHaveValue('2024');
    expect(onChange).toHaveBeenLastCalledWith('2024-03-15');

    act(() => currentController.setValue(null));
    expect(day()).toHaveValue('');
    expect(currentController.hasValue()).toBe(false);
    expect(onChange).toHaveBeenLastCalledWith(null);
  });

  it('keeps the time fields when setValue receives a date without time', () => {
    const onChange = jest.fn();
    render(
      <ControllerTest options={{ defaultValue: '2024-03-15 10:20:00', withTime: true, onChange }} />
    );

    act(() => currentController.setValue('2024-04-01'));
    expect(currentController.getHours()).toBe(10);
    expect(currentController.getMinutes()).toBe(20);
    expect(onChange).toHaveBeenLastCalledWith('2024-04-01 10:20:00');
  });

  it('does not move focus when field actions are called from outside', () => {
    render(
      <>
        <ControllerTest options={{ withTime: true, withSeconds: true, format: '12h' }} />
        <button type="button">outside</button>
      </>
    );
    const outside = screen.getByRole('button', { name: 'outside' });
    act(() => outside.focus());

    act(() => {
      currentController.setDay(15);
      currentController.setMonth(3);
      currentController.setYear(2024);
      currentController.setHours(2);
      currentController.setMinutes(30);
      currentController.setSeconds(0);
      currentController.setAmPm('pm');
    });

    expect(outside).toHaveFocus();
    expect(currentController.getValue()).toBe('2024-03-15 14:30:00');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('PM');
  });

  it('keeps the am/pm field when amPmLabels change', () => {
    const { rerender } = render(
      <ControllerTest
        options={{ defaultValue: '2024-03-15 14:30:00', withTime: true, format: '12h' }}
      />
    );
    expect(currentController.getAmPm()).toBe('pm');

    rerender(
      <ControllerTest
        options={{
          defaultValue: '2024-03-15 14:30:00',
          withTime: true,
          format: '12h',
          amPmLabels: { am: 'ДП', pm: 'ПП' },
        }}
      />
    );
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('ПП');
    expect(currentController.getValue()).toBe('2024-03-15 14:30:00');
  });

  it('moves focus to the given field with the focus action', () => {
    render(<ControllerTest />);

    act(() => currentController.focus('year'));
    expect(year()).toHaveFocus();

    act(() => currentController.focus('month'));
    expect(month()).toHaveFocus();
  });

  it('renders the fields defined by the controller options rather than by the props', () => {
    render(<ControllerTest options={{ withTime: true, withSeconds: true, format: '12h' }} />);

    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
    expect(screen.getByLabelText('test-seconds')).toBeInTheDocument();
    expect(screen.getByLabelText('test-am-pm')).toBeInTheDocument();
  });

  it('does not report a complete date outside of the controller minDate and maxDate', () => {
    const onChange = jest.fn();
    const { container } = render(
      <ControllerTest
        name="test-date"
        options={{ minDate: '2024-01-10', maxDate: '2024-12-31', onChange }}
      />
    );

    act(() => currentController.setValue('2023-05-05'));
    expect(day()).toHaveValue('05');
    expect(currentController.getValue()).toBe(null);
    expect(container.querySelector('input[type="hidden"]')).toHaveValue('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('displays the clear button based on the controller state', () => {
    render(<ControllerTest clearable />);
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();

    act(() => currentController.setMonth(5));
    expect(screen.getByLabelText('test-clear')).toBeInTheDocument();

    act(() => currentController.clear());
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();
  });

  it('focuses the first field in fieldsOrder when controller clear is called', () => {
    render(
      <ControllerTest
        options={{ defaultValue: '2024-03-15' }}
        fieldsOrder={['month', 'day', 'year']}
      />
    );

    act(() => currentController.clear());
    expect(screen.getByLabelText('test-month')).toHaveFocus();
  });

  it('allows calendar navigation after a full date is set with the controller', async () => {
    render(<ControllerTest ariaLabels={{ nextMonth: 'next-month' }} />);

    act(() => currentController.setValue('2024-06-15'));
    await userEvent.click(day());
    expect(screen.getByText('June 2024')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('next-month'));
    expect(screen.getByText('July 2024')).toBeInTheDocument();
  });

  it('writes the controller value to the hidden input', () => {
    const { container } = render(<ControllerTest name="test-date" />);

    act(() => currentController.setValue('2024-07-04'));
    expect(container.querySelector('input[type="hidden"]')).toHaveValue('2024-07-04');
  });

  it('shares one controller between the component and the code that created it', () => {
    render(<ExternalClearTest />);
    expect(day()).toHaveValue('15');

    act(() => screen.getByText('external-clear').click());
    expect(day()).toHaveValue('');
    expect(currentController.hasValue()).toBe(false);
  });
});
