import { useState } from 'react';
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
  Tooltip,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './WaffleChart.module.css';

export interface WaffleChartCell {
  /** Segment name */
  name: string;

  /** Segment value */
  value: number;

  /** Segment color */
  color: MantineColor;

  /** Unique key for the segment */
  key?: string | number;
}

export type WaffleChartStylesNames =
  | 'root'
  | 'grid'
  | 'cell'
  | 'legend'
  | 'legendItem'
  | 'legendSwatch'
  | 'legendLabel';

export type WaffleChartCssVariables = {
  root: '--waffle-cell-radius' | '--waffle-empty-color';
};

export interface WaffleChartProps
  extends BoxProps, StylesApiProps<WaffleChartFactory>, ElementProps<'div'> {
  /** Array of data segments with name, value, and color @category appearance */
  data: WaffleChartCell[];

  /** Number of rows, @default 10 @category appearance */
  rows?: number;

  /** Number of columns, @default 10 @category appearance */
  columns?: number;

  /** Total value for the chart, determines how many cells are filled vs empty, sum of all values by default @category appearance */
  total?: number;

  /** Gap between cells in px, @default 2 @category appearance */
  gap?: number;

  /** Cell border radius, @default 0 @category appearance */
  cellRadius?: number;

  /** Color of empty (unfilled) cells @category appearance */
  emptyColor?: MantineColor;

  /** Whether to show tooltip on hover, @default false @category appearance */
  withTooltip?: boolean;

  /** Custom tooltip label formatter @category appearance */
  getTooltipLabel?: (cell: WaffleChartCell & { count: number }) => React.ReactNode;

  /** Function to format values and the total in the default tooltip and the accessible label @category appearance */
  valueFormatter?: (value: number) => string;

  /** Whether to show legend, @default true @category appearance */
  withLegend?: boolean;

  /** Legend position, `left` and `right` are physical sides and do not flip in RTL, @default 'bottom' @category appearance */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';

  /** Fill direction, @default 'left-to-right' @category appearance */
  fillDirection?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';

  /** Chart size (width), auto-calculated from columns if not set @category appearance */
  size?: number;
}

export type WaffleChartFactory = Factory<{
  props: WaffleChartProps;
  ref: HTMLDivElement;
  stylesNames: WaffleChartStylesNames;
  vars: WaffleChartCssVariables;
}>;

const defaultProps = {
  rows: 10,
  columns: 10,
  gap: 2,
  cellRadius: 0,
  withTooltip: false,
  withLegend: true,
  legendPosition: 'bottom',
  fillDirection: 'left-to-right',
} satisfies Partial<WaffleChartProps>;

const varsResolver = createVarsResolver<WaffleChartFactory>(
  (theme, { cellRadius, emptyColor }) => ({
    root: {
      '--waffle-cell-radius': rem(cellRadius),
      '--waffle-empty-color': emptyColor ? getThemeColor(emptyColor, theme) : undefined,
    },
  })
);

function normalizeSegmentValue(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function defaultValueFormatter(value: number) {
  return String(Number(value.toFixed(10)));
}

function allocateCells(data: WaffleChartCell[], gridCells: number, total: number | undefined) {
  const values = data.map((segment) => normalizeSegmentValue(segment.value));
  const sum = values.reduce((acc, value) => acc + value, 0);
  const effectiveTotal = total != null && Number.isFinite(total) ? Math.max(total, sum) : sum;
  const counts = values.map(() => 0);

  if (sum === 0) {
    return { cells: Array<number>(gridCells).fill(-1), counts, sum, effectiveTotal };
  }

  const filledTarget = Math.round((sum / effectiveTotal) * gridCells);
  const raw = values.map((value) => (value / sum) * filledTarget);
  raw.forEach((value, index) => {
    counts[index] = Math.floor(value);
  });
  const remainder = filledTarget - counts.reduce((a, b) => a + b, 0);

  const fractions = raw.map((value, index) => ({ index, fraction: value - counts[index] }));
  fractions.sort((a, b) => b.fraction - a.fraction);
  for (let j = 0; j < Math.min(remainder, fractions.length); j++) {
    counts[fractions[j].index]++;
  }

  const cells: number[] = [];
  counts.forEach((count, index) => {
    for (let j = 0; j < count; j++) {
      cells.push(index);
    }
  });

  while (cells.length < gridCells) {
    cells.push(-1);
  }

  return { cells, counts, sum, effectiveTotal };
}

function getCellPosition(
  index: number,
  fillDirection: WaffleChartProps['fillDirection'],
  rows: number,
  columns: number
) {
  switch (fillDirection) {
    case 'top-to-bottom':
      return { row: index % rows, col: Math.floor(index / rows) };
    case 'bottom-to-top':
      return { row: rows - 1 - (index % rows), col: Math.floor(index / rows) };
    case 'right-to-left':
      return { row: Math.floor(index / columns), col: columns - 1 - (index % columns) };
    default:
      return { row: Math.floor(index / columns), col: index % columns };
  }
}

const DEFAULT_CELL_SIZE = 20;

function getGridGeometry({
  size,
  rows,
  columns,
  gap,
}: {
  size: number | undefined;
  rows: number;
  columns: number;
  gap: number;
}) {
  const resolvedGap =
    size != null && (columns - 1) * gap > size && columns > 1 ? size / (columns - 1) : gap;
  const cellSize =
    size != null ? Math.max(0, (size - (columns - 1) * resolvedGap) / columns) : DEFAULT_CELL_SIZE;

  return {
    cellSize,
    gap: resolvedGap,
    width: columns * cellSize + (columns - 1) * resolvedGap,
    height: rows * cellSize + (rows - 1) * resolvedGap,
  };
}

export const WaffleChart = factory<WaffleChartFactory>((_props) => {
  const props = useProps('WaffleChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    data,
    rows,
    columns,
    total,
    gap,
    cellRadius,
    emptyColor,
    withTooltip,
    getTooltipLabel,
    valueFormatter,
    withLegend,
    legendPosition,
    fillDirection,
    size,
    variant,
    mod,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<WaffleChartFactory>({
    name: 'WaffleChart',
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

  const [hoveredCellIndex, setHoveredCellIndex] = useState<number | null>(null);
  const [hoveredLegendIndex, setHoveredLegendIndex] = useState<number | null>(null);

  const resolvedRows = Math.max(1, Math.floor(rows!));
  const resolvedColumns = Math.max(1, Math.floor(columns!));
  const formatValue = valueFormatter ?? defaultValueFormatter;
  const geometry = getGridGeometry({
    size,
    rows: resolvedRows,
    columns: resolvedColumns,
    gap: Math.max(0, gap!),
  });
  const { cellSize } = geometry;
  const { cells, counts, effectiveTotal } = allocateCells(
    data,
    resolvedRows * resolvedColumns,
    total
  );

  const activeLegendIndex =
    hoveredLegendIndex != null && hoveredLegendIndex < data.length ? hoveredLegendIndex : null;

  const cellElements = cells.map((segmentIndex, index) => {
    const { row, col } = getCellPosition(index, fillDirection, resolvedRows, resolvedColumns);
    const isEmpty = segmentIndex < 0;

    return (
      <rect
        key={index}
        {...getStyles('cell')}
        x={col * (cellSize + geometry.gap)}
        y={row * (cellSize + geometry.gap)}
        width={cellSize}
        height={cellSize}
        rx={cellRadius}
        ry={cellRadius}
        fill={
          isEmpty
            ? 'var(--waffle-empty-color, var(--mantine-color-default-border))'
            : getThemeColor(data[segmentIndex].color, theme)
        }
        data-empty={isEmpty || undefined}
        data-dimmed={(activeLegendIndex != null && segmentIndex !== activeLegendIndex) || undefined}
        onMouseEnter={withTooltip ? () => setHoveredCellIndex(index) : undefined}
      />
    );
  });

  const hoveredSegmentIndex = hoveredCellIndex != null ? (cells[hoveredCellIndex] ?? -1) : -1;
  const hoveredSegment = hoveredSegmentIndex >= 0 ? data[hoveredSegmentIndex] : undefined;
  const tooltipLabel = hoveredSegment
    ? getTooltipLabel
      ? getTooltipLabel({ ...hoveredSegment, count: counts[hoveredSegmentIndex] })
      : `${hoveredSegment.name}: ${formatValue(normalizeSegmentValue(hoveredSegment.value))}`
    : null;

  const legend = withLegend ? (
    <div {...getStyles('legend')} aria-hidden>
      {data.map((segment, index) => (
        <div
          key={segment.key ?? index}
          {...getStyles('legendItem')}
          data-dimmed={(activeLegendIndex != null && activeLegendIndex !== index) || undefined}
          onMouseEnter={() => setHoveredLegendIndex(index)}
          onMouseLeave={() => setHoveredLegendIndex(null)}
        >
          <span
            {...getStyles('legendSwatch', {
              style: { backgroundColor: getThemeColor(segment.color, theme) },
            })}
          />
          <span {...getStyles('legendLabel')}>{segment.name}</span>
        </div>
      ))}
    </div>
  ) : null;

  const isVertical = legendPosition === 'left' || legendPosition === 'right';
  const isLegendFirst = legendPosition === 'top' || legendPosition === 'left';

  const segmentsLabel = data
    .map((segment) => `${segment.name}: ${formatValue(normalizeSegmentValue(segment.value))}`)
    .join(', ');
  const gridLabel = segmentsLabel ? `${segmentsLabel}. Total: ${formatValue(effectiveTotal)}` : '';

  const hasCallerLabel = ariaLabel !== undefined || ariaLabelledBy !== undefined;

  const grid = (
    <Box
      component="svg"
      width={geometry.width}
      height={geometry.height}
      role={hasCallerLabel || gridLabel ? 'img' : undefined}
      aria-label={hasCallerLabel ? ariaLabel : gridLabel || undefined}
      aria-labelledby={ariaLabelledBy}
      {...getStyles('grid')}
    >
      <Tooltip.Floating
        label={tooltipLabel}
        disabled={!withTooltip || !tooltipLabel}
        position="top"
      >
        <g onMouseLeave={withTooltip ? () => setHoveredCellIndex(null) : undefined}>
          {withTooltip && (
            <rect
              fill="transparent"
              width={geometry.width}
              height={geometry.height}
              onMouseEnter={() => setHoveredCellIndex(null)}
            />
          )}
          {cellElements}
        </g>
      </Tooltip.Floating>
    </Box>
  );

  return (
    <Box
      {...getStyles('root')}
      variant={variant}
      mod={[
        { 'legend-position': withLegend ? legendPosition : undefined, vertical: isVertical },
        mod,
      ]}
      {...others}
    >
      {isLegendFirst && legend}
      {grid}
      {!isLegendFirst && legend}
    </Box>
  );
});

WaffleChart.displayName = '@mantine/charts/WaffleChart';
WaffleChart.classes = classes;
WaffleChart.varsResolver = varsResolver;
