import type {
  SankeyChartCssVariables,
  SankeyChartData,
  SankeyChartFactory,
  SankeyChartLink,
  SankeyChartNode,
  SankeyChartProps,
  SankeyChartStylesNames,
} from './SankeyChart';

export { SankeyChart } from './SankeyChart';

export type {
  SankeyChartProps,
  SankeyChartStylesNames,
  SankeyChartCssVariables,
  SankeyChartFactory,
  SankeyChartData,
  SankeyChartNode,
  SankeyChartLink,
};

export namespace SankeyChart {
  export type Props = SankeyChartProps;
  export type StylesNames = SankeyChartStylesNames;
  export type CssVariables = SankeyChartCssVariables;
  export type Factory = SankeyChartFactory;
  export type Data = SankeyChartData;
  export type Node = SankeyChartNode;
  export type Link = SankeyChartLink;
}
