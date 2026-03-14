import type {
  PaperBaseProps,
  PaperCssVariables,
  PaperFactory,
  PaperProps,
  PaperStylesNames,
} from './Paper';

export { Paper } from './Paper';

export type { PaperProps, PaperStylesNames, PaperCssVariables, PaperFactory, PaperBaseProps };

export namespace Paper {
  export type Props = PaperProps;
  export type StylesNames = PaperStylesNames;
  export type CssVariables = PaperCssVariables;
  export type Factory = PaperFactory;
  export type BaseProps = PaperBaseProps;
}
