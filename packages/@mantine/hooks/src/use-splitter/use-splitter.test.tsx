import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useSplitter, UseSplitterOptions } from './use-splitter';

function TestComponent(props: UseSplitterOptions) {
  const splitter = useSplitter(props);

  return (
    <div ref={splitter.ref} data-testid="container" style={{ width: 1000, height: 600 }}>
      <div data-testid="panel-0" style={{ width: `${splitter.sizes[0]}%` }} />
      <div data-testid="handle-0" {...splitter.getHandleProps({ index: 0 })} />
      <div data-testid="panel-1" style={{ width: `${splitter.sizes[1]}%` }} />
      {props.panels.length > 2 && (
        <>
          <div data-testid="handle-1" {...splitter.getHandleProps({ index: 1 })} />
          <div data-testid="panel-2" style={{ width: `${splitter.sizes[2]}%` }} />
        </>
      )}
    </div>
  );
}

const defaultPanels = [{ defaultSize: 50 }, { defaultSize: 50 }];

describe('useSplitter', () => {
  it('returns correct initial state', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30 }, { defaultSize: 70 }],
      })
    );

    expect(result.current.sizes).toEqual([30, 70]);
    expect(result.current.collapsed).toEqual([false, false]);
    expect(result.current.activeHandle).toBe(-1);
  });

  it('returns handle props with correct ARIA attributes', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 50, min: 10, max: 80 }, { defaultSize: 50 }],
      })
    );

    const props = result.current.getHandleProps({ index: 0 });
    expect(props.role).toBe('separator');
    expect(props['aria-orientation']).toBe('horizontal');
    expect(props['aria-valuenow']).toBe(50);
    expect(props['aria-valuemin']).toBe(10);
    expect(props['aria-valuemax']).toBe(80);
    expect(props.tabIndex).toBe(0);
    expect(props['data-orientation']).toBe('horizontal');
  });

  it('returns vertical aria-orientation when orientation is vertical', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: defaultPanels,
        orientation: 'vertical',
      })
    );

    const props = result.current.getHandleProps({ index: 0 });
    expect(props['aria-orientation']).toBe('vertical');
    expect(props['data-orientation']).toBe('vertical');
  });

  it('programmatically sets sizes', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: defaultPanels,
      })
    );

    act(() => {
      result.current.setSizes([30, 70]);
    });

    expect(result.current.sizes).toEqual([30, 70]);
  });

  it('collapses a collapsible panel', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes[0]).toBe(0);
    expect(result.current.sizes[1]).toBe(100);
    expect(result.current.collapsed).toEqual([true, false]);
    expect(onCollapseChange).toHaveBeenCalledWith(0, true);
  });

  it('does not collapse a non-collapsible panel', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 50 }, { defaultSize: 50 }],
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes).toEqual([50, 50]);
  });

  it('expands a collapsed panel', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    act(() => {
      result.current.expand(0);
    });

    expect(result.current.sizes[0]).toBe(30);
    expect(result.current.sizes[1]).toBe(70);
    expect(result.current.collapsed).toEqual([false, false]);
    expect(onCollapseChange).toHaveBeenCalledWith(0, false);
  });

  it('toggleCollapse toggles panel state', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 40, collapsible: true }, { defaultSize: 60 }],
      })
    );

    act(() => {
      result.current.toggleCollapse(0);
    });

    expect(result.current.sizes[0]).toBe(0);

    act(() => {
      result.current.toggleCollapse(0);
    });

    expect(result.current.sizes[0]).toBe(40);
  });

  it('handles keyboard ArrowRight to increase before panel', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('51');
  });

  it('handles keyboard ArrowLeft to decrease before panel', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowLeft' });

    expect(handle.getAttribute('aria-valuenow')).toBe('49');
  });

  it('handles Shift+Arrow for larger step', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight', shiftKey: true });

    expect(handle.getAttribute('aria-valuenow')).toBe('60');
  });

  it('handles Home key to shrink before panel to min', () => {
    render(<TestComponent panels={[{ defaultSize: 50, min: 20 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'Home' });

    expect(handle.getAttribute('aria-valuenow')).toBe('20');
  });

  it('handles End key to grow before panel to max', () => {
    render(<TestComponent panels={[{ defaultSize: 50, max: 80 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'End' });

    expect(handle.getAttribute('aria-valuenow')).toBe('80');
  });

  it('respects min/max constraints during keyboard navigation', () => {
    render(
      <TestComponent
        panels={[
          { defaultSize: 50, min: 20, max: 80 },
          { defaultSize: 50, min: 20, max: 80 },
        ]}
      />
    );

    const handle = screen.getByTestId('handle-0');

    for (let i = 0; i < 100; i++) {
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
    }

    expect(Number(handle.getAttribute('aria-valuenow'))).toBeLessThanOrEqual(80);
    expect(Number(handle.getAttribute('aria-valuenow'))).toBeGreaterThanOrEqual(20);
  });

  it('handles RTL keyboard direction', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} dir="rtl" />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('49');
  });

  it('handles vertical orientation with ArrowUp/ArrowDown', () => {
    render(
      <TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} orientation="vertical" />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowDown' });

    expect(handle.getAttribute('aria-valuenow')).toBe('51');

    fireEvent.keyDown(handle, { key: 'ArrowUp' });

    expect(handle.getAttribute('aria-valuenow')).toBe('50');
  });

  it('Enter toggles collapse on collapsible panel', () => {
    render(
      <TestComponent panels={[{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }]} />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'Enter' });

    expect(handle.getAttribute('aria-valuenow')).toBe('0');

    fireEvent.keyDown(handle, { key: 'Enter' });

    expect(handle.getAttribute('aria-valuenow')).toBe('30');
  });

  it('does not respond to keyboard when disabled', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} enabled={false} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('50');
  });

  it('handles 3 panels correctly', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 33 }, { defaultSize: 34 }, { defaultSize: 33 }],
      })
    );

    expect(result.current.sizes).toEqual([33, 34, 33]);
  });

  it('calls onSizeChange in controlled mode', () => {
    const onSizeChange = jest.fn();
    render(
      <TestComponent
        panels={[{ defaultSize: 50 }, { defaultSize: 50 }]}
        sizes={[50, 50]}
        onSizeChange={onSizeChange}
      />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(onSizeChange).toHaveBeenCalledWith([51, 49]);
  });

  it('data-active is set on active handle only', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    expect(handle.getAttribute('data-active')).toBeNull();
  });

  it('custom step size works', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} step={5} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('55');
  });

  it('custom shiftStep size works', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} shiftStep={20} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight', shiftKey: true });

    expect(handle.getAttribute('aria-valuenow')).toBe('70');
  });

  it('keyboard collapse fires onCollapseChange', () => {
    const onCollapseChange = jest.fn();
    render(
      <TestComponent
        panels={[{ defaultSize: 10, collapsible: true, min: 0 }, { defaultSize: 90 }]}
        step={20}
        onCollapseChange={onCollapseChange}
      />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowLeft' });

    expect(handle.getAttribute('aria-valuenow')).toBe('0');
    expect(onCollapseChange).toHaveBeenCalledWith(0, true);
  });
});
