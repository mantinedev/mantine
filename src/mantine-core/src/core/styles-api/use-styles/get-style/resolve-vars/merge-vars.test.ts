import { mergeVars } from './merge-vars';

describe('@mantine/core/merge-vars', () => {
  it('merges vars', () => {
    expect(mergeVars([{ root: { '--test': '1' } }])).toStrictEqual({ root: { '--test': '1' } });
    expect(
      mergeVars([
        { root: { '--test': '1' } },
        { root: { '--test': '2', '--test2': '2' } },
        { root: { '--test': '3' } },
      ])
    ).toStrictEqual({ root: { '--test': '3', '--test2': '2' } });
  });

  it('correctly handles undefined vars', () => {
    expect(mergeVars([undefined, { root: { '--test': '1' } }])).toStrictEqual({
      root: { '--test': '1' },
    });
    expect(mergeVars([undefined])).toStrictEqual({});
  });

  it('correctly handles undefined values in css variables', () => {
    expect(
      mergeVars([
        { root: { '--test': '1' } },
        { root: { '--test': undefined, '--test2': '2' } },
        { root: { '--test2': undefined } },
      ])
    ).toStrictEqual({ root: { '--test': '1', '--test2': '2' } });
  });

  it('correctly merges multiple selectors', () => {
    expect(
      mergeVars([
        { root: { '--test': '1' }, body: { '--test': '2' } },
        { root: { '--test2': '3' } },
        { body: { '--test2': '4' } },
      ])
    ).toStrictEqual({
      root: { '--test': '1', '--test2': '3' },
      body: { '--test': '2', '--test2': '4' },
    });
  });
});
