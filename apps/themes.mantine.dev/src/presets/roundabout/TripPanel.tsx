'use client';

import { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { ActionIcon, Avatar, Button, Checkbox, Text, TextInput, Title } from '@mantine/core';
import {
  type Availability,
  CREDITS,
  getPerson,
  PACKING,
  type PackItem,
  type PersonId,
  PHOTOS,
  type PollOption,
} from './data';
import {
  formatAmount,
  getBestRun,
  getCounts,
  getDaysToGo,
  getDebts,
  getRunRange,
  getTotalSpent,
  type Settlement,
} from './trip';
import classes from './TripPanel.module.css';

interface TripPanelProps {
  className?: string;
  availability: Availability;
  poll: PollOption[];
  settlements: Settlement[];
  onClose: () => void;
}

function PersonAvatar({ id }: { id: PersonId }) {
  const person = getPerson(id);
  return (
    <Avatar size="sm" color={person.tone} title={person.name}>
      {person.short}
    </Avatar>
  );
}

export function TripPanel({ className, availability, poll, settlements, onClose }: TripPanelProps) {
  const [packing, setPacking] = useState<PackItem[]>(PACKING);
  const [newItem, setNewItem] = useState('');

  const run = getBestRun(getCounts(availability));
  const lead = [...poll].sort((a, b) => b.voters.length - a.voters.length)[0];
  const debts = getDebts(settlements);

  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const label = newItem.trim();
    if (!label) {
      event.currentTarget.querySelector('input')?.focus();
      return;
    }
    setPacking((current) => [...current, { id: Date.now(), label, who: 'sam', done: false }]);
    setNewItem('');
  };

  return (
    <aside className={`${classes.root} ${className ?? ''}`} aria-label="Trip">
      <div className={classes.head}>
        <Title order={2}>Trip</Title>
        <ActionIcon aria-label="Close trip panel" onClick={onClose}>
          <IconX size={20} stroke={1.8} />
        </ActionIcon>
      </div>

      <section className={classes.section}>
        <div className={classes.countdown}>
          <img src={PHOTOS.above} alt="" />
          {run && (
            <>
              <div className={classes.big}>
                {getDaysToGo(run)}
                <small>days to go</small>
              </div>
              <div className={classes.range}>{getRunRange(run)}</div>
            </>
          )}
        </div>
        <div className={classes.facts}>
          <div className={classes.fact}>
            <span>Cabin</span>
            <b>{lead.voters.length ? lead.short : 'Not chosen'}</b>
          </div>
          <div className={classes.fact}>
            <span>Travel</span>
            <b>Ferry from Bodø</b>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <Title order={3} className={classes.sectionTitle}>
          Packing
          <span>
            {packing.filter((item) => item.done).length} of {packing.length}
          </span>
        </Title>
        <ul className={classes.pack}>
          {packing.map((item) => (
            <li key={item.id}>
              <Checkbox
                className={item.done ? `${classes.packItem} ${classes.done}` : classes.packItem}
                classNames={{
                  body: classes.packBody,
                  labelWrapper: classes.packLabelWrapper,
                  label: classes.packLabel,
                }}
                checked={item.done}
                onChange={(event) => {
                  const checked = event.currentTarget.checked;
                  setPacking((current) =>
                    current.map((entry) =>
                      entry.id === item.id ? { ...entry, done: checked } : entry
                    )
                  );
                }}
                label={
                  <>
                    <span className={classes.packText}>{item.label}</span>
                    <PersonAvatar id={item.who} />
                  </>
                }
              />
            </li>
          ))}
        </ul>
        <form className={classes.addRow} onSubmit={addItem}>
          <TextInput
            size="xs"
            className={classes.addInput}
            placeholder="Add an item"
            aria-label="Add a packing item"
            value={newItem}
            onChange={(event) => setNewItem(event.currentTarget.value)}
          />
          <Button type="submit" variant="default" size="xs" h={34}>
            Add
          </Button>
        </form>
      </section>

      <section className={classes.section}>
        <Title order={3} className={classes.sectionTitle}>
          Who owes whom
        </Title>
        <div className={classes.spent}>
          <span>Spent so far</span>
          <b>NOK {formatAmount(getTotalSpent())}</b>
        </div>
        <ul className={classes.owes}>
          {debts.length === 0 && <li className={classes.square}>Everyone is square.</li>}
          {debts.map((debt) => (
            <li key={`${debt.from}-${debt.to}`}>
              <PersonAvatar id={debt.from} />
              <span className={classes.arrow} aria-hidden="true" />
              <PersonAvatar id={debt.to} />
              <span className={debt.from === 'sam' ? classes.me : undefined}>
                {debt.from === 'sam'
                  ? `You owe ${getPerson(debt.to).name}`
                  : `${getPerson(debt.from).name} owes ${debt.to === 'sam' ? 'you' : getPerson(debt.to).name}`}
              </span>
              <span className={classes.amount}>{formatAmount(debt.amount)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.section}>
        <Text size="xs">{CREDITS}</Text>
      </section>
    </aside>
  );
}
