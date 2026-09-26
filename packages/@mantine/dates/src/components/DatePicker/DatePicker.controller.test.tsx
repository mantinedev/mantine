import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { useCalendar, CalendarController } from '../Calendar';
import { DatePicker, DatePickerProps } from './DatePicker';

const ariaLabels = {
  monthLevelControl: 'month-level',
  yearLevelControl: 'year-level',
  nextMonth: 'next-month',
  previousMonth: 'previous-month',
};

function ControllerDatePicker({
  capture,
  ...others
}: { capture: (controller: CalendarController) => void } & DatePickerProps) {
  const controller = useCalendar({ defaultDate: '2024-06-15' });
  capture(controller);

  return <DatePicker ariaLabels={ariaLabels} controller={controller} {...others} />;
}

function expectHeader(level: 'month' | 'year', label: string) {
  expect(screen.getByLabelText(`${level}-level`).textContent).toBe(label);
}

describe('@mantine/dates/DatePicker/controller', () => {
  it('forwards the controller to the calendar and ignores date and level props', () => {
    let controller: CalendarController = null as any;
    render(
      <ControllerDatePicker
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        defaultLevel="decade"
      />
    );

    expectHeader('month', 'June 2024');
    act(() => controller.next());
    expectHeader('month', 'July 2024');
    act(() => controller.setLevel('year'));
    expectHeader('year', '2024');
  });

  it('forwards the controller when presets are set', async () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerDatePicker
        capture={(c) => (controller = c)}
        presets={[{ value: '2030-02-10', label: 'Preset' }]}
      />
    );

    expect(container.querySelector('[controller]')).toBe(null);
    act(() => controller.next());
    expectHeader('month', 'July 2024');

    act(() => controller.setLevel('year'));
    await userEvent.click(screen.getByText('Preset'));
    expect(controller.getDate()).toBe('2030-02-10');
    expect(controller.getLevel()).toBe('month');
    expectHeader('month', 'February 2030');
  });

  it('keeps the displayed month when a day is picked', async () => {
    let controller: CalendarController = null as any;
    const spy = jest.fn();
    const { container } = render(
      <ControllerDatePicker capture={(c) => (controller = c)} onChange={spy} />
    );

    await userEvent.click(container.querySelectorAll('table button')[10]);
    expect(spy).toHaveBeenCalledWith('2024-06-06');
    expect(controller.getDate()).toBe('2024-06-15');
  });
});
