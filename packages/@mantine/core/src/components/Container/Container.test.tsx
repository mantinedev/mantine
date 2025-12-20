import { tests } from '@mantine-tests/core';
import { Container, ContainerProps, ContainerStylesNames } from './Container';

const defaultProps: ContainerProps = {};

describe('@mantine/core/Container', () => {
  tests.itSupportsSystemProps<ContainerProps, ContainerStylesNames>({
    component: Container,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Container',
    stylesApiSelectors: ['root'],
  });
});
