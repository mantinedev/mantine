import { useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button, Center, Stack, Text } from '@mantine/core';
import { EmojiPicker } from '@mantine/emoji';
import { MantineDemo } from '@mantinex/demo';
import { demoEmojiData } from '../_demo-data';

const code = `
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button, Center, Stack, Text } from '@mantine/core';
import data from '@emoji-mart/data';
import { emojiMartAdapter, EmojiPicker } from '@mantine/emoji';

const emojiData = emojiMartAdapter(data);

function Demo() {
  const [search, setSearch] = useState('');

  return (
    <EmojiPicker
      data={emojiData}
      searchValue={search}
      onSearchChange={setSearch}
      emptySearchContent={
        <Center h="100%">
          <Stack align="center" gap="xs">
            <MagnifyingGlassIcon size={32} />
            <Text size="sm" c="dimmed" ta="center">
              No emojis match your search
            </Text>
            <Button variant="light" size="compact-sm" onClick={() => setSearch('')}>
              Clear search
            </Button>
          </Stack>
        </Center>
      }
    />
  );
}
`;

function Demo() {
  const [search, setSearch] = useState('');

  return (
    <EmojiPicker
      data={demoEmojiData}
      searchValue={search}
      onSearchChange={setSearch}
      emptySearchContent={
        <Center h="100%">
          <Stack align="center" gap="xs">
            <MagnifyingGlassIcon size={32} />
            <Text size="sm" c="dimmed" ta="center">
              No emojis match your search
            </Text>
            <Button variant="light" size="compact-sm" onClick={() => setSearch('')}>
              Clear search
            </Button>
          </Stack>
        </Center>
      }
    />
  );
}

export const emptySearch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
