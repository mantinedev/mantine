import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@mantine/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@mantine/core/Footer',
    refType: HTMLElement,
    name: 'Footer',
  });
});
