export const GRID_ELEMENT_SELECTOR = 'table, [role="grid"]';

export const SCROLL_CONTAINER_SELECTOR = '[data-dg-scroll]';

export const EDITING_ROW_SELECTOR = '[data-editing][data-row-id]';

const GRID_HEADER_SELECTOR = 'thead, [data-virtual-thead]';

export const PINNED_SECTION_SELECTOR = 'tbody[data-pinned], [data-list-pinned]';

export const TOP_PINNED_SECTION_SELECTOR = 'tbody[data-pinned="top"], [data-list-pinned="top"]';

export const BOTTOM_PINNED_SECTION_SELECTOR =
  'tbody[data-pinned="bottom"], [data-list-pinned="bottom"]';

function isOwnedBy(container: HTMLElement, element: Element) {
  const owner = element.closest(SCROLL_CONTAINER_SELECTOR);
  return owner === null || owner === container;
}

export function ownsElement(container: HTMLElement, element: Element) {
  return container.contains(element) && isOwnedBy(container, element);
}

export function queryOwned(container: HTMLElement, selector: string): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter((element) =>
    isOwnedBy(container, element)
  );
}

export function getOwnedGrid(container: HTMLElement | null): HTMLElement | null {
  return (container ? queryOwned(container, GRID_ELEMENT_SELECTOR)[0] : null) ?? null;
}

export function findOwnedRow(
  container: HTMLElement,
  rowId: string,
  selector = '[data-row-id]'
): HTMLElement | undefined {
  return queryOwned(container, selector).find(
    (element) => element.getAttribute('data-row-id') === rowId
  );
}

export function getPinnedSection(container: HTMLElement, row: HTMLElement | undefined) {
  const section = row?.closest<HTMLElement>(PINNED_SECTION_SELECTOR);
  return section && container.contains(section) ? section : null;
}

export function getLeadingElements(container: HTMLElement): HTMLElement[] {
  return [
    queryOwned(container, GRID_HEADER_SELECTOR)[0],
    queryOwned(container, TOP_PINNED_SECTION_SELECTOR)[0],
  ].filter((element): element is HTMLElement => element !== undefined);
}

function getLeadingOffsets(container: HTMLElement) {
  return getLeadingElements(container).reduce(
    (offsets, element) => {
      const height = element.getBoundingClientRect().height;
      const style = window.getComputedStyle(element);
      const stickyTop = style.position === 'sticky' ? parseFloat(style.top) || 0 : null;
      return {
        content: offsets.content + height,
        sticky: stickyTop === null ? offsets.sticky : Math.max(offsets.sticky, stickyTop + height),
      };
    },
    { content: 0, sticky: 0 }
  );
}

function isInStickySection(container: HTMLElement, row: HTMLElement) {
  const section = getPinnedSection(container, row);
  return section !== null && window.getComputedStyle(section).position === 'sticky';
}

export function getRowScrollTop(
  container: HTMLElement,
  index: number,
  rowId: string | undefined,
  fallbackRowHeight: number
): number | null {
  const offsets = getLeadingOffsets(container);
  const row = rowId === undefined ? undefined : findOwnedRow(container, rowId);
  if (!row) {
    return Math.max(0, offsets.content + index * fallbackRowHeight - offsets.sticky);
  }

  if (isInStickySection(container, row)) {
    return null;
  }

  const offset = row.getBoundingClientRect().top - container.getBoundingClientRect().top;
  return container.scrollTop + offset - offsets.sticky;
}

function getLeafHeaderCell(container: HTMLElement, index: number): HTMLElement | undefined {
  const virtualCell = queryOwned(
    container,
    `[data-virtual-thead] > [role="row"]:last-child [role="columnheader"][aria-colindex="${index + 1}"]`
  )[0];

  if (virtualCell) {
    return virtualCell;
  }

  return queryOwned(container, 'thead > tr:last-child > th')[index];
}

interface ColumnScrollOffsets {
  offset: number | undefined;
  stickyStart: number;
}

export function getColumnScrollLeft(
  container: HTMLElement,
  index: number,
  { offset: fallbackOffset, stickyStart }: ColumnScrollOffsets,
  dir: 'ltr' | 'rtl'
): number | null {
  const cell = getLeafHeaderCell(container, index);
  let offset: number;

  if (cell) {
    const cellRect = cell.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const cellOffset =
      dir === 'rtl' ? containerRect.right - cellRect.right : cellRect.left - containerRect.left;
    offset = (dir === 'rtl' ? -container.scrollLeft : container.scrollLeft) + cellOffset;
  } else if (fallbackOffset === undefined) {
    return null;
  } else {
    offset = fallbackOffset;
  }

  const left = Math.max(0, offset - stickyStart);
  return dir === 'rtl' ? -left : left;
}
