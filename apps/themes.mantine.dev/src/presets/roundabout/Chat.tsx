'use client';

import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  IconFerry,
  IconHeart,
  IconLayoutSidebarRight,
  IconLink,
  IconMapPin,
  IconMenu2,
  IconMoodSmile,
  IconSearch,
  IconSnowflake,
} from '@tabler/icons-react';
import { ActionIcon, Avatar, Badge, Button, Card, Image, Text, Title } from '@mantine/core';
import { type AttachKind, Composer } from './Composer';
import { type Availability, PEOPLE, PHOTOS, type PollOption } from './data';
import { DatesGrid } from './DatesGrid';
import { HamnoyMap } from './HamnoyMap';
import { Bubble, Message, OwnMessage } from './Message';
import { PollCard } from './PollCard';
import { Reactions } from './Reactions';
import { formatAmount, getBestRun, getCounts, getRunLabel } from './trip';
import { VoiceNote } from './VoiceNote';
import classes from './Chat.module.css';

export interface ChatHandle {
  jumpTo: (target: 'poll' | 'dates') => void;
}

type Extra =
  | { id: number; kind: 'system'; label: string; need: number }
  | { id: number; kind: 'text'; text: string; time: string }
  | { id: number; kind: 'photo'; time: string }
  | { id: number; kind: 'place'; time: string };

type WithoutId<T> = T extends unknown ? Omit<T, 'id'> : never;

interface ChatProps {
  ref: React.Ref<ChatHandle>;
  className?: string;
  availability: Availability;
  onAvailabilityChange: (availability: Availability) => void;
  poll: PollOption[];
  myVote: string | null;
  onVote: (id: string) => void;
  onSettle: () => number | null;
  onAttach: (kind: AttachKind) => void;
  panelPressed: boolean;
  onTogglePanel: () => void;
  onShowGroups: () => void;
}

function now() {
  const date = new Date();
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function flash(element: HTMLElement | null) {
  if (!element) {
    return;
  }
  element.removeAttribute('data-flash');
  void element.offsetWidth;
  element.setAttribute('data-flash', '');
}

export function Chat({
  ref,
  className,
  availability,
  onAvailabilityChange,
  poll,
  myVote,
  onVote,
  onSettle,
  onAttach,
  panelPressed,
  onTogglePanel,
  onShowGroups,
}: ChatProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<HTMLDivElement>(null);
  const datesRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const [extras, setExtras] = useState<Extra[]>([]);
  const [settledAmount, setSettledAmount] = useState<number | null>(null);

  const counts = getCounts(availability);
  const run = getBestRun(counts);

  useImperativeHandle(ref, () => ({
    jumpTo: (target) => {
      const element = target === 'poll' ? pollRef.current : datesRef.current;
      const messages = messagesRef.current;
      if (element && messages) {
        const top =
          element.getBoundingClientRect().top -
          messages.getBoundingClientRect().top +
          messages.scrollTop -
          (messages.clientHeight - element.offsetHeight) / 2;
        messages.scrollTo({
          top,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        });
      }
      flash(element?.querySelector<HTMLElement>('[data-card]') ?? null);
    },
  }));

  useEffect(() => {
    const messages = messagesRef.current;
    if (!messages) {
      return undefined;
    }
    const scrollToEnd = () => {
      messages.scrollTop = messages.scrollHeight;
    };
    scrollToEnd();
    let cancelled = false;
    document.fonts.ready.then(() => !cancelled && scrollToEnd());
    return () => {
      cancelled = true;
    };
  }, [extras.length]);

  const addExtra = (extra: WithoutId<Extra>) => {
    const id = nextId.current;
    nextId.current += 1;
    setExtras((current) => [...current, { ...extra, id } as Extra]);
  };

  const toggleDay = (index: number) => {
    const next = {
      ...availability,
      sam: availability.sam.map((value, i) => (i === index ? 1 - value : value)),
    };
    onAvailabilityChange(next);
    const nextRun = getBestRun(getCounts(next));
    const key = (value: typeof run) =>
      value ? `${value.start}-${value.length}-${value.need}` : '';
    if (nextRun && key(nextRun) !== key(run)) {
      addExtra({ kind: 'system', label: getRunLabel(nextRun), need: nextRun.need });
      flash(pillRef.current);
    }
  };

  const handleAttach = (kind: AttachKind) => {
    if (kind === 'photo') {
      addExtra({ kind: 'photo', time: now() });
    } else if (kind === 'place') {
      addExtra({ kind: 'place', time: now() });
    } else {
      onAttach(kind);
    }
  };

  const settle = () => {
    const amount = onSettle();
    if (amount !== null) {
      setSettledAmount(amount);
    }
  };

  return (
    <main className={`${classes.root} ${className ?? ''}`} aria-label="Lofoten, March">
      <header className={classes.header}>
        <ActionIcon className={classes.menuButton} aria-label="Show groups" onClick={onShowGroups}>
          <IconMenu2 size={20} stroke={1.8} />
        </ActionIcon>
        <Avatar src={PHOTOS.aurora} alt="" size={40} radius={12} />
        <div className={classes.title}>
          <b>Lofoten, March</b>
          <span>
            <span className={classes.members}>
              {PEOPLE.slice(1).map((person) => (
                <Avatar key={person.id} size="xs" color={person.tone} title={person.name}>
                  {person.short}
                </Avatar>
              ))}
            </span>
            6 friends
          </span>
        </div>
        <ActionIcon aria-label="Search in chat">
          <IconSearch size={20} stroke={1.8} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          aria-label="Trip panel"
          aria-pressed={panelPressed}
          onClick={onTogglePanel}
        >
          <IconLayoutSidebarRight size={20} stroke={1.8} />
        </ActionIcon>
      </header>

      <div className={classes.messages} ref={messagesRef} aria-live="polite">
        <span className={classes.day}>Friday 19 February</span>

        <Message from="ingrid" time="18:02">
          <Bubble>
            Okay, it’s happening. I booked the ferry from Bodø for all six of us. Some inspiration
            while we sort the rest:
          </Bubble>
          <div className={classes.photos} style={{ marginTop: 6 }}>
            <img
              src={PHOTOS.reine}
              alt="Reine at dawn, snowy peaks lit pink above red fishing cabins"
            />
            <img src={PHOTOS.sakrisoy} alt="Yellow cabins at Sakrisøy over clear green water" />
            <img src={PHOTOS.aurora} alt="Northern lights over a mountain reflected in a fjord" />
          </div>
          <Reactions
            initial={[
              {
                label: 'Heart',
                icon: <IconHeart size={14} stroke={1.8} />,
                count: 4,
                pressed: true,
              },
              {
                label: 'Snowflake',
                icon: <IconSnowflake size={14} stroke={1.8} />,
                count: 2,
                pressed: false,
              },
            ]}
          />
        </Message>

        <Message from="tomas" time="18:20">
          <Card className={classes.card} padding={0}>
            <Image
              src={PHOTOS.cabin}
              alt="Red rorbu cabins on stilts by a snowy harbour"
              h={150}
              radius={0}
            />
            <div className={classes.cardPad}>
              <div className={classes.host}>
                <IconLink size={14} stroke={1.8} />
                harbourcabins.example
              </div>
              <Title order={4} mt={4}>
                Rorbu on the harbour, Svolvær
              </Title>
              <Text size="sm" mt={2}>
                A fisherman’s cabin on stilts with a wood sauna and a view of the boats.
              </Text>
              <div className={classes.chips}>
                <Badge variant="default">4 bedrooms</Badge>
                <Badge variant="default">Sleeps 6</Badge>
                <Badge variant="default">NOK 2,350 a night</Badge>
              </div>
            </div>
          </Card>
        </Message>

        <div ref={pollRef}>
          <Message from="mira" time="18:31">
            <PollCard poll={poll} myVote={myVote} onVote={onVote} />
          </Message>
        </div>

        <Message from="tomas" time="18:34">
          <Bubble quote={{ author: 'Mira', text: 'Which cabin?' }}>
            The Svolvær one has a sauna and it’s a short walk to the ferry. I rest my case.
          </Bubble>
          <Reactions
            initial={[
              {
                label: 'Smile',
                icon: <IconMoodSmile size={14} stroke={1.8} />,
                count: 3,
                pressed: false,
              },
            ]}
          />
        </Message>

        <span className={classes.day}>Today</span>

        <div ref={datesRef}>
          <Message from="mira" time="09:12" wide>
            <DatesGrid
              availability={availability}
              counts={counts}
              run={run}
              pillRef={pillRef}
              onToggleDay={toggleDay}
            />
          </Message>
        </div>

        <Message from="lars" time="09:40">
          <VoiceNote />
        </Message>

        <Message from="ingrid" time="10:05">
          <Card className={classes.card} padding={0}>
            <div className={`${classes.cardPad} ${classes.expense}`}>
              <span className={classes.expenseIcon}>
                <IconFerry size={20} stroke={1.8} />
              </span>
              <Title order={4}>Ferry, Bodø to Moskenes</Title>
              <span className={classes.amount}>
                NOK 4,800<small>paid by Ingrid</small>
              </span>
              <Text size="sm">Split six ways, NOK 800 each</Text>
            </div>
            <div className={classes.cardFoot}>
              <span>
                {settledAmount === null
                  ? 'Added to the trip split'
                  : `You paid Ingrid NOK ${formatAmount(settledAmount)}`}
              </span>
              <Button
                variant="default"
                size="xs"
                disabled={settledAmount !== null}
                onClick={settle}
              >
                {settledAmount === null ? 'Settle my share' : 'Settled'}
              </Button>
            </div>
          </Card>
        </Message>

        <Message from="lars" time="10:12">
          <Card className={classes.card} padding={0}>
            <HamnoyMap />
            <div className={`${classes.cardPad} ${classes.pinLabel}`}>
              <div>
                <Title order={4}>Hamnøy bridge</Title>
                <Text size="sm" mt={2}>
                  Best photo spot for the red cabins at sunrise
                </Text>
              </div>
              <Button
                variant="default"
                size="xs"
                className={classes.noShrink}
                leftSection={<IconMapPin size={17} stroke={1.8} />}
              >
                Directions
              </Button>
            </div>
          </Card>
        </Message>

        <OwnMessage meta="10:20, seen by 5">
          <Bubble quote={{ author: 'Lars', text: 'Hamnøy bridge' }}>
            Adding it to the list. I’ll drive us there on the first morning if the road is clear.
          </Bubble>
        </OwnMessage>

        {extras.map((extra) => {
          if (extra.kind === 'system') {
            return (
              <div key={extra.id} className={classes.system}>
                You updated your days. Best stretch is now <b>{extra.label}</b>
                {extra.need === PEOPLE.length ? ', everyone free.' : `, ${extra.need} of 6 free.`}
              </div>
            );
          }
          return (
            <OwnMessage key={extra.id} meta={`${extra.time}, sent`}>
              {extra.kind === 'text' && <Bubble>{extra.text}</Bubble>}
              {extra.kind === 'photo' && (
                <div className={classes.singlePhoto}>
                  <img src={PHOTOS.sakrisoy} alt="Yellow cabins at Sakrisøy" />
                </div>
              )}
              {extra.kind === 'place' && (
                <Bubble>
                  <b>Pinned: Reinebringen trailhead</b>
                  <br />
                  Steep stairs, 1.5 hours up. Only if it’s not icy.
                </Bubble>
              )}
            </OwnMessage>
          );
        })}
      </div>

      <Composer
        onSend={(text) => addExtra({ kind: 'text', text, time: now() })}
        onAttach={handleAttach}
      />
    </main>
  );
}
