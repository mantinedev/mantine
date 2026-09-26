interface PaginationOptionsSource {
  options: { manualPagination?: boolean; rowCount?: number; pageCount?: number };
}

export function hasUnknownPageCount(table: PaginationOptionsSource): boolean {
  const { manualPagination, rowCount, pageCount } = table.options;
  return !!manualPagination && rowCount === undefined && (pageCount == null || pageCount < 0);
}
