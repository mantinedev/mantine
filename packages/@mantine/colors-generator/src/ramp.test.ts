import {
  BRIGHT_LIGHTNESS_RAMP,
  CHROMA_ENVELOPE,
  DARK_LIGHTNESS_RAMP,
  LIGHTNESS_RAMP,
  STANDARD_LIGHTNESS_RAMP,
  brightnessWeight,
  lightnessRampForHue,
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

  describe('brightnessWeight', () => {
    it('returns approximately 1 at yellow hue (90°)', () => {
      expect(brightnessWeight(90)).toBeCloseTo(1, 10);
    });

    it('returns 0 for blue (255°)', () => {
      expect(brightnessWeight(255)).toBe(0);
    });

    it('returns 0 for teal (185°)', () => {
      expect(brightnessWeight(185)).toBe(0);
    });

    it('returns 0 at the halfwidth boundary (90 ± 75 = 15° and 165°)', () => {
      expect(brightnessWeight(15)).toBe(0);
      expect(brightnessWeight(165)).toBe(0);
    });

    it('returns a positive weight for lime (130°) which is within the window', () => {
      const w = brightnessWeight(130);
      expect(w).toBeGreaterThan(0);
      expect(w).toBeLessThan(1);
    });

    it('returns a positive weight for orange (55°) which is within the window', () => {
      const w = brightnessWeight(55);
      expect(w).toBeGreaterThan(0);
      expect(w).toBeLessThan(1);
    });

    it('is symmetric around 90°', () => {
      expect(brightnessWeight(90 - 30)).toBeCloseTo(brightnessWeight(90 + 30), 10);
    });
  });

  describe('lightnessRampForHue', () => {
    it('returns STANDARD_LIGHTNESS_RAMP values for blue (255°, weight=0)', () => {
      const ramp = lightnessRampForHue(255);
      STANDARD_LIGHTNESS_RAMP.forEach((l, i) => {
        expect(ramp[i]).toBeCloseTo(l, 10);
      });
    });

    it('returns BRIGHT_LIGHTNESS_RAMP values for yellow (90°, weight=1)', () => {
      const ramp = lightnessRampForHue(90);
      BRIGHT_LIGHTNESS_RAMP.forEach((l, i) => {
        expect(ramp[i]).toBeCloseTo(l, 10);
      });
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
