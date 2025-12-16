import { ScheduleEventData } from '../../types';
import { getDayPosition } from './get-day-position';

const testDate = '2024-01-15';

const createEvent = (start: string, end: string): ScheduleEventData => ({
  id: 1,
  title: 'Test Event',
  start,
  end,
  color: 'blue',
  payload: {},
});

describe('@mantine/schedule/get-day-position', () => {
  it('calculates position without time boundaries', () => {
    const event = createEvent(`${testDate} 06:00:00`, `${testDate} 12:00:00`);
    const result = getDayPosition({ event });

    // 6 hours into day / 24 hours = 25%
    // 12 hours into day / 24 hours = 50%
    expect(result.top).toBeCloseTo(25, 1);
    expect(result.height).toBeCloseTo(25, 1);
  });

  it('calculates position at start of day', () => {
    const event = createEvent(`${testDate} 00:00:00`, `${testDate} 02:00:00`);
    const result = getDayPosition({ event });

    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(8.33, 1); // 2/24 * 100
  });

  it('calculates position at end of day', () => {
    const event = createEvent(`${testDate} 22:00:00`, `${testDate} 23:59:59`);
    const result = getDayPosition({ event });

    expect(result.top).toBeGreaterThan(90);
    expect(result.height).toBeGreaterThan(0);
  });

  it('calculates position with time boundaries', () => {
    const event = createEvent(`${testDate} 10:00:00`, `${testDate} 12:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Event starts 1 hour after 09:00, within 8-hour range
    // 1 hour / 8 hours = 12.5%
    // 3 hours / 8 hours = 37.5%
    expect(result.top).toBeCloseTo(12.5, 0);
    expect(result.height).toBeCloseTo(25, 0);
  });

  it('handles event starting before boundary', () => {
    const event = createEvent(`${testDate} 08:00:00`, `${testDate} 10:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Event starts before boundary, so top is clamped to 0
    // Event end: 10:00, which is 1 hour into the window = 60 minutes
    // Time window: 09:00 to 17:00 = 8 hours = 480 minutes
    // top: 0 / 480 * 100 = 0%
    // height: (60 - 0) / 480 * 100 = 60 / 480 * 100 = 12.5%
    expect(result.top).toBe(0);
    expect(result.height).toBeCloseTo(12.5, 1);
  });

  it('handles event ending after boundary', () => {
    const event = createEvent(`${testDate} 16:00:00`, `${testDate} 18:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.top).toBeGreaterThan(80);
    expect(result.height).toBeGreaterThan(0);
  });

  it('calculates position for 1-hour event', () => {
    const event = createEvent(`${testDate} 14:00:00`, `${testDate} 15:00:00`);
    const result = getDayPosition({ event });

    // 14 hours / 24 hours = 58.33%
    // 1 hour / 24 hours = 4.17%
    expect(result.top).toBeCloseTo(58.33, 1);
    expect(result.height).toBeCloseTo(4.17, 1);
  });

  it('calculates position for full day event', () => {
    const event = createEvent(`${testDate} 00:00:00`, `${testDate} 23:59:59`);
    const result = getDayPosition({ event });

    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(99.93, 1); // ~24 hours
  });

  it('handles narrow time window', () => {
    const event = createEvent(`${testDate} 10:30:00`, `${testDate} 11:00:00`);
    const result = getDayPosition({
      event,
      startTime: '10:00',
      endTime: '12:00',
    });

    // 30 minutes / 120 minutes = 25%
    // 30 minutes / 120 minutes = 25%
    expect(result.top).toBeCloseTo(25, 0);
    expect(result.height).toBeCloseTo(25, 0);
  });

  it('handles event at exact boundary times', () => {
    const event = createEvent(`${testDate} 09:00:00`, `${testDate} 17:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.top).toBe(0);
    expect(result.height).toBe(100);
  });

  it('clamps event end time to boundary when event extends beyond endTime', () => {
    // Event from 21:00 to 23:59:59, but visible window ends at 22:00
    const event = createEvent(`${testDate} 21:00:00`, `${testDate} 23:59:59`);
    const result = getDayPosition({
      event,
      startTime: '10:00',
      endTime: '22:00',
    });

    // Time window: 10:00 to 22:00 = 12 hours = 720 minutes
    // Event start: 21:00, which is 11 hours into the window = 660 minutes
    // Event end clamped to: 22:00, which is 12 hours into the window = 720 minutes
    // top: 660 / 720 * 100 = 91.67%
    // height: (720 - 660) / 720 * 100 = 60 / 720 * 100 = 8.33% (only 1 visible hour)
    expect(result.top).toBeCloseTo(91.67, 1);
    expect(result.height).toBeCloseTo(8.33, 1);
  });

  it('clamps event end time when event partially overlaps boundary', () => {
    // Event from 16:30 to 18:00, visible window ends at 17:00
    const event = createEvent(`${testDate} 16:30:00`, `${testDate} 18:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Time window: 09:00 to 17:00 = 8 hours = 480 minutes
    // Event start: 16:30, which is 7.5 hours into the window = 450 minutes
    // Event end clamped to: 17:00, which is 8 hours into the window = 480 minutes
    // top: 450 / 480 * 100 = 93.75%
    // height: (480 - 450) / 480 * 100 = 30 / 480 * 100 = 6.25% (only 30 minutes visible)
    expect(result.top).toBeCloseTo(93.75, 1);
    expect(result.height).toBeCloseTo(6.25, 1);
  });

  it('does not clamp when event ends before boundary', () => {
    // Event from 14:00 to 15:00, visible window ends at 17:00
    const event = createEvent(`${testDate} 14:00:00`, `${testDate} 15:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Time window: 09:00 to 17:00 = 8 hours = 480 minutes
    // Event start: 14:00, which is 5 hours into the window = 300 minutes
    // Event end: 15:00, which is 6 hours into the window = 360 minutes (no clamping needed)
    // top: 300 / 480 * 100 = 62.5%
    // height: (360 - 300) / 480 * 100 = 60 / 480 * 100 = 12.5%
    expect(result.top).toBeCloseTo(62.5, 1);
    expect(result.height).toBeCloseTo(12.5, 1);
  });

  it('clamps event start time to boundary when event starts before startTime', () => {
    // Event from 06:00 to 14:00, but visible window starts at 10:00
    const event = createEvent(`${testDate} 06:00:00`, `${testDate} 14:00:00`);
    const result = getDayPosition({
      event,
      startTime: '10:00',
      endTime: '22:00',
    });

    // Time window: 10:00 to 22:00 = 12 hours = 720 minutes
    // Event start clamped to: 10:00, which is 0 hours into the window = 0 minutes
    // Event end: 14:00, which is 4 hours into the window = 240 minutes
    // top: 0 / 720 * 100 = 0%
    // height: (240 - 0) / 720 * 100 = 240 / 720 * 100 = 33.33% (only 4 visible hours)
    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(33.33, 1);
  });

  it('clamps event start time when event partially overlaps boundary', () => {
    // Event from 08:00 to 11:00, visible window starts at 09:00
    const event = createEvent(`${testDate} 08:00:00`, `${testDate} 11:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Time window: 09:00 to 17:00 = 8 hours = 480 minutes
    // Event start clamped to: 09:00, which is 0 hours into the window = 0 minutes
    // Event end: 11:00, which is 2 hours into the window = 120 minutes
    // top: 0 / 480 * 100 = 0%
    // height: (120 - 0) / 480 * 100 = 120 / 480 * 100 = 25% (only 2 visible hours)
    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(25, 1);
  });

  it('does not clamp when event starts after boundary', () => {
    // Event from 12:00 to 14:00, visible window starts at 09:00
    const event = createEvent(`${testDate} 12:00:00`, `${testDate} 14:00:00`);
    const result = getDayPosition({
      event,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Time window: 09:00 to 17:00 = 8 hours = 480 minutes
    // Event start: 12:00, which is 3 hours into the window = 180 minutes
    // Event end: 14:00, which is 5 hours into the window = 300 minutes (no clamping needed)
    // top: 180 / 480 * 100 = 37.5%
    // height: (300 - 180) / 480 * 100 = 120 / 480 * 100 = 25%
    expect(result.top).toBeCloseTo(37.5, 1);
    expect(result.height).toBeCloseTo(25, 1);
  });

  it('clamps both start and end when event extends beyond both boundaries', () => {
    // Event from 06:00 to 23:00, visible window is 10:00 to 22:00
    const event = createEvent(`${testDate} 06:00:00`, `${testDate} 23:00:00`);
    const result = getDayPosition({
      event,
      startTime: '10:00',
      endTime: '22:00',
    });

    // Time window: 10:00 to 22:00 = 12 hours = 720 minutes
    // Event start clamped to: 10:00, which is 0 hours into the window = 0 minutes
    // Event end clamped to: 22:00, which is 12 hours into the window = 720 minutes
    // top: 0 / 720 * 100 = 0%
    // height: (720 - 0) / 720 * 100 = 100%
    expect(result.top).toBeCloseTo(0, 1);
    expect(result.height).toBeCloseTo(100, 1);
  });
});
