'use client';

import { useEffect, useRef, useState } from 'react';
import {
  IconArrowRight,
  IconCopy,
  IconLeaf,
  IconPlayerStopFilled,
  IconRotateClockwise,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Checkbox,
  Chip,
  Group,
  Loader,
  SegmentedControl,
  Slider,
  Textarea,
  ThemeIcon,
} from '@mantine/core';
import {
  CARE_OPTIONS,
  FALLBACK_REPLY,
  REPLIES,
  type Reply,
  SOILS,
  SUGGESTIONS,
  sunLabel,
} from './data';
import classes from './Chat.module.css';

interface Change {
  sign: '+' | '−';
  count: number;
  label: string;
}

const V2_CHANGES: Change[] = [
  { sign: '+', count: 3, label: 'Common foxglove' },
  { sign: '+', count: 2, label: 'Japanese anemone' },
  { sign: '+', count: 1, label: 'Log pile and a shallow bird bath' },
  { sign: '−', count: 1, label: 'Lacecap hydrangea' },
  { sign: '−', count: 1, label: 'Hosta, moved out of the anemones’ way' },
];

const V3_CHANGES: Change[] = [
  { sign: '+', count: 1, label: 'Guelder rose' },
  { sign: '−', count: 1, label: 'Lacecap hydrangea' },
];

type MessageStatus = 'thinking' | 'streaming' | 'done' | 'stopped';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  status?: MessageStatus;
  label?: string;
  changes?: Change[];
}

function ChangeCard({
  title,
  changes,
  onCompare,
}: {
  title: string;
  changes: Change[];
  onCompare: () => void;
}) {
  return (
    <div className={classes.changeCard}>
      <div className={classes.changeHead}>
        <span>{title}</span>
        <Button variant="default" size="xs" onClick={onCompare}>
          Compare
        </Button>
      </div>
      <ul className={classes.changeList}>
        {changes.map((change) => (
          <li key={change.label} data-sign={change.sign === '+' ? 'add' : 'remove'}>
            <b>
              {change.sign}
              {change.count}
            </b>
            {change.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssistantMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.assistant}>
      <ThemeIcon size={28}>
        <IconLeaf size={16} stroke={1.8} />
      </ThemeIcon>
      <div className={classes.assistantBody}>
        <div className={classes.assistantName}>Understory</div>
        {children}
      </div>
    </div>
  );
}

function AskCard({
  pets,
  onPetsChange,
  onApply,
}: {
  pets: boolean;
  onPetsChange: (pets: boolean) => void;
  onApply: () => void;
}) {
  const [sun, setSun] = useState(2);
  const [soil, setSoil] = useState('Clay');
  const [care, setCare] = useState('Weekends');

  return (
    <div className={classes.askCard}>
      <div>
        <div className={classes.askLabel}>
          Direct sun in summer <span>{sunLabel(sun)}</span>
        </div>
        <Slider
          min={0}
          max={8}
          step={1}
          value={sun}
          onChange={setSun}
          thumbLabel="Hours of direct sun"
        />
      </div>
      <div>
        <div className={classes.askLabel} id="understory-soil">
          Soil
        </div>
        <Chip.Group value={soil} onChange={(value) => setSoil(value as string)}>
          <Group gap={6} role="radiogroup" aria-labelledby="understory-soil">
            {SOILS.map((item) => (
              <Chip key={item} value={item} type="radio">
                {item}
              </Chip>
            ))}
          </Group>
        </Chip.Group>
      </div>
      <div>
        <div className={classes.askLabel}>Time you’ll spend on it</div>
        <SegmentedControl
          aria-label="Maintenance"
          data={CARE_OPTIONS}
          value={care}
          onChange={setCare}
          className={classes.care}
        />
      </div>
      <Checkbox
        label="We have a dog"
        checked={pets}
        onChange={(event) => onPetsChange(event.currentTarget.checked)}
      />
      <div>
        <Button size="xs" onClick={onApply}>
          Update the plan
        </Button>
      </div>
    </div>
  );
}

interface ChatProps {
  className?: string;
  pets: boolean;
  onPetsChange: (pets: boolean) => void;
  onCompare: () => void;
  onAddVersion: () => boolean;
  onToast: (message: string) => void;
}

export function Chat({
  className,
  pets,
  onPetsChange,
  onCompare,
  onAddVersion,
  onToast,
}: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState('');
  const [streaming, setStreaming] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const interval = useRef<number>(undefined);
  const finishRef = useRef<(stopped: boolean) => void>(() => {});

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) {
      thread.scrollTop = thread.scrollHeight;
    }
  }, [messages]);

  useEffect(() => () => window.clearInterval(interval.current), []);

  const updateMessage = (id: number, patch: Partial<Message>) =>
    setMessages((current) =>
      current.map((message) => (message.id === id ? { ...message, ...patch } : message))
    );

  const send = () => {
    const text = prompt.trim();
    if (!text || streaming) {
      return;
    }

    const reply: Reply = REPLIES.find((item) => item.match?.test(text)) || FALLBACK_REPLY;
    const id = Date.now();
    const words = reply.text.split(' ');
    let index = 0;

    setPrompt('');
    setStreaming(true);
    setMessages((current) => [
      ...current,
      { id: id - 1, role: 'user', text },
      {
        id,
        role: 'assistant',
        text: '',
        status: 'thinking',
        label: reply.newVersion ? 'Redrawing the plan' : 'Thinking about your garden',
      },
    ]);

    const finish = (stopped: boolean) => {
      window.clearInterval(interval.current);
      setStreaming(false);
      if (stopped) {
        updateMessage(id, { status: 'stopped' });
        return;
      }
      const added = reply.newVersion ? onAddVersion() : false;
      updateMessage(id, { status: 'done', changes: added ? V3_CHANGES : undefined });
    };

    finishRef.current = finish;
    interval.current = window.setInterval(() => {
      index += 1;
      updateMessage(id, { status: 'streaming', text: words.slice(0, index).join(' ') });
      if (index >= words.length) {
        finish(false);
      }
    }, 55);
  };

  return (
    <section className={`${classes.root} ${className ?? ''}`} aria-label="Conversation">
      <div className={classes.thread} ref={threadRef}>
        <div className={classes.user}>
          Our back garden is about 6 by 4 metres, north-facing, with a 1.8 m fence on two sides.
          Heavy clay. We’d like something green all year that the kids can’t wreck.
        </div>

        <AssistantMessage>
          <div className={classes.prose}>
            <p>
              That’s a lovely size for a woodland-edge garden. Shade and clay are a good pair for
              ferns and hellebores. A few quick answers and I’ll draw the first plan.
            </p>
          </div>
          <AskCard
            pets={pets}
            onPetsChange={onPetsChange}
            onApply={() =>
              onToast(
                pets
                  ? 'Plants harmful to dogs are marked. Use Swap to replace them.'
                  : 'Plan updated for your answers'
              )
            }
          />
        </AssistantMessage>

        <AssistantMessage>
          <div className={classes.prose}>
            <p>
              Here’s <b>plan v1</b>. Ferns and hydrangeas take the darkest corner by the fences,
              hostas and silver-leaved brunnera brighten the edges, and hellebores flower by the
              back door from Christmas to March.
            </p>
            <p>The one sunny spot, by the bench, gets about two hours of morning light.</p>
          </div>
          <div className={classes.tools}>
            <ActionIcon variant="subtle" size={30} aria-label="Copy">
              <IconCopy size={18} stroke={1.8} />
            </ActionIcon>
            <ActionIcon variant="subtle" size={30} aria-label="Try again">
              <IconRotateClockwise size={18} stroke={1.8} />
            </ActionIcon>
          </div>
        </AssistantMessage>

        <div className={classes.user}>Can you make it more wildlife-friendly? Bees especially.</div>

        <AssistantMessage>
          <div className={classes.prose}>
            <p>
              Done, that’s <b>plan v2</b>. Foxgloves give bumblebees something in June, Japanese
              anemones carry on into October, and a log pile in the corner is home for beetles and
              frogs. I took out one hydrangea to make room.
            </p>
          </div>
          <ChangeCard title="Changes from v1" changes={V2_CHANGES} onCompare={onCompare} />
        </AssistantMessage>

        {messages.map((message) =>
          message.role === 'user' ? (
            <div key={message.id} className={classes.user}>
              {message.text}
            </div>
          ) : (
            <AssistantMessage key={message.id}>
              {message.status === 'thinking' ? (
                <div className={classes.status}>
                  <Loader type="dots" size={18} />
                  {message.label}
                </div>
              ) : (
                <div className={classes.prose}>
                  <p>
                    {message.text}
                    {message.status === 'streaming' && <span className={classes.caret} />}
                  </p>
                </div>
              )}
              {message.status === 'stopped' && (
                <div className={classes.status} data-stopped>
                  Stopped. The plan wasn’t changed.
                </div>
              )}
              {message.changes && (
                <ChangeCard
                  title="Changes from v2"
                  changes={message.changes}
                  onCompare={onCompare}
                />
              )}
            </AssistantMessage>
          )
        )}
      </div>

      <div className={classes.composerWrap}>
        <div className={classes.suggestions}>
          {SUGGESTIONS.map((suggestion) => (
            <Button
              key={suggestion}
              variant="default"
              size="xs"
              radius="xl"
              fw={500}
              className={classes.suggestion}
              onClick={() => {
                setPrompt(suggestion);
                promptRef.current?.focus();
              }}
            >
              {suggestion}
            </Button>
          ))}
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            send();
          }}
        >
          <Textarea
            ref={promptRef}
            aria-label="Message"
            placeholder="Ask for a change to the plan"
            rows={2}
            value={prompt}
            onChange={(event) => setPrompt(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                send();
              }
            }}
            classNames={{
              wrapper: classes.composer,
              input: classes.composerInput,
              bottomSection: classes.composerFoot,
            }}
            bottomSectionPointerEvents="all"
            bottomSection={
              <>
                <span>Plans are a starting point. Check plants with your local nursery.</span>
                {streaming ? (
                  <Button
                    variant="default"
                    size="xs"
                    type="button"
                    leftSection={<IconPlayerStopFilled size={14} />}
                    onClick={() => finishRef.current(true)}
                  >
                    Stop
                  </Button>
                ) : (
                  <Button
                    size="xs"
                    type="submit"
                    leftSection={<IconArrowRight size={16} stroke={1.8} />}
                  >
                    Send
                  </Button>
                )}
              </>
            }
          />
        </form>
      </div>
    </section>
  );
}
