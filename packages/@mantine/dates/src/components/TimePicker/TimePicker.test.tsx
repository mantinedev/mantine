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
    varsResolver: true,
    displayName: '@mantine/dates/TimePicker',
    stylesApiSelectors: ['root'],
  });

  tests.itSupportsSharedInputDefaults<TimePickerProps>({
    component: TimePicker,
    props: defaultProps,
    componentName: 'TimePicker',
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

  // https://github.com/mantinedev/mantine/issues/8967
  it('allows entering 01-09 hours over a selected 00 value', async () => {
    render(<TimePicker {...defaultProps} format="24h" defaultValue="00:00" />);

    const hoursInput = screen.getByLabelText('test-hours');
    await userEvent.click(hoursInput);
    await userEvent.keyboard('02');

    expect(hoursInput).toHaveValue('02');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');
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

  it('calls onChange when cleared with backspace in uncontrolled mode', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} defaultValue="12:34" onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.type(document.activeElement!, '{backspace}');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith('');
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

  // https://github.com/mantinedev/mantine/issues/9041
  it('does not include seconds in pasted value when withSeconds is false', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} format="24h" onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.paste('13:34:56');

    expect(screen.getByLabelText('test-hours')).toHaveValue('13');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('34');
    expect(spy).toHaveBeenLastCalledWith('13:34');
  });

  // https://github.com/mantinedev/mantine/issues/9041
  it('emits clamped value without seconds on blur when withSeconds is false', async () => {
    const spy = jest.fn();
    render(
      <>
        <TimePicker {...defaultProps} format="24h" min="09:00" max="17:00" onChange={spy} />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.type(screen.getByLabelText('test-hours'), '18');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.click(screen.getByText('outside'));

    expect(spy).toHaveBeenLastCalledWith('17:00');
    expect(spy.mock.calls.every(([value]) => !/^\d{2}:\d{2}:\d{2}$/.test(value))).toBe(true);
  });

  // https://github.com/mantinedev/mantine/issues/9041
  it('does not append seconds on blur for an in-range value when withSeconds is false', async () => {
    const spy = jest.fn();
    render(
      <>
        <TimePicker {...defaultProps} format="24h" min="09:00" max="17:00" onChange={spy} />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.type(screen.getByLabelText('test-hours'), '10');
    await userEvent.type(screen.getByLabelText('test-minutes'), '00');
    await userEvent.click(screen.getByText('outside'));

    expect(spy).toHaveBeenLastCalledWith('10:00');
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

  it('preserves AM/PM when only the hours field is changed (12h format)', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} format="12h" defaultValue="13:00" onChange={spy} />);

    const hoursInput = screen.getByLabelText('test-hours');
    await userEvent.clear(hoursInput);
    await userEvent.type(hoursInput, '2');

    expect(spy).toHaveBeenLastCalledWith('14:00');
  });

  it('preserves AM/PM when only the minutes field is changed (12h format)', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} format="12h" defaultValue="13:00" onChange={spy} />);

    const minutesInput = screen.getByLabelText('test-minutes');
    await userEvent.clear(minutesInput);
    await userEvent.type(minutesInput, '30');

    expect(spy).toHaveBeenLastCalledWith('13:30');
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
    expect(spy).toHaveBeenCalledWith('07:30:00');

    await userEvent.tab();
    expect(spy).toHaveBeenCalledWith('08:30:00');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '19');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    expect(spy).toHaveBeenCalledWith('19:30:00');

    await userEvent.tab();
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
    expect(spy).toHaveBeenCalledWith('07:30:00');

    await userEvent.tab();
    expect(spy).toHaveBeenCalledWith('08:30:00');

    await userEvent.clear(screen.getByLabelText('test-hours'));
    await userEvent.clear(screen.getByLabelText('test-minutes'));
    await userEvent.clear(screen.getByLabelText('test-seconds'));
    spy.mockClear();

    await userEvent.type(screen.getByLabelText('test-hours'), '7');
    await userEvent.type(screen.getByLabelText('test-minutes'), '30');
    await userEvent.type(screen.getByLabelText('test-seconds'), '0');
    await userEvent.type(screen.getByLabelText('test-am-pm'), 'P');
    expect(spy).toHaveBeenCalledWith('19:30:00');

    await userEvent.tab();
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

  it('does not get stuck at the field maximum when typing more digits (like input[type="time"])', async () => {
    render(<TimePicker {...defaultProps} format="24h" />);

    // Type "59" then keep typing "12" without re-focusing the field. The minutes
    // field should roll over to "12" instead of sticking at the maximum (59).
    await userEvent.type(screen.getByLabelText('test-minutes'), '5912');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('12');
  });

  it('replaces the value when a typed digit cannot extend it into a valid value', async () => {
    render(<TimePicker {...defaultProps} withSeconds format="24h" />);

    // Hours field max is 23. Typing "2" then "5" cannot form 25, so the entry
    // restarts from "5" producing "05" (matches input[type="time"]).
    await userEvent.type(screen.getByLabelText('test-hours'), '25');
    expect(screen.getByLabelText('test-hours')).toHaveValue('05');

    // Seconds field max is 59. Typing "5", "9", then "9" rolls the trailing "9"
    // into a fresh entry instead of staying stuck at 59.
    await userEvent.type(screen.getByLabelText('test-seconds'), '599');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('09');
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

    await userEvent.keyboard('0');
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();
  });

  it('renders duration type with default value greater than 24 hours', () => {
    render(<TimePicker {...defaultProps} type="duration" withSeconds defaultValue="155:22:45" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('155');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('22');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('45');
  });

  it('calls onChange with values greater than 24 hours in duration mode', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} type="duration" withSeconds onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.paste('155:22:45');
    expect(spy).toHaveBeenCalledWith('155:22:45');
  });

  it('allows pasting values greater than 9999 hours in duration mode', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} type="duration" withSeconds onChange={spy} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.paste('10000:00:00');
    expect(spy).toHaveBeenCalledWith('10000:00:00');
  });

  it('allows typing values greater than 9999 hours in duration mode', async () => {
    const spy = jest.fn();
    render(<TimePicker {...defaultProps} type="duration" withSeconds onChange={spy} />);

    await userEvent.type(screen.getByLabelText('test-hours'), '10000');
    await userEvent.type(screen.getByLabelText('test-minutes'), '00');
    await userEvent.type(screen.getByLabelText('test-seconds'), '00');

    expect(screen.getByLabelText('test-hours')).toHaveValue('10000');
    expect(spy).toHaveBeenCalledWith('10000:00:00');
  });

  it('does not set an upper bound on the hours field in duration mode', () => {
    render(<TimePicker {...defaultProps} type="duration" withSeconds />);
    expect(screen.getByLabelText('test-hours')).not.toHaveAttribute('aria-valuemax');
  });

  it('does not auto-advance from hours field in duration mode', async () => {
    render(<TimePicker {...defaultProps} type="duration" />);

    await userEvent.type(screen.getByLabelText('test-hours'), '8');
    expect(screen.getByLabelText('test-hours')).toHaveFocus();
  });

  it('does not render AM/PM input in duration mode even when format is 12h', () => {
    render(<TimePicker {...defaultProps} type="duration" format="12h" />);
    expect(screen.queryByLabelText('test-am-pm')).not.toBeInTheDocument();
  });

  it('handles controlled value greater than 24 hours in duration mode', () => {
    render(<TimePicker {...defaultProps} type="duration" withSeconds value="1000:00:00" />);
    expect(screen.getByLabelText('test-hours')).toHaveValue('1000');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('00');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('00');
  });

  it('allows incrementing hours beyond 23 in duration mode', async () => {
    render(<TimePicker {...defaultProps} type="duration" defaultValue="23:00" />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.type(document.activeElement!, '{arrowup}');
    expect(screen.getByLabelText('test-hours')).toHaveValue('24');
  });

  it('clears duration value correctly', async () => {
    const spy = jest.fn();
    render(
      <TimePicker
        {...defaultProps}
        type="duration"
        withSeconds
        clearable
        defaultValue="155:22:45"
        onChange={spy}
      />
    );
    expect(screen.getByLabelText('test-hours')).toHaveValue('155');

    await userEvent.click(screen.getByLabelText('test-clear'));
    expect(screen.getByLabelText('test-hours')).toHaveValue('');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');
    expect(screen.getByLabelText('test-seconds')).toHaveValue('');
    expect(spy).toHaveBeenLastCalledWith('');
  });

  it('keeps the dropdown open after selecting a preset by default', async () => {
    render(<TimePicker {...defaultProps} withDropdown presets={['12:30', '15:45']} />);

    await userEvent.click(screen.getByLabelText('test-hours'));
    const preset = screen.getByText('12:30');
    await userEvent.click(preset);

    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.getByText('12:30')).toBeInTheDocument();
  });

  it('closes the dropdown after selecting a preset when closeDropdownOnPresetSelect is set', async () => {
    render(
      <TimePicker
        {...defaultProps}
        withDropdown
        closeDropdownOnPresetSelect
        presets={['12:30', '15:45']}
      />
    );

    await userEvent.click(screen.getByLabelText('test-hours'));
    await userEvent.click(screen.getByText('12:30'));

    expect(screen.getByLabelText('test-hours')).toHaveValue('12');
    expect(screen.queryByText('15:45')).not.toBeInTheDocument();
  });
});
