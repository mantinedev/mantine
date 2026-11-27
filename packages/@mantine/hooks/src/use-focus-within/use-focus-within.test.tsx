import { StrictMode, useState } from 'react';
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useFocusWithin } from './use-focus-within';

const Target: React.FunctionComponent = () => {
  const { ref, focused } = useFocusWithin();

  return (
    <div data-testid="container" ref={ref}>
      <span data-testid="focused">{focused ? 'true' : 'false'}</span>
      <input data-testid="input" />
    </div>
  );
};

// Test component for stale closure fix (issue #8507)
const StaleClosureTarget: React.FunctionComponent = () => {
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  const { ref } = useFocusWithin({
    onFocus: () => {
      setFocusCount(focusCount + 1);
    },
    onBlur: () => {
      setBlurCount(blurCount + 1);
    },
  });

  return (
    <div data-testid="container" ref={ref}>
      <span data-testid="focus-count">{focusCount}</span>
      <span data-testid="blur-count">{blurCount}</span>
      <input data-testid="input" />
    </div>
  );
};

describe('@mantine/hooks/use-focus-within', () => {
  it('does not blur when focus moves to an SVG descendant', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    function SvgTarget() {
      const { ref, focused } = useFocusWithin({ onFocus, onBlur });
      return (
        <>
          <div ref={ref}>
            <span data-testid="focused">{String(focused)}</span>
            <input data-testid="input" />
            <svg role="button" aria-label="Inside control" tabIndex={0} data-testid="inside-svg" />
          </div>
          <svg role="button" aria-label="Outside control" tabIndex={0} data-testid="outside-svg" />
        </>
      );
    }

    render(<SvgTarget />);
    act(() => screen.getByTestId('input').focus());
    expect(onFocus).toHaveBeenCalledTimes(1);

    act(() => screen.getByTestId('inside-svg').focus());
    expect(screen.getByTestId('inside-svg')).toHaveFocus();
    expect(screen.getByTestId('focused')).toHaveTextContent('true');
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).not.toHaveBeenCalled();

    act(() => screen.getByTestId('input').focus());
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).not.toHaveBeenCalled();

    act(() => screen.getByTestId('outside-svg').focus());
    expect(screen.getByTestId('outside-svg')).toHaveFocus();
    expect(screen.getByTestId('focused')).toHaveTextContent('false');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('changes `focused` on focusin/focusout correctly', () => {
    render(<Target />);
    const input = screen.getByTestId('input');
    const focused = screen.getByTestId('focused');

    expect(focused).toHaveTextContent('false');

    fireEvent.focusIn(input);
    expect(focused).toHaveTextContent('true');

    fireEvent.focusOut(input);
    expect(focused).toHaveTextContent('false');
  });

  it('calls onFocus and onBlur callbacks with latest state (issue #8507)', () => {
    render(<StaleClosureTarget />);
    const input = screen.getByTestId('input');
    const focusCount = screen.getByTestId('focus-count');
    const blurCount = screen.getByTestId('blur-count');

    expect(focusCount).toHaveTextContent('0');
    expect(blurCount).toHaveTextContent('0');

    // First focus/blur cycle
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('1');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('1');

    // Second focus/blur cycle - should increment to 2, not stay at 1
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('2');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('2');

    // Third focus/blur cycle
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('3');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('3');
  });
});

function DetachableTarget({ visible, onFocus }: { visible: boolean; onFocus: () => void }) {
  const { ref, focused } = useFocusWithin({ onFocus });
  return (
    <>
      <span data-testid="detachable-focused">{String(focused)}</span>
      {visible && (
        <div ref={ref} data-testid="detachable-target">
          <input />
        </div>
      )}
    </>
  );
}

describe('detached focus-within targets', () => {
  it('clears focus when only the child that owns the target ref rerenders', async () => {
    function Child({ targetRef }: { targetRef: React.RefCallback<HTMLDivElement> }) {
      const [enabled, setEnabled] = useState(true);
      return (
        <>
          <button type="button" onClick={() => setEnabled(false)}>
            Detach
          </button>
          <div ref={enabled ? targetRef : undefined}>
            <input />
          </div>
        </>
      );
    }

    function Parent() {
      const { ref, focused } = useFocusWithin<HTMLDivElement>();
      return (
        <>
          <Child targetRef={ref} />
          <output>{String(focused)}</output>
        </>
      );
    }

    render(<Parent />);
    act(() => screen.getByRole('textbox').focus());
    expect(screen.getByRole('status')).toHaveTextContent('true');
    await act(async () => screen.getByRole('button').click());
    expect(screen.getByRole('status')).toHaveTextContent('false');
  });

  it('clears focus when a focused target is removed and can focus a replacement', () => {
    const onFocus = jest.fn();
    const { rerender } = render(<DetachableTarget visible onFocus={onFocus} />);
    act(() => screen.getByRole('textbox').focus());
    expect(screen.getByTestId('detachable-focused')).toHaveTextContent('true');

    rerender(<DetachableTarget visible={false} onFocus={onFocus} />);
    expect(screen.getByTestId('detachable-focused')).toHaveTextContent('false');
    rerender(<DetachableTarget visible onFocus={onFocus} />);
    act(() => screen.getByRole('textbox').focus());
    expect(screen.getByTestId('detachable-focused')).toHaveTextContent('true');
    expect(onFocus).toHaveBeenCalledTimes(2);
  });

  it('stops observing a removed target while the hook remains mounted', () => {
    const onFocus = jest.fn();
    const { rerender } = render(<DetachableTarget visible onFocus={onFocus} />);
    const previousTarget = screen.getByTestId('detachable-target');
    rerender(<DetachableTarget visible={false} onFocus={onFocus} />);
    fireEvent.focusIn(previousTarget);
    expect(onFocus).not.toHaveBeenCalled();
    expect(screen.getByTestId('detachable-focused')).toHaveTextContent('false');
  });
});

it('preserves focus when an inline forwarding ref is reattached', () => {
  const onFocus = jest.fn();
  function InlineTarget() {
    const { ref, focused } = useFocusWithin({ onFocus });
    return (
      <div ref={(node) => ref(node)}>
        <input />
        <span data-testid="inline-focused">{String(focused)}</span>
      </div>
    );
  }
  render(<InlineTarget />);
  act(() => screen.getByRole('textbox').focus());
  expect(screen.getByRole('textbox')).toHaveFocus();
  expect(screen.getByTestId('inline-focused')).toHaveTextContent('true');
  expect(onFocus).toHaveBeenCalledTimes(1);
});

it('keeps autofocus events observable during forwarded ref updates', () => {
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  function ForwardedTarget({ inside, outside }: { inside: boolean; outside: boolean }) {
    const { ref, focused } = useFocusWithin({ onFocus, onBlur });
    return (
      <>
        <div ref={(node) => ref(node)}>
          {inside && <input autoFocus aria-label="Inside" />}
          <span data-testid="autofocus-state">{String(focused)}</span>
        </div>
        {outside && <input autoFocus aria-label="Outside" />}
      </>
    );
  }
  const { rerender } = render(<ForwardedTarget inside={false} outside={false} />);
  rerender(<ForwardedTarget inside outside={false} />);
  expect(onFocus).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId('autofocus-state')).toHaveTextContent('true');
  rerender(<ForwardedTarget inside outside />);
  expect(onBlur).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId('autofocus-state')).toHaveTextContent('false');
});

it.each([false, true])(
  'preserves forwarded focus inside a shadow root, StrictMode=%s',
  (strict) => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const shadow = host.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadow.appendChild(container);
    const onFocus = jest.fn();
    function ShadowTarget() {
      const { ref, focused } = useFocusWithin({ onFocus });
      return (
        <div ref={(node) => ref(node)}>
          <input />
          <span data-testid="shadow-state">{String(focused)}</span>
        </div>
      );
    }
    const element = <ShadowTarget />;
    const rendered = render(strict ? <StrictMode>{element}</StrictMode> : element, { container });
    const input = rendered.getByRole('textbox');
    act(() => input.focus());
    expect(shadow.activeElement).toBe(input);
    expect(rendered.getByTestId('shadow-state')).toHaveTextContent('true');
    expect(onFocus).toHaveBeenCalledTimes(1);
    rendered.unmount();
    host.remove();
  }
);

it.each([false, true])('preserves focus when moving the ref to an ancestor, outer=%s', (outer) => {
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  function MovingTarget({ attachOuter }: { attachOuter: boolean }) {
    const { ref, focused } = useFocusWithin({ onFocus, onBlur });
    return (
      <>
        <div ref={attachOuter ? ref : undefined}>
          <div ref={attachOuter ? undefined : ref}>
            <input />
          </div>
          <span data-testid="moving-focused">{String(focused)}</span>
        </div>
        <button type="button">Outside</button>
      </>
    );
  }
  const { rerender } = render(<MovingTarget attachOuter={outer} />);
  act(() => screen.getByRole('textbox').focus());
  rerender(<MovingTarget attachOuter={!outer} />);
  expect(screen.getByRole('textbox')).toHaveFocus();
  expect(screen.getByTestId('moving-focused')).toHaveTextContent('true');
  act(() => screen.getByRole('button').focus());
  expect(screen.getByTestId('moving-focused')).toHaveTextContent('false');
  expect(onFocus).toHaveBeenCalledTimes(1);
  expect(onBlur).toHaveBeenCalledTimes(1);
});

it('restores focus when reattaching a ref to a still-focused target', () => {
  const onBlur = jest.fn();
  function EnabledTarget({ enabled }: { enabled: boolean }) {
    const { ref, focused } = useFocusWithin({ onBlur });
    return (
      <div ref={enabled ? ref : undefined}>
        <input />
        <span data-testid="enabled-focused">{String(focused)}</span>
      </div>
    );
  }
  const { rerender } = render(<EnabledTarget enabled />);
  act(() => screen.getByRole('textbox').focus());
  rerender(<EnabledTarget enabled={false} />);
  rerender(<EnabledTarget enabled />);
  expect(screen.getByTestId('enabled-focused')).toHaveTextContent('true');
  act(() => screen.getByRole('textbox').blur());
  expect(onBlur).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId('enabled-focused')).toHaveTextContent('false');
});

it.each([
  [false, false, false],
  [true, false, false],
  [false, false, true],
  [true, false, true],
  [false, true, false],
  [true, true, false],
  [false, true, true],
  [true, true, true],
])('preserves slotted focus, outer=%s nested=%s wrapped=%s', (outer, nested, wrapped) => {
  const host = document.createElement('div');
  const input = document.createElement('input');
  const outerHost = document.createElement('div');
  document.body.appendChild(outerHost);
  const parent = nested ? outerHost.attachShadow({ mode: 'open' }) : outerHost;
  parent.appendChild(host);
  const content = wrapped ? document.createElement('div') : input;
  if (wrapped) {
    content.appendChild(input);
  }
  host.appendChild(content);
  const shadow = host.attachShadow({ mode: 'open' });
  const container = document.createElement('div');
  shadow.appendChild(container);
  const onBlur = jest.fn();
  function SlottedTarget({ attachOuter }: { attachOuter: boolean }) {
    const { ref, focused } = useFocusWithin({ onBlur });
    return (
      <div ref={attachOuter ? ref : undefined}>
        <div ref={attachOuter ? undefined : ref}>
          <slot />
        </div>
        <span data-testid="slot-focused">{String(focused)}</span>
      </div>
    );
  }
  const result = render(<SlottedTarget attachOuter={outer} />, { container });
  try {
    act(() => input.focus());
    expect(result.getByTestId('slot-focused')).toHaveTextContent('true');
    result.rerender(<SlottedTarget attachOuter={!outer} />);
    expect(result.getByTestId('slot-focused')).toHaveTextContent('true');
    act(() => input.blur());
    expect(result.getByTestId('slot-focused')).toHaveTextContent('false');
    expect(onBlur).toHaveBeenCalledTimes(1);
  } finally {
    result.unmount();
    outerHost.remove();
  }
});

it.each(['body', 'documentElement'] as const)(
  'does not seed focus from the fallback body for %s',
  (tag) => {
    const onFocus = jest.fn();
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    const targetDocument = frame.contentDocument!;
    const input = targetDocument.createElement('input');
    targetDocument.body.appendChild(input);
    const { result, unmount } = renderHook(() => useFocusWithin({ onFocus }));
    act(() => result.current.ref(targetDocument[tag]));
    expect(result.current.focused).toBe(false);
    act(() => input.focus());
    expect(result.current.focused).toBe(true);
    expect(onFocus).toHaveBeenCalledTimes(1);
    unmount();
    frame.remove();
  }
);
