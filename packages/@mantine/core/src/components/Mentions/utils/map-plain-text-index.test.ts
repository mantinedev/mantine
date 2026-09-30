import { getPlainText } from './get-plain-text';
import { getMarkupRange, mapMarkupIndex, mapPlainTextIndex } from './map-plain-text-index';
import { createTestConfig } from './test-helpers';
import { walkMentions } from './walk-mentions';

describe('@mantine/core/Mentions/map-plain-text-index', () => {
  const configs = [createTestConfig('@')];
  const value = 'Hey @[Walter White](walter)!';
  const walk = walkMentions(value, configs);

  it('maps an index in a plain-text gap linearly to the markup', () => {
    expect(mapPlainTextIndex(walk, 0)).toBe(0);
    expect(mapPlainTextIndex(walk, 4)).toBe(4);
  });

  it('snaps an index inside a mention to its start with the START direction', () => {
    expect(mapPlainTextIndex(walk, 10, 'START')).toBe(4);
  });

  it('snaps an index inside a mention to its end with the END direction', () => {
    expect(mapPlainTextIndex(walk, 10, 'END')).toBe(27);
  });

  it('maps the mention end boundary to just after the markup', () => {
    expect(mapPlainTextIndex(walk, 17, 'START')).toBe(27);
  });

  it('maps trailing text after a mention', () => {
    expect(mapPlainTextIndex(walk, 18)).toBe(28);
  });

  it('round-trips with getPlainText for gap indices', () => {
    const plain = getPlainText(value, configs);
    for (let i = 0; i <= 4; i += 1) {
      const markupIndex = mapPlainTextIndex(walk, i, 'START');
      expect(getPlainText(value.slice(0, markupIndex), configs)).toBe(plain.slice(0, i));
    }
  });

  it('maps markup indices back to plain-text indices', () => {
    expect(mapMarkupIndex(walk, 4)).toBe(4);
    expect(mapMarkupIndex(walk, 10)).toBe(4);
    expect(mapMarkupIndex(walk, 27)).toBe(17);
    expect(mapMarkupIndex(walk, 28)).toBe(18);
  });

  it('maps a plain-text range to a markup range that keeps mentions whole', () => {
    expect(getMarkupRange(walk, 6, 10)).toEqual({ markupStart: 4, markupEnd: 27 });
    expect(getMarkupRange(walk, 0, 3)).toEqual({ markupStart: 0, markupEnd: 3 });
  });
});
