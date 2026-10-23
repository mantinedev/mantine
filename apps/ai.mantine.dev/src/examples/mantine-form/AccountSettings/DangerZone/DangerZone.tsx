import { Divider, Surface } from '@mantine/core';
import { DeleteOrganization } from '../DeleteOrganization/DeleteOrganization';
import { TransferOwnership } from '../TransferOwnership/TransferOwnership';
import type { Member } from '../types';
import classes from './DangerZone.module.css';

interface DangerZoneProps {
  organizationName: string;
  members: Member[];
  onOwnershipTransferred: (memberId: string) => void;
}

export function DangerZone({ organizationName, members, onOwnershipTransferred }: DangerZoneProps) {
  return (
    <Surface withBorder p="lg" level={0} className={classes.root}>
      <TransferOwnership
        organizationName={organizationName}
        members={members}
        onTransferred={onOwnershipTransferred}
      />
      <Divider my="lg" />
      <DeleteOrganization organizationName={organizationName} />
    </Surface>
  );
}
