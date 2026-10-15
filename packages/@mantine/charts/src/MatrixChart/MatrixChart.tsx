import { useMemo, useRef, useState } from 'react';
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
import { useIsomorphicEffect } from '@mantine/hooks';
import { getHeatColor } from '../utils/get-heat-color/get-heat-color';
import { buildCellMap, getCellKey } from './build-cell-map/build-cell-map';
import { getAxisValues } from './get-axis-values/get-axis-values';
import { getDataRange, getDomain } from './get-domain/get-domain';
import {
  estimateTextWidth,
  getLegendLayout,
  measureTextWidth,
} from './get-legend-layout/get-legend-layout';
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
  /** Array of cell objects with x, y, and value @category appearance */
  data: MatrixChartData;

  /** Labels for x-axis (columns), displayed along top or bottom @category appearance */
  xLabels?: string[];

  /** Labels for y-axis (rows), displayed along left side @category appearance */
  yLabels?: string[];

  /** Value domain [min, max] mapped to the colors palette, a reversed domain (`[max, min]`) inverts the scale, calculated from the displayed cells by default @category appearance */
  domain?: [number, number];

  /** Colors palette, each value is painted with the nearest palette color, by default 4 shades of green colors are used @category appearance */
  colors?: MantineColor[];

  /** Cell size in px, @default 20 @category appearance */
  cellSize?: number;

  /** Gap between cells in px, @default 1 @category appearance */
  gap?: number;

  /** Cell border radius, @default 2 @category appearance */
  cellRadius?: number;

  /** If set, tooltip is displayed on cell hover, requires `getTooltipLabel` to be set @default false @category appearance */
  withTooltip?: boolean;

  /** A function to generate tooltip label based on the hovered cell, required for the tooltip to be visible @category appearance */
  getTooltipLabel?: (cell: MatrixChartCell) => React.ReactNode;

  /** Props passed down to the `Tooltip.Floating` component */
  tooltipProps?: Partial<TooltipFloatingProps>;

  /** Callback to add custom props to cells */
  getCellProps?: (cell: MatrixChartCell) => React.ComponentProps<'rect'>;

  /** Width reserved for y-axis labels, @default 60 @category appearance */
  yLabelsWidth?: number;

  /** Height reserved for x-axis labels, @default 60 @category appearance */
  xLabelsHeight?: number;

  /** X-axis label position, @default 'bottom' @category appearance */
  xLabelsPosition?: 'top' | 'bottom';

  /** Font size for axis labels, @default 12 @category appearance */
  fontSize?: number;

  /** Color for empty/null cells @category appearance */
  emptyColor?: MantineColor;

  /** Whether to show legend, @default false @category appearance */
  withLegend?: boolean;

  /** Legend labels, @default ['Less', 'More'] @category appearance */
  legendLabels?: [string, string];

  /** If set, x-axis labels are displayed, @default false @category appearance */
  withXLabels?: boolean;

  /** If set, y-axis labels are displayed, @default false @category appearance */
  withYLabels?: boolean;

  /** Rotation angle for x-axis labels in degrees, @default -90 @category appearance */
  xLabelsRotation?: number;

  /** Function to format values in the generated accessible summary @category appearance */
  valueFormatter?: (value: number) => string;
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
const ROTATION_EPSILON = 1e-6;

function defaultValueFormatter(value: number) {
  return String(Number(value.toFixed(10)));
}

function pluralize(count: number, word: string) {
  return `${count} ${word}${count === 1 ? '' : 's'}`;
}

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
    cellSize,
    gap,
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
    withYLabels,
    xLabelsRotation,
    valueFormatter,
    attributes,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
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

  const [hoveredKey, setHoveredKey] = useState<{ x: string; y: string } | null>(null);
  const [measuredLabels, setMeasuredLabels] = useState<{
    less: number | null;
    more: number | null;
    lastXLabel: number | null;
  } | null>(null);
  const lessLabelRef = useRef<SVGTextElement>(null);
  const moreLabelRef = useRef<SVGTextElement>(null);
  const lastXLabelRef = useRef<SVGTextElement>(null);

  const measureLabels = () => {
    const less = measureTextWidth(lessLabelRef.current);
    const more = measureTextWidth(moreLabelRef.current);
    const lastXLabel = measureTextWidth(lastXLabelRef.current);
    setMeasuredLabels((current) =>
      current && current.less === less && current.more === more && current.lastXLabel === lastXLabel
        ? current
        : { less, more, lastXLabel }
    );
  };

  useIsomorphicEffect(() => {
    if (withLegend || withXLabels) {
      measureLabels();
    }
  });

  useIsomorphicEffect(() => {
    let active = true;
    document.fonts?.ready?.then(() => active && measureLabels());
    return () => {
      active = false;
    };
  }, []);

  const xValues = useMemo(() => getAxisValues(data, 'x', xLabelsProp), [data, xLabelsProp]);

  const yValues = useMemo(() => getAxisValues(data, 'y', yLabelsProp), [data, yLabelsProp]);

  const cellMap = useMemo(() => buildCellMap(data), [data]);
  const rows = useMemo(
    () => yValues.map((y) => xValues.map((x) => cellMap.get(getCellKey(x, y)))),
    [cellMap, xValues, yValues]
  );
  const dataRange = useMemo(() => getDataRange(rows.flat()), [rows]);
  const [min, max] = getDomain(dataRange, domain);

  const theme = useMantineTheme();

  const resolvedColors = useMemo(() => {
    const palette = colors && colors.length > 0 ? colors : defaultProps.colors;
    return palette.map((color) => getThemeColor(color, theme));
  }, [colors, theme]);

  const hasEmptyColor = !!emptyColor;
  const resolvedEmptyColor = hasEmptyColor ? getThemeColor(emptyColor, theme) : undefined;

  const cellSizeWithGap = cellSize + gap;

  const hasXLabels = withXLabels === true && xValues.length > 0;
  const hasYLabels = withYLabels === true && yValues.length > 0;
  const isRotated = xLabelsRotation !== 0;
  const rotationRadians = (xLabelsRotation * Math.PI) / 180;
  const rotationSin = Math.sin(rotationRadians);
  const rotationCos = Math.cos(rotationRadians);
  const isSideways = Math.abs(rotationSin) > ROTATION_EPSILON;

  const gridX = hasYLabels ? yLabelsWidth : 0;
  const xLabelAtTop = hasXLabels && xLabelsPosition === 'top';
  const xLabelAtBottom = hasXLabels && xLabelsPosition === 'bottom';
  const gridY = xLabelAtTop ? xLabelsHeight : 0;
  const xBottomHeight = xLabelAtBottom ? xLabelsHeight : 0;
  const xLabelsAway = xLabelAtTop ? -1 : 1;
  const xLabelsAnchor = isSideways ? (rotationSin * xLabelsAway > 0 ? 'start' : 'end') : 'middle';

  const legendHeight = withLegend ? LEGEND_PADDING + cellSize : 0;

  const gridWidth = Math.max(0, xValues.length * cellSizeWithGap - gap);
  const gridHeight = Math.max(0, yValues.length * cellSizeWithGap - gap);
  const xLabelsY = xLabelAtTop ? gridY - 8 : gridY + gridHeight + 8;

  const [lessLabel, moreLabel] = legendLabels;
  const lessWidth = measuredLabels?.less ?? estimateTextWidth(lessLabel, fontSize);
  const moreWidth = measuredLabels?.more ?? estimateTextWidth(moreLabel, fontSize);

  const legendLayout = getLegendLayout({
    lessWidth,
    moreWidth,
    colorsCount: resolvedColors.length,
    cellSize,
    gap,
  });
  const legendWidth = withLegend ? legendLayout.width : 0;

  const lastXLabel = hasXLabels ? xValues[xValues.length - 1] : '';
  const lastXLabelWidth = measuredLabels?.lastXLabel ?? estimateTextWidth(lastXLabel, fontSize);
  const lastXLabelReach =
    (xLabelsAnchor === 'start'
      ? Math.max(0, rotationCos) * lastXLabelWidth
      : xLabelsAnchor === 'end'
        ? Math.max(0, -rotationCos) * lastXLabelWidth
        : (Math.abs(rotationCos) * lastXLabelWidth) / 2) +
    (Math.abs(rotationSin) * fontSize) / 2;
  const xLabelsOverhang = hasXLabels ? Math.max(0, Math.ceil(lastXLabelReach - cellSize / 2)) : 0;

  const svgWidth = Math.max(gridX + gridWidth + xLabelsOverhang, legendWidth);
  const svgHeight = gridY + gridHeight + xBottomHeight + legendHeight;

  const cellNodes = yValues.map((yVal, rowIndex) =>
    xValues.map((xVal, colIndex) => {
      const cell = rows[rowIndex][colIndex];
      const value = cell?.value ?? null;
      const isEmpty = value === null || !Number.isFinite(value);

      const fill = isEmpty
        ? resolvedEmptyColor
        : getHeatColor({ value, min, max, colors: resolvedColors });

      const {
        className: cellClassName,
        style: cellStyle,
        onPointerEnter,
        ...extraProps
      } = getCellProps && cell ? getCellProps(cell) : ({} as React.ComponentProps<'rect'>);

      return (
        <rect
          key={`${colIndex}-${rowIndex}`}
          x={gridX + colIndex * cellSizeWithGap}
          y={gridY + rowIndex * cellSizeWithGap}
          width={cellSize}
          height={cellSize}
          rx={cellRadius}
          fill={fill}
          data-empty={(isEmpty && !hasEmptyColor) || undefined}
          onPointerEnter={
            withTooltip || onPointerEnter
              ? (event) => {
                  withTooltip && setHoveredKey({ x: xVal, y: yVal });
                  onPointerEnter?.(event);
                }
              : undefined
          }
          {...getStyles('cell', { className: cellClassName, style: cellStyle })}
          {...extraProps}
        />
      );
    })
  );

  const yLabelNodes = hasYLabels
    ? yValues.map((label, index) => (
        <text
          key={index}
          x={gridX - 8}
          y={gridY + index * cellSizeWithGap + cellSize / 2}
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
        const x = gridX + index * cellSizeWithGap + cellSize / 2;

        return (
          <text
            key={index}
            ref={index === xValues.length - 1 ? lastXLabelRef : undefined}
            x={x}
            y={xLabelsY}
            fontSize={fontSize}
            textAnchor={xLabelsAnchor}
            dominantBaseline={
              isSideways ? 'central' : rotationCos * xLabelsAway > 0 ? 'hanging' : 'auto'
            }
            transform={isRotated ? `rotate(${xLabelsRotation}, ${x}, ${xLabelsY})` : undefined}
            {...getStyles('xLabel')}
          >
            {label}
          </text>
        );
      })
    : null;

  const hoveredCell =
    hoveredKey && xValues.includes(hoveredKey.x) && yValues.includes(hoveredKey.y)
      ? (cellMap.get(getCellKey(hoveredKey.x, hoveredKey.y)) ?? { ...hoveredKey, value: null })
      : null;
  const tooltipLabel =
    getTooltipLabel && hoveredCell && withTooltip ? getTooltipLabel(hoveredCell) : null;

  const legendColors = min > max ? [...resolvedColors].reverse() : resolvedColors;
  const legendX = svgWidth - legendWidth;
  const legendY = gridY + gridHeight + xBottomHeight + LEGEND_PADDING;

  const legendNode = withLegend ? (
    <g transform={`translate(${legendX}, ${legendY})`} data-id="legend" {...getStyles('legend')}>
      <text
        ref={lessLabelRef}
        x={0}
        y={cellSize / 2}
        fontSize={fontSize}
        dominantBaseline="central"
        {...getStyles('legendLabel')}
      >
        {lessLabel}
      </text>
      {legendColors.map((color, i) => (
        <rect
          key={i}
          x={legendLayout.rectsX + i * (cellSize + gap)}
          y={0}
          width={cellSize}
          height={cellSize}
          rx={cellRadius}
          fill={color}
          {...getStyles('legendRect')}
        />
      ))}
      <text
        ref={moreLabelRef}
        x={legendLayout.moreLabelX}
        y={cellSize / 2}
        fontSize={fontSize}
        dominantBaseline="central"
        {...getStyles('legendLabel')}
      >
        {moreLabel}
      </text>
    </g>
  ) : null;

  const formatValue = valueFormatter ?? defaultValueFormatter;
  const hasCallerLabel = ariaLabel !== undefined || ariaLabelledBy !== undefined;
  const valuesSummary = dataRange
    ? dataRange[0] === dataRange[1]
      ? `, all values ${formatValue(dataRange[0])}`
      : `, values from ${formatValue(dataRange[0])} to ${formatValue(dataRange[1])}`
    : '';
  const summary =
    xValues.length > 0 && yValues.length > 0
      ? `Matrix chart, ${pluralize(xValues.length, 'column')} by ${pluralize(yValues.length, 'row')}${valuesSummary}`
      : undefined;

  return (
    <Tooltip.Floating
      label={tooltipLabel}
      disabled={!withTooltip || tooltipLabel == null}
      position="top"
      {...tooltipProps}
    >
      <Box
        component="svg"
        width={svgWidth}
        height={svgHeight}
        role={hasCallerLabel || summary ? 'img' : undefined}
        aria-label={hasCallerLabel ? ariaLabel : summary}
        aria-labelledby={ariaLabelledBy}
        direction="ltr"
        {...getStyles('root')}
        {...others}
      >
        <g data-id="all-cells" onPointerLeave={withTooltip ? () => setHoveredKey(null) : undefined}>
          {withTooltip && (
            <rect fill="transparent" x={gridX} y={gridY} width={gridWidth} height={gridHeight} />
          )}
          {cellNodes}
        </g>
        {yLabelNodes}
        {xLabelNodes}
        {legendNode}
      </Box>
    </Tooltip.Floating>
  );
});

MatrixChart.displayName = '@mantine/charts/MatrixChart';
MatrixChart.classes = classes;
