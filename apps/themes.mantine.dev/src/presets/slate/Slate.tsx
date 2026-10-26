'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IconMenu2, IconMessage2, IconSearch, IconWind, IconX } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Button,
  MantineProvider,
  ScrollArea,
  ThemeIcon,
  Title,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { Composer } from './Composer';
import {
  BETHAN_FOLLOW_UP,
  CHANNELS,
  DMS,
  FEEDS,
  type FeedItem,
  ME,
  type Message,
  PEOPLE,
  SCENES,
  TOPICS,
} from './data';
import { MessageItem, type MessageHandlers } from './MessageItem';
import { Rail, Sidebar } from './Navigation';
import { PersonAvatar } from './PersonAvatar';
import { SceneStrip } from './SceneStrip';
import { cssVariablesResolver, theme } from './theme';
import { ThreadPanel } from './ThreadPanel';
import classes from './Slate.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap';

function mapMessages(
  feeds: Record<string, FeedItem[]>,
  id: string,
  update: (message: Message) => Message
) {
  return Object.fromEntries(
    Object.entries(feeds).map(([key, items]) => [
      key,
      items.map((item) => (item.kind === 'message' && item.id === id ? update(item) : item)),
    ])
  );
}

function findMessage(feeds: Record<string, FeedItem[]>, id: string) {
  for (const items of Object.values(feeds)) {
    const found = items.find((item) => item.kind === 'message' && item.id === id);
    if (found?.kind === 'message') {
      return found;
    }
  }
  return null;
}

function formatClock(total: number) {
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

function Workspace() {
  const [scenes, setScenes] = useState(SCENES);
  const [feeds, setFeeds] = useState(FEEDS);
  const [channels, setChannels] = useState(CHANNELS);
  const [dms, setDms] = useState(DMS);
  const [current, setCurrent] = useState('callsheet');
  const [holdClosed, setHoldClosed] = useState(false);
  const [threadId, setThreadId] = useState('m2');
  const [threadOpened, setThreadOpened] = useState(false);
  const [navOpened, setNavOpened] = useState(false);
  const [typing, setTyping] = useState(true);
  const [scheduled, setScheduled] = useState<{ when: string; text: string } | null>(null);
  const [toast, setToast] = useState({ text: '', visible: false });

  const minutes = useRef(10 * 60 + 24);
  const uid = useRef(100);
  const toastTimeout = useRef<number>(undefined);
  const currentRef = useRef(current);
  const viewport = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const stickToEnd = useRef(true);
  const forceEnd = useRef(true);

  currentRef.current = current;

  const showToast = useCallback((text: string) => {
    setToast({ text, visible: true });
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(
      () => setToast((previous) => ({ ...previous, visible: false })),
      2200
    );
  }, []);

  const clock = () => {
    minutes.current += 1;
    return formatClock(minutes.current);
  };

  const append = (channel: string, message: Omit<Message, 'kind' | 'id' | 'time'>) => {
    uid.current += 1;
    const item: Message = { kind: 'message', id: `m${uid.current}`, time: clock(), ...message };
    setFeeds((previous) => ({ ...previous, [channel]: [...previous[channel], item] }));
  };

  const scrollToEnd = () => {
    const element = viewport.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };

  useLayoutEffect(() => {
    if (forceEnd.current || stickToEnd.current) {
      scrollToEnd();
      stickToEnd.current = true;
    }
    forceEnd.current = false;
  }, [feeds, current]);

  useEffect(() => {
    const element = list.current;
    if (!element) {
      return undefined;
    }
    const observer = new ResizeObserver(() => stickToEnd.current && scrollToEnd());
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTyping(false);
      if (currentRef.current === 'callsheet') {
        uid.current += 1;
        minutes.current += 1;
        const time = formatClock(minutes.current);
        setFeeds((previous) => ({
          ...previous,
          callsheet: [
            ...previous.callsheet,
            {
              kind: 'message',
              id: `m${uid.current}`,
              who: 'bethan',
              time,
              text: BETHAN_FOLLOW_UP,
              reactions: [],
            },
          ],
        }));
      }
    }, 6000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setNavOpened(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const wrapScene = (number: string) => {
    const scene = scenes.find((item) => item.number === number);
    if (!scene) {
      showToast(`Scene ${number} isn’t on today’s call sheet`);
      return false;
    }
    if (scene.status === 'done') {
      showToast(`Scene ${number} is already wrapped`);
      return false;
    }

    const nextScenes = scenes.map((item) =>
      item.number === number
        ? { ...item, status: 'done' as const }
        : item.status === 'now'
          ? { ...item, status: 'todo' as const }
          : item
    );
    const nextIndex = nextScenes.findIndex((item) => item.status === 'todo');
    const next = nextIndex === -1 ? undefined : nextScenes[nextIndex];
    if (next) {
      nextScenes[nextIndex] = { ...next, status: 'now' };
    }

    setScenes(nextScenes);
    if (currentRef.current === 'callsheet') {
      forceEnd.current = true;
    }
    append('callsheet', {
      who: ME,
      text: `**Scene ${number} wrapped.**${
        next
          ? ` Turning round for ${next.number}, ${next.set.toLowerCase()}.`
          : ' That’s a wrap on day 14, thank you all.'
      }`,
      reactions: [],
    });
    return true;
  };

  const handleSend = (text: string) => {
    const wrap = text.match(/^\/wrap\s+(\d+)$/);
    if (wrap) {
      if (current !== 'callsheet') {
        showToast('Use /wrap in #day-14-callsheet');
        return false;
      }
      return wrapScene(wrap[1]);
    }

    if (/^\/hold\s*(.*)$/.test(text)) {
      setHoldClosed(false);
      showToast('Hold pinned to the channel');
      return true;
    }

    forceEnd.current = true;
    append(current, { who: ME, text, reactions: [] });
    return true;
  };

  const selectChannel = (id: string) => {
    setCurrent(id);
    setChannels((items) => items.map((item) => (item.id === id ? { ...item, unread: 0 } : item)));
    setDms((items) => items.map((item) => (item.id === id ? { ...item, unread: 0 } : item)));
    setNavOpened(false);
    forceEnd.current = true;
  };

  const updateMessage = (id: string, update: (message: Message) => Message) =>
    setFeeds((previous) => mapMessages(previous, id, update));

  const handlers: MessageHandlers = {
    onToggleReaction: (id, index) =>
      updateMessage(id, (message) => {
        const reactions = (message.reactions ?? [])
          .map((reaction, reactionIndex) =>
            reactionIndex === index
              ? {
                  ...reaction,
                  users: reaction.users.includes(ME)
                    ? reaction.users.filter((user) => user !== ME)
                    : [...reaction.users, ME],
                }
              : reaction
          )
          .filter((reaction) => reaction.users.length > 0);
        return { ...message, reactions };
      }),
    onAddReaction: (id, emoji) =>
      updateMessage(id, (message) => {
        const reactions = message.reactions ?? [];
        const existing = reactions.find((reaction) => reaction.emoji === emoji);
        return {
          ...message,
          reactions: existing
            ? reactions.map((reaction) =>
                reaction === existing && !reaction.users.includes(ME)
                  ? { ...reaction, users: [...reaction.users, ME] }
                  : reaction
              )
            : [...reactions, { emoji, users: [ME] }],
        };
      }),
    onOpenThread: (id) => {
      setThreadId(id);
      setThreadOpened(true);
    },
    onVote: (id, option) =>
      updateMessage(id, (message) =>
        message.poll
          ? {
              ...message,
              poll: {
                ...message.poll,
                options: message.poll.options.map((item, index) => {
                  const voted = item.votes.includes(ME);
                  const votes = item.votes.filter((user) => user !== ME);
                  return { ...item, votes: index === option && !voted ? [...votes, ME] : votes };
                }),
              },
            }
          : message
      ),
    onOpenFile: () => showToast('Opening Shot list day 14 v4.pdf'),
  };

  const reply = (text: string) =>
    updateMessage(threadId, (message) => ({
      ...message,
      replies: [...(message.replies ?? []), { who: ME, time: clock(), text }],
    }));

  const isDm = current.startsWith('dm-');
  const dm = dms.find((item) => item.id === current);
  const channel = channels.find((item) => item.id === current);
  const title = isDm && dm ? PEOPLE[dm.who].name : `# ${channel?.name}`;
  const topic = isDm && dm ? PEOPLE[dm.who].role : TOPICS[current];
  const placeholder =
    isDm && dm
      ? `Message ${PEOPLE[dm.who].name}`
      : `Message #${channel?.name}${current === 'callsheet' ? ', or /wrap 41' : ''}`;
  const items = feeds[current];
  const threadMessage = findMessage(feeds, threadId);
  const nowScene = scenes.find((scene) => scene.status === 'now')?.number;

  return (
    <div className={classes.root}>
      <Rail />
      <Sidebar
        channels={channels}
        dms={dms}
        current={current}
        opened={navOpened}
        onSelect={selectChannel}
      />

      <main className={classes.main}>
        <header className={classes.channelHead}>
          <ActionIcon
            variant="subtle"
            className={classes.menuButton}
            aria-label="Open channels"
            aria-expanded={navOpened}
            onClick={() => setNavOpened((opened) => !opened)}
          >
            <IconMenu2 stroke={1.8} />
          </ActionIcon>
          <Title order={2} className={classes.channelTitle}>
            {title}
          </Title>
          <div className={classes.topic}>{topic}</div>
          <div className={classes.headActions}>
            <Button variant="default" className={classes.faces} aria-label="31 members">
              <Avatar.Group spacing={6} className={classes.faceStack}>
                <PersonAvatar who="rhys" size={20} />
                <PersonAvatar who="sian" size={20} />
                <PersonAvatar who="tomasz" size={20} />
              </Avatar.Group>
              31
            </Button>
            <ActionIcon aria-label="Search this channel">
              <IconSearch stroke={1.8} />
            </ActionIcon>
            <ActionIcon
              aria-label="Show thread"
              aria-pressed={threadOpened}
              onClick={() => setThreadOpened((opened) => !opened)}
            >
              <IconMessage2 stroke={1.8} />
            </ActionIcon>
          </div>
        </header>

        <SceneStrip scenes={scenes} onWrap={() => nowScene && wrapScene(nowScene)} />

        {!holdClosed && current === 'callsheet' && (
          <div className={classes.hold} role="status">
            <ThemeIcon
              size={30}
              vars={() => ({
                root: { '--ti-bg': 'var(--slate-hold)', '--ti-color': 'var(--slate-hold-icon)' },
              })}
            >
              <IconWind size={18} stroke={1.8} />
            </ThemeIcon>
            <div>
              <b>Weather hold on the cliff until 11:30</b>
              <p>
                Gusts of 48 mph at Strumble Head. If the wind drops we shoot 42 after lunch,
                otherwise 44 moves up and 42 goes to day 15.
              </p>
            </div>
            <div className={classes.holdActions}>
              <Button
                variant="default"
                onClick={() => showToast('Strumble Head: gusts easing to 30 mph by 12:00')}
              >
                Forecast
              </Button>
              <ActionIcon
                variant="subtle"
                className={classes.holdClose}
                aria-label="Unpin weather hold"
                onClick={() => {
                  setHoldClosed(true);
                  showToast('Weather hold unpinned');
                }}
              >
                <IconX stroke={1.8} />
              </ActionIcon>
            </div>
          </div>
        )}

        <ScrollArea
          className={classes.feed}
          viewportRef={viewport}
          type="hover"
          onScrollPositionChange={() => {
            const element = viewport.current;
            if (element) {
              stickToEnd.current =
                element.scrollHeight - element.scrollTop - element.clientHeight < 40;
            }
          }}
        >
          <div ref={list} className={classes.feedList} aria-live="polite">
            {items.map((item, index) => {
              const previous = items[index - 1];
              if (item.kind === 'day') {
                return (
                  <div key={`day-${item.text}`} className={classes.day}>
                    {item.text}
                  </div>
                );
              }
              if (item.kind === 'unread') {
                return (
                  <div key="unread" className={classes.unreadLine}>
                    New
                  </div>
                );
              }
              return (
                <MessageItem
                  key={item.id}
                  message={item}
                  continued={
                    previous?.kind === 'message' && previous.who === item.who && !item.type
                  }
                  scenes={scenes}
                  {...handlers}
                />
              );
            })}
          </div>
        </ScrollArea>

        <div
          className={classes.typing}
          style={{ visibility: typing && current === 'callsheet' ? 'visible' : 'hidden' }}
        >
          <span className={classes.dots}>
            <i />
            <i />
            <i />
          </span>
          <span>
            <b>Bethan</b> is typing
          </span>
        </div>

        <Composer
          placeholder={placeholder}
          nowScene={nowScene}
          onSend={handleSend}
          onToast={showToast}
          onSchedule={(when, text) => {
            setScheduled({ when, text });
            showToast('Message scheduled');
          }}
          top={
            scheduled && (
              <div className={classes.scheduled}>
                <span>
                  Scheduled for <b className={classes.mono}>{scheduled.when}</b>: {scheduled.text}
                </span>
                <Button
                  variant="default"
                  onClick={() => {
                    setScheduled(null);
                    showToast('Scheduled message cancelled');
                  }}
                >
                  Cancel
                </Button>
              </div>
            )
          }
        />
      </main>

      {threadOpened && threadMessage && (
        <ThreadPanel
          message={threadMessage}
          channelLabel="# day-14-callsheet"
          scenes={scenes}
          onClose={() => setThreadOpened(false)}
          onReply={reply}
          {...handlers}
        />
      )}

      <Transition mounted={toast.visible} transition="pop" duration={150}>
        {(styles) => (
          <div className={classes.toastAnchor}>
            <div className={classes.toast} style={styles} role="status">
              {toast.text}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Slate() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Workspace />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
