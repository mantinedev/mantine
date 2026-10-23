import { Checkbox, Select, Stack, Table, Text } from '@mantine/core';
import { NOTIFICATION_CHANNELS, NOTIFICATION_EVENTS, WEEKDAYS } from '../data';
import type { NotificationChannel, NotificationEvent, NotificationsFormType } from '../types';
import classes from './NotificationsSection.module.css';

const isLocked = (event: NotificationEvent, channel: NotificationChannel) =>
  event === 'securityAlerts' && channel === 'email';

export function NotificationsSection({ form }: { form: NotificationsFormType }) {
  const weeklyDigest = form.useWatchValue('events.weeklyDigest');
  const digestEnabled = Object.values(weeklyDigest).some(Boolean);

  return (
    <Stack gap="md">
      <div>
        <Table className={classes.table} withTableBorder layout="fixed">
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
                <Table.Th scope="row" className={classes.event}>
                  {event.label}
                </Table.Th>
                {NOTIFICATION_CHANNELS.map((channel) => (
                  <Table.Td key={channel.value} className={classes.channel}>
                    <Checkbox
                      className={classes.checkbox}
                      aria-label={`${event.label} by ${channel.label}`}
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
        <Text size="xs" mt="xs">
          Security alerts are always sent by email.
        </Text>
      </div>

      {digestEnabled && (
        <Select
          label="Digest day"
          placeholder="Pick a day"
          data={WEEKDAYS}
          withAsterisk
          allowDeselect={false}
          className={classes.digestDay}
          {...form.getInputProps('digestDay')}
        />
      )}
    </Stack>
  );
}
