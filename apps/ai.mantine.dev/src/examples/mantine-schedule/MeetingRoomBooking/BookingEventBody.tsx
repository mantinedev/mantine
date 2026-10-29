import { Text } from '@mantine/core';
import type { ScheduleEventData } from '@mantine/schedule';
import type { BookingPayload } from './types';

export function BookingEventBody({ event }: { event: ScheduleEventData }) {
  const payload = event.payload as BookingPayload | undefined;

  return (
    <>
      <Text size="xs" fw={600} truncate>
        {event.title}
      </Text>
      <Text size="xs" truncate>
        {payload?.organizer}
      </Text>
    </>
  );
}
