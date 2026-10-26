'use client';

import { IconCheck, IconMinus, IconPlus } from '@tabler/icons-react';
import { Button, Chip, Group, Input, NumberInput, UnstyledButton } from '@mantine/core';
import { type Conversation, COUNTER_PRESETS, money } from './data';
import classes from './Thread.module.css';

export interface CounterState {
  opened: boolean;
  value: number | '';
  error: string;
}

export interface OfferActions {
  onAccept: () => void;
  onDecline: () => void;
  onCounterOpen: () => void;
  onCounterCancel: () => void;
  onCounterChange: (value: number | '') => void;
  onCounterSend: () => void;
}

interface CounterFormProps {
  counter: CounterState;
  actions: OfferActions;
}

function CounterForm({ counter, actions }: CounterFormProps) {
  return (
    <div className={classes.counter}>
      <NumberInput
        label="Your counter-offer"
        value={counter.value}
        onChange={(value) => actions.onCounterChange(typeof value === 'number' ? value : '')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            actions.onCounterSend();
          }
        }}
        autoFocus
        hideControls
        allowDecimal={false}
        allowNegative={false}
        leftSection="£"
        leftSectionWidth={28}
        rightSectionWidth={73}
        rightSectionPointerEvents="all"
        rightSection={
          <span className={classes.steppers}>
            <UnstyledButton
              aria-label="Lower by £5"
              onClick={() => actions.onCounterChange(Math.max(1, Number(counter.value) - 5))}
            >
              <IconMinus size={16} stroke={2} />
            </UnstyledButton>
            <UnstyledButton
              aria-label="Raise by £5"
              onClick={() => actions.onCounterChange(Number(counter.value) + 5)}
            >
              <IconPlus size={16} stroke={2} />
            </UnstyledButton>
          </span>
        }
        aria-describedby={counter.error ? 'counter-error' : undefined}
        aria-invalid={!!counter.error}
        classNames={{
          label: classes.counterLabel,
          input: classes.money,
          section: classes.moneySection,
        }}
      />
      <Chip.Group
        value={String(counter.value)}
        onChange={(value) => actions.onCounterChange(Number(value))}
      >
        <Group gap="xs">
          {COUNTER_PRESETS.map((value) => (
            <Chip key={value} value={String(value)}>
              {money(value)}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
      {counter.error && (
        <Input.Error id="counter-error" className={classes.fieldError}>
          {counter.error}
        </Input.Error>
      )}
      <Group gap="xs">
        <Button size="xs" onClick={actions.onCounterSend}>
          Send {money(Number(counter.value))} counter
        </Button>
        <Button size="xs" variant="default" onClick={actions.onCounterCancel}>
          Cancel
        </Button>
      </Group>
    </div>
  );
}

interface OfferBubbleProps {
  conversation: Conversation;
  index: number;
  note: string;
  time: string;
  counter: CounterState;
  actions: OfferActions;
}

export function OfferBubble({
  conversation,
  index,
  note,
  time,
  counter,
  actions,
}: OfferBubbleProps) {
  const offer = conversation.offers[index];
  const mine = offer.by === 'me';
  const seller = conversation.role === 'selling';
  const canAct = !mine && offer.state === 'open' && !conversation.sold && !conversation.blocked;

  const heading = mine
    ? seller
      ? 'Your counter-offer'
      : 'Your offer'
    : seller
      ? `${conversation.name} offered`
      : `${conversation.name} countered`;

  const stateLabel =
    offer.state === 'agreed'
      ? 'Accepted'
      : offer.state === 'declined'
        ? 'Declined'
        : offer.state === 'superseded'
          ? 'Countered'
          : mine
            ? `Waiting for ${conversation.name}`
            : 'Open';

  let bottom: React.ReactNode;
  if (canAct && counter.opened) {
    bottom = <CounterForm counter={counter} actions={actions} />;
  } else if (canAct) {
    bottom = (
      <div className={classes.offerActions}>
        <Button
          size="xs"
          color="green"
          leftSection={<IconCheck size={18} stroke={1.7} />}
          onClick={actions.onAccept}
          className={classes.agree}
        >
          Accept {money(offer.amount)}
        </Button>
        <Button size="xs" variant="default" onClick={actions.onCounterOpen}>
          Counter
        </Button>
        <Button size="xs" variant="default" onClick={actions.onDecline}>
          Decline
        </Button>
      </div>
    );
  } else {
    bottom = <div className={classes.offerState}>{stateLabel}</div>;
  }

  return (
    <div className={classes.message} data-from={mine ? 'me' : 'them'}>
      <div className={classes.offer}>
        <div className={classes.offerTop}>
          <span>{heading}</span>
          <b>{money(offer.amount)}</b>
        </div>
        {note && <div className={classes.offerNote}>{note}</div>}
        {bottom}
      </div>
      <span className={classes.meta}>{time}</span>
    </div>
  );
}
