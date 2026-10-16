import { createSafeContext, GetStylesApi } from '../../core';
import type { PaginationRootFactory } from './PaginationRoot/PaginationRoot';

export interface PaginationContextValue {
  total: number;
  startValue: number;
  range: (number | 'dots')[];
  active: number;
  disabled: boolean | undefined;
  layout?: 'default' | 'responsive';
  getItemProps?: (page: number) => Record<string, any>;
  onChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  getStyles: GetStylesApi<PaginationRootFactory>;
  rootRef: React.RefObject<HTMLElement | null>;
}

export const [PaginationProvider, usePaginationContext] = createSafeContext<PaginationContextValue>(
  'Pagination.Root component was not found in tree'
);
