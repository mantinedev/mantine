import { fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { useDataGrid, UseDataGridOptions } from '../hooks';

if (typeof PointerEvent === 'undefined') {
  (global as any).PointerEvent = class PointerEvent extends MouseEvent {
    pointerId: number;

    constructor(type: string, init: PointerEventInit & { pointerId?: number } = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 0;
    }
  };
}

interface Person {
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [
  { name: 'Alice', age: 30, city: 'Paris' },
  { name: 'Bob', age: 25, city: 'Berlin' },
];

const columns: DataGridColumnDef<Person>[] = [
  {
    id: 'person',
    header: 'Person',
    columns: [
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'age', header: 'Age', enableSorting: true },
    ],
  },
  { accessorKey: 'city', header: 'City', enableSorting: true },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<Person>> }) {
  const store = useDataGrid<Person>({
    data,
    columns,
    withSorting: true,
    withColumnResizing: true,
    withColumnReorder: true,
    ...storeOptions,
  });
  return <DataGrid store={store} withColumnMenu {...props} />;
}

describe('@mantine/data-grid/DataGridHeader header groups', () => {
  it('marks group and placeholder cells and keeps every header row', () => {
    const { container } = render(<Grid />);
    const rows = container.querySelectorAll('thead tr');
    expect(rows).toHaveLength(2);

    const group = rows[0].querySelector('th[data-header-group]')!;
    expect(group).toHaveTextContent('Person');
    expect(group).toHaveAttribute('colspan', '2');
    expect(group.querySelector('button')).not.toBeInTheDocument();
    expect(group).not.toHaveAttribute('data-sortable');
    expect(group.querySelector('.mantine-DataGrid-columnMenu')).not.toBeInTheDocument();
    expect(group.querySelector('.mantine-DataGrid-resizeHandle')).toBeInTheDocument();

    const placeholder = rows[0].querySelector('th[data-placeholder]')!;
    expect(placeholder).toHaveTextContent('');
    expect(placeholder.querySelector('.mantine-DataGrid-resizeHandle')).not.toBeInTheDocument();
    expect(placeholder.querySelector('.mantine-DataGrid-columnMenu')).not.toBeInTheDocument();

    expect(rows[1].querySelectorAll('th[data-sortable]')).toHaveLength(3);
    expect(rows[1].querySelector('th[data-header-group]')).not.toBeInTheDocument();
  });

  it('does not start a drag from a group header', () => {
    const { container } = render(<Grid />);
    const group = container.querySelector('th[data-header-group]')!;
    fireEvent.pointerDown(group, { clientX: 10, clientY: 10, button: 0 });
    fireEvent.pointerMove(document, { clientX: 200, clientY: 10 });
    expect(container.querySelector('[data-dragging]')).not.toBeInTheDocument();
    expect(document.querySelector('.mantine-DataGrid-dragGhost')).not.toBeInTheDocument();
    fireEvent.pointerUp(document);
  });

  it('renders the same group attributes in the virtual header', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    const group = container.querySelector('[role="columnheader"][data-header-group]')!;
    expect(group).toHaveTextContent('Person');
    expect(group.querySelector('button')).not.toBeInTheDocument();
    expect(group.querySelector('.mantine-DataGrid-resizeHandle')).toBeInTheDocument();
    expect(container.querySelector('[role="columnheader"][data-placeholder]')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Column menu' })).toHaveLength(3);
  });

  it('sizes columns from leaf column sizes instead of group header cells', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          withColumnResizing: false,
          columns: [
            {
              id: 'person',
              header: 'Person',
              columns: [
                { accessorKey: 'name', header: 'Name', size: 120 },
                { accessorKey: 'age', header: 'Age', size: 60 },
              ],
            },
            { accessorKey: 'city', header: 'City', size: 200 },
          ],
        }}
      />
    );
    const cols = Array.from(container.querySelectorAll('table > colgroup > col'));
    expect(cols.map((col) => (col as HTMLElement).style.width)).toEqual(['120px', '60px', '']);
  });

  it('does not render a colgroup when there is a single header row', () => {
    const { container } = render(
      <Grid storeOptions={{ columns: [{ accessorKey: 'name', header: 'Name' }] }} />
    );
    expect(container.querySelector('colgroup')).not.toBeInTheDocument();
  });
});
