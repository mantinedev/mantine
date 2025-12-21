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

export namespace Pagination {
  export type Props = PaginationProps;
  export type StylesNames = PaginationStylesNames;
  export type CssVariables = PaginationCssVariables;
  export type Factory = PaginationFactory;

  export namespace Root {
    export type Props = PaginationRootProps;
  }

  export namespace Control {
    export type Props = PaginationControlProps;
  }

  export namespace Dots {
    export type Props = PaginationDotsProps;
  }

  export namespace Edge {
    export type Props = PaginationEdgeProps;
  }

  export namespace Items {
    export type Props = PaginationItemsProps;
  }
}
