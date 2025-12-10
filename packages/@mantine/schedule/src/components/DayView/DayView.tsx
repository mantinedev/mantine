import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DateStringValue, ScheduleViewLevel } from '../../types';
import { formatDate, getDayTimeIntervals, toDateString } from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { useScheduleContext } from '../Schedule/Schedule.context';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import classes from './DayView.module.css';

export type DayViewStylesNames =
  | 'dayView'
  | 'dayViewHeader'
  | 'dayViewInner'
  | 'dayViewSlot'
  | 'dayViewSlots'
  | 'dayViewSlotLabel'
  | 'dayViewSlotLabels'
  | CurrentTimeIndicatorStylesNames
  | CombinedScheduleHeaderStylesNames;

export type DayViewCssVariables = {
  dayView: '--day-view-radius';
};

export interface DayViewProps
  extends BoxProps, StylesApiProps<DayViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Day to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | string;

  /** Called when date is changed */
  onDateChange?: (date: DateStringValue) => void;

  /** Time slots start time, in `HH:mm:ss` format @default `00:00:00` */
  startTime?: string;

  /** Time slots end time in `HH:mm:ss` format @default `23:59:59` */
  endTime?: string;

  /** Number of minutes for each time slot @default `15` */
  intervalMinutes?: number;

  /** If set, the all-day slot is displayed below the header @default `true` */
  withAllDaySlot?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default `HH:mm`  */
  slotLabelFormat?: DateLabelFormat;

  /** Date format in the header @default `MMMM D, YYYY` */
  headerFormat?: DateLabelFormat;

  /** If set, displays a line indicating the current time. By default, displayed only for the current day. */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default `true` */
  withCurrentTimeBubble?: boolean;

  /** If set, the header is displayed @default `true` */
  withHeader?: boolean;

  /** Called when view level select button is clicked */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Props passed to previous month control */
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to next month control */
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to today control */
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to view level select */
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;
}

export type DayViewFactory = Factory<{
  props: DayViewProps;
  ref: HTMLDivElement;
  stylesNames: DayViewStylesNames;
  vars: DayViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'DayView',
  startTime: '00:00:00',
  endTime: '23:59:59',
  intervalMinutes: 15,
  withAllDaySlot: true,
  slotLabelFormat: 'HH:mm',
  headerFormat: 'MMMM D, YYYY',
  withCurrentTimeBubble: true,
  withHeader: true,
} satisfies Partial<DayViewProps>;

const varsResolver = createVarsResolver<DayViewFactory>((_theme, { radius }) => ({
  dayView: {
    '--day-view-radius': radius !== undefined ? getRadius(radius) : undefined,
  },
}));

export const DayView = factory<DayViewFactory>((_props) => {
  const props = useProps('DayView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    attributes,
    vars,
    __staticSelector,
    startTime,
    endTime,
    intervalMinutes,
    withAllDaySlot,
    date,
    locale,
    slotLabelFormat,
    headerFormat,
    withCurrentTimeIndicator = dayjs(date).isSame(dayjs(), 'day'),
    withCurrentTimeBubble,
    withHeader,
    radius,
    onDateChange,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,
    ...others
  } = props;

  const getStyles = useStyles<DayViewFactory>({
    name: __staticSelector,
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
    rootSelector: 'dayView',
  });

  const ctx = useScheduleContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const items = slots.map((slot) => (
    <UnstyledButton
      {...getStyles('dayViewSlot')}
      key={slot.startTime}
      mod={{ 'hour-start': slot.isHourStart }}
      aria-label={`${ctx.labels.timeSlot} ${slot.startTime} - ${slot.endTime}`}
    />
  ));

  const slotsLabels = slots.reduce<React.ReactNode[]>((acc, slot) => {
    if (slot.isHourStart) {
      const slotTime = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${slot.startTime}`);
      const label = formatDate({
        locale: ctx.getLocale(locale),
        date: slotTime,
        format: slotLabelFormat,
      });

      acc.push(
        <Box {...getStyles('dayViewSlotLabel')} key={slot.startTime}>
          {label}
        </Box>
      );
    }
    return acc;
  }, []);

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DayViewFactory>({
    classNames,
    styles,
    props,
  });

  const stylesApiProps = {
    classNames: resolvedClassNames,
    styles: resolvedStyles,
    attributes,
    __staticSelector,
    radius,
  };

  return (
    <Box {...getStyles('dayView')} {...others}>
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).subtract(1, 'day')))}
            {...previousControlProps}
          />

          <ScheduleHeader.Control {...stylesApiProps} interactive={false} miw={140}>
            {formatDate({ locale: ctx.getLocale(locale), date, format: headerFormat })}
          </ScheduleHeader.Control>

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).add(1, 'day')))}
            {...nextControlProps}
          />

          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
            {...todayControlProps}
          />

          <ScheduleHeader.ViewSelect
            value="week"
            onChange={onViewChange}
            ml="auto"
            {...stylesApiProps}
            {...viewSelectProps}
          />
        </ScheduleHeader>
      )}

      <div {...getStyles('dayViewInner')}>
        {withCurrentTimeIndicator && (
          <CurrentTimeIndicator
            startOffset="var(--day-view-slot-labels-width)"
            endOffset="0rem"
            topOffset="var(--all-day-slot-height)"
            timeBubbleStartOffset="calc(var(--day-view-slot-labels-width) - var(--time-bubble-width))"
            currentTimeFormat={slotLabelFormat}
            withTimeBubble={withCurrentTimeBubble}
            withThumb={!withCurrentTimeBubble}
            locale={locale}
            {...stylesApiProps}
          />
        )}

        <div {...getStyles('dayViewSlotLabels')}>
          {withAllDaySlot && (
            <Box {...getStyles('dayViewSlotLabel')} mod={{ 'all-day': true }}>
              {ctx.labels.allDay}
            </Box>
          )}
          {slotsLabels}
        </div>

        <div {...getStyles('dayViewSlots')}>
          {withAllDaySlot && (
            <UnstyledButton
              {...getStyles('dayViewSlot')}
              mod={{ 'all-day': true }}
              aria-label={`${ctx.labels.timeSlot} ${ctx.labels.allDay}`}
            />
          )}

          {items}
        </div>
      </div>
    </Box>
  );
});

DayView.displayName = '@mantine/schedule/DayView';
DayView.classes = classes;
