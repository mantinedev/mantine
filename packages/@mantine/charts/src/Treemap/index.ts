import type {
  TreemapCssVariables,
  TreemapData,
  TreemapFactory,
  TreemapProps,
  TreemapStylesNames,
} from './Treemap';

export { Treemap } from './Treemap';

export type { TreemapProps, TreemapStylesNames, TreemapCssVariables, TreemapFactory, TreemapData };

export namespace Treemap {
  export type Props = TreemapProps;
  export type StylesNames = TreemapStylesNames;
  export type CssVariables = TreemapCssVariables;
  export type Factory = TreemapFactory;
  export type Data = TreemapData;
}
