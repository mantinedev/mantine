'use client';

import { useRef, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Button, TextInput, ThemeIcon, Title } from '@mantine/core';
import classes from './Newsletter.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = EMAIL_PATTERN.test(email.trim());
    setInvalid(!valid);
    if (!valid) {
      inputRef.current?.focus();
      return;
    }
    setSubscribed(true);
  };

  return (
    <section className={classes.root} id="newsletter" aria-labelledby="lt-newsletter-title">
      <div>
        <Title order={2} id="lt-newsletter-title" className={classes.title}>
          The tide table, in your inbox
        </Title>
        <p className={classes.description}>
          One email on the first Sunday of each month: the best low tides for rock-pooling around
          Britain, and one long read from the magazine.
        </p>
      </div>

      {subscribed ? (
        <div className={classes.done} role="status">
          <ThemeIcon radius="xl" size={28} className={classes.doneIcon}>
            <IconCheck size={18} stroke={1.75} />
          </ThemeIcon>
          Subscribed. Check your inbox to confirm.
        </div>
      ) : (
        <form className={classes.form} onSubmit={submit} noValidate>
          <div className={classes.row}>
            <TextInput
              ref={inputRef}
              size="md"
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              aria-invalid={invalid}
              error={invalid}
              className={classes.field}
              classNames={{ input: classes.input }}
            />
            <Button type="submit" size="md" className={classes.submit}>
              Subscribe
            </Button>
          </div>
          {invalid && (
            <span className={classes.error}>Enter an email address like name@example.com</span>
          )}
          <span className={classes.note}>Free. Unsubscribe from any email.</span>
        </form>
      )}
    </section>
  );
}
