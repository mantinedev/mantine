import { useState } from 'react';
import { Badge, Group, Stack, Text, TextInput } from '@mantine/core';
import { useDebouncedEffect } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Badge, Group, Stack, Text, TextInput } from '@mantine/core';
import { useDebouncedEffect } from '@mantine/hooks';

function Demo() {
  const [query, setQuery] = useState('');
  const [runs, setRuns] = useState(0);
  const [lastQuery, setLastQuery] = useState('');

  useDebouncedEffect(
    () => {
      setRuns((current) => current + 1);
      setLastQuery(query);
    },
    [query],
    500
  );

  return (
    <Stack>
      <TextInput
        label="Type quickly – the effect runs 500ms after you stop"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
      <Group>
        <Badge>Effect runs: {runs}</Badge>
        <Text size="sm">Last searched: {lastQuery || '–'}</Text>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const [query, setQuery] = useState('');
  const [runs, setRuns] = useState(0);
  const [lastQuery, setLastQuery] = useState('');

  useDebouncedEffect(
    () => {
      setRuns((current) => current + 1);
      setLastQuery(query);
    },
    [query],
    500
  );

  return (
    <Stack>
      <TextInput
        label="Type quickly – the effect runs 500ms after you stop"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
      <Group>
        <Badge>Effect runs: {runs}</Badge>
        <Text size="sm">Last searched: {lastQuery || '–'}</Text>
      </Group>
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
