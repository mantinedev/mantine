import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useCollapse, UseCollapseInput } from './use-collapse';
import { useHorizontalCollapse } from './use-horizontal-collapse';

describe.each([
  { name: 'useCollapse', hook: useCollapse, size: 'height' },
  { name: 'useHorizontalCollapse', hook: useHorizontalCollapse, size: 'width' },
] as const)('@mantine/hooks/use-collapse $name', ({ hook, size }) => {
  function TestCollapse(props: UseCollapseInput) {
    const collapse = hook({ transitionDuration: 200, ...props });
    return (
      <div data-testid="target" {...collapse.getCollapseProps()}>
        {collapse.state}
      </div>
    );
  }

  it('starts in entered state when expanded=true', () => {
    const { result } = renderHook(() => hook({ expanded: true }));
    expect(result.current.state).toBe('entered');
  });

  it('starts in exited state when expanded=false', () => {
    const { result } = renderHook(() => hook({ expanded: false }));
    expect(result.current.state).toBe('exited');
  });

  it('calls onTransitionStart when expanded changes', () => {
    const onTransitionStart = jest.fn();
    const { rerender } = renderHook(({ expanded }) => hook({ expanded, onTransitionStart }), {
      initialProps: { expanded: false },
    });

    expect(onTransitionStart).not.toHaveBeenCalled();

    act(() => {
      rerender({ expanded: true });
    });

    expect(onTransitionStart).toHaveBeenCalledTimes(1);
  });

  it('does not call onTransitionStart when only its identity changes (no stale re-run)', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(
      ({ expanded, onTransitionStart }) => hook({ expanded, onTransitionStart }),
      { initialProps: { expanded: false, onTransitionStart: first } }
    );

    act(() => {
      rerender({ expanded: false, onTransitionStart: second });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('calls the latest onTransitionStart after callback identity changes', () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = renderHook(
      ({ expanded, onTransitionStart }) => hook({ expanded, onTransitionStart }),
      { initialProps: { expanded: false, onTransitionStart: first } }
    );

    act(() => {
      rerender({ expanded: false, onTransitionStart: second });
    });

    act(() => {
      rerender({ expanded: true, onTransitionStart: second });
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('settles in `entered` state when expanding an element that cannot be measured', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('entered'));
    expect(screen.getByTestId('target')).not.toHaveStyle({ [size]: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('settles in `exited` state when collapsing an element that cannot be measured', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);

    rerender(<TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('exited'));
    expect(screen.getByTestId('target')).toHaveStyle({ [size]: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('ignores frames from a transition that was superseded before it settled', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);
    rerender(<TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />);

    await waitFor(() => expect(screen.getByTestId('target')).toHaveTextContent('exited'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(screen.getByTestId('target')).toHaveTextContent('exited');
    expect(screen.getByTestId('target')).toHaveStyle({ [size]: '0px', overflow: 'hidden' });
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('does not call onTransitionEnd for a transition aborted by unmount', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender, unmount } = render(
      <TestCollapse expanded={false} onTransitionEnd={onTransitionEnd} />
    );

    rerender(<TestCollapse expanded onTransitionEnd={onTransitionEnd} />);
    unmount();

    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(onTransitionEnd).not.toHaveBeenCalled();
  });
});

describe.each([
  { name: 'useCollapse', hook: useCollapse, size: 'height' },
  { name: 'useHorizontalCollapse', hook: useHorizontalCollapse, size: 'width' },
] as const)('@mantine/hooks/use-collapse $name with transitionDuration 0', ({ hook, size }) => {
  function ZeroDuration(props: UseCollapseInput) {
    const collapse = hook({ ...props, transitionDuration: 0 });
    return (
      <div data-testid="target" {...collapse.getCollapseProps()}>
        {collapse.state}
      </div>
    );
  }

  const flushFrames = () => act(() => new Promise((resolve) => setTimeout(resolve, 50)));

  it('settles in `entered` state without fixed size when expanded', async () => {
    const onTransitionStart = jest.fn();
    const onTransitionEnd = jest.fn();
    const { rerender } = render(
      <ZeroDuration
        expanded={false}
        onTransitionStart={onTransitionStart}
        onTransitionEnd={onTransitionEnd}
      />
    );

    rerender(
      <ZeroDuration
        expanded
        onTransitionStart={onTransitionStart}
        onTransitionEnd={onTransitionEnd}
      />
    );
    await flushFrames();

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('entered');
    expect(target.style[size]).toBe('');
    expect(target.style.overflow).toBe('');
    expect(target.style.display).toBe('');
    expect(onTransitionStart).not.toHaveBeenCalled();
    expect(onTransitionEnd).not.toHaveBeenCalled();
  });

  it('settles in `exited` state with display none when collapsed', async () => {
    const onTransitionEnd = jest.fn();
    const { rerender } = render(<ZeroDuration expanded onTransitionEnd={onTransitionEnd} />);

    rerender(<ZeroDuration expanded={false} onTransitionEnd={onTransitionEnd} />);
    await flushFrames();

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('exited');
    expect(target.style[size]).toBe('0px');
    expect(target.style.display).toBe('none');
    expect(onTransitionEnd).not.toHaveBeenCalled();
  });

  it('keeps the element displayed when collapsed with keepMounted', async () => {
    const { rerender } = render(<ZeroDuration expanded keepMounted />);

    rerender(<ZeroDuration expanded={false} keepMounted />);
    await flushFrames();

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('exited');
    expect(target.style[size]).toBe('0px');
    expect(target.style.overflow).toBe('hidden');
    expect(target.style.display).toBe('');
  });

  it('settles at the last value when toggled twice in the same tick', async () => {
    const { rerender } = render(<ZeroDuration expanded={false} />);

    rerender(<ZeroDuration expanded />);
    rerender(<ZeroDuration expanded={false} />);
    await flushFrames();

    expect(screen.getByTestId('target')).toHaveTextContent('exited');
    expect(screen.getByTestId('target').style.display).toBe('none');
  });
});

describe.each([
  {
    name: 'useCollapse',
    hook: useCollapse,
    size: 'height',
    offset: 'offsetHeight',
    scroll: 'scrollHeight',
  },
  {
    name: 'useHorizontalCollapse',
    hook: useHorizontalCollapse,
    size: 'width',
    offset: 'offsetWidth',
    scroll: 'scrollWidth',
  },
] as const)('@mantine/hooks/use-collapse $name measurement', ({ hook, size, offset, scroll }) => {
  function Animated(props: UseCollapseInput) {
    const collapse = hook({ ...props, transitionDuration: 200 });
    return (
      <div data-testid="target" {...collapse.getCollapseProps()}>
        {collapse.state}
      </div>
    );
  }

  beforeEach(() => {
    jest.spyOn(HTMLElement.prototype, scroll, 'get').mockReturnValue(642);
    jest.spyOn(HTMLElement.prototype, offset, 'get').mockImplementation(function getSize(
      this: HTMLElement
    ) {
      const value = this.style[size];
      return value === 'auto' || value === '' ? 662 : parseFloat(value) || 0;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('animates to the size the element has with auto size, not to its overflow size', async () => {
    const { rerender } = render(<Animated expanded={false} />);

    rerender(<Animated expanded />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('entering');
    expect(target.style[size]).toBe('662px');
  });

  it('displays the element one frame before it switches to `entering`', () => {
    const frames: FrameRequestCallback[] = [];
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      frames.push(callback);
      return frames.length;
    });

    const { rerender } = render(<Animated expanded={false} />);
    rerender(<Animated expanded />);

    const target = screen.getByTestId('target');
    act(() => frames.shift()!(0));
    expect(target).toHaveTextContent('exited');
    expect(target.style.display).toBe('block');

    act(() => frames.shift()!(0));
    expect(target).toHaveTextContent('entering');
    expect(target.style[size]).toBe('662px');
  });

  it('starts the collapse from the current size', async () => {
    const { rerender } = render(<Animated expanded />);

    rerender(<Animated expanded={false} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('exiting');
    expect(target.style[size]).toBe('0px');
    expect(target.style.transition).toContain(`${size} `);
  });
});

describe.each([
  { name: 'useCollapse', hook: useCollapse, size: 'height', offset: 'offsetHeight' },
  {
    name: 'useHorizontalCollapse',
    hook: useHorizontalCollapse,
    size: 'width',
    offset: 'offsetWidth',
  },
] as const)('@mantine/hooks/use-collapse $name fast toggles', ({ hook, size, offset }) => {
  function Animated(props: UseCollapseInput & { explicitSize?: number }) {
    const { explicitSize, ...others } = props;
    const collapse = hook({ ...others, transitionDuration: 200 });
    return (
      <div
        data-testid="target"
        {...collapse.getCollapseProps(
          explicitSize === undefined ? undefined : { style: { [size]: explicitSize } }
        )}
      >
        {collapse.state}
      </div>
    );
  }

  let frames: FrameRequestCallback[] = [];
  const flushFrame = () => act(() => frames.shift()!(0));

  beforeEach(() => {
    frames = [];
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      frames.push(callback);
      return frames.length;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete (HTMLElement.prototype as any).getAnimations;
  });

  function mockSize(autoSize: number, midTransitionSize: number) {
    jest.spyOn(HTMLElement.prototype, offset, 'get').mockImplementation(function getSize(
      this: HTMLElement
    ) {
      const value = this.style[size];
      if (value === 'auto' || value === '') {
        return autoSize;
      }
      return value === '0px' ? 0 : midTransitionSize;
    });
  }

  function mockRunningTransition() {
    (HTMLElement.prototype as any).getAnimations = function getAnimations(this: HTMLElement) {
      return this.style.transition ? [{ transitionProperty: size }] : [];
    };
  }

  it('keeps the element at the size it renders with when reopened before the collapse starts', () => {
    mockSize(300, 100);
    const { rerender } = render(<Animated expanded={false} />);
    const target = screen.getByTestId('target');

    rerender(<Animated expanded />);
    flushFrame();
    flushFrame();
    expect(target.style[size]).toBe('300px');

    rerender(<Animated expanded={false} />);
    rerender(<Animated expanded />);
    while (frames.length > 0) {
      flushFrame();
    }

    expect(target).toHaveTextContent('entering');
    expect(target.style[size]).toBe('300px');
  });

  it('does not change the size of an element with a running transition when reopened', () => {
    mockSize(300, 100);
    mockRunningTransition();
    const { rerender } = render(<Animated expanded={false} />);
    const target = screen.getByTestId('target');

    rerender(<Animated expanded />);
    flushFrame();
    flushFrame();

    rerender(<Animated expanded={false} />);
    flushFrame();
    expect(target).toHaveTextContent('exiting');
    expect(target.style[size]).toBe('300px');

    flushFrame();
    expect(target.style[size]).toBe('0px');

    rerender(<Animated expanded />);
    flushFrame();
    flushFrame();
    expect(target).toHaveTextContent('entering');
    expect(target.style[size]).toBe('300px');
  });

  it('animates to the size passed in style', () => {
    mockSize(785, 0);
    jest.spyOn(HTMLElement.prototype, offset, 'get').mockImplementation(function getSize(
      this: HTMLElement
    ) {
      const value = this.style[size];
      return value === 'auto' || value === '' ? 785 : parseFloat(value) || 0;
    });

    const { rerender } = render(<Animated expanded={false} explicitSize={200} />);
    const target = screen.getByTestId('target');

    rerender(<Animated expanded explicitSize={200} />);
    flushFrame();
    flushFrame();

    expect(target).toHaveTextContent('entering');
    expect(target.style[size]).toBe('200px');
  });
});
