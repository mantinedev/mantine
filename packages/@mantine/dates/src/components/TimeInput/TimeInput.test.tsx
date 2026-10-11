import { fireEvent } from '@testing-library/react';
import { __InputStylesNames } from '@mantine/core';
import { inputDefaultProps, inputStylesApiSelectors, render, tests } from '@mantine-tests/core';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/dates/TimeInput', () => {
  tests.axe([
    <TimeInput aria-label="test-label" key="1" />,
    <TimeInput label="test-label" key="2" />,
    <TimeInput label="test-label" error key="3" />,
    <TimeInput label="test-label" error="test-error" id="test" key="4" />,
    <TimeInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TimeInputProps, __InputStylesNames>({
    component: TimeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    componentName: 'TimeInput',
  });
});

describe('@mantine/dates/TimeInput data-empty', () => {
  it('sets data-empty for controlled value', () => {
    const { container, rerender } = render(<TimeInput value="" onChange={() => {}} />);
    expect(container.querySelector('input')).toHaveAttribute('data-empty', 'true');
    rerender(<TimeInput value="10:30" onChange={() => {}} />);
    expect(container.querySelector('input')).not.toHaveAttribute('data-empty');
  });

  it('tracks data-empty for uncontrolled value', () => {
    const { container } = render(<TimeInput />);
    const input = container.querySelector('input')!;
    expect(input).toHaveAttribute('data-empty', 'true');
    fireEvent.change(input, { target: { value: '10:30' } });
    expect(input).not.toHaveAttribute('data-empty');
    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveAttribute('data-empty', 'true');
  });

  it('does not set data-empty when defaultValue is provided', () => {
    const { container } = render(<TimeInput defaultValue="10:30" />);
    expect(container.querySelector('input')).not.toHaveAttribute('data-empty');
  });
});

describe('@mantine/dates/TimeInput min/max', () => {
  it('sets step to 60 by default and to 1 with withSeconds', () => {
    const { container, rerender } = render(<TimeInput />);
    expect(container.querySelector('input')).toHaveAttribute('step', '60');
    rerender(<TimeInput withSeconds />);
    expect(container.querySelector('input')).toHaveAttribute('step', '1');
  });

  it('forwards minTime and maxTime as native min and max', () => {
    const { container } = render(<TimeInput minTime="09:00" maxTime="17:00" />);
    expect(container.querySelector('input')).toHaveAttribute('min', '09:00');
    expect(container.querySelector('input')).toHaveAttribute('max', '17:00');
  });

  it('does not forward native min and max when minTime is after maxTime', () => {
    const { container } = render(<TimeInput minTime="22:00" maxTime="06:00" />);
    expect(container.querySelector('input')).not.toHaveAttribute('min');
    expect(container.querySelector('input')).not.toHaveAttribute('max');
  });

  it('clamps out of range values on blur and calls onChange with a change event', () => {
    const spy = jest.fn();
    const { container } = render(<TimeInput minTime="09:00" maxTime="17:00" onChange={spy} />);
    const input = container.querySelector('input')!;

    fireEvent.change(input, { target: { value: '18:30' } });
    spy.mockClear();
    fireEvent.blur(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('change');
    expect(spy.mock.calls[0][0].target.value).toBe('17:00');
    expect(input).toHaveValue('17:00');

    fireEvent.change(input, { target: { value: '07:15' } });
    spy.mockClear();
    fireEvent.blur(input);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('09:00');
  });

  it('does not call onChange on blur for in range values', () => {
    const spy = jest.fn();
    const { container } = render(<TimeInput minTime="09:00" maxTime="17:00" onChange={spy} />);
    const input = container.querySelector('input')!;

    fireEvent.change(input, { target: { value: '12:00' } });
    spy.mockClear();
    fireEvent.blur(input);
    expect(spy).not.toHaveBeenCalled();
    expect(input).toHaveValue('12:00');
  });

  it('keeps controlled value when the parent ignores the clamped change', () => {
    const spy = jest.fn((event: React.ChangeEvent<HTMLInputElement>) => event.target.value);
    const { container } = render(
      <TimeInput value="18:30" minTime="09:00" maxTime="17:00" onChange={spy} />
    );
    const input = container.querySelector('input')!;

    fireEvent.blur(input);
    expect(spy).toHaveReturnedWith('17:00');
    expect(input).toHaveValue('18:30');
  });
});
