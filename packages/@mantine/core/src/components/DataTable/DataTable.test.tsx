import { ColumnDef } from '@tanstack/react-table';
import { render, screen, tests } from '@mantine-tests/core';
import { DataTable, DataTableProps, DataTableStylesNames } from './DataTable';

interface TestPerson {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

const testColumns: ColumnDef<TestPerson>[] = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'age', header: 'Age' },
];

const testData: TestPerson[] = [
  { id: '1', firstName: 'Alice', lastName: 'Smith', age: 30 },
  { id: '2', firstName: 'Bob', lastName: 'Jones', age: 25 },
  { id: '3', firstName: 'Charlie', lastName: 'Brown', age: 35 },
  { id: '4', firstName: 'Diana', lastName: 'Prince', age: 28 },
  { id: '5', firstName: 'Eve', lastName: 'Davis', age: 42 },
];

const defaultProps: DataTableProps<TestPerson> = {
  columns: testColumns,
  data: testData,
};

describe('@mantine/core/DataTable', () => {
  tests.itSupportsSystemProps<DataTableProps<TestPerson>, DataTableStylesNames>({
    component: DataTable,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/DataTable',
    stylesApiSelectors: [
      'root',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'virtualScrollContainer',
    ],
  });

  it('renders data rows', () => {
    render(<DataTable {...defaultProps} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<DataTable {...defaultProps} />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(6); // 5 data + 1 header
  });

  it('renders empty state when data is empty', () => {
    render(<DataTable {...defaultProps} data={[]} />);
    expect(screen.getByText('No data found')).toBeInTheDocument();
  });

  it('renders custom empty state', () => {
    render(<DataTable {...defaultProps} data={[]} emptyState="Nothing here" />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('renders loading overlay when loading is true', () => {
    const { container } = render(<DataTable {...defaultProps} loading />);
    expect(container.querySelector('.mantine-DataTable-loadingOverlay')).toBeInTheDocument();
  });

  it('does not render loading overlay when loading is false', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    expect(container.querySelector('.mantine-DataTable-loadingOverlay')).not.toBeInTheDocument();
  });

  it('renders custom loader', () => {
    render(<DataTable {...defaultProps} loading loader={<div data-testid="custom-loader" />} />);
    expect(screen.getByTestId('custom-loader')).toBeInTheDocument();
  });

  it('sets data-virtualized attribute when withVirtualization is true', () => {
    const { container } = render(
      <DataTable {...defaultProps} withVirtualization virtualHeight={400} />
    );
    expect(container.querySelector('[data-virtualized]')).toBeInTheDocument();
  });

  it('does not set data-virtualized attribute by default', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    expect(container.querySelector('[data-virtualized]')).not.toBeInTheDocument();
  });

  it('does not render pagination when virtualization is enabled', () => {
    const largeData = Array.from({ length: 50 }, (_, i) => ({
      id: i.toString(),
      firstName: `First ${i}`,
      lastName: `Last ${i}`,
      age: i,
    }));

    const { container } = render(
      <DataTable {...defaultProps} data={largeData} withVirtualization virtualHeight={400} />
    );
    expect(container.querySelector('.mantine-Pagination-root')).not.toBeInTheDocument();
  });

  it('renders pagination when data exceeds page size', () => {
    const largeData = Array.from({ length: 25 }, (_, i) => ({
      id: i.toString(),
      firstName: `First ${i}`,
      lastName: `Last ${i}`,
      age: i,
    }));

    const { container } = render(<DataTable {...defaultProps} data={largeData} />);
    expect(container.querySelector('.mantine-Pagination-root')).toBeInTheDocument();
  });

  it('does not render pagination when data fits in one page', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    expect(container.querySelector('.mantine-Pagination-root')).not.toBeInTheDocument();
  });

  it('renders selection checkboxes when withRowSelection is true', () => {
    const { container } = render(<DataTable {...defaultProps} withRowSelection withSelectAll />);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes).toHaveLength(6); // 1 header + 5 rows
  });

  it('does not render selection checkboxes by default', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes).toHaveLength(0);
  });

  it('renders row checkboxes without header checkbox when withSelectAll is false', () => {
    const { container } = render(
      <DataTable {...defaultProps} withRowSelection withSelectAll={false} />
    );
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes).toHaveLength(5);
  });

  it('passes tableProps to the underlying Table component', () => {
    const { container } = render(
      <DataTable {...defaultProps} tableProps={{ withTableBorder: true }} />
    );
    expect(container.querySelector('[data-with-table-border]')).toBeInTheDocument();
  });

  it('renders sort icons for sortable columns', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    const sortIcons = container.querySelectorAll('.mantine-DataTable-sortIcon');
    expect(sortIcons.length).toBeGreaterThan(0);
  });

  it('sets data-clickable on rows when onRowClick is provided', () => {
    const { container } = render(<DataTable {...defaultProps} onRowClick={() => {}} />);
    const clickableRows = container.querySelectorAll('tbody [data-clickable]');
    expect(clickableRows.length).toBe(5);
  });

  it('does not set data-clickable on rows by default', () => {
    const { container } = render(<DataTable {...defaultProps} />);
    const clickableRows = container.querySelectorAll('tbody [data-clickable]');
    expect(clickableRows.length).toBe(0);
  });

  it('passes highlightOnHover to Table component', () => {
    const { container } = render(<DataTable {...defaultProps} highlightOnHover />);
    const hoverRows = container.querySelectorAll('[data-hover]');
    expect(hoverRows.length).toBeGreaterThan(0);
  });

  it('passes striped to Table component', () => {
    const { container } = render(<DataTable {...defaultProps} striped="odd" />);
    const stripedRows = container.querySelectorAll('[data-striped]');
    expect(stripedRows.length).toBeGreaterThan(0);
  });

  it('hides columns when columnVisibility is set', () => {
    render(<DataTable {...defaultProps} columnVisibility={{ age: false }} />);
    expect(screen.queryByText('Age')).not.toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
  });

  it('renders page size selector when withPageSizeSelector is true', () => {
    const largeData = Array.from({ length: 25 }, (_, i) => ({
      id: i.toString(),
      firstName: `First ${i}`,
      lastName: `Last ${i}`,
      age: i,
    }));

    const { container } = render(
      <DataTable {...defaultProps} data={largeData} withPageSizeSelector />
    );
    expect(screen.getByText('Rows per page:')).toBeInTheDocument();
    expect(container.querySelector('select')).toBeInTheDocument();
  });

  it('renders records info when withRecordsInfo is true', () => {
    render(<DataTable {...defaultProps} withRecordsInfo />);
    expect(screen.getByText(/Showing 1–5 of 5 records/)).toBeInTheDocument();
  });

  it('renders custom records info text', () => {
    render(
      <DataTable
        {...defaultProps}
        withRecordsInfo
        recordsInfoText={({ from, to, total }) => `${from}-${to} z ${total}`}
      />
    );
    expect(screen.getByText('1-5 z 5')).toBeInTheDocument();
  });
});
