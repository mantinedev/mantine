import { fireEvent } from '@testing-library/react';
import { DirectionProvider } from '@mantine/core';
import { render } from '@mantine-tests/core';
import { DataGrid, DataGridProps } from '../DataGrid';
import { DataGridColumnDef } from '../DataGrid.types';
import { DataGridStore, useDataGrid, UseDataGridOptions } from '../hooks/use-data-grid';

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
  country: string;
}

const data: Person[] = [
  { name: 'Alice', age: 30, city: 'Paris', country: 'France' },
  { name: 'Bob', age: 25, city: 'Berlin', country: 'Germany' },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name', size: 100 },
  { accessorKey: 'age', header: 'Age', enableResizing: false },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'country', header: 'Country' },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<Person>> }) {
  const store = useDataGrid<Person>({ data, columns, withColumnResizing: true, ...storeOptions });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

const HANDLE = '.mantine-DataGrid-resizeHandle';
const GUIDE = '.mantine-DataGrid-resizeGuide';

describe('@mantine/data-grid/DataGridHeader column resize', () => {
  it('renders one handle per resizable boundary', () => {
    const { container } = render(<Grid />);
    const headers = container.querySelectorAll('thead th');
    expect(headers[0].querySelector(HANDLE)).toBeInTheDocument();
    expect(headers[1].querySelector(HANDLE)).not.toBeInTheDocument();
    expect(headers[2].querySelector(HANDLE)).toBeInTheDocument();
    expect(headers[3].querySelector(HANDLE)).not.toBeInTheDocument();
  });

  it('renders the same handles in the virtual header', () => {
    const { container } = render(<Grid virtualize="rows" height={200} />);
    const headers = container.querySelectorAll('[role="columnheader"]');
    expect(headers[0].querySelector(HANDLE)).toBeInTheDocument();
    expect(headers[1].querySelector(HANDLE)).not.toBeInTheDocument();
    expect(headers[2].querySelector(HANDLE)).toBeInTheDocument();
    expect(headers[3].querySelector(HANDLE)).not.toBeInTheDocument();
  });

  it('shows the guide while resizing and commits the size on release', () => {
    const { container } = render(<Grid />);
    const handle = container.querySelector(HANDLE)!;
    expect(container.querySelector(GUIDE)).not.toBeInTheDocument();

    fireEvent.pointerDown(handle, { clientX: 100, button: 0 });
    expect(container.querySelector('th[data-resizing]')).toHaveTextContent('Name');
    expect(container.querySelector(GUIDE)).toBeInTheDocument();

    fireEvent.mouseMove(document, { clientX: 120 });
    fireEvent.mouseUp(document, { clientX: 120 });
    expect(container.querySelector(GUIDE)).not.toBeInTheDocument();
    expect(lastStore!.columnSizing.name).toBe(120);
  });

  it('clamps the resize guide to the column minSize and maxSize', () => {
    const { container } = render(
      <Grid
        storeOptions={{
          columns: [
            { accessorKey: 'name', header: 'Name', size: 100, minSize: 80, maxSize: 130 },
            ...columns.slice(1),
          ],
        }}
      />
    );
    fireEvent.pointerDown(container.querySelector(HANDLE)!, { clientX: 100, button: 0 });
    fireEvent.mouseMove(document, { clientX: 200 });
    expect((container.querySelector(GUIDE) as HTMLElement).style.left).toBe('30px');
    fireEvent.mouseUp(document, { clientX: 200 });
    expect(lastStore!.table.getColumn('name')!.getSize()).toBe(130);

    fireEvent.pointerDown(container.querySelector(HANDLE)!, { clientX: 100, button: 0 });
    fireEvent.mouseMove(document, { clientX: 1 });
    expect((container.querySelector(GUIDE) as HTMLElement).style.left).toBe('-50px');
    fireEvent.mouseUp(document, { clientX: 1 });
    expect(lastStore!.table.getColumn('name')!.getSize()).toBe(80);
  });

  it('autosizes the column on handle double-click', () => {
    const { container } = render(<Grid />);
    expect(lastStore!.columnSizing.name).toBeUndefined();
    fireEvent.doubleClick(container.querySelector(HANDLE)!);
    expect(lastStore!.columnSizing.name).toBeDefined();
  });

  it('autosizes to the measured content width instead of the current cell width', () => {
    const spy = jest
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockImplementation(function (this: HTMLElement) {
        const width = this.style.width === 'auto' ? 80 : 400;
        return { width, height: 20, top: 0, left: 0, right: width, bottom: 20 } as DOMRect;
      });

    const { container } = render(<Grid />);
    fireEvent.doubleClick(container.querySelector(HANDLE)!);
    expect(lastStore!.columnSizing.name).toBe(80);
    fireEvent.doubleClick(container.querySelector(HANDLE)!);
    expect(lastStore!.columnSizing.name).toBe(80);
    expect(container.querySelectorAll('table')).toHaveLength(1);
    spy.mockRestore();
  });

  it('defaults columnResizeDirection to the DirectionProvider direction', () => {
    render(
      <DirectionProvider initialDirection="rtl">
        <Grid />
      </DirectionProvider>
    );
    expect(lastStore!.table.options.columnResizeDirection).toBe('rtl');
  });

  it('keeps an explicit columnResizeDirection', () => {
    render(
      <DirectionProvider initialDirection="rtl">
        <Grid storeOptions={{ columnResizeDirection: 'ltr' }} />
      </DirectionProvider>
    );
    expect(lastStore!.table.options.columnResizeDirection).toBe('ltr');
  });

  it('follows the pointer when columnResizeDirection overrides the layout direction', () => {
    const { container } = render(
      <DirectionProvider initialDirection="rtl">
        <Grid storeOptions={{ columnResizeDirection: 'ltr' }} />
      </DirectionProvider>
    );
    fireEvent.pointerDown(container.querySelector(HANDLE)!, { clientX: 100, button: 0 });
    fireEvent.mouseMove(document, { clientX: 120 });
    const guide = container.querySelector(GUIDE) as HTMLElement;
    expect(guide.style.left).toBe('20px');
    fireEvent.mouseUp(document, { clientX: 120 });
  });
});
