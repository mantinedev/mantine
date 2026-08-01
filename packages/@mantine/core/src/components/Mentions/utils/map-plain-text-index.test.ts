import { getPlainText } from './get-plain-text';
import { mapPlainTextIndex } from './map-plain-text-index';
import { createTestConfig } from './test-helpers';

describe('@mantine/core/Mentions/map-plain-text-index', () => {
  const configs = [createTestConfig('@')];
  const value = 'Hey @[Walter White](walter)!';
  // plain text: "Hey @Walter White!" — mention plain span [4, 17)

  it('maps an index in a plain-text gap linearly to the markup', () => {
    expect(mapPlainTextIndex(value, configs, 0)).toBe(0);
    expect(mapPlainTextIndex(value, configs, 4)).toBe(4);
  });

  it('snaps an index inside a mention to its start with the START direction', () => {
    expect(mapPlainTextIndex(value, configs, 10, 'START')).toBe(4);
  });

  it('snaps an index inside a mention to its end with the END direction', () => {
    // markup mention "@[Walter White](walter)" ends at index 27
    expect(mapPlainTextIndex(value, configs, 10, 'END')).toBe(27);
  });

  it('returns null for an index inside a mention with the NULL direction', () => {
    expect(mapPlainTextIndex(value, configs, 10, 'NULL')).toBeNull();
  });

  it('maps the mention end boundary to just after the markup', () => {
    expect(mapPlainTextIndex(value, configs, 17, 'START')).toBe(27);
  });

  it('maps trailing text after a mention', () => {
    // plain index 18 is the "!" -> markup index 28
    expect(mapPlainTextIndex(value, configs, 18)).toBe(28);
  });

  it('round-trips with getPlainText for gap indices', () => {
    const plain = getPlainText(value, configs);
    for (let i = 0; i <= 4; i += 1) {
      const markupIndex = mapPlainTextIndex(value, configs, i, 'START')!;
      expect(getPlainText(value.slice(0, markupIndex), configs)).toBe(plain.slice(0, i));
    }
  });
});
