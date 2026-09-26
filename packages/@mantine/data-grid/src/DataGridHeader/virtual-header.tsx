import { useDataGridContext } from '../DataGrid.context';
import type { VirtualColumns } from '../DataGridBody/use-virtual-columns';
import { getHeaderCellAttributes, HeaderCellContent } from './header-cell';

interface VirtualHeaderProps {
  columns: VirtualColumns;
}

export function VirtualHeader({ columns }: VirtualHeaderProps) {
  const ctx = useDataGridContext();
  const headerGroups = ctx.table.getHeaderGroups();

  return (
    <div role="rowgroup" data-virtual-thead ref={ctx.theadRef}>
      {headerGroups.map((headerGroup, groupIndex) => {
        const lastHeader = headerGroup.headers[headerGroup.headers.length - 1];
        return (
          <div
            key={headerGroup.id}
            role="row"
            aria-rowindex={groupIndex + 1}
            {...ctx.getStyles('virtualGridHeader')}
          >
            {columns.renderHeaderRow(headerGroup.headers, (header, span) => {
              const { style, ...attributes } = getHeaderCellAttributes(header, ctx);
              return (
                <div
                  key={header.id}
                  ref={ctx.headerInteractions.registerHeaderCell(header)}
                  role="columnheader"
                  aria-colindex={span.first + 1}
                  aria-colspan={span.colSpan > 1 ? span.colSpan : undefined}
                  {...attributes}
                  {...ctx.getStyles('virtualCell', { style: [style, { width: span.width }] })}
                  {...ctx.headerInteractions.getReorderHandlers(header)}
                >
                  <HeaderCellContent header={header} isLast={header === lastHeader} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
