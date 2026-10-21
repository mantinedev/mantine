import { Activity } from 'react';
import { act, cleanup, fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { ScrollAreaRoot } from '../ScrollAreaRoot/ScrollAreaRoot';
import { ScrollbarProvider } from '../ScrollAreaScrollbar/Scrollbar.context';
import { ScrollAreaViewport } from '../ScrollAreaViewport/ScrollAreaViewport';
import { ScrollAreaThumb } from './ScrollAreaThumb';

const scrollbarContext = {
  hasThumb: true,
  scrollbar: null,
  onThumbChange: jest.fn(),
  onThumbPointerUp: jest.fn(),
  onThumbPointerDown: jest.fn(),
  onThumbPositionChange: jest.fn(),
};

function TestThumb({ mode = 'visible' }: { mode?: 'visible' | 'hidden' }) {
  return (
    <ScrollAreaRoot getStyles={() => ({ className: '', style: {} })}>
      <ScrollAreaViewport data-testid="viewport" />
      <ScrollbarProvider value={scrollbarContext}>
        <Activity mode={mode}>
          <ScrollAreaThumb forceMount />
        </Activity>
      </ScrollbarProvider>
    </ScrollAreaRoot>
  );
}

describe('@mantine/core/ScrollAreaThumb', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it('stops requesting animation frames when unmounted before the scroll debounce ends', () => {
    const requestFrame = jest.spyOn(window, 'requestAnimationFrame');
    const { unmount } = render(<TestThumb />);

    fireEvent.scroll(screen.getByTestId('viewport'));
    act(() => jest.advanceTimersByTime(20));
    expect(requestFrame).toHaveBeenCalled();

    unmount();
    const frameCount = requestFrame.mock.calls.length;
    act(() => jest.advanceTimersByTime(200));

    expect(requestFrame).toHaveBeenCalledTimes(frameCount);
  });

  it('stops requesting animation frames while hidden and restarts after Activity becomes visible', () => {
    const requestFrame = jest.spyOn(window, 'requestAnimationFrame');
    const { rerender } = render(<TestThumb />);
    const viewport = screen.getByTestId('viewport');

    fireEvent.scroll(viewport);
    act(() => jest.advanceTimersByTime(20));
    expect(requestFrame).toHaveBeenCalled();

    rerender(
      <>
        <TestThumb mode="hidden" />
      </>
    );

    const frameCount = requestFrame.mock.calls.length;
    act(() => jest.advanceTimersByTime(200));
    expect(requestFrame).toHaveBeenCalledTimes(frameCount);

    rerender(
      <>
        <TestThumb />
      </>
    );
    fireEvent.scroll(viewport);
    expect(requestFrame.mock.calls.length).toBeGreaterThan(frameCount);
  });

  it('stops requesting animation frames after scrolling ends', () => {
    const requestFrame = jest.spyOn(window, 'requestAnimationFrame');
    render(<TestThumb />);

    fireEvent.scroll(screen.getByTestId('viewport'));
    act(() => jest.advanceTimersByTime(100));
    const frameCount = requestFrame.mock.calls.length;
    expect(frameCount).toBeGreaterThan(0);

    act(() => jest.advanceTimersByTime(200));
    expect(requestFrame).toHaveBeenCalledTimes(frameCount);
  });
});
