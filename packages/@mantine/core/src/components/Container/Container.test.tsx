import { tests } from '@mantine-tests/core';
import { Container, ContainerProps, ContainerStylesNames } from './Container';

const defaultProps: ContainerProps = {};

describe('@mantine/core/Container', () => {
  tests.itSupportsSystemProps<ContainerProps, ContainerStylesNames>({
    component: Container,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Container',
    stylesApiSelectors: ['root'],
  });
});
