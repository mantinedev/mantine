import { useRef } from 'react';
import { IconBolt, IconChevronDown, IconLock, IconPaperclip } from '@tabler/icons-react';
import { ActionIcon, Button, Menu, Tabs, Textarea } from '@mantine/core';
import { SAVED_REPLIES, type Status, type Ticket } from './data';
import classes from './Composer.module.css';

export type ComposerMode = 'reply' | 'note';

interface ComposerProps {
  ticket: Ticket;
  mode: ComposerMode;
  onModeChange: (mode: ComposerMode) => void;
  draft: string;
  onDraftChange: (draft: string) => void;
  onSend: (status: Status) => void;
  onAddNote: () => void;
}

export function Composer({
  ticket,
  mode,
  onModeChange,
  draft,
  onDraftChange,
  onSend,
  onAddNote,
}: ComposerProps) {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const isReply = mode === 'reply';

  const submit = (action: () => void) => {
    if (!draft.trim()) {
      textarea.current?.focus();
      return;
    }
    action();
  };

  const insertReply = (text: string) => {
    onDraftChange(draft.trim() ? `${draft.trim()}\n\n${text}` : text);
    textarea.current?.focus();
  };

  return (
    <div className={classes.root} data-note={!isReply || undefined}>
      <Tabs
        variant="pills"
        value={mode}
        onChange={(value) => {
          onModeChange(value as ComposerMode);
          textarea.current?.focus();
        }}
        activateTabWithKeyboard
      >
        <Tabs.List aria-label="Composer mode" className={classes.tabs}>
          <Tabs.Tab value="reply">Reply</Tabs.Tab>
          <Tabs.Tab value="note">Internal note</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <div className={classes.to}>
        {isReply ? `To ${ticket.customer}, ${ticket.email}` : 'Only your team can see this'}
      </div>

      <Textarea
        ref={textarea}
        variant="unstyled"
        resize="vertical"
        aria-label={isReply ? 'Reply to customer' : 'Internal note'}
        placeholder={isReply ? 'Write a reply' : 'Add a note for the team'}
        value={draft}
        onChange={(event) => onDraftChange(event.currentTarget.value)}
        classNames={{ input: classes.textarea }}
      />

      <div className={classes.foot}>
        <div className={classes.tools}>
          <Menu position="top-start" width={300}>
            <Menu.Target>
              <Button variant="default" leftSection={<IconBolt size={16} stroke={1.75} />}>
                Saved replies
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Insert a saved reply</Menu.Label>
              {SAVED_REPLIES.map((reply) => (
                <Menu.Item key={reply.title} onClick={() => insertReply(reply.text)}>
                  <b className={classes.replyTitle}>{reply.title}</b>
                  <span className={classes.replyText}>{reply.text.slice(0, 58)}…</span>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
          <ActionIcon aria-label="Attach a file">
            <IconPaperclip size={18} stroke={1.75} />
          </ActionIcon>
        </div>

        {isReply ? (
          <Button.Group>
            <Button size="md" onClick={() => submit(() => onSend('solved'))}>
              <span className={classes.mainLabel}>Send and mark as solved</span>
              <span className={classes.shortLabel}>Send</span>
            </Button>
            <Menu position="top-end">
              <Menu.Target>
                <Button size="md" className={classes.caret} aria-label="More send options">
                  <IconChevronDown size={16} stroke={1.75} />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => submit(() => onSend('open'))}>
                  Send and keep open
                </Menu.Item>
                <Menu.Item onClick={() => submit(() => onSend('pending'))}>
                  Send and wait on customer
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Button.Group>
        ) : (
          <Button
            size="md"
            leftSection={<IconLock size={16} stroke={1.75} />}
            onClick={() => submit(onAddNote)}
          >
            Add note
          </Button>
        )}
      </div>
    </div>
  );
}
