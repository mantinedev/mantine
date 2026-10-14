import { useEffect, useRef, useState } from 'react';
import { PaperclipIcon, PaperPlaneRightIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  ScrollArea,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Conversations } from './Conversations';
import { conversations, getMessages } from './data';
import { UserMenu } from './UserMenu';
import classes from './ChatLayout.module.css';

export function ChatLayout() {
  const [opened, { toggle, close }] = useDisclosure();
  const [active, setActive] = useState(conversations[0].name);
  const viewport = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const contact = conversations.find((conversation) => conversation.name === active)!;

  useEffect(() => {
    viewport.current?.scrollTo({ top: viewport.current.scrollHeight });
  }, [active]);

  const handleSelect = (name: string) => {
    setActive(name);
    close();
    input.current?.focus();
  };

  const bubbles = getMessages(contact).map((message) => (
    <div key={message.id} className={classes.bubble} data-own={message.own || undefined}>
      <Text size="sm">{message.text}</Text>
      <Text size="xs" className={classes.time}>
        {message.time}
      </Text>
    </div>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation"
            />
            <MantineLogo size={28} />
          </Group>
          <UserMenu />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Conversations active={active} onSelect={handleSelect} />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Group px="md" h={56} gap="sm" className={classes.contact}>
          <Avatar src={contact.avatar} radius="xl" size="sm" />
          <div>
            <Text size="sm" fw={500}>
              {contact.name}
            </Text>
            <Text size="xs">Online</Text>
          </div>
        </Group>

        <ScrollArea className={classes.messages} p="md" viewportRef={viewport}>
          <Stack gap="xs">{bubbles}</Stack>
        </ScrollArea>

        <Group p="md" gap="sm" wrap="nowrap" className={classes.composer}>
          <ActionIcon variant="default" size="lg" aria-label="Attach file" title="Attach file">
            <PaperclipIcon size={18} />
          </ActionIcon>
          <TextInput
            ref={input}
            placeholder="Type a message"
            aria-label="Message"
            style={{ flex: 1 }}
          />
          <Button leftSection={<PaperPlaneRightIcon size={16} />}>Send</Button>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}
