import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { TimePicker, TimePickerProps } from './TimePicker';
import {
  TimePickerController,
  TimePickerControllerOptions,
  useTimePicker,
} from './use-time-picker';

const defaultProps: TimePickerProps = {
  hoursInputLabel: 'test-hours',
  minutesInputLabel: 'test-minutes',
  secondsInputLabel: 'test-seconds',
  amPmInputLabel: 'test-am-pm',
  clearButtonProps: { 'aria-label': 'test-clear' },
};

function ControllerTest({
  options,
  onController,
  ...others
}: {
  options?: TimePickerControllerOptions;
  onController: (controller: TimePickerController) => void;
} & Omit<TimePickerProps, 'controller'>) {
  const controller = useTimePicker(options);
  onController(controller);
  return <TimePicker {...defaultProps} controller={controller} {...others} />;
}

function getHoursInput() {
  return screen.getByLabelText('test-hours');
}

describe('@mantine/dates/TimePicker/controller', () => {
  it('takes the value from the controller and ignores the state props', () => {
    const onChange = jest.fn();
    let controller: TimePickerController = null as any;

    function Test() {
      controller = useTimePicker({ defaultValue: '14:35' });
      return (
        <TimePicker
          {...defaultProps}
          controller={controller}
          value="08:00"
          defaultValue="09:00"
          onChange={onChange}
        />
      );
    }

    render(<Test />);

    expect(controller.value).toBe('14:35');
    expect(getHoursInput()).toHaveValue('14');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('35');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('updates the controller when the user types into a field', async () => {
    let controller: TimePickerController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    await userEvent.type(getHoursInput(), '12');
    await userEvent.type(screen.getByLabelText('test-minutes'), '45');

    expect(controller.hours).toBe(12);
    expect(controller.minutes).toBe(45);
    expect(controller.value).toBe('12:45');
  });

  it('updates the rendered fields when a controller action is called from outside', () => {
    let controller: TimePickerController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    act(() => controller.setValue('07:08'));
    expect(getHoursInput()).toHaveValue('07');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('08');

    act(() => controller.clear());
    expect(getHoursInput()).toHaveValue('');
    expect(screen.getByLabelText('test-minutes')).toHaveValue('');
  });

  it('moves focus to the given field with the focus action', () => {
    let controller: TimePickerController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    act(() => controller.focus('minutes'));
    expect(screen.getByLabelText('test-minutes')).toHaveFocus();

    act(() => controller.focus('hours'));
    expect(getHoursInput()).toHaveFocus();
  });

  it('renders the fields defined by the controller options rather than by the props', () => {
    let controller: TimePickerController = null as any;
    render(
      <ControllerTest
        options={{ format: '12h', withSeconds: true }}
        onController={(value) => (controller = value)}
      />
    );

    expect(controller.format).toBe('12h');
    expect(screen.getByLabelText('test-seconds')).toBeInTheDocument();
    expect(screen.getByLabelText('test-am-pm')).toBeInTheDocument();
  });

  it('displays the clear button based on the controller state', () => {
    let controller: TimePickerController = null as any;
    render(<ControllerTest clearable onController={(value) => (controller = value)} />);

    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();

    act(() => controller.setValue('10:20'));
    expect(screen.getByLabelText('test-clear')).toBeInTheDocument();

    act(() => controller.clear());
    expect(screen.queryByLabelText('test-clear')).not.toBeInTheDocument();
  });

  it('writes the controller value to the hidden input', () => {
    let controller: TimePickerController = null as any;
    const { container } = render(
      <ControllerTest name="test-time" onController={(value) => (controller = value)} />
    );

    act(() => controller.setValue('21:15'));
    expect(container.querySelector('input[type="hidden"]')).toHaveValue('21:15');
  });

  it('clamps the value to the controller min and max on blur', async () => {
    let controller: TimePickerController = null as any;
    render(
      <ControllerTest
        options={{ min: '10:00', max: '18:00', defaultValue: '05:00' }}
        onController={(value) => (controller = value)}
      />
    );

    await userEvent.click(getHoursInput());
    await userEvent.tab();
    await userEvent.tab();

    expect(controller.value).toBe('10:00');
  });

  it('shares one controller between the component and the code that created it', () => {
    let controller: TimePickerController = null as any;

    function Test() {
      controller = useTimePicker({ defaultValue: '10:20' });
      return (
        <>
          <button type="button" onClick={controller.clear}>
            external-clear
          </button>
          <TimePicker {...defaultProps} controller={controller} />
        </>
      );
    }

    render(<Test />);
    expect(getHoursInput()).toHaveValue('10');

    act(() => screen.getByText('external-clear').click());
    expect(getHoursInput()).toHaveValue('');
    expect(controller.hasValue()).toBe(false);
  });
});
