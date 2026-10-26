'use client';

import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Accordion, Button, Paper, Text, TextInput, ThemeIcon, Title } from '@mantine/core';
import { AuthorAvatar } from './AuthorAvatar';
import { ARCHIVE, AUTHORS, PEOPLE, POPULAR } from './data';
import classes from './Sidebar.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const preventDefault = (event: React.MouseEvent) => event.preventDefault();

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = EMAIL_PATTERN.test(email.trim());
    setError(!valid);
    if (!valid) {
      event.currentTarget.querySelector('input')?.focus();
      return;
    }
    setDone(true);
  };

  return (
    <Paper component="section" className={classes.newsletter}>
      <Title order={2} className={classes.blockTitle}>
        One email a month
      </Title>
      <Text size="sm" className={classes.newsletterText}>
        New posts and open-source releases. Nothing else.
      </Text>
      {done ? (
        <div className={classes.done}>
          <ThemeIcon radius="xl" size={26}>
            <IconCheck size={16} stroke={2} />
          </ThemeIcon>
          Subscribed. Check your inbox to confirm.
        </div>
      ) : (
        <form noValidate onSubmit={submit} className={classes.form}>
          <TextInput
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            error={error && 'Enter an email like name@example.com'}
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
    </Paper>
  );
}

export function Sidebar() {
  const [following, setFollowing] = useState<string[]>([]);

  const toggleFollow = (code: string) =>
    setFollowing((current) =>
      current.includes(code) ? current.filter((item) => item !== code) : [...current, code]
    );

  return (
    <aside className={classes.root} aria-label="More from the blog">
      <section>
        <Title order={2} className={classes.blockTitle}>
          Popular this month
        </Title>
        <ol className={classes.popular}>
          {POPULAR.map((item) => (
            <li key={item.title}>
              <a href="#" onClick={preventDefault}>
                {item.title}
              </a>
              <span>{item.reads}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <Title order={2} className={classes.blockTitle}>
          Authors
        </Title>
        <ul className={classes.people}>
          {PEOPLE.map((person) => {
            const active = following.includes(person.code);
            return (
              <li key={person.code} className={classes.person}>
                <AuthorAvatar code={person.code} size={38} />
                <span>
                  <b>{AUTHORS[person.code].name}</b>
                  <span>{person.role}</span>
                </span>
                <Button
                  variant="default"
                  size="xs"
                  aria-pressed={active}
                  onClick={() => toggleFollow(person.code)}
                >
                  {active ? 'Following' : 'Follow'}
                </Button>
              </li>
            );
          })}
        </ul>
      </section>

      <Newsletter />

      <section>
        <Title order={2} className={classes.blockTitle}>
          Archive
        </Title>
        <Accordion multiple defaultValue={['2026']}>
          {ARCHIVE.map((year) => (
            <Accordion.Item key={year.year} value={year.year}>
              <Accordion.Control>
                <span className={classes.yearRow}>
                  {year.year}
                  <span>{year.count} posts</span>
                </span>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className={classes.periods}>
                  {year.periods.map(([label, count]) => (
                    <li key={label}>
                      <a href="#" onClick={preventDefault}>
                        {label} <span>{count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
    </aside>
  );
}
