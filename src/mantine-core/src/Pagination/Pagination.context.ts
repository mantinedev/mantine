import { createSafeContext } from '@mantine/utils';

interface PaginationContext {
  range: (number | 'dots')[];
  active: number;
  disabled: boolean;
  onChange(page: number): void;
  onNext(): void;
  onPrevious(): void;
  onFirst(): void;
  onLast(): void;
}

export const [PaginationProvider, usePaginationContext] = createSafeContext<PaginationContext>(
  'Pagination.Root component was not found in tree'
);
