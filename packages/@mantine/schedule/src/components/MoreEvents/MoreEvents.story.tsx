import { ScheduleEventData } from '../../types';
import { MoreEvents } from './MoreEvents';

export default { title: 'schedule/MoreEvents' };

const sampleEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: new Date(2025, 11, 13, 9, 0),
    end: new Date(2025, 11, 13, 10, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Standup',
    start: new Date(2025, 11, 13, 10, 30),
    end: new Date(2025, 11, 13, 11, 0),
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Client Meeting',
    start: new Date(2025, 11, 13, 14, 0),
    end: new Date(2025, 11, 13, 15, 30),
    color: 'red',
    payload: {},
  },
  {
    id: 4,
    title: 'Code Review',
    start: new Date(2025, 11, 13, 16, 0),
    end: new Date(2025, 11, 13, 17, 0),
    color: 'violet',
    payload: {},
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents events={sampleEvents} moreEventsCount={4} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents
        events={sampleEvents}
        moreEventsCount={4}
        radius="lg"
        popoverProps={{ opened: true }}
      />
    </div>
  );
}

export function WithPopover() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents events={sampleEvents} moreEventsCount={4} dropdownType="popover" />
    </div>
  );
}

export function WithModal() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents
        events={sampleEvents}
        moreEventsCount={4}
        dropdownType="modal"
        modalTitle="March 13, 2025 events"
      />
    </div>
  );
}

export function WithCustomLabel() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents events={sampleEvents} moreEventsCount={4}>
        See all events
      </MoreEvents>
    </div>
  );
}

export function WithRadius() {
  return (
    <div style={{ padding: 40 }}>
      <MoreEvents events={sampleEvents} moreEventsCount={4} radius="lg" />
    </div>
  );
}

export function WithMultipleEvents() {
  const manyEvents: ScheduleEventData[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Event ${i + 1}`,
    start: new Date(2025, 11, 13, 9 + Math.floor(i / 2), 0),
    end: new Date(2025, 11, 13, 10 + Math.floor(i / 2), 0),
    color: ['blue', 'green', 'red', 'purple', 'cyan'][i % 5],
    payload: {},
  }));

  return (
    <div style={{ padding: 40 }}>
      <MoreEvents events={manyEvents} moreEventsCount={10} />
    </div>
  );
}
