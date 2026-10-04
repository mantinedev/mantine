import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { useAppShellResize } from '../use-app-shell-resize/use-app-shell-resize';
import { AppShellFooter, AppShellFooterProps, AppShellFooterStylesNames } from './AppShellFooter';

const TestContainer = createContextContainer(AppShellFooter, AppShell, {});

function ResizableContainer(props: AppShellFooterProps) {
  const resize = useAppShellResize({ footer: { min: 40, max: 500 } });
  return (
    <AppShell resize={resize} footer={{ height: 60 }}>
      <AppShellFooter {...props} />
    </AppShell>
  );
}

const defaultProps: AppShellFooterProps = {};

describe('@mantine/core/AppShellFooter', () => {
  tests.itSupportsSystemProps<AppShellFooterProps, AppShellFooterStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
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

  it('does not throw when dangerouslySetInnerHTML is used without children on a non-resizable section', () => {
    expect(() =>
      render(<TestContainer dangerouslySetInnerHTML={{ __html: '<span>footer</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('footer')).toBeInTheDocument();
  });

  it('does not throw when dangerouslySetInnerHTML is used on a resizable section', () => {
    expect(() =>
      render(<ResizableContainer dangerouslySetInnerHTML={{ __html: '<span>footer</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('footer')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
