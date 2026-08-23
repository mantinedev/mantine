import { useMemo, useState } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  StylesApiProps,
  Tooltip,
  TooltipFloatingProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { getHeatColor } from '../Heatmap/get-heat-color/get-heat-color';
import { buildCellMap, getCellKey } from './build-cell-map/build-cell-map';
import { getDomain } from './get-domain/get-domain';
import { getLegendWidth } from './get-legend-width/get-legend-width';
import { getUniqueValues } from './get-unique-values/get-unique-values';
import classes from './MatrixChart.module.css';

export interface MatrixChartCell {
  x: string;
  y: string;
  value: number | null;
}

export type MatrixChartData = MatrixChartCell[];

export type MatrixChartStylesNames =
  | 'root'
  | 'cell'
  | 'xLabel'
  | 'yLabel'
  | 'legend'
  | 'legendLabel'
  | 'legendRect';

export interface MatrixChartProps
  extends
    BoxProps,
    StylesApiProps<MatrixChartFactory>,
    ElementProps<'svg', 'display' | 'opacity' | 'viewBox' | 'width' | 'height'> {
  /** Array of cell objects with x, y, and value */
  data: MatrixChartData;

  /** Labels for x-axis (columns), displayed along top or bottom */
  xLabels?: string[];

  /** Labels for y-axis (rows), displayed along left side */
  yLabels?: string[];

  /** Value domain [min, max] for color interpolation, auto-calculated if not set */
  domain?: [number, number];

  /** Array of colors for value interpolation, by default 4 shades of green colors are used */
  colors?: MantineColor[];

  /** Cell size in px, @default 20 */
  cellSize?: number;

  /** Gap between cells in px, @default 1 */
  gap?: number;

  /** Cell border radius, @default 2 */
  cellRadius?: number;

  /** If set, tooltip is displayed on cell hover, requires `getTooltipLabel` to be set @default false */
  withTooltip?: boolean;

  /** A function to generate tooltip label based on the hovered cell, required for the tooltip to be visible */
  getTooltipLabel?: (cell: MatrixChartCell) => React.ReactNode;

  /** Props passed down to the `Tooltip.Floating` component */
  tooltipProps?: Partial<TooltipFloatingProps>;

  /** Callback to add custom props to cells */
  getCellProps?: (cell: MatrixChartCell) => React.ComponentProps<'rect'>;

  /** Width reserved for y-axis labels, @default 60 */
  yLabelsWidth?: number;

  /** Height reserved for x-axis labels, @default 60 */
  xLabelsHeight?: number;

  /** X-axis label position, @default 'bottom' */
  xLabelsPosition?: 'top' | 'bottom';

  /** Font size for axis labels, @default 12 */
  fontSize?: number;

  /** Color for empty/null cells */
  emptyColor?: MantineColor;

  /** Whether to show legend, @default false */
  withLegend?: boolean;

  /** Legend labels, @default ['Less', 'More'] */
  legendLabels?: [string, string];

  /** If set, x-axis labels are displayed, @default false */
  withXLabels?: boolean;

  /** Rotation angle for x-axis labels in degrees, @default -90 */
  xLabelsRotation?: number;
}

export type MatrixChartFactory = Factory<{
  props: MatrixChartProps;
  ref: SVGSVGElement;
  stylesNames: MatrixChartStylesNames;
}>;

const defaultProps = {
  cellSize: 20,
  gap: 1,
  cellRadius: 2,
  yLabelsWidth: 60,
  xLabelsHeight: 60,
  xLabelsPosition: 'bottom',
  fontSize: 12,
  xLabelsRotation: -90,
  colors: [
    'var(--matrix-level-1)',
    'var(--matrix-level-2)',
    'var(--matrix-level-3)',
    'var(--matrix-level-4)',
  ],
  legendLabels: ['Less', 'More'] as [string, string],
} satisfies Partial<MatrixChartProps>;

const LEGEND_PADDING = 10;
const TEXT_GAP = 6;

export const MatrixChart = factory<MatrixChartFactory>((_props) => {
  const props = useProps('MatrixChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    xLabels: xLabelsProp,
    yLabels: yLabelsProp,
    domain,
    colors,
    cellSize = 20,
    gap = 1,
    cellRadius,
    withTooltip,
    getTooltipLabel,
    tooltipProps,
    getCellProps,
    yLabelsWidth,
    xLabelsHeight,
    xLabelsPosition,
    fontSize,
    emptyColor,
    withLegend,
    legendLabels,
    withXLabels,
    xLabelsRotation,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<MatrixChartFactory>({
    name: 'MatrixChart',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const [hoveredCell, setHoveredCell] = useState<MatrixChartCell | null>(null);

  const xValues = useMemo(() => getUniqueValues(data, 'x', xLabelsProp), [data, xLabelsProp]);

  const yValues = useMemo(() => getUniqueValues(data, 'y', yLabelsProp), [data, yLabelsProp]);

  const cellMap = useMemo(() => buildCellMap(data), [data]);
  const [min, max] = useMemo(() => getDomain(data, domain), [data, domain]);

  const theme = useMantineTheme();

  const resolvedColors = useMemo(
    () => colors!.map((color) => getThemeColor(color, theme)),
    [colors, theme]
  );

  const resolvedEmptyColor = emptyColor ? getThemeColor(emptyColor, theme) : undefined;

  const cellSizeWithGap = cellSize + gap;

  const hasXLabels = withXLabels === true && xValues.length > 0;
  const hasYLabels = yLabelsProp !== undefined && yLabelsProp.length > 0;
  const isRotated = xLabelsRotation !== 0 && xLabelsRotation !== undefined;

  const yOffset = hasYLabels ? yLabelsWidth! : 0;
  const xLabelAtTop = hasXLabels && xLabelsPosition === 'top';
  const xLabelAtBottom = hasXLabels && xLabelsPosition === 'bottom';
  const xTopOffset = xLabelAtTop ? xLabelsHeight! : 0;
  const xBottomHeight = xLabelAtBottom ? xLabelsHeight! : 0;

  const legendHeight = withLegend ? LEGEND_PADDING + cellSize : 0;

  const gridWidth = Math.max(0, xValues.length * cellSizeWithGap - gap);
  const gridHeight = Math.max(0, yValues.length * cellSizeWithGap - gap);

  const legendWidth = withLegend
    ? getLegendWidth({
        legendLabels: legendLabels!,
        fontSize: fontSize!,
        colorsCount: (colors || []).length,
        cellSize,
        gap,
      })
    : 0;

  const svgWidth = Math.max(yOffset + gridWidth, legendWidth);
  const svgHeight = xTopOffset + gridHeight + xBottomHeight + legendHeight;

  const cellNodes = yValues.map((yVal, rowIndex) =>
    xValues.map((xVal, colIndex) => {
      const cell = cellMap.get(getCellKey(xVal, yVal));
      const value = cell?.value ?? null;
      const isEmpty = value === null;

      const fill = isEmpty
        ? resolvedEmptyColor
        : getHeatColor({ value, min, max, colors: resolvedColors });

      const extraProps = getCellProps && cell ? getCellProps(cell) : {};

      return (
        <rect
          key={`${colIndex}-${rowIndex}`}
          x={yOffset + colIndex * cellSizeWithGap}
          y={xTopOffset + rowIndex * cellSizeWithGap}
          width={cellSize}
          height={cellSize}
          rx={cellRadius}
          fill={fill}
          data-empty={(isEmpty && !emptyColor) || undefined}
          onPointerEnter={
            withTooltip
              ? () => setHoveredCell(cell || { x: xVal, y: yVal, value: null })
              : undefined
          }
          {...getStyles('cell')}
          {...extraProps}
        />
      );
    })
  );

  const yLabelNodes = hasYLabels
    ? yValues.map((label, index) => (
        <text
          key={index}
          x={yOffset - 8}
          y={xTopOffset + index * cellSizeWithGap + cellSize / 2}
          fontSize={fontSize}
          textAnchor="end"
          dominantBaseline="central"
          {...getStyles('yLabel')}
        >
          {label}
        </text>
      ))
    : null;

  const xLabelNodes = hasXLabels
    ? xValues.map((label, index) => {
        const x = yOffset + index * cellSizeWithGap + cellSize / 2;
        const y = xLabelAtTop ? xLabelsHeight! - 8 : xTopOffset + gridHeight + 8;

        return (
          <text
            key={index}
            x={x}
            y={y}
            fontSize={fontSize}
            textAnchor={isRotated ? 'end' : 'middle'}
            dominantBaseline={isRotated ? 'central' : xLabelAtTop ? 'auto' : 'hanging'}
            transform={isRotated ? `rotate(${xLabelsRotation}, ${x}, ${y})` : undefined}
            {...getStyles('xLabel')}
          >
            {label}
          </text>
        );
      })
    : null;

  const label = getTooltipLabel && hoveredCell && withTooltip ? getTooltipLabel(hoveredCell) : null;

  const charWidth = fontSize! * 0.6;
  const lessLabel = legendLabels![0];
  const moreLabel = legendLabels![1];
  const lessWidth = lessLabel.length * charWidth;
  const allColors = [resolvedEmptyColor, ...resolvedColors];
  const rectsWidth = allColors.length * cellSize + (allColors.length - 1) * gap;
  const legendX = svgWidth - legendWidth;
  const legendY = xTopOffset + gridHeight + xBottomHeight + LEGEND_PADDING;

  const legendNode = withLegend ? (
    <g transform={`translate(${legendX}, ${legendY})`} data-id="legend" {...getStyles('legend')}>
      <text
        x={0}
        y={cellSize / 2}
        fontSize={fontSize}
        dominantBaseline="central"
        {...getStyles('legendLabel')}
      >
        {lessLabel}
      </text>
      {allColors.map((color, i) => (
        <rect
          key={i}
          x={lessWidth + TEXT_GAP + i * (cellSize + gap)}
          y={0}
          width={cellSize}
          height={cellSize}
          rx={cellRadius}
          fill={color}
          data-empty={color === undefined || undefined}
          {...getStyles('legendRect')}
        />
      ))}
      <text
        x={lessWidth + TEXT_GAP + rectsWidth + TEXT_GAP}
        y={cellSize / 2}
        fontSize={fontSize}
        dominantBaseline="central"
        {...getStyles('legendLabel')}
      >
        {moreLabel}
      </text>
    </g>
  ) : null;

  // Individual cells carry no accessible information, so a labelled chart is announced as
  // one image instead of letting assistive tech walk a grid of anonymous rectangles.
  const isLabelled = others['aria-label'] !== undefined || others['aria-labelledby'] !== undefined;

  return (
    <Box
      component="svg"
      width={svgWidth}
      height={svgHeight}
      role={isLabelled ? 'img' : undefined}
      {...getStyles('root')}
      {...others}
    >
      <Tooltip.Floating
        label={label}
        disabled={!withTooltip || !label}
        position="top"
        {...tooltipProps}
      >
        <g data-id="all-cells">
          {withTooltip && (
            <rect
              fill="transparent"
              x={yOffset}
              y={xTopOffset}
              width={gridWidth}
              height={gridHeight}
            />
          )}
          {cellNodes}
        </g>
      </Tooltip.Floating>
      {yLabelNodes}
      {xLabelNodes}
      {legendNode}
    </Box>
  );
});

MatrixChart.displayName = '@mantine/charts/MatrixChart';
MatrixChart.classes = classes;
