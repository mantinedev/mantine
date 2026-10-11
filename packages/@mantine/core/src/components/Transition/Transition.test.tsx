import { useState } from 'react';
import { act } from '@testing-library/react';
import { flushSync } from 'react-dom';
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
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

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

  it('does not request more frames or call onEntered when it is unmounted by the first frame commit', () => {
    jest.useFakeTimers();
    const frames = new Map<number, FrameRequestCallback>();
    let lastFrame = 0;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      lastFrame += 1;
      frames.set(lastFrame, callback);
      return lastFrame;
    });
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((frame) => {
      frames.delete(frame);
    });

    const onEntered = jest.fn();
    const controls: { show?: () => void; leave?: () => void } = {};

    function Owner() {
      const [standing, setStanding] = useState(true);
      const [mounted, setMounted] = useState(false);
      controls.show = () => setMounted(true);
      controls.leave = () => setStanding(false);

      return standing ? (
        <Transition mounted={mounted} duration={100} onEntered={onEntered}>
          {(styles) => <div style={styles}>content</div>}
        </Transition>
      ) : null;
    }

    render(<Owner />);
    act(() => controls.show!());
    expect(frames.size).toBe(1);

    act(() => {
      flushSync(() => {
        controls.leave!();
        const [[frame, callback]] = frames;
        frames.delete(frame);
        callback(0);
      });
    });

    expect(screen.queryByText('content')).not.toBeInTheDocument();
    expect(frames.size).toBe(0);

    act(() => {
      frames.forEach((callback) => callback(0));
      jest.advanceTimersByTime(100);
    });

    expect(onEntered).not.toHaveBeenCalled();
  });
});
