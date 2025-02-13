import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { getBoundaries } from './get-boundaries/get-boundaries';
import { getDatesRange } from './get-dates-range/get-dates-range';
import { getHeatColor } from './get-heat-color/get-heat-color';
import { getMonthsRange } from './get-months-range/get-months-range';
import classes from './Heatmap.module.css';

export type HeatmapStylesNames = 'root' | 'rect' | 'weekdayLabel' | 'monthLabel';
export type HeatmapCssVariables = {
  root: '--test';
};

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

  /** If set, month labels are displayed, `false` by default */
  withMonthLabels?: boolean;

  /** Month labels, array of 12 elements, can be used for localization */
  monthLabels?: string[];

  /** If set, weekday labels are displayed, `false` by default */
  withWeekdayLabels?: boolean;

  /** Weekday labels, array of 7 elements, can be used for localization */
  weekdayLabels?: string[];

  /** If set, trailing dates that do not fall into the given `startDate` – `endDate` range are displayed to fill empty space. `true` by default */
  withOutsideDates?: boolean;

  /** First day of week, 0 – Sunday, 1 – Monday. `1` (Monday) by default */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /** Size of day rect in px, `10` by default */
  rectSize?: number;

  /** Gap between rects in px, `1` by default  */
  gap?: number;

  /** Rect radius in px, `2` by default */
  radius?: number;

  /** Colors array, used to calculate color for each value, by default 4 shades of green colors are used */
  colors?: string[];

  /** Width of weekday labels column, `30` by default */
  weekdaysLabelsWidth?: number;

  /** Height of month labels row, `30` by default */
  monthsLabelsHeight?: number;

  /** Font size of month and weekday labels, `12` by default */
  fontSize?: number;
}

export type HeatmapFactory = Factory<{
  props: HeatmapProps;
  ref: SVGSVGElement;
  stylesNames: HeatmapStylesNames;
  vars: HeatmapCssVariables;
}>;

const defaultProps: Partial<HeatmapProps> = {
  monthLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayLabels: ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'],
  withOutsideDates: true,
  firstDayOfWeek: 1,
  rectSize: 10,
  weekdaysLabelsWidth: 30,
  monthsLabelsHeight: 14,
  gap: 1,
  radius: 2,
  fontSize: 12,
  colors: [
    'var(--heatmap-level-1)',
    'var(--heatmap-level-2)',
    'var(--heatmap-level-3)',
    'var(--heatmap-level-4)',
  ],
};

const varsResolver = createVarsResolver<HeatmapFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

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
    radius,
    domain,
    colors,
    weekdaysLabelsWidth,
    monthsLabelsHeight,
    fontSize,
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
    varsResolver,
  });

  const rectSizeWithGap = rectSize + gap;
  const weekdaysOffset = withWeekdayLabels ? weekdaysLabelsWidth! : 0;
  const monthsOffset = withMonthLabels ? monthsLabelsHeight! : 0;
  const [min, max] = getBoundaries({ data, domain });

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

      return (
        <rect
          key={date}
          width={rectSize}
          height={rectSize}
          x={gap}
          y={dayIndex * rectSizeWithGap + gap}
          rx={radius}
          data-empty={!hasValue || undefined}
          fill={
            hasValue ? getHeatColor({ value: data[date], min, max, colors: colors! }) : undefined
          }
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
              y={monthsLabelsHeight! - gap - 3}
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
      ? weekdayLabels.map((weekdayLabel, dayIndex) => (
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

  return (
    <Box
      component="svg"
      ref={ref}
      width={rectSizeWithGap * datesRange.length + gap + weekdaysOffset}
      height={rectSizeWithGap * 7 + gap + monthsOffset}
      {...getStyles('root')}
      {...others}
    >
      <g transform={`translate(${weekdaysLabelsWidth}, ${monthsOffset})`} data-id="all-weeks">
        {weeks}
      </g>
      {weekdayLabelsNodes}
      {monthsLabelsNodes}
    </Box>
  );
});

Heatmap.displayName = '@mantine/charts/Heatmap';
Heatmap.classes = classes;
