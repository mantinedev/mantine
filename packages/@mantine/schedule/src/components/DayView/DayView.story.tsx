import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { DayView } from './DayView';

export default { title: 'schedule/DayView' };

const today = dayjs().format('YYYY-MM-DD');

const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:30:00`,
    end: `${today} 13:30:00`,
    color: 'orange',
    payload: {},
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
  {
    id: 5,
    title: 'Tomorrow event, do not show',
    start: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(today).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
];

const overlappingEvents: ScheduleEventData[] = [
  {
    id: 0,
    title: 'Team Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Meeting 2',
    start: `${today} 10:00:00`,
    end: `${today} 16:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 1,
    title: 'Workshop Session 1',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: `${today} 11:00:00`,
    end: `${today} 12:30:00`,
    color: 'violet',
    payload: {},
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: `${today} 11:30:00`,
    end: `${today} 13:00:00`,
    color: 'cyan',
    payload: {},
  },
];

const allDayEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
  {
    id: 2,
    title: 'Holiday',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
    payload: {},
  },
  {
    id: 3,
    title: 'Team Building',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
    payload: {},
  },
  {
    id: 4,
    title: 'Product Launch',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
    payload: {},
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
    payload: {},
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} />
    </div>
  );
}

export function RegularEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        events={regularEvents}
        attributes={{ event: { 'data-test-id': '1' } }}
      />
    </div>
  );
}

export function OverlappingEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} events={overlappingEvents} />
    </div>
  );
}

export function MultipleAllDayEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} events={allDayEvents} />
    </div>
  );
}

export function CustomTimeRange() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        startTime="08:00:00"
        endTime="13:00:00"
        events={regularEvents}
        withAllDaySlot={false}
      />
    </div>
  );
}

export function CustomInterval() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} intervalMinutes={12} slotHeight={120} allDaySlotHeight={220} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} radius="md" events={regularEvents} withAllDaySlot />
    </div>
  );
}

export function BusinessHours() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        events={regularEvents}
        highlightBusinessHours
        businessHours={['10:00:00', '18:00:00']}
        startTime="08:00:00"
        endTime="20:00:00"
      />
    </div>
  );
}
