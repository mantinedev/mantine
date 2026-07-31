import { useRef } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { useScrollSpy } from './use-scroll-spy';

describe('@mantine/hooks/use-scroll-spy', () => {
  it('attaches the scroll listener to window by default', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const { unmount } = renderHook(() => useScrollSpy());
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    unmount();
    addSpy.mockRestore();
  });

  it('attaches the scroll listener to a resolved HTMLElement scrollHost', () => {
    const host = document.createElement('div');
    const addSpy = jest.spyOn(host, 'addEventListener');
    const removeSpy = jest.spyOn(host, 'removeEventListener');

    const { unmount } = renderHook(() => useScrollSpy({ scrollHost: host }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('resolves a RefObject scrollHost and attaches the listener to its current element', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const addSpy = jest.spyOn(host, 'addEventListener');
    const removeSpy = jest.spyOn(host, 'removeEventListener');
    const ref = { current: host };

    const { unmount } = renderHook(() => useScrollSpy({ scrollHost: ref }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    document.body.removeChild(host);
  });

  it('falls back to window when a RefObject scrollHost has a null current', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const ref = { current: null };

    const { unmount } = renderHook(() => useScrollSpy({ scrollHost: ref }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();
    addSpy.mockRestore();
  });

  it('reattaches the listener when scrollHost changes to a different element', () => {
    const hostA = document.createElement('div');
    const hostB = document.createElement('div');
    const removeA = jest.spyOn(hostA, 'removeEventListener');
    const addB = jest.spyOn(hostB, 'addEventListener');

    const { rerender, unmount } = renderHook(({ host }) => useScrollSpy({ scrollHost: host }), {
      initialProps: { host: hostA },
    });

    rerender({ host: hostB });

    expect(removeA).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(addB).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();
  });

  it('resolves a React ref that is attached to an element rendered in the same pass', () => {
    const addSpy = jest.spyOn(HTMLElement.prototype, 'addEventListener');

    function Component() {
      const ref = useRef<HTMLDivElement>(null);
      useScrollSpy({ scrollHost: ref });
      return <div data-testid="host" ref={ref} />;
    }

    render(<Component />);
    const host = screen.getByTestId('host');

    const attachedToHost = addSpy.mock.calls.some(
      (call, index) => call[0] === 'scroll' && addSpy.mock.contexts[index] === host
    );

    expect(attachedToHost).toBe(true);
    addSpy.mockRestore();
  });
});
