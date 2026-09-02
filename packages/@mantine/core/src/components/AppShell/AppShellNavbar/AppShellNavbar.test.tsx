import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { useAppShellResize } from '../use-app-shell-resize/use-app-shell-resize';
import { AppShellNavbar, AppShellNavbarProps, AppShellNavbarStylesNames } from './AppShellNavbar';

const TestContainer = createContextContainer(AppShellNavbar, AppShell, {});

function ResizableContainer(props: AppShellNavbarProps) {
  const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
  return (
    <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }}>
      <AppShellNavbar {...props} />
    </AppShell>
  );
}

const defaultProps: AppShellNavbarProps = {};

describe('@mantine/core/AppShellNavbar', () => {
  tests.itSupportsSystemProps<AppShellNavbarProps, AppShellNavbarStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
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

  it('does not throw when dangerouslySetInnerHTML is used without children on a non-resizable section', () => {
    expect(() =>
      render(<TestContainer dangerouslySetInnerHTML={{ __html: '<span>navbar</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('navbar')).toBeInTheDocument();
  });

  it('does not throw when dangerouslySetInnerHTML is used on a resizable section', () => {
    expect(() =>
      render(<ResizableContainer dangerouslySetInnerHTML={{ __html: '<span>navbar</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('navbar')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
