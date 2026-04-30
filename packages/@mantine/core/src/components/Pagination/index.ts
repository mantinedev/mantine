import type {
  PaginationCssVariables,
  PaginationFactory,
  PaginationProps,
  PaginationStylesNames,
} from './Pagination';
import type { PaginationContextValue } from './Pagination.context';
import type { PaginationControlProps } from './PaginationControl/PaginationControl';
import type { PaginationDotsProps } from './PaginationDots/PaginationDots';
import type { PaginationEdgeProps } from './PaginationEdges/PaginationEdges';
import type { PaginationItemsProps } from './PaginationItems/PaginationItems';
import type { PaginationRootProps } from './PaginationRoot/PaginationRoot';

export { Pagination } from './Pagination';
export { PaginationControl } from './PaginationControl/PaginationControl';
export { PaginationDots } from './PaginationDots/PaginationDots';
export {
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from './PaginationEdges/PaginationEdges';
export { PaginationItems } from './PaginationItems/PaginationItems';
export { PaginationRoot } from './PaginationRoot/PaginationRoot';
export { usePaginationContext } from './Pagination.context';

export type {
  PaginationProps,
  PaginationStylesNames,
  PaginationCssVariables,
  PaginationFactory,
  PaginationRootProps,
  PaginationControlProps,
  PaginationDotsProps,
  PaginationEdgeProps,
  PaginationItemsProps,
  PaginationContextValue,
};
