'use client';

import { Avatar, Badge, Tabs, Text, Title, UnstyledButton } from '@mantine/core';
import { type Conversation, type InboxTab, lastMessageText, money, photoUrl, TABS } from './data';
import classes from './ConversationList.module.css';

function StatusBadge({ conversation }: { conversation: Conversation }) {
  if (conversation.sold) {
    return (
      <Badge variant="dot" color="var(--mantine-color-text)">
        Sold
      </Badge>
    );
  }
  if (conversation.status === 'agreed') {
    return (
      <Badge variant="dot" color="green" className={classes.agreed}>
        Agreed
      </Badge>
    );
  }
  if (conversation.status === 'reserved') {
    return (
      <Badge variant="dot" color="#c89a2e">
        Reserved
      </Badge>
    );
  }
  if (conversation.status === 'offer') {
    return <Badge variant="dot">Offer made</Badge>;
  }
  return null;
}

function EmptyState({ archived }: { archived: boolean }) {
  return (
    <li className={classes.empty}>
      <svg viewBox="0 0 120 90" width={120} height={90} aria-hidden="true">
        <path
          d="M30 70V40a10 10 0 0 1 10-10h40a10 10 0 0 1 10 10v30"
          fill="none"
          stroke="var(--mantine-color-default-border)"
          strokeWidth="3"
        />
        <rect x="22" y="48" width="76" height="22" rx="8" className={classes.emptySeat} />
        <path
          d="M30 70v10M90 70v10"
          stroke="var(--mantine-color-default-border)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <Text fw={600} fz={16} className={classes.emptyTitle}>
        {archived ? 'No archived chats' : 'Nothing here yet'}
      </Text>
      <Text size="md" fz={14} maw="24em">
        {archived
          ? 'Archive a chat from its menu to tidy your inbox. It comes back if the other person replies.'
          : 'Chats about things you buy or sell show up here.'}
      </Text>
    </li>
  );
}

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string;
  tab: InboxTab;
  onTabChange: (tab: InboxTab) => void;
  onSelect: (id: string) => void;
}

export function ConversationList({
  conversations,
  activeId,
  tab,
  onTabChange,
  onSelect,
}: ConversationListProps) {
  const visible = conversations.filter((conversation) =>
    tab === 'archived'
      ? conversation.archived
      : !conversation.archived && (tab === 'all' || conversation.role === tab)
  );

  return (
    <aside className={classes.root} aria-label="Conversations">
      <Title order={1} className={classes.title}>
        Messages
      </Title>

      <Tabs
        value={tab}
        onChange={(value) => value && onTabChange(value as InboxTab)}
        className={classes.tabs}
      >
        <Tabs.List aria-label="Filter conversations">
          {TABS.map((item) => (
            <Tabs.Tab key={item.value} value={item.value}>
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <ul className={classes.list}>
        {visible.length === 0 && <EmptyState archived={tab === 'archived'} />}
        {visible.map((conversation) => (
          <li key={conversation.id}>
            <UnstyledButton
              className={classes.conversation}
              aria-current={conversation.id === activeId}
              onClick={() => onSelect(conversation.id)}
            >
              <span className={classes.thumb}>
                <img src={photoUrl(conversation.photo)} alt="" />
                <Avatar size={24} className={classes.who}>
                  {conversation.initials}
                </Avatar>
              </span>
              <span className={classes.row}>
                <span className={classes.name}>{conversation.name}</span>
                <span className={classes.time}>{conversation.time}</span>
              </span>
              <span className={classes.item}>
                <b>{money(conversation.item.price)}</b> {conversation.item.title}
              </span>
              <span className={classes.row}>
                <span className={classes.last} data-unread={conversation.unread > 0 || undefined}>
                  {lastMessageText(conversation)}
                </span>
                <span className={classes.meta}>
                  <StatusBadge conversation={conversation} />
                  {conversation.unread > 0 && (
                    <Badge circle aria-label={`${conversation.unread} unread`}>
                      {conversation.unread}
                    </Badge>
                  )}
                </span>
              </span>
            </UnstyledButton>
          </li>
        ))}
      </ul>
    </aside>
  );
}
