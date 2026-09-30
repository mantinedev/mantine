import { getMentions } from './get-mentions';

describe('@mantine/core/Mentions/get-mentions', () => {
  it('parses mentions with the default @[__display__](__id__) source', () => {
    expect(getMentions('Hi @[Walter White](walter) and @[Jesse](jesse)')).toEqual([
      { id: 'walter', display: 'Walter White', index: 3, plainTextIndex: 3, trigger: '@' },
      { id: 'jesse', display: 'Jesse', index: 31, plainTextIndex: 20, trigger: '@' },
    ]);
  });

  it('derives the default markup from a string trigger', () => {
    expect(getMentions('see #[bug](42)', [{ trigger: '#' }])).toEqual([
      { id: '42', display: 'bug', index: 4, plainTextIndex: 4, trigger: '#' },
    ]);
  });

  it('supports several sources and custom templates', () => {
    const mentions = getMentions('@[Walter](walter) {{tag:1}}', [
      { trigger: '@' },
      { trigger: '#', markup: '{{tag:__id__}}' },
    ]);
    expect(mentions.map((mention) => [mention.id, mention.trigger])).toEqual([
      ['walter', '@'],
      ['1', '#'],
    ]);
  });

  it('computes plain-text indices with withTrigger and displayTransform', () => {
    const [, second] = getMentions('@[A](a) @[B](b)', [
      { trigger: '@', withTrigger: true, displayTransform: (id) => id.toUpperCase() },
    ]);
    expect(second.plainTextIndex).toBe(3);
  });
});
