type RowScroller = (index: number) => void;

const rowScrollers = new WeakMap<object, RowScroller>();

export function registerRowScroller(store: object, scroller: RowScroller) {
  rowScrollers.set(store, scroller);
  return () => {
    if (rowScrollers.get(store) === scroller) {
      rowScrollers.delete(store);
    }
  };
}

export function getRowScroller(store: object): RowScroller | undefined {
  return rowScrollers.get(store);
}
