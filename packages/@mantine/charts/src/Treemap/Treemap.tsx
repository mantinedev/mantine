import React, { useMemo } from 'react';
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
  /** Data used to render chart @category appearance */
  data: TreemapData[];

  /** Key in data object for the value @default 'value' @category appearance */
  dataKey?: string;

  /** The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given @default 1.618033988749895 @category appearance */
  aspectRatio?: number;

  /** Determines whether the tooltip should be displayed when a node is hovered @default true @category appearance */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 @category appearance */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Treemap` component */
  treemapProps?: Partial<Omit<RechartsTreemapProps, 'ref' | 'data' | 'dataKey'>>;

  /** Controls color of the node stroke, by default depends on color scheme @category appearance */
  strokeColor?: MantineColor;

  /** Controls text color of labels. If not set, labels are black or white depending on `autoContrast` @category appearance */
  textColor?: MantineColor;

  /** Controls chart height @default 300 @category appearance */
  height?: number;

  /** Controls width of node stroke @default 1 @category appearance */
  strokeWidth?: number;

  /** A function to format values inside the tooltip @category appearance */
  valueFormatter?: (value: number) => string;

  /** Determines whether label color should be black or white depending on the node fill to improve contrast. Ignored when `textColor` is set @default theme.autoContrast @category appearance */
  autoContrast?: boolean;

  /** Additional elements rendered inside `Treemap` component @category appearance */
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

const FALLBACK_COLORS = ['blue', 'teal', 'orange', 'grape', 'cyan', 'pink', 'lime', 'indigo'];
const LABEL_FONT_SIZE = 12;
const LABEL_LINE_HEIGHT = 16;
const LABEL_PADDING = 4;
const LABEL_MIN_WIDTH = LABEL_FONT_SIZE * 2;
const LABEL_MIN_HEIGHT = 20;

const RESOLVED_KEY = '__mantineTreemap';

interface ResolvedTreemapColors {
  fill: string;
  labelColor: string;
}

interface ResolvedTreemapNode {
  name: string;
  children?: ResolvedTreemapNode[];
  [RESOLVED_KEY]: ResolvedTreemapColors;
  [key: string]: unknown;
}

interface TreemapContentProps {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  name: string;
  [RESOLVED_KEY]?: ResolvedTreemapColors;
  strokeWidth: number;
}

function TreemapContent({
  x,
  y,
  width,
  height,
  depth,
  name,
  [RESOLVED_KEY]: resolved,
  strokeWidth,
}: TreemapContentProps) {
  const fill = resolved?.fill;
  const labelColor = resolved?.labelColor;
  const labelWidth = width - LABEL_PADDING * 2;
  const withLabel = depth >= 1 && height > LABEL_MIN_HEIGHT && labelWidth >= LABEL_MIN_WIDTH;

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
      {withLabel && (
        <foreignObject
          x={x + LABEL_PADDING}
          y={y + (height - LABEL_LINE_HEIGHT) / 2}
          width={labelWidth}
          height={LABEL_LINE_HEIGHT}
        >
          <div
            style={{
              color: labelColor,
              fontSize: LABEL_FONT_SIZE,
              lineHeight: `${LABEL_LINE_HEIGHT}px`,
              fontFamily: 'var(--mantine-font-family)',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </div>
        </foreignObject>
      )}
    </g>
  );
}

interface ResolveDataOptions {
  theme: MantineTheme;
  autoContrast: boolean;
  textColor: string | undefined;
}

function resolveData(
  data: TreemapData[],
  options: ResolveDataOptions,
  parentFill?: string
): ResolvedTreemapNode[] {
  return data.map((item, index) => {
    const fill = item.color
      ? parseThemeColor({ color: item.color, theme: options.theme }).value
      : parentFill ||
        parseThemeColor({
          color: `${FALLBACK_COLORS[index % FALLBACK_COLORS.length]}.6`,
          theme: options.theme,
        }).value;

    const labelColor =
      options.textColor ||
      (options.autoContrast && isLightColor(fill, options.theme.luminanceThreshold)
        ? 'var(--mantine-color-black)'
        : 'var(--mantine-color-white)');

    return {
      ...item,
      [RESOLVED_KEY]: { fill, labelColor },
      children: item.children ? resolveData(item.children, options, fill) : undefined,
    };
  });
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
  const _autoContrast = getAutoContrastValue(autoContrast, theme);
  const _textColor = textColor ? getThemeColor(textColor, theme) : undefined;
  const resolvedData = useMemo(
    () => resolveData(data, { theme, autoContrast: _autoContrast, textColor: _textColor }),
    [data, theme, _autoContrast, _textColor]
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
          data={resolvedData}
          dataKey={dataKey as any}
          aspectRatio={aspectRatio}
          isAnimationActive={false}
          content={(nodeProps: any) => <TreemapContent {...nodeProps} strokeWidth={strokeWidth!} />}
          {...treemapProps}
        >
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={!!tooltipAnimationDuration}
              content={({ payload }) => (
                <ChartTooltip
                  payload={
                    payload?.map((item) => ({
                      name: item.name as string,
                      value: item.value as number,
                      color: item.payload?.[RESOLVED_KEY]?.fill,
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
