'use client';

import { useEffect, useRef, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import {
  localStorageColorSchemeManager,
  MantineProvider,
  Overlay,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import type { ComposerMode } from './Composer';
import { CustomerPanel } from './CustomerPanel';
import {
  type AgentId,
  AGENTS,
  ME,
  type Status,
  STATUS_LABEL,
  type Ticket,
  TICKETS,
  type ViewId,
} from './data';
import { Queue } from './Queue';
import { cssVariablesResolver, theme } from './theme';
import { Thread } from './Thread';
import classes from './Hearth.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'hearth-color-scheme',
});

const SENT_TOAST: Record<Status, string> = {
  solved: 'Sent and marked as solved',
  pending: 'Sent, waiting on customer',
  open: 'Sent',
};

function useElapsedMinutes() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = window.setInterval(
      () => setElapsed(Math.round((Date.now() - start) / 60000)),
      30000
    );
    return () => window.clearInterval(interval);
  }, []);

  return elapsed;
}

function Desk() {
  const [tickets, setTickets] = useState<Ticket[]>(TICKETS);
  const [selected, setSelected] = useState(4821);
  const [view, setView] = useState<ViewId>('inbox');
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<ComposerMode>('reply');
  const [draft, setDraft] = useState('');
  const [sections, setSections] = useState(['devices', 'warranty']);
  const [showThread, setShowThread] = useState(true);
  const [customerOpened, setCustomerOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const elapsed = useElapsedMinutes();

  const ticket = tickets.find((item) => item.id === selected) ?? tickets[0];

  useEffect(() => {
    if (!customerOpened) {
      return undefined;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCustomerOpened(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [customerOpened]);

  const showToast = (text: string) => {
    setToast(text);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2600);
  };

  const updateTicket = (update: (current: Ticket) => Partial<Ticket>) =>
    setTickets((current) =>
      current.map((item) => (item.id === selected ? { ...item, ...update(item) } : item))
    );

  const selectTicket = (id: number) => {
    setSelected(id);
    setTickets((current) =>
      current.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
    setDraft('');
    setMode('reply');
    setShowThread(true);
    setCustomerOpened(false);
  };

  const changeStatus = (status: Status) => {
    updateTicket(() => ({ status }));
    showToast(`Status set to ${STATUS_LABEL[status].toLowerCase()}`);
  };

  const assign = (agent: AgentId | null) => {
    updateTicket(() => ({ assignee: agent }));
    showToast(agent ? `Assigned to ${AGENTS[agent].name}` : 'Unassigned');
  };

  const send = (status: Status) => {
    const body = draft.trim().split(/\n+/);
    updateTicket((current) => ({
      status,
      assignee: current.assignee ?? ME,
      messages: [
        ...current.messages,
        {
          who: 'agent',
          agent: ME,
          time: 'Just now',
          via: current.channel === 'phone' ? 'mail' : current.channel,
          body,
        },
      ],
    }));
    setDraft('');
    showToast(SENT_TOAST[status]);
  };

  const addNote = () => {
    const body = [draft.trim()];
    updateTicket((current) => ({
      messages: [...current.messages, { who: 'note', agent: ME, time: 'Just now', body }],
    }));
    setDraft('');
    showToast('Note added');
  };

  return (
    <div className={classes.root}>
      <div className={classes.desk} data-show-thread={showThread || undefined}>
        <Queue
          tickets={tickets}
          view={view}
          onViewChange={setView}
          query={query}
          onQueryChange={setQuery}
          selected={selected}
          onSelect={selectTicket}
          elapsed={elapsed}
        />
        <Thread
          ticket={ticket}
          elapsed={elapsed}
          customerOpened={customerOpened}
          onBack={() => setShowThread(false)}
          onToggleCustomer={() => setCustomerOpened((opened) => !opened)}
          onStatusChange={changeStatus}
          onAssign={assign}
          onTagsChange={(tags) => updateTicket(() => ({ tags }))}
          mode={mode}
          onModeChange={setMode}
          draft={draft}
          onDraftChange={setDraft}
          onSend={send}
          onAddNote={addNote}
        />
        <CustomerPanel
          ticket={ticket}
          opened={customerOpened}
          onClose={() => setCustomerOpened(false)}
          sections={sections}
          onSectionsChange={setSections}
        />
      </div>

      {customerOpened && (
        <Overlay
          className={classes.scrim}
          zIndex={14}
          fixed={false}
          onClick={() => setCustomerOpened(false)}
        />
      )}

      <Transition mounted={toast !== null} transition="pop" duration={140} keepMounted={false}>
        {(styles) => (
          <div className={classes.toastWrap} style={styles}>
            <div className={classes.toast} role="status">
              <IconCheck size={16} stroke={2.5} />
              {toast}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Hearth() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme="dark"
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <Desk />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
