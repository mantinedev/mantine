import { useRef } from 'react';
import { Badge, Group, Kbd, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useActiveElement, useWindowEvent } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { Badge, Group, Kbd, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useActiveElement, useWindowEvent } from '@mantine/hooks';

function Demo() {
  const searchRef = useRef<HTMLInputElement>(null);
  const activeElement = useActiveElement();

  const isEditing =
    activeElement?.tagName === 'INPUT' ||
    activeElement?.tagName === 'TEXTAREA' ||
    (activeElement as HTMLElement | null)?.isContentEditable === true;

  useWindowEvent('keydown', (event) => {
    // Ignore the shortcut while the user is typing in a field
    if (event.key === '/' && !isEditing) {
      event.preventDefault();
      searchRef.current?.focus();
    }
  });

  return (
    <Stack>
      <Group>
        <Text size="sm">
          Press <Kbd>/</Kbd> to focus the search field
        </Text>
        <Badge color={isEditing ? 'gray' : 'teal'} variant="light">
          {isEditing ? 'Shortcut disabled' : 'Shortcut active'}
        </Badge>
      </Group>

      <TextInput ref={searchRef} label="Search" placeholder="Press / to focus" />
      <Textarea label="Notes" placeholder="Typing here disables the shortcut" />
    </Stack>
  );
}
`;

function Demo() {
  const searchRef = useRef<HTMLInputElement>(null);
  const activeElement = useActiveElement();

  const isEditing =
    activeElement?.tagName === 'INPUT' ||
    activeElement?.tagName === 'TEXTAREA' ||
    (activeElement as HTMLElement | null)?.isContentEditable === true;

  useWindowEvent('keydown', (event) => {
    if (event.key === '/' && !isEditing) {
      event.preventDefault();
      searchRef.current?.focus();
    }
  });

  return (
    <Stack>
      <Group>
        <Text size="sm">
          Press <Kbd>/</Kbd> to focus the search field
        </Text>
        <Badge color={isEditing ? 'gray' : 'teal'} variant="light">
          {isEditing ? 'Shortcut disabled' : 'Shortcut active'}
        </Badge>
      </Group>

      <TextInput ref={searchRef} label="Search" placeholder="Press / to focus" />
      <Textarea label="Notes" placeholder="Typing here disables the shortcut" />
    </Stack>
  );
}

export const hotkey: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
