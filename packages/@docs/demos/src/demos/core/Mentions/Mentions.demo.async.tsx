import { Mentions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Mentions } from '@mantine/core';

const database = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
  { id: 'gus', display: 'Gustavo Fring' },
  { id: 'mike', display: 'Mike Ehrmantraut' },
];

async function searchUsers(query: string, { signal }: { signal: AbortSignal }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  signal.throwIfAborted();
  return database.filter((user) => user.display.toLowerCase().includes(query.toLowerCase()));
}

function Demo() {
  return (
    <Mentions
      label="Async data source"
      placeholder="Type @ to search users"
      nothingFoundMessage="No users found"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={searchUsers} debounceMs={200} />
    </Mentions>
  );
}
`;

const database = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
  { id: 'saul', display: 'Saul Goodman' },
  { id: 'gus', display: 'Gustavo Fring' },
  { id: 'mike', display: 'Mike Ehrmantraut' },
];

async function searchUsers(query: string, { signal }: { signal: AbortSignal }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  signal.throwIfAborted();
  return database.filter((user) => user.display.toLowerCase().includes(query.toLowerCase()));
}

function Demo() {
  return (
    <Mentions
      label="Async data source"
      placeholder="Type @ to search users"
      nothingFoundMessage="No users found"
      minRows={3}
    >
      <Mentions.Mention trigger="@" data={searchUsers} debounceMs={200} />
    </Mentions>
  );
}

export const async: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
