import { useState } from 'react';
import { act } from '@testing-library/react';
import { flushSync } from 'react-dom';
import { render, screen } from '@mantine-tests/core';
import { Transition } from './Transition';

describe('@mantine/core/Transition', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does not request more frames when it is unmounted by the first frame commit', () => {
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

    const controls: { show?: () => void; leave?: () => void } = {};

    function Owner() {
      const [standing, setStanding] = useState(true);
      const [mounted, setMounted] = useState(false);
      controls.show = () => setMounted(true);
      controls.leave = () => setStanding(false);

      return standing ? (
        <Transition mounted={mounted} duration={100}>
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
  });
});
