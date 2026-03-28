import type {
  SkeletonCssVariables,
  SkeletonFactory,
  SkeletonProps,
  SkeletonStylesNames,
} from './Skeleton';

export { Skeleton } from './Skeleton';

export type { SkeletonProps, SkeletonStylesNames, SkeletonCssVariables, SkeletonFactory };

export namespace Skeleton {
  export type Props = SkeletonProps;
  export type StylesNames = SkeletonStylesNames;
  export type CssVariables = SkeletonCssVariables;
  export type Factory = SkeletonFactory;
}
