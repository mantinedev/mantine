import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useResolvedStylesApi, useStyles } from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { getWeekDays, nextWeek, previousWeek, toDateString } from '../../utils';
import {
  ResourcesDayGrid,
  ResourcesMonthViewStylesNames,
} from '../ResourcesDayGrid/ResourcesDayGrid';
import { getWeekLabel } from '../WeekView/get-week-label/get-week-label';
import type {
  ResourcesWeekViewFactory,
  ResourcesWeekViewProps,
  ResourcesWeekViewStylesNames,
} from './ResourcesWeekView';
import { resourcesWeekViewVarsResolver } from './ResourcesWeekView.vars';
import monthClasses from '../ResourcesMonthView/ResourcesMonthView.module.css';
import classes from './ResourcesWeekDayGrid.module.css';
import weekClasses from './ResourcesWeekView.module.css';

const selectors = {
  resourcesMonthView: 'resourcesWeekView',
  resourcesMonthViewRoot: 'resourcesWeekViewRoot',
  resourcesMonthViewScrollArea: 'resourcesWeekViewScrollArea',
  resourcesMonthViewDayLabelsRow: 'resourcesWeekViewDayLabelsRow',
  resourcesMonthViewCorner: 'resourcesWeekViewCorner',
  resourcesMonthViewDayLabel: 'resourcesWeekViewDayLabel',
  resourcesMonthViewDayLabelWeekday: 'resourcesWeekViewDayLabelWeekday',
  resourcesMonthViewDayLabelNumber: 'resourcesWeekViewDayLabelWeekday',
  resourcesMonthViewRow: 'resourcesWeekViewRow',
  resourcesMonthViewResourceLabel: 'resourcesWeekViewResourceLabel',
  resourcesMonthViewRowSlots: 'resourcesWeekViewRowSlots',
  resourcesMonthViewCell: 'resourcesWeekViewCell',
  resourcesMonthViewEventWrapper: 'resourcesWeekViewEventWrapper',
  resourcesMonthViewResizeHandle: 'resourcesWeekViewResizeHandle',
  resourcesMonthViewInner: 'resourcesWeekViewInner',
  resourcesMonthViewGroupColumn: 'resourcesWeekViewGroupColumn',
  resourcesMonthViewGroupColumnEmpty: 'resourcesWeekViewGroupColumnEmpty',
} satisfies Partial<Record<ResourcesMonthViewStylesNames, ResourcesWeekViewStylesNames>>;

function getSelector(selector: ResourcesMonthViewStylesNames): ResourcesWeekViewStylesNames {
  return selector in selectors
    ? selectors[selector as keyof typeof selectors]
    : (selector as ResourcesWeekViewStylesNames);
}

export const resourcesWeekDayGridClasses = Object.fromEntries(
  Object.entries(selectors)
    .filter(([selector]) => selector !== 'resourcesMonthViewDayLabelNumber')
    .map(([monthSelector, weekSelector]) => [
      weekSelector,
      [
        monthClasses[monthSelector],
        weekClasses[weekSelector],
        monthSelector === 'resourcesMonthView' ? classes.resourcesWeekView : undefined,
      ]
        .filter(Boolean)
        .join(' '),
    ])
);

export function ResourcesWeekDayGrid(
  props: ResourcesWeekViewProps & { ref?: React.Ref<HTMLDivElement> }
) {
  const {
    layout,
    startTime,
    endTime,
    intervalMinutes,
    minEventSize,
    slotLabelFormat,
    slotWidth,
    startScrollDateTime,
    withCurrentTimeIndicator,
    withCurrentTimeBubble,
    getCurrentTime,
    weekLabelFormat,
    renderWeekLabel,
    highlightBusinessHours,
    businessHours,
    eventDragInterval,
    eventResizeInterval,
    onTimeSlotClick,
    withInteractiveBackgroundEvents,
    firstDayOfWeek,
    classNames,
    styles,
    vars,
    ...gridProps
  } = props;
  const ctx = useDatesContext();
  const weekdays = useMemo(
    () =>
      getWeekDays({
        week: props.date,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
        weekendDays: ctx.getWeekendDays(props.weekendDays),
        withWeekendDays: props.withWeekendDays,
      }).map((day) => dayjs(day).format('YYYY-MM-DD')),
    [props.date, firstDayOfWeek, props.weekendDays, props.withWeekendDays, ctx]
  );
  const fullWeek = getWeekDays({
    week: props.date,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  });
  const getStyles = useStyles<ResourcesWeekViewFactory>({
    name: props.__staticSelector || 'ResourcesWeekView',
    classes: resourcesWeekDayGridClasses,
    props,
    className: props.className,
    style: props.style,
    classNames,
    styles,
    unstyled: props.unstyled,
    attributes: props.attributes,
    vars,
    varsResolver: resourcesWeekViewVarsResolver,
    rootSelector: 'resourcesWeekView',
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ResourcesWeekViewFactory>({
    classNames,
    styles,
    props,
  });
  const today = dayjs(getCurrentTime ? getCurrentTime() : undefined);

  return (
    <ResourcesDayGrid
      {...gridProps}
      data-layout="days"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __getStyles={(selector, options) => getStyles(getSelector(selector), options)}
      __days={weekdays}
      __range={{ start: fullWeek[0], end: fullWeek[6] }}
      __today={today.format('YYYY-MM-DD')}
      __singleDayLabel
      __header={{
        view: 'week',
        navigationHandlers: {
          previous: () => previousWeek(props.date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
          next: () => nextWeek(props.date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
          today: () => toDateString(getCurrentTime ? getCurrentTime() : dayjs()),
        },
        control: {
          miw: 180,
          title: getWeekLabel({
            weekdays: weekdays.length > 0 ? weekdays : fullWeek,
            locale: ctx.getLocale(props.locale),
            weekLabelFormat: weekLabelFormat!,
            renderWeekLabel,
          }),
        },
      }}
    />
  );
}
