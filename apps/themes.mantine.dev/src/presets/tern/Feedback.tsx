'use client';

import { useRef, useState } from 'react';
import { IconCheck, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import { Button, Paper, Textarea } from '@mantine/core';
import classes from './Tern.module.css';

type Choice = 'yes' | 'no' | null;

const ICON_PROPS = { size: 16, stroke: 1.75 };

export function Feedback() {
  const [choice, setChoice] = useState<Choice>(null);
  const [sent, setSent] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const choose = (value: Exclude<Choice, null>) => {
    setChoice(value);
    setSent(false);
    if (value === 'no') {
      window.setTimeout(() => textRef.current?.focus());
    }
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!textRef.current?.value.trim()) {
      textRef.current?.focus();
      return;
    }
    setSent(true);
  };

  const showThanks = choice === 'yes' || sent;

  return (
    <Paper className={classes.feedback}>
      <div className={classes.fbRow}>
        <b>Was this page helpful?</b>
        <div className={classes.fbActions}>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconThumbUp {...ICON_PROPS} />}
            aria-pressed={choice === 'yes'}
            onClick={() => choose('yes')}
          >
            Yes
          </Button>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconThumbDown {...ICON_PROPS} />}
            aria-pressed={choice === 'no'}
            onClick={() => choose('no')}
          >
            No
          </Button>
        </div>
      </div>

      {choice === 'no' && !sent && (
        <form onSubmit={submit}>
          <Textarea
            ref={textRef}
            label="What was missing or wrong?"
            placeholder="For example, an example in Go, or how to read wind direction"
            minRows={3}
            autosize={false}
            resize="vertical"
            classNames={{ input: classes.fbText }}
          />
          <div className={classes.fbFoot}>
            <span>Goes to the docs team. We read every message.</span>
            <Button type="submit" size="xs">
              Send feedback
            </Button>
          </div>
        </form>
      )}

      {showThanks && (
        <div className={classes.fbThanks}>
          <IconCheck size={18} stroke={1.75} className={classes.fbCheck} />
          <span>Thanks, that helps us decide what to improve.</span>
        </div>
      )}
    </Paper>
  );
}
