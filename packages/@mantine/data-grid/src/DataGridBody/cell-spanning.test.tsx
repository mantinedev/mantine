import { act } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { DataGrid } from '../DataGrid';
import { DataGridStore, useDataGrid } from '../hooks';

interface Person {
  id: string;
  name: string;
  team: string;
}

const data: Person[] = [
  { id: 'a', name: 'Alice', team: 'Red' },
  { id: 'b', name: 'Bob', team: 'Blue' },
  { id: 'c', name: 'Carol', team: 'Red' },
  { id: 'd', name: 'Dana', team: 'Blue' },
];

const columns = [
  { accessorKey: 'team', header: 'Team', spanRows: true, enableSorting: true },
  { accessorKey: 'name', header: 'Name' },
];

let store: DataGridStore<Person> | null = null;

function Grid() {
  store = useDataGrid<Person>({
    data,
    columns,
    getRowId: (row) => row.id,
    withSorting: true,
  });
  return <DataGrid store={store} />;
}

function getTeamCells(container: HTMLElement) {
  return Array.from(container.querySelectorAll('tbody tr[data-row-id]')).map((row) => {
    const cell = row.querySelector('[data-column-id="team"]');
    return cell
      ? `${row.getAttribute('data-row-id')}:${cell.getAttribute('rowspan') ?? '1'}`
      : null;
  });
}

describe('@mantine/data-grid/cell-spanning', () => {
  afterEach(() => {
    store = null;
  });

  it('updates row spans when sorting changes row adjacency', () => {
    const { container } = render(<Grid />);
    expect(getTeamCells(container)).toEqual(['a:1', 'b:1', 'c:1', 'd:1']);

    act(() => store!.table.setSorting([{ id: 'team', desc: false }]));
    expect(getTeamCells(container)).toEqual(['b:2', null, 'a:2', null]);

    act(() => store!.table.setSorting([]));
    expect(getTeamCells(container)).toEqual(['a:1', 'b:1', 'c:1', 'd:1']);
  });
});
