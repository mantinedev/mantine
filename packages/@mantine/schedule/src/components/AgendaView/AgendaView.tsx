import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineRadius,
  StylesApiProps,
  Text,
  UnstyledButton,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { AnyDateValue, DateLabelFormat, ScheduleEventData, ScheduleMode } from '../../types';
import {
  expandRecurringEvents,
  formatDate,
  isAllDayEvent,
  isMultidayEvent,
  sortEvents,
} from '../../utils';
import { RenderEvent } from '../ScheduleEvent/ScheduleEvent';
import { getAgendaViewEvents } from './get-agenda-view-events';
import classes from './AgendaView.module.css';

export type AgendaViewStylesNames =
  | 'agendaView'
  | 'agendaViewHeader'
  | 'agendaViewHeaderLabel'
  | 'agendaViewBody'
  | 'agendaViewDateGroup'
  | 'agendaViewDateHeader'
  | 'agendaViewEvent'
  | 'agendaViewEventBody'
  | 'agendaViewEventColor'
  | 'agendaViewEventTitle'
  | 'agendaViewEventTime'
  | 'agendaViewNoEvents';

export type AgendaViewCssVariables = {
  agendaView: '--agenda-view-radius';
};

export interface AgendaViewProps
  extends BoxProps, StylesApiProps<AgendaViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Start of the date range to display events for @category state */
  rangeStart: AnyDateValue;

  /** End of the date range to display events for @category state */
  rangeEnd: AnyDateValue;

  /** Events to display @category appearance */
  events?: ScheduleEventData[];

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` @category appearance */
  locale?: string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Labels override for i18n @category appearance */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default 'default' @category behavior */
  mode?: ScheduleMode;

  /** Function to fully customize event rendering, receives all props that would be passed to the root element including children @category appearance */
  renderEvent?: RenderEvent;

  /** Format for the date group headers @default 'dddd, MMMM D' @category appearance */
  dateHeaderFormat?: DateLabelFormat;

  /** Format for the header label showing the date range @default 'MMMM D, YYYY' @category appearance */
  headerFormat?: DateLabelFormat;

  /** Called when event is clicked @category behavior */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Max number of generated recurring instances per recurring series @default 2000 */
  recurrenceExpansionLimit?: number;
}

export type AgendaViewFactory = Factory<{
  props: AgendaViewProps;
  ref: HTMLDivElement;
  stylesNames: AgendaViewStylesNames;
  vars: AgendaViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'AgendaView',
  mode: 'default',
  dateHeaderFormat: 'dddd, MMMM D',
  headerFormat: 'MMMM D, YYYY',
} satisfies Partial<AgendaViewProps>;

const varsResolver = createVarsResolver<AgendaViewFactory>((_theme, { radius }) => ({
  agendaView: {
    '--agenda-view-radius': getRadius(radius),
  },
}));

export const AgendaView = factory<AgendaViewFactory>((_props) => {
  const props = useProps('AgendaView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    __staticSelector,
    rangeStart,
    rangeEnd,
    events,
    locale,
    radius,
    labels,
    mode,
    renderEvent,
    dateHeaderFormat,
    headerFormat,
    onEventClick,
    recurrenceExpansionLimit,
    ...others
  } = props;

  const ctx = useDatesContext();
  const theme = useMantineTheme();

  const getStyles = useStyles<AgendaViewFactory>({
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
    rootSelector: 'agendaView',
  });

  const rangeStartDay = dayjs(rangeStart).format('YYYY-MM-DD');
  const rangeEndDay = dayjs(rangeEnd).format('YYYY-MM-DD');

  const groupedEvents = useMemo(() => {
    const expandedEvents = expandRecurringEvents({
      events,
      rangeStart: dayjs(rangeStartDay).startOf('day').toDate(),
      rangeEnd: dayjs(rangeEndDay).endOf('day').toDate(),
      expansionLimit: recurrenceExpansionLimit,
    });

    return getAgendaViewEvents({
      rangeStart: rangeStartDay,
      rangeEnd: rangeEndDay,
      events: expandedEvents,
    });
  }, [events, rangeStartDay, rangeEndDay, recurrenceExpansionLimit]);

  const sortedDates = Object.keys(groupedEvents).sort();

  const headerLabel = `${formatDate({
    locale: ctx.getLocale(locale),
    date: rangeStart,
    format: headerFormat,
  })} – ${formatDate({
    locale: ctx.getLocale(locale),
    date: rangeEnd,
    format: headerFormat,
  })}`;

  const dateGroups = sortedDates.map((dateStr) => {
    const dateEvents = sortEvents(groupedEvents[dateStr]);

    const eventNodes = dateEvents.map((event) => {
      const startTime = dayjs(event.start).format('HH:mm');
      const endTime = dayjs(event.end).format('HH:mm');
      const isAllDay = isMultidayEvent(event) || isAllDayEvent({ event, date: dateStr });

      const eventChildren = (
        <Box {...getStyles('agendaViewEventBody')}>
          <div
            {...getStyles('agendaViewEventColor', {
              style: { backgroundColor: getThemeColor(event.color, theme) },
            })}
          />
          <div>
            <Text {...getStyles('agendaViewEventTitle')}>{event.title}</Text>
            <Text {...getStyles('agendaViewEventTime')}>
              {isAllDay ? getLabel('allDay', labels) : `${startTime} – ${endTime}`}
            </Text>
          </div>
        </Box>
      );

      const rootProps: React.ComponentPropsWithoutRef<'button'> & { children: React.ReactNode } = {
        ...getStyles('agendaViewEvent'),
        onClick:
          mode === 'static'
            ? undefined
            : (e: React.MouseEvent<HTMLButtonElement>) => {
                onEventClick?.(event, e);
              },
        tabIndex: mode === 'static' ? -1 : 0,
        children: eventChildren,
      };

      if (typeof renderEvent === 'function') {
        return <React.Fragment key={event.id}>{renderEvent(event, rootProps)}</React.Fragment>;
      }

      return <UnstyledButton key={event.id} {...rootProps} />;
    });

    return (
      <div key={dateStr} {...getStyles('agendaViewDateGroup')}>
        <Text {...getStyles('agendaViewDateHeader')}>
          {formatDate({
            locale: ctx.getLocale(locale),
            date: dateStr,
            format: dateHeaderFormat,
          })}
        </Text>
        {eventNodes}
      </div>
    );
  });

  return (
    <Box {...getStyles('agendaView')} {...others}>
      <div {...getStyles('agendaViewHeader')}>
        <Text {...getStyles('agendaViewHeaderLabel')}>{headerLabel}</Text>
      </div>

      <Box {...getStyles('agendaViewBody')}>
        {dateGroups.length > 0 ? (
          dateGroups
        ) : (
          <Text {...getStyles('agendaViewNoEvents')}>{getLabel('noEvents', labels)}</Text>
        )}
      </Box>
    </Box>
  );
});

AgendaView.displayName = '@mantine/schedule/AgendaView';
AgendaView.classes = classes;
AgendaView.varsResolver = varsResolver;

export namespace AgendaView {
  export type Props = AgendaViewProps;
  export type Factory = AgendaViewFactory;
  export type StylesNames = AgendaViewStylesNames;
  export type CssVariables = AgendaViewCssVariables;
}
