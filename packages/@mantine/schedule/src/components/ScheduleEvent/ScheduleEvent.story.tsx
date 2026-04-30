import { ScheduleEventData } from '../../types';
import { ScheduleEvent } from './ScheduleEvent';

export default { title: 'schedule/ScheduleEvent' };

const eventData: ScheduleEventData = {
  id: 1,
  title: 'Project Kickoff',
  start: '2025-12-13 09:00:00',
  end: '2025-12-13 10:00:00',
  color: 'blue',
  payload: {},
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent event={eventData} />
    </div>
  );
}

export function MdSize() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent event={eventData} />
    </div>
  );
}

export function Hanging() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent event={eventData} hanging="both" />
    </div>
  );
}

export function RenderEventBody() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent
        event={{ ...eventData, payload: { testPayload: 123 } }}
        renderEventBody={(event: ScheduleEventData<{ testPayload: number }>) => (
          <div>
            <strong>{event.title}</strong>
            <div>Payload: {JSON.stringify(event.payload)}</div>
          </div>
        )}
      />
    </div>
  );
}
