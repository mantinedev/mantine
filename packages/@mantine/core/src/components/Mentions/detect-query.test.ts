import { detectQuery } from './detect-query';
import { ResolvedMentionSource } from './resolve-sources';
import { makeTriggerRegex } from './utils/make-trigger-regex';
import { createTestConfig } from './utils/test-helpers';
import type { MentionSpan } from './utils/walk-mentions';

const source: ResolvedMentionSource = {
  sourceIndex: 0,
  props: {},
  config: createTestConfig('@'),
  regex: makeTriggerRegex('@'),
};

describe('@mantine/core/Mentions/detect-query', () => {
  it('detects a query typed after the trigger', () => {
    expect(detectQuery('Hello @wal', 10, [source])).toEqual({
      sourceIndex: 0,
      query: 'wal',
      queryStart: 6,
      queryEnd: 10,
    });
  });

  it('returns null when the caret is not after a trigger', () => {
    expect(detectQuery('Hello world', 11, [source])).toBeNull();
  });

  it('does not open a query when the trigger belongs to an existing mention', () => {
    const spans: MentionSpan[] = [
      {
        markupStart: 3,
        markupEnd: 26,
        sourceIndex: 0,
        id: 'walter',
        display: 'Walter White',
        trigger: '@',
        plainStart: 3,
        plainEnd: 16,
        rendered: '@Walter White',
      },
    ];
    expect(detectQuery('Hi @Walter White', 4, [source], spans)).toBeNull();
  });

  it('does not open a query that spans an existing mention with allowSpaceInQuery', () => {
    const spaceSource: ResolvedMentionSource = {
      ...source,
      regex: makeTriggerRegex('@', { allowSpaceInQuery: true }),
    };
    const spans: MentionSpan[] = [
      {
        markupStart: 4,
        markupEnd: 27,
        sourceIndex: 0,
        id: 'jesse',
        display: 'Jesse Pinkman',
        trigger: '@',
        plainStart: 4,
        plainEnd: 17,
        rendered: 'Jesse Pinkman',
      },
    ];
    expect(detectQuery('@zz Jesse Pinkman', 17, [spaceSource], spans)).toBeNull();
    expect(detectQuery('@zz Jesse Pinkman', 3, [spaceSource], spans)).toEqual({
      sourceIndex: 0,
      query: 'zz',
      queryStart: 0,
      queryEnd: 3,
    });
  });

  it.each([
    ['a RegExp trigger without capture groups', /@/],
    ['a character class RegExp trigger', /[@#]/],
    ['a RegExp trigger with two or more capture groups', /(?:^|\s)(@(\w*))$/],
  ])('detects the query with %s', (_name, trigger) => {
    const regexSource: ResolvedMentionSource = { ...source, regex: makeTriggerRegex(trigger) };
    expect(() => detectQuery('Hello @', 7, [regexSource])).not.toThrow();
    expect(detectQuery('Hello @wal', 10, [regexSource])).toEqual({
      sourceIndex: 0,
      query: 'wal',
      queryStart: 6,
      queryEnd: 10,
    });
    expect(detectQuery('Hello world', 11, [regexSource])).toBeNull();
  });

  it('does not throw for a RegExp that captures fewer groups than expected', () => {
    const broken: ResolvedMentionSource = { ...source, regex: /@/ };
    expect(() => detectQuery('Hello @', 7, [broken])).not.toThrow();
  });

  it('does not extend a query with spaces across a newline', () => {
    const spaced: ResolvedMentionSource = {
      ...source,
      regex: makeTriggerRegex('@', { allowSpaceInQuery: true }),
    };
    expect(detectQuery('@Walter\nWhite', 13, [spaced])).toBeNull();
  });
});
