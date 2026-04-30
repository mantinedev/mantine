import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getDayPositionedEvents } from './get-day-positioned-events';

describe('@mantine/schedule/get-day-positioned-events', () => {
  const testDate = '2025-01-15';

  describe('basic event positioning', () => {
    it('returns empty array when no events are provided', () => {
      const result = getDayPositionedEvents({
        date: testDate,
        events: [],
      });

      expect(result).toStrictEqual([]);
    });

    it('positions single regular event correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        id: 1,
        position: {
          allDay: false,
          column: 0,
          overlaps: 1,
          width: 100,
          offset: 0,
          top: expect.any(Number),
          height: expect.any(Number),
        },
      });
    });

    it('positions multiple non-overlapping events in the same column', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(3);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(0);
      expect(result[2].position.column).toBe(0);
      expect(result[0].position.width).toBe(100);
      expect(result[1].position.width).toBe(100);
      expect(result[2].position.width).toBe(100);
    });
  });

  describe('all-day events', () => {
    it('identifies all-day events correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0].position.allDay).toBe(true);
      expect(result[0].position.top).toBe(0);
      expect(result[0].position.height).toBe(100);
    });

    it('positions regular events separately from all-day events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(2);
      expect(result[0].position.allDay).toBe(true);
      expect(result[1].position.allDay).toBe(false);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(0);
    });

    it('does not count all-day events in column overlap detection', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(3);
      expect(result.filter((e) => e.position.allDay)).toHaveLength(2);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(0);
      expect(result[2].position.column).toBe(0);
    });
  });

  describe('overlapping events', () => {
    it('assigns different columns to overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 13:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(2);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(1);
    });

    it('handles three overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 13:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 14:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 12:00:00', end: '2025-01-15 15:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(3);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(1);
      expect(result[2].position.column).toBe(2);
    });

    it('reuses columns when events do not overlap', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 09:30:00', end: '2025-01-15 10:30:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 11:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(3);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(1);
      expect(result[2].position.column).toBe(0);
    });

    it('handles events that touch but do not overlap', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(2);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(0);
    });
  });

  describe('width and offset calculations', () => {
    it('calculates width correctly for single event', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.overlaps).toBe(1);
      expect(result[0].position.width).toBe(100);
      expect(result[0].position.offset).toBe(0);
    });

    it('calculates width and offset for two overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 13:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.overlaps).toBe(2);
      expect(result[0].position.width).toBe(50);
      expect(result[0].position.offset).toBe(0);

      expect(result[1].position.overlaps).toBe(2);
      expect(result[1].position.width).toBe(50);
      expect(result[1].position.offset).toBe(50);
    });

    it('calculates width and offset for three overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 13:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 14:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 12:00:00', end: '2025-01-15 15:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.overlaps).toBe(3);
      expect(result[0].position.width).toBeCloseTo(100 / 3, 2);
      expect(result[0].position.offset).toBe(0);

      expect(result[1].position.overlaps).toBe(3);
      expect(result[1].position.width).toBeCloseTo(100 / 3, 2);
      expect(result[1].position.offset).toBeCloseTo(100 / 3, 2);

      expect(result[2].position.overlaps).toBe(3);
      expect(result[2].position.width).toBeCloseTo(100 / 3, 2);
      expect(result[2].position.offset).toBeCloseTo((100 / 3) * 2, 2);
    });

    it('updates width for non-overlapping events based on total columns', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 09:30:00', end: '2025-01-15 10:30:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 11:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.overlaps).toBe(2);
      expect(result[0].position.width).toBe(50);
      expect(result[1].position.overlaps).toBe(2);
      expect(result[1].position.width).toBe(50);
      expect(result[2].position.overlaps).toBe(1);
      expect(result[2].position.width).toBe(100);
    });

    it('expands event width to fill empty columns when no overlapping events to the right', () => {
      // Scenario: Morning Standup (09:00-09:30) overlaps with Team Meeting (09:00-12:00)
      // Team Meeting also overlaps with Lunch Break (09:30-12:30) and Morning Standup 2 (10:30-11:30)
      // Morning Standup should expand to fill columns 1 and 2 (66% width)
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'Morning Standup',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 09:30:00',
        }),
        testUtils.createEvent({
          id: 2,
          title: 'Team Meeting',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 12:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          title: 'Lunch Break',
          start: '2025-01-15 09:30:00',
          end: '2025-01-15 12:30:00',
        }),
        testUtils.createEvent({
          id: 9,
          title: 'Morning Standup 2',
          start: '2025-01-15 10:30:00',
          end: '2025-01-15 11:30:00',
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      // Find events by title
      const morningStandup = result.find((e) => e.title === 'Morning Standup')!;
      const teamMeeting = result.find((e) => e.title === 'Team Meeting')!;
      const lunchBreak = result.find((e) => e.title === 'Lunch Break')!;
      const morningStandup2 = result.find((e) => e.title === 'Morning Standup 2')!;

      // Team Meeting is in column 0, overlaps with 3 events total -> 33% width
      expect(teamMeeting.position.column).toBe(0);
      expect(teamMeeting.position.overlaps).toBe(3);
      expect(teamMeeting.position.width).toBeCloseTo(100 / 3, 2);
      expect(teamMeeting.position.offset).toBe(0);

      // Morning Standup is in column 1, but has no overlapping events in columns 2
      // so it expands to fill remaining space -> 66% width
      expect(morningStandup.position.column).toBe(1);
      expect(morningStandup.position.overlaps).toBe(3);
      expect(morningStandup.position.width).toBeCloseTo((2 / 3) * 100, 2);
      expect(morningStandup.position.offset).toBeCloseTo(100 / 3, 2);

      // Lunch Break is in column 1, overlaps with Morning Standup 2 in column 2 -> 33% width
      expect(lunchBreak.position.column).toBe(1);
      expect(lunchBreak.position.overlaps).toBe(3);
      expect(lunchBreak.position.width).toBeCloseTo(100 / 3, 2);
      expect(lunchBreak.position.offset).toBeCloseTo(100 / 3, 2);

      // Morning Standup 2 is in column 2, rightmost -> 33% width
      expect(morningStandup2.position.column).toBe(2);
      expect(morningStandup2.position.overlaps).toBe(3);
      expect(morningStandup2.position.width).toBeCloseTo(100 / 3, 2);
      expect(morningStandup2.position.offset).toBeCloseTo((2 / 3) * 100, 2);
    });

    it('does not expand width when there is an overlapping event to the right', () => {
      // Event A overlaps with B, B overlaps with C
      // Events form a chain where each overlaps with the next
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'A',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 11:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          title: 'B',
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 12:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          title: 'C',
          start: '2025-01-15 11:00:00',
          end: '2025-01-15 13:00:00',
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      const eventA = result.find((e) => e.title === 'A')!;
      const eventB = result.find((e) => e.title === 'B')!;
      const eventC = result.find((e) => e.title === 'C')!;

      // A is in column 0, B is in column 1 and overlaps with A
      // A doesn't directly overlap with C, so max column for A is 1
      expect(eventA.position.column).toBe(0);
      expect(eventA.position.overlaps).toBe(2);
      expect(eventA.position.width).toBe(50);

      // B is in column 1, overlaps with both A and C
      // B sees C in column 0 (reused), so overlaps is 2
      expect(eventB.position.column).toBe(1);
      expect(eventB.position.overlaps).toBe(2);
      expect(eventB.position.width).toBe(50);

      // C reuses column 0 since it doesn't overlap with A
      expect(eventC.position.column).toBe(0);
      expect(eventC.position.overlaps).toBe(2);
      expect(eventC.position.width).toBe(50);
    });

    it('expands event to fill multiple empty columns', () => {
      // Short event overlaps only with a long event that spans multiple columns
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'Short',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 09:30:00',
        }),
        testUtils.createEvent({
          id: 2,
          title: 'Long',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 14:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          title: 'Middle',
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 11:00:00',
        }),
        testUtils.createEvent({
          id: 4,
          title: 'Late',
          start: '2025-01-15 12:00:00',
          end: '2025-01-15 13:00:00',
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      const shortEvent = result.find((e) => e.title === 'Short')!;
      const longEvent = result.find((e) => e.title === 'Long')!;
      const middleEvent = result.find((e) => e.title === 'Middle')!;
      const lateEvent = result.find((e) => e.title === 'Late')!;

      // Long is in column 0, overlaps with Middle (column 1) and Late (column 1 reused)
      expect(longEvent.position.column).toBe(0);

      // Short event only directly overlaps with Long
      // Long overlaps with Middle and Late in column 1
      // So Short sees max column 1 -> expands from column 1 to fill remaining
      expect(shortEvent.position.column).toBe(1);
      expect(shortEvent.position.overlaps).toBe(2);
      expect(shortEvent.position.width).toBe(50);

      // Middle reuses column 1 (doesn't overlap with Short)
      expect(middleEvent.position.column).toBe(1);

      // Late reuses column 1 (doesn't overlap with Short or Middle)
      expect(lateEvent.position.column).toBe(1);
    });
  });

  describe('vertical positioning', () => {
    it('calculates top and height for regular events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.top).toBeGreaterThanOrEqual(0);
      expect(result[0].position.height).toBeGreaterThan(0);
      expect(result[0].position.top + result[0].position.height).toBeLessThanOrEqual(100);
    });

    it('respects startTime and endTime for vertical positioning', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
        startTime: '09:00',
        endTime: '17:00',
      });

      expect(result[0].position.top).toBeGreaterThan(0);
      expect(result[0].position.height).toBeGreaterThan(0);
    });

    it('sets top and height to defaults for all-day events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.top).toBe(0);
      expect(result[0].position.height).toBe(100);
    });

    it('calculates different positions for events at different times', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].position.top).toBeLessThan(result[1].position.top);
    });
  });

  describe('event sorting', () => {
    it('sorts events by start time', () => {
      const events = [
        testUtils.createEvent({ id: 3, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 11:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
      expect(result[2].id).toBe(3);
    });

    it('handles events with same start time', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(2);
      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(1);
    });
  });

  describe('complex scenarios', () => {
    it('handles mix of all-day and regular overlapping events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 11:00:00', end: '2025-01-15 13:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(3);

      const allDayEvent = result.find((e) => e.id === 1);
      const regularEvent1 = result.find((e) => e.id === 2);
      const regularEvent2 = result.find((e) => e.id === 3);

      expect(allDayEvent?.position.allDay).toBe(true);
      expect(regularEvent1?.position.allDay).toBe(false);
      expect(regularEvent2?.position.allDay).toBe(false);

      expect(regularEvent1?.position.column).toBe(0);
      expect(regularEvent2?.position.column).toBe(1);
    });

    it('handles multiple groups of overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 09:00:00', end: '2025-01-15 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 09:30:00', end: '2025-01-15 10:30:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 11:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 4, start: '2025-01-15 11:30:00', end: '2025-01-15 12:30:00' }),
        testUtils.createEvent({ id: 5, start: '2025-01-15 14:00:00', end: '2025-01-15 15:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(5);

      expect(result[0].position.column).toBe(0);
      expect(result[1].position.column).toBe(1);
      expect(result[2].position.column).toBe(0);
      expect(result[3].position.column).toBe(1);
      expect(result[4].position.column).toBe(0);
    });

    it('preserves event data in positioned events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'Test Event',
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 12:00:00',
          color: 'blue',
          payload: { customData: 'value' },
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result[0]).toMatchObject({
        id: 1,
        title: 'Test Event',
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 12:00:00',
        color: 'blue',
        payload: { customData: 'value' },
      });
    });
  });

  describe('edge cases', () => {
    it('handles events with same start and end time', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 10:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0].position.height).toBeGreaterThanOrEqual(0);
    });

    it('handles events at day boundaries', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 00:00:00', end: '2025-01-15 01:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 23:00:00', end: '2025-01-16 00:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(2);
      expect(result[0].position.top).toBeLessThan(result[1].position.top);
    });

    it('handles Date objects as start and end times', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: dayjs('2025-01-15 10:00:00').toDate(),
          end: dayjs('2025-01-15 12:00:00').toDate(),
        }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0].position.allDay).toBe(false);
    });

    it('handles very short events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 10:15:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0].position.height).toBeGreaterThan(0);
    });

    it('handles events spanning entire day', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 00:00:00', end: '2025-01-15 23:59:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(1);
      expect(result[0].position.allDay).toBe(false);
    });

    it('handles many overlapping events', () => {
      const events = Array.from({ length: 10 }, (_, i) =>
        testUtils.createEvent({
          id: i + 1,
          start: `2025-01-15 ${10 + i}:00:00`,
          end: `2025-01-15 ${15 + i}:00:00`,
        })
      );

      const result = getDayPositionedEvents({
        date: testDate,
        events,
      });

      expect(result).toHaveLength(10);

      const columns = new Set(result.map((e) => e.position.column));
      expect(columns.size).toBeGreaterThan(1);

      result.forEach((event) => {
        expect(event.position.overlaps).toBeGreaterThan(0);
        expect(event.position.width).toBeGreaterThan(0);
        expect(event.position.offset).toBeGreaterThanOrEqual(0);
        expect(event.position.offset + event.position.width).toBeLessThanOrEqual(
          100 + Number.EPSILON
        );
      });
    });
  });

  describe('custom time range', () => {
    it('respects custom startTime', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
        startTime: '10:00',
      });

      expect(result[0].position.top).toBeGreaterThanOrEqual(0);
    });

    it('respects custom endTime', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
        endTime: '15:00',
      });

      expect(result[0].position.top).toBeGreaterThanOrEqual(0);
      expect(result[0].position.height).toBeGreaterThan(0);
    });

    it('respects both startTime and endTime', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getDayPositionedEvents({
        date: testDate,
        events,
        startTime: '09:00',
        endTime: '17:00',
      });

      expect(result[0].position.top).toBeGreaterThan(0);
      expect(result[0].position.height).toBeGreaterThan(0);
    });
  });
});
