'use client';

import { useRef, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Button, Checkbox, Paper, Select, Text, TextInput, ThemeIcon, Title } from '@mantine/core';
import { interests, workDays } from './data';
import classes from './Community.module.css';

type InvalidField = 'name' | 'email' | null;

function joinDays(days: string[]) {
  return days.length > 1 ? `${days.slice(0, -1).join(', ')} and ${days[days.length - 1]}` : days[0];
}

export function Volunteer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [days, setDays] = useState(['Saturday']);
  const [interest, setInterest] = useState<string | null>(interests[0]);
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState<InvalidField>(null);
  const [signedUp, setSignedUp] = useState<{ firstName: string; days: string[] } | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const checkedDays = workDays.map((day) => day.value).filter((day) => days.includes(day));

    if (!name.trim()) {
      setError('Enter your name so we know who to expect.');
      setInvalid('name');
      nameRef.current?.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter an email address like name@example.com.');
      setInvalid('email');
      emailRef.current?.focus();
      return;
    }
    if (checkedDays.length === 0) {
      setError('Pick at least one day.');
      setInvalid(null);
      return;
    }

    setError('');
    setInvalid(null);
    setSignedUp({ firstName: name.trim().split(' ')[0], days: checkedDays });
  };

  return (
    <Paper withBorder className={classes.volunteer} aria-labelledby="volunteer-title">
      <Title order={2} id="volunteer-title" className={classes.volunteerTitle}>
        Join a work party
      </Title>
      <p className={classes.lead}>
        No experience needed. We bring tools, gloves and tea; you bring old clothes.
      </p>

      {signedUp ? (
        <div className={classes.done} role="status">
          <ThemeIcon size={32} radius="50%">
            <IconCheck size={18} stroke={2.4} />
          </ThemeIcon>
          <span>
            <b>You’re on the list, {signedUp.firstName}</b>
            <span>
              We’ll email you the meeting point for the next {joinDays(signedUp.days)} work party,
              with a map and what to wear.
            </span>
          </span>
        </div>
      ) : (
        <form className={classes.form} noValidate onSubmit={submit}>
          <div className={classes.formRow}>
            <TextInput
              ref={nameRef}
              label="Name"
              autoComplete="name"
              placeholder="Morag Lennie"
              value={name}
              error={invalid === 'name'}
              onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextInput
              ref={emailRef}
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              error={invalid === 'email'}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </div>

          {error && (
            <Text className={classes.error} role="alert">
              {error}
            </Text>
          )}

          <Checkbox.Group
            label="Which days suit you?"
            value={days}
            onChange={setDays}
            classNames={{ label: classes.groupLabel }}
          >
            <div className={classes.days}>
              {workDays.map((day) => (
                <Checkbox.Card key={day.value} value={day.value}>
                  <Checkbox.Indicator />
                  <span>
                    <b className={classes.dayName}>{day.value}</b>
                    <small className={classes.dayHours}>{day.hours}</small>
                  </span>
                </Checkbox.Card>
              ))}
            </div>
          </Checkbox.Group>

          <Select
            label="What would you like to do?"
            data={interests}
            value={interest}
            onChange={setInterest}
            allowDeselect={false}
          />

          <Button type="submit">Sign me up</Button>
        </form>
      )}
    </Paper>
  );
}
