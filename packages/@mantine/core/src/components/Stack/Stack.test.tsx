import { tests } from '@mantine-tests/core';
import { Stack, StackProps, StackStylesNames } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  tests.itSupportsSystemProps<StackProps, StackStylesNames>({
    component: Stack,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Stack',
    stylesApiSelectors: ['root'],
  });
});
