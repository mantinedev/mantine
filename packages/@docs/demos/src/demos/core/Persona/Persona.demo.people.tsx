import { Paper, Persona, PersonaPresenceValue, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const members: { name: string; role: string; image: string; presence: PersonaPresenceValue }[] = [
  {
    name: 'Emily Johnson',
    role: 'Product manager',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    presence: 'available',
  },
  {
    name: 'Kevin Gilbert',
    role: 'Frontend developer',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    presence: 'do-not-disturb',
  },
  {
    name: 'Mary Smith',
    role: 'UX researcher',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    presence: { status: 'busy', outOfOffice: true },
  },
  {
    name: 'Robert Wolf',
    role: 'Backend developer',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    presence: 'offline',
  },
];

function Demo() {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="lg">
        {members.map((person) => (
          <Persona
            key={person.name}
            name={person.name}
            secondaryText={person.role}
            avatar={{ src: person.image }}
            presence={person.presence}
          />
        ))}
      </Stack>
    </Paper>
  );
}

const code = `
import { Paper, Persona, Stack } from '@mantine/core';

const people = [
  { name: 'Emily Johnson', role: 'Product manager', image: image1, presence: 'available' },
  { name: 'Kevin Gilbert', role: 'Frontend developer', image: image2, presence: 'do-not-disturb' },
  { name: 'Mary Smith', role: 'UX researcher', image: image3, presence: { status: 'busy', outOfOffice: true } },
  { name: 'Robert Wolf', role: 'Backend developer', image: image4, presence: 'offline' },
];

function Demo() {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="lg">
        {people.map((person) => (
          <Persona
            key={person.name}
            name={person.name}
            secondaryText={person.role}
            avatar={{ src: person.image }}
            presence={person.presence}
          />
        ))}
      </Stack>
    </Paper>
  );
}
`;

export const people: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 360,
};
