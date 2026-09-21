import { act, renderHook } from '@testing-library/react';
import { useFloatingWindow } from './use-floating-window';

describe('@mantine/hooks/use-floating-window', () => {
  it('keeps ref and setPosition stable when the options change', () => {
    const { result, rerender } = renderHook(
      ({ constrainOffset }: { constrainOffset: number }) =>
        useFloatingWindow<HTMLDivElement>({ constrainToViewport: true, constrainOffset }),
      { initialProps: { constrainOffset: 10 } }
    );

    const { ref, setPosition } = result.current;
    rerender({ constrainOffset: 20 });

    expect(result.current.ref).toBe(ref);
    expect(result.current.setPosition).toBe(setPosition);
  });

  it('setPosition reads the current options after they change', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    const { result, rerender } = renderHook(
      ({ constrainOffset }: { constrainOffset: number }) =>
        useFloatingWindow<HTMLDivElement>({ constrainToViewport: true, constrainOffset }),
      { initialProps: { constrainOffset: 10 } }
    );

    act(() => result.current.ref(element));

    const { setPosition } = result.current;
    rerender({ constrainOffset: 40 });

    act(() => setPosition({ left: 0, top: 0 }));
    expect(element.style.left).toBe('40px');
    expect(element.style.top).toBe('40px');

    element.remove();
  });
});
