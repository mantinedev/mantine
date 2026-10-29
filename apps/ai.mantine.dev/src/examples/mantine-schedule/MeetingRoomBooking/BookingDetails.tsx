import dayjs from 'dayjs';
import { Button, Group, Stack, Text, useModalCloseGuard } from '@mantine/core';
import type { ScheduleEventData } from '@mantine/schedule';
import { getRoom } from './data';
import type { BookingPayload } from './types';

interface BookingDetailsProps {
  event: ScheduleEventData<BookingPayload>;
}

export function BookingDetails({ event }: BookingDetailsProps) {
  const close = useModalCloseGuard();
  const room = getRoom(event.resourceId);
  const start = dayjs(event.start);

  const rows = [
    { label: 'Title', value: event.title },
    { label: 'Organizer', value: event.payload?.organizer },
    {
      label: 'Time',
      value: `${start.format('dddd, MMMM D')} · ${start.format('HH:mm')}–${dayjs(event.end).format('HH:mm')}`,
    },
    { label: 'Room', value: room ? `${room.name} · Floor ${room.floor}` : '' },
  ];

  return (
    <Stack>
      {rows.map((row) => (
        <div key={row.label}>
          <Text size="xs">{row.label}</Text>
          <Text c="var(--mantine-color-bright)">{row.value}</Text>
        </div>
      ))}
      <Group justify="flex-end">
        <Button variant="default" onClick={close}>
          Close
        </Button>
      </Group>
    </Stack>
  );
}
