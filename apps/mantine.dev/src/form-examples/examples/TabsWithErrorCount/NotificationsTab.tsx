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
        label="Email notifications"
        {...form.getInputProps('emailNotifications', { type: 'checkbox' })}
      />
      <Switch
        label="Push notifications"
        {...form.getInputProps('pushNotifications', { type: 'checkbox' })}
      />
    </Stack>
  );
}
