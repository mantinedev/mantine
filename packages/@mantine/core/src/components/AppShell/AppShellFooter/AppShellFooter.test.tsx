import { createContextContainer, render, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { AppShellFooter, AppShellFooterProps, AppShellFooterStylesNames } from './AppShellFooter';

const TestContainer = createContextContainer(AppShellFooter, AppShell, {});

const defaultProps: AppShellFooterProps = {};

describe('@mantine/core/AppShellFooter', () => {
  tests.itSupportsSystemProps<AppShellFooterProps, AppShellFooterStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@mantine/core/AppShellFooter',
    stylesApiSelectors: ['footer'],
    selector: '.mantine-AppShell-footer',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellFooter,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.mantine-AppShell-footer')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.mantine-AppShell-footer')).not.toHaveAttribute(
      'data-with-border'
    );
  });
});
