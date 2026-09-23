import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { clickControl, clickInput, expectValue } from '@mantine-tests/dates';
import { DatePickerType } from '../../types';
import { DatePickerInput, DatePickerInputProps } from './DatePickerInput';
import {
  useDatePickerInput,
  type DatePickerInputController,
  type DatePickerInputControllerOptions,
} from './use-date-picker-input/use-date-picker-input';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
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

function ControllerInput<Type extends DatePickerType = 'default'>({
  options,
  capture,
  ...others
}: {
  options?: DatePickerInputControllerOptions;
  capture: (controller: DatePickerInputController) => void;
} & DatePickerInputProps<Type>) {
  const controller = useDatePickerInput(options);
  capture(controller);

  return <DatePickerInput {...(defaultProps as any)} controller={controller} {...others} />;
}

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function expectHeader(level: 'month' | 'year', label: string) {
  expect(screen.getByLabelText(`${level}-level`).textContent).toBe(label);
}

function PopoverOpenedInput({
  onToggle,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  return (
    <DatePickerInput
      {...(defaultProps as any)}
      defaultValue="2024-06-15"
      popoverProps={{ ...defaultProps.popoverProps, opened }}
    />
  );
}

function ControlledOpenedInput({
  onToggle,
  capture,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
  capture: (controller: DatePickerInputController) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  const controller = useDatePickerInput({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  capture(controller);
  return (
    <DatePickerInput {...(defaultProps as any)} defaultValue="2024-06-15" controller={controller} />
  );
}

describe('@mantine/dates/DatePickerInput/controller', () => {
  it('opens the dropdown from outside at the month of the value', () => {
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-15" capture={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getDropdown(container)).toBeInTheDocument();
    expectHeader('month', 'June 2024');
    expect(controller.getDisplayedDate()).toBe('2024-06-15');
  });

  it('navigates levels and dates through the controller', () => {
    let controller: DatePickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" capture={(c) => (controller = c)} />);

    act(() => controller.openDropdown());
    act(() => controller.next());
    expectHeader('month', 'July 2024');

    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    act(() => controller.previous());
    expectHeader('year', '2023');
  });

  it('opens on a given level when the level is set right after openDropdown', () => {
    let controller: DatePickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" capture={(c) => (controller = c)} />);

    act(() => {
      controller.openDropdown();
      controller.setLevel('year');
    });

    expectHeader('year', '2024');
  });

  it('resets the displayed date and level to the value and defaultLevel on every open', async () => {
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ defaultLevel: 'month' }}
        defaultValue="2024-06-15"
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    await userEvent.click(screen.getByLabelText('next-month'));
    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    act(() => controller.closeDropdown());
    expect(getDropdown(container)).toBe(null);

    await clickInput(container);
    expectHeader('month', 'June 2024');
    expect(controller.getLevel()).toBe('month');
  });

  it('reports opens and closes made by the component itself', async () => {
    const spy = jest.fn();
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        options={{ onDropdownOpenedChange: spy }}
        defaultValue="2024-06-15"
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(controller.isDropdownOpened()).toBe(true);

    await clickControl(container, 10);
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('keeps the input opening its own dropdown with the keyboard', async () => {
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-15" capture={(c) => (controller = c)} />
    );

    container.querySelector<HTMLButtonElement>('[data-dates-input]')!.focus();
    await userEvent.keyboard('{Enter}');
    expect(controller.isDropdownOpened()).toBe(true);
    expect(getDropdown(container)).toBeInTheDocument();
  });

  it('clears a half-selected range when the dropdown is closed through the controller', async () => {
    const spy = jest.fn();
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    await clickControl(container, 10);
    expect(spy).toHaveBeenLastCalledWith(['2024-06-06', null]);

    act(() => controller.closeDropdown());
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('clears a half-selected range once when the user dismisses the dropdown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ControllerInput
        type="range"
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        capture={() => {}}
      />
    );

    await clickInput(container);
    await clickControl(container, 10);
    expect(spy).toHaveBeenLastCalledWith(['2024-06-06', null]);
    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('clears a half-selected controlled range once when the parent does not update the value', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ControllerInput
        type="range"
        value={['2024-06-06', null]}
        onChange={spy}
        capture={() => {}}
      />
    );

    await clickInput(container);
    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('does not show the dropdown of a disabled input when the controller starts opened', () => {
    let controller: DatePickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        disabled
        options={{ defaultDropdownOpened: true }}
        capture={(c) => (controller = c)}
      />
    );

    expect(getDropdown(container)).toBe(null);
    expect(controller.isDropdownOpened()).toBe(true);
  });

  it('hides the dropdown without changing controller state when the input becomes disabled', () => {
    const onDropdownOpenedChange = jest.fn();
    let controller: DatePickerInputController = null as any;
    const { container, rerender } = render(
      <ControllerInput options={{ onDropdownOpenedChange }} capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    expect(getDropdown(container)).not.toBe(null);
    onDropdownOpenedChange.mockClear();

    rerender(
      <>
        <ControllerInput
          disabled
          options={{ onDropdownOpenedChange }}
          capture={(c) => (controller = c)}
        />
      </>
    );

    expect(getDropdown(container)).toBe(null);
    expect(controller.isDropdownOpened()).toBe(true);
    expect(onDropdownOpenedChange).not.toHaveBeenCalled();
  });

  it('displays the month of the value when the controller starts opened', () => {
    render(
      <ControllerInput
        defaultValue="2024-06-15"
        options={{ defaultDropdownOpened: true }}
        capture={() => {}}
      />
    );

    expectHeader('month', 'June 2024');
  });

  it('displays the month of the value over defaultDate when the controller starts opened', () => {
    render(
      <ControllerInput
        defaultValue="2024-06-15"
        options={{ defaultDropdownOpened: true, defaultDate: '2030-01-01' }}
        capture={() => {}}
      />
    );

    expectHeader('month', 'June 2024');
  });

  it('keeps the navigated month when the value changes while the controller started opened', async () => {
    const { container } = render(
      <ControllerInput
        type="multiple"
        defaultValue={['2024-06-15']}
        options={{ defaultDropdownOpened: true }}
        capture={() => {}}
      />
    );

    await userEvent.click(screen.getByLabelText('next-month'));
    expectHeader('month', 'July 2024');

    await clickControl(container, 10);
    expectValue(container, 'June 15, 2024, July 11, 2024');
    expectHeader('month', 'July 2024');
  });

  it('resets the calendar when the dropdown is reopened with popoverProps.opened', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    render(<PopoverOpenedInput onToggle={(fn) => (setOpened = fn)} />);

    act(() => setOpened(true));
    expectHeader('month', 'June 2024');

    await userEvent.click(screen.getByLabelText('next-month'));
    await userEvent.click(screen.getByLabelText('next-month'));
    expectHeader('month', 'August 2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expectHeader('month', 'June 2024');
  });

  it('resets the calendar when the parent opens a controlled dropdown', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    let controller: DatePickerInputController = null as any;
    render(
      <ControlledOpenedInput
        onToggle={(fn) => (setOpened = fn)}
        capture={(c) => (controller = c)}
      />
    );

    act(() => setOpened(true));
    await userEvent.click(screen.getByLabelText('next-month'));
    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expectHeader('month', 'June 2024');
  });

  it('keeps level set right after openDropdown', () => {
    let controller: DatePickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" capture={(c) => (controller = c)} />);

    act(() => {
      controller.openDropdown();
      controller.setLevel('year');
    });

    expectHeader('year', '2024');
  });

  it('ignores date and level props when a controller is provided', () => {
    let controller: DatePickerInputController = null as any;
    render(
      <ControllerInput
        options={{ defaultDate: '2024-06-15' }}
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        level="decade"
        defaultLevel="decade"
      />
    );

    act(() => controller.openDropdown());
    expectHeader('month', 'June 2024');
  });

  it('does not open the dropdown of a disabled or read only input', () => {
    let controller: DatePickerInputController = null as any;
    const { container, rerender } = render(
      <ControllerInput disabled capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);

    rerender(
      <>
        <ControllerInput readOnly capture={(c) => (controller = c)} />
      </>
    );

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
  });

  it('keeps the value month on open without a controller, as before', async () => {
    const { container } = render(
      <DatePickerInput {...(defaultProps as any)} defaultValue="2024-06-15" />
    );

    await clickInput(container);
    await userEvent.click(screen.getByLabelText('next-month'));
    expectHeader('month', 'July 2024');
    await userEvent.keyboard('{Escape}');

    await clickInput(container);
    expectHeader('month', 'June 2024');
    expectValue(container, 'June 15, 2024');
  });
});
