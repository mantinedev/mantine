import { getCurrentTimePosition } from './get-current-time-position';

describe('@mantine/schedule/get-current-time-position', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('calculates percentage of day without custom times', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());
    expect(getCurrentTimePosition()).toBe(0);

    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());
    expect(getCurrentTimePosition()).toBe(50);

    jest.setSystemTime(new Date('2024-01-01 18:00:00').getTime());
    expect(getCurrentTimePosition()).toBe(75);
  });

  it('calculates percentage within custom time interval', () => {
    jest.setSystemTime(new Date('2024-01-01 10:00:00').getTime());
    expect(getCurrentTimePosition({ startTime: '10:00', endTime: '12:00' })).toBe(0);

    jest.setSystemTime(new Date('2024-01-01 11:00:00').getTime());
    expect(getCurrentTimePosition({ startTime: '10:00', endTime: '12:00' })).toBe(50);

    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());
    expect(getCurrentTimePosition({ startTime: '10:00', endTime: '12:00' })).toBe(100);
  });

  it('ignores incomplete time input and calculates from day start', () => {
    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());

    expect(getCurrentTimePosition({ startTime: '10:00' })).toBe(50);
    expect(getCurrentTimePosition({ endTime: '14:00' })).toBe(50);
    expect(getCurrentTimePosition({})).toBe(50);
  });

  it('uses now input instead of system time when provided', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());

    expect(getCurrentTimePosition({ now: '2024-01-01 06:00:00' })).toBe(25);
    expect(getCurrentTimePosition({ now: '2024-01-01 18:00:00' })).toBe(75);
  });

  it('uses now input within custom time interval', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());

    expect(
      getCurrentTimePosition({ startTime: '10:00', endTime: '12:00', now: '2024-01-01 11:00:00' })
    ).toBe(50);
  });

  it('rounds the canvas up to whole slots when endTime does not divide evenly by intervalMinutes', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());

    // start 00:00, end 02:30, intervalMinutes 60 -> canvas rounded up to 03:00 (180 minutes)
    expect(
      getCurrentTimePosition({
        startTime: '00:00',
        endTime: '02:30',
        intervalMinutes: 60,
        now: '2024-01-01 02:00:00',
      })
    ).toBeCloseTo((120 / 180) * 100);

    expect(
      getCurrentTimePosition({
        startTime: '00:00',
        endTime: '02:30',
        intervalMinutes: 60,
        now: '2024-01-01 01:30:00',
      })
    ).toBe(50);
  });

  it('rounds the canvas up at second precision when endTime has a seconds remainder', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());

    // start 00:00:00, end 02:00:30, intervalMinutes 60 -> canvas rounded up to 03:00 (3 whole slots)
    expect(
      getCurrentTimePosition({
        startTime: '00:00:00',
        endTime: '02:00:30',
        intervalMinutes: 60,
        now: '2024-01-01 02:00:00',
      })
    ).toBeCloseTo((7200 / 10800) * 100);
  });

  it('does not change the canvas when endTime divides evenly by intervalMinutes', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());

    expect(
      getCurrentTimePosition({
        startTime: '10:00',
        endTime: '12:00',
        intervalMinutes: 60,
        now: '2024-01-01 11:00:00',
      })
    ).toBe(50);
  });
});
