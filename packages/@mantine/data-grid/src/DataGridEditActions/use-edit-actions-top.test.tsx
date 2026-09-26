import { createRef } from 'react';
import { act, renderHook } from '@testing-library/react';
import { useEditActionsTop } from './use-edit-actions-top';

describe('@mantine/data-grid/use-edit-actions-top', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('queries the grid again when it was not rendered on the previous pass', () => {
    const root = document.createElement('div');
    const container = document.createElement('div');
    container.setAttribute('data-dg-scroll', '');
    root.appendChild(container);
    document.body.appendChild(root);

    const rootRef = { current: root };
    const scrollContainerRef = { current: container };
    const actionsRef = createRef<HTMLDivElement>();

    const { result, rerender } = renderHook(() =>
      useEditActionsTop({ rootRef, actionsRef, scrollContainerRef, rowId: 'a' })
    );
    expect(result.current).toBeNull();

    container.innerHTML =
      '<table><tbody><tr data-row-id="a" data-editing><td>A</td></tr></tbody></table>';
    rerender();

    expect(typeof result.current).toBe('number');
  });

  it('re-measures when the editing row changes height and follows a replaced row element', () => {
    const observers: { callback: () => void; targets: Set<Element> }[] = [];
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class {
      targets = new Set<Element>();
      constructor(callback: () => void) {
        observers.push({ callback, targets: this.targets });
      }
      observe(target: Element) {
        this.targets.add(target);
      }
      unobserve(target: Element) {
        this.targets.delete(target);
      }
      disconnect() {
        this.targets.clear();
      }
    } as unknown as typeof ResizeObserver;
    const frames: FrameRequestCallback[] = [];
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      frames.push(cb);
      return frames.length;
    });
    const flushFrames = () => frames.splice(0).forEach((cb) => cb(0));

    const root = document.createElement('div');
    const container = document.createElement('div');
    container.setAttribute('data-dg-scroll', '');
    container.innerHTML =
      '<table><tbody><tr data-row-id="a" data-editing><td>A</td></tr></tbody></table>';
    root.appendChild(container);
    document.body.appendChild(root);
    const setRowBottom = (row: Element, bottom: number) => {
      row.getBoundingClientRect = () => ({ top: 0, bottom }) as DOMRect;
    };
    const firstRow = container.querySelector('tr')!;
    setRowBottom(firstRow, 30);

    const { result } = renderHook(() =>
      useEditActionsTop({
        rootRef: { current: root },
        actionsRef: createRef<HTMLDivElement>(),
        scrollContainerRef: { current: container },
        rowId: 'a',
      })
    );
    expect(result.current).toBe(34);

    const rowObserver = () => observers.find((observer) => observer.targets.has(firstRow));
    expect(rowObserver()).toBeDefined();
    setRowBottom(firstRow, 52);
    act(() => {
      rowObserver()!.callback();
      flushFrames();
    });
    expect(result.current).toBe(56);

    const tbody = container.querySelector('tbody')!;
    tbody.innerHTML = '<tr data-row-id="a" data-editing><td>A</td></tr>';
    const nextRow = tbody.querySelector('tr')!;
    setRowBottom(nextRow, 40);
    act(() => {
      window.dispatchEvent(new Event('resize'));
      flushFrames();
    });
    expect(result.current).toBe(44);
    const nextObserver = observers.find((observer) => observer.targets.has(nextRow));
    expect(nextObserver).toBeDefined();
    expect(nextObserver!.targets.has(firstRow)).toBe(false);

    setRowBottom(nextRow, 70);
    act(() => {
      nextObserver!.callback();
      flushFrames();
    });
    expect(result.current).toBe(74);

    rafSpy.mockRestore();
    window.ResizeObserver = OriginalResizeObserver;
  });

  it('re-measures in the virtual body when the editing row is moved by its wrapper or the body resizes', async () => {
    const observers: { callback: () => void; targets: Set<Element> }[] = [];
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class {
      targets = new Set<Element>();
      constructor(callback: () => void) {
        observers.push({ callback, targets: this.targets });
      }
      observe(target: Element) {
        this.targets.add(target);
      }
      unobserve(target: Element) {
        this.targets.delete(target);
      }
      disconnect() {
        this.targets.clear();
      }
    } as unknown as typeof ResizeObserver;
    const frames: FrameRequestCallback[] = [];
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      frames.push(cb);
      return frames.length;
    });
    const flushFrames = () => frames.splice(0).forEach((cb) => cb(0));

    const root = document.createElement('div');
    const container = document.createElement('div');
    container.setAttribute('data-dg-scroll', '');
    container.innerHTML =
      '<div role="grid"><div data-virtual-thead></div><div data-sizer style="height: 320px"><div data-wrapper style="transform: translateY(64px)"><div role="row" data-row-id="a" data-editing></div></div></div></div>';
    root.appendChild(container);
    document.body.appendChild(root);
    const row = container.querySelector('[data-row-id]')!;
    const wrapper = container.querySelector<HTMLElement>('[data-wrapper]')!;
    const sizer = container.querySelector('[data-sizer]')!;
    let rowTop = 64;
    row.getBoundingClientRect = () => ({ top: rowTop, bottom: rowTop + 30 }) as DOMRect;

    const { result } = renderHook(() =>
      useEditActionsTop({
        rootRef: { current: root },
        actionsRef: createRef<HTMLDivElement>(),
        scrollContainerRef: { current: container },
        rowId: 'a',
      })
    );
    act(() => flushFrames());
    expect(result.current).toBe(98);

    rowTop = 100;
    wrapper.style.transform = 'translateY(100px)';
    await act(async () => {
      await Promise.resolve();
      flushFrames();
    });
    expect(result.current).toBe(134);

    rowTop = 140;
    const sizerObserver = observers.find((observer) => observer.targets.has(sizer));
    expect(sizerObserver).toBeDefined();
    act(() => {
      sizerObserver!.callback();
      flushFrames();
    });
    expect(result.current).toBe(174);

    rafSpy.mockRestore();
    window.ResizeObserver = OriginalResizeObserver;
  });
});
