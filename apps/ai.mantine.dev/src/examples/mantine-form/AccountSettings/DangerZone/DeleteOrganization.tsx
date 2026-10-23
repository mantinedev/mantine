import { Button, Group, Stack, Text, TextInput, useModal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { deleteOrganization } from '../api';
import { DangerZoneRow } from './DangerZoneRow/DangerZoneRow';

interface DeleteOrganizationValues {
  confirmation: string;
}

export function DeleteOrganization({ organizationName }: { organizationName: string }) {
  const form = useForm<DeleteOrganizationValues>({
    name: 'delete-organization',
    initialValues: { confirmation: '' },
    validate: {
      confirmation: (value) =>
        value.trim() === organizationName ? null : 'Type the organization name to confirm',
    },
  });

  const handleSubmit = async () => {
    await deleteOrganization();
    notifications.show({ title: 'Organization deleted', message: organizationName });
    modal.close();
  };

  const modal = useModal({
    title: 'Delete organization',
    onExitTransitionEnd: form.reset,
    closeOnClickOutside: !form.submitting,
    closeOnEscape: !form.submitting,
    withCloseButton: !form.submitting,
    children: (
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Text size="sm">
            This permanently deletes {organizationName} with all its members, projects and invoices.
            Type <strong>{organizationName}</strong> to confirm.
          </Text>
          <TextInput
            label="Organization name"
            placeholder={organizationName}
            autoComplete="off"
            data-autofocus
            {...form.getInputProps('confirmation')}
          />
          <Group justify="flex-end">
            <Button variant="default" onClick={() => modal.close()} disabled={form.submitting}>
              Cancel
            </Button>
            <Button type="submit" color="red" loading={form.submitting}>
              Delete organization
            </Button>
          </Group>
        </Stack>
      </form>
    ),
  });

  return (
    <DangerZoneRow
      title="Delete organization"
      description="Permanently delete the organization and all of its data. This cannot be undone."
      action={
        <Button variant="default" c="red" onClick={() => modal.open()}>
          Delete organization
        </Button>
      }
    />
  );
}
