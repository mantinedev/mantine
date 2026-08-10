import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { Transition, TransitionProps } from './Transition';

function getHandlers() {
  return {
    onEnter: jest.fn(),
    onEntered: jest.fn(),
    onExit: jest.fn(),
    onExited: jest.fn(),
  };
}

function TestContainer(props: Partial<TransitionProps>) {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setMounted((m) => !m)}>
        toggle
      </button>
      <Transition duration={400} exitDuration={400} transition="fade" mounted={mounted} {...props}>
        {(styles) => <div style={styles}>test-child</div>}
      </Transition>
    </>
  );
}

describe('@mantine/core/Transition', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it('completes enter and exit transitions synchronously in test env', () => {
    const handlers = getHandlers();
    render(<TestContainer {...handlers} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handlers.onEnter).toHaveBeenCalledTimes(1);
    expect(handlers.onEntered).toHaveBeenCalledTimes(1);
    expect(screen.getByText('test-child')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(handlers.onExit).toHaveBeenCalledTimes(1);
    expect(handlers.onExited).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('test-child')).not.toBeInTheDocument();
  });

  it('does not schedule timers or animation frames in test env', () => {
    jest.useFakeTimers();
    render(<TestContainer enterDelay={100} exitDelay={100} />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));

    expect(jest.getTimerCount()).toBe(0);
  });

  it('runs enter transition asynchronously when env is not test', () => {
    jest.useFakeTimers();
    const handlers = getHandlers();
    render(<TestContainer {...handlers} />, undefined, { env: 'default' });

    fireEvent.click(screen.getByRole('button'));
    expect(handlers.onEntered).not.toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(handlers.onEnter).toHaveBeenCalledTimes(1);
    expect(handlers.onEntered).toHaveBeenCalledTimes(1);
  });
});
