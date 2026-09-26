import { endRowDrag, getRowDragVisibleOrder, startRowDrag } from './row-drag-source';

function createDataTransfer() {
  return { setData: jest.fn(), effectAllowed: 'none', types: [] } as unknown as DataTransfer;
}

describe('@mantine/data-grid/getRowDragVisibleOrder', () => {
  afterEach(() => endRowDrag());

  it('computes the visible order once per drag for the same row model', () => {
    const store = {};
    const rows = {};
    const compute = jest.fn(() => ['a', 'b']);
    startRowDrag(store, 'a', createDataTransfer());

    expect(getRowDragVisibleOrder(store, rows, compute)).toEqual(['a', 'b']);
    expect(getRowDragVisibleOrder(store, rows, compute)).toEqual(['a', 'b']);
    expect(compute).toHaveBeenCalledTimes(1);
  });

  it('recomputes the visible order when the row model changes mid-drag', () => {
    const store = {};
    const compute = jest.fn(() => ['a', 'b']);
    startRowDrag(store, 'a', createDataTransfer());

    getRowDragVisibleOrder(store, {}, compute);
    getRowDragVisibleOrder(store, {}, compute);
    expect(compute).toHaveBeenCalledTimes(2);
  });

  it('does not reuse the order of a previous drag or of another grid', () => {
    const store = {};
    const rows = {};
    const compute = jest.fn(() => ['a', 'b']);
    startRowDrag(store, 'a', createDataTransfer());
    getRowDragVisibleOrder(store, rows, compute);
    getRowDragVisibleOrder({}, rows, compute);
    endRowDrag();
    getRowDragVisibleOrder(store, rows, compute);
    startRowDrag(store, 'a', createDataTransfer());
    getRowDragVisibleOrder(store, rows, compute);
    expect(compute).toHaveBeenCalledTimes(4);
  });
});
