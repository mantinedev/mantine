import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Navbar } from '../../Navbar/Navbar';
import { getNavbarBreakpoints } from './get-navbar-breakpoints';
import { getSortedBreakpoints } from '../get-sorted-breakpoints/get-sorted-breakpoints';

describe('@mantine/core/AppShell/get-navbar-breakpoints', () => {
  it('extracts sorted breakpoints from Navbar component', () => {
    expect(
      getNavbarBreakpoints(<Navbar width={{ sm: 200, md: 300 }}>Navbar</Navbar>, DEFAULT_THEME)
    ).toEqual(getSortedBreakpoints({ sm: 200, md: 300 }, DEFAULT_THEME));
  });

  it('filters out base width from breakpoints', () => {
    expect(
      getNavbarBreakpoints(
        <Navbar width={{ base: 100, sm: 200, md: 300 }}>Navbar</Navbar>,
        DEFAULT_THEME
      )
    ).toEqual(getSortedBreakpoints({ sm: 200, md: 300 }, DEFAULT_THEME));
  });
});
