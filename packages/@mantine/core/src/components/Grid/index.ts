import type { GridCssVariables, GridFactory, GridProps, GridStylesNames } from './Grid';
import type { GridContextValue } from './Grid.context';
import type { GridColProps } from './GridCol/GridCol';

export { Grid } from './Grid';
export { GridCol } from './GridCol/GridCol';
export { useGridContext } from './Grid.context';

export type {
  GridCssVariables,
  GridFactory,
  GridProps,
  GridStylesNames,
  GridColProps,
  GridContextValue,
};

export namespace Grid {
  export type Props = GridProps;
  export type Factory = GridFactory;
  export type StylesNames = GridStylesNames;
  export type CssVariables = GridCssVariables;
  export type ColProps = GridColProps;
  export type ContextValue = GridContextValue;

  export namespace Col {
    export type Props = GridColProps;
  }
}
