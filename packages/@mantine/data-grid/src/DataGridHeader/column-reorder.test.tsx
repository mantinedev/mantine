import { fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
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
}

const data: Person[] = [
  { name: 'Alice', age: 30, city: 'Paris' },
  { name: 'Bob', age: 25, city: 'Berlin' },
];

const columns: DataGridColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name', enableSorting: true },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'city', header: 'City' },
];

let lastStore: DataGridStore<Person> | null = null;

function Grid({
  storeOptions,
  ...props
}: Omit<DataGridProps<Person>, 'store'> & { storeOptions?: Partial<UseDataGridOptions<Person>> }) {
  const store = useDataGrid<Person>({
    data,
    columns,
    withSorting: true,
    withColumnReorder: true,
    ...storeOptions,
  });
  lastStore = store;
  return <DataGrid store={store} {...props} />;
}

type Rects = Record<string, [number, number]>;

function mockRects(rects: Rects) {
  return jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: HTMLElement) {
      const isHeader = this.matches('th, [role="columnheader"]');
      const key = isHeader ? (this.getAttribute('data-utility') ?? this.textContent ?? '') : '';
      const [left, right] = rects[key] ?? [0, 300];
      return {
        left,
        right,
        top: 0,
        bottom: 200,
        width: right - left,
        height: 200,
        x: left,
        y: 0,
        toJSON: () => {},
      } as DOMRect;
    });
}

function getHeader(label: string, selector = 'th') {
  return screen.getByText(label).closest(selector)!;
}

const GHOST = '.mantine-DataGrid-dragGhost';
const INDICATOR = '.mantine-DataGrid-dropIndicator';

function drag(element: Element, from: number, to: number) {
  fireEvent.pointerDown(element, { clientX: from, clientY: 10, button: 0 });
  fireEvent.pointerMove(document, { clientX: to, clientY: 10 });
}

describe('@mantine/data-grid/DataGridHeader column reorder', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does not use HTML5 drag and drop', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('th[draggable]')).not.toBeInTheDocument();
  });

  it('reorders columns with a pointer drag and shows the ghost and drop indicator', () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    const { container } = render(<Grid />);
    const th = getHeader('Name');

    fireEvent.pointerDown(th, { clientX: 50, clientY: 10, button: 0 });
    fireEvent.pointerMove(document, { clientX: 52, clientY: 10 });
    expect(container.querySelector('th[data-dragging]')).not.toBeInTheDocument();

    fireEvent.pointerMove(document, { clientX: 180, clientY: 10 });
    expect(th).toHaveAttribute('data-dragging');
    expect(document.querySelector(GHOST)).toHaveTextContent('Name');
    const indicator = container.querySelector(INDICATOR) as HTMLElement;
    expect(indicator).toBeInTheDocument();
    expect(indicator.style.left).toBe('200px');

    fireEvent.pointerUp(document, { clientX: 180, clientY: 10 });
    expect(lastStore!.columnOrder).toEqual(['age', 'name', 'city']);
    expect(container.querySelector('th[data-dragging]')).not.toBeInTheDocument();
    expect(document.querySelector(GHOST)).not.toBeInTheDocument();
    expect(container.querySelector(INDICATOR)).not.toBeInTheDocument();
    expect(document.body.style.cursor).toBe('');
  });

  it('drops before the target when released on its start half', () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    render(<Grid />);
    drag(getHeader('City'), 250, 120);
    fireEvent.pointerUp(document, { clientX: 120, clientY: 10 });
    expect(lastStore!.columnOrder).toEqual(['name', 'city', 'age']);
  });

  it('keeps plain clicks sorting and suppresses the click after a drag', async () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    const { container } = render(<Grid />);
    await userEvent.click(screen.getByRole('button', { name: 'Name' }));
    expect(container.querySelector('th[data-sort-asc]')).toBeInTheDocument();

    const th = getHeader('Name');
    drag(th, 50, 180);
    fireEvent.pointerUp(th, { clientX: 180, clientY: 10 });
    fireEvent.click(screen.getByRole('button', { name: 'Name' }));
    expect(container.querySelector('th[data-sort-asc]')).toBeInTheDocument();
    expect(container.querySelector('th[data-sort-desc]')).not.toBeInTheDocument();
  });

  it('never targets utility columns', () => {
    mockRects({ select: [0, 30], Name: [30, 130], Age: [130, 230], City: [230, 330] });
    const { container } = render(<Grid storeOptions={{ withRowSelection: true }} />);
    drag(getHeader('Age'), 180, 15);
    expect(container.querySelector(INDICATOR)).not.toBeInTheDocument();
    fireEvent.pointerUp(document, { clientX: 15, clientY: 10 });
    expect(lastStore!.table.getVisibleLeafColumns().map((column) => column.id)).toEqual([
      '__select__',
      'name',
      'age',
      'city',
    ]);
  });

  it('never targets a column in another pin region', () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    const { container } = render(
      <Grid
        storeOptions={{ withColumnPinning: true, columnPinning: { start: ['name'], end: [] } }}
      />
    );
    drag(getHeader('Age'), 150, 40);
    expect(container.querySelector(INDICATOR)).not.toBeInTheDocument();
    fireEvent.pointerUp(document, { clientX: 40, clientY: 10 });
    expect(lastStore!.columnOrder).toEqual([]);
  });

  it('reorders the pinning side when both columns are pinned', () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    render(
      <Grid
        storeOptions={{
          withColumnPinning: true,
          tableOptions: { initialState: { columnPinning: { start: ['name', 'age'], end: [] } } },
        }}
      />
    );
    drag(getHeader('Age'), 150, 20);
    fireEvent.pointerUp(document, { clientX: 20, clientY: 10 });
    expect(lastStore!.columnOrder).toEqual(['age', 'name', 'city']);
    expect(lastStore!.columnPinning.start).toEqual(['age', 'name']);
    expect(lastStore!.table.getVisibleLeafColumns().map((column) => column.id)).toEqual([
      'age',
      'name',
      'city',
    ]);
  });

  it('reorders from the virtual header', () => {
    mockRects({ Name: [0, 100], Age: [100, 200], City: [200, 300] });
    const { container } = render(<Grid virtualize="rows" height={200} />);
    const header = getHeader('Name', '[role="columnheader"]');
    drag(header, 50, 280);
    expect(header).toHaveAttribute('data-dragging');
    expect(container.querySelector(INDICATOR)).toBeInTheDocument();
    fireEvent.pointerUp(document, { clientX: 280, clientY: 10 });
    expect(lastStore!.columnOrder).toEqual(['age', 'city', 'name']);
  });
});
