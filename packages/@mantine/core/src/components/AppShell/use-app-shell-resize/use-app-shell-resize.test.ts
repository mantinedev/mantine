import { act, renderHook } from '@testing-library/react';
import { useAppShellResize } from './use-app-shell-resize';

describe('@mantine/core/AppShell/use-app-shell-resize', () => {
  it('marks only configured sections as enabled', () => {
    const { result } = renderHook(() => useAppShellResize({ navbar: { min: 100 } }));
    expect(result.current.navbar.enabled).toBe(true);
    expect(result.current.aside.enabled).toBe(false);
    expect(result.current.navbar.size).toBeUndefined();
  });

  it('commits sizes and calls onResizeEnd', () => {
    const onResizeEnd = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onResizeEnd }));

    act(() => result.current.endResize('navbar', 320));

    expect(result.current.navbar.size).toBe(320);
    expect(result.current.sizes).toStrictEqual({ navbar: 320 });
    expect(onResizeEnd).toHaveBeenCalledWith({ navbar: 320 });
  });

  it('does not commit or call onResizeEnd when the resize is cancelled', () => {
    const onResizeEnd = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onResizeEnd }));

    act(() => result.current.startResize('navbar'));
    expect(result.current.activeSection).toBe('navbar');

    act(() => result.current.endResize('navbar', null));

    expect(result.current.activeSection).toBeNull();
    expect(result.current.navbar.size).toBeUndefined();
    expect(onResizeEnd).not.toHaveBeenCalled();
  });

  it('does not call callbacks for setSize and reset', () => {
    const onResize = jest.fn();
    const onResizeEnd = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onResize, onResizeEnd }));

    act(() => result.current.navbar.setSize(280));
    expect(result.current.navbar.size).toBe(280);

    act(() => result.current.navbar.reset());
    expect(result.current.navbar.size).toBeUndefined();

    expect(onResize).not.toHaveBeenCalled();
    expect(onResizeEnd).not.toHaveBeenCalled();
  });

  it('applies initialSizes until the section is touched', () => {
    const { result, rerender } = renderHook(
      ({ initialSizes }) => useAppShellResize({ navbar: {}, initialSizes }),
      { initialProps: { initialSizes: {} as { navbar?: number } } }
    );

    expect(result.current.navbar.size).toBeUndefined();

    rerender({ initialSizes: { navbar: 420 } });
    expect(result.current.navbar.size).toBe(420);

    act(() => result.current.endResize('navbar', 300));
    rerender({ initialSizes: { navbar: 500 } });
    expect(result.current.navbar.size).toBe(300);
  });

  it('returns to the configuration after reset, ignoring initialSizes', () => {
    const { result } = renderHook(() =>
      useAppShellResize({ navbar: {}, initialSizes: { navbar: 420 } })
    );

    expect(result.current.navbar.size).toBe(420);

    act(() => result.current.navbar.reset());
    expect(result.current.navbar.size).toBeUndefined();
  });

  it('resets all sections', () => {
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, header: {} }));

    act(() => {
      result.current.navbar.setSize(300);
      result.current.header.setSize(80);
    });
    expect(result.current.sizes).toStrictEqual({ navbar: 300, header: 80 });

    act(() => result.current.resetAll());
    expect(result.current.sizes).toStrictEqual({});
  });

  it('calls onCollapseChange once per crossing', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onCollapseChange }));

    act(() => {
      result.current.reportCollapse('navbar', true);
      result.current.reportCollapse('navbar', true);
      result.current.reportCollapse('navbar', false);
    });

    expect(onCollapseChange).toHaveBeenCalledTimes(2);
    expect(onCollapseChange).toHaveBeenNthCalledWith(1, 'navbar', true);
    expect(onCollapseChange).toHaveBeenNthCalledWith(2, 'navbar', false);
  });

  it('seeds the collapse state without calling onCollapseChange', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onCollapseChange }));

    act(() => result.current.initCollapse('navbar', false));

    expect(onCollapseChange).not.toHaveBeenCalled();

    act(() => result.current.reportCollapse('navbar', false));

    expect(onCollapseChange).not.toHaveBeenCalled();

    act(() => result.current.reportCollapse('navbar', true));

    expect(onCollapseChange).toHaveBeenCalledTimes(1);
    expect(onCollapseChange).toHaveBeenCalledWith('navbar', true);
  });

  it('clears the collapse dedup state on endResize so the next drag can re-report the same direction', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onCollapseChange }));

    act(() => result.current.reportCollapse('navbar', true));
    expect(onCollapseChange).toHaveBeenCalledTimes(1);

    act(() => result.current.endResize('navbar', 300));

    act(() => result.current.reportCollapse('navbar', true));

    expect(onCollapseChange).toHaveBeenCalledTimes(2);
    expect(onCollapseChange).toHaveBeenNthCalledWith(2, 'navbar', true);
  });

  it('calls onResize with the previewed size without committing it', () => {
    const onResize = jest.fn();
    const { result } = renderHook(() => useAppShellResize({ navbar: {}, onResize }));

    act(() => result.current.previewResize('navbar', 350));

    expect(onResize).toHaveBeenCalledWith({ navbar: 350 });
    expect(result.current.navbar.size).toBeUndefined();
  });

  it('resetAll returns sections to the configuration, ignoring initialSizes', () => {
    const { result } = renderHook(() =>
      useAppShellResize({ navbar: {}, aside: {}, initialSizes: { navbar: 420, aside: 260 } })
    );

    expect(result.current.sizes).toStrictEqual({ navbar: 420, aside: 260 });

    act(() => result.current.resetAll());

    expect(result.current.navbar.size).toBeUndefined();
    expect(result.current.sizes).toStrictEqual({});
  });

  it('calls the latest callbacks from controller methods captured in a previous render', () => {
    const firstResizeEnd = jest.fn();
    const secondResizeEnd = jest.fn();
    const firstCollapseChange = jest.fn();
    const secondCollapseChange = jest.fn();
    const { result, rerender } = renderHook(
      ({ onResizeEnd, onCollapseChange }) =>
        useAppShellResize({ navbar: {}, onResizeEnd, onCollapseChange }),
      {
        initialProps: { onResizeEnd: firstResizeEnd, onCollapseChange: firstCollapseChange },
      }
    );

    const { endResize, reportCollapse } = result.current;
    rerender({ onResizeEnd: secondResizeEnd, onCollapseChange: secondCollapseChange });

    act(() => {
      reportCollapse('navbar', true);
      endResize('navbar', 320);
    });

    expect(firstResizeEnd).not.toHaveBeenCalled();
    expect(firstCollapseChange).not.toHaveBeenCalled();
    expect(secondResizeEnd).toHaveBeenCalledWith({ navbar: 320 });
    expect(secondCollapseChange).toHaveBeenCalledWith('navbar', true);
  });
});
