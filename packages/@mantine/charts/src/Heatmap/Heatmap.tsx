import { useMemo, useState } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  Tooltip,
  TooltipFloatingProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { getBoundaries } from './get-boundaries/get-boundaries';
import { getDatesRange } from './get-dates-range/get-dates-range';
import { getHeatColor } from './get-heat-color/get-heat-color';
import { getMonthsRange } from './get-months-range/get-months-range';
import { rotateWeekdaysNames } from './rotate-weekdays-names/rotate-weekdays-names';
import classes from './Heatmap.module.css';

export type HeatmapStylesNames = 'root' | 'rect' | 'weekdayLabel' | 'monthLabel';

interface HeatmapRectData {
  date: string;
  value: number | null;
}

export interface HeatmapProps
  extends BoxProps,
    StylesApiProps<HeatmapFactory>,
    ElementProps<'svg', 'display' | 'opacity' | 'viewBox' | 'width' | 'height'> {
  /** Heatmap data, key is date in `YYYY-MM-DD` format */
  data: Record<string, number>;

  /** Heatmap domain, array of 2 numbers, min and max values, calculated from data by default */
  domain?: [number, number];

  /** Heatmap start date. Current date - 1 year by default. */
  startDate?: Date | string;

  /** Heatmap end date. Current date by default. */
  endDate?: Date | string;

  /** If set, month labels are displayed @default `false` */
  withMonthLabels?: boolean;

  /** Month labels, array of 12 elements, can be used for localization */
  monthLabels?: string[];

  /** If set, weekday labels are displayed @default `false` */
  withWeekdayLabels?: boolean;

  /** Weekday labels, array of 7 elements, can be used for localization */
  weekdayLabels?: string[];

  /** If set, trailing dates that do not fall into the given `startDate` – `endDate` range are displayed to fill empty space. @default `true` */
  withOutsideDates?: boolean;

  /** First day of week, 0 – Sunday, 1 – Monday. @default 1 – Monday */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /** Size of day rect in px @default 10 */
  rectSize?: number;

  /** Gap between rects in px @default 1 */
  gap?: number;

  /** Rect radius in px @default 2 */
  rectRadius?: number;

  /** Colors array, used to calculate color for each value, by default 4 shades of green colors are used */
  colors?: string[];

  /** Width of weekday labels column @default 30 */
  weekdaysLabelsWidth?: number;

  /** Height of month labels row @default 30 */
  monthsLabelsHeight?: number;

  /** Font size of month and weekday labels @default 12 */
  fontSize?: number;

  /** A function to generate tooltip label based on the hovered rect date and value, required for the tooltip to be visible */
  getTooltipLabel?: (input: HeatmapRectData) => React.ReactNode;

  /** If set, tooltip is displayed on rect hover @default `false` */
  withTooltip?: boolean;

  /** Props passed down to the `Tooltip.Floating` component */
  tooltipProps?: Partial<TooltipFloatingProps>;

  /** Props passed down to each rect depending on its date and associated value */
  getRectProps?: (input: HeatmapRectData) => React.ComponentPropsWithoutRef<'rect'>;

  /** If set, inserts a spacer column between months @default `false` */
  splitMonths?: boolean;
}

export type HeatmapFactory = Factory<{
  props: HeatmapProps;
  ref: SVGSVGElement;
  stylesNames: HeatmapStylesNames;
}>;

const defaultProps = {
  monthLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayLabels: ['Sun', 'Mon', '', 'Wed', '', 'Fri', ''],
  withOutsideDates: true,
  firstDayOfWeek: 1,
  rectSize: 10,
  weekdaysLabelsWidth: 30,
  monthsLabelsHeight: 14,
  gap: 1,
  rectRadius: 2,
  fontSize: 12,
  colors: [
    'var(--heatmap-level-1)',
    'var(--heatmap-level-2)',
    'var(--heatmap-level-3)',
    'var(--heatmap-level-4)',
  ],
} satisfies Partial<HeatmapProps>;

export const Heatmap = factory<HeatmapFactory>((_props, ref) => {
  const props = useProps('Heatmap', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    startDate,
    endDate,
    withMonthLabels,
    withWeekdayLabels,
    weekdayLabels,
    withOutsideDates,
    monthLabels,
    firstDayOfWeek,
    rectSize = 10,
    gap = 1,
    rectRadius,
    domain,
    colors,
    weekdaysLabelsWidth,
    monthsLabelsHeight,
    fontSize,
    getTooltipLabel,
    withTooltip,
    tooltipProps,
    getRectProps,
    splitMonths,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<HeatmapFactory>({
    name: 'Heatmap',
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

  const [hoveredRect, setHoveredRect] = useState<HeatmapRectData | null>(null);
  const rectSizeWithGap = rectSize + gap;
  const weekdaysOffset = withWeekdayLabels ? weekdaysLabelsWidth : 0;
  const monthsOffset = withMonthLabels ? monthsLabelsHeight : 0;
  const [min, max] = getBoundaries({ data, domain });
  const rotatedWeekdayLabels = useMemo(
    () => rotateWeekdaysNames(weekdayLabels, firstDayOfWeek),
    [weekdayLabels, firstDayOfWeek]
  );

  const datesRange = getDatesRange({
    startDate,
    endDate,
    withOutsideDates,
    firstDayOfWeek,
  });

  // Calculate months range for labels and optional split between months
  const monthsRange = withMonthLabels || splitMonths ? getMonthsRange(datesRange) : [];

  type Column = { type: 'spacer' } | { type: 'column'; month: number; weekIndex: number };

  let columns: Column[];

  if (!splitMonths) {
    // Default behavior: one column per week
    columns = datesRange.map((week, weekIndex) => {
      // Determine month for labeling purposes: pick first non-null day
      const firstDay = week.find((d) => d !== null)! as string;
      const month = new Date(firstDay).getMonth();
      return { type: 'column', month, weekIndex } as Column;
    });
  } else {
    // Split weeks at month boundaries and insert spacers between month groups
    const tmp: Column[] = [];
    datesRange.forEach((week, weekIndex) => {
      const months = week.map((d) => (d ? new Date(d).getMonth() : null));
      let firstMonth: number | null = null;
      let boundaryIndex: number | null = null;
      for (let i = 0; i < months.length; i += 1) {
        if (months[i] === null) {
          continue;
        }
        if (firstMonth === null) {
          firstMonth = months[i]!;
        } else if (months[i] !== firstMonth) {
          boundaryIndex = i;
          break;
        }
      }

      if (firstMonth === null) {
        return; // should not happen
      }

      if (boundaryIndex === null) {
        tmp.push({ type: 'column', month: firstMonth, weekIndex });
      } else {
        // Find nextMonth as first non-null month from boundaryIndex
        let nextMonth: number | null = null;
        for (let i = boundaryIndex; i < months.length; i += 1) {
          if (months[i] !== null) {
            nextMonth = months[i]!;
            break;
          }
        }
        if (nextMonth === null) {
          tmp.push({ type: 'column', month: firstMonth, weekIndex });
        } else {
          tmp.push({ type: 'column', month: firstMonth, weekIndex });
          tmp.push({ type: 'column', month: nextMonth, weekIndex });
        }
      }
    });

    // Insert spacer between adjacent columns when month changes
    columns = [];
    for (let i = 0; i < tmp.length; i += 1) {
      if (i > 0 && (tmp[i] as any).month !== (tmp[i - 1] as any).month) {
        columns.push({ type: 'spacer' });
      }
      columns.push(tmp[i]);
    }
  }

  const totalColumns = columns.length;

  const weeks = columns.map((col, columnIndex) => {
    if (col.type === 'spacer') {
      return (
        <g
          key={`spacer-${columnIndex}`}
          transform={`translate(${columnIndex * rectSizeWithGap}, 0)`}
        />
      );
    }

    const week = datesRange[col.weekIndex];

    const days = week.map((date, dayIndex) => {
      if (!date) {
        return null;
      }
      if (new Date(date).getMonth() !== col.month) {
        return null;
      }

      const hasValue = date in data && data[date] !== null;
      const rectValue = hasValue ? data[date] : null;

      return (
        <rect
          key={`${date}-${col.month}`}
          width={rectSize}
          height={rectSize}
          x={gap}
          y={dayIndex * rectSizeWithGap + gap}
          rx={rectRadius}
          data-empty={!hasValue || undefined}
          fill={hasValue ? getHeatColor({ value: data[date], min, max, colors }) : undefined}
          onPointerEnter={
            withTooltip ? () => setHoveredRect({ date, value: rectValue }) : undefined
          }
          {...getRectProps?.({ date, value: rectValue })}
          {...getStyles('rect')}
        />
      );
    });

    return (
      <g
        key={`col-${col.weekIndex}-${col.month}-${columnIndex}`}
        transform={`translate(${columnIndex * rectSizeWithGap}, 0)`}
        data-id="week"
      >
        {days}
      </g>
    );
  });

  const computeMonthLabelX = (monthPosition: number, monthIndex: number) => {
    if (!splitMonths) {
      return monthPosition * rectSizeWithGap + gap + weekdaysOffset;
    }

    // For split months, find the first column index that has this month
    const firstMonth = monthsRange[monthIndex];
    for (let i = 0; i < columns.length; i += 1) {
      const c = columns[i];
      if (c.type === 'spacer') {
        continue;
      }
      if (c.month === firstMonth.month) {
        return i * rectSizeWithGap + gap + weekdaysOffset;
      }
    }

    return monthPosition * rectSizeWithGap + gap + weekdaysOffset;
  };

  const monthsLabelsNodes =
    withMonthLabels && monthLabels
      ? monthsRange.map((month, monthIndex) => {
          if (month.size < 3) {
            return null;
          }

          const monthLabel = monthLabels[month.month];

          return (
            <text
              key={monthIndex}
              x={computeMonthLabelX(month.position, monthIndex)}
              y={monthsLabelsHeight - 4}
              width={month.size * rectSizeWithGap}
              fontSize={fontSize}
              {...getStyles('monthLabel')}
            >
              {monthLabel}
            </text>
          );
        })
      : null;

  const weekdayLabelsNodes =
    withWeekdayLabels && weekdayLabels
      ? rotatedWeekdayLabels.map((weekdayLabel, dayIndex) => (
          <text
            key={dayIndex}
            x={0}
            y={(dayIndex + 1) * rectSizeWithGap - gap + monthsOffset}
            width={weekdaysLabelsWidth}
            fontSize={fontSize}
            {...getStyles('weekdayLabel')}
          >
            {weekdayLabel}
          </text>
        ))
      : null;

  const label = getTooltipLabel && hoveredRect && withTooltip ? getTooltipLabel(hoveredRect) : null;

  return (
    <Box
      component="svg"
      ref={ref}
      width={rectSizeWithGap * totalColumns + gap + weekdaysOffset}
      height={rectSizeWithGap * 7 + gap + monthsOffset}
      {...getStyles('root')}
      {...others}
    >
      <Tooltip.Floating
        label={label}
        disabled={!withTooltip || !label}
        position="top"
        {...tooltipProps}
      >
        <g transform={`translate(${weekdaysOffset}, ${monthsOffset})`} data-id="all-weeks">
          {/* Required for tooltip to remain visible while gaps between rects are hovered */}
          {withTooltip && (
            <rect
              fill="transparent"
              width={rectSizeWithGap * totalColumns + gap}
              height={rectSizeWithGap * 7 + gap}
            />
          )}
          {weeks}
        </g>
      </Tooltip.Floating>
      {weekdayLabelsNodes}
      {monthsLabelsNodes}
    </Box>
  );
});

Heatmap.displayName = '@mantine/charts/Heatmap';
Heatmap.classes = classes;
