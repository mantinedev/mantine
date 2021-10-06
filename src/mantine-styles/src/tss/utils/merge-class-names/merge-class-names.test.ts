import cx from 'clsx';
import { mergeClassNames } from './merge-class-names';

const classes = {
  root: 'root-1',
  title: 'title-1',
};

describe('@mantine/tss/merge-class-names', () => {
  it('merges classNames correctly', () => {
    expect(
      mergeClassNames(cx, classes, { root: 'root-test', title: 'title-test' }, 'alert')
    ).toEqual({
      root: 'root-1 root-test mantine-alert-root',
      title: 'title-1 title-test mantine-alert-title',
    });
  });

  it('merges classNames partial correctly', () => {
    expect(mergeClassNames(cx, classes, { root: 'root-test' }, 'alert')).toEqual({
      root: 'root-1 root-test mantine-alert-root',
      title: 'title-1 mantine-alert-title',
    });
  });
});
