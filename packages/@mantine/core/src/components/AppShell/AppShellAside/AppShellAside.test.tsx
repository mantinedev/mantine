import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { useAppShellResize } from '../use-app-shell-resize/use-app-shell-resize';
import { AppShellAside, AppShellAsideProps, AppShellAsideStylesNames } from './AppShellAside';

const TestContainer = createContextContainer(AppShellAside, AppShell, {});

function ResizableContainer(props: AppShellAsideProps) {
  const resize = useAppShellResize({ aside: { min: 40, max: 500 } });
  return (
    <AppShell resize={resize} aside={{ width: 300, breakpoint: 'sm' }}>
      <AppShellAside {...props} />
    </AppShell>
  );
}

const defaultProps: AppShellAsideProps = {};

describe('@mantine/core/AppShellAside', () => {
  tests.itSupportsSystemProps<AppShellAsideProps, AppShellAsideStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/AppShellAside',
    stylesApiSelectors: ['aside'],
    selector: '.mantine-AppShell-aside',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellAside,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector('.mantine-AppShell-aside')).toHaveAttribute(
      'data-with-border',
      'true'
    );

    rerender(<TestContainer withBorder={false} />);
    expect(container.querySelector('.mantine-AppShell-aside')).not.toHaveAttribute(
      'data-with-border'
    );
  });

  it('does not throw when dangerouslySetInnerHTML is used without children on a non-resizable section', () => {
    expect(() =>
      render(<TestContainer dangerouslySetInnerHTML={{ __html: '<span>aside</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('aside')).toBeInTheDocument();
  });

  it('does not throw when dangerouslySetInnerHTML is used on a resizable section', () => {
    expect(() =>
      render(<ResizableContainer dangerouslySetInnerHTML={{ __html: '<span>aside</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('aside')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
