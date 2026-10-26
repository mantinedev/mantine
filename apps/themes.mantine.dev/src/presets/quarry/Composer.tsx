'use client';

import type { RefObject } from 'react';
import { IconArrowUp, IconPlayerStop } from '@tabler/icons-react';
import { Button, Textarea } from '@mantine/core';
import { suggestions } from './data';
import classes from './Composer.module.css';

interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  busy: boolean;
  onAsk: (question: string) => void;
  onStop: () => void;
  inputRef: RefObject<HTMLTextAreaElement | null>;
}

export function Composer({ value, onChange, busy, onAsk, onStop, inputRef }: ComposerProps) {
  const submit = () => {
    if (busy) {
      onStop();
      return;
    }
    const question = value.trim();
    if (!question) {
      inputRef.current?.focus();
      return;
    }
    onChange('');
    onAsk(question);
  };

  return (
    <div className={classes.root}>
      <div className={classes.suggestions}>
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="default"
            radius="xl"
            className={classes.suggestion}
            onClick={() => onAsk(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
      <form
        className={classes.composer}
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <Textarea
          ref={inputRef}
          variant="unstyled"
          autosize
          minRows={1}
          maxRows={5}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Ask about orders, customers, refills or subscriptions"
          aria-label="Ask a question"
          className={classes.field}
          classNames={{ input: classes.input }}
        />
        <Button
          type="submit"
          variant={busy ? 'default' : 'filled'}
          leftSection={busy ? <IconPlayerStop /> : <IconArrowUp />}
        >
          {busy ? 'Stop' : 'Ask'}
        </Button>
      </form>
      <div className={classes.hint}>
        <span>Quarry only reads data. It can’t change anything in the warehouse.</span>
        <span>Enter to send</span>
      </div>
    </div>
  );
}
