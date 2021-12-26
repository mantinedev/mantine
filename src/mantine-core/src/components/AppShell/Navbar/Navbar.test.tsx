import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Navbar, NavbarProps } from './Navbar';
import { NavbarSection } from './NavbarSection/NavbarSection';

const defaultProps: NavbarProps = { children: 'test-navbar' };

describe('@mantine/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsSystemProps({
    component: Navbar,
    props: defaultProps,
    displayName: '@mantine/core/Navbar',
    refType: HTMLElement,
  });

  it('exposes NavbarSection as Navbar.Section', () => {
    expect(Navbar.Section).toBe(NavbarSection);
  });
});
