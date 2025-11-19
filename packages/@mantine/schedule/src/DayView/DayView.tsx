import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { getDayTimeIntervals, useDatesContext } from '@mantine/dates-utils';
import classes from './DayView.module.css';

export type DayViewStylesNames =
  | 'dayView'
  | 'dayViewHeader'
  | 'dayViewInner'
  | 'dayViewSlot'
  | 'dayViewSlots'
  | 'dayViewSlotLabel'
  | 'dayViewSlotLabels';

export type DayViewCssVariables = {
  dayView: '--test';
};

export interface DayViewProps
  extends BoxProps,
    StylesApiProps<DayViewFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Day to display, Date object or date string in `YYYY-MM-DD` format */
  day: Date | string;

  /** Time slots start time, in `HH:mm:ss` format @default `00:00:00` */
  startTime?: string;

  /** Time slots end time in `HH:mm:ss` format @default `23:59:59` */
  endTime?: string;

  /** Number of minutes for each time slot @default `15` */
  intervalMinutes?: number;

  /** If set, the all-day slot is displayed below the header @default `true` */
  withAllDaySlot?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;
}

export type DayViewFactory = Factory<{
  props: DayViewProps;
  ref: HTMLDivElement;
  stylesNames: DayViewStylesNames;
  vars: DayViewCssVariables;
}>;

const defaultProps = {
  startTime: '00:00:00',
  endTime: '23:59:59',
  intervalMinutes: 15,
  withAllDaySlot: true,
} satisfies Partial<DayViewProps>;

const varsResolver = createVarsResolver<DayViewFactory>(() => ({
  dayView: {
    '--test': 'test',
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
    vars,
    __staticSelector,
    startTime,
    endTime,
    intervalMinutes,
    withAllDaySlot,
    day,
    locale,
    ...others
  } = props;

  const getStyles = useStyles<DayViewFactory>({
    name: __staticSelector || 'DayView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'dayView',
  });

  const ctx = useDatesContext();
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
      acc.push(
        <Box {...getStyles('dayViewSlotLabel')} key={slot.startTime}>
          {slot.startTime}
        </Box>
      );
    }
    return acc;
  }, []);

  return (
    <Box {...getStyles('dayView')} {...others}>
      <div {...getStyles('dayViewHeader')}>
        {dayjs(day).locale(ctx.getLocale(locale)).format('MMMM D, YYYY')}
      </div>

      <div {...getStyles('dayViewInner')}>
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
