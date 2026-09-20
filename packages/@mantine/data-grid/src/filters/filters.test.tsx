import { act } from 'react';
import { render, screen } from '@mantine-tests/core';
import {
  booleanOperators,
  createOperatorFilterFn,
  DataGrid,
  DataGridColumnDef,
  DataGridProps,
  DataGridStore,
  numberOperators,
  stringOperators,
  useDataGrid,
  UseDataGridOptions,
} from '../index';

interface Person {
  name: string;
  age: number;
  tags: string[] | null;
}

const data: Person[] = [
  { name: 'Alice', age: 30, tags: ['b', 'a'] },
  { name: 'Bob', age: 25, tags: null },
  { name: 'Anna', age: 41, tags: ['c', 'a'] },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name', enableColumnFilter: true },
  { accessorKey: 'age', header: 'Age', filterFn: 'equals' },
  { accessorKey: 'tags', header: 'Tags' },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  columns: columnsProp = columns,
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns'> & {
  columns?: DataGridColumnDef<Person>[];
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({ data, columns: columnsProp, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

function bodyNames(container: HTMLElement) {
  return Array.from(container.querySelectorAll('tbody tr')).map(
    (row) => row.querySelector('td')?.textContent
  );
}

describe('@mantine/data-grid/filters', () => {
  it('renders no filter inputs in the header for filterable columns', () => {
    const { container } = render(<Grid />);
    expect(lastStore!.withFiltering).toBe(true);
    expect(container.querySelector('thead input')).not.toBeInTheDocument();
    expect(container.querySelectorAll('thead tr')).toHaveLength(1);
    expect(screen.queryByPlaceholderText(/filter/i)).not.toBeInTheDocument();
  });

  it('does not render filter inputs in the virtual header', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    expect(container.querySelector('[role="columnheader"] input')).not.toBeInTheDocument();
  });

  it('setColumnFilter writes, replaces and removes entries', () => {
    const { container } = render(<Grid />);

    act(() => lastStore!.setColumnFilter('name', 'A'));
    expect(lastStore!.columnFilters).toEqual([{ id: 'name', value: 'A' }]);
    expect(bodyNames(container)).toEqual(['Alice', 'Anna']);

    act(() => lastStore!.setColumnFilter('age', 41));
    act(() => lastStore!.setColumnFilter('name', 'An'));
    expect(lastStore!.columnFilters).toEqual([
      { id: 'name', value: 'An' },
      { id: 'age', value: 41 },
    ]);
    expect(bodyNames(container)).toEqual(['Anna']);

    act(() => lastStore!.setColumnFilter('name', ''));
    expect(lastStore!.columnFilters).toEqual([{ id: 'age', value: 41 }]);

    act(() => lastStore!.setColumnFilter('age', null));
    expect(lastStore!.columnFilters).toEqual([]);

    act(() => lastStore!.setColumnFilter('age', undefined));
    expect(lastStore!.columnFilters).toEqual([]);
    expect(bodyNames(container)).toEqual(['Alice', 'Bob', 'Anna']);
  });

  it('setColumnFilters accepts an updater and resetColumnFilters clears the state', () => {
    render(<Grid />);

    act(() => lastStore!.setColumnFilters([{ id: 'name', value: 'Bo' }]));
    expect(lastStore!.columnFilters).toEqual([{ id: 'name', value: 'Bo' }]);

    act(() => lastStore!.setColumnFilters((old) => [...old, { id: 'age', value: 25 }]));
    expect(lastStore!.columnFilters).toHaveLength(2);

    act(() => lastStore!.resetColumnFilters());
    expect(lastStore!.columnFilters).toEqual([]);
  });

  it('getColumnFilterValue reads the current value', () => {
    render(<Grid />);
    expect(lastStore!.getColumnFilterValue('name')).toBeUndefined();
    act(() => lastStore!.setColumnFilter('name', 'Al'));
    expect(lastStore!.getColumnFilterValue('name')).toBe('Al');
  });

  it('calls onColumnFiltersChange when controlled', () => {
    const spy = jest.fn();
    render(<Grid storeOptions={{ columnFilters: [], onColumnFiltersChange: spy }} />);
    act(() => lastStore!.setColumnFilter('name', 'A'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(typeof spy.mock.calls[0][0]).toBe('function');
    expect(spy.mock.calls[0][0]([])).toEqual([{ id: 'name', value: 'A' }]);
  });

  describe('faceted getters', () => {
    it('return empty results when withFaceting is off', () => {
      render(<Grid />);
      expect(lastStore!.getFacetedUniqueValues('name')).toEqual([]);
      expect(lastStore!.getFacetedMinMaxValues('age')).toBeUndefined();
    });

    it('getFacetedUniqueValues flattens arrays, drops nulls, stringifies and sorts', () => {
      render(<Grid storeOptions={{ withFaceting: true }} />);
      expect(lastStore!.getFacetedUniqueValues('tags')).toEqual([
        { value: 'a', label: 'a' },
        { value: 'b', label: 'b' },
        { value: 'c', label: 'c' },
      ]);
      expect(lastStore!.getFacetedUniqueValues('age')).toEqual([
        { value: '25', label: '25' },
        { value: '30', label: '30' },
        { value: '41', label: '41' },
      ]);
      expect(lastStore!.getFacetedUniqueValues('missing')).toEqual([]);
    });

    it('getFacetedMinMaxValues returns the numeric range', () => {
      render(<Grid storeOptions={{ withFaceting: true }} />);
      expect(lastStore!.getFacetedMinMaxValues('age')).toEqual([25, 41]);
      expect(lastStore!.getFacetedMinMaxValues('missing')).toBeUndefined();
    });
  });

  describe('operator utilities', () => {
    it('are exported from the package root', () => {
      expect(stringOperators.map((op) => op.value)).toEqual([
        'contains',
        'equals',
        'startsWith',
        'endsWith',
        'isEmpty',
        'isNotEmpty',
      ]);
      expect(numberOperators).toHaveLength(6);
      expect(booleanOperators).toHaveLength(2);
      expect(typeof createOperatorFilterFn).toBe('function');
    });

    it('filter through filterFn: createOperatorFilterFn(...) with an { operator, value } state', () => {
      const { container } = render(
        <Grid
          columns={[
            {
              accessorKey: 'name',
              header: 'Name',
              filterFn: createOperatorFilterFn(stringOperators),
            },
            {
              accessorKey: 'age',
              header: 'Age',
              filterFn: createOperatorFilterFn(numberOperators),
            },
          ]}
        />
      );

      act(() => lastStore!.setColumnFilter('name', { operator: 'startsWith', value: 'A' }));
      expect(bodyNames(container)).toEqual(['Alice', 'Anna']);

      act(() => lastStore!.setColumnFilter('age', { operator: 'gt', value: 35 }));
      expect(bodyNames(container)).toEqual(['Anna']);

      act(() => lastStore!.resetColumnFilters());
      expect(bodyNames(container)).toEqual(['Alice', 'Bob', 'Anna']);
    });
  });

  it('ignores setColumnFilter for columns with enableColumnFilter: false', () => {
    const { container } = render(
      <Grid
        columns={[
          { accessorKey: 'name', header: 'Name', enableColumnFilter: false },
          { accessorKey: 'age', header: 'Age', enableColumnFilter: true },
        ]}
      />
    );
    act(() => lastStore!.setColumnFilter('name', 'A'));
    expect(lastStore!.columnFilters).toEqual([]);
    expect(bodyNames(container)).toEqual(['Alice', 'Bob', 'Anna']);
  });

  it('keeps TanStack enableColumnFilter defaults (no enableColumnFilter: false override)', () => {
    render(
      <Grid
        columns={[{ accessorKey: 'name', header: 'Name' }]}
        storeOptions={{ withFiltering: true }}
      />
    );
    expect(lastStore!.table.getColumn('name')!.getCanFilter()).toBe(true);
  });
});
