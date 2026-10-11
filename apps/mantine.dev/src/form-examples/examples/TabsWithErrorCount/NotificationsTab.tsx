import { Stack, Switch } from '@mantine/core';
import { SettingsForm } from './types';

interface NotificationsTabProps {
  form: SettingsForm;
}

export function NotificationsTab({ form }: NotificationsTabProps) {
  return (
    <Stack>
      <Switch
        size="md"
        label="Email notifications"
        {...form.getInputProps('emailNotifications', { type: 'checkbox' })}
      />

      <Switch
        size="md"
        label="Push notifications"
        {...form.getInputProps('pushNotifications', { type: 'checkbox' })}
      />
    </Stack>
  );
}
