import { act } from 'react';
import { fireEvent } from '@testing-library/react';
import { DirectionProvider } from '@mantine/core';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { getVirtualColumnOffset } from '../DataGridBody/virtual-columns-test-utils';
import { useDataGrid, UseDataGridOptions } from '../hooks';
import { mockVirtualViewport } from '../virtual-test-utils';

const columns: DataGridColumnDef<any>[] = [
  { accessorKey: 'name', header: 'Name', size: 100 },
  {
    id: 'info',
    header: 'Info',
    columns: [
      { accessorKey: 'team', header: 'Team', size: 120 },
      { accessorKey: 'score', header: 'Score', size: 80 },
    ],
  },
  {
    id: 'location',
    header: 'Location',
    columns: [{ accessorKey: 'city', header: 'City', size: 90 }],
  },
];

const data = [
  { id: 'a', name: 'Alice', team: 'Red', score: 1, city: 'Oslo' },
  { id: 'b', name: 'Bob', team: 'Blue', score: 2, city: 'Rome' },
];

const wideColumns: DataGridColumnDef<any>[] = Array.from({ length: 10 }, (_, group) => ({
  id: `g${group}`,
  header: `Group ${group}`,
  columns: [0, 1].map((leaf) => ({
    id: `c${group * 2 + leaf}`,
    header: `Column ${group * 2 + leaf}`,
    accessorFn: () => `${group * 2 + leaf}`,
    size: 100,
  })),
}));

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<any>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<any>> }) {
  const store = useDataGrid({ data, columns, getRowId: (row: any) => row.id, ...storeOptions });
  return <DataGrid store={store} height={300} {...props} />;
}

const headerRows = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>('[data-virtual-thead] > [role="row"]'));

const headerCell = (container: HTMLElement, label: string) =>
  Array.from(container.querySelectorAll<HTMLElement>('[role="columnheader"]')).find(
    (cell) => cell.textContent === label
  )!;

describe('@mantine/data-grid/virtual-header', () => {
  let restoreViewport: () => void;

  afterEach(() => {
    restoreViewport();
  });

  it('indexes and sizes group headers by the leaf columns they span', () => {
    restoreViewport = mockVirtualViewport();
    const { container } = render(<Grid virtualize="rows" />);

    const info = headerCell(container, 'Info');
    expect(info).toHaveAttribute('aria-colindex', '2');
    expect(info).toHaveAttribute('aria-colspan', '2');
    expect(info.style.width).toBe('200px');

    const location = headerCell(container, 'Location');
    expect(location).toHaveAttribute('aria-colindex', '4');
    expect(location).not.toHaveAttribute('aria-colspan');
    expect(location.style.width).toBe('var(--dg-col-3)');

    const placeholder = headerRows(container)[0].querySelector('[data-placeholder]')!;
    expect(placeholder).toHaveAttribute('aria-colindex', '1');
    expect(headerCell(container, 'City')).toHaveAttribute('aria-colindex', '4');
  });

  it('gives each header row its own aria-rowindex and offsets the body rows', () => {
    restoreViewport = mockVirtualViewport();
    const { container } = render(<Grid virtualize="rows" />);

    expect(headerRows(container).map((row) => row.getAttribute('aria-rowindex'))).toEqual([
      '1',
      '2',
    ]);
    expect(container.querySelector('[role="grid"]')).toHaveAttribute('aria-rowcount', '4');
    const bodyRows = container.querySelectorAll('[role="row"][data-row-id]');
    expect(bodyRows[0]).toHaveAttribute('aria-rowindex', '3');
    expect(bodyRows[1]).toHaveAttribute('aria-rowindex', '4');
  });

  it('positions group headers over their leaf columns after horizontal scroll', async () => {
    restoreViewport = mockVirtualViewport(300, 300);
    const { container } = render(
      <Grid virtualize="columns" storeOptions={{ columns: wideColumns }} />
    );
    const scroller = container.querySelector<HTMLElement>(
      '.mantine-DataGrid-virtualScrollContainer'
    )!;

    await act(async () => {
      scroller.scrollLeft = 1000;
      fireEvent.scroll(scroller);
    });

    const group = headerCell(container, 'Group 5');
    expect(group).toBeDefined();
    expect(group.style.width).toBe('200px');
    expect(getVirtualColumnOffset(group)).toBe(1000);
    expect(getVirtualColumnOffset(headerCell(container, 'Column 10'))).toBe(1000);
    expect(getVirtualColumnOffset(headerCell(container, 'Column 11'))).toBe(1100);
    expect(headerCell(container, 'Group 0')).toBeUndefined();
  });

  it('keeps group headers aligned when a group spans a pinned and an unpinned column', async () => {
    restoreViewport = mockVirtualViewport(300, 300);
    const { container } = render(
      <Grid
        virtualize="columns"
        storeOptions={{
          columns: wideColumns,
          withColumnPinning: true,
          columnPinning: { start: ['c0'], end: [] },
        }}
      />
    );
    const scroller = container.querySelector<HTMLElement>(
      '.mantine-DataGrid-virtualScrollContainer'
    )!;

    await act(async () => {
      scroller.scrollLeft = 1000;
      fireEvent.scroll(scroller);
    });

    const widthOf = (cell: HTMLElement) => {
      const width = cell.style.width;
      const variable = width.match(/^var\((--dg-col-\d+)\)$/);
      const grid = cell.closest<HTMLElement>('[role="grid"]')!;
      return parseFloat(variable ? grid.style.getPropertyValue(variable[1]) : width);
    };
    const leftOf = (cell: HTMLElement) => {
      let left = 0;
      for (const sibling of Array.from(cell.parentElement!.children) as HTMLElement[]) {
        if (sibling === cell) {
          return left;
        }
        left += widthOf(sibling);
      }
      return left;
    };

    expect(headerCell(container, 'Group 0')).toBeDefined();
    expect(headerCell(container, 'Column 0')).toHaveAttribute('data-pinned', 'start');
    expect(leftOf(headerCell(container, 'Column 10'))).toBe(1000);
    expect(leftOf(headerCell(container, 'Group 5'))).toBe(1000);
    const bodyRow = container.querySelector<HTMLElement>('[role="row"][data-row-id]')!;
    const bodyCell = Array.from(bodyRow.children).find(
      (cell) => cell.getAttribute('aria-colindex') === '11'
    ) as HTMLElement;
    expect(leftOf(bodyCell)).toBe(1000);
  });

  it.each([
    { name: 'last start-pinned leaf', start: ['c0'] },
    { name: 'pinned leaf after another pinned column', start: ['c4', 'c0'] },
    { name: 'pinned leaf before another pinned column', start: ['c0', 'c4'] },
  ])(
    'aligns every header with its body cells when a group mixes pinning ($name)',
    async ({ start }) => {
      restoreViewport = mockVirtualViewport(300, 300);
      const { container } = render(
        <Grid
          virtualize="columns"
          storeOptions={{
            columns: wideColumns,
            withColumnPinning: true,
            columnPinning: { start, end: [] },
          }}
        />
      );
      const scroller = container.querySelector<HTMLElement>(
        '.mantine-DataGrid-virtualScrollContainer'
      )!;

      const widthOf = (cell: HTMLElement) => {
        const width = cell.style.width;
        const variable = width.match(/^var\((--dg-col-\d+)\)$/);
        const grid = cell.closest<HTMLElement>('[role="grid"]')!;
        return parseFloat(variable ? grid.style.getPropertyValue(variable[1]) : width);
      };
      const leftOf = (cell: HTMLElement) => {
        let left = 0;
        for (const sibling of Array.from(cell.parentElement!.children) as HTMLElement[]) {
          if (sibling === cell) {
            return left;
          }
          left += widthOf(sibling);
        }
        return left;
      };
      const expectAligned = () => {
        const bodyRow = container.querySelector<HTMLElement>('[role="row"][data-row-id]')!;
        const bodyLeft = new Map(
          (Array.from(bodyRow.children) as HTMLElement[])
            .filter((cell) => cell.hasAttribute('aria-colindex'))
            .map((cell) => [cell.getAttribute('aria-colindex'), leftOf(cell)])
        );
        const headerCells = headerRows(container)
          .flatMap((row) => Array.from(row.children) as HTMLElement[])
          .filter((cell) => bodyLeft.has(cell.getAttribute('aria-colindex')));
        expect(headerCells.length).toBeGreaterThan(4);
        expect(headerCells.map((cell) => `${cell.textContent}@${leftOf(cell)}`)).toEqual(
          headerCells.map(
            (cell) => `${cell.textContent}@${bodyLeft.get(cell.getAttribute('aria-colindex'))}`
          )
        );
        const rowWidth = (row: HTMLElement) =>
          (Array.from(row.children) as HTMLElement[]).reduce((sum, cell) => sum + widthOf(cell), 0);
        headerRows(container).forEach((row) => expect(rowWidth(row)).toBe(rowWidth(bodyRow)));
      };

      expectAligned();

      await act(async () => {
        scroller.scrollLeft = 1000;
        fireEvent.scroll(scroller);
      });

      expectAligned();
    }
  );

  it('advances the column window when scrolled horizontally in rtl direction', async () => {
    restoreViewport = mockVirtualViewport(300, 300);
    const { container } = render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <Grid virtualize="columns" storeOptions={{ columns: wideColumns }} />
      </DirectionProvider>
    );
    const scroller = container.querySelector<HTMLElement>(
      '.mantine-DataGrid-virtualScrollContainer'
    )!;

    await act(async () => {
      scroller.scrollLeft = -1000;
      fireEvent.scroll(scroller);
    });

    expect(headerCell(container, 'Column 10')).toBeDefined();
    expect(getVirtualColumnOffset(headerCell(container, 'Column 10'))).toBe(1000);
    expect(headerCell(container, 'Column 0')).toBeUndefined();
  });
});
