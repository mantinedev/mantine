'use client';

import { useState } from 'react';
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import { ActionIcon, Anchor, Button, Paper, Text, TextInput, Title } from '@mantine/core';
import { episodes, guests } from './data';
import { PersonAvatar } from './PersonAvatar';
import classes from './NightShift.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = EMAIL_PATTERN.test(email.trim());
    setError(!valid);
    if (valid) {
      setDone(true);
    } else {
      event.currentTarget.querySelector('input')?.focus();
    }
  };

  return (
    <Paper
      component="section"
      id="newsletter"
      className={classes.subscribe}
      aria-labelledby="ns-letter"
    >
      <Title order={3} id="ns-letter">
        A letter after every episode
      </Title>
      <Text size="sm">
        Photos from the night, the bits we cut, and where to find the people we met.
      </Text>
      {done ? (
        <Text className={classes.subscribed}>
          You are on the list. The next letter goes out with episode 49.
        </Text>
      ) : (
        <form className={classes.subscribeForm} onSubmit={submit} noValidate>
          <TextInput
            className={classes.subscribeInput}
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            error={error}
            aria-describedby={error ? 'ns-letter-error' : undefined}
          />
          <Button type="submit">Sign up</Button>
        </form>
      )}
      {error && !done && (
        <Text id="ns-letter-error" className={classes.formError}>
          Enter an email address like name@example.com
        </Text>
      )}
    </Paper>
  );
}

interface SidebarProps {
  onEpisodePlay: (title: string) => void;
}

export function Sidebar({ onEpisodePlay }: SidebarProps) {
  const [pressed, setPressed] = useState<number | null>(null);

  return (
    <aside className={classes.side}>
      <section aria-labelledby="ns-notes">
        <Title order={3} id="ns-notes" className={classes.sectionTitleSmall}>
          Show notes
        </Title>
        <ul className={classes.notes}>
          <li>
            Leith Bakehouse has been on the Shore since 1998. It bakes around 1,400 loaves a night,
            most of them sourdough, for cafés across the north of the city.
          </li>
          <li>
            <Anchor inherit href="#" onClick={preventDefault}>
              Leith Bakehouse
            </Anchor>
            , where you can buy the morning bake from 7:00.
          </li>
          <li>
            <Anchor inherit href="#" onClick={preventDefault}>
              The Real Bread Campaign
            </Anchor>{' '}
            on what makes a loaf “real bread”.
          </li>
          <li>
            <Anchor inherit href="#" onClick={preventDefault}>
              Episode 31: The milk round
            </Anchor>
            , our other episode about feeding a city before breakfast.
          </li>
        </ul>
      </section>

      <section aria-labelledby="ns-guests">
        <Title order={3} id="ns-guests" className={classes.sectionTitleSmall}>
          On this episode
        </Title>
        <div className={classes.guests}>
          {guests.map((guest) => (
            <Paper key={guest.person.initials} className={classes.guest}>
              <PersonAvatar person={guest.person} size={52} className={classes.guestAvatar} />
              <b>{guest.person.name}</b>
              <Text size="sm">{guest.role}</Text>
              <Anchor href="#" size="sm" fw={600} onClick={preventDefault}>
                {guest.link}
              </Anchor>
            </Paper>
          ))}
        </div>
      </section>

      <section aria-labelledby="ns-more">
        <Title order={3} id="ns-more" className={classes.sectionTitleSmall}>
          More episodes
        </Title>
        <ul className={classes.episodes}>
          {episodes.map((episode) => {
            const active = pressed === episode.number;
            return (
              <li key={episode.number} className={classes.episode}>
                <span className={classes.episodeNumber}>{episode.number}</span>
                <a href="#" className={classes.episodeLink} onClick={preventDefault}>
                  {episode.title}
                </a>
                <span className={classes.episodeMeta}>{episode.meta}</span>
                <ActionIcon
                  variant={active ? 'filled' : 'default'}
                  radius="50%"
                  size={36}
                  className={classes.episodePlay}
                  aria-pressed={active}
                  aria-label={`Play episode ${episode.number}`}
                  onClick={() => {
                    setPressed(active ? null : episode.number);
                    if (!active) {
                      onEpisodePlay(episode.title);
                    }
                  }}
                >
                  {active ? (
                    <IconPlayerPauseFilled size={14} />
                  ) : (
                    <IconPlayerPlayFilled size={14} />
                  )}
                </ActionIcon>
              </li>
            );
          })}
        </ul>
      </section>

      <Newsletter />
    </aside>
  );
}
