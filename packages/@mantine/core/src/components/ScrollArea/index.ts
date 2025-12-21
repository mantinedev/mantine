import type {
  ScrollAreaAutosizeProps,
  ScrollAreaCssVariables,
  ScrollAreaFactory,
  ScrollAreaProps,
  ScrollAreaStylesNames,
} from './ScrollArea';

export { ScrollArea, ScrollAreaAutosize } from './ScrollArea';
export { useScrollAreaContext } from './ScrollArea.context';

export type {
  ScrollAreaProps,
  ScrollAreaAutosizeProps,
  ScrollAreaStylesNames,
  ScrollAreaCssVariables,
  ScrollAreaFactory,
};

export namespace ScrollArea {
  export type Props = ScrollAreaProps;
  export type AutosizeProps = ScrollAreaAutosizeProps;
  export type StylesNames = ScrollAreaStylesNames;
  export type CssVariables = ScrollAreaCssVariables;
  export type Factory = ScrollAreaFactory;

  export namespace Autosize {
    export type Props = ScrollAreaAutosizeProps;
  }
}
