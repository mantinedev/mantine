import { useEffect, useRef } from 'react';
import {
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconLock,
  IconPhoto,
  IconPlus,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import {
  Button,
  Divider,
  Menu,
  Pill,
  ScrollArea,
  Select,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { Composer, type ComposerMode } from './Composer';
import {
  type AgentId,
  AGENTS,
  CHANNEL_LABEL,
  ME,
  type Message,
  type Status,
  STATUS_LABEL,
  TAG_OPTIONS,
  type Ticket,
} from './data';
import { ChannelIcon, PersonAvatar, Priority } from './parts';
import { SlaTimer } from './SlaTimer';
import classes from './Thread.module.css';

const STATUS_DATA = (Object.keys(STATUS_LABEL) as Status[]).map((value) => ({
  value,
  label: STATUS_LABEL[value],
}));

interface ThreadProps {
  ticket: Ticket;
  elapsed: number;
  customerOpened: boolean;
  onBack: () => void;
  onToggleCustomer: () => void;
  onStatusChange: (status: Status) => void;
  onAssign: (agent: AgentId | null) => void;
  onTagsChange: (tags: string[]) => void;
  mode: ComposerMode;
  onModeChange: (mode: ComposerMode) => void;
  draft: string;
  onDraftChange: (draft: string) => void;
  onSend: (status: Status) => void;
  onAddNote: () => void;
}

function MessageItem({ message, ticket }: { message: Message; ticket: Ticket }) {
  const agent = message.agent ? AGENTS[message.agent] : null;
  const name = agent ? agent.name : ticket.customer;

  return (
    <div className={classes.message} data-who={message.who}>
      {agent && message.agent ? (
        <PersonAvatar initials={message.agent} tone={agent.tone} size={32} />
      ) : (
        <PersonAvatar initials={ticket.initials} tone={ticket.tone} size={32} />
      )}
      <div className={classes.messageMain}>
        <div className={classes.messageHead}>
          <span className={classes.messageName}>{name}</span>
          {message.who === 'note' && (
            <span className={classes.noteLabel}>
              <IconLock size={13} stroke={1.75} />
              Internal note
            </span>
          )}
          <span className={classes.messageTime}>{message.time}</span>
          {message.via && (
            <span className={classes.messageVia}>
              <ChannelIcon channel={message.via} size={13} />
              via {CHANNEL_LABEL[message.via].toLowerCase()}
            </span>
          )}
        </div>
        <div className={classes.bubble}>
          {message.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {message.attach && (
            <span className={classes.attach}>
              <IconPhoto size={15} stroke={1.75} />
              {message.attach}
            </span>
          )}
          {message.reading && (
            <div className={classes.reading}>
              {message.reading.label} <b>{message.reading.value}</b> {message.reading.target}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Thread({
  ticket,
  elapsed,
  customerOpened,
  onBack,
  onToggleCustomer,
  onStatusChange,
  onAssign,
  onTagsChange,
  mode,
  onModeChange,
  draft,
  onDraftChange,
  onSend,
  onAddNote,
}: ThreadProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const assignee = ticket.assignee ? AGENTS[ticket.assignee] : null;
  const tagOptions = TAG_OPTIONS.filter((tag) => !ticket.tags.includes(tag));

  useEffect(() => {
    const scrollToEnd = () => viewport.current?.scrollTo({ top: viewport.current.scrollHeight });
    scrollToEnd();
    const observer = new ResizeObserver(scrollToEnd);
    if (content.current) {
      observer.observe(content.current);
    }
    return () => observer.disconnect();
  }, [ticket.id, ticket.messages.length]);

  return (
    <main className={classes.root}>
      <div className={classes.head}>
        <UnstyledButton className={classes.back} onClick={onBack}>
          <IconChevronLeft size={16} stroke={1.75} />
          All tickets
        </UnstyledButton>

        <div className={classes.titleRow}>
          <div className={classes.titleBlock}>
            <Title order={1} className={classes.title}>
              {ticket.subject}
            </Title>
            <div className={classes.sub}>
              #{ticket.id}, {CHANNEL_LABEL[ticket.channel]}, {ticket.customer}
            </div>
          </div>
          <Button
            variant="default"
            className={classes.customerToggle}
            leftSection={<IconUser size={16} stroke={1.75} />}
            aria-expanded={customerOpened}
            aria-controls="hearth-customer"
            onClick={onToggleCustomer}
          >
            Customer
          </Button>
        </div>

        <div className={classes.controls}>
          <Select
            size="xs"
            w={186}
            aria-label="Status"
            data={STATUS_DATA}
            value={ticket.status}
            allowDeselect={false}
            onChange={(value) => value && onStatusChange(value as Status)}
            leftSection={<span className={classes.statusDot} data-status={ticket.status} />}
            leftSectionWidth={26}
            rightSection={<IconChevronDown size={14} stroke={1.75} />}
            rightSectionPointerEvents="none"
            classNames={{ input: classes.statusInput }}
          />

          <Menu position="bottom-start">
            <Menu.Target>
              <Button
                variant="default"
                className={classes.assignee}
                leftSection={
                  <PersonAvatar
                    initials={ticket.assignee ?? '?'}
                    tone={assignee ? assignee.tone : undefined}
                  />
                }
                rightSection={<IconChevronDown size={14} stroke={1.75} />}
              >
                {assignee ? assignee.name : 'Unassigned'}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Assign to</Menu.Label>
              {(Object.keys(AGENTS) as AgentId[]).map((id) => (
                <Menu.Item
                  key={id}
                  leftSection={<PersonAvatar initials={id} tone={AGENTS[id].tone} />}
                  rightSection={
                    ticket.assignee === id && (
                      <IconCheck size={18} stroke={1.75} className={classes.tick} />
                    )
                  }
                  onClick={() => onAssign(id)}
                >
                  {AGENTS[id].name}
                  {id === ME && ' (you)'}
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item onClick={() => onAssign(null)}>Unassign</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Priority priority={ticket.priority} />

          <Pill.Group className={classes.tags}>
            {ticket.tags.map((tag) => (
              <Pill
                key={tag}
                withRemoveButton
                removeButtonProps={{
                  'aria-label': `Remove tag ${tag}`,
                  icon: <IconX size={12} stroke={2.25} />,
                }}
                onRemove={() => onTagsChange(ticket.tags.filter((item) => item !== tag))}
              >
                {tag}
              </Pill>
            ))}
            <Menu position="bottom-start">
              <Menu.Target>
                <UnstyledButton className={classes.addTag}>
                  <IconPlus size={12} stroke={1.75} />
                  Tag
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Add a tag</Menu.Label>
                {tagOptions.map((tag) => (
                  <Menu.Item key={tag} onClick={() => onTagsChange([...ticket.tags, tag])}>
                    {tag}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Pill.Group>

          <span className={classes.sla}>
            <SlaTimer ticket={ticket} elapsed={elapsed} />
          </span>
        </div>
      </div>

      <ScrollArea className={classes.scroll} viewportRef={viewport} scrollbarSize={8}>
        <div className={classes.messages} ref={content}>
          <Divider label="Today" labelPosition="center" classNames={{ label: classes.dayLabel }} />
          {ticket.messages.map((message, index) => (
            <MessageItem key={index} message={message} ticket={ticket} />
          ))}
        </div>
      </ScrollArea>

      <Composer
        ticket={ticket}
        mode={mode}
        onModeChange={onModeChange}
        draft={draft}
        onDraftChange={onDraftChange}
        onSend={onSend}
        onAddNote={onAddNote}
      />
    </main>
  );
}
