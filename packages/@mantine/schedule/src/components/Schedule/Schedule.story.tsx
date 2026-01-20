import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData, ScheduleViewLevel } from '../../types';
import { toDateString } from '../../utils';
import { Schedule } from './Schedule';

export default { title: 'schedule/Schedule' };

const baseDate = new Date(2024, 0, 15);

const events: ScheduleEventData[] = [
  // Week 1 - Jan 15-19
  {
    id: 1,
    title: 'Team Meeting',
    start: new Date(2024, 0, 15, 10, 0),
    end: new Date(2024, 0, 15, 11, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Design Review',
    start: new Date(2024, 0, 15, 14, 0),
    end: new Date(2024, 0, 15, 15, 30),
    color: 'violet',
    payload: {},
  },
  {
    id: 3,
    title: 'Conference Day 1',
    start: new Date(2024, 0, 15, 0, 0, 0),
    end: new Date(2024, 0, 15, 23, 59, 59),
    color: 'cyan',
    payload: {},
  },
  {
    id: 4,
    title: 'Project Review',
    start: new Date(2024, 0, 16, 9, 0),
    end: new Date(2024, 0, 16, 10, 30),
    color: 'green',
    payload: {},
  },
  {
    id: 5,
    title: 'Client Presentation',
    start: new Date(2024, 0, 16, 14, 0),
    end: new Date(2024, 0, 16, 16, 0),
    color: 'red',
    payload: {},
  },
  {
    id: 6,
    title: 'Code Review',
    start: new Date(2024, 0, 17, 11, 0),
    end: new Date(2024, 0, 17, 12, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 7,
    title: 'Workshop',
    start: new Date(2024, 0, 17, 13, 0),
    end: new Date(2024, 0, 17, 17, 0),
    color: 'orange',
    payload: {},
  },
  {
    id: 8,
    title: 'Lunch Meeting',
    start: new Date(2024, 0, 18, 12, 0),
    end: new Date(2024, 0, 18, 13, 30),
    color: 'teal',
    payload: {},
  },
  {
    id: 9,
    title: 'Sprint Planning',
    start: new Date(2024, 0, 18, 15, 0),
    end: new Date(2024, 0, 18, 16, 30),
    color: 'violet',
    payload: {},
  },
  {
    id: 10,
    title: 'Team Retrospective',
    start: new Date(2024, 0, 19, 10, 0),
    end: new Date(2024, 0, 19, 11, 30),
    color: 'pink',
    payload: {},
  },
  {
    id: 11,
    title: 'Demo Day',
    start: new Date(2024, 0, 19, 14, 0),
    end: new Date(2024, 0, 19, 17, 0),
    color: 'lime',
    payload: {},
  },

  // Week 2 - Jan 22-26
  {
    id: 12,
    title: 'Weekly Standup',
    start: new Date(2024, 0, 22, 9, 0),
    end: new Date(2024, 0, 22, 9, 30),
    color: 'blue',
    payload: {},
  },
  {
    id: 13,
    title: 'Architecture Meeting',
    start: new Date(2024, 0, 22, 11, 0),
    end: new Date(2024, 0, 22, 12, 30),
    color: 'indigo',
    payload: {},
  },
  {
    id: 14,
    title: 'Product Roadmap',
    start: new Date(2024, 0, 23, 10, 0),
    end: new Date(2024, 0, 23, 11, 30),
    color: 'grape',
    payload: {},
  },
  {
    id: 15,
    title: 'Training Session',
    start: new Date(2024, 0, 23, 14, 0),
    end: new Date(2024, 0, 23, 16, 0),
    color: 'yellow',
    payload: {},
  },
  {
    id: 16,
    title: 'Client Call',
    start: new Date(2024, 0, 24, 9, 30),
    end: new Date(2024, 0, 24, 10, 30),
    color: 'red',
    payload: {},
  },
  {
    id: 17,
    title: 'Team Building',
    start: new Date(2024, 0, 24, 15, 0),
    end: new Date(2024, 0, 24, 17, 0),
    color: 'pink',
    payload: {},
  },
  {
    id: 18,
    title: 'Budget Review',
    start: new Date(2024, 0, 25, 11, 0),
    end: new Date(2024, 0, 25, 12, 0),
    color: 'green',
    payload: {},
  },
  {
    id: 19,
    title: 'All-Hands Meeting',
    start: new Date(2024, 0, 26, 13, 0),
    end: new Date(2024, 0, 26, 14, 30),
    color: 'blue',
    payload: {},
  },

  // Week 3 - Jan 29 - Feb 2
  {
    id: 20,
    title: 'Innovation Workshop',
    start: new Date(2024, 0, 29, 10, 0),
    end: new Date(2024, 0, 29, 16, 0),
    color: 'cyan',
    payload: {},
  },
  {
    id: 21,
    title: 'Security Audit',
    start: new Date(2024, 0, 30, 9, 0),
    end: new Date(2024, 0, 30, 11, 0),
    color: 'red',
    payload: {},
  },
  {
    id: 22,
    title: 'Performance Review',
    start: new Date(2024, 0, 31, 14, 0),
    end: new Date(2024, 0, 31, 15, 30),
    color: 'violet',
    payload: {},
  },
  {
    id: 23,
    title: 'Monthly Review',
    start: new Date(2024, 1, 1, 10, 0),
    end: new Date(2024, 1, 1, 12, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 24,
    title: 'Team Outing',
    start: new Date(2024, 1, 2, 0, 0, 0),
    end: new Date(2024, 1, 2, 23, 59, 59),
    color: 'lime',
    payload: {},
  },

  // Multi-day events
  {
    id: 25,
    title: 'Annual Conference',
    start: new Date(2024, 1, 5, 0, 0, 0),
    end: new Date(2024, 1, 7, 23, 59, 59),
    color: 'grape',
    payload: {},
  },
  {
    id: 26,
    title: 'Company Retreat',
    start: new Date(2024, 1, 12, 0, 0, 0),
    end: new Date(2024, 1, 14, 23, 59, 59),
    color: 'orange',
    payload: {},
  },

  // Additional scattered events
  {
    id: 27,
    title: 'Quick Sync',
    start: new Date(2024, 1, 8, 9, 0),
    end: new Date(2024, 1, 8, 9, 30),
    color: 'blue',
    payload: {},
  },
  {
    id: 28,
    title: 'Documentation Sprint',
    start: new Date(2024, 1, 9, 13, 0),
    end: new Date(2024, 1, 9, 17, 0),
    color: 'teal',
    payload: {},
  },
  {
    id: 29,
    title: 'Customer Success Review',
    start: new Date(2024, 1, 15, 10, 0),
    end: new Date(2024, 1, 15, 11, 30),
    color: 'green',
    payload: {},
  },
  {
    id: 30,
    title: 'Q1 Planning',
    start: new Date(2024, 1, 20, 14, 0),
    end: new Date(2024, 1, 20, 16, 30),
    color: 'indigo',
    payload: {},
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule defaultView="week" events={events} />
    </div>
  );
}

export function Controlled() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(toDateString(baseDate));

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <p>
          <strong>Current View:</strong> {view}
        </p>
        <p>
          <strong>Current Date:</strong> {dayjs(date).format('YYYY-MM-DD')}
        </p>
      </div>
      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={setDate}
        events={events}
      />
    </div>
  );
}

export function ViewSpecificProps() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule
        events={events}
        radius="md"
        dayViewProps={{
          startTime: '08:00:00',
          endTime: '18:00:00',
          intervalMinutes: 15,
          withCurrentTimeIndicator: true,
          highlightBusinessHours: true,
          businessHours: ['09:00:00', '17:00:00'],
        }}
        weekViewProps={{
          startTime: '09:00:00',
          endTime: '17:00:00',
          intervalMinutes: 60,
          withWeekNumber: false,
          firstDayOfWeek: 1,
        }}
        monthViewProps={{
          consistentWeeks: true,
          firstDayOfWeek: 0,
          withWeekNumbers: true,
        }}
        yearViewProps={{
          withWeekNumbers: false,
        }}
      />
    </div>
  );
}

export function DragAndDrop() {
  const [eventsData, setEventsData] = useState<ScheduleEventData[]>([
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 11, 0),
      color: 'blue',
      variant: 'filled',
      payload: {},
    },
    {
      id: 2,
      title: 'Project Review',
      start: new Date(2024, 0, 16, 14, 0),
      end: new Date(2024, 0, 16, 16, 0),
      color: 'green',
      payload: {},
    },
    {
      id: 3,
      title: 'Client Call',
      start: new Date(2024, 0, 17, 9, 0),
      end: new Date(2024, 0, 17, 10, 30),
      color: 'red',
      payload: {},
    },
    {
      id: 4,
      title: 'Lunch Break',
      start: new Date(2024, 0, 18, 12, 0),
      end: new Date(2024, 0, 18, 13, 0),
      color: 'orange',
      payload: {},
    },
    {
      id: 5,
      title: 'Design Workshop',
      start: new Date(2024, 0, 18, 14, 30),
      end: new Date(2024, 0, 18, 16, 0),
      color: 'violet',
      payload: {},
    },
    {
      id: 6,
      title: 'Code Review',
      start: new Date(2024, 0, 19, 11, 0),
      end: new Date(2024, 0, 19, 12, 0),
      color: 'cyan',
      payload: {},
    },
    {
      id: 7,
      title: 'Locked Event (Cannot Drag)',
      start: new Date(2024, 0, 19, 15, 0),
      end: new Date(2024, 0, 19, 16, 0),
      color: 'gray',
      payload: { locked: true },
    },
  ]);
  const [lastAction, setLastAction] = useState<string>('');

  const handleEventDrop = (eventId: string | number, newStart: Date, newEnd: Date) => {
    setEventsData((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          return { ...event, start: newStart, end: newEnd };
        }
        return event;
      })
    );

    const movedEvent = eventsData.find((e) => e.id === eventId);
    setLastAction(
      `Moved "${movedEvent?.title}" to ${dayjs(newStart).format('MMMM D, YYYY [at] HH:mm')}`
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <Schedule
        events={eventsData}
        withDragDrop
        defaultDate={new Date(2024, 0, 19)}
        onEventDrop={handleEventDrop}
        canDragEvent={(event) => !event.payload?.locked}
        dayViewProps={{
          startTime: '08:00:00',
          endTime: '20:00:00',
          intervalMinutes: 60,
        }}
        weekViewProps={{
          startTime: '08:00:00',
          endTime: '20:00:00',
          intervalMinutes: 60,
        }}
      />
      {lastAction && (
        <div style={{ marginTop: 20, padding: 12, backgroundColor: '#f0f0f0', borderRadius: 4 }}>
          Last action: {lastAction}
        </div>
      )}
    </div>
  );
}

export function Styling() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule
        events={events}
        radius="lg"
        classNames={{
          root: 'custom-schedule-root',
        }}
        styles={{
          root: {
            border: '2px solid var(--mantine-color-blue-6)',
            borderRadius: 'var(--mantine-radius-lg)',
          },
        }}
      />
    </div>
  );
}

export function DayView() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule
        defaultView="day"
        events={events}
        dayViewProps={{
          startTime: '08:00:00',
          endTime: '18:00:00',
          intervalMinutes: 15,
          withCurrentTimeIndicator: true,
        }}
      />
    </div>
  );
}

export function MonthView() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule defaultView="month" events={events} />
    </div>
  );
}

export function YearView() {
  return (
    <div style={{ padding: 40 }}>
      <Schedule defaultView="year" events={events} />
    </div>
  );
}

export function StaticMode() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Static Mode (mode="static")</h3>
        <p>
          Events and days are not clickable or draggable. Navigation controls (prev/next/today)
          still work.
        </p>
      </div>
      <Schedule defaultView="week" events={events} mode="static" />
    </div>
  );
}

export function StaticModeDayView() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Day View - Static Mode</h3>
        <p>Time slots and events are not clickable or draggable</p>
      </div>
      <Schedule
        defaultView="day"
        events={events}
        mode="static"
        dayViewProps={{
          startTime: '08:00:00',
          endTime: '18:00:00',
          intervalMinutes: 15,
          withCurrentTimeIndicator: true,
        }}
      />
    </div>
  );
}

export function StaticModeMonthView() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Month View - Static Mode</h3>
        <p>Days and events are not clickable, but you can still navigate between months</p>
      </div>
      <Schedule defaultView="month" events={events} mode="static" />
    </div>
  );
}

export function StaticModeYearView() {
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Year View - Static Mode</h3>
        <p>Days, week numbers, and month captions are not clickable</p>
      </div>
      <Schedule defaultView="year" events={events} mode="static" />
    </div>
  );
}

export function StaticModeWithNavigation() {
  const [date, setDate] = useState(toDateString(baseDate));
  const [view, setView] = useState<ScheduleViewLevel>('week');

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Static Mode with Working Navigation</h3>
        <p>
          Events are not interactive, but navigation controls (arrows, today button, view selector)
          still work.
        </p>
        <p>
          <strong>Current Date:</strong> {dayjs(date).format('MMMM D, YYYY')} |{' '}
          <strong>View:</strong> {view}
        </p>
      </div>
      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={setDate}
        events={events}
        mode="static"
      />
    </div>
  );
}
