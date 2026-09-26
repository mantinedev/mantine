import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { PickerInputController, PickerInputControllerOptions } from '../PickerInputBase';
import { DateInput, DateInputProps } from './DateInput';
import { useDateInput } from './use-date-input/use-date-input';

const defaultProps: DateInputProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
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

function ControllerInput({
  options,
  expose,
  ...others
}: {
  options?: PickerInputControllerOptions;
  expose: (controller: PickerInputController) => void;
} & DateInputProps) {
  const controller = useDateInput(options);
  expose(controller);

  return <DateInput {...defaultProps} controller={controller} {...others} />;
}

function PopoverOpenedInput({
  onToggle,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  return (
    <DateInput
      {...defaultProps}
      defaultValue="2024-06-15"
      popoverProps={{ ...defaultProps.popoverProps, opened }}
    />
  );
}

function ControlledOpenedInput({
  onToggle,
  expose,
}: {
  onToggle: (setOpened: (opened: boolean) => void) => void;
  expose: (controller: PickerInputController) => void;
}) {
  const [opened, setOpened] = useState(false);
  onToggle(setOpened);
  const controller = useDateInput({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  expose(controller);
  return <DateInput {...defaultProps} defaultValue="2024-06-15" controller={controller} />;
}

function getInput(container: HTMLElement) {
  return container.querySelector<HTMLInputElement>('[data-dates-input]')!;
}

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function expectHeader(level: 'month' | 'year', label: string) {
  expect(screen.getByLabelText(`${level}-level`).textContent).toBe(label);
}

async function reopenFromInput(container: HTMLElement) {
  await userEvent.click(screen.getByText('outside'));
  expect(getDropdown(container)).toBe(null);
  await userEvent.click(getInput(container));
}

describe('@mantine/dates/DateInput/controller', () => {
  it('keeps the navigated month and resets the level on reopen without a controller', async () => {
    const { container } = render(
      <>
        <DateInput {...defaultProps} defaultValue="2024-06-15" />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(getInput(container));
    expectHeader('month', 'June 2024');
    await userEvent.click(screen.getByLabelText('next-month'));
    await userEvent.click(screen.getByLabelText('month-level'));
    expectHeader('year', '2024');

    await reopenFromInput(container);
    expectHeader('month', 'July 2024');
  });

  it('keeps the navigated month and resets the level on reopen with a controller', async () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <>
        <ControllerInput defaultValue="2024-06-15" expose={(c) => (controller = c)} />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(getInput(container));
    await userEvent.click(screen.getByLabelText('next-month'));
    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    await reopenFromInput(container);
    expectHeader('month', 'July 2024');
    expect(controller.getLevel()).toBe('month');
  });

  it('opens the dropdown from outside at the month of the value', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput defaultValue="2024-06-15" expose={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getDropdown(container)).toBeInTheDocument();
    expectHeader('month', 'June 2024');
    expect(controller.getDisplayedDate()).toBe('2024-06-15');
  });

  it('opens on a given level when the level is set right after openDropdown', () => {
    let controller: PickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" expose={(c) => (controller = c)} />);

    act(() => {
      controller.openDropdown();
      controller.setLevel('year');
    });

    expectHeader('year', '2024');
    expect(controller.getLevel()).toBe('year');
  });

  it('navigates levels and dates through the controller', () => {
    let controller: PickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" expose={(c) => (controller = c)} />);

    act(() => controller.openDropdown());
    act(() => controller.next());
    expectHeader('month', 'July 2024');

    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    act(() => controller.previous());
    expectHeader('year', '2023');
  });

  it('reports opens and closes made by the component itself', async () => {
    const spy = jest.fn();
    let controller: PickerInputController = null as any;
    const onChange = jest.fn();
    const { container } = render(
      <ControllerInput
        options={{ onDropdownOpenedChange: spy, defaultDate: '2024-06-01' }}
        onChange={onChange}
        expose={(c) => (controller = c)}
      />
    );

    await userEvent.click(getInput(container));
    expect(spy).toHaveBeenLastCalledWith(true);
    expect(controller.isDropdownOpened()).toBe(true);

    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(getDropdown(container)).toBe(null);

    await userEvent.type(getInput(container), 'x');
    expect(spy).toHaveBeenLastCalledWith(true);

    await userEvent.click(screen.getByText('20'));
    expect(onChange).toHaveBeenLastCalledWith('2024-06-20');
    expect(spy).toHaveBeenLastCalledWith(false);
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('moves the displayed date to a typed date', async () => {
    let controller: PickerInputController = null as any;
    const onChange = jest.fn();
    const { container } = render(
      <ControllerInput
        valueFormat="YYYY-MM-DD"
        onChange={onChange}
        expose={(c) => (controller = c)}
      />
    );

    await userEvent.type(getInput(container), '2022-03-10');
    expect(onChange).toHaveBeenLastCalledWith('2022-03-10');
    expect(controller.getDate()).toBe('2022-03-10');
    expectHeader('month', 'March 2022');
  });

  it('opens at the month of the value when the controller has no displayed date', () => {
    let controller: PickerInputController = null as any;
    render(<ControllerInput defaultValue="2024-06-15" expose={(c) => (controller = c)} />);

    expect(controller.getDate()).toBe(null);
    act(() => controller.openDropdown());
    expectHeader('month', 'June 2024');
  });

  it('prefers the defaultDate of the controller over the value', () => {
    let controller: PickerInputController = null as any;
    render(
      <ControllerInput
        options={{ defaultDate: '2020-01-01' }}
        defaultValue="2024-06-15"
        expose={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    expectHeader('month', 'January 2020');
  });

  it('follows a controlled value with the displayed date', () => {
    let controller: PickerInputController = null as any;
    const { rerender } = render(
      <ControllerInput value="2024-06-15" expose={(c) => (controller = c)} />
    );

    expect(controller.getDate()).toBe('2024-06-15');
    rerender(<ControllerInput value="2025-02-01" expose={(c) => (controller = c)} />);
    expect(controller.getDate()).toBe('2025-02-01');
  });

  it('resets the level when the dropdown is reopened with popoverProps.opened', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    render(<PopoverOpenedInput onToggle={(fn) => (setOpened = fn)} />);

    act(() => setOpened(true));
    await userEvent.click(screen.getByLabelText('next-month'));
    await userEvent.click(screen.getByLabelText('month-level'));
    expectHeader('year', '2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expectHeader('month', 'July 2024');
  });

  it('resets the level when the parent opens a controlled dropdown', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    let controller: PickerInputController = null as any;
    render(
      <ControlledOpenedInput onToggle={(fn) => (setOpened = fn)} expose={(c) => (controller = c)} />
    );

    act(() => setOpened(true));
    await userEvent.click(screen.getByLabelText('next-month'));
    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expectHeader('month', 'July 2024');
  });

  it('does not open the dropdown of a disabled or read only input', () => {
    let controller: PickerInputController = null as any;
    const { container, rerender } = render(
      <ControllerInput disabled expose={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);

    rerender(<ControllerInput readOnly expose={(c) => (controller = c)} />);
    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
  });

  it('does not show the dropdown of a disabled input when the controller starts opened', () => {
    let controller: PickerInputController = null as any;
    const { container } = render(
      <ControllerInput
        disabled
        options={{ defaultDropdownOpened: true }}
        expose={(c) => (controller = c)}
      />
    );

    expect(controller.isDropdownOpened()).toBe(true);
    expect(getDropdown(container)).toBe(null);
  });

  it('ignores date and level props when a controller is provided', () => {
    let controller: PickerInputController = null as any;
    render(
      <ControllerInput
        options={{ defaultDate: '2024-06-15' }}
        date="2020-01-01"
        level="year"
        expose={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    expectHeader('month', 'June 2024');
  });

  it('moves the displayed date of a new controller to a controlled value', () => {
    let first: PickerInputController = null as any;
    let second: PickerInputController = null as any;

    function Swap({ useSecond }: { useSecond: boolean }) {
      const a = useDateInput();
      const b = useDateInput();
      first = a;
      second = b;
      return <DateInput {...defaultProps} value="2024-06-15" controller={useSecond ? b : a} />;
    }

    const { rerender } = render(<Swap useSecond={false} />);
    expect(first.getDate()).toBe('2024-06-15');
    expect(second.getDate()).toBe(null);

    rerender(<Swap useSecond />);
    expect(second.getDate()).toBe('2024-06-15');
  });

  it('does not call onDateChange again when the controlled value syncs to the displayed date', async () => {
    const onDateChange = jest.fn();
    function Controlled() {
      const [value, setValue] = useState<string | null>(null);
      return (
        <DateInput
          {...defaultProps}
          label="date-input"
          value={value}
          onChange={setValue}
          onDateChange={onDateChange}
        />
      );
    }

    render(<Controlled />);
    await userEvent.click(screen.getByLabelText('date-input'));
    await userEvent.paste('May 6, 2024');
    expect(onDateChange).toHaveBeenCalledTimes(1);
    expect(onDateChange).toHaveBeenLastCalledWith('2024-05-06');
  });
});
