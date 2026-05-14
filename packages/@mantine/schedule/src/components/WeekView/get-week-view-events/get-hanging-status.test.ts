import dayjs from 'dayjs';
import { getHangingStatus } from './get-hanging-status';

describe('@mantine/schedule/get-hanging-status', () => {
  const weekDays = [
    '2025-01-13 00:00:00',
    '2025-01-14 00:00:00',
    '2025-01-15 00:00:00',
    '2025-01-16 00:00:00',
    '2025-01-17 00:00:00',
    '2025-01-18 00:00:00',
    '2025-01-19 00:00:00',
  ];

  it('returns "none" when event is fully within the week', () => {
    const eventStartDate = dayjs('2025-01-14').startOf('day');
    const actualEndDate = dayjs('2025-01-16').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('none');
  });

  it('returns "start" when event starts before the week', () => {
    const eventStartDate = dayjs('2025-01-10').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('start');
  });

  it('returns "end" when event ends after the week', () => {
    const eventStartDate = dayjs('2025-01-17').startOf('day');
    const actualEndDate = dayjs('2025-01-25').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('end');
  });

  it('returns "both" when event spans beyond both ends of the week', () => {
    const eventStartDate = dayjs('2025-01-10').startOf('day');
    const actualEndDate = dayjs('2025-01-25').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('both');
  });

  it('returns "none" when event starts on first day of week', () => {
    const eventStartDate = dayjs('2025-01-13').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('none');
  });

  it('returns "none" when event ends on last day of week', () => {
    const eventStartDate = dayjs('2025-01-15').startOf('day');
    const actualEndDate = dayjs('2025-01-19').startOf('day');

    const result = getHangingStatus({ eventStartDate, actualEndDate, weekDays });

    expect(result).toBe('none');
  });
});
