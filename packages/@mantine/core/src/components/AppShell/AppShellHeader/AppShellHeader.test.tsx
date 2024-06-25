import { createContextContainer, render, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { AppShellHeader, AppShellHeaderProps, AppShellHeaderStylesNames } from './AppShellHeader';

const TestContainer = createContextContainer(AppShellHeader, AppShell, {});

const defaultProps: AppShellHeaderProps = {};

describe('@mantine/core/AppShellHeader', () => {
  tests.itSupportsSystemProps<AppShellHeaderProps, AppShellHeaderStylesNames>({
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
    displayName: '@mantine/core/AppShellHeader',
    stylesApiSelectors: ['header'],
    selector: '.mantine-AppShell-header',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellHeader,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.mantine-AppShell-header')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.mantine-AppShell-header')).not.toHaveAttribute(
      'data-with-border'
    );
  });
});
