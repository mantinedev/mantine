import { Text } from '@mantine/core';
import { Member } from './members-data';
import classes from './SelectOptionDetails.module.css';

interface MemberDetailsProps {
  member: Member | null;
}

export function MemberDetails({ member }: MemberDetailsProps) {
  if (!member) {
    return (
      <div className={classes.details}>
        <Text fz="xs" ta="center" mt="xl">
          Hover an option or use arrow keys to preview a member
        </Text>
      </div>
    );
  }

  return (
    <div className={classes.details}>
      <Text fz="sm" fw={500}>
        {member.name}
      </Text>
      <Text fz="xs" mb="sm">
        {member.role}
      </Text>
      <Text fz="xs">{member.email}</Text>
      <Text fz="xs">{member.location}</Text>
    </div>
  );
}
