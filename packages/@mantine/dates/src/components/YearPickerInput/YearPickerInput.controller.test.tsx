import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, userEvent } from '@mantine-tests/core';
import { clickControl, clickInput, expectValue } from '@mantine-tests/dates';
import { DatePickerType } from '../../types';
import type { PickerInputController, PickerInputControllerOptions } from '../PickerInputBase';
import { useYearPickerInput } from './use-year-picker-input/use-year-picker-input';
import { YearPickerInput, YearPickerInputProps } from './YearPickerInput';

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
} & YearPickerInputProps<Type>) {
  const controller = useYearPickerInput(options);
  capture(controller);

  return <YearPickerInput {...(defaultProps as any)} controller={controller} {...others} />;
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
    <YearPickerInput
      {...(defaultProps as any)}
      defaultValue="2024-01-01"
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
  const controller = useYearPickerInput({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  capture(controller);
  return (
    <YearPickerInput {...(defaultProps as any)} defaultValue="2024-01-01" controller={controller} />
  );
}

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown] [class*="calendarHeaderLevel"]')
    ?.textContent;
}

describe('@mantine/dates/YearPickerInput/controller', () => {
  it('opens the dropdown from outside at the decade of the value', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-01-01" capture={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('2020 – 2029');
    expect(controller.getLevel()).toBe('decade');
    expect(controller.getDisplayedDate()).toBe('2024-01-01');
  });

  it('navigates decades through the controller', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-01-01" capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    act(() => controller.previous());
    expect(getHeader(container)).toBe('2010 – 2019');
    act(() => controller.setLevel('month'));
    expect(controller.getLevel()).toBe('decade');
  });

  it('resets the displayed decade when the input reopens the dropdown', async () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-01-01" capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    act(() => controller.next());
    expect(getHeader(container)).toBe('2030 – 2039');

    act(() => controller.closeDropdown());
    await clickInput(container);
    expect(getHeader(container)).toBe('2020 – 2029');
  });

  it('reports opens and closes made by the component itself', async () => {
    const spy = jest.fn();
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ onDropdownOpenedChange: spy }}
        defaultValue="2024-01-01"
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);

    await clickControl(container, 2);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(controller.isDropdownOpened()).toBe(false);
    expectValue(container, '2022');
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
    expect(spy).toHaveBeenLastCalledWith(['2022-01-01', null]);

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
    expect(getHeader(container)).toBe('2020 – 2029');

    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('2030 – 2039');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('2020 – 2029');
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
    expectValue(container, '2022');
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
    expect(getHeader(container)).toBe('2030 – 2039');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expect(getHeader(container)).toBe('2020 – 2029');
  });

  it('ignores date props when a controller is provided', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ defaultDate: '2024-01-01' }}
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
      />
    );

    act(() => controller.openDropdown());
    expect(getHeader(container)).toBe('2020 – 2029');
  });

  it('does not open the dropdown of a disabled input', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(<ControllerInput disabled capture={(c) => (controller = c)} />);

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('keeps the value decade on reopen without a controller, as before', async () => {
    const { container } = render(
      <YearPickerInput {...(defaultProps as any)} defaultValue="2024-01-01" />
    );

    await clickInput(container);
    await userEvent.click(container.querySelector('[data-direction="next"]')!);
    expect(getHeader(container)).toBe('2030 – 2039');
    await userEvent.keyboard('{Escape}');

    await clickInput(container);
    expect(getHeader(container)).toBe('2020 – 2029');
  });
});
