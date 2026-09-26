import { ScheduleEventData } from '../../types';
import { calculateDropTime } from './calculate-drop-time';

const event: ScheduleEventData = {
  id: 1,
  title: 'E',
  start: '2024-01-15 09:00:00',
  end: '2024-01-15 10:00:00',
  color: 'blue',
  payload: {},
};

const fmt = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;

describe('@mantine/schedule/calculateDropTime', () => {
  it('snaps to the slot start when no offset is provided', () => {
    const { start, end } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '11:00:00',
      intervalMinutes: 30,
    });
    expect(fmt(start)).toBe('2024-01-15 11:00');
    expect(fmt(end)).toBe('2024-01-15 12:00');
  });

  it('snaps the start to dragIntervalMinutes finer than the grid', () => {
    const { start, end } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '09:00:00',
      intervalMinutes: 30,
      dragIntervalMinutes: 15,
      slotOffset: 30,
      slotSize: 60,
    });
    expect(fmt(start)).toBe('2024-01-15 09:15');
    expect(fmt(end)).toBe('2024-01-15 10:15');
  });

  it('snaps coarser than the grid', () => {
    const { start } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '09:15:00',
      intervalMinutes: 15,
      dragIntervalMinutes: 60,
      slotOffset: 0,
      slotSize: 64,
    });
    expect(fmt(start)).toBe('2024-01-15 09:00');
  });

  it('is unchanged when dragIntervalMinutes is omitted', () => {
    const { start, end } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '09:30:00',
      intervalMinutes: 30,
    });
    expect(fmt(start)).toBe('2024-01-15 09:30');
    expect(fmt(end)).toBe('2024-01-15 10:30');
  });

  it('clamps the snapped start within the displayed range', () => {
    // Last slot 15:30 in an 08:00-16:00 range; pointer near the end would snap to 16:00 (out of range).
    const { start } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '15:30:00',
      intervalMinutes: 30,
      dragIntervalMinutes: 15,
      slotOffset: 60,
      slotSize: 60,
      startTime: '08:00:00',
      endTime: '16:00:00',
    });
    // Clamped to endMinutes - dragInterval = 15:45.
    expect(fmt(start)).toBe('2024-01-15 15:45');
  });

  it('keeps the clamped boundary on the drag grid with the default end time', () => {
    // endTime 23:59:59 (1439 min) must clamp to 23:45 (a 15-min multiple), not 23:44.
    const { start } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '23:30:00',
      intervalMinutes: 30,
      dragIntervalMinutes: 15,
      slotOffset: 60,
      slotSize: 60,
      startTime: '00:00:00',
      endTime: '23:59:59',
    });
    expect(fmt(start)).toBe('2024-01-15 23:45');
  });

  it('clamps the snapped start up to an offset startTime', () => {
    // A snapped 08:00 result is before an 08:30 startTime and must be pulled up into range.
    const { start } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '08:00:00',
      intervalMinutes: 30,
      dragIntervalMinutes: 30,
      slotOffset: 0,
      slotSize: 60,
      startTime: '08:30:00',
      endTime: '16:00:00',
    });
    expect(fmt(start)).toBe('2024-01-15 08:30');
  });

  it('preserves the event duration across the move', () => {
    const { start, end } = calculateDropTime({
      draggedEvent: event,
      targetDate: '2024-01-15',
      targetSlotTime: '14:00:00',
      intervalMinutes: 30,
      dragIntervalMinutes: 15,
      slotOffset: 45,
      slotSize: 60,
    });
    expect(end.getTime() - start.getTime()).toBe(60 * 60 * 1000);
  });

  it('keeps the start inside the range when the drag interval is coarser than it', () => {
    const result = calculateDropTime({
      draggedEvent: { ...event, start: '2024-01-01 09:30:00', end: '2024-01-01 09:45:00' },
      targetDate: '2024-01-01',
      targetSlotTime: '09:30:00',
      dragIntervalMinutes: 60,
      startTime: '09:30:00',
      endTime: '10:00:00',
    });

    // Neither 09:00 nor 10:00 is inside 09:30-10:00, so the range start is used
    expect(result.start.getHours()).toBe(9);
    expect(result.start.getMinutes()).toBe(30);
  });

  it('still clamps normally when the range contains a snap point', () => {
    const result = calculateDropTime({
      draggedEvent: { ...event, start: '2024-01-01 09:00:00', end: '2024-01-01 09:30:00' },
      targetDate: '2024-01-01',
      targetSlotTime: '23:00:00',
      dragIntervalMinutes: 60,
      startTime: '09:00:00',
      endTime: '17:00:00',
    });

    expect(result.start.getHours()).toBe(16);
    expect(result.start.getMinutes()).toBe(0);
  });
});
