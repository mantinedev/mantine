import { useState } from 'react';
import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Mentions } from '@mantine/core';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
  { id: 'gus', display: 'Gustavo Fring' },
];

function Demo() {
  const [value, setValue] = useState('Hey @[Walter White](walter), are you ready?');

  return (
    <Mentions
      label="Comment"
      placeholder="Type @ to mention someone"
      value={value}
      onChange={(payload) => setValue(payload.value)}
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}
`;

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
  { id: 'gus', display: 'Gustavo Fring' },
];

function Demo() {
  const [value, setValue] = useState('Hey @[Walter White](walter), are you ready?');

  return (
    <Mentions
      label="Comment"
      placeholder="Type @ to mention someone"
      value={value}
      onChange={(payload) => setValue(payload.value)}
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
