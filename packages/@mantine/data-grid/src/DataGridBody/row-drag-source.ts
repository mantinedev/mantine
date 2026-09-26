const ROW_DRAG_MIME_TYPE = 'application/x-mantine-data-grid-row';

interface ActiveRowDrag {
  store: object;
  rowId: string;
  visibleOrder: { rows: object; order: string[] } | null;
}

let activeRowDrag: ActiveRowDrag | null = null;

function isActiveDragOf(store: object) {
  return activeRowDrag !== null && activeRowDrag.store === store;
}

export function startRowDrag(store: object, rowId: string, dataTransfer: DataTransfer) {
  activeRowDrag = { store, rowId, visibleOrder: null };
  dataTransfer.effectAllowed = 'move';
  dataTransfer.setData(ROW_DRAG_MIME_TYPE, rowId);
  dataTransfer.setData('text/plain', rowId);
}

export function endRowDrag() {
  activeRowDrag = null;
}

export function releaseRowDrag(store: object, rowId: string) {
  if (isActiveDragOf(store) && activeRowDrag!.rowId === rowId) {
    activeRowDrag = null;
  }
}

export function getRowDragSource(store: object, dataTransfer: DataTransfer): string | null {
  if (!isActiveDragOf(store)) {
    return null;
  }

  return Array.from(dataTransfer.types).includes(ROW_DRAG_MIME_TYPE) ? activeRowDrag!.rowId : null;
}

export function getRowDragVisibleOrder(store: object, rows: object, compute: () => string[]) {
  if (!isActiveDragOf(store)) {
    return compute();
  }

  if (activeRowDrag!.visibleOrder?.rows !== rows) {
    activeRowDrag!.visibleOrder = { rows, order: compute() };
  }

  return activeRowDrag!.visibleOrder!.order;
}
