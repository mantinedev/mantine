import { getCurrentTimePercent } from './get-current-time-percent';

describe('@mantine/schedule/get-current-time-percent', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('calculates percentage of day without custom times', () => {
    jest.setSystemTime(new Date('2024-01-01 00:00:00').getTime());
    expect(getCurrentTimePercent()).toBe(0);

    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());
    expect(getCurrentTimePercent()).toBe(50);

    jest.setSystemTime(new Date('2024-01-01 18:00:00').getTime());
    expect(getCurrentTimePercent()).toBe(75);
  });

  it('calculates percentage within custom time interval', () => {
    jest.setSystemTime(new Date('2024-01-01 10:00:00').getTime());
    expect(getCurrentTimePercent({ startTime: '10:00', endTime: '12:00' })).toBe(0);

    jest.setSystemTime(new Date('2024-01-01 11:00:00').getTime());
    expect(getCurrentTimePercent({ startTime: '10:00', endTime: '12:00' })).toBe(50);

    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());
    expect(getCurrentTimePercent({ startTime: '10:00', endTime: '12:00' })).toBe(100);
  });

  it('ignores incomplete time input and calculates from day start', () => {
    jest.setSystemTime(new Date('2024-01-01 12:00:00').getTime());

    expect(getCurrentTimePercent({ startTime: '10:00' })).toBe(50);
    expect(getCurrentTimePercent({ endTime: '14:00' })).toBe(50);
    expect(getCurrentTimePercent({})).toBe(50);
  });
});
