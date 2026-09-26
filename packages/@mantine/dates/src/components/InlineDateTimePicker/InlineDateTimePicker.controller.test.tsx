import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { InlineDateTimePicker, InlineDateTimePickerProps } from './InlineDateTimePicker';
import {
  useInlineDateTimePicker,
  InlineDateTimePickerController,
  InlineDateTimePickerControllerOptions,
} from './use-inline-date-time-picker/use-inline-date-time-picker';

const defaultProps = {
  timePickerProps: { hoursInputLabel: 'test-hours', minutesInputLabel: 'test-minutes' },
  endTimePickerProps: { hoursInputLabel: 'test-end-hours', minutesInputLabel: 'test-end-minutes' },
  submitButtonProps: { 'aria-label': 'test-submit' },
  ariaLabels: {
    monthLevelControl: 'month-level',
    yearLevelControl: 'year-level',
    nextMonth: 'next-month',
    previousMonth: 'previous-month',
    nextYear: 'next-year',
    previousYear: 'previous-year',
    nextDecade: 'next-decade',
    previousDecade: 'previous-decade',
  },
};

function ControllerPicker({
  capture,
  options,
  ...others
}: {
  capture: (controller: InlineDateTimePickerController) => void;
  options?: InlineDateTimePickerControllerOptions;
} & InlineDateTimePickerProps) {
  const controller = useInlineDateTimePicker({ defaultDate: '2024-06-01', ...options });
  capture(controller);
  return <InlineDateTimePicker {...(defaultProps as any)} {...others} controller={controller} />;
}

function ControlledValuePicker({
  capture,
  exposeSetter,
}: {
  capture: (controller: InlineDateTimePickerController) => void;
  exposeSetter: (setValue: (value: string | null) => void) => void;
}) {
  const [value, setValue] = useState<string | null>('2024-06-15 10:30:00');
  exposeSetter(setValue);
  const controller = useInlineDateTimePicker();
  capture(controller);
  return (
    <InlineDateTimePicker
      {...(defaultProps as any)}
      value={value}
      onChange={setValue}
      controller={controller}
    />
  );
}

describe('@mantine/dates/InlineDateTimePicker/controller', () => {
  it('drives the displayed date through the controller', () => {
    let controller: InlineDateTimePickerController = null as any;
    render(<ControllerPicker capture={(c) => (controller = c)} />);

    expect(screen.getByLabelText('month-level').textContent).toBe('June 2024');
    act(() => controller.next());
    expect(screen.getByLabelText('month-level').textContent).toBe('July 2024');
    expect(controller.getDisplayedDate()).toBe('2024-07-01');
  });

  it('shows the time inputs only on the month level set through the controller', () => {
    let controller: InlineDateTimePickerController = null as any;
    render(<ControllerPicker capture={(c) => (controller = c)} />);

    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
    act(() => controller.setLevel('year'));
    expect(screen.getByLabelText('year-level').textContent).toBe('2024');
    expect(screen.queryByLabelText('test-hours')).toBe(null);

    act(() => controller.setLevel('month'));
    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
  });

  it('writes level changes made by the user into the controller', async () => {
    let controller: InlineDateTimePickerController = null as any;
    render(<ControllerPicker capture={(c) => (controller = c)} />);

    await userEvent.click(screen.getByLabelText('month-level'));
    expect(controller.getLevel()).toBe('year');
    expect(screen.queryByLabelText('test-hours')).toBe(null);
  });

  it('keeps the value on the component props and takes defaultTimeValue from the controller', async () => {
    const spy = jest.fn();
    render(
      <ControllerPicker
        defaultTimeValue="18:00"
        options={{ defaultTimeValue: '09:15' }}
        onChange={spy}
        capture={() => undefined}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: '12 June 2024' }));
    expect(spy).toHaveBeenLastCalledWith('2024-06-12 09:15:00');
  });

  it('shows the time inputs on the month level without a controller', async () => {
    render(<InlineDateTimePicker {...(defaultProps as any)} defaultDate="2024-06-01" />);

    await userEvent.click(screen.getByLabelText('month-level'));
    expect(screen.queryByLabelText('test-hours')).toBe(null);
    await userEvent.click(screen.getByText('Jun'));
    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
  });

  it('keeps a time set before a date is selected and uses it for the selected date', async () => {
    let controller: InlineDateTimePickerController = null as any;
    const spy = jest.fn();
    render(<ControllerPicker onChange={spy} capture={(c) => (controller = c)} />);

    act(() => controller.setTime('09:30'));
    expect(screen.getByLabelText('test-hours')).toHaveValue('09');
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: '12 June 2024' }));
    expect(spy).toHaveBeenLastCalledWith('2024-06-12 09:30:00');
  });

  it('exposes a time typed before a date is selected', async () => {
    let controller: InlineDateTimePickerController = null as any;
    render(<ControllerPicker capture={(c) => (controller = c)} />);

    await userEvent.type(screen.getByLabelText('test-hours'), '14');
    await userEvent.type(screen.getByLabelText('test-minutes'), '20');
    expect(controller.getTime()).toBe('14:20');
  });

  it('updates the value time with setTime and follows value changes', () => {
    let controller: InlineDateTimePickerController = null as any;
    let setValue: (value: string | null) => void = () => {};
    render(
      <ControlledValuePicker
        capture={(c) => (controller = c)}
        exposeSetter={(s) => (setValue = s)}
      />
    );

    expect(controller.getTime()).toBe('10:30');
    act(() => controller.setTime('11:00'));
    expect(screen.getByLabelText('test-hours')).toHaveValue('11');

    act(() => setValue('2024-06-20 16:45:00'));
    expect(controller.getTime()).toBe('16:45');
    expect(screen.getByLabelText('test-hours')).toHaveValue('16');
  });

  it('sets the end time of a range', async () => {
    let controller: InlineDateTimePickerController = null as any;
    const spy = jest.fn();
    render(<ControllerPicker type="range" onChange={spy} capture={(c) => (controller = c)} />);

    await userEvent.click(screen.getByRole('button', { name: '10 June 2024' }));
    await userEvent.click(screen.getByRole('button', { name: '12 June 2024' }));
    act(() => controller.setEndTime('18:00'));
    expect(spy).toHaveBeenLastCalledWith(['2024-06-10 00:00:00', '2024-06-12 18:00:00']);
    expect(screen.getByLabelText('test-end-hours')).toHaveValue('18');
  });

  it('focuses a time field with focusTime', () => {
    let controller: InlineDateTimePickerController = null as any;
    render(<ControllerPicker capture={(c) => (controller = c)} />);

    act(() => controller.focusTime('minutes'));
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
  });

  it('focuses a time field when the time inputs are rendered after focusTime', () => {
    let controller: InlineDateTimePickerController = null as any;
    render(
      <ControllerPicker options={{ defaultLevel: 'year' }} capture={(c) => (controller = c)} />
    );

    act(() => controller.focusTime('hours'));
    expect(screen.queryByLabelText('test-hours')).toBe(null);

    act(() => controller.setLevel('month'));
    expect(screen.getByLabelText('test-hours')).toHaveFocus();
  });

  it('calls onTimeChange once when the time is set', () => {
    let controller: InlineDateTimePickerController = null as any;
    const onTimeChange = jest.fn();
    const onChange = jest.fn();
    render(
      <ControllerPicker
        defaultValue="2024-06-15 10:30:00"
        onChange={onChange}
        options={{ onTimeChange }}
        capture={(c) => (controller = c)}
      />
    );

    onTimeChange.mockClear();
    act(() => controller.setTime('14:00'));
    expect(onChange).toHaveBeenLastCalledWith('2024-06-15 14:00:00');
    expect(onTimeChange).toHaveBeenCalledTimes(1);
    expect(onTimeChange).toHaveBeenLastCalledWith('14:00');
  });
});
