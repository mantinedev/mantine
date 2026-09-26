import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { Portal } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type { DataGridDragState, DataGridDropTarget } from './use-column-drag';
import type { DataGridResizeGuide } from './use-resize-guide';

interface HeaderOverlaysProps {
  drag: DataGridDragState | null;
  dropTarget: DataGridDropTarget | null;
  guide: DataGridResizeGuide | null;
  ghostRef: React.RefObject<HTMLDivElement | null>;
}

export function HeaderOverlays({ drag, dropTarget, guide, ghostRef }: HeaderOverlaysProps) {
  const ctx = useDataGridContext();

  return (
    <>
      {guide && (
        <div
          {...ctx.getStyles('resizeGuide', {
            style: { left: guide.left, top: guide.top, height: guide.height },
          })}
        />
      )}
      {dropTarget && (
        <div
          {...ctx.getStyles('dropIndicator', {
            style: { left: dropTarget.left, top: dropTarget.top, height: dropTarget.height },
          })}
        />
      )}
      {drag && (
        <Portal>
          <div
            ref={ghostRef}
            {...ctx.getStyles('dragGhost', {
              style: { left: drag.x, top: drag.y, ...drag.vars } as React.CSSProperties,
            })}
          >
            {flexRender(drag.header.column.columnDef.header, drag.header.getContext())}
          </div>
        </Portal>
      )}
    </>
  );
}
