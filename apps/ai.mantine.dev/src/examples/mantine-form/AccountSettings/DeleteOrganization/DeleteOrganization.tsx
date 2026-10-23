import { Button, Group, Text, TextInput, useModal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { deleteOrganization } from '../api';
import classes from './DeleteOrganization.module.css';

export function DeleteOrganization({ organizationName }: { organizationName: string }) {
  const form = useForm({
    name: 'delete-organization',
    initialValues: { confirmation: '' },
    validate: {
      confirmation: (value) =>
        value === organizationName ? null : `Type ${organizationName} to confirm`,
    },
  });

  const handleSubmit = async () => {
    await deleteOrganization();
    notifications.show({ title: 'Organization deleted', message: organizationName });
    modal.close();
  };

  const modal = useModal({
    title: 'Delete organization',
    closeOnClickOutside: !form.submitting,
    closeOnEscape: !form.submitting,
    withCloseButton: !form.submitting,
    children: (
      <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
        <Text size="sm">
          This permanently deletes {organizationName}, its members&apos; access and its billing
          history. This cannot be undone.
        </Text>
        <TextInput
          mt="md"
          label={`Type ${organizationName} to confirm`}
          placeholder={organizationName}
          autoComplete="off"
          data-autofocus
          {...form.getInputProps('confirmation')}
        />
        <Group justify="flex-end" mt="lg">
          <Button variant="default" onClick={() => modal.close()} disabled={form.submitting}>
            Cancel
          </Button>
          <Button type="submit" color="red" loading={form.submitting}>
            Delete organization
          </Button>
        </Group>
      </form>
    ),
  });

  // Reset on open, not on close, so the typed name does not vanish while the modal fades out
  const openConfirmation = () => {
    form.reset();
    modal.open();
  };

  return (
    <div className={classes.root}>
      <div className={classes.texts}>
        <Text size="sm" className={classes.title}>
          Delete organization
        </Text>
        <Text size="sm">
          Permanently remove {organizationName} with all its data. This cannot be undone.
        </Text>
      </div>
      <Button variant="default" c="red" className={classes.button} onClick={openConfirmation}>
        Delete organization
      </Button>
    </div>
  );
}
