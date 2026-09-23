import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { useCalendar, type CalendarController } from '../Calendar';
import { MonthPicker, MonthPickerProps } from './MonthPicker';

function ControllerMonthPicker({
  capture,
  ...others
}: { capture: (controller: CalendarController) => void } & MonthPickerProps) {
  const controller = useCalendar({ defaultDate: '2024-06-01', defaultLevel: 'year' });
  capture(controller);

  return <MonthPicker controller={controller} {...others} />;
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[class*="calendarHeaderLevel"]')?.textContent;
}

describe('@mantine/dates/MonthPicker/controller', () => {
  it('forwards the controller to the calendar and ignores date and level props', () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerMonthPicker
        capture={(c) => (controller = c)}
        defaultDate="2010-01-01"
        defaultLevel="decade"
      />
    );

    expect(getHeader(container)).toBe('2024');
    act(() => controller.next());
    expect(getHeader(container)).toBe('2025');
    act(() => controller.setLevel('decade'));
    expect(getHeader(container)).toBe('2020 – 2029');
  });

  it('clamps the level to the year level', () => {
    let controller: CalendarController = null as any;
    const { container } = render(<ControllerMonthPicker capture={(c) => (controller = c)} />);

    act(() => controller.setLevel('month'));
    expect(controller.getLevel()).toBe('year');
    expect(getHeader(container)).toBe('2024');
  });

  it('forwards the controller when presets are set', async () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerMonthPicker
        capture={(c) => (controller = c)}
        presets={[{ value: '2030-02-01', label: 'Preset' }]}
      />
    );

    expect(container.querySelector('[controller]')).toBe(null);
    act(() => controller.next());
    expect(getHeader(container)).toBe('2025');

    act(() => controller.setLevel('decade'));
    await userEvent.click(screen.getByText('Preset'));
    expect(controller.getDate()).toBe('2030-02-01');
    expect(controller.getLevel()).toBe('year');
    expect(getHeader(container)).toBe('2030');
  });
});
