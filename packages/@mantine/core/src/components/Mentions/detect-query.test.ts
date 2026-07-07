import { detectQuery } from './detect-query';
import type { MentionSpan } from './get-mention-model';
import type { ResolvedMentionSource } from './resolve-sources';
import { makeTriggerRegex } from './utils/make-trigger-regex';
import { createTestConfig } from './utils/test-helpers';

const source: ResolvedMentionSource = {
  index: 0,
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
        index: 3,
        sourceIndex: 0,
        id: 'walter',
        display: 'Walter White',
        trigger: '@',
        plainStart: 3,
        plainEnd: 16,
        rendered: '@Walter White',
      },
    ];
    // caret right after the "@" of the "@Walter White" mention
    expect(detectQuery('Hi @Walter White', 4, [source], spans)).toBeNull();
  });
});
