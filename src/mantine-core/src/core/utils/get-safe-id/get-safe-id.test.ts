import { getSafeId } from './get-safe-id';

const TEST_ERROR = 'test-error';

describe('@mantine/utils/Tabs/get-safe-id', () => {
  it('returns correct id', () => {
    expect(getSafeId('test-tab', TEST_ERROR)('react')).toBe('test-tab-react');
  });

  it('throws if value was not provided', () => {
    const factory = getSafeId('test', TEST_ERROR);
    expect(() => factory(undefined as any)).toThrow(new Error(TEST_ERROR));
    expect(() => factory(null as any)).toThrow(new Error(TEST_ERROR));
    expect(() => factory('')).toThrow(new Error(TEST_ERROR));
    expect(() => factory(1 as any)).toThrow(new Error(TEST_ERROR));
    expect(() => factory({} as any)).toThrow(new Error(TEST_ERROR));
    expect(() => factory('  \n')).toThrow(new Error(TEST_ERROR));
  });
});
