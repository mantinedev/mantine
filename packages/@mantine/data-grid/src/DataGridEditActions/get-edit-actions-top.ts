import {
  BOTTOM_PINNED_SECTION_SELECTOR,
  getLeadingElements,
  getPinnedSection,
  PINNED_SECTION_SELECTOR,
  queryOwned,
} from '../hooks/grid-dom';

interface EditActionsPlacementInput {
  rowTop: number;
  rowBottom: number;
  viewportTop: number;
  viewportBottom: number;
  actionsHeight: number;
  offset: number;
}

export function getEditActionsTop({
  rowTop,
  rowBottom,
  viewportTop,
  viewportBottom,
  actionsHeight,
  offset,
}: EditActionsPlacementInput): number | null {
  const below = rowBottom + offset;
  if (viewportBottom <= viewportTop) {
    return below;
  }

  if (rowBottom <= viewportTop || rowTop >= viewportBottom) {
    return null;
  }

  if (below + actionsHeight <= viewportBottom) {
    return below;
  }

  const above = rowTop - offset - actionsHeight;
  if (above >= viewportTop) {
    return above;
  }

  return Math.max(viewportTop, Math.min(below, viewportBottom - actionsHeight));
}

export function getVisibleRowsArea(
  root: HTMLElement,
  viewport: HTMLElement | null,
  row?: HTMLElement
) {
  if (!viewport) {
    const rootRect = root.getBoundingClientRect();
    return { top: rootRect.top, bottom: Math.max(rootRect.bottom, rootRect.top) };
  }

  const area = viewport.getBoundingClientRect();
  const isPinned = getPinnedSection(viewport, row) !== null;
  const leadingBottom = getLeadingElements(viewport)
    .filter((element) => !isPinned || !element.matches(PINNED_SECTION_SELECTOR))
    .reduce((max, element) => Math.max(max, element.getBoundingClientRect().bottom), area.top);
  const contentBottom =
    viewport.clientHeight > 0 ? area.top + viewport.clientTop + viewport.clientHeight : area.bottom;
  const trailingElements = [
    queryOwned(viewport, '[data-virtual-tfoot]')[0],
    isPinned ? undefined : queryOwned(viewport, BOTTOM_PINNED_SECTION_SELECTOR)[0],
  ];
  const trailingTop = trailingElements.reduce(
    (min, element) => (element ? Math.min(min, element.getBoundingClientRect().top) : min),
    contentBottom
  );
  const bottom = Math.max(trailingTop, area.top);
  return { top: Math.min(leadingBottom, bottom), bottom };
}
