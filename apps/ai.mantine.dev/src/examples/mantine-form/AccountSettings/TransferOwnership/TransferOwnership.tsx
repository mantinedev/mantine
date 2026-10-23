import { useState } from 'react';
import { Button, Group, Select, Text, useModal } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { transferOwnership } from '../api';
import type { Member } from '../types';
import classes from './TransferOwnership.module.css';

interface TransferOwnershipProps {
  organizationName: string;
  members: Member[];
  onTransferred: (memberId: string) => void;
}

export function TransferOwnership({
  organizationName,
  members,
  onTransferred,
}: TransferOwnershipProps) {
  // Snapshot of the picked member: the select is reset after the transfer while the modal fades out
  const [pendingMember, setPendingMember] = useState<Member | null>(null);
  const [transferring, setTransferring] = useState(false);

  const form = useForm<{ memberId: string | null }>({
    name: 'transfer-ownership',
    initialValues: { memberId: null },
    validate: { memberId: isNotEmpty('Pick a member to transfer ownership to') },
  });

  const handleConfirm = async () => {
    if (!pendingMember) {
      return;
    }
    setTransferring(true);
    try {
      await transferOwnership(pendingMember.value);
      notifications.show({ title: 'Ownership transferred', message: pendingMember.label });
      onTransferred(pendingMember.value);
      form.reset();
      modal.close();
    } finally {
      setTransferring(false);
    }
  };

  const modal = useModal({
    title: 'Transfer ownership',
    closeOnClickOutside: !transferring,
    closeOnEscape: !transferring,
    withCloseButton: !transferring,
    children: (
      <>
        <Text size="sm">
          {pendingMember?.label} will become the owner of {organizationName}. You will keep access
          as an admin, but only the new owner can transfer ownership back.
        </Text>
        <Group justify="flex-end" mt="lg">
          <Button variant="default" onClick={() => modal.close()} disabled={transferring}>
            Cancel
          </Button>
          <Button color="red" onClick={handleConfirm} loading={transferring}>
            Transfer ownership
          </Button>
        </Group>
      </>
    ),
  });

  const handleSubmit = ({ memberId }: { memberId: string | null }) => {
    setPendingMember(members.find((member) => member.value === memberId) ?? null);
    modal.open();
  };

  return (
    <div className={classes.root}>
      <div>
        <Text size="sm" className={classes.title}>
          Transfer ownership
        </Text>
        <Text size="sm">Give another member full control of {organizationName}.</Text>
      </div>
      <form className={classes.row} onSubmit={form.onSubmit(handleSubmit)} noValidate>
        <Select
          label="New owner"
          placeholder="Pick a member"
          data={members}
          className={classes.field}
          {...form.getInputProps('memberId')}
        />
        <Button type="submit" variant="default" className={classes.button}>
          Transfer ownership
        </Button>
      </form>
    </div>
  );
}
