import { getSunburstGeometry } from './get-sunburst-geometry';

const base = { width: 300, height: 300, innerRadius: 50, outerRadius: undefined, ringPadding: 0 };

describe('@mantine/charts/SunburstChart/get-sunburst-geometry', () => {
  it('splits the space between innerRadius and the container radius into equal rings', () => {
    expect(getSunburstGeometry({ ...base, depth: 2 }).thickness).toBe(50);
    expect(getSunburstGeometry({ ...base, width: 400, height: 300, depth: 1 }).thickness).toBe(100);
  });

  it('adds one extra ring to the recharts outer radius for the hidden root level', () => {
    expect(getSunburstGeometry({ ...base, depth: 1 }).rechartsOuterRadius).toBe(250);
    expect(getSunburstGeometry({ ...base, depth: 2 }).rechartsOuterRadius).toBe(200);
  });

  it('uses outerRadius instead of the container radius when set', () => {
    expect(getSunburstGeometry({ ...base, outerRadius: 100, depth: 2 })).toEqual({
      thickness: 25,
      rechartsOuterRadius: 125,
    });
  });

  it('subtracts ring padding between rings', () => {
    expect(getSunburstGeometry({ ...base, ringPadding: 10, depth: 3 }).thickness).toBeCloseTo(
      80 / 3
    );
  });

  it('treats empty data as a single ring', () => {
    expect(getSunburstGeometry({ ...base, depth: 0 })).toEqual({
      thickness: 100,
      rechartsOuterRadius: 250,
    });
  });
});
