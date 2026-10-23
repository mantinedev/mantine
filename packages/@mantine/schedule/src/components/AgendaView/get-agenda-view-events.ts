import { AnyDateValue, ScheduleEventData } from '../../types';
import { groupEventsByDay } from '../../utils/group-events-by-day/group-events-by-day';

interface GetAgendaViewEventsInput {
  rangeStart: AnyDateValue;
  rangeEnd: AnyDateValue;
  events: ScheduleEventData[] | undefined;
}

export function getAgendaViewEvents({ rangeStart, rangeEnd, events }: GetAgendaViewEventsInput) {
  return groupEventsByDay({ events, rangeStart, rangeEnd, componentName: 'AgendaView' });
}
