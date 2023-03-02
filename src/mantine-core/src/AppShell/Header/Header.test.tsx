import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@mantine/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsProviderVariant(Header, defaultProps, 'Header');
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@mantine/core/Header',
    refType: HTMLElement,
    providerName: 'Header',
  });
});
