import { Menu } from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { createDataGridColumnHelper, DataGridColumnDef } from '../DataGrid.types';
import { DataGridStore, useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';

interface Person {
  name: string;
  age: number;
}

const helper = createDataGridColumnHelper<Person>();

const data: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true },
  { accessorKey: 'age', header: 'Age', enableSorting: true },
  helper.display({ id: 'actions', meta: { type: 'actions' }, cell: () => null }),
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  columns: columnsProp = columns,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns'> & {
  columns?: DataGridColumnDef<Person>[];
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({ data, columns: columnsProp, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} withColumnMenu {...props} />;
}

function getMenuButtons() {
  return screen.queryAllByRole('button', { name: 'Column menu' });
}

describe('@mantine/data-grid/DataGridHeader column menu', () => {
  it('renders a kebab in every data column header when withColumnMenu is set', () => {
    const { container } = render(<Grid storeOptions={{ withSorting: true }} />);
    expect(getMenuButtons()).toHaveLength(2);
    expect(container.querySelector('th[data-actions] button')).not.toBeInTheDocument();
    const th = container.querySelector('th[data-sortable]')!;
    expect(th.querySelector('.mantine-DataGrid-columnMenu')).toBeInTheDocument();
  });

  it('does not render a kebab without withColumnMenu', () => {
    render(<Grid storeOptions={{ withSorting: true }} withColumnMenu={false} />);
    expect(getMenuButtons()).toHaveLength(0);
  });

  it('respects meta.disableColumnMenu and skips utility columns', () => {
    const { container } = render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name', enableSorting: true },
          {
            accessorKey: 'age',
            header: 'Age',
            enableSorting: true,
            meta: { disableColumnMenu: true },
          },
        ]}
        storeOptions={{ withSorting: true, withRowSelection: true }}
      />
    );
    expect(getMenuButtons()).toHaveLength(1);
    expect(container.querySelector('th[data-utility] .mantine-DataGrid-columnMenu')).toBeNull();
  });

  it('renders no kebab when the menu would be empty', () => {
    render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'age', header: 'Age' },
        ]}
      />
    );
    expect(getMenuButtons()).toHaveLength(0);
  });

  it('opens the menu without toggling sort and lists items per store flags', async () => {
    const { container } = render(
      <Grid
        storeOptions={{ withSorting: true, withColumnVisibility: true, withColumnResizing: true }}
      />
    );
    await userEvent.click(getMenuButtons()[0]);
    const menu = await screen.findByRole('menu');
    expect(menu).toHaveTextContent('Sort ascending');
    expect(menu).toHaveTextContent('Sort descending');
    expect(menu).toHaveTextContent('Hide column');
    expect(menu).toHaveTextContent('Reset column size');
    expect(menu).not.toHaveTextContent('Pin to left');
    expect(menu).not.toHaveTextContent('Move left');
    expect(container.querySelector('th[data-sort-asc]')).not.toBeInTheDocument();
    expect(getMenuButtons()[0]).toHaveAttribute('data-expanded');

    await userEvent.click(screen.getByRole('menuitem', { name: 'Sort ascending' }));
    expect(container.querySelector('th[data-sort-asc]')).toHaveTextContent('Name');
  });

  it('appends columnMenuItems after the built-in items', async () => {
    render(
      <Grid
        storeOptions={{ withSorting: true }}
        columnMenuItems={(column) => <Menu.Item>Custom for {column.id}</Menu.Item>}
      />
    );
    await userEvent.click(getMenuButtons()[1]);
    const menu = await screen.findByRole('menu');
    expect(menu).toHaveTextContent('Custom for age');
    const items = screen.getAllByRole('menuitem');
    expect(items[items.length - 1]).toHaveTextContent('Custom for age');
  });

  it('renders a kebab for columnMenuItems alone', () => {
    render(<Grid columnMenuItems={() => <Menu.Item>Custom</Menu.Item>} />);
    expect(getMenuButtons()).toHaveLength(2);
  });

  it('offers Move left / Move right under withColumnReorder', async () => {
    render(<Grid storeOptions={{ withColumnReorder: true }} />);
    await userEvent.click(getMenuButtons()[0]);
    await screen.findByRole('menu');
    expect(screen.getByRole('menuitem', { name: 'Move left' })).toHaveAttribute('data-disabled');
    const moveRight = screen.getByRole('menuitem', { name: 'Move right' });
    expect(moveRight).not.toHaveAttribute('data-disabled');
    await userEvent.click(moveRight);
    expect(lastStore!.columnOrder).toEqual(['age', 'name', 'actions']);
  });

  it('uses the columnMenu label as the kebab aria-label', () => {
    render(<Grid storeOptions={{ withSorting: true }} labels={{ columnMenu: 'Options' }} />);
    expect(screen.getAllByRole('button', { name: 'Options' })).toHaveLength(2);
  });

  it('renders the kebab in the virtual header', () => {
    const { container } = render(
      <Grid storeOptions={{ withSorting: true }} virtualize="rows" height={200} />
    );
    expect(
      container.querySelectorAll('[role="columnheader"] .mantine-DataGrid-columnMenu')
    ).toHaveLength(2);
  });
});
