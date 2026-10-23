import { Divider, Surface } from '@mantine/core';
import { DeleteOrganization } from './DeleteOrganization';
import { TransferOwnership } from './TransferOwnership';

export function DangerZone({ organizationName }: { organizationName: string }) {
  return (
    <Surface withBorder>
      <TransferOwnership organizationName={organizationName} />
      <Divider />
      <DeleteOrganization organizationName={organizationName} />
    </Surface>
  );
}
