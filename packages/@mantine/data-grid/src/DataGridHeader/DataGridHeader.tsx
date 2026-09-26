import { useDataGridContext } from '../DataGrid.context';
import { getLeafHeaders } from '../get-leaf-headers';
import type { DataGridStore } from '../hooks';
import { getHeaderCellAttributes, HeaderCellContent } from './header-cell';

function getFillColumnId(table: DataGridStore['table']) {
  const columns = table.getVisibleLeafColumns();
  for (let index = columns.length - 1; index >= 0; index -= 1) {
    if (!columns[index].columnDef.meta?.utility) {
      return columns[index].id;
    }
  }
  return null;
}

export function DataGridHeader() {
  const ctx = useDataGridContext();
  const headerGroups = ctx.table.getHeaderGroups();
  const withFixedWidths = ctx.withColumnResizing || ctx.tableLayout === 'fixed';
  const withLeafColumnWidths = headerGroups.length > 1 && withFixedWidths;
  const fillColumnId = ctx.tableLayout === 'fixed' ? getFillColumnId(ctx.table) : null;
  const isFillHeader = (header: (typeof headerGroups)[number]['headers'][number]) =>
    fillColumnId !== null && getLeafHeaders(header).some((leaf) => leaf.column.id === fillColumnId);

  return (
    <>
      {withLeafColumnWidths && (
        <colgroup>
          {headerGroups[headerGroups.length - 1].headers.map((header) => (
            <col
              key={header.id}
              style={{ width: header.column.id === fillColumnId ? undefined : header.getSize() }}
            />
          ))}
        </colgroup>
      )}
      <thead ref={ctx.theadRef} {...ctx.getStyles('thead')}>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...ctx.getStyles('tr')}>
            {headerGroup.headers.map((header, index) => {
              const { style: pinnedStyle, ...attributes } = getHeaderCellAttributes(header, ctx);
              const utility = header.column.columnDef.meta?.utility;

              return (
                <th
                  key={header.id}
                  ref={ctx.headerInteractions.registerHeaderCell(header)}
                  colSpan={header.colSpan}
                  {...attributes}
                  {...ctx.getStyles('th', {
                    style: {
                      ...pinnedStyle,
                      width:
                        (withFixedWidths || utility) && !isFillHeader(header)
                          ? header.getSize()
                          : undefined,
                    },
                  })}
                  {...ctx.headerInteractions.getReorderHandlers(header)}
                >
                  <HeaderCellContent
                    header={header}
                    isLast={index === headerGroup.headers.length - 1}
                  />
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
    </>
  );
}
