import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell, AppShellProps } from './AppShell';

const defaultProps: AppShellProps = {
  children: 'test-app-shell',
};

describe('@mantine/core/AppShell', () => {
  itRendersChildren(AppShell, defaultProps);
  itSupportsProviderVariant(AppShell, defaultProps, 'AppShell');
  itSupportsSystemProps({
    component: AppShell,
    props: defaultProps,
    displayName: '@mantine/core/AppShell',
    refType: HTMLDivElement,
    providerName: 'AppShell',
  });

  it('sets fixed position and z-index on Header and Navbar components based on props', () => {
    const { container: fixed } = render(
      <AppShell
        fixed
        zIndex={476}
        header={<Header height={60}>test-header</Header>}
        navbar={<Navbar>test-navbar</Navbar>}
      >
        test-shell
      </AppShell>
    );

    const { container: _static } = render(
      <AppShell
        fixed={false}
        header={<Header height={60}>test-header</Header>}
        navbar={<Navbar>test-navbar</Navbar>}
      >
        test-shell
      </AppShell>
    );

    expect(_static.querySelector('.mantine-Header-root')).toHaveStyle({ position: 'static' });
    expect(fixed.querySelector('.mantine-Header-root')).toHaveStyle({
      zIndex: 476,
      position: 'fixed',
    });

    expect(_static.querySelector('.mantine-Navbar-root')).toHaveStyle({ position: 'static' });
    expect(fixed.querySelector('.mantine-Navbar-root')).toHaveStyle({
      zIndex: 476,
      position: 'fixed',
    });
  });
});
