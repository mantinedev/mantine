import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@mantine/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@mantine/core/Container',
    refType: HTMLDivElement,
  });
});
