import type {
  SunburstChartCssVariables,
  SunburstChartData,
  SunburstChartFactory,
  SunburstChartProps,
  SunburstChartStylesNames,
} from './SunburstChart';

export { SunburstChart } from './SunburstChart';

export type {
  SunburstChartProps,
  SunburstChartStylesNames,
  SunburstChartCssVariables,
  SunburstChartFactory,
  SunburstChartData,
};

export namespace SunburstChart {
  export type Props = SunburstChartProps;
  export type StylesNames = SunburstChartStylesNames;
  export type CssVariables = SunburstChartCssVariables;
  export type Factory = SunburstChartFactory;
  export type Data = SunburstChartData;
}
