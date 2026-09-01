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
  /** Array of data segments with name, value, and color */
  data: WaffleChartCell[];

  /** Number of rows, @default 10 */
  rows?: number;

  /** Number of columns, @default 10 */
  columns?: number;

  /** Total value for the chart, determines how many cells are filled vs empty, sum of all values by default */
  total?: number;

  /** Gap between cells in px, @default 2 */
  gap?: number;

  /** Cell border radius, @default 0 */
  cellRadius?: number;

  /** Color of empty (unfilled) cells */
  emptyColor?: MantineColor;

  /** Whether to show tooltip on hover, @default false */
  withTooltip?: boolean;

  /** Custom tooltip label formatter */
  getTooltipLabel?: (cell: WaffleChartCell & { count: number }) => React.ReactNode;

  /** Whether to show legend, @default true */
  withLegend?: boolean;

  /** Legend position, @default 'bottom' */
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';

  /** Fill direction, @default 'left-to-right' */
  fillDirection?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';

  /** Chart size (width), auto-calculated from columns if not set */
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

interface AllocatedCell {
  segmentIndex: number;
}

/**
 * A part-to-whole chart has no meaning for negative values, and letting them through would
 * allocate more cells than the grid can hold. Non-finite values are normalized to zero as
 * well – `Math.max(0, NaN)` is `NaN`, which would poison the sum and leave every segment
 * without cells instead of dropping just the offending one.
 */
function normalizeSegmentValue(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function allocateCells(
  data: WaffleChartCell[],
  gridCells: number,
  totalValue?: number
): AllocatedCell[] {
  const values = data.map((d) => normalizeSegmentValue(d.value));
  const sum = values.reduce((acc, value) => acc + value, 0);

  if (sum === 0) {
    return Array.from({ length: gridCells }, () => ({ segmentIndex: -1 }));
  }

  const denominator = totalValue != null ? Math.max(totalValue, sum) : sum;
  const filledTarget = Math.round((sum / denominator) * gridCells);
  const raw = values.map((value) => (value / sum) * filledTarget);
  const floored = raw.map(Math.floor);
  const remainder = filledTarget - floored.reduce((a, b) => a + b, 0);

  const fractions = raw.map((v, i) => ({ i, frac: v - floored[i] }));
  fractions.sort((a, b) => b.frac - a.frac);
  for (let j = 0; j < Math.min(remainder, fractions.length); j++) {
    floored[fractions[j].i]++;
  }

  const cells: AllocatedCell[] = [];
  data.forEach((_, i) => {
    for (let j = 0; j < floored[i] && cells.length < gridCells; j++) {
      cells.push({ segmentIndex: i });
    }
  });

  while (cells.length < gridCells) {
    cells.push({ segmentIndex: -1 });
  }

  return cells;
}

const DEFAULT_CELL_SIZE = 20;

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
    withLegend,
    legendPosition,
    fillDirection,
    size,
    variant,
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

  const [hoveredCell, setHoveredCell] = useState<(WaffleChartCell & { count: number }) | null>(
    null
  );
  const [hoveredLegendIndex, setHoveredLegendIndex] = useState<number | null>(null);

  const resolvedRows = Math.max(1, Math.floor(rows!));
  const resolvedColumns = Math.max(1, Math.floor(columns!));
  const resolvedGap = Math.max(0, gap!);

  const totalCells = resolvedRows * resolvedColumns;

  // `size` is the total width of the grid, gaps included. When the gaps alone would exceed
  // it, the gap shrinks too – clamping only the cell size would render a grid wider than
  // the caller asked for. `size != null` rather than a truthiness check so `size={0}` is
  // honored instead of silently falling back to the default cell size.
  const hasSize = size != null;
  const gapTotal = (resolvedColumns - 1) * resolvedGap;
  const effectiveGap =
    hasSize && gapTotal > size! && resolvedColumns > 1
      ? size! / (resolvedColumns - 1)
      : resolvedGap;
  const cellSize = hasSize
    ? Math.max(0, (size! - (resolvedColumns - 1) * effectiveGap) / resolvedColumns)
    : DEFAULT_CELL_SIZE;
  const allocated = allocateCells(data, totalCells, total);

  const cellCounts = new Map<number, number>();
  for (const cell of allocated) {
    if (cell.segmentIndex >= 0) {
      cellCounts.set(cell.segmentIndex, (cellCounts.get(cell.segmentIndex) || 0) + 1);
    }
  }

  const svgWidth = resolvedColumns * cellSize + (resolvedColumns - 1) * effectiveGap;
  const svgHeight = resolvedRows * cellSize + (resolvedRows - 1) * effectiveGap;

  const cellElements = allocated.map((cell, index) => {
    let row: number;
    let col: number;

    if (fillDirection === 'top-to-bottom') {
      col = Math.floor(index / resolvedRows);
      row = index % resolvedRows;
    } else if (fillDirection === 'bottom-to-top') {
      col = Math.floor(index / resolvedRows);
      row = resolvedRows - 1 - (index % resolvedRows);
    } else if (fillDirection === 'right-to-left') {
      row = Math.floor(index / resolvedColumns);
      col = resolvedColumns - 1 - (index % resolvedColumns);
    } else {
      row = Math.floor(index / resolvedColumns);
      col = index % resolvedColumns;
    }

    const x = col * (cellSize + effectiveGap);
    const y = row * (cellSize + effectiveGap);
    const segmentIndex = cell.segmentIndex;
    const isEmpty = segmentIndex < 0;
    const color = isEmpty ? undefined : getThemeColor(data[segmentIndex].color, theme);

    const dimmed = hoveredLegendIndex != null && segmentIndex !== hoveredLegendIndex;

    return (
      <rect
        key={index}
        {...getStyles('cell', {
          style: dimmed ? { opacity: 0.4 } : undefined,
        })}
        x={x}
        y={y}
        width={cellSize}
        height={cellSize}
        rx={cellRadius}
        ry={cellRadius}
        fill={color}
        data-empty={isEmpty || undefined}
        onMouseEnter={
          withTooltip
            ? () =>
                isEmpty
                  ? setHoveredCell(null)
                  : setHoveredCell({
                      ...data[segmentIndex],
                      count: cellCounts.get(segmentIndex) || 0,
                    })
            : undefined
        }
      />
    );
  });

  const tooltipLabel =
    getTooltipLabel && hoveredCell && withTooltip
      ? getTooltipLabel(hoveredCell)
      : hoveredCell?.name;

  const legendItems = withLegend
    ? data.map((segment, index) => {
        const legendDimmed = hoveredLegendIndex != null && hoveredLegendIndex !== index;

        return (
          <div
            key={segment.key ?? index}
            {...getStyles('legendItem', {
              style: legendDimmed ? { opacity: 0.4 } : undefined,
            })}
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
        );
      })
    : null;

  const isVertical = legendPosition === 'left' || legendPosition === 'right';

  // The cells carry no accessible information on their own, and the legend (when shown)
  // exposes segment names but not their values – this gives assistive tech one readable
  // summary of the data regardless of whether the legend is rendered. Values are reported
  // as they are drawn, so a clamped negative or non-finite value is announced as 0.
  const segmentsLabel = data
    .map((segment) => `${segment.name}: ${normalizeSegmentValue(segment.value)}`)
    .join(', ');

  // The denominator is what makes the filled/empty split readable – without it a listener
  // hears "Completed: 68" while a sighted user sees 68 of 100 cells filled.
  const segmentsTotal = data.reduce(
    (acc, segment) => acc + normalizeSegmentValue(segment.value),
    0
  );
  const effectiveTotal = total != null ? Math.max(total, segmentsTotal) : segmentsTotal;
  const gridLabel = segmentsLabel ? `${segmentsLabel} of ${effectiveTotal}` : '';

  // A plain div has an implicit `generic` role, which cannot carry an accessible name, so
  // a caller-supplied label would be dropped. Promoting the root to a group lets their
  // label describe the chart while the grid keeps the generated data summary.
  const hasCallerLabel =
    others['aria-label'] !== undefined || others['aria-labelledby'] !== undefined;

  const grid = (
    <Box
      component="svg"
      width={svgWidth}
      height={svgHeight}
      role={gridLabel ? 'img' : undefined}
      aria-label={gridLabel || undefined}
      {...getStyles('grid')}
    >
      <Tooltip.Floating label={tooltipLabel} disabled={!withTooltip || !hoveredCell} position="top">
        <g onMouseLeave={withTooltip ? () => setHoveredCell(null) : undefined}>
          {withTooltip && <rect fill="transparent" width={svgWidth} height={svgHeight} />}
          {cellElements}
        </g>
      </Tooltip.Floating>
    </Box>
  );

  return (
    <Box
      {...getStyles('root')}
      variant={variant}
      mod={{ 'legend-position': withLegend ? legendPosition : undefined, vertical: isVertical }}
      role={hasCallerLabel ? 'group' : undefined}
      {...others}
    >
      {withLegend && (legendPosition === 'top' || legendPosition === 'left') && (
        <div {...getStyles('legend')} aria-hidden>
          {legendItems}
        </div>
      )}
      {grid}
      {withLegend && (legendPosition === 'bottom' || legendPosition === 'right') && (
        <div {...getStyles('legend')} aria-hidden>
          {legendItems}
        </div>
      )}
    </Box>
  );
});

WaffleChart.displayName = '@mantine/charts/WaffleChart';
WaffleChart.classes = classes;
WaffleChart.varsResolver = varsResolver;
