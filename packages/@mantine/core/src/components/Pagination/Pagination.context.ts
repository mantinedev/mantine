import { createSafeContext, GetStylesApi } from '../../core';
import type { PaginationRootFactory } from './PaginationRoot/PaginationRoot';

export interface PaginationContextValue {
  total: number;
  range: (number | 'dots')[];
  active: number;
  disabled: boolean | undefined;
  getItemProps?: (page: number) => Record<string, any>;
  onChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  getStyles: GetStylesApi<PaginationRootFactory>;
}

export const [PaginationProvider, usePaginationContext] = createSafeContext<PaginationContextValue>(
  'Pagination.Root component was not found in tree'
);
