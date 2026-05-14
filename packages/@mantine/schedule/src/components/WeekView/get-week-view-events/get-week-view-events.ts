import { ScheduleEventData } from '../../../types';
import { filterWeekViewEvents } from './filter-week-view-events';
import {
  getWeekPositionedEvents,
  GetWeekPositionedEventsInput,
  GroupedWeekEvents,
} from './get-week-positioned-events';

interface GetWeekViewEventsInput extends Omit<GetWeekPositionedEventsInput, 'events'> {
  events: ScheduleEventData[] | undefined;
}

export function getWeekViewEvents(input: GetWeekViewEventsInput): GroupedWeekEvents {
  return getWeekPositionedEvents({ ...input, events: filterWeekViewEvents(input) });
}
