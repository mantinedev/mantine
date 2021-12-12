import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsSx,
} from '@mantine/tests';
import { Navbar } from './Navbar';
import { NavbarSection } from './NavbarSection/NavbarSection';

const defaultProps = { children: 'test-navbar' };

describe('@mantine/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsClassName(Navbar, defaultProps);
  itSupportsMargins(Navbar, defaultProps);
  itSupportsOthers(Navbar, defaultProps);
  itSupportsStyle(Navbar, defaultProps);
  itSupportsSx(Navbar, defaultProps);
  itSupportsRef(Navbar, defaultProps, HTMLElement);

  it('exposes NavbarSection as Navbar.Section', () => {
    expect(Navbar.Section).toBe(NavbarSection);
  });

  it('has correct displayName', () => {
    expect(Navbar.displayName).toEqual('@mantine/core/Navbar');
  });
});
