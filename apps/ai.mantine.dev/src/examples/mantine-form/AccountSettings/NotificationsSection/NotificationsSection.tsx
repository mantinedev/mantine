import { Checkbox, Select, Stack, Table, Text } from '@mantine/core';
import { NOTIFICATION_CHANNELS, NOTIFICATION_EVENTS, WEEKDAYS } from '../constants';
import type { NotificationChannel, NotificationEvent, NotificationsFormType } from '../types';
import classes from './NotificationsSection.module.css';

const isLocked = (event: NotificationEvent, channel: NotificationChannel) =>
  event === 'securityAlerts' && channel === 'email';

export function NotificationsSection({ form }: { form: NotificationsFormType }) {
  const weeklyDigest = form.useWatchValue('events.weeklyDigest');
  const digestEnabled = Object.values(weeklyDigest).some(Boolean);

  return (
    <Stack>
      <Table className={classes.table} aria-label="Notification channels per event">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Event</Table.Th>
            {NOTIFICATION_CHANNELS.map((channel) => (
              <Table.Th key={channel.value} className={classes.channel}>
                {channel.label}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {NOTIFICATION_EVENTS.map((event) => (
            <Table.Tr key={event.value}>
              <Table.Td>{event.label}</Table.Td>
              {NOTIFICATION_CHANNELS.map((channel) => (
                <Table.Td key={channel.value} className={classes.channel}>
                  <Checkbox
                    className={classes.checkbox}
                    aria-label={`${event.label}: ${channel.label}`}
                    {...form.getInputProps(`events.${event.value}.${channel.value}`, {
                      type: 'checkbox',
                    })}
                    disabled={isLocked(event.value, channel.value)}
                  />
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Text size="xs">Security alerts are always sent by email.</Text>

      {digestEnabled && (
        <Select
          className={classes.digestDay}
          label="Digest day"
          placeholder="Digest day"
          data={WEEKDAYS}
          withAsterisk
          allowDeselect={false}
          {...form.getInputProps('digestDay')}
        />
      )}
    </Stack>
  );
}
