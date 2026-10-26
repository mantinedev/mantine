'use client';

import { useEffect, useRef, useState } from 'react';
import { MantineProvider, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { ConversationList } from './ConversationList';
import {
  CONVERSATIONS,
  type Conversation,
  CREDITS,
  currentTime,
  type InboxTab,
  money,
  PICKUP_DAYS,
  PICKUP_SLOTS,
} from './data';
import type { CounterState } from './Offer';
import { type SoldBuyer, SoldModal } from './SoldModal';
import { cssVariablesResolver, theme } from './theme';
import { type PickupState, Thread, type ThreadActions } from './Thread';
import { TopBar } from './TopBar';
import classes from './SecondHome.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap';

const CLOSED_COUNTER: CounterState = { opened: false, value: 165, error: '' };

function useTimeouts() {
  const timeouts = useRef(new Set<number>());

  useEffect(() => {
    const active = timeouts.current;
    return () => active.forEach((id) => window.clearTimeout(id));
  }, []);

  return (callback: () => void, delay: number) => {
    const id = window.setTimeout(() => {
      timeouts.current.delete(id);
      callback();
    }, delay);
    timeouts.current.add(id);
    return id;
  };
}

function agree(conversation: Conversation, amount: number) {
  conversation.offers.forEach((offer) => {
    if (offer.state === 'open') {
      offer.state = offer.amount === amount ? 'agreed' : 'superseded';
    }
  });
  conversation.agreed = amount;
  conversation.status = 'agreed';
  conversation.messages.push({
    kind: 'system',
    text: `Offer agreed at ${money(amount)}`,
    ok: true,
  });
  if (conversation.role === 'selling') {
    conversation.messages.push({ kind: 'pickup' });
  }
}

function openOffer(conversation: Conversation) {
  return conversation.offers.find((offer) => offer.state === 'open' && offer.by === 'them');
}

function Inbox() {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [activeId, setActiveId] = useState('callum');
  const [tab, setTab] = useState<InboxTab>('all');
  const [view, setView] = useState<'list' | 'thread'>('thread');
  const [counter, setCounter] = useState<CounterState>(CLOSED_COUNTER);
  const [safetyHidden, setSafetyHidden] = useState(false);
  const [pickup, setPickup] = useState<PickupState>({ day: PICKUP_DAYS[0], slot: PICKUP_SLOTS[1] });
  const [soldOpened, setSoldOpened] = useState(false);
  const [toast, setToast] = useState({ opened: false, message: '' });
  const toastTimeout = useRef<number>(undefined);
  const schedule = useTimeouts();

  const conversation = conversations.find((item) => item.id === activeId) ?? conversations[0];
  const unread = conversations.reduce(
    (total, item) => total + (item.archived ? 0 : item.unread),
    0
  );

  const update = (id: string, change: (draft: Conversation) => void) => {
    setConversations((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }
        const draft = structuredClone(item);
        change(draft);
        return draft;
      })
    );
  };

  const showToast = (message: string) => {
    setToast({ opened: true, message });
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(
      () => setToast((current) => ({ ...current, opened: false })),
      2400
    );
  };

  const theyType = (id: string, delay: number, reply: (draft: Conversation) => void) => {
    schedule(() => {
      update(id, (draft) => {
        draft.messages.push({ kind: 'typing' });
      });
      schedule(() => {
        update(id, (draft) => {
          draft.messages = draft.messages.filter((message) => message.kind !== 'typing');
          reply(draft);
        });
      }, 1500);
    }, delay);
  };

  const sendText = (text: string) => {
    const id = conversation.id;
    update(id, (draft) => {
      draft.messages.push({ kind: 'text', from: 'me', text, time: currentTime(), seen: false });
    });
    schedule(() => {
      update(id, (draft) => {
        draft.messages.forEach((message) => {
          if (message.kind === 'text' && message.from === 'me') {
            message.seen = true;
          }
        });
      });
    }, 1400);
  };

  const sendCounter = () => {
    const open = openOffer(conversation);
    if (!open) {
      return;
    }
    const value = Number(counter.value);
    if (!value || value <= open.amount || value > conversation.item.price) {
      setCounter((current) => ({
        ...current,
        error: `Enter an amount between ${money(open.amount + 1)} and ${money(conversation.item.price)}.`,
      }));
      return;
    }
    const id = conversation.id;
    update(id, (draft) => {
      const offer = openOffer(draft);
      if (offer) {
        offer.state = 'superseded';
      }
      draft.offers.push({ by: 'me', amount: value, state: 'open' });
      draft.messages.push({
        kind: 'offer',
        index: draft.offers.length - 1,
        note: 'Meet me in the middle?',
        time: currentTime(),
      });
    });
    setCounter(CLOSED_COUNTER);
    theyType(id, 700, (draft) => {
      const mine = draft.offers[draft.offers.length - 1];
      if (mine.amount <= 170) {
        draft.messages.push({
          kind: 'text',
          from: 'them',
          text: `${money(mine.amount)} works for us. Deal!`,
          time: currentTime(),
        });
        mine.state = 'agreed';
        draft.agreed = mine.amount;
        draft.status = 'agreed';
        draft.messages.push({
          kind: 'system',
          text: `Offer agreed at ${money(mine.amount)}`,
          ok: true,
        });
        draft.messages.push({ kind: 'pickup' });
      } else {
        draft.messages.push({
          kind: 'text',
          from: 'them',
          text: 'That’s a bit over our budget. Could you do £165?',
          time: currentTime(),
        });
        mine.state = 'superseded';
        draft.offers.push({ by: 'them', amount: 165, state: 'open' });
        draft.messages.push({
          kind: 'offer',
          index: draft.offers.length - 1,
          note: '',
          time: currentTime(),
        });
      }
    });
  };

  const markSold = (buyer: SoldBuyer) => {
    update(conversation.id, (draft) => {
      draft.sold = true;
      if (buyer === 'them' && draft.agreed === null) {
        draft.agreed = draft.item.price;
      }
      draft.offers.forEach((offer) => {
        if (offer.state === 'open') {
          offer.state = 'superseded';
        }
      });
      draft.messages = draft.messages.filter((message) => message.kind !== 'pickup');
      draft.messages.push({
        kind: 'system',
        text: buyer === 'them' ? `Marked as sold to ${draft.name}` : 'Marked as sold',
      });
    });
    setSoldOpened(false);
    showToast('Marked as sold');
  };

  const actions: ThreadActions = {
    onBack: () => setView('list'),
    onHideSafety: () => setSafetyHidden(true),
    onMarkSold: () => setSoldOpened(true),
    onToast: showToast,
    onSendText: sendText,
    onAccept: () => {
      const open = openOffer(conversation);
      if (!open) {
        return;
      }
      update(conversation.id, (draft) => agree(draft, open.amount));
      showToast(`You accepted ${money(open.amount)}`);
    },
    onDecline: () => {
      const open = openOffer(conversation);
      if (!open) {
        return;
      }
      update(conversation.id, (draft) => {
        const offer = openOffer(draft);
        if (offer) {
          offer.state = 'declined';
        }
        draft.status = null;
        draft.messages.push({ kind: 'system', text: `You declined ${money(open.amount)}` });
      });
    },
    onCounterOpen: () => {
      const open = openOffer(conversation);
      if (!open) {
        return;
      }
      setCounter({
        opened: true,
        value: Math.max(
          open.amount + 5,
          Math.round((open.amount + conversation.item.price) / 2 / 5) * 5
        ),
        error: '',
      });
    },
    onCounterCancel: () => setCounter(CLOSED_COUNTER),
    onCounterChange: (value) => setCounter((current) => ({ ...current, value, error: '' })),
    onCounterSend: sendCounter,
    onPickupChange: setPickup,
    onSendPickup: () => {
      const id = conversation.id;
      update(id, (draft) => {
        draft.messages = draft.messages.filter((message) => message.kind !== 'pickup');
        draft.messages.push({
          kind: 'text',
          from: 'me',
          text: `Pickup: ${pickup.day}, ${pickup.slot}. Ring the top buzzer when you arrive.`,
          time: currentTime(),
          seen: false,
        });
      });
      theyType(id, 600, (draft) => {
        draft.messages.push({
          kind: 'text',
          from: 'them',
          text: 'Perfect, see you then. I’ll bring blankets for the van.',
          time: currentTime(),
        });
        draft.status = 'reserved';
      });
    },
    onArchive: () => {
      const archived = !conversation.archived;
      update(conversation.id, (draft) => {
        draft.archived = archived;
      });
      showToast(archived ? 'Chat archived' : 'Chat moved back to your inbox');
    },
    onReport: () => showToast('Reported. Our team will look at it within 24 hours.'),
    onBlock: () => {
      const blocked = !conversation.blocked;
      update(conversation.id, (draft) => {
        draft.blocked = blocked;
      });
      showToast(blocked ? `${conversation.name} is blocked` : `${conversation.name} is unblocked`);
    },
  };

  const select = (id: string) => {
    setActiveId(id);
    setCounter(CLOSED_COUNTER);
    setView('thread');
    update(id, (draft) => {
      draft.unread = 0;
    });
  };

  return (
    <div className={classes.root}>
      <TopBar unread={unread} />

      <div className={classes.body} data-view={view}>
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          tab={tab}
          onTabChange={setTab}
          onSelect={select}
        />
        <Thread
          conversation={conversation}
          safetyHidden={safetyHidden}
          counter={counter}
          pickup={pickup}
          actions={actions}
        />
      </div>

      <SoldModal
        conversation={conversation}
        opened={soldOpened}
        onClose={() => setSoldOpened(false)}
        onConfirm={markSold}
      />

      <Transition mounted={toast.opened} transition="slide-up" duration={160}>
        {(styles) => (
          <div className={classes.toast} style={styles} role="status">
            {toast.message}
          </div>
        )}
      </Transition>
    </div>
  );
}

export function SecondHome() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Inbox />
          <p className={classes.credits}>{CREDITS}</p>
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
