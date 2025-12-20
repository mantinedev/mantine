import { tests } from '@mantine-tests/core';
import { Stack, StackProps, StackStylesNames } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  tests.itSupportsSystemProps<StackProps, StackStylesNames>({
    component: Stack,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    displayName: '@mantine/core/Stack',
    stylesApiSelectors: ['root'],
  });
});
