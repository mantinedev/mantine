import type {
  SplitterCssVariables,
  SplitterFactory,
  SplitterHandleProps,
  SplitterProps,
  SplitterStylesNames,
} from './Splitter';
import type { SplitterContextValue } from './Splitter.context';
import type { SplitterPaneProps, SplitterPaneStylesNames } from './SplitterPane/SplitterPane';

export { Splitter } from './Splitter';
export { SplitterPane } from './SplitterPane/SplitterPane';
export { useSplitterContext } from './Splitter.context';

export type {
  SplitterProps,
  SplitterStylesNames,
  SplitterCssVariables,
  SplitterFactory,
  SplitterHandleProps,
  SplitterPaneProps,
  SplitterPaneStylesNames,
  SplitterContextValue,
};

export namespace Splitter {
  export type Props = SplitterProps;
  export type StylesNames = SplitterStylesNames;
  export type CssVariables = SplitterCssVariables;
  export type Factory = SplitterFactory;
  export type HandleProps = SplitterHandleProps;
  export type ContextValue = SplitterContextValue;

  export namespace Pane {
    export type Props = SplitterPaneProps;
    export type StylesNames = SplitterPaneStylesNames;
  }
}
