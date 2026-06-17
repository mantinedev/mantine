import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useSplitter, UseSplitterOptions, UseSplitterReturnValue } from './use-splitter';

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

  it('ignores wrong-axis arrow keys without preventing default (allows page scroll)', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');

    // Horizontal splitter: Up/Down are the wrong axis -> no-op and default not prevented
    expect(fireEvent.keyDown(handle, { key: 'ArrowUp' })).toBe(true);
    expect(fireEvent.keyDown(handle, { key: 'ArrowDown' })).toBe(true);
    expect(handle.getAttribute('aria-valuenow')).toBe('50');

    // Matching axis still resizes and prevents default
    expect(fireEvent.keyDown(handle, { key: 'ArrowRight' })).toBe(false);
    expect(handle.getAttribute('aria-valuenow')).toBe('51');
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

  it('sizes always sum to 100 when constrained by min', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50, min: 20 }]} />);

    const handle = screen.getByTestId('handle-0');

    for (let i = 0; i < 50; i++) {
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
    }

    const valuenow = Number(handle.getAttribute('aria-valuenow'));
    expect(valuenow).toBeLessThanOrEqual(80);
    expect(valuenow + 20).toBeLessThanOrEqual(100);
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

  describe('redistribute: nearest', () => {
    it('borrows from further panels when neighbor is at min', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 26, min: 0 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 54, min: 0 },
          ]}
          redistribute="nearest"
          step={10}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(handle.getAttribute('aria-valuenow')).toBe('36');
    });

    it('borrows from nearest panel first (positive delta)', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 30, min: 10 },
            { defaultSize: 50, min: 10 },
          ]}
          redistribute="nearest"
          step={25}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(45);
      expect(newSizes[1]).toBe(10);
      expect(newSizes[2]).toBe(45);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('borrows from panels to the left on negative delta', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 50, min: 10 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute="nearest"
          step={15}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-1');
      fireEvent.keyDown(handle, { key: 'ArrowLeft' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(35);
      expect(newSizes[1]).toBe(20);
      expect(newSizes[2]).toBe(45);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('respects growing panel max constraint', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0, max: 40 },
            { defaultSize: 20, min: 0 },
            { defaultSize: 50, min: 0 },
          ]}
          redistribute="nearest"
          step={30}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(40);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });
  });

  describe('redistribute: equal', () => {
    it('distributes shrinkage equally among donor panels', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 40, min: 0 },
            { defaultSize: 40, min: 0 },
          ]}
          redistribute="equal"
          step={20}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(40);
      expect(newSizes[1]).toBe(30);
      expect(newSizes[2]).toBe(30);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('skips donors at min and redistributes to remaining', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 60, min: 0 },
          ]}
          redistribute="equal"
          step={10}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(30);
      expect(newSizes[1]).toBe(20);
      expect(newSizes[2]).toBe(50);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });
  });

  describe('redistribute: custom function', () => {
    it('calls custom function with correct input', () => {
      const customFn = jest.fn((input: { sizes: number[]; delta: number }) => {
        const result = [...input.sizes];
        result[0] += input.delta;
        result[2] -= input.delta;
        return result;
      });

      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0 },
            { defaultSize: 40, min: 40 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute={customFn}
          step={5}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(customFn).toHaveBeenCalledWith(
        expect.objectContaining({
          sizes: [30, 40, 30],
          handleIndex: 0,
          delta: 5,
        })
      );
    });

    it('uses sizes returned by custom function', () => {
      const onSizeChange = jest.fn();
      const customFn = jest.fn(() => [50, 10, 40]);

      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0 },
            { defaultSize: 40, min: 0 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute={customFn}
          step={5}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(onSizeChange).toHaveBeenCalledWith([50, 10, 40]);
    });
  });

  it('expand does not fire onCollapseChange or set negative sizes when neighbor has no space to give', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [
          { defaultSize: 30, collapsible: true },
          { defaultSize: 70, min: 100 },
        ],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes).toEqual([0, 100]);
    onCollapseChange.mockClear();

    act(() => {
      result.current.expand(0);
    });

    expect(result.current.sizes).toEqual([0, 100]);
    expect(result.current.sizes[0]).toBeGreaterThanOrEqual(0);
    expect(onCollapseChange).not.toHaveBeenCalled();
  });

  it('cleans up body styles on unmount during an active drag', () => {
    const { unmount } = render(
      <TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />
    );

    const handle = screen.getByTestId('handle-0');

    fireEvent(
      handle,
      new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
    );

    expect(document.body.style.cursor).toBe('col-resize');
    expect(document.body.style.userSelect).toBe('none');

    act(() => {
      unmount();
    });

    expect(document.body.style.cursor).toBe('');
    expect(document.body.style.userSelect).toBe('');
  });

  it('does not change sizes when the container has zero measured size', () => {
    // jsdom getBoundingClientRect() reports 0 width/height, so containerSize is 0.
    // Dragging must be a no-op rather than dividing by zero and producing NaN/Infinity sizes.
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');

    fireEvent(
      handle,
      new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
    );

    act(() => {
      fireEvent(
        document,
        new MouseEvent('pointerup', { bubbles: true, clientX: 300, clientY: 100 })
      );
    });

    expect(screen.getByTestId('panel-0').style.width).toBe('50%');
    expect(screen.getByTestId('panel-1').style.width).toBe('50%');
  });

  describe('CSS units', () => {
    let rectSpy: jest.SpyInstance;

    function UnitHarness({
      onSplitter,
      ...props
    }: UseSplitterOptions & { onSplitter: (splitter: UseSplitterReturnValue) => void }) {
      const splitter = useSplitter(props);
      onSplitter(splitter);

      return (
        <div ref={splitter.ref} data-testid="container">
          <div data-testid="pane-0" />
          <div data-testid="handle-0" {...splitter.getHandleProps({ index: 0 })} />
          <div data-testid="pane-1" />
        </div>
      );
    }

    beforeAll(() => {
      rectSpy = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
        width: 1000,
        height: 600,
        top: 0,
        left: 0,
        right: 1000,
        bottom: 600,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect);
    });

    afterAll(() => {
      rectSpy.mockRestore();
    });

    it('preserves declared units in returned sizes', () => {
      const { result } = renderHook(() =>
        useSplitter({ panels: [{ defaultSize: '240px' }, { defaultSize: 60 }] })
      );
      expect(result.current.sizes).toEqual(['240px', 60]);
    });

    it('reports fixed pixel pane size via aria-valuenow', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('240');
      expect(splitter!.sizes).toEqual(['240px', 60]);
    });

    it('resolves rem sizes to pixels using root font-size', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '10rem' }, { defaultSize: 50 }]}
          onSplitter={() => {}}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('160');
    });

    it('applies a pixel keyboard step to a fixed pane', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60, min: 0 }]}
          step="10px"
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('250');
    });

    it('treats a bare-number step as a percentage of the container in pixel mode', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60, min: 0 }]}
          step={1}
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('250');
    });

    it('clamps a fixed pane to its pixel max', () => {
      render(
        <UnitHarness
          panels={[
            { defaultSize: '240px', max: '300px' },
            { defaultSize: 60, min: 0 },
          ]}
          step="100px"
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('300');
    });

    it('updates the fixed pane in pixels and the flexible neighbor in percent on drag', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '200px' }, { defaultSize: 60, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('250px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(75);
    });

    it('collapses and expands a fixed pane preserving its unit', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[
            { defaultSize: '240px', collapsible: true },
            { defaultSize: 60, min: 0 },
          ]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      act(() => {
        splitter!.collapse(0);
      });

      expect(splitter!.sizes[0]).toBe('0px');
      expect(splitter!.collapsed).toEqual([true, false]);

      act(() => {
        splitter!.expand(0);
      });

      expect(splitter!.sizes[0]).toBe('240px');
      expect(splitter!.collapsed).toEqual([false, false]);
    });

    it('respects RTL when dragging a fixed pane', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          dir="rtl"
          panels={[{ defaultSize: '200px' }, { defaultSize: 60, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('150px');
    });

    it('moves the handle by the pointer delta between two flexible panes next to a fixed pane', () => {
      let splitter: UseSplitterReturnValue;

      function ThreePaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
          </div>
        );
      }

      render(
        <ThreePaneHarness
          panels={[
            { defaultSize: '240px' },
            { defaultSize: 50, min: 0 },
            { defaultSize: 50, min: 0 },
          ]}
        />
      );

      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 200, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('240px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(48);
      expect(splitter!.sizes[2] as number).toBeCloseTo(28);
    });

    it('enables pixel mode when only collapseThreshold uses a fixed unit', () => {
      render(
        <UnitHarness
          panels={[
            { defaultSize: 30, collapsible: true, collapseThreshold: '120px' },
            { defaultSize: 70 },
          ]}
          onSplitter={() => {}}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('300');
    });

    it('does not rewrite fixed sizes on a no-op drag when panes overflow the container', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      expect(splitter!.sizes).toEqual(['600px', '600px']);
    });

    it('does not shrink overflowing fixed panes on a real drag (keeps the unscaled total)', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      // container is 1000px wide, fixed total is 1200px -> scale 1000/1200, both panes render at 500px.
      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      // +50px in rendered space -> rendered [550, 450] -> unscaled [660, 540]; total stays 1200px,
      // only the dragged delta moves. Without the fix both panes collapse toward ~500px.
      expect(splitter!.sizes[0]).toBe('660px');
      expect(splitter!.sizes[1]).toBe('540px');
    });

    it('does not shrink overflowing fixed panes on keyboard resize (keeps the unscaled total)', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          step="10px"
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      // container 1000px, fixed total 1200px -> scale 1000/1200; +10px rendered -> +12px unscaled each side.
      expect(splitter!.sizes[0]).toBe('612px');
      expect(splitter!.sizes[1]).toBe('588px');
    });

    it('encodes the absolute fixed size when a drag hands space to a flexible pane', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '1200px' }, { defaultSize: 1, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      // container 1000px, fixed pane overflows alone (scale 1000/1200): renders 1000px, flex 0.
      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      // Dragging 200px left gives the flex pane real space, so the fixed pane is no longer
      // down-scaled: it must persist its true 800px, not 800/scale = 960px (which would starve flex).
      expect(splitter!.sizes[0]).toBe('800px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(20);
    });

    it('re-encodes unchanged fixed panes when a drag clears the overflow', () => {
      let splitter: UseSplitterReturnValue;

      function ThreePaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
          </div>
        );
      }

      render(
        <ThreePaneHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }, { defaultSize: 1, min: 0 }]}
        />
      );

      // container 1000px, two fixed panes overflow (total 1200px, scale 1000/1200): each renders
      // 500px, flex 0. Dragging handle-1 left hands 200px to the flex pane and clears the overflow.
      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      // The untouched first pane must drop from its over-sized 600px to its rendered 500px, otherwise
      // it would expand to 600px and starve the flex pane on the next render.
      expect(splitter!.sizes[0]).toBe('500px');
      expect(splitter!.sizes[1]).toBe('300px');
      expect(splitter!.sizes[2] as number).toBeCloseTo(20);
    });

    it('re-encodes untouched flex panes when a drag clears the overflow', () => {
      let splitter: UseSplitterReturnValue;

      function FourPaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
            <div data-testid="handle-2" {...s.getHandleProps({ index: 2 })} />
            <div data-testid="pane-3" />
          </div>
        );
      }

      render(
        <FourPaneHarness
          panels={[
            { defaultSize: '600px' },
            { defaultSize: '600px' },
            { defaultSize: 1, min: 0 },
            { defaultSize: 1, min: 0 },
          ]}
        />
      );

      // Two fixed panes overflow (1200px in 1000px), both flex panes render at 0. Dragging handle-1
      // hands 200px only to flex pane 2; flex pane 3 stays at 0 and must not reclaim space afterwards.
      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('500px');
      expect(splitter!.sizes[1]).toBe('300px');
      expect(splitter!.sizes[2] as number).toBeCloseTo(20);
      // The untouched flex pane stays collapsed instead of stealing half of the freed 200px.
      expect(splitter!.sizes[3] as number).toBeCloseTo(0);
    });
  });

  describe('redistribute preserves sum', () => {
    it('nearest: sizes sum to 100 after multiple operations', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 25, min: 5 },
            { defaultSize: 25, min: 5 },
            { defaultSize: 50, min: 5 },
          ]}
          redistribute="nearest"
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 30; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }

      const panel0 = screen.getByTestId('panel-0');
      const panel1 = screen.getByTestId('panel-1');
      const panel2 = screen.getByTestId('panel-2');
      const sum =
        parseFloat(panel0.style.width) +
        parseFloat(panel1.style.width) +
        parseFloat(panel2.style.width);
      expect(sum).toBe(100);
    });

    it('equal: sizes sum to 100 after multiple operations', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 25, min: 5 },
            { defaultSize: 25, min: 5 },
            { defaultSize: 50, min: 5 },
          ]}
          redistribute="equal"
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 30; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }

      const panel0 = screen.getByTestId('panel-0');
      const panel1 = screen.getByTestId('panel-1');
      const panel2 = screen.getByTestId('panel-2');
      const sum =
        parseFloat(panel0.style.width) +
        parseFloat(panel1.style.width) +
        parseFloat(panel2.style.width);
      expect(sum).toBe(100);
    });
  });

  describe('reset', () => {
    it('reset(handleIndex) restores adjacent panels to their default ratio and leaves other panels untouched', () => {
      const { result } = renderHook(() =>
        useSplitter({ panels: [{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }] })
      );

      act(() => {
        result.current.setSizes([10, 20, 70]);
      });

      act(() => {
        result.current.reset(0);
      });

      // combined size of panes 0 and 1 (30) preserved, restored to 20:30 ratio
      expect(result.current.sizes).toEqual([12, 18, 70]);
    });

    it('reset clamps adjacent panels to their min constraints', () => {
      const { result } = renderHook(() =>
        useSplitter({
          panels: [{ defaultSize: 20 }, { defaultSize: 60, min: 50 }, { defaultSize: 20 }],
        })
      );

      act(() => {
        result.current.setSizes([55, 5, 40]);
      });

      act(() => {
        result.current.reset(0);
      });

      // default ratio would put pane 0 at 15, but pane 1 must keep its min of 50
      expect(result.current.sizes).toEqual([10, 50, 40]);
    });

    it('double-clicking a handle resets its adjacent panels to the default ratio', () => {
      render(
        <TestComponent panels={[{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }]} />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 10; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }
      expect(handle.getAttribute('aria-valuenow')).toBe('30');

      fireEvent.doubleClick(handle);
      expect(handle.getAttribute('aria-valuenow')).toBe('20');
    });

    it('does not reset on double click when resetOnDoubleClick is false', () => {
      render(
        <TestComponent
          panels={[{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }]}
          resetOnDoubleClick={false}
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 10; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }
      expect(handle.getAttribute('aria-valuenow')).toBe('30');

      fireEvent.doubleClick(handle);
      expect(handle.getAttribute('aria-valuenow')).toBe('30');
    });
  });
});
