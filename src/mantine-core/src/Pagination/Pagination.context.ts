import { createSafeContext } from '@mantine/utils';

interface PaginationContext {}

export const [PaginationProvider, usePaginationContext] = createSafeContext<PaginationContext>(
  'Pagination.Root component was not found in tree'
);
