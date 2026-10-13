import { Button, Group, Stack } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { DirtyField } from './DirtyField';
import { ProfileValues } from './types';

export function DirtyFields() {
  const form = useForm<ProfileValues>({
    initialValues: {
      name: 'John Doe',
      email: 'john@mantine.dev',
      website: 'https://mantine.dev',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const dirty = form.useDirty();

  const handleSubmit = (values: ProfileValues) => {
    // Saved values become the new baseline for dirty checks
    form.setInitialValues(values);
    form.resetDirty(values);
    notifications.show({
      title: 'Profile saved',
      message: `${values.name} profile updated`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack gap={5}>
        <DirtyField form={form} field="name" label="Name" placeholder="John Doe" />
        <DirtyField form={form} field="email" label="Email" placeholder="john@mantine.dev" />
        <DirtyField form={form} field="website" label="Website" placeholder="https://mantine.dev" />

        <Group justify="flex-end">
          {dirty && (
            <Button size="md" variant="default" onClick={form.reset}>
              Reset all
            </Button>
          )}

          <Button size="md" type="submit" disabled={!dirty}>
            Save changes
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
