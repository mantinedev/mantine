import { getDayRelativePercent } from './get-day-relative-percent';

describe('@mantine/schedule/getDayRelativePercent', () => {
  it('maps clientX to a percent across the whole container when there is a single day', () => {
    expect(
      getDayRelativePercent({
        clientX: 350,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 0,
        dayCount: 1,
      })
    ).toBe(50);
  });

  it('maps clientX relative to the day sub-region in a multi-day container', () => {
    // 7 equal days of 100px each, day index 2 spans 200px - 300px
    expect(
      getDayRelativePercent({
        clientX: 250,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 2,
        dayCount: 7,
      })
    ).toBe(50);
    expect(
      getDayRelativePercent({
        clientX: 200,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 2,
        dayCount: 7,
      })
    ).toBe(0);
    expect(
      getDayRelativePercent({
        clientX: 300,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 2,
        dayCount: 7,
      })
    ).toBe(100);
  });

  it('clamps to 0 when clientX is before the day sub-region', () => {
    expect(
      getDayRelativePercent({
        clientX: 180,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 2,
        dayCount: 7,
      })
    ).toBe(0);
  });

  it('clamps to 100 when clientX is after the day sub-region', () => {
    expect(
      getDayRelativePercent({
        clientX: 360,
        containerLeft: 0,
        containerWidth: 700,
        dayIndex: 2,
        dayCount: 7,
      })
    ).toBe(100);
  });

  it('accounts for the container offset from the viewport', () => {
    // container starts at 100px, day index 0 spans 100px - 200px
    expect(
      getDayRelativePercent({
        clientX: 150,
        containerLeft: 100,
        containerWidth: 700,
        dayIndex: 0,
        dayCount: 7,
      })
    ).toBe(50);
  });
});
