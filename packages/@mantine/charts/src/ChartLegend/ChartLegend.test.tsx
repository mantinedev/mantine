import { fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ChartLegend } from './ChartLegend';

const payload = [
  {
    dataKey: 'Apples',
    color: 'var(--mantine-color-indigo-6)',
    payload: { dataKey: 'Apples', color: 'var(--mantine-color-indigo-6)' },
  },
  {
    dataKey: 'Oranges',
    color: 'var(--mantine-color-blue-6)',
    payload: { dataKey: 'Oranges', color: 'var(--mantine-color-blue-6)' },
  },
  {
    dataKey: 'Tomatoes',
    color: 'var(--mantine-color-teal-6)',
    payload: { dataKey: 'Tomatoes', color: 'var(--mantine-color-teal-6)' },
  },
];

function renderLegend(onHighlight: (area: string | null) => void) {
  return render(
    <MantineProvider>
      <ChartLegend
        payload={payload}
        onHighlight={onHighlight}
        legendPosition="top"
        data-testid="chart-legend"
      />
    </MantineProvider>
  );
}

function getLegendItem(labelText: string): HTMLElement {
  const label = screen.getByText(labelText);
  const item = label.closest('.mantine-ChartLegend-legendItem');
  if (!item) throw new Error(`Legend item for "${labelText}" not found`);
  return item as HTMLElement;
}

describe('@mantine/charts/ChartLegend', () => {
  it('calls onHighlight with dataKey when mouse enters a legend item', () => {
    const onHighlight = jest.fn();
    renderLegend(onHighlight);

    fireEvent.mouseEnter(getLegendItem('Apples'));

    expect(onHighlight).toHaveBeenCalledTimes(1);
    expect(onHighlight).toHaveBeenCalledWith('Apples');
  });

  it('does NOT call onHighlight(null) when cursor moves between legend items', () => {
    // This is the core regression test.
    // Previously, onMouseLeave on each item called onHighlight(null), causing the stuck highlight
    // bug: when rapid cursor movements triggered mouseenter then mouseleave before React could
    // re-render, the new DOM node missed the leave event, leaving the highlight stuck.
    //
    // The fix moves onHighlight(null) from individual items to the container's onMouseLeave.
    // When the cursor moves between legend items, no null is emitted between transitions.
    //
    // Note: React synthetic events fire onMouseEnter on relatedTarget automatically,
    // so after mouseLeave(A, { relatedTarget: B }), onHighlight("B") is called.
    // The key assertion is that onHighlight(null) is NEVER called during item transitions.
    const onHighlight = jest.fn();
    renderLegend(onHighlight);

    const applesItem = getLegendItem('Apples');
    const orangesItem = getLegendItem('Oranges');

    fireEvent.mouseEnter(applesItem);
    expect(onHighlight).toHaveBeenLastCalledWith('Apples');
    onHighlight.mockClear();

    // Simulate cursor moving from Apples toward Oranges (still inside container).
    // React fires onMouseEnter on orangesItem as well, but crucially NOT onHighlight(null).
    fireEvent.mouseLeave(applesItem, { relatedTarget: orangesItem });

    const nullCalls = onHighlight.mock.calls.filter((c) => c[0] === null);
    expect(nullCalls).toHaveLength(0);
  });

  it('calls onHighlight(null) when mouse leaves the legend container entirely', () => {
    const onHighlight = jest.fn();
    const { container } = renderLegend(onHighlight);

    fireEvent.mouseEnter(getLegendItem('Apples'));
    onHighlight.mockClear();

    // Simulate cursor leaving the legend container to an element outside it.
    const legend = screen.getByTestId('chart-legend');
    fireEvent.mouseLeave(legend, { relatedTarget: container.parentElement! });

    expect(onHighlight).toHaveBeenCalledTimes(1);
    expect(onHighlight).toHaveBeenCalledWith(null);
  });

  it('transitions highlight from one item to another without intermediate null', () => {
    // Simulates rapid cursor movement: Apples → Oranges.
    // The sequence of onHighlight calls should be ["Apples", "Oranges"] with no null in between.
    const onHighlight = jest.fn();
    renderLegend(onHighlight);

    const applesItem = getLegendItem('Apples');
    const orangesItem = getLegendItem('Oranges');

    fireEvent.mouseEnter(applesItem);
    // React also fires mouseEnter on orangesItem as relatedTarget
    fireEvent.mouseLeave(applesItem, { relatedTarget: orangesItem });

    const calls = onHighlight.mock.calls.map((c) => c[0]);
    expect(calls).not.toContain(null);
    expect(calls[0]).toBe('Apples');
    // Last call should be Oranges (from React's automatic enter on relatedTarget)
    expect(calls[calls.length - 1]).toBe('Oranges');
  });

  it('clears highlight when cursor leaves the container after hovering an item', () => {
    const onHighlight = jest.fn();
    const { container } = renderLegend(onHighlight);

    fireEvent.mouseEnter(getLegendItem('Tomatoes'));
    expect(onHighlight).toHaveBeenLastCalledWith('Tomatoes');

    const legend = screen.getByTestId('chart-legend');
    fireEvent.mouseLeave(legend, { relatedTarget: container.parentElement! });

    expect(onHighlight).toHaveBeenLastCalledWith(null);
  });

  it('sets highlight for each item in sequence with no null between transitions', () => {
    const onHighlight = jest.fn();
    renderLegend(onHighlight);

    const applesItem = getLegendItem('Apples');
    const orangesItem = getLegendItem('Oranges');
    const tomatoesItem = getLegendItem('Tomatoes');

    // Simulate rapid sequential hover: leave fires enter on next item automatically
    fireEvent.mouseEnter(applesItem);
    fireEvent.mouseLeave(applesItem, { relatedTarget: orangesItem });
    // At this point React already fired mouseEnter on orangesItem
    fireEvent.mouseLeave(orangesItem, { relatedTarget: tomatoesItem });
    // At this point React already fired mouseEnter on tomatoesItem

    const calls = onHighlight.mock.calls.map((c) => c[0]);
    expect(calls).not.toContain(null);
    expect(calls[0]).toBe('Apples');
    expect(calls[calls.length - 1]).toBe('Tomatoes');
  });
});
