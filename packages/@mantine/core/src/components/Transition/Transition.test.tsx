import { render, screen } from '@mantine-tests/core';
import { Transition } from './Transition';

function renderTransition(props: Partial<React.ComponentProps<typeof Transition>>) {
  return render(
    <Transition mounted duration={0} {...props}>
      {(styles) => (
        <div data-testid="content" style={styles}>
          content
        </div>
      )}
    </Transition>,
    undefined,
    { env: 'default' }
  );
}

describe('@mantine/core/Transition', () => {
  it('has correct displayName', () => {
    expect(Transition.displayName).toBe('@mantine/core/Transition');
  });

  it('mounts and unmounts children when mounted prop changes', () => {
    const { rerender } = renderTransition({ mounted: false });
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();

    rerender(
      <Transition mounted duration={0}>
        {(styles) => (
          <div data-testid="content" style={styles}>
            content
          </div>
        )}
      </Transition>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();

    rerender(
      <Transition mounted={false} duration={0}>
        {(styles) => (
          <div data-testid="content" style={styles}>
            content
          </div>
        )}
      </Transition>
    );
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('keeps hidden content in the DOM with keepMounted', () => {
    renderTransition({ mounted: false, keepMounted: true });
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('content')).not.toBeVisible();
  });

  it('applies display: none to hidden content with keepMountedMode="display-none"', () => {
    renderTransition({ mounted: false, keepMounted: true, keepMountedMode: 'display-none' });
    expect(screen.getByTestId('content')).toHaveStyle({ display: 'none' });
  });

  it('does not apply display: none to visible content with keepMountedMode="display-none"', () => {
    renderTransition({ mounted: true, keepMounted: true, keepMountedMode: 'display-none' });
    expect(screen.getByTestId('content')).not.toHaveStyle({ display: 'none' });
  });
});
