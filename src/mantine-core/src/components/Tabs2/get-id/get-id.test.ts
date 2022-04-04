import { TABS_ERRORS } from '../Tabs.errors';
import { getId } from './get-id';

describe('@mantine/core/Tabs/get-id', () => {
  it('returns correct id', () => {
    expect(getId('test', 'tab')('react')).toBe('test-tab-react');
  });

  it('throws if value was not provided', () => {
    const factory = getId('test', 'tab');
    expect(() => factory(undefined)).toThrow(new Error(TABS_ERRORS.value.message));
    expect(() => factory(null)).toThrow(new Error(TABS_ERRORS.value.message));
    expect(() => factory('')).toThrow(new Error(TABS_ERRORS.value.message));
    expect(() => factory('  \n')).toThrow(new Error(TABS_ERRORS.value.message));
  });
});
