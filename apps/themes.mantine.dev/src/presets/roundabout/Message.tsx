import { Avatar } from '@mantine/core';
import { getPerson, type PersonId } from './data';
import classes from './Chat.module.css';

interface MessageProps {
  from: PersonId;
  time: string;
  wide?: boolean;
  children: React.ReactNode;
}

export function Message({ from, time, wide, children }: MessageProps) {
  const person = getPerson(from);
  return (
    <div className={classes.message}>
      <Avatar color={person.tone} className={classes.messageAvatar} title={person.name}>
        {person.short}
      </Avatar>
      <div className={wide ? classes.messageBodyWide : undefined}>
        <div className={classes.who}>
          {person.name} <time>{time}</time>
        </div>
        {children}
      </div>
    </div>
  );
}

interface OwnMessageProps {
  meta: string;
  children: React.ReactNode;
}

export function OwnMessage({ meta, children }: OwnMessageProps) {
  return (
    <div className={classes.own}>
      <div>
        {children}
        <div className={classes.ownMeta}>{meta}</div>
      </div>
    </div>
  );
}

interface BubbleProps {
  quote?: { author: string; text: string };
  className?: string;
  children: React.ReactNode;
}

export function Bubble({ quote, className, children }: BubbleProps) {
  return (
    <div className={`${classes.bubble} ${className ?? ''}`}>
      {quote && (
        <div className={classes.quote}>
          <b>{quote.author}</b>
          {quote.text}
        </div>
      )}
      {children}
    </div>
  );
}
