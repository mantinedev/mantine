import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@mantine/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@mantine/core/Mark',
    refType: HTMLElement,
  });
});
