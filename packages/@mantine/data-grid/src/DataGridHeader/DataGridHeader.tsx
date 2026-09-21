import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { useDataGridContext } from '../DataGrid.context';
import { getPinnedHeaderProps } from '../get-pinned-cell-props';
import { DataGridHeaderCellContent, getHeaderCellAttributes } from './DataGridHeaderCell';
import classes from '../DataGrid.module.css';

export type DataGridHeaderStylesNames =
  | 'thead'
  | 'tr'
  | 'th'
  | 'headerCell'
  | 'headerLabel'
  | 'sortIcon'
  | 'resizeHandle';

export interface DataGridHeaderProps
  extends BoxProps, CompoundStylesApiProps<DataGridHeaderFactory>, ElementProps<'thead'> {}

export type DataGridHeaderFactory = Factory<{
  props: DataGridHeaderProps;
  ref: HTMLTableSectionElement;
  stylesNames: DataGridHeaderStylesNames;
  compound: true;
}>;

export const DataGridHeader = factory<DataGridHeaderFactory>((props) => {
  const { className, style, classNames, styles, ref, ...others } = useProps(
    'DataGridHeader',
    null,
    props
  );

  const ctx = useDataGridContext();
  const theadRef = useMergedRef(ref, ctx.theadRef);

  return (
    <Box
      component="thead"
      ref={theadRef}
      {...ctx.getStyles('thead', { className, classNames, style, styles })}
      {...others}
    >
      {ctx.table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} {...ctx.getStyles('tr', { classNames, styles })}>
          {headerGroup.headers.map((header, index) => {
            const pinned = getPinnedHeaderProps(header, ctx.withColumnPinning);
            const utility = header.column.columnDef.meta?.utility;

            return (
              <th
                key={header.id}
                ref={ctx.headerInteractions.registerHeaderCell(header)}
                colSpan={header.colSpan}
                {...getHeaderCellAttributes(header, ctx)}
                data-pinned={pinned['data-pinned']}
                data-pinned-edge={pinned['data-pinned-edge']}
                {...ctx.getStyles('th', { classNames, styles })}
                style={{
                  ...pinned.style,
                  width:
                    ctx.withColumnResizing || ctx.tableLayout === 'fixed' || utility
                      ? header.getSize()
                      : undefined,
                }}
                {...ctx.headerInteractions.getReorderHandlers(header)}
              >
                <DataGridHeaderCellContent
                  header={header}
                  isLast={index === headerGroup.headers.length - 1}
                  classNames={classNames}
                  styles={styles}
                />
              </th>
            );
          })}
        </tr>
      ))}
    </Box>
  );
});

DataGridHeader.classes = classes;
DataGridHeader.displayName = '@mantine/data-grid/DataGridHeader';
