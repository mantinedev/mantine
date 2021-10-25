import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsMargins,
  itRendersChildren,
  itSupportsRef,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { NavbarSection } from './NavbarSection';

const defaultProps = { children: 'test-section' };

describe('@mantine/core/NavbarSection', () => {
  itSupportsClassName(NavbarSection, defaultProps);
  itSupportsMargins(NavbarSection, defaultProps);
  itRendersChildren(NavbarSection, defaultProps);
  itSupportsOthers(NavbarSection, defaultProps);
  itSupportsStyle(NavbarSection, defaultProps);
  itSupportsRef(NavbarSection, defaultProps, HTMLDivElement);

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <NavbarSection<'a'> component="a" href="https://mantine.dev" {...defaultProps} />
    );
    const withComponent = shallow(
      <NavbarSection<typeof TestComponent> component={TestComponent} {...defaultProps} />
    );

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(NavbarSection.displayName).toEqual('@mantine/core/NavbarSection');
  });
});
