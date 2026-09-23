import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { useCalendar, type CalendarController } from '../Calendar';
import { WeekPicker, WeekPickerProps } from './WeekPicker';

function ControllerWeekPicker({
  capture,
  ...others
}: { capture: (controller: CalendarController) => void } & WeekPickerProps) {
  const controller = useCalendar({ defaultDate: '2024-06-03' });
  capture(controller);

  return <WeekPicker controller={controller} {...others} />;
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[class*="calendarHeaderLevel"]')?.textContent;
}

describe('@mantine/dates/WeekPicker/controller', () => {
  it('forwards the controller to the calendar and ignores date and level props', () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerWeekPicker
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        defaultLevel="decade"
      />
    );

    expect(getHeader(container)).toBe('June 2024');
    act(() => controller.next());
    expect(getHeader(container)).toBe('July 2024');
    act(() => controller.setLevel('year'));
    expect(getHeader(container)).toBe('2024');
  });

  it('forwards the controller when presets are set', async () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerWeekPicker
        capture={(c) => (controller = c)}
        presets={[{ value: '2030-02-11', label: 'Preset' }]}
      />
    );

    expect(container.querySelector('[controller]')).toBe(null);
    act(() => controller.next());
    expect(getHeader(container)).toBe('July 2024');

    act(() => controller.setLevel('year'));
    await userEvent.click(screen.getByText('Preset'));
    expect(controller.getLevel()).toBe('month');
    expect(getHeader(container)).toBe('February 2030');
  });

  it('keeps the displayed month when a week is picked', async () => {
    let controller: CalendarController = null as any;
    const spy = jest.fn();
    const { container } = render(
      <ControllerWeekPicker capture={(c) => (controller = c)} onChange={spy} />
    );

    await userEvent.click(container.querySelectorAll('table button')[10]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(controller.getDate()).toBe('2024-06-03');
  });
});
