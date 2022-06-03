import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsFocusEvents,
  itIsPolymorphic,
} from '@mantine/tests';
import { NavLink, NavLinkProps } from './NavLink';

const defaultProps: NavLinkProps = {
  label: 'test-link',
};

describe('@mantine/core/NavLink', () => {
  checkAccessibility([
    <NavLink {...defaultProps} />,
    <NavLink {...defaultProps}>
      <NavLink {...defaultProps} />
      <NavLink {...defaultProps} />
    </NavLink>,
  ]);

  itSupportsSystemProps({
    component: NavLink,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/NavLink',
    providerName: 'NavLink',
  });

  itRendersChildren(NavLink, defaultProps);
  itIsPolymorphic(NavLink, defaultProps);
  itSupportsFocusEvents(NavLink, defaultProps, 'button');
});
