import { useState } from 'react';
import { Badge, Button, Group, Tabs } from '@mantine/core';
import { FormErrors, hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SettingsTab, TAB_FIELDS, TABS } from './data';
import { NotificationsTab } from './NotificationsTab';
import { ProfileTab } from './ProfileTab';
import { SecurityTab } from './SecurityTab';
import { SettingsValues } from './types';

function countErrors(errors: FormErrors, fields: string[]) {
  return fields.filter((field) => field in errors).length;
}

function saveSettings(values: SettingsValues) {
  return new Promise<SettingsValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function TabsWithErrorCount() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  const form = useForm<SettingsValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      emailNotifications: false,
      pushNotifications: false,
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
      confirmPassword: matchesField('password', 'Passwords do not match'),
      pushNotifications: (value, values) =>
        !value && !values.emailNotifications ? 'Enable at least one notification channel' : null,
    },
  });

  const handleSubmit = async (values: SettingsValues) => {
    const settings = await saveSettings(values);
    notifications.show({
      title: 'Settings saved',
      message: `Profile of ${settings.name} and notification preferences updated`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const firstTabWithError = TABS.find((tab) => countErrors(errors, TAB_FIELDS[tab.value]) > 0);
    if (firstTabWithError) {
      setActiveTab(firstTabWithError.value);
    }
  };

  const tabs = TABS.map((tab) => {
    const count = countErrors(form.errors, TAB_FIELDS[tab.value]);
    return (
      <Tabs.Tab
        key={tab.value}
        value={tab.value}
        rightSection={
          count > 0 && (
            <Badge color="red" size="xs" circle>
              {count}
            </Badge>
          )
        }
      >
        {tab.label}
      </Tabs.Tab>
    );
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value as SettingsTab)}>
        <Tabs.List>{tabs}</Tabs.List>

        <Tabs.Panel value="profile" pt="md">
          <ProfileTab form={form} />
        </Tabs.Panel>

        <Tabs.Panel value="security" pt="md">
          <SecurityTab form={form} />
        </Tabs.Panel>

        <Tabs.Panel value="notifications" pt="md">
          <NotificationsTab form={form} />
        </Tabs.Panel>
      </Tabs>

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Save settings
        </Button>
      </Group>
    </form>
  );
}
