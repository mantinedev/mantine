import { Text } from '@mantine/core';
import type { Room } from '../types';
import classes from './RoomLabel.module.css';

export function RoomLabel({ room }: { room: Room }) {
  const details = [`${room.capacity} seats`, ...room.equipment].join(' · ');

  return (
    <div className={classes.root}>
      <Text size="sm" fw={500}>
        {room.name}
      </Text>
      <Text size="xs">{details}</Text>
    </div>
  );
}
