import React, { useCallback, useMemo, useRef } from 'react';
import { Column, ColumnSizingState, Header } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useDirection } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import { getPinnedHeaderProps } from '../column-cell-props';
import { getLeafHeaders } from '../get-leaf-headers';
import type { DataGridFeatures } from '../table-features';

type GridColumn = Column<DataGridFeatures, any, unknown>;
type GridHeader = Header<DataGridFeatures, any, unknown>;

interface ColumnWindowItem {
  key: string;
  first: number;
  last: number;
  node: React.ReactNode;
}

interface ColumnWindowInput {
  start: React.ReactNode[];
  middle: ColumnWindowItem[];
  end: React.ReactNode[];
}

interface HeaderSpan {
  first: number;
  last: number;
  colSpan: number;
  width: number | string;
}

function getHeaderSpan(header: GridHeader, columnIndexById: Map<string, number>): HeaderSpan {
  const leaves = getLeafHeaders(header);
  const indexes = leaves
    .map((leaf) => columnIndexById.get(leaf.column.id))
    .filter((index): index is number => index !== undefined);
  const first = indexes.length > 0 ? Math.min(...indexes) : 0;

  return {
    first,
    last: indexes.length > 0 ? Math.max(...indexes) : 0,
    colSpan: leaves.length,
    width:
      leaves.length > 1
        ? leaves.reduce((sum, leaf) => sum + leaf.getSize(), 0)
        : `var(--dg-col-${first})`,
  };
}

interface UseVirtualColumnsOptions {
  enabled: boolean;
  withColumnPinning: boolean;
  visibleColumns: GridColumn[];
  columnSizing: ColumnSizingState;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  config: { overscan?: number; estimateSize?: (index: number) => number } | undefined;
}

export function useVirtualColumns({
  enabled,
  withColumnPinning,
  visibleColumns,
  columnSizing,
  scrollContainerRef,
  config,
}: UseVirtualColumnsOptions) {
  const { dir } = useDirection();
  const getItemKey = useCallback((index: number) => visibleColumns[index].id, [visibleColumns]);
  const columnVirtualizer = useVirtualizer({
    count: enabled ? visibleColumns.length : 0,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: config?.estimateSize ?? ((index) => visibleColumns[index].getSize()),
    getItemKey,
    horizontal: true,
    isRtl: dir === 'rtl',
    overscan: config?.overscan ?? 3,
  });

  const sizesSignature = useMemo(
    () =>
      enabled ? visibleColumns.map((column) => `${column.id}:${column.getSize()}`).join('|') : '',
    [enabled, visibleColumns, columnSizing]
  );
  const measuredSignatureRef = useRef(sizesSignature);
  useIsomorphicEffect(() => {
    if (measuredSignatureRef.current !== sizesSignature) {
      measuredSignatureRef.current = sizesSignature;
      columnVirtualizer.measure();
    }
  }, [sizesSignature]);

  const columnIndexById = useMemo(
    () => new Map(visibleColumns.map((column, index) => [column.id, index])),
    [visibleColumns]
  );

  const pinned = useMemo(() => {
    const start: number[] = [];
    const end: number[] = [];
    let startWidth = 0;
    let endWidth = 0;

    if (enabled && withColumnPinning) {
      visibleColumns.forEach((column, index) => {
        const position = column.getIsPinned();
        if (position === 'start') {
          start.push(index);
          startWidth += column.getSize();
        } else if (position === 'end') {
          end.push(index);
          endWidth += column.getSize();
        }
      });
    }

    return { start, end, indexes: new Set([...start, ...end]), startWidth, endWidth };
  }, [enabled, withColumnPinning, visibleColumns, columnSizing]);

  const middleItems = enabled
    ? columnVirtualizer.getVirtualItems().filter((item) => !pinned.indexes.has(item.index))
    : [];
  const middleEnd = enabled ? columnVirtualizer.getTotalSize() - pinned.endWidth : 0;
  const firstMiddleIndex = middleItems.length > 0 ? middleItems[0].index : -1;
  const lastMiddleIndex = middleItems.length > 0 ? middleItems[middleItems.length - 1].index : -1;

  const isColumnRendered = (index: number) =>
    !enabled || pinned.indexes.has(index) || middleItems.some((item) => item.index === index);

  const getColumnStart = (index: number) => columnVirtualizer.measurementsCache[index]?.start ?? 0;
  const getColumnEnd = (index: number) => columnVirtualizer.measurementsCache[index]?.end ?? 0;
  const isRangeRendered = (firstIndex: number, lastIndex: number) =>
    firstMiddleIndex !== -1 && firstIndex <= lastMiddleIndex && lastIndex >= firstMiddleIndex;

  const renderPad = (key: string, width: number) =>
    width > 0 ? (
      <div key={key} aria-hidden data-column-pad style={{ flexShrink: 0, width }} />
    ) : null;

  const renderColumnWindow = ({ start, middle, end }: ColumnWindowInput) => {
    const middleNodes: React.ReactNode[] = [];
    let cursor = pinned.startWidth;
    middle.forEach((item, index) => {
      const gap = getColumnStart(item.first) - cursor;
      middleNodes.push(
        renderPad(index === 0 ? '__virtual-col-pad-start' : `__virtual-col-pad-${item.key}`, gap)
      );
      middleNodes.push(<React.Fragment key={item.key}>{item.node}</React.Fragment>);
      cursor = Math.max(cursor, getColumnEnd(item.last));
    });

    return (
      <>
        {start}
        {middleNodes}
        {renderPad('__virtual-col-pad-end', middleEnd - cursor)}
        {end}
      </>
    );
  };

  const renderColumns = (renderColumn: (index: number) => React.ReactElement) => {
    if (!enabled) {
      return visibleColumns.map((_, index) => renderColumn(index));
    }

    return renderColumnWindow({
      start: pinned.start.map(renderColumn),
      middle: middleItems.map((item) => {
        const node = renderColumn(item.index);
        return { key: String(node.key ?? item.index), first: item.index, last: item.index, node };
      }),
      end: pinned.end.map(renderColumn),
    });
  };

  const renderHeaderRow = (
    headers: GridHeader[],
    renderCell: (header: GridHeader, span: HeaderSpan) => React.ReactElement
  ) => {
    if (!enabled) {
      return headers.map((header) => renderCell(header, getHeaderSpan(header, columnIndexById)));
    }

    const window: ColumnWindowInput = { start: [], middle: [], end: [] };
    headers.forEach((header) => {
      const span = getHeaderSpan(header, columnIndexById);
      const position = getPinnedHeaderProps(header, withColumnPinning)['data-pinned'];
      if (position === 'start') {
        window.start.push(renderCell(header, span));
      } else if (position === 'end') {
        window.end.push(renderCell(header, span));
      } else if (
        isRangeRendered(span.first, span.last) ||
        pinned.indexes.has(span.first) ||
        pinned.indexes.has(span.last)
      ) {
        window.middle.push({
          key: header.id,
          first: span.first,
          last: span.last,
          node: renderCell(header, span),
        });
      }
    });

    return renderColumnWindow(window);
  };

  return { renderColumns, renderHeaderRow, isColumnRendered };
}

export type VirtualColumns = ReturnType<typeof useVirtualColumns>;
