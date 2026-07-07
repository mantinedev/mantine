import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Mentions } from '@mantine/core';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
];

const tags = [
  { id: '1', display: 'announcement' },
  { id: '2', display: 'question' },
  { id: '3', display: 'bug' },
];

function Demo() {
  return (
    <Mentions label="Mention people with @ and tag topics with #" minRows={3}>
      <Mentions.Mention trigger="@" data={users} />
      <Mentions.Mention trigger="#" markup="#[__display__](__id__)" data={tags} appendSpaceOnAdd />
    </Mentions>
  );
}
`;

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
];

const tags = [
  { id: '1', display: 'announcement' },
  { id: '2', display: 'question' },
  { id: '3', display: 'bug' },
];

function Demo() {
  return (
    <Mentions label="Mention people with @ and tag topics with #" minRows={3}>
      <Mentions.Mention trigger="@" data={users} />
      <Mentions.Mention trigger="#" markup="#[__display__](__id__)" data={tags} appendSpaceOnAdd />
    </Mentions>
  );
}

export const multipleTriggers: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
