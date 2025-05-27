import { createRef } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { TimePicker, TimePickerProps, TimePickerStylesNames } from './TimePicker';

const defaultProps: TimePickerProps = {
  hoursInputLabel: 'test-hours',
  minutesInputLabel: 'test-minutes',
  secondsInputLabel: 'test-seconds',
  amPmInputLabel: 'test-am-pm',
  clearButtonProps: { 'aria-label': 'test-clear' },
};

describe('@mantine/dates/TimePicker', () => {
  tests.axe([<TimePicker {...defaultProps} />]);

  tests.itSupportsSystemProps<TimePickerProps, TimePickerStylesNames>({
    component: TimePicker,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/TimePicker',
    stylesApiSelectors: ['root'],
  });

  it('manages focus properly (24h format)', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '30');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();
  });

  it('manages focus properly (12h format)', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="12h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '30');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '30');
    expect(screen.getByLabelText('test-am-pm')).toHaveFocus();
  });

  it('handles backspace key correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '30');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{backspace}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
    expect(screen.getByLabelText('test-minutes')).toHaveValue('30');

    await userEvent.type(document.activeElement!, '{backspace}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');

    await userEvent.type(document.activeElement!, '{backspace}');
    expect(screen.getByLabelText('test-hours')).toHaveFocus();
    expect(screen.getByLabelText('test-hours')).toHaveValue('08');
  });

  it('handles delete key correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '30');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{delete}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
    expect(screen.getByLabelText('test-minutes')).toHaveValue('30');

    await userEvent.type(document.activeElement!, '{delete}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');

    await userEvent.type(document.activeElement!, '{delete}');
    expect(screen.getByLabelText('test-hours')).toHaveFocus();
    expect(screen.getByLabelText('test-hours')).toHaveValue('08');
  });

  it('handles left/right arrow keys correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowleft}');
    expect(screen.getByLabelText('test-hours')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowright}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowright}');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowright}');
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowleft}');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
  });

  it('increments and decrements values with up/down arrow keys based on given step props (24h format)', async () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="24h"
        hoursStep={2}
        minutesStep={5}
        secondsStep={10}
      />
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    expect(screen.getByLabelText('test-hours')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('00');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('02');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('00');

    await userEvent.click(screen.getByLabelText('test-minutes'));
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('05');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');

    await userEvent.click(screen.getByLabelText('test-seconds'));
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('10');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');
  });

  it('increments and decrements values with up/down arrow keys based on given step props (12h format)', async () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="12h"
        hoursStep={2}
        minutesStep={5}
        secondsStep={10}
      />
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    expect(screen.getByLabelText('test-hours')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('01');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('03');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('01');

    await userEvent.click(screen.getByLabelText('test-minutes'));
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('05');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');

    await userEvent.click(screen.getByLabelText('test-seconds'));
    expect(screen.getByLabelText('test-seconds')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('10');

    await userEvent.type(document.activeElement!, '{arrowdown}');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');

    await userEvent.click(screen.getByLabelText('test-am-pm'));
    expect(screen.getByLabelText('test-am-pm')).toHaveFocus();

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('AM');

    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('PM');
  });

  it('handles A and P keys correctly (12h format)', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="12h" />);

    await userEvent.click(screen.getByLabelText('test-am-pm'));
    expect(screen.getByLabelText('test-am-pm')).toHaveFocus();

    await userEvent.type(document.activeElement!, 'A');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('AM');

    await userEvent.type(document.activeElement!, 'P');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('PM');

    await userEvent.type(document.activeElement!, 'P');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('PM');

    await userEvent.type(document.activeElement!, 'A');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('AM');
  });

  it('handles paste event correctly', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} withSeconds format="24h" onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    expect(screen.getByLabelText('test-hours')).toHaveFocus();

    await userEvent.paste('13:34:00');
    expect(screen.getByLabelText('test-hours')).toHaveValue('13');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');
    expect(spy).toHaveBeenLastCalledWith('13:34:00');
  });

  it('calls onChange function when the value is valid (24h format)', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} withSeconds format="24h" onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '4');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('08:30:04');
  });

  it('calls onChange function when the value is valid (12h format)', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} withSeconds format="12h" onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '45');
    await userEvent.type(screen.getByLabelText('test-am-pm'), 'P');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('20:30:45');
  });

  it('clamps time based on the given min and max props (24h format)', async () => {
    const spy = jest.fn();
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="24h"
        min="08:30"
        max="18:30"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-hours'), '7');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    expect(spy).toHaveBeenCalledWith('08:30:00');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '19');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    expect(spy).toHaveBeenCalledWith('18:30:00');
  });

  it('clamps time based on the given min and max props (12h format)', async () => {
    const spy = jest.fn();
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="12h"
        min="08:30"
        max="18:30"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-hours'), '7');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    await userEvent.type(screen.getByLabelText('test-am-pm'), 'A');
    expect(spy).toHaveBeenCalledWith('08:30:00');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '7');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    await userEvent.type(screen.getByLabelText('test-am-pm'), 'P');
    expect(spy).toHaveBeenCalledWith('18:30:00');
  });

  it('allows typing multiple valid values within min/max range without resetting to max', async () => {
    const spy = jest.fn();
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="24h"
        min="08:00:00"
        max="18:00:00"
        onChange={spy}
      />
    );

    await userEvent.type(screen.getByLabelText('test-hours'), '10');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '00');
    expect(spy).toHaveBeenCalledWith('10:30:00');
    expect(screen.getByLabelText('test-hours')).toHaveValue('10');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('30');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '12');
    await userEvent.type(screen.getByLabelText('test-minutes'), '45');
    await userEvent.type(screen.getByLabelText('test-seconds'), '30');

    expect(spy).toHaveBeenCalledWith('12:45:30');
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('45');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('30');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '15');
    await userEvent.type(screen.getByLabelText('test-minutes'), '15');
    await userEvent.type(screen.getByLabelText('test-seconds'), '15');

    expect(spy).toHaveBeenCalledWith('15:15:15');
    expect(screen.getByLabelText('test-hours')).toHaveValue('15');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('15');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('15');
  });

  it('handles default value correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds defaultValue="12:34:55" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('55');
  });

  it('handles partially valid default value correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds defaultValue="12:34" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
  });

  it('handles value correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds value="12:34:55" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('55');
  });

  it('handles partially valid value correctly', async () => {
    render(<TimePicker {...defaultProps} withSeconds value="12:34" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
  });

  it('clear input when the clear button is clicked', async () => {
    const spy = jest.fn();
    render(
      <TimePicker {...defaultProps} clearable withSeconds defaultValue="12:34:55" onChange={spy} />
    );
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('55');

    await userEvent.click(screen.getByLabelText('test-clear'));
    expect(screen.getByLabelText('test-hours')).toHaveValue('');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
    expect(spy).toHaveBeenLastCalledWith('');
  });

  it('clears partial input value when the clear button is clicked', async () => {
    const spy = jest.fn();
    render(
      <TimePicker {...defaultProps} clearable withSeconds defaultValue="12:34" onChange={spy} />
    );
    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');

    await userEvent.click(screen.getByLabelText('test-clear'));
    expect(screen.getByLabelText('test-hours')).toHaveValue('');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
    expect(spy).toHaveBeenLastCalledWith('');
  });

  it('displays clear button only when the input has value and clearable prop is set', async () => {
    const { rerender } = render(<TimePicker {...defaultProps} clearable />);
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();

    rerender(<TimePicker {...defaultProps} clearable defaultValue="12:34:55" />);
    expect(screen.getByLabelText('test-clear')).toBeInTheDocument();

    rerender(<TimePicker {...defaultProps} clearable value="12:34:55" />);
    expect(screen.getByLabelText('test-clear')).toBeInTheDocument();
  });

  it('correctly handles readOnly prop (24h format)', async () => {
    render(<TimePicker {...defaultProps} withSeconds readOnly />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-hours')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-seconds'), '4');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
  });

  it('correctly handles readOnly prop (12h format)', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="12h" readOnly />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-hours')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-seconds'), '4');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');

    await userEvent.type(screen.getByLabelText('test-am-pm'), 'A');
    expect(screen.getByLabelText('test-am-pm')).toHaveValue('');
  });

  it('correctly handles disabled prop', async () => {
    const { rerender } = render(<TimePicker {...defaultProps} withSeconds disabled format="24h" />);

    expect(screen.getByLabelText('test-hours')).toBeDisabled();
    expect(screen.getByLabelText('test-minutes')).toBeDisabled();
    expect(screen.getByLabelText('test-seconds')).toBeDisabled();

    rerender(<TimePicker {...defaultProps} withSeconds disabled format="12h" />);
    expect(screen.getByLabelText('test-hours')).toBeDisabled();
    expect(screen.getByLabelText('test-minutes')).toBeDisabled();
    expect(screen.getByLabelText('test-seconds')).toBeDisabled();
    expect(screen.getByLabelText('test-am-pm')).toBeDisabled();
  });

  it('sets value, name and form on the hidden input correctly', () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        value="12:34:45"
        name="test-name"
        form="test-form"
      />
    );
    const hiddenInput = document.querySelector('input[type="hidden"]');
    expect(hiddenInput).toHaveAttribute('value', '12:34:45');
    expect(hiddenInput).toHaveAttribute('name', 'test-name');
    expect(hiddenInput).toHaveAttribute('form', 'test-form');
  });

  it('allows passing props down to hidden input with hiddenInputProps prop', () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        value="12:34:45"
        hiddenInputProps={{ 'data-test': 'test' }}
      />
    );
    expect(document.querySelector('input[type="hidden"]')).toHaveAttribute('data-test', 'test');
  });

  it('allows passing props down to clear button with clearButtonProps prop', () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        clearable
        defaultValue="12:34:45"
        clearButtonProps={{ 'data-test': 'test', 'aria-label': 'test-clear' }}
      />
    );
    expect(screen.getByLabelText('test-clear')).toHaveAttribute('data-test', 'test');
  });

  it('allows passing props down to hours/minutes/seconds/am-pm inputs with props', () => {
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        defaultValue="20:34:45"
        format="12h"
        hoursInputProps={{ 'data-test': 'hours' }}
        minutesInputProps={{ 'data-test': 'minutes' }}
        secondsInputProps={{ 'data-test': 'seconds' }}
        amPmSelectProps={{ 'data-test': 'am-pm' }}
      />
    );

    expect(screen.getByLabelText('test-hours')).toHaveAttribute('data-test', 'hours');
    expect(screen.getByLabelText('test-minutes')).toHaveAttribute('data-test', 'minutes');
    expect(screen.getByLabelText('test-seconds')).toHaveAttribute('data-test', 'seconds');
    expect(screen.getByLabelText('test-am-pm')).toHaveAttribute('data-test', 'am-pm');
  });

  it('allows customizing paste split behavior with pasteSplit prop', async () => {
    const spy = jest.fn();
    const customSplit = () => ({ hours: 1, minutes: 34, seconds: 53, amPm: null });
    render(
      <TimePicker
        {...defaultProps}
        withSeconds
        format="24h"
        pasteSplit={customSplit}
        onChange={spy}
      />
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.paste('123456');
    expect(spy).toHaveBeenCalledWith('01:34:53');
  });

  it('calls onFocus once when one of the inputs is focused', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} format="12h" withSeconds onFocus={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    expect(spy).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByLabelText('test-minutes'));
    expect(spy).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByLabelText('test-seconds'));
    expect(spy).toHaveBeenCalledTimes(1);

    await userEvent.click(screen.getByLabelText('test-am-pm'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur once when one of the inputs is blurred', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} format="12h" withSeconds onBlur={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.click(screen.getByLabelText('test-minutes'));
    await userEvent.click(screen.getByLabelText('test-seconds'));
    await userEvent.click(screen.getByLabelText('test-am-pm'));
    expect(spy).not.toHaveBeenCalled();

    await userEvent.tab();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('allows getting inputs refs', () => {
    const hoursRef = createRef<HTMLInputElement>();
    const minutesRef = createRef<HTMLInputElement>();
    const secondsRef = createRef<HTMLInputElement>();
    const amPmRef = createRef<HTMLSelectElement>();

    render(
      <TimePicker
        {...defaultProps}
        format="12h"
        withSeconds
        hoursRef={hoursRef}
        minutesRef={minutesRef}
        secondsRef={secondsRef}
        amPmRef={amPmRef}
      />
    );

    expect(hoursRef.current).toBe(screen.getByLabelText('test-hours'));
    expect(minutesRef.current).toBe(screen.getByLabelText('test-minutes'));
    expect(secondsRef.current).toBe(screen.getByLabelText('test-seconds'));
    expect(amPmRef.current).toBe(screen.getByLabelText('test-am-pm'));
  });

  it('moves focus to the next input when double zero is entered', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '0');
    expect(screen.getByLabelText('test-hours')).toHaveFocus();

    await userEvent.type(screen.getByLabelText('test-hours'), '0');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
  });
});
