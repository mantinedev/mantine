import {
  BRIGHT_LIGHTNESS_RAMP,
  CHROMA_ENVELOPE,
  DARK_LIGHTNESS_RAMP,
  LIGHTNESS_RAMP,
  STANDARD_LIGHTNESS_RAMP,
  lightnessRampForHue,
  REFERENCE_LIGHTNESS_RAMPS,
} from './ramp';

describe('@mantine/colors-generator/ramp', () => {
  it('LIGHTNESS_RAMP has 10 strictly decreasing entries within (0, 1)', () => {
    expect(LIGHTNESS_RAMP).toHaveLength(10);

    LIGHTNESS_RAMP.forEach((value) => {
      expect(value).toBeGreaterThan(0);
      expect(value).toBeLessThan(1);
    });

    for (let i = 1; i < LIGHTNESS_RAMP.length; i += 1) {
      expect(LIGHTNESS_RAMP[i]).toBeLessThan(LIGHTNESS_RAMP[i - 1]);
    }
  });

  it('CHROMA_ENVELOPE has 10 entries with its maximum at index 5 or 6', () => {
    expect(CHROMA_ENVELOPE).toHaveLength(10);

    const values: number[] = [...CHROMA_ENVELOPE];
    const maxIndex = values.indexOf(Math.max(...values));
    expect([5, 6]).toContain(maxIndex);
  });

  it('LIGHTNESS_RAMP is the same reference as STANDARD_LIGHTNESS_RAMP (back-compat)', () => {
    expect(LIGHTNESS_RAMP).toBe(STANDARD_LIGHTNESS_RAMP);
  });

  it('STANDARD_LIGHTNESS_RAMP and BRIGHT_LIGHTNESS_RAMP each have 10 entries', () => {
    expect(STANDARD_LIGHTNESS_RAMP).toHaveLength(10);
    expect(BRIGHT_LIGHTNESS_RAMP).toHaveLength(10);
  });

  describe('DARK_LIGHTNESS_RAMP', () => {
    it('has exactly 10 entries', () => {
      expect(DARK_LIGHTNESS_RAMP).toHaveLength(10);
    });

    it('is strictly decreasing', () => {
      for (let i = 1; i < DARK_LIGHTNESS_RAMP.length; i += 1) {
        expect(DARK_LIGHTNESS_RAMP[i]).toBeLessThan(DARK_LIGHTNESS_RAMP[i - 1]);
      }
    });

    it('all entries are within (0, 1)', () => {
      DARK_LIGHTNESS_RAMP.forEach((value) => {
        expect(value).toBeGreaterThan(0);
        expect(value).toBeLessThan(1);
      });
    });

    it('is element-wise darker than STANDARD_LIGHTNESS_RAMP at indices 0, 1, 2 and 6, 7, 8, 9', () => {
      const darkIndices = [0, 1, 2, 6, 7, 8, 9];
      for (const i of darkIndices) {
        expect(DARK_LIGHTNESS_RAMP[i]).toBeLessThan(STANDARD_LIGHTNESS_RAMP[i]);
      }
    });
  });

  it('BRIGHT_LIGHTNESS_RAMP is strictly decreasing and within (0, 1)', () => {
    BRIGHT_LIGHTNESS_RAMP.forEach((value) => {
      expect(value).toBeGreaterThan(0);
      expect(value).toBeLessThan(1);
    });
    for (let i = 1; i < BRIGHT_LIGHTNESS_RAMP.length; i += 1) {
      expect(BRIGHT_LIGHTNESS_RAMP[i]).toBeLessThan(BRIGHT_LIGHTNESS_RAMP[i - 1]);
    }
  });

  describe('lightnessRampForHue', () => {
    it('returns the reference ramp exactly at a reference hue', () => {
      REFERENCE_LIGHTNESS_RAMPS.forEach(({ hue, ramp }) => {
        lightnessRampForHue(hue).forEach((l, i) => expect(l).toBeCloseTo(ramp[i], 10));
      });
    });

    it('interpolates between the two closest reference hues', () => {
      const ramp = lightnessRampForHue(140);
      const lime = lightnessRampForHue(130);
      const green = lightnessRampForHue(150);
      ramp.forEach((l, i) => expect(l).toBeCloseTo((lime[i] + green[i]) / 2, 10));
    });

    it('wraps around the hue circle', () => {
      const ramp = lightnessRampForHue(7.5);
      const pink = lightnessRampForHue(350);
      const red = lightnessRampForHue(25);
      ramp.forEach((l, i) => expect(l).toBeCloseTo((pink[i] + red[i]) / 2, 10));
      lightnessRampForHue(365).forEach((l, i) =>
        expect(l).toBeCloseTo(lightnessRampForHue(5)[i], 10)
      );
    });

    it('yellow/bright hue index-6 lightness is higher than blue index-6 lightness', () => {
      expect(lightnessRampForHue(95)[6]).toBeGreaterThan(lightnessRampForHue(255)[6]);
    });

    it('is strictly decreasing for all representative hues', () => {
      const hues = [25, 55, 95, 130, 150, 185, 215, 255, 292, 350];
      for (const h of hues) {
        const ramp = lightnessRampForHue(h);
        for (let i = 1; i < ramp.length; i += 1) {
          expect(ramp[i]).toBeLessThan(ramp[i - 1]);
        }
      }
    });

    it('returns an array of 10 values', () => {
      expect(lightnessRampForHue(90)).toHaveLength(10);
      expect(lightnessRampForHue(255)).toHaveLength(10);
    });
  });
});
