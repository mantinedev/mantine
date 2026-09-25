import { flexRender } from '@tanstack/react-table';
import { Portal } from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import type {
  DataGridDragState,
  DataGridDropTarget,
  DataGridResizeGuide,
} from './use-header-interactions';

export interface DataGridHeaderOverlaysProps {
  drag: DataGridDragState | null;
  dropTarget: DataGridDropTarget | null;
  guide: DataGridResizeGuide | null;
}

/** Resize guide, drop indicator and drag ghost rendered by the grid root while a header interaction is in progress */
export function DataGridHeaderOverlays({ drag, dropTarget, guide }: DataGridHeaderOverlaysProps) {
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
          <div {...ctx.getStyles('dragGhost')} style={{ left: drag.x, top: drag.y, ...drag.vars }}>
            {flexRender(drag.header.column.columnDef.header, drag.header.getContext())}
          </div>
        </Portal>
      )}
    </>
  );
}
