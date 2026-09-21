import type { ReactNode } from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Pagination,
  PaginationProps,
  Select,
  SelectProps,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { formatLabel, renderLabel } from '../format-label';
import { getSelectedCount } from '../get-selected-count';
import classes from '../DataGrid.module.css';

const PAGE_SIZE_SELECT_WIDTH = { xs: 110, sm: 122, md: 138 } as const;

export type DataGridFooterStylesNames =
  | 'footer'
  | 'footerStatus'
  | 'footerPageSize'
  | 'footerPagination';

export interface DataGridFooterProps
  extends BoxProps, CompoundStylesApiProps<DataGridFooterFactory>, ElementProps<'div'> {
  /** Status text format: `compact` renders `1–10 of 20`, `long` renders `Showing 1–10 of 20 · 2 selected`, @default 'compact' */
  statusFormat?: 'compact' | 'long';

  /** Pagination controls: `pages` renders page buttons, `arrows` renders a page label with previous / next controls, `none` renders the status only; resolved to `none` when the store has no pagination, @default 'pages' */
  pagination?: 'pages' | 'arrows' | 'none';

  /** Determines whether the page size select is rendered, @default true */
  withPageSize?: boolean;

  /** Options of the page size select, the current page size is always included, @default [10, 25, 50, 100] */
  pageSizeOptions?: number[];

  /** Props passed down to the page size `Select` component */
  selectProps?: Partial<SelectProps>;

  /** Props passed down to the `Pagination` component */
  paginationProps?: Partial<PaginationProps>;

  /** Replaces the default status, page size select and pagination */
  children?: ReactNode;
}

export type DataGridFooterFactory = Factory<{
  props: DataGridFooterProps;
  ref: HTMLDivElement;
  stylesNames: DataGridFooterStylesNames;
  compound: true;
}>;

const defaultProps = {
  statusFormat: 'compact',
  pagination: 'pages',
  withPageSize: true,
  pageSizeOptions: [10, 25, 50, 100],
} satisfies Partial<DataGridFooterProps>;

export const DataGridFooter = factory<DataGridFooterFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    statusFormat,
    pagination,
    withPageSize,
    pageSizeOptions,
    selectProps,
    paginationProps,
    children,
    ...others
  } = useProps('DataGridFooter', defaultProps, props);

  const ctx = useDataGridContext();
  const { table, labels, store } = ctx;
  const resolvedPagination = ctx.withPagination ? pagination : 'none';

  const total = table.getRowCount();
  const pageCount = table.getPageCount();
  const { pageIndex, pageSize } = table.store.state.pagination;
  const page = pageIndex + 1;
  const selectedCount = ctx.withRowSelection ? getSelectedCount(table.store.state.rowSelection) : 0;
  const manualWithoutRowCount =
    ctx.withPagination && !!table.options.manualPagination && table.options.rowCount === undefined;

  let statusText: ReactNode;
  if (manualWithoutRowCount) {
    statusText = renderLabel(labels.footerPage, { page, total: pageCount });
  } else if (total === 0 || !ctx.withPagination) {
    statusText = renderLabel(labels.footerRows, { count: total });
  } else {
    const from = pageIndex * pageSize + 1;
    const to = Math.min(from + pageSize - 1, total);
    statusText = renderLabel(
      statusFormat === 'long' ? labels.footerRangeLong : labels.footerRange,
      {
        from,
        to,
        total,
      }
    );
  }

  const allPageSizes = pageSizeOptions.includes(pageSize)
    ? pageSizeOptions
    : [...pageSizeOptions, pageSize].sort((a, b) => a - b);

  return (
    <Box
      {...ctx.getStyles('footer', { className, classNames, style, styles })}
      data-status-format={statusFormat}
      data-pagination={resolvedPagination}
      {...others}
    >
      {children ?? (
        <>
          <span {...ctx.getStyles('footerStatus', { classNames, styles })}>
            {statusText}
            {statusFormat === 'long' && selectedCount > 0 && (
              <>
                {' · '}
                {renderLabel(labels.footerSelected, { count: selectedCount })}
              </>
            )}
          </span>
          {resolvedPagination !== 'none' && withPageSize && (
            <Select
              variant="default"
              size={store.controlSize}
              {...ctx.getStyles('footerPageSize', { classNames, styles })}
              {...selectProps}
              value={String(pageSize)}
              onChange={(value) => {
                if (value) {
                  table.setPageSize(Number(value));
                }
              }}
              data={allPageSizes.map((size) => ({
                value: String(size),
                label: formatLabel(labels.pageSize, { count: size }),
              }))}
              aria-label={labels.pageSizeLabel}
              w={selectProps?.w ?? PAGE_SIZE_SELECT_WIDTH[store.controlSize]}
            />
          )}
          {resolvedPagination !== 'none' && (
            <div {...ctx.getStyles('footerPagination', { classNames, styles })}>
              {resolvedPagination === 'arrows' && (
                <span>{renderLabel(labels.footerPage, { page, total: pageCount })}</span>
              )}
              <Pagination
                size={store.controlSize}
                withPages={resolvedPagination === 'pages'}
                getControlProps={(control) =>
                  control === 'previous'
                    ? { 'aria-label': labels.paginationPrevious }
                    : control === 'next'
                      ? { 'aria-label': labels.paginationNext }
                      : {}
                }
                {...paginationProps}
                total={pageCount}
                value={page}
                onChange={(value) => table.setPageIndex(value - 1)}
              />
            </div>
          )}
        </>
      )}
    </Box>
  );
});

DataGridFooter.classes = classes;
DataGridFooter.displayName = '@mantine/data-grid/DataGridFooter';
