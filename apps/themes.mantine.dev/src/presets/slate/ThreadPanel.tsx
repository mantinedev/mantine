import { useState } from 'react';
import { IconSend, IconX } from '@tabler/icons-react';
import { ActionIcon, Button, ScrollArea, Textarea } from '@mantine/core';
import type { Message, Scene } from './data';
import { MessageItem, type MessageHandlers } from './MessageItem';
import composerClasses from './Composer.module.css';
import classes from './Slate.module.css';

interface ThreadPanelProps extends MessageHandlers {
  message: Message;
  channelLabel: string;
  scenes: Scene[];
  onClose: () => void;
  onReply: (text: string) => void;
}

export function ThreadPanel({
  message,
  channelLabel,
  scenes,
  onClose,
  onReply,
  ...handlers
}: ThreadPanelProps) {
  const [value, setValue] = useState('');
  const replies = message.replies ?? [];

  const reply = () => {
    const text = value.trim();
    if (text) {
      onReply(text);
      setValue('');
    }
  };

  return (
    <aside className={classes.thread} aria-label="Thread">
      <div className={classes.threadHead}>
        <div>
          <b>Thread</b>
          <span>{channelLabel}</span>
        </div>
        <ActionIcon variant="subtle" aria-label="Close thread" onClick={onClose}>
          <IconX stroke={1.8} />
        </ActionIcon>
      </div>
      <ScrollArea className={classes.threadFeed} type="hover">
        <div className={classes.threadList}>
          <MessageItem message={message} inThread scenes={scenes} {...handlers} />
          <div className={classes.replyCount}>{replies.length} replies</div>
          {replies.map((item, index) => (
            <MessageItem
              key={`${item.who}-${item.time}-${index}`}
              message={{ kind: 'message', id: '', who: item.who, time: item.time, text: item.text }}
              continued={index > 0 && replies[index - 1].who === item.who}
              inThread
              scenes={scenes}
              {...handlers}
            />
          ))}
        </div>
      </ScrollArea>
      <div className={`${composerClasses.wrap} ${classes.threadComposer}`}>
        <div className={composerClasses.composer}>
          <Textarea
            variant="unstyled"
            autosize
            minRows={1}
            maxRows={5}
            placeholder="Reply in thread"
            aria-label="Reply"
            value={value}
            classNames={{ input: composerClasses.textarea }}
            onChange={(event) => setValue(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                reply();
              }
            }}
          />
          <div className={composerClasses.foot}>
            <span />
            <Button leftSection={<IconSend stroke={1.8} />} onClick={reply}>
              Reply
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
