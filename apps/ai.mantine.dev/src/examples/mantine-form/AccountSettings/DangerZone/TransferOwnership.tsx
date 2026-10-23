import { Button, Group, Select, Stack, Text, useModal } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { transferOwnership } from '../api';
import { MEMBERS } from '../constants';
import { DangerZoneRow } from './DangerZoneRow/DangerZoneRow';

interface TransferOwnershipValues {
  memberId: string | null;
}

export function TransferOwnership({ organizationName }: { organizationName: string }) {
  const form = useForm<TransferOwnershipValues>({
    name: 'transfer-ownership',
    initialValues: { memberId: null },
    validate: { memberId: isNotEmpty('Select the new owner') },
  });

  const handleSubmit = async ({ memberId }: TransferOwnershipValues) => {
    const member = await transferOwnership(memberId!);
    notifications.show({ title: 'Ownership transferred', message: member.label });
    modal.close();
  };

  const modal = useModal({
    title: 'Transfer ownership',
    onExitTransitionEnd: form.reset,
    closeOnClickOutside: !form.submitting,
    closeOnEscape: !form.submitting,
    withCloseButton: !form.submitting,
    children: (
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Text size="sm">
            The new owner gets full control of {organizationName}, including billing and deletion.
            You stay a member with admin access.
          </Text>
          <Select
            label="New owner"
            placeholder="Select a member"
            data={MEMBERS}
            withAsterisk
            {...form.getInputProps('memberId')}
          />
          <Group justify="flex-end">
            <Button variant="default" onClick={() => modal.close()} disabled={form.submitting}>
              Cancel
            </Button>
            <Button type="submit" color="red" loading={form.submitting}>
              Transfer ownership
            </Button>
          </Group>
        </Stack>
      </form>
    ),
  });

  return (
    <DangerZoneRow
      title="Transfer ownership"
      description="Make another member the owner of this organization."
      action={
        <Button variant="default" onClick={() => modal.open()}>
          Transfer ownership
        </Button>
      }
    />
  );
}
