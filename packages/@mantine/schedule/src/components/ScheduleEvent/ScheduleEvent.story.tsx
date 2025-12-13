import { ScheduleEventData } from '../../types';
import { ScheduleEvent } from './ScheduleEvent';

export default { title: 'schedule/ScheduleEvent' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent
        event={{
          id: '1',
          title: 'Test event',
          color: 'blue',
          start: `2024-01-01 10:00:00`,
          end: `2024-01-01 11:00:00`,
          payload: {},
        }}
      />
    </div>
  );
}

export function RenderEventBody() {
  return (
    <div style={{ padding: 40 }}>
      <ScheduleEvent
        event={{
          id: '1',
          title: 'Test event',
          color: 'blue',
          start: `2024-01-01 10:00:00`,
          end: `2024-01-01 11:00:00`,
          payload: { testPayload: 123 },
        }}
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
