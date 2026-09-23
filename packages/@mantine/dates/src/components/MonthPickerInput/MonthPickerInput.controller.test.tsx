import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, userEvent } from '@mantine-tests/core';
import { clickControl, clickInput, expectValue } from '@mantine-tests/dates';
import { DatePickerType } from '../../types';
import type { PickerInputController, PickerInputControllerOptions } from '../PickerInputBase';
import { MonthPickerInput, MonthPickerInputProps } from './MonthPickerInput';
import { useMonthPickerInput } from './use-month-picker-input/use-month-picker-input';

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
} & MonthPickerInputProps<Type>) {
  const controller = useMonthPickerInput(options);
  capture(controller);

  return <MonthPickerInput {...(defaultProps as any)} controller={controller} {...others} />;
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
    <MonthPickerInput
      {...(defaultProps as any)}
      defaultValue="2024-06-01"
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
  const controller = useMonthPickerInput({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  capture(controller);
  return (
    <MonthPickerInput
      {...(defaultProps as any)}
      defaultValue="2024-06-01"
      controller={controller}
    />
  );
}

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown] [class*="calendarHeaderLevel"]')
    ?.textContent;
}

describe('@mantine/dates/MonthPickerInput/controller', () => {
  it('opens the dropdown from outside on the year level at the year of the value', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-01" capture={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('2024');
    expect(controller.getLevel()).toBe('year');
    expect(controller.getDisplayedDate()).toBe('2024-06-01');
  });

  it('opens on the decade level when the level is set right after openDropdown', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-01" capture={(c) => (controller = c)} />
    );

    act(() => {
      controller.openDropdown();
      controller.setLevel('decade');
    });

    expect(getHeader(container)).toBe('2020 – 2029');
  });

  it('resets the displayed year and level when the input reopens the dropdown', async () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-01" capture={(c) => (controller = c)} />
    );

    act(() => {
      controller.openDropdown();
      controller.setLevel('decade');
    });
    act(() => controller.next());
    expect(getHeader(container)).toBe('2030 – 2039');

    act(() => controller.closeDropdown());
    await clickInput(container);
    expect(getHeader(container)).toBe('2024');
    expect(controller.getLevel()).toBe('year');
  });

  it('reports opens and closes made by the component itself', async () => {
    const spy = jest.fn();
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ onDropdownOpenedChange: spy }}
        defaultValue="2024-06-01"
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);

    await clickControl(container, 2);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(controller.isDropdownOpened()).toBe(false);
    expectValue(container, 'March 2024');
  });

  it('clears a half-selected range once when the dropdown is closed through the controller', async () => {
    const spy = jest.fn();
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-01-01' }}
        onChange={spy}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    await clickControl(container, 2);
    expect(spy).toHaveBeenLastCalledWith(['2024-03-01', null]);

    act(() => controller.closeDropdown());
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('clears a half-selected range once when the user dismisses the dropdown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-01-01' }}
        onChange={spy}
        capture={() => {}}
      />
    );

    await clickInput(container);
    await clickControl(container, 2);
    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('resets the calendar when the dropdown is reopened with popoverProps.opened', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    const { container } = render(<PopoverOpenedInput onToggle={(fn) => (setOpened = fn)} />);

    act(() => setOpened(true));
    expect(getHeader(container)).toBe('2024');

    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('2025');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('2024');
  });

  it('reports the input opens and closes to popoverProps.onChange', async () => {
    const spy = jest.fn();
    const { container } = render(<PopoverOpenedInput onToggle={() => {}} onChange={spy} />);

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(getDropdown(container)).not.toBe(null);

    await clickControl(container, 2);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(getDropdown(container)).toBe(null);
    expectValue(container, 'March 2024');
  });

  it('resets the calendar when the parent opens a controlled dropdown', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControlledOpenedInput
        onToggle={(fn) => (setOpened = fn)}
        capture={(c) => (controller = c)}
      />
    );

    act(() => setOpened(true));
    act(() => controller.setLevel('decade'));
    expect(getHeader(container)).toBe('2020 – 2029');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('2024');
  });

  it('ignores date and level props when a controller is provided', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ defaultDate: '2024-06-01' }}
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        defaultLevel="decade"
      />
    );

    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('2024');
  });

  it('does not open the dropdown of a disabled input', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(<ControllerInput disabled capture={(c) => (controller = c)} />);

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('keeps the value year on reopen without a controller, as before', async () => {
    const { container } = render(
      <MonthPickerInput {...(defaultProps as any)} defaultValue="2024-06-01" />
    );

    await clickInput(container);
    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('2025');
    await userEvent.keyboard('{Escape}');

    await clickInput(container);
    expect(getHeader(container)).toBe('2024');
  });
});
