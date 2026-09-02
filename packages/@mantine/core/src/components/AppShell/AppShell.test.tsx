import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { AppShell, AppShellProps, AppShellStylesNames } from './AppShell';
import { useAppShellResize } from './use-app-shell-resize/use-app-shell-resize';

const defaultProps: AppShellProps = {};

function TestShell(props: Partial<AppShellProps>) {
  const resize = useAppShellResize({ navbar: { min: 100, max: 500 } });
  return <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }} {...props} />;
}

describe('@mantine/core/AppShell', () => {
  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/AppShell',
    stylesApiSelectors: ['root'],
  });

  it('sets data-layout attribute based on layout prop', () => {
    const { container } = render(<AppShell layout="alt" />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-layout', 'alt');
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { container, rerender } = render(<AppShell disabled />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-disabled');

    rerender(<AppShell disabled={false} />);
    expect(container.querySelector('.mantine-AppShell-root')).not.toHaveAttribute('data-disabled');
  });

  it('scopes generated styles to the shell id when a resize controller is given', () => {
    const { container } = render(<TestShell />);
    const shellId = container.querySelector('.mantine-AppShell-root')!.getAttribute('id');
    const styles = Array.from(document.querySelectorAll('style[data-mantine-styles="inline"]'))
      .map((element) => element.innerHTML)
      .join('');

    expect(styles).toContain(`#${shellId}`);
  });

  it('sets data-resizing while a section is being resized', () => {
    jest.useFakeTimers();

    function ActiveShell() {
      const resize = useAppShellResize({ navbar: {} });
      return (
        <>
          <button type="button" onClick={() => resize.startResize('navbar')}>
            start
          </button>
          <AppShell resize={resize} navbar={{ width: 300, breakpoint: 'sm' }} />
        </>
      );
    }

    try {
      const { container } = render(<ActiveShell />);

      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(container.querySelector('.mantine-AppShell-root')).not.toHaveAttribute(
        'data-resizing'
      );

      fireEvent.click(screen.getByText('start'));
      expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-resizing');
    } finally {
      jest.useRealTimers();
    }
  });
});
