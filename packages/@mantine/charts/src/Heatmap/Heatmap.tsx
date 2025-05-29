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

  /** If set, month labels are displayed @default false */
  withMonthLabels?: boolean;

  /** Month labels, array of 12 elements, can be used for localization */
  monthLabels?: string[];

  /** If set, weekday labels are displayed @default false */
  withWeekdayLabels?: boolean;

  /** Weekday labels, array of 7 elements, can be used for localization */
  weekdayLabels?: string[];

  /** If set, trailing dates that do not fall into the given `startDate` – `endDate` range are displayed to fill empty space. @default `true` */
  withOutsideDates?: boolean;

  /** First day of week, 0 – Sunday, 1 – Monday. `1` (Monday) by default */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /** Size of day rect in px, `10` by default */
  rectSize?: number;

  /** Gap between rects in px, `1` by default  */
  gap?: number;

  /** Rect radius in px, `2` by default */
  rectRadius?: number;

  /** Colors array, used to calculate color for each value, by default 4 shades of green colors are used */
  colors?: string[];

  /** Width of weekday labels column, `30` by default */
  weekdaysLabelsWidth?: number;

  /** Height of month labels row, `30` by default */
  monthsLabelsHeight?: number;

  /** Font size of month and weekday labels, `12` by default */
  fontSize?: number;

  /** A function to generate tooltip label based on the hovered rect date and value, required for the tooltip to be visible */
  getTooltipLabel?: (input: HeatmapRectData) => React.ReactNode;

  /** If set, tooltip is displayed on rect hover @default false */
  withTooltip?: boolean;

  /** Props passed down to the `Tooltip.Floating` component */
  tooltipProps?: Partial<TooltipFloatingProps>;

  /** Props passed down to each rect depending on its date and associated value */
  getRectProps?: (input: HeatmapRectData) => React.ComponentPropsWithoutRef<'rect'>;
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

  const weeks = datesRange.map((week, weekIndex) => {
    const days = week.map((date, dayIndex) => {
      if (!date) {
        return null;
      }

      const hasValue = date in data && data[date] !== null;
      const rectValue = hasValue ? data[date] : null;

      return (
        <rect
          key={date}
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
      <g key={weekIndex} transform={`translate(${weekIndex * rectSizeWithGap}, 0)`} data-id="week">
        {days}
      </g>
    );
  });

  const monthsRange = withMonthLabels ? getMonthsRange(datesRange) : [];

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
              x={month.position * rectSizeWithGap + gap + weekdaysOffset}
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
      width={rectSizeWithGap * datesRange.length + gap + weekdaysOffset}
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
              width={rectSizeWithGap * datesRange.length + gap}
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
