import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import {
  AppShell,
  Avatar,
  Group,
  ScrollArea,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { conversations } from './data';
import classes from './Conversations.module.css';

interface ConversationsProps {
  active: string;
  onSelect: (name: string) => void;
}

export function Conversations({ active, onSelect }: ConversationsProps) {
  const items = conversations.map((conversation) => (
    <UnstyledButton
      key={conversation.name}
      className={classes.item}
      data-active={conversation.name === active || undefined}
      aria-current={conversation.name === active || undefined}
      onClick={() => onSelect(conversation.name)}
    >
      <Group wrap="nowrap" gap="sm">
        <Avatar src={conversation.avatar} radius="xl" />
        <div className={classes.body}>
          <Group justify="space-between" wrap="nowrap">
            <Text size="sm" fw={500} truncate>
              {conversation.name}
            </Text>
            <Text size="xs">{conversation.time}</Text>
          </Group>
          <Text size="sm" truncate>
            {conversation.lastMessage}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <AppShell.Section p="md">
        <TextInput
          placeholder="Search conversations"
          aria-label="Search conversations"
          leftSection={<MagnifyingGlassIcon size={16} />}
        />
      </AppShell.Section>
      <AppShell.Section grow component={ScrollArea}>
        {items}
      </AppShell.Section>
    </>
  );
}
