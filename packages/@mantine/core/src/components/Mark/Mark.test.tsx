import { tests } from '@mantine-tests/core';
import { Mark, MarkProps, MarkStylesNames } from './Mark';

const defaultProps: MarkProps = {};

describe('@mantine/core/Mark', () => {
  tests.itSupportsSystemProps<MarkProps, MarkStylesNames>({
    component: Mark,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Mark',
    stylesApiSelectors: ['root'],
  });
});
