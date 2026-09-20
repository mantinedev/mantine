import { render, screen } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';
import { mockVirtualViewport } from '../virtual-test-utils';

interface Node {
  id: string;
  name: string;
  children?: Node[];
}

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'id', header: 'Id' },
];

const data: Node[] = [
  {
    id: 'a',
    name: 'A',
    children: [
      { id: 'a1', name: 'A1' },
      {
        id: 'a2',
        name: 'A2',
        children: [
          { id: 'a2a', name: 'A2a' },
          { id: 'a2b', name: 'A2b' },
        ],
      },
    ],
  },
  { id: 'b', name: 'B' },
];

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Node>, 'store'> & {
  storeOptions?: Partial<UseDataGridOptions<Node>>;
}) {
  const store = useDataGrid<Node>({
    data,
    columns,
    getRowId: (row) => row.id,
    getSubRows: (row) => row.children,
    expanded: true,
    ...storeOptions,
  });
  return <DataGrid store={store} {...props} />;
}

const rowById = (container: HTMLElement, id: string) =>
  container.querySelector<HTMLElement>(`[data-row-id="${id}"]`)!;
const guidesOf = (row: HTMLElement) =>
  Array.from(row.querySelectorAll('[data-tree-guide]')).map((guide) =>
    guide.getAttribute('data-line')
  );

describe('@mantine/data-grid/tree-rows', () => {
  let restoreViewport: () => void;

  beforeEach(() => {
    restoreViewport = mockVirtualViewport();
  });

  afterEach(() => {
    restoreViewport();
  });

  it('marks tree rows with depth and leaf attributes', () => {
    const { container } = render(<Grid />);
    expect(rowById(container, 'a')).toHaveAttribute('data-tree-row');
    expect(rowById(container, 'a')).toHaveAttribute('data-depth', '0');
    expect(rowById(container, 'a')).not.toHaveAttribute('data-leaf');
    expect(rowById(container, 'a2b')).toHaveAttribute('data-depth', '2');
    expect(rowById(container, 'a2b')).toHaveAttribute('data-leaf');
    expect(container.querySelector('.mantine-DataGrid-root')).toHaveAttribute('data-tree-lines');
  });

  it('draws per-ancestor guides that close at the last sibling', () => {
    const { container } = render(<Grid />);
    expect(guidesOf(rowById(container, 'a'))).toEqual([]);
    expect(guidesOf(rowById(container, 'a1'))).toEqual(['branch']);
    expect(guidesOf(rowById(container, 'a2'))).toEqual(['end']);
    expect(guidesOf(rowById(container, 'a2a'))).toEqual(['none', 'branch']);
    expect(guidesOf(rowById(container, 'a2b'))).toEqual(['none', 'end']);
  });

  it('closes guides from the filtered sub rows', () => {
    const { container } = render(
      <Grid
        storeOptions={{ globalFilter: 'A2a', withGlobalFilter: true, filterFromLeafRows: true }}
      />
    );
    expect(guidesOf(rowById(container, 'a2a'))).toEqual(['none', 'end']);
  });

  it('keeps the tree in the first visible data column with a label wrapper and reserved chevron slot', () => {
    const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
    const leaf = rowById(container, 'a1');
    const cells = leaf.querySelectorAll('td');
    expect(cells[0]).toHaveAttribute('data-utility', 'select');
    const indent = cells[1].querySelector('.mantine-DataGrid-treeIndent') as HTMLElement;
    expect(indent).toBeInTheDocument();
    expect(indent.style.getPropertyValue('--dg-tree-depth')).toBe('1');
    expect(indent.querySelector('.mantine-DataGrid-treeLabel')).toHaveTextContent('A1');
    expect(indent.querySelector('.mantine-DataGrid-treeToggle')).toHaveAttribute('data-hidden');
    expect(cells[2].querySelector('.mantine-DataGrid-treeIndent')).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Collapse row' })).toHaveLength(2);
  });

  it('renders plain indent without guides when withTreeLines is false', () => {
    const { container } = render(<Grid withTreeLines={false} />);
    expect(container.querySelector('.mantine-DataGrid-root')).not.toHaveAttribute(
      'data-tree-lines'
    );
    expect(container.querySelector('[data-tree-guide]')).not.toBeInTheDocument();
    expect(rowById(container, 'a2b').querySelector('.mantine-DataGrid-treeIndent')).toHaveStyle({
      '--dg-tree-depth': '2',
    });
  });

  it('renders the same tree cell in the virtual body', () => {
    const { container } = render(<Grid virtualize="rows" height={300} />);
    const row = rowById(container, 'a2a');
    expect(row).toHaveAttribute('role', 'row');
    expect(row).toHaveAttribute('data-tree-row');
    expect(row).toHaveAttribute('data-depth', '2');
    expect(guidesOf(row)).toEqual(['none', 'branch']);
    expect(row.querySelector('.mantine-DataGrid-treeLabel')).toHaveTextContent('A2a');
  });
});
