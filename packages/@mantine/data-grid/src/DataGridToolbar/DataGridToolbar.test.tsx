import { act } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import {
  DataGrid,
  DataGridColumnDef,
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
  { accessorKey: 'age', header: 'Age', enableHiding: false },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  children,
  ...props
}: Omit<DataGridProps<Person>, 'store' | 'columns' | 'data'> & {
  storeOptions?: Partial<UseDataGridOptions<Person>>;
}) {
  const store = useDataGrid<Person>({ data, columns, ...storeOptions });
  lastStore = store;
  return (
    <DataGrid store={store} {...props}>
      {children}
    </DataGrid>
  );
}

const toolbar = (container: HTMLElement) => container.querySelector('.mantine-DataGrid-toolbar')!;

describe('@mantine/data-grid/DataGridToolbar', () => {
  describe('zero-config toolbar', () => {
    it('renders global filter, spacer, column visibility toggle and export button', () => {
      const { container } = render(
        <Grid storeOptions={{ withGlobalFilter: true, withColumnVisibility: true }}>
          <DataGrid.Toolbar />
        </Grid>
      );
      const bar = toolbar(container);
      expect(bar.querySelector('.mantine-DataGrid-globalFilter')).toBeInTheDocument();
      expect(bar.querySelector('.mantine-DataGrid-columnVisibilityToggle')).toBeInTheDocument();
      expect(bar.querySelector('.mantine-DataGrid-exportButton')).toBeInTheDocument();
      const classes = Array.from(bar.children).map((child) => child.className);
      expect(classes[0]).toContain('globalFilter');
      expect(classes[classes.length - 2]).toContain('columnVisibilityToggle');
      expect(classes[classes.length - 1]).toContain('exportButton');
    });

    it('omits the global filter and the column toggle when the store has no such feature', () => {
      const { container } = render(
        <Grid>
          <DataGrid.Toolbar />
        </Grid>
      );
      const bar = toolbar(container);
      expect(bar.querySelector('.mantine-DataGrid-globalFilter')).not.toBeInTheDocument();
      expect(bar.querySelector('.mantine-DataGrid-columnVisibilityToggle')).not.toBeInTheDocument();
      expect(bar.querySelector('.mantine-DataGrid-exportButton')).toBeInTheDocument();
    });

    it('replaces the whole default with children', () => {
      const { container } = render(
        <Grid storeOptions={{ withGlobalFilter: true }}>
          <DataGrid.Toolbar>
            <button type="button">custom</button>
          </DataGrid.Toolbar>
        </Grid>
      );
      const bar = toolbar(container);
      expect(bar).toHaveTextContent('custom');
      expect(bar.querySelector('.mantine-DataGrid-globalFilter')).not.toBeInTheDocument();
      expect(bar.querySelector('.mantine-DataGrid-exportButton')).not.toBeInTheDocument();
    });

    it('renders the toolbar before the table inside the root', () => {
      const { container } = render(
        <Grid>
          <DataGrid.Toolbar />
        </Grid>
      );
      const root = container.querySelector('.mantine-DataGrid-root')!;
      expect(root.firstElementChild).toBe(toolbar(container));
    });
  });

  describe('GlobalFilter', () => {
    it('takes the control size from the store and renders a search icon', () => {
      const { container } = render(
        <Grid storeOptions={{ withGlobalFilter: true, size: 'lg' }}>
          <DataGrid.Toolbar>
            <DataGrid.GlobalFilter />
          </DataGrid.Toolbar>
        </Grid>
      );
      const wrapper = container.querySelector('.mantine-DataGrid-globalFilter')!;
      const input = wrapper.querySelector('input')!;
      expect(wrapper.querySelector('.mantine-Input-section svg')).toBeInTheDocument();
      expect(
        (wrapper.querySelector('.mantine-Input-wrapper') as HTMLElement).style.getPropertyValue(
          '--input-height'
        )
      ).toBe('var(--input-height-md)');
      expect(input).toHaveAttribute('placeholder', 'Search...');
    });

    it('writes the global filter through the store', async () => {
      render(
        <Grid storeOptions={{ withGlobalFilter: true }}>
          <DataGrid.Toolbar>
            <DataGrid.GlobalFilter />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.type(screen.getByRole('textbox'), 'Person 1');
      expect(lastStore!.globalFilter).toBe('Person 1');
    });

    it('lets textInputProps override the size', () => {
      const { container } = render(
        <Grid storeOptions={{ withGlobalFilter: true }}>
          <DataGrid.Toolbar>
            <DataGrid.GlobalFilter textInputProps={{ size: 'xl' }} />
          </DataGrid.Toolbar>
        </Grid>
      );
      expect(
        (container.querySelector('.mantine-Input-wrapper') as HTMLElement).style.getPropertyValue(
          '--input-height'
        )
      ).toBe('var(--input-height-xl)');
    });
  });

  it('uses the global filter placeholder as its accessible name', () => {
    render(
      <Grid storeOptions={{ withGlobalFilter: true }}>
        <DataGrid.Toolbar>
          <DataGrid.GlobalFilter placeholder="Search people" />
        </DataGrid.Toolbar>
      </Grid>
    );
    expect(screen.getByRole('textbox', { name: 'Search people' })).toBeInTheDocument();
  });

  describe('ColumnVisibilityToggle', () => {
    it('renders a labeled default button at the control size', () => {
      render(
        <Grid storeOptions={{ withColumnVisibility: true, size: 'md' }}>
          <DataGrid.Toolbar>
            <DataGrid.ColumnVisibilityToggle />
          </DataGrid.Toolbar>
        </Grid>
      );
      const button = screen.getByRole('button', { name: 'Columns' });
      expect(button).toHaveAttribute('data-variant', 'default');
      expect(button.style.getPropertyValue('--button-height')).toBe('var(--button-height-sm)');
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('overrides the label with children and hides non-hideable columns from the menu', async () => {
      render(
        <Grid storeOptions={{ withColumnVisibility: true, withRowSelection: true }}>
          <DataGrid.Toolbar>
            <DataGrid.ColumnVisibilityToggle>Show columns</DataGrid.ColumnVisibilityToggle>
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Show columns' }));
      const items = screen.getAllByRole('menuitemcheckbox').map((item) => item.textContent);
      expect(items).toEqual(['Name']);
    });

    it('toggles column visibility from the menu item', async () => {
      render(
        <Grid storeOptions={{ withColumnVisibility: true }}>
          <DataGrid.Toolbar>
            <DataGrid.ColumnVisibilityToggle />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Columns' }));
      const item = screen.getByRole('menuitemcheckbox', { name: 'Name' });
      expect(item).toHaveAttribute('aria-checked', 'true');

      await userEvent.click(item);
      expect(lastStore!.table.getColumn('name')!.getIsVisible()).toBe(false);
      expect(screen.getByRole('menuitemcheckbox', { name: 'Name' })).toHaveAttribute(
        'aria-checked',
        'false'
      );
    });
  });

  describe('ExportButton', () => {
    let downloads: string[];
    let writeText: jest.Mock;

    beforeEach(() => {
      downloads = [];
      writeText = jest.fn().mockResolvedValue(undefined);
      jest
        .spyOn(HTMLAnchorElement.prototype, 'click')
        .mockImplementation(function (this: HTMLAnchorElement) {
          downloads.push(this.download);
        });
      (URL as any).createObjectURL = jest.fn(() => 'blob:export');
      (URL as any).revokeObjectURL = jest.fn();
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText },
        configurable: true,
      });
      jest.spyOn(window, 'open').mockImplementation(() => null);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('disables a selected-rows export until a row is selected', () => {
      render(
        <Grid storeOptions={{ withRowSelection: true }}>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton formats={['csv']} rows="selected">
              Download selected
            </DataGrid.ExportButton>
          </DataGrid.Toolbar>
        </Grid>
      );
      const button = screen.getByRole('button', { name: 'Download selected' });
      expect(button).toBeDisabled();
      act(() => lastStore!.table.setRowSelection({ '0': true }));
      expect(button).toBeEnabled();
    });

    it('renders a labeled button that opens a menu with the four formats in order', async () => {
      render(
        <Grid>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Export' }));
      expect(screen.getAllByRole('menuitem').map((item) => item.textContent)).toEqual([
        'CSV',
        'Excel',
        'Print',
        'Copy to clipboard',
      ]);
    });

    it('exports csv with the default file name and calls onExport', async () => {
      const onExport = jest.fn();
      render(
        <Grid>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton onExport={onExport} />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Export' }));
      await userEvent.click(screen.getByRole('menuitem', { name: 'CSV' }));
      expect(downloads).toEqual(['data.csv']);
      expect(onExport).toHaveBeenCalledWith('csv');
    });

    it('applies fileName and per-format options', async () => {
      render(
        <Grid>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton fileName="people" excelOptions={{ sheetName: 'People' }} />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Export' }));
      await userEvent.click(screen.getByRole('menuitem', { name: 'Excel' }));
      expect(downloads).toEqual(['people.xls']);
    });

    it('copies all rows to the clipboard by default', async () => {
      render(
        <Grid>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Export' }));
      await userEvent.click(screen.getByRole('menuitem', { name: 'Copy to clipboard' }));
      expect(writeText).toHaveBeenCalledTimes(1);
      expect(writeText.mock.calls[0][0].split('\n')).toHaveLength(15);
    });

    it('renders a plain button for a single format', async () => {
      const onExport = jest.fn();
      render(
        <Grid>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton formats={['csv']} onExport={onExport} />
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Export' }));
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      expect(downloads).toEqual(['data.csv']);
      expect(onExport).toHaveBeenCalledWith('csv');
    });

    it('supports label overrides and children', async () => {
      render(
        <Grid labels={{ exportCsv: 'Download CSV' }}>
          <DataGrid.Toolbar>
            <DataGrid.ExportButton formats={['csv', 'print']}>Download</DataGrid.ExportButton>
          </DataGrid.Toolbar>
        </Grid>
      );
      await userEvent.click(screen.getByRole('button', { name: 'Download' }));
      expect(screen.getAllByRole('menuitem').map((item) => item.textContent)).toEqual([
        'Download CSV',
        'Print',
      ]);
    });
  });

  describe('RowCount', () => {
    it('renders the total and the filtered count', () => {
      const { container } = render(
        <Grid storeOptions={{ withGlobalFilter: true }}>
          <DataGrid.Toolbar>
            <DataGrid.RowCount />
          </DataGrid.Toolbar>
        </Grid>
      );
      const count = container.querySelector('.mantine-DataGrid-rowCount')!;
      expect(count).toHaveTextContent('15 rows');
      act(() => lastStore!.setGlobalFilter('Person 1'));
      expect(count).toHaveTextContent('7 of 15 rows');
    });

    it('never renders the selected count', () => {
      const { container } = render(
        <Grid storeOptions={{ withRowSelection: true }}>
          <DataGrid.Toolbar>
            <DataGrid.RowCount />
          </DataGrid.Toolbar>
        </Grid>
      );
      act(() => lastStore!.table.setRowSelection({ '0': true }));
      expect(container.querySelector('.mantine-DataGrid-rowCount')).toHaveTextContent('15 rows');
    });
  });
});
