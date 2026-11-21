import { act, render } from '@testing-library/react';
import { useFocusTrap } from './use-focus-trap';

function Trap({
  active = true,
  children,
  id,
}: {
  active?: boolean;
  children: React.ReactNode;
  id: string;
}) {
  const ref = useFocusTrap(active);
  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  );
}

function Targets({
  target,
  active = true,
}: {
  target: 'first' | 'second' | 'none';
  active?: boolean;
}) {
  const ref = useFocusTrap(active);
  return (
    <>
      <button type="button">Outside</button>
      <div ref={target === 'first' ? ref : null}>
        <input aria-label="First inside" data-autofocus />
      </div>
      <div ref={target === 'second' ? ref : null}>
        <input aria-label="Second inside" data-autofocus />
      </div>
    </>
  );
}

const pressTab = (target: Element, init: KeyboardEventInit = {}) => {
  const event = new KeyboardEvent('keydown', {
    key: 'Tab',
    bubbles: true,
    cancelable: true,
    ...init,
  });
  target.dispatchEvent(event);
  return event;
};

describe('@mantine/hooks/use-focus-trap', () => {
  describe('initial focus', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('does not focus a still-mounted trap after deactivation', () => {
      const { getByRole, rerender } = render(<Targets target="first" />);
      const outside = getByRole('button', { name: 'Outside' });
      const inside = getByRole('textbox', { name: 'First inside' });

      rerender(<Targets target="first" active={false} />);
      expect(getByRole('textbox', { name: 'First inside' })).toBe(inside);
      outside.focus();
      act(() => jest.runOnlyPendingTimers());

      expect(outside).toHaveFocus();
    });

    it('cancels both scheduled focus attempts when the ref moves to another node', () => {
      const { getByRole, rerender } = render(<Targets target="first" />);
      const outside = getByRole('button', { name: 'Outside' });
      outside.focus();
      const observeFocus = jest.fn();
      setTimeout(() => observeFocus(document.activeElement));

      rerender(<Targets target="second" />);
      act(() => jest.runOnlyPendingTimers());

      expect(observeFocus).toHaveBeenCalledWith(outside);
      expect(getByRole('textbox', { name: 'Second inside' })).toHaveFocus();
    });

    it('only uses the new activation when the same node is reactivated', () => {
      const { getByRole, rerender } = render(<Targets target="first" />);
      const outside = getByRole('button', { name: 'Outside' });
      const inside = getByRole('textbox', { name: 'First inside' });
      outside.focus();
      const observeFocus = jest.fn();
      setTimeout(() => observeFocus(document.activeElement));

      rerender(<Targets target="first" active={false} />);
      rerender(<Targets target="first" />);
      expect(getByRole('textbox', { name: 'First inside' })).toBe(inside);
      act(() => jest.runOnlyPendingTimers());

      expect(observeFocus).toHaveBeenCalledWith(outside);
      expect(inside).toHaveFocus();
    });

    it('does not attempt to focus a detached trap after unmount', () => {
      const { getByRole, unmount } = render(<Targets target="first" />);
      const inside = getByRole('textbox', { name: 'First inside' });
      const focus = jest.spyOn(inside, 'focus');

      unmount();
      act(() => jest.runOnlyPendingTimers());

      expect(focus).not.toHaveBeenCalled();
    });

    it('focuses an active trap when its ref is attached after mount', () => {
      const { getByRole, rerender } = render(<Targets target="none" />);
      rerender(<Targets target="first" />);
      act(() => jest.runOnlyPendingTimers());

      expect(getByRole('textbox', { name: 'First inside' })).toHaveFocus();
    });
  });

  it('moves focus between tabbable elements on Tab', () => {
    render(
      <Trap id="trap">
        <button type="button" id="first">
          first
        </button>
        <button type="button" id="second">
          second
        </button>
      </Trap>
    );

    const first = document.getElementById('first')!;
    const second = document.getElementById('second')!;
    first.focus();
    pressTab(first);
    expect(second).toHaveFocus();
    pressTab(second);
    expect(first).toHaveFocus();
  });

  it('does not move focus when the event default was already prevented', () => {
    render(
      <Trap id="trap">
        <button type="button" id="first">
          first
        </button>
        <button type="button" id="second">
          second
        </button>
      </Trap>
    );

    const first = document.getElementById('first')!;
    first.addEventListener('keydown', (event) => event.preventDefault());
    first.focus();
    pressTab(first);
    expect(first).toHaveFocus();
  });

  it('lets the innermost active trap handle Tab for nested traps', () => {
    render(
      <Trap id="outer">
        <button type="button" id="outer-button">
          outer
        </button>
        <Trap id="inner">
          <button type="button" id="inner-first">
            inner first
          </button>
          <button type="button" id="inner-last">
            inner last
          </button>
        </Trap>
      </Trap>
    );

    const innerFirst = document.getElementById('inner-first')!;
    const innerLast = document.getElementById('inner-last')!;
    innerLast.focus();
    pressTab(innerLast);
    expect(innerFirst).toHaveFocus();
    pressTab(innerFirst, { shiftKey: true });
    expect(innerLast).toHaveFocus();
  });

  it('does not handle Tab when inactive', () => {
    render(
      <Trap id="trap" active={false}>
        <button type="button" id="first">
          first
        </button>
        <button type="button" id="second">
          second
        </button>
      </Trap>
    );

    const first = document.getElementById('first')!;
    first.focus();
    const event = pressTab(first);
    expect(event.defaultPrevented).toBe(false);
    expect(first).toHaveFocus();
  });
});
