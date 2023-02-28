import { isInRange } from './is-in-range';

const TEST_ERROR = 'is-in-range-error';

describe('@mantine/form/isInRange', () => {
  it('detects valid value', () => {
    const minValidator = isInRange({ min: 2 }, TEST_ERROR);
    expect(minValidator(2)).toBe(null);
    expect(minValidator(3)).toBe(null);

    const maxValidator = isInRange({ max: 2 }, TEST_ERROR);
    expect(maxValidator(1)).toBe(null);
    expect(maxValidator(0)).toBe(null);

    const clampValidator = isInRange({ min: 2, max: 5 }, TEST_ERROR);
    expect(clampValidator(4)).toBe(null);
  });

  it('detects invalid value', () => {
    const minValidator = isInRange({ min: 2 }, TEST_ERROR);
    expect(minValidator(0)).toBe(TEST_ERROR);
    expect(minValidator(1)).toBe(TEST_ERROR);
    expect(minValidator('2')).toBe(TEST_ERROR);
    expect(minValidator(null)).toBe(TEST_ERROR);
    expect(minValidator([])).toBe(TEST_ERROR);

    const maxValidator = isInRange({ max: 2 }, TEST_ERROR);
    expect(maxValidator(5)).toBe(TEST_ERROR);

    const clampValidator = isInRange({ min: 2, max: 5 }, TEST_ERROR);
    expect(clampValidator(8)).toBe(TEST_ERROR);
    expect(clampValidator(0)).toBe(TEST_ERROR);
  });
});
