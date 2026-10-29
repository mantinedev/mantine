import dayjs from 'dayjs';
import { Shift, Vacation } from './data';
import { getMovedShiftRange, getResizedShiftRange, toShiftEvents } from './events';
import { getPlannedHours, getShiftViolation } from './rules';

const shift = (id: string, start: string, end: string, employeeId = 'marta'): Shift => ({
  id,
  employeeId,
  title: 'Shift',
  start,
  end,
  note: '',
});

const tuesdayMorning = shift('tue', '2026-11-03 06:00:00', '2026-11-03 14:00:00');
const vacations: Vacation[] = [{ id: 'v', employeeId: 'marta', date: '2026-11-06' }];

const check = (start: string, end: string, employeeId = 'marta') =>
  getShiftViolation({ employeeId, start, end }, [tuesdayMorning], vacations);

describe('getShiftViolation', () => {
  it('accepts a shift that follows every rule', () => {
    expect(check('2026-11-04 06:00:00', '2026-11-04 14:00:00')).toBeNull();
  });

  it('rejects a shift that overlaps another shift of the employee', () => {
    expect(check('2026-11-03 10:00:00', '2026-11-03 18:00:00')).toBe(
      'Marta Silva already works Tue 06:00–14:00'
    );
  });

  it('ignores shifts of other employees', () => {
    expect(check('2026-11-03 10:00:00', '2026-11-03 18:00:00', 'tom')).toBeNull();
  });

  it('ignores the shift that is being moved', () => {
    expect(
      getShiftViolation(
        {
          id: 'tue',
          employeeId: 'marta',
          start: '2026-11-03 08:00:00',
          end: '2026-11-03 16:00:00',
        },
        [tuesdayMorning],
        []
      )
    ).toBeNull();
  });

  it('rejects a shift that starts less than 11 hours after the previous one ends', () => {
    expect(check('2026-11-03 22:00:00', '2026-11-04 06:00:00')).toBe(
      'Marta Silva needs 11 h of rest after Tue 06:00–14:00, only 8 h'
    );
  });

  it('rejects a shift that ends less than 11 hours before the next one starts', () => {
    expect(check('2026-11-02 14:00:00', '2026-11-02 22:00:00')).toBe(
      'Marta Silva needs 11 h of rest before Tue 06:00–14:00, only 8 h'
    );
  });

  it('accepts exactly 11 hours of rest', () => {
    expect(check('2026-11-04 01:00:00', '2026-11-04 09:00:00')).toBeNull();
  });

  it('rejects a shift on a vacation day', () => {
    expect(check('2026-11-06 06:00:00', '2026-11-06 14:00:00')).toBe(
      'Marta Silva is on vacation on Fri, Nov 6'
    );
  });

  it('rejects a night shift that runs into a vacation day', () => {
    expect(check('2026-11-05 22:00:00', '2026-11-06 06:00:00')).toBe(
      'Marta Silva is on vacation on Fri, Nov 6'
    );
  });

  it('rejects a shift that ends before it starts', () => {
    expect(check('2026-11-04 14:00:00', '2026-11-04 06:00:00')).toBe(
      'A shift must end after it starts'
    );
  });
});

describe('getPlannedHours', () => {
  const weekStart = dayjs('2026-11-02');

  it('adds up the hours of the employee in the week', () => {
    const shifts = [tuesdayMorning, shift('wed', '2026-11-04 06:00:00', '2026-11-04 10:30:00')];
    expect(getPlannedHours('marta', shifts, weekStart)).toBe(12.5);
  });

  it('counts only the part of a night shift that falls inside the week', () => {
    const sundayNight = shift('sun', '2026-11-08 22:00:00', '2026-11-09 06:00:00');
    expect(getPlannedHours('marta', [sundayNight], weekStart)).toBe(2);
  });
});

describe('shift events', () => {
  const night = shift('night', '2026-11-03 22:00:00', '2026-11-04 06:00:00');

  it('splits a shift that crosses midnight into one event per day in the week view', () => {
    expect(toShiftEvents(night, true).map((event) => [event.start, event.end])).toEqual([
      ['2026-11-03 22:00:00', '2026-11-04 00:00:00'],
      ['2026-11-04 00:00:00', '2026-11-04 06:00:00'],
    ]);
  });

  it('keeps a shift that crosses midnight whole in the month view', () => {
    expect(toShiftEvents(night, false)).toHaveLength(1);
  });

  it('moves the whole shift when one of its segments is moved', () => {
    const [, morningPart] = toShiftEvents(night, true);
    expect(getMovedShiftRange(morningPart, '2026-11-05 01:30:00')).toEqual({
      start: '2026-11-04 23:30:00',
      end: '2026-11-05 07:30:00',
    });
  });

  it('changes the end of the shift when its last segment is resized', () => {
    const [, morningPart] = toShiftEvents(night, true);
    expect(getResizedShiftRange(morningPart, '2026-11-04 00:00:00', '2026-11-04 04:30:00')).toEqual(
      {
        start: '2026-11-03 22:00:00',
        end: '2026-11-04 04:30:00',
      }
    );
  });

  it('does not resize a shift from its midnight split', () => {
    const [eveningPart] = toShiftEvents(night, true);
    expect(
      getResizedShiftRange(eveningPart, '2026-11-03 22:00:00', '2026-11-03 23:00:00')
    ).toBeNull();
  });
});
