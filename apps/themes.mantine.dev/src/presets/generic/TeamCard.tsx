import { Button, Group, Paper, Persona, Stack, Title } from '@mantine/core';
import { members } from './data';

export function TeamCard() {
  return (
    <Paper withBorder p="md" h="100%">
      <Group justify="space-between" mb="md">
        <Title order={3} size="h4">
          Team
        </Title>
        <Button variant="default" size="xs">
          Invite
        </Button>
      </Group>
      <Stack gap="md">
        {members.map((member) => (
          <Persona
            key={member.name}
            name={member.name}
            secondaryText={member.role}
            presence={member.presence}
            avatar={{ name: member.name, color: 'initials' }}
          />
        ))}
      </Stack>
    </Paper>
  );
}
