import { ScheduleEventData, ScheduleResourceData } from '../../../types';
import { isMultidayEvent } from '../../../utils';
import { calculateEventDays } from '../../../utils/calculate-event-days/calculate-event-days';
import { getEventEndDay } from '../../../utils/get-event-end-day/get-event-end-day';
import {
  getResourcesDayViewEvents,
  ResourcesDayViewEventsResult,
} from '../../ResourcesDayView/get-resources-day-view-events/get-resources-day-view-events';

/** A single all-day bar (single-day all-day event or a multi-day event) spanning one or more
 * consecutive visible weekdays, placed on a shared row so overlapping bars do not collide. */
export interface ResourcesWeekViewAllDayBar {
  /** The original event, with its declared start/end preserved for display and interaction */
  event: ScheduleEventData;
  /** Index of the first visible weekday the bar covers */
  startDayIndex: number;
  /** Index of the last visible weekday the bar covers */
  endDayIndex: number;
  /** Row within the all-day band, assigned so overlapping bars stack instead of overlapping */
  row: number;
}

export interface ResourcesWeekViewEventsResult {
  byDay: Record<string, ResourcesDayViewEventsResult>;
  /** All-day bars per resource, each spanning the days it covers as a single continuous bar */
  allDayBars: Record<string | number, ResourcesWeekViewAllDayBar[]>;
}

/** Assigns each bar the lowest row whose previously placed bars all end before this bar starts,
 * so bars overlapping in days are stacked on separate rows (mutates `bar.row`). */
function assignAllDayRows(bars: ResourcesWeekViewAllDayBar[]): void {
  const order = bars
    .map((bar, index) => ({ bar, index }))
    .sort(
      (a, b) =>
        a.bar.startDayIndex - b.bar.startDayIndex ||
        a.bar.endDayIndex - b.bar.endDayIndex ||
        a.index - b.index
    );

  const rowEnds: number[] = [];
  for (const { bar } of order) {
    let row = 0;
    while (row < rowEnds.length && rowEnds[row] >= bar.startDayIndex) {
      row += 1;
    }
    rowEnds[row] = bar.endDayIndex;
    bar.row = row;
  }
}

interface GetResourcesWeekViewEventsInput {
  /** Events with recurring series already expanded for the week */
  events: ScheduleEventData[] | undefined;
  resources: ScheduleResourceData[];
  weekdays: string[];
  startTime?: string;
  endTime?: string;
  intervalMinutes?: number;
}

export function getResourcesWeekViewEvents({
  events,
  resources,
  weekdays,
  startTime,
  endTime,
  intervalMinutes,
}: GetResourcesWeekViewEventsInput): ResourcesWeekViewEventsResult {
  if (events) {
    const seenIds = new Set<string | number>();
    for (const event of events) {
      if (seenIds.has(event.id)) {
        throw new Error(
          `[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${event.id}`
        );
      }
      seenIds.add(event.id);
    }
  }

  const byDay: Record<string, ResourcesDayViewEventsResult> = {};

  // Multi-day regular events are rendered as a single all-day bar spanning the days they cover
  // (matching the base WeekView, which treats any multi-day event as all-day), so they are excluded
  // from the per-day timed flow and collected as spanning bars below.
  const isSpanningRegularEvent = (event: ScheduleEventData) =>
    event.display !== 'background' && isMultidayEvent(event);

  const dayEvents = events?.filter((event) => !isSpanningRegularEvent(event));

  for (const day of weekdays) {
    byDay[day] = getResourcesDayViewEvents({
      events: dayEvents,
      resources,
      date: day,
      startTime,
      endTime,
      intervalMinutes,
    });
  }

  const allDayBars: Record<string | number, ResourcesWeekViewAllDayBar[]> = {};
  for (const resource of resources) {
    allDayBars[resource.id] = [];
  }

  // Single-day all-day events keep the per-day classification done by getResourcesDayViewEvents and
  // become single-day bars.
  weekdays.forEach((day, dayIndex) => {
    for (const resource of resources) {
      for (const positioned of byDay[day].allDayEvents[resource.id] ?? []) {
        allDayBars[resource.id].push({
          event: positioned,
          startDayIndex: dayIndex,
          endDayIndex: dayIndex,
          row: 0,
        });
      }
    }
  });

  // Multi-day regular events become a single bar spanning the visible days they cover.
  if (events) {
    for (const event of events) {
      if (
        !isSpanningRegularEvent(event) ||
        event.resourceId === undefined ||
        !(event.resourceId in allDayBars)
      ) {
        continue;
      }

      const actualEndDate = getEventEndDay(event);
      const eventWeekDays = calculateEventDays({ event, weekDays: weekdays, actualEndDate });
      if (eventWeekDays.length === 0) {
        continue;
      }

      allDayBars[event.resourceId].push({
        event,
        startDayIndex: weekdays.indexOf(eventWeekDays[0]),
        endDayIndex: weekdays.indexOf(eventWeekDays[eventWeekDays.length - 1]),
        row: 0,
      });
    }
  }

  for (const resource of resources) {
    assignAllDayRows(allDayBars[resource.id]);
  }

  return { byDay, allDayBars };
}
