import React, { useEffect, useMemo } from 'react';
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
  MantineTheme,
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
  /** Data used to render chart, must include `nodes` and `links` arrays @category appearance */
  data: SankeyChartData;

  /** Controls chart height @default 300 @category appearance */
  height?: number;

  /** The width of each node @default 10 @category appearance */
  nodeWidth?: number;

  /** The padding between nodes @default 10 @category appearance */
  nodePadding?: number;

  /** The curvature of links between nodes @default 0.5 @category appearance */
  linkCurvature?: number;

  /** The number of relaxation iterations @default 32 @category appearance */
  iterations?: number;

  /** Color of nodes that do not have `color` set, overrides `colors` palette @category appearance */
  nodeColor?: MantineColor;

  /** Colors palette used for nodes that do not have `color` set when `nodeColor` is not set, cycled by node index. By default, a 12-color palette starting with `blue` @category appearance */
  colors?: MantineColor[];

  /** Color of all links. By default, each link uses the color of its source node @category appearance */
  linkColor?: MantineColor;

  /** Opacity of the link fill @default 0.4 @category appearance */
  linkOpacity?: number;

  /** Determines whether the tooltip should be displayed when hovered @default true @category appearance */
  withTooltip?: boolean;

  /** Tooltip animation duration in ms @default 0 @category appearance */
  tooltipAnimationDuration?: number;

  /** Props passed down to `Tooltip` recharts component */
  tooltipProps?: Omit<TooltipProps<any, any>, 'ref'>;

  /** Props passed down to recharts `Sankey` component */
  sankeyProps?: Partial<Omit<RechartsSankeyProps, 'ref' | 'data'>>;

  /** Controls text color of labels. By default, `var(--mantine-color-text)` @category appearance */
  textColor?: MantineColor;

  /** A function to format values inside the tooltip and node labels @category appearance */
  valueFormatter?: (value: number) => string;

  /** Additional elements rendered inside `Sankey` component @category appearance */
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

const RESOLVED_KEY = '__mantineSankey';

interface ResolvedSankeyColors {
  fill: string;
}

interface ResolvedSankeyEntry {
  [RESOLVED_KEY]: ResolvedSankeyColors;
  [key: string]: unknown;
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

function isValidLink(link: SankeyChartLink, nodesCount: number) {
  return (
    Number.isInteger(link.source) &&
    Number.isInteger(link.target) &&
    link.source >= 0 &&
    link.target >= 0 &&
    link.source < nodesCount &&
    link.target < nodesCount
  );
}

function getAcyclicLinks(nodesCount: number, links: SankeyChartLink[]) {
  const validLinks = links.filter((link) => isValidLink(link, nodesCount));
  const outgoing: number[][] = Array.from({ length: nodesCount }, () => []);
  const hasIncoming = new Array<boolean>(nodesCount).fill(false);
  validLinks.forEach((link, index) => {
    outgoing[link.source].push(index);
    if (link.source !== link.target) {
      hasIncoming[link.target] = true;
    }
  });

  const state = new Array<0 | 1 | 2>(nodesCount).fill(0);
  const backEdges = new Set<number>();

  const visit = (root: number) => {
    const stack: [number, number][] = [[root, 0]];
    state[root] = 1;
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const [node, position] = frame;
      if (position >= outgoing[node].length) {
        state[node] = 2;
        stack.pop();
        continue;
      }
      frame[1] += 1;
      const linkIndex = outgoing[node][position];
      const target = validLinks[linkIndex].target;
      if (state[target] === 1) {
        backEdges.add(linkIndex);
      } else if (state[target] === 0) {
        state[target] = 1;
        stack.push([target, 0]);
      }
    }
  };

  for (let node = 0; node < nodesCount; node += 1) {
    if (!hasIncoming[node] && state[node] === 0) {
      visit(node);
    }
  }

  for (let node = 0; node < nodesCount; node += 1) {
    if (state[node] === 0) {
      visit(node);
    }
  }

  return {
    links: validLinks.filter((_, index) => !backEdges.has(index)),
    droppedLinks: validLinks.filter((_, index) => backEdges.has(index)),
  };
}

interface ResolveDataOptions {
  theme: MantineTheme;
  colors: MantineColor[] | undefined;
}

function resolveData(data: SankeyChartData, { theme, colors }: ResolveDataOptions) {
  const palette = colors?.length
    ? colors.map((color) => getThemeColor(color, theme))
    : DEFAULT_COLORS;
  const { links, droppedLinks } = getAcyclicLinks(data.nodes.length, data.links);

  if (links.length === 0) {
    return { nodes: [] as ResolvedSankeyEntry[], links: [] as ResolvedSankeyEntry[], droppedLinks };
  }

  const nodes: ResolvedSankeyEntry[] = data.nodes.map((node, index) => ({
    ...node,
    [RESOLVED_KEY]: {
      fill: node.color
        ? getThemeColor(node.color, theme)
        : `var(--chart-node-color, ${palette[index % palette.length]})`,
    },
  }));

  const resolvedLinks: ResolvedSankeyEntry[] = links.map((link) => ({
    ...link,
    [RESOLVED_KEY]: {
      fill: `var(--chart-link-color, ${nodes[link.source][RESOLVED_KEY].fill})`,
    },
  }));

  return { nodes, links: resolvedLinks, droppedLinks };
}

interface SankeyNodeContentProps {
  x: number;
  y: number;
  width: number;
  height: number;
  payload: {
    name: string;
    value: number;
    targetNodes: number[];
    [RESOLVED_KEY]?: ResolvedSankeyColors;
  };
  valueFormatter?: (value: number) => string;
}

function SankeyNodeContent({
  x,
  y,
  width,
  height,
  payload,
  valueFormatter,
}: SankeyNodeContentProps) {
  const fill = payload[RESOLVED_KEY]?.fill;

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
            direction="ltr"
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
            direction="ltr"
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
          direction="ltr"
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
  payload: { [RESOLVED_KEY]?: ResolvedSankeyColors };
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
  payload,
  linkOpacity,
}: SankeyLinkContentProps) {
  const fill = payload[RESOLVED_KEY]?.fill;

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

  const resolved = useMemo(() => resolveData(data, { theme, colors }), [data, theme, colors]);

  const droppedLinks = resolved.droppedLinks
    .map((link) => `${link.source} -> ${link.target}`)
    .join(', ');

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && droppedLinks) {
      // oxlint-disable-next-line no-console
      console.warn(
        `[@mantine/charts/SankeyChart] data contains a cycle, links that close it were not rendered: ${droppedLinks}`
      );
    }
  }, [droppedLinks]);

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
    <Box
      role={others['aria-label'] || others['aria-labelledby'] ? 'img' : undefined}
      {...getStyles('root')}
      {...others}
    >
      <ResponsiveContainer height={chartHeight}>
        <RechartsSankey
          data={resolved as any}
          nodeWidth={nodeWidth}
          nodePadding={nodePadding}
          linkCurvature={linkCurvature}
          iterations={iterations}
          accessibilityLayer={false}
          node={(nodeProps: any) => (
            <SankeyNodeContent {...nodeProps} valueFormatter={valueFormatter} />
          )}
          link={(linkProps: any) => <SankeyLinkContent {...linkProps} linkOpacity={linkOpacity!} />}
          {...sankeyProps}
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
                      color: item.payload?.payload?.[RESOLVED_KEY]?.fill,
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
        </RechartsSankey>
      </ResponsiveContainer>
    </Box>
  );
});

SankeyChart.displayName = '@mantine/charts/SankeyChart';
SankeyChart.classes = classes;
SankeyChart.varsResolver = varsResolver;
