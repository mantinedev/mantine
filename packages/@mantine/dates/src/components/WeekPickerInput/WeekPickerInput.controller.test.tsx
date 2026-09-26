import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, userEvent } from '@mantine-tests/core';
import { clickControl, clickInput } from '@mantine-tests/dates';
import { DatePickerType } from '../../types';
import { PickerInputController, PickerInputControllerOptions } from '../PickerInputBase';
import { useWeekPickerInput } from './use-week-picker-input/use-week-picker-input';
import { WeekPickerInput, WeekPickerInputProps } from './WeekPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

function ControllerInput<Type extends DatePickerType = 'default'>({
  options,
  capture,
  ...others
}: {
  options?: PickerInputControllerOptions;
  capture: (controller: PickerInputController) => void;
} & WeekPickerInputProps<Type>) {
  const controller = useWeekPickerInput(options);
  capture(controller);

  return <WeekPickerInput {...(defaultProps as any)} controller={controller} {...others} />;
}

function PopoverOpenedInput({
  onToggle,
  onChange,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
  onChange?: (opened: boolean) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  return (
    <WeekPickerInput
      {...(defaultProps as any)}
      defaultValue="2024-06-03"
      popoverProps={{
        ...defaultProps.popoverProps,
        opened,
        onChange: (next: boolean) => {
          onChange?.(next);
          setOpened(next);
        },
      }}
    />
  );
}

function ControlledOpenedInput({
  onToggle,
  capture,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
  capture: (controller: PickerInputController) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  const controller = useWeekPickerInput({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  capture(controller);
  return (
    <WeekPickerInput {...(defaultProps as any)} defaultValue="2024-06-03" controller={controller} />
  );
}

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown] [class*="calendarHeaderLevel"]')
    ?.textContent;
}

describe('@mantine/dates/WeekPickerInput/controller', () => {
  it('opens the dropdown from outside at the month of the value', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-03" capture={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('June 2024');
    expect(controller.getLevel()).toBe('month');
    expect(controller.getDisplayedDate()).toBe('2024-06-03');
  });

  it('opens on the year level when the level is set right after openDropdown', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-03" capture={(c) => (controller = c)} />
    );

    act(() => {
      controller.openDropdown();
      controller.setLevel('year');
    });

    expect(getHeader(container)).toBe('2024');
  });

  it('resets the displayed month and level when the input reopens the dropdown', async () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-03" capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    act(() => controller.next());
    act(() => controller.setLevel('year'));
    expect(getHeader(container)).toBe('2024');

    act(() => controller.closeDropdown());
    await clickInput(container);
    expect(getHeader(container)).toBe('June 2024');
    expect(controller.getLevel()).toBe('month');
  });

  it('reports opens and closes made by the component itself', async () => {
    const spy = jest.fn();
    const onChange = jest.fn();
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ onDropdownOpenedChange: spy }}
        defaultValue="2024-06-03"
        onChange={onChange}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);

    await clickControl(container, 10);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(controller.isDropdownOpened()).toBe(false);
  });

  it('clears a half-selected range once when the dropdown is closed through the controller', async () => {
    const spy = jest.fn();
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-06-03' }}
        onChange={spy}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    await clickControl(container, 10);
    expect(spy).toHaveBeenLastCalledWith([expect.any(String), null]);

    act(() => controller.closeDropdown());
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('clears a half-selected range once when the user dismisses the dropdown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-06-03' }}
        onChange={spy}
        capture={() => {}}
      />
    );

    await clickInput(container);
    await clickControl(container, 10);
    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('resets the calendar when the dropdown is reopened with popoverProps.opened', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    const { container } = render(<PopoverOpenedInput onToggle={(fn) => (setOpened = fn)} />);

    act(() => setOpened(true));
    expect(getHeader(container)).toBe('June 2024');

    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('July 2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('June 2024');
  });

  it('reports the input opens and closes to popoverProps.onChange', async () => {
    const spy = jest.fn();
    const { container } = render(<PopoverOpenedInput onToggle={() => {}} onChange={spy} />);

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(getDropdown(container)).not.toBe(null);

    await clickControl(container, 10);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('resets the calendar when the parent opens a controlled dropdown', () => {
    let setOpened: (opened: boolean) => void = () => {};
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControlledOpenedInput
        onToggle={(fn) => (setOpened = fn)}
        capture={(c) => (controller = c)}
      />
    );

    act(() => setOpened(true));
    act(() => controller.next());
    act(() => controller.setLevel('year'));
    expect(getHeader(container)).toBe('2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('June 2024');
  });

  it('ignores date and level props when a controller is provided', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ defaultDate: '2024-06-03' }}
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        defaultLevel="decade"
      />
    );

    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('June 2024');
  });

  it('does not open the dropdown of a disabled input', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(<ControllerInput disabled capture={(c) => (controller = c)} />);

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('keeps the value month on reopen without a controller, as before', async () => {
    const { container } = render(
      <WeekPickerInput {...(defaultProps as any)} defaultValue="2024-06-03" />
    );

    await clickInput(container);
    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('July 2024');
    await userEvent.keyboard('{Escape}');

    await clickInput(container);
    expect(getHeader(container)).toBe('June 2024');
  });
});
