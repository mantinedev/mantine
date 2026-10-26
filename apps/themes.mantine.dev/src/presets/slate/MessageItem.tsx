import { useState } from 'react';
import { IconMessage2, IconMoodSmile } from '@tabler/icons-react';
import { ActionIcon, Button, Paper, Popover, UnstyledButton } from '@mantine/core';
import { Boards } from './Boards';
import { CallSheet } from './CallSheet';
import { EMOJIS, ME, type Message, PEOPLE, type Scene } from './data';
import { formatText } from './formatText';
import { PersonAvatar } from './PersonAvatar';
import classes from './Message.module.css';

export interface MessageHandlers {
  onToggleReaction: (id: string, index: number) => void;
  onAddReaction: (id: string, emoji: string) => void;
  onOpenThread: (id: string) => void;
  onVote: (id: string, option: number) => void;
  onOpenFile: () => void;
}

interface MessageItemProps extends MessageHandlers {
  message: Message;
  continued?: boolean;
  inThread?: boolean;
  scenes: Scene[];
}

function Poll({ message, onVote }: { message: Message; onVote: MessageHandlers['onVote'] }) {
  if (!message.poll) {
    return null;
  }

  const total = message.poll.options.reduce((sum, option) => sum + option.votes.length, 0);

  return (
    <div className={classes.poll}>
      <div className={classes.pollQuestion}>{message.poll.question}</div>
      {message.poll.options.map((option, index) => {
        const percent = total ? Math.round((option.votes.length / total) * 100) : 0;
        return (
          <UnstyledButton
            key={option.label}
            className={classes.pollOption}
            aria-pressed={option.votes.includes(ME)}
            onClick={() => onVote(message.id, index)}
          >
            <span className={classes.pollFill} style={{ width: `${percent}%` }} />
            <span>{option.label}</span>
            <b>{option.votes.length}</b>
          </UnstyledButton>
        );
      })}
      <div className={classes.pollFoot}>
        {total} {total === 1 ? 'vote' : 'votes'}, closes at 12:00
      </div>
    </div>
  );
}

export function MessageItem({
  message,
  continued,
  inThread,
  scenes,
  onToggleReaction,
  onAddReaction,
  onOpenThread,
  onVote,
  onOpenFile,
}: MessageItemProps) {
  const [emojiOpened, setEmojiOpened] = useState(false);
  const person = PEOPLE[message.who];
  const reactions = message.reactions ?? [];
  const replies = message.replies ?? [];
  const interactive = !!message.id && !inThread;
  const lastReply = replies[replies.length - 1];

  return (
    <div
      className={classes.message}
      data-continued={continued || undefined}
      data-mention={message.mention || undefined}
    >
      <PersonAvatar who={message.who} className={classes.avatar} />
      <div className={classes.content}>
        {!continued && (
          <div className={classes.head}>
            <span className={classes.name}>{person.name}</span>
            {person.app ? (
              <span className={classes.appTag}>App</span>
            ) : (
              <span className={classes.role}>{person.role}</span>
            )}
            <span className={classes.time}>{message.time}</span>
          </div>
        )}
        <div className={classes.body}>
          <p>{formatText(message.text)}</p>
        </div>

        {message.type === 'sheet' && <CallSheet scenes={scenes} />}

        {message.type === 'file' && message.file && (
          <Paper className={classes.file}>
            <span className={classes.doc}>PDF</span>
            <span className={classes.fileText}>
              <span className={classes.fileName}>{message.file.name}</span>
              <span className={classes.fileMeta}>{message.file.meta}</span>
            </span>
            <Button variant="default" onClick={onOpenFile}>
              Open
            </Button>
          </Paper>
        )}

        {message.type === 'boards' && <Boards />}
        {message.type === 'poll' && <Poll message={message} onVote={onVote} />}

        {(reactions.length > 0 || !inThread) && (
          <div className={classes.reactions}>
            {reactions.map((reaction, index) => (
              <UnstyledButton
                key={reaction.emoji}
                className={classes.reaction}
                aria-pressed={reaction.users.includes(ME)}
                title={reaction.users.map((user) => PEOPLE[user].name).join(', ')}
                onClick={() => interactive && onToggleReaction(message.id, index)}
              >
                {reaction.emoji}
                <span>{reaction.users.length}</span>
              </UnstyledButton>
            ))}
            {interactive && (
              <Popover
                opened={emojiOpened}
                onChange={setEmojiOpened}
                position="top-start"
                offset={6}
              >
                <Popover.Target>
                  <ActionIcon
                    radius="xl"
                    className={classes.addReaction}
                    aria-label="Add reaction"
                    onClick={() => setEmojiOpened((opened) => !opened)}
                  >
                    <IconMoodSmile stroke={1.8} />
                  </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown className={classes.emojiGrid}>
                  {EMOJIS.map((emoji) => (
                    <UnstyledButton
                      key={emoji}
                      className={classes.emoji}
                      aria-label={`React ${emoji}`}
                      onClick={() => {
                        onAddReaction(message.id, emoji);
                        setEmojiOpened(false);
                      }}
                    >
                      {emoji}
                    </UnstyledButton>
                  ))}
                </Popover.Dropdown>
              </Popover>
            )}
          </div>
        )}

        {!inThread && lastReply && (
          <UnstyledButton className={classes.threadLink} onClick={() => onOpenThread(message.id)}>
            <PersonAvatar who={lastReply.who} size={20} />
            <b>
              {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
            </b>
            <span>Last reply {lastReply.time}</span>
          </UnstyledButton>
        )}
      </div>

      {interactive && (
        <div className={classes.hoverBar}>
          <ActionIcon
            variant="subtle"
            size={28}
            radius="sm"
            aria-label="React thumbs up"
            onClick={() => onAddReaction(message.id, '👍')}
          >
            👍
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size={28}
            radius="sm"
            aria-label="React clapper"
            onClick={() => onAddReaction(message.id, '🎬')}
          >
            🎬
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size={28}
            radius="sm"
            aria-label="Reply in thread"
            onClick={() => onOpenThread(message.id)}
          >
            <IconMessage2 stroke={1.8} />
          </ActionIcon>
        </div>
      )}
    </div>
  );
}
