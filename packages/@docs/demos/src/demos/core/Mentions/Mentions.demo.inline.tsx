import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Mentions } from '@mantine/core';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
];

function Demo() {
  return (
    <Mentions
      label="Inline suggestions"
      description="Type @ then press Tab, Enter or → to accept the suggestion"
      suggestionsDisplay="inline"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} appendSpaceOnAdd />
    </Mentions>
  );
}
`;

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
];

function Demo() {
  return (
    <Mentions
      label="Inline suggestions"
      description="Type @ then press Tab, Enter or → to accept the suggestion"
      suggestionsDisplay="inline"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} appendSpaceOnAdd />
    </Mentions>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
