import React from 'react';
import { Navbar } from '../../Navbar/Navbar';
import { getNavbarBaseWidth } from './get-navbar-base-width';

describe('@mantine/core/AppShell/get-navbar-base-width', () => {
  it('extracts correct base width with number value', () => {
    expect(getNavbarBaseWidth(<Navbar width={{ base: 427 }}>test-navbar</Navbar>)).toBe('427px');
  });

  it('extracts correct base width with string value', () => {
    expect(
      getNavbarBaseWidth(<Navbar width={{ base: 'calc(100vw - 46px)' }}>test-navbar</Navbar>)
    ).toBe('calc(100vw - 46px)');
  });
});
