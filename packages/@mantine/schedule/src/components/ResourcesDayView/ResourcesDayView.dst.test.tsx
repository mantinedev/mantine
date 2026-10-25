/**
 * @jest-environment ./jest.timezone-environment.ts
 * @timezone Europe/Helsinki
 */
import { render, screen } from '@mantine-tests/core';
import { getResourcesDayViewEvents } from './get-resources-day-view-events/get-resources-day-view-events';
import { ResourcesDayView } from './ResourcesDayView';

const resources = [{ id: 'room-a', label: 'Room A' }];

const percentOfDay = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return ((hours * 60 + minutes) / 1440) * 100;
};

const days = [
  { day: '25-hour day', date: '2026-10-25' },
  { day: '23-hour day', date: '2026-03-29' },
];

describe('@mantine/schedule/ResourcesDayView on daylight saving time days', () => {
  it('runs in a time zone with daylight saving time', () => {
    expect(new Date(2026, 0, 15).getTimezoneOffset()).toBe(-120);
    expect(new Date(2026, 6, 15).getTimezoneOffset()).toBe(-180);
  });

  it.each(days)('places events at their wall clock time on a $day', ({ date }) => {
    const ranges = [
      ['00:45', '01:00'],
      ['04:15', '04:30'],
      ['18:00', '18:30'],
    ];

    const result = getResourcesDayViewEvents({
      date,
      resources,
      intervalMinutes: 15,
      events: ranges.map(([start, end], index) => ({
        id: index,
        title: `Event ${index}`,
        start: `${date} ${start}:00`,
        end: `${date} ${end}:00`,
        color: 'blue',
        resourceId: 'room-a',
      })),
    });

    for (const event of result.regularEvents['room-a']) {
      const [start, end] = ranges[event.id as number];
      expect(event.position.top).toBeCloseTo(percentOfDay(start));
      expect(event.position.top + event.position.height).toBeCloseTo(percentOfDay(end));
    }
  });

  it.each(days)('labels every slot with its own wall clock time on a $day', ({ date }) => {
    render(
      <ResourcesDayView
        date={date}
        resources={resources}
        startTime="02:00:00"
        endTime="06:00:00"
        intervalMinutes={60}
        slotLabelFormat="HH:mm"
      />
    );

    for (const time of ['02:00', '03:00', '04:00', '05:00']) {
      expect(screen.getAllByText(time)).toHaveLength(1);
    }
  });
});
