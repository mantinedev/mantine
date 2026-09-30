import { Persona, SimpleGrid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const statuses = [
  'available',
  'away',
  'busy',
  'do-not-disturb',
  'offline',
  'out-of-office',
  'blocked',
  'unknown',
] as const;

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2 }}>
      {statuses.map((status) => (
        <Persona
          key={status}
          name="Jane Doe"
          secondaryText={status}
          presence={status}
          labels={{ [status]: '' }}
        />
      ))}
    </SimpleGrid>
  );
}

const code = `
import { Persona, SimpleGrid } from '@mantine/core';

const statuses = [
  'available',
  'away',
  'busy',
  'do-not-disturb',
  'offline',
  'out-of-office',
  'blocked',
  'unknown',
] as const;

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2 }}>
      {statuses.map((status) => (
        <Persona
          key={status}
          name="Jane Doe"
          secondaryText={status}
          presence={status}
          labels={{ [status]: '' }}
        />
      ))}
    </SimpleGrid>
  );
}
`;

export const presence: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 460,
};
