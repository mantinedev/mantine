import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { NavbarSection, NavbarSectionProps } from './NavbarSection';

const defaultProps: NavbarSectionProps<'div'> = {
  children: 'test-section',
};

describe('@mantine/core/NavbarSection', () => {
  itRendersChildren(NavbarSection, defaultProps);
  itIsPolymorphic(NavbarSection, defaultProps);

  itSupportsSystemProps({
    component: NavbarSection,
    props: defaultProps,
    displayName: '@mantine/core/NavbarSection',
    refType: HTMLDivElement,
  });
});
