import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Group,
  Pagination,
  Select,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridPaginationStylesNames = 'pagination';

export interface DataGridPaginationProps
  extends BoxProps, CompoundStylesApiProps<DataGridPaginationFactory>, ElementProps<'div'> {
  /** Options for the page size selector */
  pageSizeOptions?: number[];
}

export type DataGridPaginationFactory = Factory<{
  props: DataGridPaginationProps;
  ref: HTMLDivElement;
  stylesNames: DataGridPaginationStylesNames;
  compound: true;
}>;

const defaultProps = {
  pageSizeOptions: [10, 25, 50, 100],
};

export const DataGridPagination = factory<DataGridPaginationFactory>((props) => {
  const { className, style, classNames, styles, pageSizeOptions, ...others } = useProps(
    'DataGridPagination',
    defaultProps,
    props
  );

  const ctx = useDataGridContext();
  const { table } = ctx;
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const currentPageSize = table.getState().pagination.pageSize;

  const allOptions = pageSizeOptions!.includes(currentPageSize)
    ? pageSizeOptions!
    : [...pageSizeOptions!, currentPageSize].sort((a, b) => a - b);

  return (
    <Box {...ctx.getStyles('pagination', { className, classNames, style, styles })} {...others}>
      <Group justify="space-between">
        <Select
          size="xs"
          value={String(currentPageSize)}
          onChange={(value) => {
            if (value) {
              table.setPageSize(Number(value));
            }
          }}
          data={allOptions.map((size) => ({
            value: String(size),
            label: ctx.localization.paginationRowsPerPage.replace('{count}', String(size)),
          }))}
          aria-label={ctx.localization.paginationRowsPerPage.replace('{count}', '')}
          w={120}
        />
        <Pagination
          size="sm"
          total={pageCount}
          value={currentPage}
          onChange={(page) => table.setPageIndex(page - 1)}
          hideWithOnePage
        />
      </Group>
    </Box>
  );
});

DataGridPagination.classes = classes;
DataGridPagination.displayName = '@mantine/data-grid/DataGridPagination';
