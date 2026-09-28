import { useRef } from 'react';
import { act, render, renderHook, screen } from '@testing-library/react';
import { useScrollSpy } from './use-scroll-spy';

function createHeadings(positions: number[]) {
  const container = document.createElement('div');
  const headings = positions.map((_, index) => {
    const heading = document.createElement('h2');
    heading.textContent = `Heading ${index}`;
    heading.getBoundingClientRect = () => ({ y: positions[index] }) as DOMRect;
    container.appendChild(heading);
    return heading;
  });
  document.body.appendChild(container);
  return { container, headings };
}

describe('@mantine/hooks/use-scroll-spy', () => {
  it('sets the heading closest to the top as active and updates it on scroll', () => {
    const positions = [0, 400, 800];
    const { container } = createHeadings(positions);

    const { result } = renderHook(() => useScrollSpy({ selector: 'h2' }));
    expect(result.current.active).toBe(0);

    positions.splice(0, 3, -400, 20, 420);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.active).toBe(1);

    positions.splice(0, 3, -800, -380, 10);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.active).toBe(2);

    document.body.removeChild(container);
  });

  it('uses offset to determine the active heading', () => {
    const { container } = createHeadings([0, 400, 800]);

    const { result } = renderHook(() => useScrollSpy({ selector: 'h2', offset: 380 }));
    expect(result.current.active).toBe(1);

    document.body.removeChild(container);
  });

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

  it('resolves heading nodes again after their DOM nodes have been replaced', () => {
    const container = document.createElement('div');
    container.innerHTML = '<h2>First</h2><h2>Second</h2>';
    document.body.appendChild(container);

    const { result } = renderHook(() => useScrollSpy({ selector: 'h2' }));
    expect(result.current.data).toHaveLength(2);

    const initialNodes = result.current.data.map((heading) => heading.getNode());
    container.innerHTML = '<h2>First</h2><h2>Second</h2>';

    expect(initialNodes.every((node) => node.isConnected)).toBe(false);
    expect(result.current.data.map((heading) => heading.getNode().isConnected)).toStrictEqual([
      true,
      true,
    ]);
    expect(result.current.data.map((heading) => heading.getNode().textContent)).toStrictEqual([
      'First',
      'Second',
    ]);

    document.body.removeChild(container);
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
