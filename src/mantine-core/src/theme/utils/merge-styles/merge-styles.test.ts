import { mergeStyles } from './merge-styles';

const classes = {
  root: 'root-1',
  title: 'title-1',
};

describe('@mantine/core/merge-styles', () => {
  it('merges complete styles correctly', () => {
    expect(mergeStyles(classes, { title: { height: 20 }, root: { color: 'red' } })).toEqual({
      title: { height: 20 },
      root: { color: 'red' },
    });
  });

  it('merges styles partial correctly', () => {
    expect(mergeStyles(classes, { title: { height: 20 } })).toEqual({
      title: { height: 20 },
      root: undefined,
    });
  });

  it('returns empty object if styles or classes are null', () => {
    expect(mergeStyles(null, { title: { height: 20 } })).toEqual({});
    expect(mergeStyles(classes, null)).toEqual({});
    expect(mergeStyles(null, null)).toEqual({});
  });
});
