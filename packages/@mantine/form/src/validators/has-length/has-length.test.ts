import { hasLength } from './has-length';

const TEST_ERROR = 'has-length-error';

describe('@mantine/form/hasLength', () => {
  it('detects valid value', () => {
    const numberValidator = hasLength(3, TEST_ERROR);
    expect(numberValidator('hel')).toBe(null);
    expect(numberValidator([1, 2, 3])).toBe(null);
    expect(numberValidator({ length: 3 })).toBe(null);

    const minValidator = hasLength({ min: 2 }, TEST_ERROR);
    expect(minValidator('test')).toBe(null);
    expect(minValidator([1, 2])).toBe(null);
    expect(minValidator({ length: 2 })).toBe(null);

    const maxValidator = hasLength({ max: 3 }, TEST_ERROR);
    expect(maxValidator('tes')).toBe(null);
    expect(maxValidator('te')).toBe(null);
    expect(maxValidator([1, 2, 3])).toBe(null);
    expect(maxValidator({ length: 2 })).toBe(null);

    const clampValidator = hasLength({ min: 1, max: 3 }, TEST_ERROR);
    expect(clampValidator('t')).toBe(null);
    expect(clampValidator('te')).toBe(null);
    expect(clampValidator('tes')).toBe(null);
    expect(clampValidator([1, 2])).toBe(null);
    expect(clampValidator({ length: 3 })).toBe(null);
  });

  it('detects invalid value', () => {
    const numberValidator = hasLength(3, TEST_ERROR);
    expect(numberValidator('test')).toBe(TEST_ERROR);
    expect(numberValidator([1, 2, 3, 4])).toBe(TEST_ERROR);
    expect(numberValidator({ length: 5 })).toBe(TEST_ERROR);
    expect(numberValidator(null)).toBe(TEST_ERROR);
    expect(numberValidator(undefined)).toBe(TEST_ERROR);
    expect(numberValidator({})).toBe(TEST_ERROR);

    const minValidator = hasLength({ min: 2 }, TEST_ERROR);
    expect(minValidator('t')).toBe(TEST_ERROR);
    expect(minValidator('')).toBe(TEST_ERROR);
    expect(minValidator([1])).toBe(TEST_ERROR);
    expect(minValidator({ length: 0 })).toBe(TEST_ERROR);

    const maxValidator = hasLength({ max: 3 }, TEST_ERROR);
    expect(maxValidator('test')).toBe(TEST_ERROR);
    expect(maxValidator('test-1')).toBe(TEST_ERROR);
    expect(maxValidator([1, 2, 3, 4, 5])).toBe(TEST_ERROR);
    expect(maxValidator({ length: 4 })).toBe(TEST_ERROR);

    const clampValidator = hasLength({ min: 1, max: 3 }, TEST_ERROR);
    expect(clampValidator('test')).toBe(TEST_ERROR);
    expect(clampValidator('')).toBe(TEST_ERROR);
    expect(clampValidator([1, 2, 3, 4])).toBe(TEST_ERROR);
    expect(clampValidator({ length: 0 })).toBe(TEST_ERROR);
  });
});
