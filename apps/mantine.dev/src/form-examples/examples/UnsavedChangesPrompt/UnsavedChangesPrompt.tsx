import { useEffect } from 'react';
import { Badge, Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { DiscardChangesModal } from './DiscardChangesModal';

interface ProfileValues {
  name: string;
  email: string;
  bio: string;
}

function saveProfile(values: ProfileValues) {
  return new Promise<ProfileValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function UnsavedChangesPrompt() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<ProfileValues>({
    mode: 'uncontrolled',
    initialValues: {
      name: 'John Doe',
      email: 'john@mantine.dev',
      bio: 'Frontend developer',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const dirty = form.useDirty();

  useEffect(() => {
    // The browser shows its own "Leave site?" dialog when preventDefault is called
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (form.isDirty()) {
        event.preventDefault();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const goToDashboard = () => {
    notifications.show({ title: 'Navigation', message: 'Navigated to dashboard' });
  };

  const handleNavigate = () => {
    if (form.isDirty()) {
      open();
    } else {
      goToDashboard();
    }
  };

  const discardAndNavigate = () => {
    form.reset();
    close();
    goToDashboard();
  };

  const handleSubmit = async (values: ProfileValues) => {
    const profile = await saveProfile(values);
    form.setInitialValues(profile);
    form.resetDirty(profile);
    notifications.show({
      title: 'Profile saved',
      message: `${profile.name} (${profile.email}) profile updated`,
    });
  };

  return (
    <>
      <DiscardChangesModal opened={opened} onDiscard={discardAndNavigate} onKeepEditing={close} />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Group justify="space-between">
            <Badge color={dirty ? 'orange' : 'teal'}>
              {dirty ? 'Unsaved changes' : 'All changes saved'}
            </Badge>
            <Button variant="default" size="xs" onClick={handleNavigate}>
              Go to dashboard
            </Button>
          </Group>
          <TextInput
            label="Name"
            placeholder="Your name"
            withAsterisk
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            withAsterisk
            {...form.getInputProps('email')}
          />
          <Textarea
            label="Bio"
            placeholder="A few words about you"
            autosize
            minRows={3}
            {...form.getInputProps('bio')}
          />
          <Group justify="flex-end">
            <Button type="submit" loading={form.submitting}>
              Save profile
            </Button>
          </Group>
        </Stack>
      </form>
    </>
  );
}
