import React, { useRef, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import { EDITING_ROW_SELECTOR, findOwnedRow, getOwnedGrid } from '../hooks/grid-dom';
import { getEditActionsTop, getVisibleRowsArea } from './get-edit-actions-top';

interface UseEditActionsTopOptions {
  rootRef: React.RefObject<HTMLDivElement | null>;
  actionsRef: React.RefObject<HTMLDivElement | null>;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  rowId: string | undefined;
}

const ACTIONS_OFFSET = 4;

export function useEditActionsTop({
  rootRef,
  actionsRef,
  scrollContainerRef,
  rowId,
}: UseEditActionsTopOptions) {
  const [top, setTop] = useState<number | null | undefined>(undefined);
  const [grid, setGrid] = useState<HTMLElement | null>(null);
  const gridContainerRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    const container = scrollContainerRef.current;
    const isGridCurrent =
      container === gridContainerRef.current && grid !== null && grid.isConnected;
    if (!rowId || isGridCurrent) {
      return;
    }

    gridContainerRef.current = container;
    setGrid(getOwnedGrid(container));
  });

  useIsomorphicEffect(() => {
    const root = rootRef.current;
    if (!rowId || !root) {
      return undefined;
    }

    let frame: number | null = null;
    const scheduleMeasure = () => {
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          frame = null;
          measure();
        });
      }
    };

    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleMeasure);
    const mutationObserver =
      typeof MutationObserver === 'undefined'
        ? null
        : new MutationObserver((records) => {
            if (records.some((record) => record.target === grid)) {
              observeRowContainers();
            }
            scheduleMeasure();
          });

    let observedRow: Element | null = null;
    let observedWrapper: Element | null = null;
    let observedSections: Element[] = [];

    const observeRowContainers = () => {
      if (!grid) {
        return;
      }
      observedSections.forEach((section) => resizeObserver?.unobserve(section));
      observedSections = Array.from(grid.children);
      observedSections.forEach((section) => resizeObserver?.observe(section));
      if (!mutationObserver) {
        return;
      }
      mutationObserver.disconnect();
      mutationObserver.observe(grid, { childList: true });
      observedSections.forEach((section) => {
        mutationObserver.observe(section, { childList: true });
      });
      if (observedWrapper) {
        mutationObserver.observe(observedWrapper, {
          attributes: true,
          attributeFilter: ['style'],
        });
      }
    };

    const getRowWrapper = (row: Element | null) => {
      let element = row;
      while (element?.parentElement && element.parentElement.parentElement !== grid) {
        element = element.parentElement;
      }
      return element?.parentElement ? element : null;
    };

    const measure = () => {
      const container = scrollContainerRef.current;
      const row = container ? findOwnedRow(container, rowId, EDITING_ROW_SELECTOR) : undefined;
      if ((row ?? null) !== observedRow) {
        if (observedRow) {
          resizeObserver?.unobserve(observedRow);
        }
        observedRow = row ?? null;
        if (observedRow) {
          resizeObserver?.observe(observedRow);
        }
        const wrapper = getRowWrapper(observedRow);
        if (wrapper !== observedWrapper) {
          observedWrapper = wrapper;
          observeRowContainers();
        }
      }
      if (!row) {
        setTop(null);
        return;
      }

      const rootRect = root.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      const area = getVisibleRowsArea(root, container, row);
      setTop(
        getEditActionsTop({
          rowTop: rowRect.top - rootRect.top,
          rowBottom: rowRect.bottom - rootRect.top,
          viewportTop: area.top - rootRect.top,
          viewportBottom: area.bottom - rootRect.top,
          actionsHeight: actionsRef.current?.offsetHeight ?? 0,
          offset: ACTIONS_OFFSET,
        })
      );
    };

    resizeObserver?.observe(root);
    observeRowContainers();
    measure();
    window.addEventListener('scroll', scheduleMeasure, true);
    window.addEventListener('resize', scheduleMeasure);

    return () => {
      window.removeEventListener('scroll', scheduleMeasure, true);
      window.removeEventListener('resize', scheduleMeasure);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, [rowId, grid]);

  return top;
}
