import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Group,
  Pagination,
  PaginationProps,
  Select,
  SelectProps,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridPaginationStylesNames = 'pagination';

export interface DataGridPaginationProps
  extends BoxProps, CompoundStylesApiProps<DataGridPaginationFactory>, ElementProps<'div'> {
  /** Options for the page size selector */
  pageSizeOptions?: number[];

  /** Props passed to the internal Select component (page size selector) */
  selectProps?: Partial<SelectProps>;

  /** Props passed to the internal Pagination component */
  paginationProps?: Partial<PaginationProps>;
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
  const {
    className,
    style,
    classNames,
    styles,
    pageSizeOptions,
    selectProps,
    paginationProps,
    ...others
  } = useProps('DataGridPagination', defaultProps, props);

  const ctx = useDataGridContext();
  const { table } = ctx;
  const pageCount = table.getPageCount();
  const currentPage = table.store.state.pagination.pageIndex + 1;
  const currentPageSize = table.store.state.pagination.pageSize;

  const allOptions = pageSizeOptions!.includes(currentPageSize)
    ? pageSizeOptions!
    : [...pageSizeOptions!, currentPageSize].sort((a, b) => a - b);

  return (
    <Box {...ctx.getStyles('pagination', { className, classNames, style, styles })} {...others}>
      <Group justify="space-between">
        <Select
          size="xs"
          {...selectProps}
          value={String(currentPageSize)}
          onChange={(value) => {
            if (value) {
              table.setPageSize(Number(value));
            }
          }}
          data={allOptions.map((size) => ({
            value: String(size),
            label: ctx.labels.paginationRowsPerPage.replace('{count}', String(size)),
          }))}
          aria-label={ctx.labels.paginationRowsPerPage.replace('{count}', '')}
          w={selectProps?.w ?? 120}
        />
        <Pagination
          size="sm"
          {...paginationProps}
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
