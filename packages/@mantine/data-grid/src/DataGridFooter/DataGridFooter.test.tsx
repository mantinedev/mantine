import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import {
  DataGrid,
  DataGridColumnDef,
  DataGridFooterProps,
  DataGridProps,
  DataGridStore,
  useDataGrid,
  UseDataGridOptions,
} from '../index';

interface Person {
  name: string;
  age: number;
}

const data: Person[] = Array.from({ length: 15 }, (_, index) => ({
  name: `Person ${index + 1}`,
  age: 20 + index,
}));

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age', aggregationFn: 'sum' },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  footerProps,
  gridData = data,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns' | 'data'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
  footerProps?: DataGridFooterProps;
  gridData?: Person[];
}) {
  const store = useDataGrid<Person>({ data: gridData, columns, ...storeOptions });
  lastStore = store;
  return (
    <DataGrid store={store} {...props}>
      <DataGrid.Footer {...footerProps} />
    </DataGrid>
  );
}

const status = (container: HTMLElement) =>
  container.querySelector('.mantine-DataGrid-footerStatus')?.textContent;

describe('@mantine/data-grid/DataGridFooter', () => {
  it('renames the tfoot compound to DataGrid.Tfoot and removes Pagination and StatusBar', () => {
    expect(DataGrid.Tfoot).toBeDefined();
    expect((DataGrid as any).Pagination).toBeUndefined();
    expect((DataGrid as any).StatusBar).toBeUndefined();
    const { container } = render(<Grid />);
    expect(container.querySelector('tfoot')).toBeInTheDocument();
  });

  it('renders as a direct child of the root after the table with data attributes', () => {
    const { container } = render(<Grid storeOptions={{ pageSize: 5 }} />);
    const root = container.querySelector('.mantine-DataGrid-root')!;
    const footer = root.querySelector(':scope > .mantine-DataGrid-footer')!;
    expect(footer).toBeInTheDocument();
    expect(footer).toBe(root.lastElementChild);
    expect(footer).toHaveAttribute('data-status-format', 'compact');
    expect(footer).toHaveAttribute('data-pagination', 'pages');
  });

  describe('status text', () => {
    it('renders the compact range with pagination', () => {
      const { container } = render(<Grid storeOptions={{ pageSize: 10 }} />);
      expect(status(container)).toBe('1–10 of 15');
    });

    it('renders the long range with pagination', () => {
      const { container } = render(
        <Grid storeOptions={{ pageSize: 10 }} footerProps={{ statusFormat: 'long' }} />
      );
      expect(status(container)).toBe('Showing 1–10 of 15');
    });

    it('counts rows continuously across pages', () => {
      const { container } = render(<Grid storeOptions={{ pageSize: 10 }} />);
      act(() => lastStore!.table.nextPage());
      expect(status(container)).toBe('11–15 of 15');
    });

    it('renders the row count without pagination', () => {
      const { container } = render(<Grid />);
      expect(status(container)).toBe('15 rows');
      expect(container.querySelector('.mantine-DataGrid-footer')).toHaveAttribute(
        'data-pagination',
        'none'
      );
    });

    it('renders 0 rows for an empty grid', () => {
      const { container } = render(<Grid gridData={[]} storeOptions={{ pageSize: 10 }} />);
      expect(status(container)).toBe('0 rows');
    });

    it('appends the selected count only in the long format with row selection', () => {
      const { container, rerender } = render(
        <Grid
          storeOptions={{ pageSize: 10, withRowSelection: true }}
          footerProps={{ statusFormat: 'long' }}
        />
      );
      expect(status(container)).toBe('Showing 1–10 of 15');

      act(() => lastStore!.table.setRowSelection({ '0': true, '3': true }));
      expect(status(container)).toBe('Showing 1–10 of 15 · 2 selected');

      rerender(
        <>
          <Grid
            storeOptions={{ pageSize: 10, withRowSelection: true }}
            footerProps={{ statusFormat: 'compact' }}
          />
        </>
      );
      act(() => lastStore!.table.setRowSelection({ '0': true, '3': true }));
      expect(status(container)).toBe('1–10 of 15');
    });

    it('ignores false entries when counting selected rows', () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true }} footerProps={{ statusFormat: 'long' }} />
      );
      act(() => lastStore!.table.setRowSelection({ '1': false, '2': true } as any));
      expect(status(container)).toBe('15 rows · 1 selected');
      act(() => lastStore!.table.setRowSelection({ '1': false } as any));
      expect(status(container)).toBe('15 rows');
    });

    it('renders the row count with the selected count in the long format without pagination', () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true }} footerProps={{ statusFormat: 'long' }} />
      );
      act(() => lastStore!.table.setRowSelection({ '1': true }));
      expect(status(container)).toBe('15 rows · 1 selected');
    });

    it('falls back to the page label under manualPagination without rowCount', () => {
      const { container, rerender } = render(
        <Grid storeOptions={{ manualPagination: true, pageCount: 3, pageSize: 5 }} />
      );
      expect(status(container)).toBe('Page 1 of 3');

      rerender(
        <>
          <Grid
            storeOptions={{ manualPagination: true, pageCount: 3, pageSize: 5 }}
            footerProps={{ statusFormat: 'long' }}
          />
        </>
      );
      expect(status(container)).toBe('Page 1 of 3');
    });

    it('uses rowCount for the range under manualPagination', () => {
      const { container } = render(
        <Grid storeOptions={{ manualPagination: true, rowCount: 42, pageSize: 5 }} />
      );
      expect(status(container)).toBe('1–5 of 42');
    });

    it('supports label overrides', () => {
      const { container } = render(
        <Grid
          storeOptions={{ pageSize: 10 }}
          labels={{ footerRange: '{from} to {to} / {total}' }}
        />
      );
      expect(status(container)).toBe('1 to 10 / 15');
    });
  });

  describe('pagination', () => {
    it('renders page buttons and the page size select by default', () => {
      const { container } = render(<Grid storeOptions={{ pageSize: 5 }} />);
      expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
      expect(screen.getByRole('combobox', { name: 'Rows per page' })).toHaveValue('5 / page');
      expect(container.querySelector('.mantine-DataGrid-footerPageSize')).toBeInTheDocument();
      expect(container.querySelector('.mantine-DataGrid-footerPagination')).toBeInTheDocument();
    });

    it('labels the previous and next controls', () => {
      render(<Grid storeOptions={{ pageSize: 5 }} />);
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
    });

    it('navigates pages through the page buttons', async () => {
      render(<Grid storeOptions={{ pageSize: 5 }} />);
      await userEvent.click(screen.getByRole('button', { name: '2' }));
      expect(lastStore!.pagination.pageIndex).toBe(1);
    });

    it('renders the page label and arrows only in arrows mode', () => {
      const { container } = render(
        <Grid storeOptions={{ pageSize: 5 }} footerProps={{ pagination: 'arrows' }} />
      );
      expect(container.querySelector('.mantine-DataGrid-footerPagination')).toHaveTextContent(
        'Page 1 of 3'
      );
      expect(screen.queryByRole('button', { name: '2' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
      expect(container.querySelector('.mantine-DataGrid-footer')).toHaveAttribute(
        'data-pagination',
        'arrows'
      );
    });

    it('renders the status only in none mode', () => {
      const { container } = render(
        <Grid storeOptions={{ pageSize: 5 }} footerProps={{ pagination: 'none' }} />
      );
      expect(status(container)).toBe('1–5 of 15');
      expect(container.querySelector('.mantine-DataGrid-footerPagination')).not.toBeInTheDocument();
      expect(container.querySelector('.mantine-DataGrid-footerPageSize')).not.toBeInTheDocument();
    });

    it('resolves pagination to none without withPagination', () => {
      const { container } = render(<Grid footerProps={{ pagination: 'pages' }} />);
      expect(container.querySelector('.mantine-DataGrid-footer')).toHaveAttribute(
        'data-pagination',
        'none'
      );
      expect(container.querySelector('.mantine-DataGrid-footerPagination')).not.toBeInTheDocument();
    });

    it('hides the page size select with withPageSize={false}', () => {
      const { container } = render(
        <Grid storeOptions={{ pageSize: 5 }} footerProps={{ withPageSize: false }} />
      );
      expect(container.querySelector('.mantine-DataGrid-footerPageSize')).not.toBeInTheDocument();
      expect(container.querySelector('.mantine-DataGrid-footerPagination')).toBeInTheDocument();
    });

    it('adds the current page size to the options and applies a change', async () => {
      render(<Grid storeOptions={{ pageSize: 7 }} footerProps={{ pageSizeOptions: [5, 10] }} />);
      const select = screen.getByRole('combobox', { name: 'Rows per page' });
      expect(select).toHaveValue('7 / page');
      await userEvent.click(select);
      expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
        '5 / page',
        '7 / page',
        '10 / page',
      ]);
      await userEvent.click(screen.getByRole('option', { name: '10 / page' }));
      expect(lastStore!.pagination.pageSize).toBe(10);
    });
  });

  it('replaces the default content with children', () => {
    const { container } = render(
      <Grid storeOptions={{ pageSize: 5 }} footerProps={{ children: <span>custom</span> }} />
    );
    expect(container.querySelector('.mantine-DataGrid-footer')).toHaveTextContent('custom');
    expect(container.querySelector('.mantine-DataGrid-footerStatus')).not.toBeInTheDocument();
    expect(container.querySelector('.mantine-DataGrid-footerPagination')).not.toBeInTheDocument();
  });
});
