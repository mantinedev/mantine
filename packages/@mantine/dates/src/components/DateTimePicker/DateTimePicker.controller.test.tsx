import { useState } from 'react';
import { act, waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { clickInput, expectValue } from '@mantine-tests/dates';
import { DatePickerType } from '../../types';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';
import {
  useDateTimePicker,
  DateTimePickerController,
  DateTimePickerControllerOptions,
} from './use-date-time-picker/use-date-time-picker';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
  timePickerProps: { hoursInputLabel: 'test-hours', minutesInputLabel: 'test-minutes' },
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

function getDropdown(container: HTMLElement) {
  return container.querySelector('[data-dates-dropdown]');
}

function expectHeader(level: 'month' | 'year', label: string) {
  const headers = screen.getAllByLabelText(`${level}-level`);
  expect(headers[headers.length - 1].textContent).toBe(label);
}

function getHours() {
  const inputs = screen.getAllByLabelText('test-hours');
  return inputs[inputs.length - 1] as HTMLInputElement;
}

function PopoverOpenedPicker({
  exposeSetter,
  ...others
}: { exposeSetter: (setOpened: (opened: boolean) => void) => void } & DateTimePickerProps) {
  const [opened, setOpened] = useState(false);
  exposeSetter(setOpened);
  return (
    <DateTimePicker
      {...(defaultProps as any)}
      {...others}
      popoverProps={{ ...defaultProps.popoverProps, opened }}
    />
  );
}

function ControllerPicker<Type extends DatePickerType = 'default'>({
  options,
  capture,
  ...others
}: {
  options?: DateTimePickerControllerOptions;
  capture: (controller: DateTimePickerController) => void;
} & DateTimePickerProps<Type>) {
  const controller = useDateTimePicker(options);
  capture(controller);
  return <DateTimePicker {...(defaultProps as any)} {...others} controller={controller} />;
}

function ControlledOpenedPicker({
  exposeSetter,
  capture,
}: {
  exposeSetter: (setOpened: (opened: boolean) => void) => void;
  capture: (controller: DateTimePickerController) => void;
}) {
  const [opened, setOpened] = useState(false);
  exposeSetter(setOpened);
  const controller = useDateTimePicker({
    dropdownOpened: opened,
    onDropdownOpenedChange: setOpened,
  });
  capture(controller);
  return (
    <DateTimePicker
      {...(defaultProps as any)}
      defaultValue="2024-06-15 10:30:00"
      controller={controller}
    />
  );
}

describe('@mantine/dates/DateTimePicker/controller', () => {
  it('starts every open from the value month and the month level', async () => {
    const { container } = render(
      <DateTimePicker {...(defaultProps as any)} defaultValue="2024-06-15 10:30:00" />
    );

    await clickInput(container);
    expectHeader('month', 'June 2024');
    await userEvent.click(screen.getByLabelText('next-month'));
    await userEvent.click(screen.getByLabelText('month-level'));
    expectHeader('year', '2024');

    await clickInput(container);
    expect(getDropdown(container)).toBe(null);

    await clickInput(container);
    expectHeader('month', 'June 2024');
  });

  it('starts every open fresh when the dropdown is kept mounted', async () => {
    const { container } = render(
      <DateTimePicker
        {...(defaultProps as any)}
        defaultValue="2024-06-15 10:30:00"
        popoverProps={{ ...defaultProps.popoverProps, keepMounted: true }}
      />
    );

    await clickInput(container);
    await userEvent.click(screen.getByLabelText('next-month'));
    await userEvent.click(screen.getByLabelText('next-month'));
    expectHeader('month', 'August 2024');

    await clickInput(container);
    await clickInput(container);
    expectHeader('month', 'June 2024');
    expect(getHours()).toHaveValue('10');
    expectValue(container, '15/06/2024 10:30');
  });

  it('discards a time typed without a date on every open', async () => {
    const { container } = render(
      <DateTimePicker
        {...(defaultProps as any)}
        popoverProps={{ ...defaultProps.popoverProps, keepMounted: true }}
      />
    );

    await clickInput(container);
    await userEvent.type(getHours(), '12');
    expect(getHours()).toHaveValue('12');

    await clickInput(container);
    await clickInput(container);
    expect(getHours()).toHaveValue('');
  });

  it('starts fresh when the dropdown is opened through popoverProps.opened', async () => {
    let setOpened: (opened: boolean) => void = () => {};
    const { container } = render(
      <PopoverOpenedPicker
        defaultValue="2024-06-15 10:30:00"
        exposeSetter={(setter) => (setOpened = setter)}
      />
    );

    act(() => setOpened(true));
    await userEvent.click(screen.getByLabelText('next-month'));
    expectHeader('month', 'July 2024');

    act(() => setOpened(false));
    expect(getDropdown(container)).toBe(null);
    act(() => setOpened(true));
    expectHeader('month', 'June 2024');
  });

  it('opens the dropdown from outside at the month of the value', () => {
    let controller: DateTimePickerController = null as any;
    const { container } = render(
      <ControllerPicker defaultValue="2024-06-15 10:30:00" capture={(c) => (controller = c)} />
    );

    expect(getDropdown(container)).toBe(null);
    act(() => controller.openDropdown());
    expect(getDropdown(container)).toBeInTheDocument();
    expectHeader('month', 'June 2024');
    expect(controller.getDisplayedDate()).toBe('2024-06-15');
    expect(getHours()).toHaveValue('10');
  });

  it('opens on a given level when the level is set right after openDropdown', () => {
    let controller: DateTimePickerController = null as any;
    render(
      <ControllerPicker defaultValue="2024-06-15 10:30:00" capture={(c) => (controller = c)} />
    );

    act(() => {
      controller.openDropdown();
      controller.setLevel('year');
    });

    expectHeader('year', '2024');
    expect(screen.queryByLabelText('test-hours')).toBe(null);
  });

  it('opens on a given level when the dropdown is kept mounted', async () => {
    let controller: DateTimePickerController = null as any;
    const { container } = render(
      <ControllerPicker
        defaultValue="2024-06-15 10:30:00"
        popoverProps={{ ...defaultProps.popoverProps, keepMounted: true }}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    await userEvent.click(screen.getByLabelText('next-month'));
    await clickInput(container);

    act(() => {
      controller.openDropdown();
      controller.setDate('2024-09-01');
    });

    expectHeader('month', 'September 2024');
  });

  it('navigates levels and dates through the controller', () => {
    let controller: DateTimePickerController = null as any;
    render(
      <ControllerPicker defaultValue="2024-06-15 10:30:00" capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    act(() => controller.next());
    expectHeader('month', 'July 2024');

    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');
    act(() => controller.setLevel('month'));
    expect(getHours()).toBeInTheDocument();
  });

  it('resets the displayed date and level on every open', async () => {
    let controller: DateTimePickerController = null as any;
    const { container } = render(
      <ControllerPicker defaultValue="2024-06-15 10:30:00" capture={(c) => (controller = c)} />
    );

    act(() => controller.openDropdown());
    act(() => controller.next());
    act(() => controller.setLevel('year'));
    act(() => controller.closeDropdown());
    expect(getDropdown(container)).toBe(null);

    await clickInput(container);
    expectHeader('month', 'June 2024');
    expect(controller.getLevel()).toBe('month');
  });

  it('resets on a controlled reopen that does not go through openDropdown', async () => {
    let controller: DateTimePickerController = null as any;
    let setOpened: (opened: boolean) => void = () => {};
    render(
      <ControlledOpenedPicker
        exposeSetter={(setter) => (setOpened = setter)}
        capture={(c) => (controller = c)}
      />
    );

    act(() => setOpened(true));
    act(() => controller.next());
    expectHeader('month', 'July 2024');

    act(() => setOpened(false));
    act(() => setOpened(true));
    expectHeader('month', 'June 2024');
  });

  it('reports opens and closes made by the component', async () => {
    let controller: DateTimePickerController = null as any;
    const onDropdownOpenedChange = jest.fn();
    const { container } = render(
      <ControllerPicker
        defaultValue="2024-06-15 10:30:00"
        options={{ onDropdownOpenedChange }}
        capture={(c) => (controller = c)}
      />
    );

    await clickInput(container);
    expect(controller.isDropdownOpened()).toBe(true);
    await userEvent.click(screen.getByLabelText('test-submit'));
    expect(controller.isDropdownOpened()).toBe(false);
    expect(getDropdown(container)).toBe(null);
    expect(onDropdownOpenedChange.mock.calls).toStrictEqual([[true], [false]]);
  });

  it('picks a date and a time in a dropdown opened by the controller', async () => {
    let controller: DateTimePickerController = null as any;
    const spy = jest.fn();
    const { container } = render(
      <ControllerPicker
        defaultValue="2024-06-15 10:30:00"
        onChange={spy}
        capture={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    await userEvent.click(screen.getByRole('button', { name: '20 June 2024' }));
    await userEvent.type(getHours(), '14');
    await userEvent.click(screen.getByLabelText('test-submit'));

    expect(spy).toHaveBeenLastCalledWith('2024-06-20 14:30:00');
    expectValue(container, '20/06/2024 14:30');
    expect(controller.isDropdownOpened()).toBe(false);
  });

  it('clears a half-selected range and calls onDropdownClose on closeDropdown', async () => {
    let controller: DateTimePickerController = null as any;
    const spy = jest.fn();
    const onDropdownClose = jest.fn();
    render(
      <ControllerPicker
        type="range"
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        onDropdownClose={onDropdownClose}
        capture={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    await userEvent.click(screen.getByRole('button', { name: '10 June 2024' }));
    expect(spy).toHaveBeenLastCalledWith(['2024-06-10 00:00:00', null]);

    act(() => controller.closeDropdown());
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(onDropdownClose).toHaveBeenCalled();
  });

  it('runs the close handling on closeDropdown with dropdownType="modal"', async () => {
    let controller: DateTimePickerController = null as any;
    const spy = jest.fn();
    const onDropdownClose = jest.fn();
    render(
      <ControllerPicker
        type="range"
        dropdownType="modal"
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        onDropdownClose={onDropdownClose}
        capture={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    await userEvent.click(screen.getByRole('button', { name: '10 June 2024' }));
    expect(spy).toHaveBeenLastCalledWith(['2024-06-10 00:00:00', null]);

    act(() => controller.closeDropdown());
    expect(spy).toHaveBeenLastCalledWith([null, null]);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('does not open while disabled and hides a dropdown opened before without writing controller state', () => {
    let controller: DateTimePickerController = null as any;
    const { container, rerender } = render(
      <ControllerPicker
        disabled
        options={{ defaultDropdownOpened: true }}
        capture={(c) => (controller = c)}
      />
    );

    expect(getDropdown(container)).toBe(null);
    expect(controller.isDropdownOpened()).toBe(true);

    rerender(
      <ControllerPicker
        disabled={false}
        options={{ defaultDropdownOpened: true }}
        capture={(c) => (controller = c)}
      />
    );
    expect(getDropdown(container)).toBeInTheDocument();

    act(() => controller.closeDropdown());
    rerender(<ControllerPicker disabled capture={(c) => (controller = c)} />);
    act(() => controller.openDropdown());
    expect(controller.isDropdownOpened()).toBe(false);
  });

  it('opens the dropdown with a time field focused', async () => {
    let controller: DateTimePickerController = null as any;
    render(
      <ControllerPicker defaultValue="2024-06-15 10:30:00" capture={(c) => (controller = c)} />
    );

    act(() => {
      controller.openDropdown();
      controller.focusTime('minutes');
    });

    await new Promise((resolve) => setTimeout(resolve, 0));
    await waitFor(() => expect(screen.getByLabelText('test-minutes')).toHaveFocus());
  });

  it('applies a time set together with openDropdown to the value', () => {
    let controller: DateTimePickerController = null as any;
    const spy = jest.fn();
    render(
      <ControllerPicker
        defaultValue="2024-06-15 10:30:00"
        onChange={spy}
        capture={(c) => (controller = c)}
      />
    );

    act(() => {
      controller.openDropdown();
      controller.setTime('09:00');
    });

    expect(spy).toHaveBeenLastCalledWith('2024-06-15 09:00:00');
    expect(screen.getByLabelText('test-hours')).toHaveValue('09');
  });

  it('resets a time typed without a date on the next open', async () => {
    let controller: DateTimePickerController = null as any;
    const { container } = render(<ControllerPicker capture={(c) => (controller = c)} />);

    await clickInput(container);
    await userEvent.type(screen.getByLabelText('test-hours'), '14');
    await userEvent.type(screen.getByLabelText('test-minutes'), '20');
    expect(controller.getTime()).toBe('14:20');

    act(() => controller.closeDropdown());
    await clickInput(container);
    expect(controller.getTime()).toBe('');
    expect(screen.getByLabelText('test-hours')).toHaveValue('');
  });

  it('does not run the close handling when an opened picker is disabled', async () => {
    let controller: DateTimePickerController = null as any;
    const spy = jest.fn();
    const onDropdownClose = jest.fn();
    const { rerender } = render(
      <ControllerPicker
        type="range"
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        onDropdownClose={onDropdownClose}
        capture={(c) => (controller = c)}
      />
    );

    act(() => controller.openDropdown());
    await userEvent.click(screen.getByRole('button', { name: '10 June 2024' }));
    rerender(
      <ControllerPicker
        type="range"
        disabled
        options={{ defaultDate: '2024-06-01' }}
        onChange={spy}
        onDropdownClose={onDropdownClose}
        capture={(c) => (controller = c)}
      />
    );

    expect(spy).toHaveBeenLastCalledWith(['2024-06-10 00:00:00', null]);
    expect(onDropdownClose).not.toHaveBeenCalled();
  });
});
