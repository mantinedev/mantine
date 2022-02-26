import { getHotkeysPayload } from './use-spotlight-shortcuts';

describe('@mantine/spotlight/use-spotlight-shortcuts', () => {
  const spy = jest.fn();

  it('returns correct values for string shortcut', () => {
    expect(getHotkeysPayload('mod + K', spy)).toStrictEqual([['mod + K', spy]]);
  });

  it('returns correct values for array shortcuts', () => {
    expect(getHotkeysPayload(['mod + K', 'shift + mod + K', 'alt + J'], spy)).toStrictEqual([
      ['mod + K', spy],
      ['shift + mod + K', spy],
      ['alt + J', spy],
    ]);
  });

  it('returns empty array for null shortcut', () => {
    expect(getHotkeysPayload(null, spy)).toStrictEqual([]);
  });
});
