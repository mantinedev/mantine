import type {
  BulletChartFactory,
  BulletChartProps,
  BulletChartRange,
  BulletChartStylesNames,
} from './BulletChart';

export { BulletChart } from './BulletChart';

export type { BulletChartProps, BulletChartStylesNames, BulletChartFactory, BulletChartRange };

export namespace BulletChart {
  export type Props = BulletChartProps;
  export type StylesNames = BulletChartStylesNames;
  export type Factory = BulletChartFactory;
  export type Range = BulletChartRange;
}
