import React from 'react';
import { render, tests, createContextContainer } from '@mantine/tests';
import { AppShellNavbar, AppShellNavbarProps, AppShellNavbarStylesNames } from './AppShellNavbar';
import { AppShell } from '../AppShell';

const TestContainer = createContextContainer(AppShellNavbar, AppShell, {});

const defaultProps: AppShellNavbarProps = {};

describe('@mantine/core/AppShellNavbar', () => {
  tests.itSupportsSystemProps<AppShellNavbarProps, AppShellNavbarStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@mantine/core/AppShellNavbar',
    stylesApiSelectors: ['navbar'],
    selector: '.mantine-AppShell-navbar',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellNavbar,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.mantine-AppShell-navbar')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.mantine-AppShell-navbar')).not.toHaveAttribute(
      'data-with-border'
    );
  });
});
