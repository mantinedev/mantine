import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import {
  DataGrid,
  DataGridColumnDef,
  DataGridProps,
  DataGridSelectionBarProps,
  DataGridStore,
  useDataGrid,
  UseDataGridOptions,
} from '../index';

interface Person {
  name: string;
  age: number;
}

const data: Person[] = Array.from({ length: 5 }, (_, index) => ({
  name: `Person ${index + 1}`,
  age: 20 + index,
}));

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  barProps,
  withToolbar = true,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns' | 'data'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
  barProps?: DataGridSelectionBarProps;
  withToolbar?: boolean;
}) {
  const store = useDataGrid<Person>({
    data,
    columns,
    withRowSelection: true,
    withGlobalFilter: true,
    ...storeOptions,
  });
  lastStore = store;
  return (
    <DataGrid store={store} {...props}>
      {withToolbar && <DataGrid.Toolbar />}
      <DataGrid.SelectionBar {...barProps} />
      <DataGrid.Footer />
    </DataGrid>
  );
}

const q = (container: HTMLElement, selector: string) =>
  container.querySelector(`.mantine-DataGrid-${selector}`);

const select = (ids: string[]) =>
  act(() => lastStore!.table.setRowSelection(Object.fromEntries(ids.map((id) => [id, true]))));

describe('@mantine/data-grid/DataGridSelectionBar', () => {
  it('renders nothing while the selection is empty', () => {
    const { container } = render(<Grid />);
    expect(q(container, 'selectionBar')).not.toBeInTheDocument();
    expect(q(container, 'toolbar')).not.toHaveAttribute('data-hidden');
    expect(q(container, 'root')).not.toHaveAttribute('data-selection-bar-visible');
  });

  it('swaps into the toolbar slot while rows are selected and keeps the toolbar mounted', () => {
    const { container } = render(<Grid />);
    select(['0', '2']);

    const root = q(container, 'root')!;
    const bar = q(container, 'selectionBar')!;
    expect(bar).toBeInTheDocument();
    expect(root.firstElementChild).toBe(bar);
    expect(root.children[1]).toBe(q(container, 'toolbar'));
    expect(q(container, 'toolbar')).toHaveAttribute('data-hidden');
    expect(root).toHaveAttribute('data-selection-bar-visible');
    expect(q(container, 'selectionBarCount')).toHaveTextContent('2 selected');
    expect(bar).not.toHaveAttribute('data-floating');
  });

  it('renders children between the count and the close button', () => {
    const { container } = render(
      <Grid barProps={{ children: <button type="button">Delete</button> }} />
    );
    select(['1']);
    const bar = q(container, 'selectionBar')!;
    const order = Array.from(bar.children).map((child) =>
      child.classList.contains('mantine-DataGrid-selectionBarCount')
        ? 'count'
        : child.classList.contains('mantine-DataGrid-selectionBarClose')
          ? 'close'
          : child.textContent
    );
    expect(order).toEqual(['count', 'Delete', 'close']);
  });

  it('clears the selection through the close button', async () => {
    const { container } = render(<Grid />);
    select(['0', '1', '3']);
    await userEvent.click(screen.getByRole('button', { name: 'Clear selection' }));
    expect(lastStore!.rowSelection).toEqual({});
    expect(q(container, 'selectionBar')).not.toBeInTheDocument();
    expect(q(container, 'toolbar')).not.toHaveAttribute('data-hidden');
  });

  it('hides the close button with withCloseButton={false}', () => {
    render(<Grid barProps={{ withCloseButton: false }} />);
    select(['0']);
    expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
  });

  it('composes closeButtonProps.onClick with the reset and supports label overrides', async () => {
    const onClick = jest.fn();
    render(
      <Grid
        barProps={{ closeButtonProps: { onClick } }}
        labels={{ selectionBarClear: 'Deselect', selectionBarSelected: '{count} rows picked' }}
      />
    );
    select(['0']);
    expect(screen.getByText('1 rows picked')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Deselect' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(lastStore!.rowSelection).toEqual({});
  });

  it('ignores false entries in the row selection state', () => {
    const { container } = render(<Grid />);
    act(() => lastStore!.table.setRowSelection({ '0': false, '1': false } as any));
    expect(q(container, 'selectionBar')).not.toBeInTheDocument();
    expect(q(container, 'toolbar')).not.toHaveAttribute('data-hidden');
    act(() => lastStore!.table.setRowSelection({ '0': false, '1': true } as any));
    expect(q(container, 'selectionBarCount')).toHaveTextContent('1 selected');
  });

  it('renders as the first child when there is no toolbar', () => {
    const { container } = render(<Grid withToolbar={false} />);
    select(['4']);
    expect(q(container, 'root')!.firstElementChild).toBe(q(container, 'selectionBar'));
  });

  it('keeps the toolbar visible and renders inside the root in floating mode', () => {
    const { container } = render(<Grid barProps={{ floating: true }} />);
    select(['0', '1']);
    const root = q(container, 'root')!;
    const bar = q(container, 'selectionBar')!;
    expect(bar).toHaveAttribute('data-floating');
    expect(bar.parentElement).toBe(root);
    expect(root.firstElementChild).toBe(q(container, 'toolbar'));
    expect(q(container, 'toolbar')).not.toHaveAttribute('data-hidden');
    expect(root).toHaveAttribute('data-selection-bar-visible');
  });

  it('never renders for the virtual body either', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    expect(q(container, 'selectionBar')).not.toBeInTheDocument();
    select(['0']);
    expect(q(container, 'selectionBar')).toBeInTheDocument();
    expect(q(container, 'selectionBarCount')).toHaveTextContent('1 selected');
  });
});
