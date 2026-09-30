import { reserveRow } from './reserve-row';

describe('@mantine/schedule/reserve-row', () => {
  it('returns row 0 when no events are placed', () => {
    const nextRowByDay = [0, 0, 0, 0, 0, 0, 0];
    expect(reserveRow({ nextRowByDay, startDayIndex: 2, daysSpanned: 1 })).toBe(0);
    expect(nextRowByDay).toEqual([0, 0, 1, 0, 0, 0, 0]);
  });

  it('returns row 0 when event does not overlap with placed events', () => {
    const nextRowByDay = [1, 0, 0, 0, 0, 0, 0];
    expect(reserveRow({ nextRowByDay, startDayIndex: 3, daysSpanned: 1 })).toBe(0);
  });

  it('allows events on adjacent days without overlap', () => {
    const nextRowByDay = [0, 0, 0, 0, 0, 0, 0];
    reserveRow({ nextRowByDay, startDayIndex: 0, daysSpanned: 2 });
    expect(reserveRow({ nextRowByDay, startDayIndex: 2, daysSpanned: 1 })).toBe(0);
  });

  it('returns the row below the highest overlapping event', () => {
    const nextRowByDay = [0, 0, 0, 0, 0, 0, 0];
    expect(reserveRow({ nextRowByDay, startDayIndex: 2, daysSpanned: 3 })).toBe(0);
    expect(reserveRow({ nextRowByDay, startDayIndex: 3, daysSpanned: 3 })).toBe(1);
    expect(reserveRow({ nextRowByDay, startDayIndex: 3, daysSpanned: 2 })).toBe(2);
    expect(nextRowByDay).toEqual([0, 0, 1, 3, 3, 2, 0]);
  });

  it('places a multi-day event below all events it overlaps', () => {
    const nextRowByDay = [0, 0, 0, 0, 0, 0, 0];
    reserveRow({ nextRowByDay, startDayIndex: 1, daysSpanned: 1 });
    reserveRow({ nextRowByDay, startDayIndex: 5, daysSpanned: 1 });
    reserveRow({ nextRowByDay, startDayIndex: 5, daysSpanned: 1 });
    expect(reserveRow({ nextRowByDay, startDayIndex: 0, daysSpanned: 7 })).toBe(2);
    expect(nextRowByDay).toEqual([3, 3, 3, 3, 3, 3, 3]);
  });
});
