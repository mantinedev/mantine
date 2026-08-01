import { getMentions } from './get-mentions';
import { createTestConfig } from './test-helpers';

describe('@mantine/core/Mentions/get-mentions', () => {
  const configs = [createTestConfig('@'), createTestConfig('#', '#[__display__](__id__)')];

  it('extracts id, display, indices and trigger', () => {
    const mentions = getMentions('Hey @[Walter White](walter), ready?', [createTestConfig('@')]);
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
    const mentions = getMentions('@[A](a) and #[B](b)', configs);
    expect(mentions).toHaveLength(2);
    // plain text is "@A and #B"
    expect(mentions[0]).toMatchObject({ id: 'a', trigger: '@', plainTextIndex: 0 });
    expect(mentions[1]).toMatchObject({ id: 'b', trigger: '#', plainTextIndex: 7 });
  });

  it('returns an empty array when there are no mentions', () => {
    expect(getMentions('nothing here', configs)).toEqual([]);
  });
});
