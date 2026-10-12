import { Stack, Switch, Textarea, TextInput } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SaveBar } from './SaveBar';

interface SettingsValues {
  displayName: string;
  email: string;
  bio: string;
  publicProfile: boolean;
}

function saveSettings(values: SettingsValues) {
  return new Promise<SettingsValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function SettingsSaveBar() {
  const form = useForm<SettingsValues>({
    initialValues: {
      displayName: 'John Doe',
      email: 'john@mantine.dev',
      bio: 'Frontend developer, open source contributor',
      publicProfile: true,
    },
    validate: {
      displayName: isNotEmpty('Display name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const dirty = form.useDirty();

  const handleSubmit = async (values: SettingsValues) => {
    const settings = await saveSettings(values);
    // Saved values become the new baseline for dirty checks
    form.setInitialValues(settings);
    form.resetDirty(settings);
    notifications.show({
      title: 'Settings saved',
      message: `${settings.displayName}, your profile is ${settings.publicProfile ? 'public' : 'private'}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <TextInput
          size="md"
          label="Display name"
          placeholder="Your name"
          withAsterisk
          {...form.getInputProps('displayName')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <Textarea
          size="md"
          label="Bio"
          placeholder="A few words about you"
          autosize
          minRows={3}
          maxRows={6}
          {...form.getInputProps('bio')}
        />

        <Switch
          size="md"
          label="Public profile"
          description="Anyone can see your profile page"
          {...form.getInputProps('publicProfile', { type: 'checkbox' })}
        />
      </Stack>

      <SaveBar opened={dirty} saving={form.submitting} onDiscard={form.reset} />
    </form>
  );
}
