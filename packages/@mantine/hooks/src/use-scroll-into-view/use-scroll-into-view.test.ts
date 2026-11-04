import { act, renderHook } from '@testing-library/react';
import { useScrollIntoView, UseScrollIntoViewOptions } from './use-scroll-into-view';

const DURATION = 400;
const FRAME = 16;
const PARENT_HEIGHT = 300;
const TARGET_OFFSET = 1000;

function setup(options: UseScrollIntoViewOptions = {}) {
  const parent = document.createElement('div');
  const target = document.createElement('div');
  parent.getBoundingClientRect = () => ({ top: 0, height: PARENT_HEIGHT }) as DOMRect;
  target.getBoundingClientRect = () =>
    ({ top: TARGET_OFFSET - parent.scrollTop, height: 0 }) as DOMRect;

  const onScrollFinish = jest.fn();
  const hook = renderHook(() =>
    useScrollIntoView<HTMLDivElement, HTMLDivElement>({
      duration: DURATION,
      onScrollFinish,
      ...options,
    })
  );
  hook.result.current.scrollableRef.current = parent;
  hook.result.current.targetRef.current = target;

  const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));

  return { parent, hook, onScrollFinish, advance };
}

describe('@mantine/hooks/use-scroll-into-view', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('animates to the target over the duration', () => {
    const { parent, hook, onScrollFinish, advance } = setup();

    act(() => hook.result.current.scrollIntoView());
    advance(DURATION / 2);

    expect(parent.scrollTop).toBeGreaterThan(0);
    expect(parent.scrollTop).toBeLessThan(TARGET_OFFSET);
    expect(onScrollFinish).not.toHaveBeenCalled();

    advance(DURATION);

    expect(parent.scrollTop).toBeCloseTo(TARGET_OFFSET, -1);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });

  it.each([1, 25])('reaches the target when a frame exceeds the %s ms duration', (duration) => {
    const { parent, hook, onScrollFinish, advance } = setup({ duration });

    act(() => hook.result.current.scrollIntoView());
    advance(duration + 2 * FRAME);

    expect(parent.scrollTop).toBe(TARGET_OFFSET);
    expect(hook.result.current.scrolling).toBe(false);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });

  it('keeps custom easing progress between zero and one', () => {
    const easing = jest.fn((t: number) => t);
    const { parent, hook, advance } = setup({ duration: 25, easing });

    act(() => hook.result.current.scrollIntoView());
    advance(25 + 2 * FRAME);

    expect(easing).toHaveBeenLastCalledWith(1);
    expect(easing.mock.calls.every(([t]) => t >= 0 && t <= 1)).toBe(true);
    expect(parent.scrollTop).toBe(TARGET_OFFSET);
  });

  it('reaches the target immediately with zero duration', () => {
    const { parent, hook, onScrollFinish } = setup({ duration: 0 });

    act(() => hook.result.current.scrollIntoView());

    expect(parent.scrollTop).toBe(TARGET_OFFSET);
    expect(hook.result.current.scrolling).toBe(false);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });

  it('starts a full animation after cancel', () => {
    const { parent, hook, onScrollFinish, advance } = setup();

    act(() => hook.result.current.scrollIntoView());
    advance(150);
    act(() => hook.result.current.cancel());
    const cancelledAt = parent.scrollTop;
    advance(DURATION);

    act(() => hook.result.current.scrollIntoView());
    advance(FRAME);

    expect(parent.scrollTop).toBeLessThan(cancelledAt + (TARGET_OFFSET - cancelledAt) / 4);
    expect(onScrollFinish).not.toHaveBeenCalled();

    advance(DURATION);

    expect(parent.scrollTop).toBeCloseTo(TARGET_OFFSET, -1);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });

  it('starts a full animation when called while one is running', () => {
    const { parent, hook, onScrollFinish, advance } = setup();

    act(() => hook.result.current.scrollIntoView());
    advance(150);
    const restartedAt = parent.scrollTop;

    act(() => hook.result.current.scrollIntoView());
    advance(FRAME);

    expect(parent.scrollTop).toBeLessThan(restartedAt + (TARGET_OFFSET - restartedAt) / 4);

    advance(DURATION - 2 * FRAME);

    expect(onScrollFinish).not.toHaveBeenCalled();

    advance(3 * FRAME);

    expect(parent.scrollTop).toBeCloseTo(TARGET_OFFSET, -1);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });
});
