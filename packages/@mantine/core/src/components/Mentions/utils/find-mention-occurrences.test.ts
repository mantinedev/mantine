import { findMentionOccurrences } from './find-mention-occurrences';
import { createTestConfig } from './test-helpers';

describe('@mantine/core/Mentions/find-mention-occurrences', () => {
  const configs = [createTestConfig('@'), createTestConfig('#', '#[__display__](__id__)')];

  it('extracts id, display, indices and trigger', () => {
    const mentions = findMentionOccurrences('Hey @[Walter White](walter), ready?', [
      createTestConfig('@'),
    ]);
    expect(mentions).toHaveLength(1);
    expect(mentions[0]).toEqual({
      id: 'walter',
      display: 'Walter White',
      index: 4,
      plainTextIndex: 4,
      trigger: '@',
    });
  });

  it('computes plain-text indices across multiple mentions', () => {
    const mentions = findMentionOccurrences('@[A](a) and #[B](b)', configs);
    expect(mentions).toHaveLength(2);
    expect(mentions[0]).toMatchObject({ id: 'a', trigger: '@', plainTextIndex: 0 });
    expect(mentions[1]).toMatchObject({ id: 'b', trigger: '#', plainTextIndex: 7 });
  });

  it('returns an empty array when there are no mentions', () => {
    expect(findMentionOccurrences('nothing here', configs)).toEqual([]);
  });
});
