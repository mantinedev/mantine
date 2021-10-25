import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { Navbar } from './Navbar';

const defaultProps = { children: 'test-navbar' };

describe('@mantine/core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsClassName(Navbar, defaultProps);
  itSupportsMargins(Navbar, defaultProps);
  itSupportsOthers(Navbar, defaultProps);
  itSupportsStyle(Navbar, defaultProps);
  itSupportsRef(Navbar, defaultProps, HTMLElement);

  it('has correct displayName', () => {
    expect(Navbar.displayName).toEqual('@mantine/core/Navbar');
  });
});
