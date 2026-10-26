import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Button, Text, TextInput, Title } from '@mantine/core';
import classes from './Fieldwork.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = EMAIL_PATTERN.test(email.trim());
    setInvalid(!ok);
    if (ok) {
      setDone(true);
    } else {
      event.currentTarget.querySelector('input')?.focus();
    }
  };

  return (
    <section className={`${classes.news} ${classes.wrap}`} aria-labelledby="fw-news-title">
      <div>
        <Title order={2} id="fw-news-title" className={classes.newsTitle}>
          Hear about the next 16 speakers first
        </Title>
        <Text className={classes.newsLead}>
          Three emails before May: the full line-up, the workshop sign-up and travel tips. Nothing
          else.
        </Text>
      </div>
      {done ? (
        <div className={classes.newsDone}>
          <IconCheck size={20} stroke={1.9} />
          You’re on the list. First email in February.
        </div>
      ) : (
        <form className={classes.newsForm} noValidate onSubmit={submit}>
          <div className={classes.newsRow}>
            <TextInput
              type="email"
              placeholder="you@council.gov.uk"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              aria-invalid={invalid}
              aria-describedby={invalid ? 'fw-news-error' : undefined}
              className={classes.newsField}
              classNames={{ input: classes.newsInput }}
            />
            <Button type="submit" className={classes.newsButton}>
              Keep me posted
            </Button>
          </div>
          {invalid && (
            <span className={classes.newsError} id="fw-news-error">
              Enter an email address like name@example.org
            </span>
          )}
        </form>
      )}
    </section>
  );
}
