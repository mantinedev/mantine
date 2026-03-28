import React from 'react';
import {
  Treemap as RechartsTreemap,
  TreemapProps as RechartsTreemapProps,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getThemeColor,
  isLightColor,
  MantineColor,
  MantineTheme,
  parseThemeColor,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import classes from './Treemap.module.css';

export interface TreemapData {
  name: string;
  value?: number;
  color?: MantineColor;
  children?: TreemapData[];
  [key: string]: unknown;
}

export type TreemapStylesNames = 'root' | ChartTooltipStylesNames;
export type TreemapCssVariables = {
  root: '--chart-stroke-color' | '--chart-height';
};

export interface TreemapProps
  extends BoxProps, StylesApiProps<TreemapFactory>, ElementProps<'div'> {
  /** Data used to render chart */
  data: TreemapData[];

  /** Key in data object for the value @default 'value' */
  dataKey?: string;

  /** The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given @default 1.618033988749895 */
  aspectRatio?: number;

  /** Determines whether the tooltip should be displayed when a node is hovered @default true */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Treemap` component */
  treemapProps?: Partial<Omit<RechartsTreemapProps, 'ref' | 'data' | 'dataKey'>>;

  /** Controls color of the node stroke, by default depends on color scheme */
  strokeColor?: MantineColor;

  /** Controls text color of labels @default dimmed */
  textColor?: MantineColor;

  /** Controls chart height @default 300 */
  height?: number;

  /** Controls width of node stroke @default 1 */
  strokeWidth?: number;

  /** A function to format values inside the tooltip */
  valueFormatter?: (value: number) => string;

  /** Determines whether text color should be adjusted based on background color to improve contrast */
  autoContrast?: boolean;

  /** Additional elements rendered inside `Treemap` component */
  children?: React.ReactNode;
}

export type TreemapFactory = Factory<{
  props: TreemapProps;
  ref: HTMLDivElement;
  stylesNames: TreemapStylesNames;
  vars: TreemapCssVariables;
}>;

const defaultProps = {
  dataKey: 'value',
  withTooltip: true,
  tooltipAnimationDuration: 0,
  height: 300,
  strokeWidth: 1,
  aspectRatio: 0.5 * (1 + Math.sqrt(5)),
} satisfies Partial<TreemapProps>;

const varsResolver = createVarsResolver<TreemapFactory>((theme, { strokeColor, height }) => ({
  root: {
    '--chart-stroke-color': strokeColor ? getThemeColor(strokeColor, theme) : undefined,
    '--chart-height': rem(height),
  },
}));

interface TreemapContentProps {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  name: string;
  resolvedColors: Record<string, string>;
  resolvedLabelColors: Record<string, string>;
  index: number;
  strokeWidth: number;
}

function TreemapContent({
  x,
  y,
  width,
  height,
  depth,
  name,
  resolvedColors,
  resolvedLabelColors,
  index,
  strokeWidth,
}: TreemapContentProps) {
  const fill = resolvedColors[name] || `var(--mantine-color-blue-${(index % 9) + 1})`;
  const labelColor = resolvedLabelColors[name] || 'var(--mantine-color-white)';
  const showLabel = width > 30 && height > 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={depth >= 1 ? fill : 'transparent'}
        stroke="var(--chart-stroke-color, var(--mantine-color-body))"
        strokeWidth={depth >= 1 ? strokeWidth : 0}
      />
      {depth >= 1 && showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill={labelColor}
          fontSize={12}
          fontFamily="var(--mantine-font-family)"
        >
          {name}
        </text>
      )}
    </g>
  );
}

function resolveColors(
  data: TreemapData[],
  theme: MantineTheme,
  parentColor?: string
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const item of data) {
    const color = item.color || parentColor;
    if (color) {
      result[item.name] = parseThemeColor({ color, theme }).value;
    }
    if (item.children) {
      Object.assign(result, resolveColors(item.children, theme, color));
    }
  }
  return result;
}

function resolveLabelColors(
  resolvedColors: Record<string, string>,
  autoContrast: boolean,
  luminanceThreshold: number,
  textColor?: string
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [name, color] of Object.entries(resolvedColors)) {
    if (textColor) {
      result[name] = textColor;
    } else if (autoContrast) {
      result[name] = isLightColor(color, luminanceThreshold)
        ? 'var(--mantine-color-black)'
        : 'var(--mantine-color-white)';
    }
  }
  return result;
}

export const Treemap = factory<TreemapFactory>((_props) => {
  const props = useProps('Treemap', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    dataKey,
    aspectRatio,
    withTooltip,
    tooltipAnimationDuration,
    tooltipProps,
    treemapProps,
    strokeColor,
    textColor,
    height: chartHeight,
    strokeWidth,
    valueFormatter,
    autoContrast,
    children,
    attributes,
    ...others
  } = props;

  const theme = useMantineTheme();
  const resolvedColors = resolveColors(data, theme);
  const _autoContrast = getAutoContrastValue(autoContrast, theme);
  const _textColor = textColor ? getThemeColor(textColor, theme) : undefined;
  const resolvedLabelColors = resolveLabelColors(
    resolvedColors,
    _autoContrast,
    theme.luminanceThreshold,
    _textColor
  );

  const getStyles = useStyles<TreemapFactory>({
    name: 'Treemap',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TreemapFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Box {...getStyles('root')} {...others}>
      <ResponsiveContainer height={chartHeight}>
        <RechartsTreemap
          data={data as any}
          dataKey={dataKey as any}
          aspectRatio={aspectRatio}
          isAnimationActive={false}
          content={(nodeProps: any) => (
            <TreemapContent
              {...nodeProps}
              resolvedColors={resolvedColors}
              resolvedLabelColors={resolvedLabelColors}
              strokeWidth={strokeWidth!}
            />
          )}
          {...treemapProps}
        >
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ payload }) => (
                <ChartTooltip
                  payload={
                    payload?.map((item) => ({
                      name: item.name as string,
                      value: item.value as number,
                      color: resolvedColors[item.name as string] || 'var(--mantine-color-blue-6)',
                    })) || []
                  }
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  type="radial"
                  valueFormatter={valueFormatter}
                  attributes={attributes}
                />
              )}
              {...tooltipProps}
            />
          )}

          {children}
        </RechartsTreemap>
      </ResponsiveContainer>
    </Box>
  );
});

Treemap.displayName = '@mantine/charts/Treemap';
Treemap.classes = classes;
Treemap.varsResolver = varsResolver;
