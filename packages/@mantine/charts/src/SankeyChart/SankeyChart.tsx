import React from 'react';
import {
  Sankey as RechartsSankey,
  SankeyProps as RechartsSankeyProps,
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
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ChartTooltip, ChartTooltipStylesNames } from '../ChartTooltip/ChartTooltip';
import classes from './SankeyChart.module.css';

export interface SankeyChartNode {
  name: string;
  color?: MantineColor;
  [key: string]: unknown;
}

export interface SankeyChartLink {
  source: number;
  target: number;
  value: number;
  [key: string]: unknown;
}

export interface SankeyChartData {
  nodes: SankeyChartNode[];
  links: SankeyChartLink[];
}

export type SankeyChartStylesNames = 'root' | ChartTooltipStylesNames;
export type SankeyChartCssVariables = {
  root: '--chart-node-color' | '--chart-link-color' | '--chart-text-color' | '--chart-height';
};

export interface SankeyChartProps
  extends BoxProps, StylesApiProps<SankeyChartFactory>, ElementProps<'div'> {
  /** Data used to render chart, must include `nodes` and `links` arrays */
  data: SankeyChartData;

  /** Controls chart height @default 300 */
  height?: number;

  /** The width of each node @default 10 */
  nodeWidth?: number;

  /** The padding between nodes @default 10 */
  nodePadding?: number;

  /** The curvature of links between nodes @default 0.5 */
  linkCurvature?: number;

  /** The number of relaxation iterations @default 32 */
  iterations?: number;

  /** Default color for nodes, by default depends on color scheme */
  nodeColor?: MantineColor;

  /** An array of colors used for nodes when no `color` is set on individual nodes */
  colors?: MantineColor[];

  /** Default color for links, by default depends on color scheme */
  linkColor?: MantineColor;

  /** Opacity of the link fill @default 0.4 */
  linkOpacity?: number;

  /** Determines whether the tooltip should be displayed when hovered @default true */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Sankey` component */
  sankeyProps?: Partial<Omit<RechartsSankeyProps, 'ref' | 'data'>>;

  /** Controls text color of labels @default dimmed */
  textColor?: MantineColor;

  /** A function to format values inside the tooltip and node labels */
  valueFormatter?: (value: number) => string;

  /** Additional elements rendered inside `Sankey` component */
  children?: React.ReactNode;
}

export type SankeyChartFactory = Factory<{
  props: SankeyChartProps;
  ref: HTMLDivElement;
  stylesNames: SankeyChartStylesNames;
  vars: SankeyChartCssVariables;
}>;

const defaultProps = {
  height: 300,
  nodeWidth: 10,
  nodePadding: 10,
  linkCurvature: 0.5,
  iterations: 32,
  linkOpacity: 0.4,
  withTooltip: true,
  tooltipAnimationDuration: 0,
} satisfies Partial<SankeyChartProps>;

const varsResolver = createVarsResolver<SankeyChartFactory>(
  (theme, { nodeColor, linkColor, textColor, height }) => ({
    root: {
      '--chart-node-color': nodeColor ? getThemeColor(nodeColor, theme) : undefined,
      '--chart-link-color': linkColor ? getThemeColor(linkColor, theme) : undefined,
      '--chart-text-color': textColor ? getThemeColor(textColor, theme) : undefined,
      '--chart-height': rem(height),
    },
  })
);

interface SankeyNodeContentProps {
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  payload: { name: string; value: number; targetNodes: number[]; color?: string };
  resolvedNodeColors: Record<number, string>;
  resolvedDefaultColors: string[];
  valueFormatter?: (value: number) => string;
}

const DEFAULT_COLORS = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-cyan-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-green-filled)',
  'var(--mantine-color-lime-filled)',
  'var(--mantine-color-yellow-filled)',
  'var(--mantine-color-orange-filled)',
  'var(--mantine-color-red-filled)',
  'var(--mantine-color-pink-filled)',
  'var(--mantine-color-grape-filled)',
  'var(--mantine-color-violet-filled)',
  'var(--mantine-color-indigo-filled)',
];

function SankeyNodeContent({
  x,
  y,
  width,
  height,
  index,
  payload,
  resolvedNodeColors,
  resolvedDefaultColors,
  valueFormatter,
}: SankeyNodeContentProps) {
  const fill =
    resolvedNodeColors[index] ||
    `var(--chart-node-color, ${resolvedDefaultColors[index % resolvedDefaultColors.length]})`;

  const isLeaf = !payload.targetNodes || payload.targetNodes.length === 0;
  const labelX = isLeaf ? x - 6 : x + width + 6;
  const textAnchor = isLeaf ? 'end' : 'start';
  const formattedValue = valueFormatter ? valueFormatter(payload.value) : payload.value;
  const stacked = height >= 28;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} stroke="none" />
      {stacked ? (
        <>
          <text
            x={labelX}
            y={y + height / 2 - 7}
            textAnchor={textAnchor}
            dominantBaseline="central"
            fill="var(--chart-text-color, var(--mantine-color-text))"
            fontSize={12}
            fontFamily="var(--mantine-font-family)"
          >
            {payload.name}
          </text>
          <text
            x={labelX}
            y={y + height / 2 + 7}
            textAnchor={textAnchor}
            dominantBaseline="central"
            fill="var(--chart-text-color, var(--mantine-color-text))"
            fontSize={12}
            fontFamily="var(--mantine-font-family)"
            opacity={0.8}
          >
            {formattedValue}
          </text>
        </>
      ) : (
        <text
          x={labelX}
          y={y + height / 2}
          textAnchor={textAnchor}
          dominantBaseline="central"
          fill="var(--chart-text-color, var(--mantine-color-text))"
          fontSize={12}
          fontFamily="var(--mantine-font-family)"
        >
          {payload.name} <tspan opacity={0.8}>{formattedValue}</tspan>
        </text>
      )}
    </g>
  );
}

interface SankeyLinkContentProps {
  sourceX: number;
  targetX: number;
  sourceY: number;
  targetY: number;
  sourceControlX: number;
  targetControlX: number;
  linkWidth: number;
  index: number;
  payload: {
    source: { color?: string };
    target: { color?: string };
  };
  sourceResolvedColor?: string;
  linkOpacity: number;
}

function SankeyLinkContent({
  sourceX,
  targetX,
  sourceY,
  targetY,
  sourceControlX,
  targetControlX,
  linkWidth,
  sourceResolvedColor,
  linkOpacity,
}: SankeyLinkContentProps) {
  const fill = sourceResolvedColor || 'var(--chart-link-color, var(--mantine-color-gray-4))';

  return (
    <path
      d={`
        M${sourceX},${sourceY + linkWidth / 2}
        C${sourceControlX},${sourceY + linkWidth / 2}
          ${targetControlX},${targetY + linkWidth / 2}
          ${targetX},${targetY + linkWidth / 2}
        L${targetX},${targetY - linkWidth / 2}
        C${targetControlX},${targetY - linkWidth / 2}
          ${sourceControlX},${sourceY - linkWidth / 2}
          ${sourceX},${sourceY - linkWidth / 2}
        Z
      `}
      fill={fill}
      opacity={linkOpacity}
      stroke="none"
    />
  );
}

export const SankeyChart = factory<SankeyChartFactory>((_props) => {
  const props = useProps('SankeyChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    height: chartHeight,
    nodeWidth,
    nodePadding,
    linkCurvature,
    iterations,
    nodeColor,
    colors,
    linkColor,
    linkOpacity,
    textColor,
    withTooltip,
    tooltipAnimationDuration,
    tooltipProps,
    sankeyProps,
    valueFormatter,
    children,
    attributes,
    ...others
  } = props;

  const theme = useMantineTheme();

  const resolvedNodeColors: Record<number, string> = {};
  data.nodes.forEach((node, index) => {
    if (node.color) {
      resolvedNodeColors[index] = getThemeColor(node.color, theme);
    }
  });

  const resolvedDefaultColors = colors
    ? colors.map((color) => getThemeColor(color, theme))
    : DEFAULT_COLORS;

  const getStyles = useStyles<SankeyChartFactory>({
    name: 'SankeyChart',
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<SankeyChartFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Box {...getStyles('root')} {...others}>
      <ResponsiveContainer height={chartHeight}>
        <RechartsSankey
          data={data as any}
          nodeWidth={nodeWidth}
          nodePadding={nodePadding}
          linkCurvature={linkCurvature}
          iterations={iterations}
          node={(nodeProps: any) => (
            <SankeyNodeContent
              {...nodeProps}
              resolvedNodeColors={resolvedNodeColors}
              resolvedDefaultColors={resolvedDefaultColors}
              valueFormatter={valueFormatter}
            />
          )}
          link={(linkProps: any) => {
            const sourceIndex =
              linkProps.index >= 0 && linkProps.index < data.links.length
                ? data.links[linkProps.index].source
                : -1;
            return (
              <SankeyLinkContent
                {...linkProps}
                sourceResolvedColor={resolvedNodeColors[sourceIndex]}
                linkOpacity={linkOpacity!}
              />
            );
          }}
          {...sankeyProps}
        >
          {withTooltip && (
            <Tooltip
              animationDuration={tooltipAnimationDuration}
              isAnimationActive={false}
              content={({ payload }) => {
                const resolveColor = (item: any) => {
                  const nodeIndex = data.nodes.findIndex((n) => n.name === item.name);
                  if (nodeIndex !== -1) {
                    return (
                      resolvedNodeColors[nodeIndex] ||
                      resolvedDefaultColors[nodeIndex % resolvedDefaultColors.length]
                    );
                  }

                  const sourceNode = item.payload?.source;
                  if (sourceNode) {
                    const sourceIndex = data.nodes.findIndex((n) => n.name === sourceNode.name);
                    if (sourceIndex !== -1) {
                      return (
                        resolvedNodeColors[sourceIndex] ||
                        resolvedDefaultColors[sourceIndex % resolvedDefaultColors.length]
                      );
                    }
                  }

                  return 'var(--mantine-color-blue-6)';
                };

                return (
                  <ChartTooltip
                    payload={
                      payload?.map((item) => ({
                        name: item.name as string,
                        value: item.value as number,
                        color: resolveColor(item),
                      })) || []
                    }
                    classNames={resolvedClassNames}
                    styles={resolvedStyles}
                    type="radial"
                    valueFormatter={valueFormatter}
                    attributes={attributes}
                  />
                );
              }}
              {...tooltipProps}
            />
          )}

          {children}
        </RechartsSankey>
      </ResponsiveContainer>
    </Box>
  );
});

SankeyChart.displayName = '@mantine/charts/SankeyChart';
SankeyChart.classes = classes;
SankeyChart.varsResolver = varsResolver;
