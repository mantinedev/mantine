import type {
  TableOfContentsCssVariables,
  TableOfContentsFactory,
  TableOfContentsProps,
  TableOfContentsStylesNames,
  TableOfContentsVariant,
} from './TableOfContents';

export { TableOfContents } from './TableOfContents';

export type {
  TableOfContentsProps,
  TableOfContentsStylesNames,
  TableOfContentsCssVariables,
  TableOfContentsFactory,
  TableOfContentsVariant,
};

export namespace TableOfContents {
  export type Props = TableOfContentsProps;
  export type StylesNames = TableOfContentsStylesNames;
  export type CssVariables = TableOfContentsCssVariables;
  export type Factory = TableOfContentsFactory;
  export type Variant = TableOfContentsVariant;
}
