import { Brush, BrushProps } from 'recharts';
import { factory, Factory, StylesApiProps, useProps, useStyles } from '@mantine/core';
import classes from './ChartBrush.module.css';

export type ChartBrushStylesNames = 'brush';

export interface ChartBrushProps
  extends Omit<BrushProps, 'ref'>, StylesApiProps<ChartBrushFactory> {}

export type ChartBrushFactory = Factory<{
  props: ChartBrushProps;
  ref: SVGElement;
  stylesNames: ChartBrushStylesNames;
}>;

const defaultProps = {} satisfies Partial<ChartBrushProps>;

export const ChartBrush = factory<ChartBrushFactory>((_props) => {
  const props = useProps('ChartBrush', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<ChartBrushFactory>({
    name: 'ChartBrush',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  return (
    <Brush
      dy={8}
      stroke="var(--chart-grid-color)"
      fill="var(--mantine-color-body)"
      {...others}
      {...getStyles('brush')}
    />
  );
});

ChartBrush.classes = classes;
ChartBrush.displayName = '@mantine/charts/ChartBrush';
