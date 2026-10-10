import { Stack, Switch } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SettingsValues } from './types';

interface NotificationsTabProps {
  form: UseFormReturnType<SettingsValues>;
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
