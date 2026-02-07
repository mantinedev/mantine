import dayjs from 'dayjs';
import {
  AnyDateValue,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  WeekPositionedEventData,
} from '../../../types';
import { getDayPosition, getWeekDays, isAllDayEvent, sortEvents } from '../../../utils';
import { assignEventRows } from './assign-event-rows';
import { calculateAllDayEventOffset } from './calculate-all-day-event-offset';
import { calculateAllDayEventWidth } from './calculate-all-day-event-width';
import { calculateEventDays } from './calculate-event-days';
import { calculateRegularEventOverlaps } from './calculate-regular-event-overlaps';
import { findAvailableColumn } from './find-available-column';
import { getEventEndDate } from './get-event-end-date';
import { getHangingStatus } from './get-hanging-status';

export interface GetWeekPositionedEventsInput {
  /** Date (week start) at which events are positioned, used to check if events are all-day */
  date: AnyDateValue;

  /** List of all events that belong to the given week, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[];

  /** Start time of the week view, used to calculate event positions */
  startTime?: string;

  /** End time of the week view, used to calculate event positions */
  endTime?: string;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default true */
  withWeekendDays?: boolean;
}

/** Events grouped by week day date (YYYY-MM-DD 00:00:00) and by columns */
export interface GroupedWeekEvents {
  allDayEvents: WeekPositionedEventData[];
  regularEvents: Record<DateStringValue, WeekPositionedEventData[]>;
}

export function getWeekPositionedEvents({
  date,
  events,
  startTime,
  endTime,
  firstDayOfWeek = 1,
  weekendDays = [0, 6],
  withWeekendDays = true,
}: GetWeekPositionedEventsInput): GroupedWeekEvents {
  const weekDays = getWeekDays({ week: date, firstDayOfWeek, withWeekendDays, weekendDays });
  const visibleDaysCount = weekDays.length;
  const weekStartDate = dayjs(weekDays[0]);
  const weekEndDate = dayjs(weekDays[weekDays.length - 1]);

  const grouped: GroupedWeekEvents = {
    allDayEvents: [],
    regularEvents: Object.fromEntries(weekDays.map((day) => [day, []])),
  };

  const columns = new Map<string, ScheduleEventData[]>();
  const allDayColumns = new Map<string, ScheduleEventData[]>();
  const sorted = sortEvents(events);

  for (const event of sorted) {
    const eventStartDate = dayjs(event.start).startOf('day');
    const actualEndDate = getEventEndDate(event);
    const eventWeekDays = calculateEventDays({ event, weekDays, actualEndDate });

    if (eventWeekDays.length === 0) {
      continue;
    }

    const isMultiday = actualEndDate.isAfter(eventStartDate);
    const hanging = getHangingStatus({ eventStartDate, actualEndDate, weekDays });
    const isActuallyAllDay = eventWeekDays.some((day) => isAllDayEvent({ event, date: day }));
    const allDay = isMultiday || isActuallyAllDay;

    const columnMap = allDay ? allDayColumns : columns;
    const column = findAvailableColumn({
      columns: columnMap,
      event,
      allDay,
      allWeekDays: weekDays,
    });

    const columnKey = `col-${column}`;
    if (!columnMap.has(columnKey)) {
      columnMap.set(columnKey, []);
    }
    columnMap.get(columnKey)!.push(event);

    const verticalPosition = allDay
      ? { top: 0, height: 100 }
      : getDayPosition({ event, startTime, endTime });

    if (allDay) {
      const offset = calculateAllDayEventOffset({
        eventStartDate,
        weekStartDate,
        weekDays,
        visibleDaysCount,
        hangingStart: hanging === 'start' || hanging === 'both',
      });

      grouped.allDayEvents.push({
        ...event,
        position: {
          ...verticalPosition,
          allDay,
          column,
          width: 0,
          offset,
          overlaps: 0,
          row: 0,
          hanging,
        },
      });
    } else {
      for (const day of eventWeekDays) {
        const visibleDayIndex = weekDays.indexOf(day);

        if (visibleDayIndex === -1) {
          continue;
        }

        const dayWeekOffset = (visibleDayIndex / visibleDaysCount) * 100;

        grouped.regularEvents[day].push({
          ...event,
          position: {
            ...verticalPosition,
            allDay,
            column,
            width: 0,
            offset: 0,
            overlaps: 0,
            weekOffset: dayWeekOffset,
            row: 0,
            hanging,
          },
        });
      }
    }
  }

  for (const day of weekDays) {
    calculateRegularEventOverlaps(grouped.regularEvents[day]);
  }

  if (grouped.allDayEvents.length > 0) {
    const eventRows = assignEventRows(grouped.allDayEvents);
    const assignedRows = new Set<number>();

    for (const event of grouped.allDayEvents) {
      const row = eventRows.get(event)!;
      event.position.row = row;
      assignedRows.add(row);
    }

    const rowCount = Math.max(...assignedRows) + 1;

    for (const event of grouped.allDayEvents) {
      const eventStartDate = dayjs(event.start).startOf('day');
      const actualEndDate = getEventEndDate(event);

      event.position.width = calculateAllDayEventWidth({
        eventStartDate,
        actualEndDate,
        weekStartDate,
        weekEndDate,
        weekDays,
        visibleDaysCount,
      });

      event.position.overlaps = rowCount;
    }
  }

  return grouped;
}
