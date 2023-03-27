import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@mantine/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsProviderVariant(Container, defaultProps, 'Container');
  itSupportsProviderSize(Container, defaultProps, 'Container');
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@mantine/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  });
});
