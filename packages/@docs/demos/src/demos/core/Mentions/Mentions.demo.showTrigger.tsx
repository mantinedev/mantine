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
      label="The @ prefix is kept in the displayed text"
      defaultValue="Ping @[Walter White](walter) about it"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} withTrigger />
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
      label="The @ prefix is kept in the displayed text"
      defaultValue="Ping @[Walter White](walter) about it"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} withTrigger />
    </Mentions>
  );
}

export const showTrigger: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
