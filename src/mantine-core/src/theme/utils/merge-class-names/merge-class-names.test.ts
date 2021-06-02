import { mergeClassNames } from './merge-class-names';

const classes = {
  root: 'root-1',
  title: 'title-1',
};

describe('@mantine/core/merge-class-names', () => {
  it('merges classNames correctly', () => {
    expect(mergeClassNames(classes, { root: 'root-test', title: 'title-test' })).toEqual({
      root: 'root-1 root-test',
      title: 'title-1 title-test',
    });
  });

  it('merges classNames partial correctly', () => {
    expect(mergeClassNames(classes, { root: 'root-test' })).toEqual({
      root: 'root-1 root-test',
      title: 'title-1',
    });
  });

  it('returns initial classes if classNames were not specified or classNames object is empty', () => {
    expect(mergeClassNames(classes, null)).toBe(classes);
    expect(mergeClassNames(classes, {})).toBe(classes);
  });
});
