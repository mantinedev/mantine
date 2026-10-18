import { clampSlotLabelInterval } from './clamp-slot-label-interval';

describe('@mantine/schedule/clamp-slot-label-interval', () => {
  it('returns the same value when it is a valid multiple of intervalMinutes', () => {
    expect(clampSlotLabelInterval(15, 15)).toBe(15);
    expect(clampSlotLabelInterval(30, 15)).toBe(30);
    expect(clampSlotLabelInterval(60, 15)).toBe(60);
    expect(clampSlotLabelInterval(120, 60)).toBe(120);
    expect(clampSlotLabelInterval(60, 60)).toBe(60);
  });

  it('never returns a value smaller than intervalMinutes', () => {
    expect(clampSlotLabelInterval(15, 30)).toBe(30);
    expect(clampSlotLabelInterval(60, 120)).toBe(120);
    expect(clampSlotLabelInterval(1, 15)).toBe(15);
  });

  it('rounds up to the next valid multiple of intervalMinutes', () => {
    expect(clampSlotLabelInterval(20, 15)).toBe(30);
    expect(clampSlotLabelInterval(180, 120)).toBe(240);
    expect(clampSlotLabelInterval(30, 20)).toBe(60);
    expect(clampSlotLabelInterval(15, 12)).toBe(60);
  });

  it('returns the same value when applied twice', () => {
    [
      [30, 20],
      [20, 15],
      [15, 12],
      [180, 120],
      [7, 15],
      [45, 15],
    ].forEach(([label, interval]) => {
      const once = clampSlotLabelInterval(label, interval);
      expect(clampSlotLabelInterval(once, interval)).toBe(once);
    });
  });

  it('falls back to 60 for values that do not divide evenly into an hour', () => {
    expect(clampSlotLabelInterval(7, 15)).toBe(60);
    expect(clampSlotLabelInterval(45, 15)).toBe(60);
    expect(clampSlotLabelInterval(90, 30)).toBe(60);
  });

  it('falls back to 60 for non-positive and non-finite values', () => {
    expect(clampSlotLabelInterval(0, 15)).toBe(60);
    expect(clampSlotLabelInterval(-30, 15)).toBe(60);
    expect(clampSlotLabelInterval(Number.NaN, 15)).toBe(60);
    expect(clampSlotLabelInterval(Number.POSITIVE_INFINITY, 15)).toBe(60);
  });

  it('uses the clamped intervalMinutes value', () => {
    expect(clampSlotLabelInterval(15, 7)).toBe(60);
    expect(clampSlotLabelInterval(30, 0)).toBe(30);
  });

  it('caps the result at a full day', () => {
    expect(clampSlotLabelInterval(2000, 15)).toBe(1440);
    expect(clampSlotLabelInterval(1440, 1440)).toBe(1440);
  });
});
