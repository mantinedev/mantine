import { render } from '@testing-library/react';
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
