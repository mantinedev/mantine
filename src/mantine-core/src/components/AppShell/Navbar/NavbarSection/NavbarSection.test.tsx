import {
  itSupportsClassName,
  itSupportsMargins,
  itRendersChildren,
  itSupportsRef,
  itSupportsOthers,
  itSupportsStyle,
  itIsPolymorphic,
} from '@mantine/tests';
import { NavbarSection } from './NavbarSection';

const defaultProps = { children: 'test-section' };

describe('@mantine/core/NavbarSection', () => {
  itSupportsClassName(NavbarSection, defaultProps);
  itSupportsMargins(NavbarSection, defaultProps);
  itRendersChildren(NavbarSection, defaultProps);
  itSupportsOthers(NavbarSection, defaultProps);
  itSupportsStyle(NavbarSection, defaultProps);
  itIsPolymorphic(NavbarSection, defaultProps);
  itSupportsRef(NavbarSection, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(NavbarSection.displayName).toEqual('@mantine/core/NavbarSection');
  });
});
