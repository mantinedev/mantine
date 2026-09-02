import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { useAppShellResize } from '../use-app-shell-resize/use-app-shell-resize';
import { AppShellHeader, AppShellHeaderProps, AppShellHeaderStylesNames } from './AppShellHeader';

const TestContainer = createContextContainer(AppShellHeader, AppShell, {});

function ResizableContainer(props: AppShellHeaderProps) {
  const resize = useAppShellResize({ header: { min: 40, max: 500 } });
  return (
    <AppShell resize={resize} header={{ height: 60 }}>
      <AppShellHeader {...props} />
    </AppShell>
  );
}

const defaultProps: AppShellHeaderProps = {};

describe('@mantine/core/AppShellHeader', () => {
  tests.itSupportsSystemProps<AppShellHeaderProps, AppShellHeaderStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
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

  it('does not throw when dangerouslySetInnerHTML is used without children on a non-resizable section', () => {
    expect(() =>
      render(<TestContainer dangerouslySetInnerHTML={{ __html: '<span>header</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('header')).toBeInTheDocument();
  });

  it('does not throw when dangerouslySetInnerHTML is used on a resizable section', () => {
    expect(() =>
      render(<ResizableContainer dangerouslySetInnerHTML={{ __html: '<span>header</span>' }} />)
    ).not.toThrow();
    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
