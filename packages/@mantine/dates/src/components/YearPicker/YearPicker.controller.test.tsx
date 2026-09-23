import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { useCalendar, type CalendarController } from '../Calendar';
import { YearPicker, YearPickerProps } from './YearPicker';

function ControllerYearPicker({
  capture,
  ...others
}: { capture: (controller: CalendarController) => void } & YearPickerProps) {
  const controller = useCalendar({ defaultDate: '2024-01-01', defaultLevel: 'decade' });
  capture(controller);

  return <YearPicker controller={controller} {...others} />;
}

function getHeader(container: HTMLElement) {
  return container.querySelector('[class*="calendarHeaderLevel"]')?.textContent;
}

describe('@mantine/dates/YearPicker/controller', () => {
  it('forwards the controller to the calendar and ignores date props', () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerYearPicker capture={(c) => (controller = c)} defaultDate="2010-01-01" />
    );

    expect(getHeader(container)).toBe('2020 – 2029');
    act(() => controller.next());
    expect(getHeader(container)).toBe('2030 – 2039');
    act(() => controller.setLevel('month'));
    expect(controller.getLevel()).toBe('decade');
  });

  it('forwards the controller when presets are set', async () => {
    let controller: CalendarController = null as any;
    const { container } = render(
      <ControllerYearPicker
        capture={(c) => (controller = c)}
        presets={[{ value: '2045-01-01', label: 'Preset' }]}
      />
    );

    expect(container.querySelector('[controller]')).toBe(null);
    act(() => controller.previous());
    expect(getHeader(container)).toBe('2010 – 2019');

    await userEvent.click(screen.getByText('Preset'));
    expect(controller.getDate()).toBe('2045-01-01');
    expect(getHeader(container)).toBe('2040 – 2049');
  });
});
