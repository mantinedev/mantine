'use client';

import { useRef, useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { ThemeIcon, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { type ActivityEntry, type Deal, type DealFilter, initialDeals, STAGES } from './data';
import { DealDetail, type DetailTab } from './DealDetail';
import { DealList } from './DealList';
import { type CallLog, LogCallModal } from './LogCallModal';
import { Rail } from './Rail';
import { cssVariablesResolver, theme } from './theme';
import classes from './Benchbook.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap';

function filterDeals(deals: Deal[], filter: DealFilter, query: string) {
  const search = query.trim().toLowerCase();
  return deals.filter((deal) => {
    if (filter === 'open' && deal.closed) {
      return false;
    }
    if (filter === 'mine' && (!deal.mine || deal.closed)) {
      return false;
    }
    if (filter === 'late' && !deal.late) {
      return false;
    }
    return !search || `${deal.client} ${deal.project}`.toLowerCase().includes(search);
  });
}

function App() {
  const [deals, setDeals] = useState(initialDeals);
  const [selected, setSelected] = useState('lindqvist');
  const [filter, setFilter] = useState<DealFilter>('open');
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<DetailTab>('overview');
  const [showDetail, setShowDetail] = useState(true);
  const [callOpened, setCallOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const nextId = useRef(0);

  const deal = deals.find((item) => item.id === selected) ?? deals[0];

  const showToast = (text: string) => {
    setToast(text);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2600);
  };

  const updateDeal = (update: (current: Deal) => Deal) => {
    setDeals((current) => current.map((item) => (item.id === deal.id ? update(item) : item)));
  };

  const addActivity = (entry: Omit<ActivityEntry, 'id'>) => {
    nextId.current += 1;
    const id = `new-${nextId.current}`;
    updateDeal((current) => ({
      ...current,
      activity: [{ id, ...entry }, ...current.activity],
    }));
  };

  const advance = () => {
    const stage = Math.min(STAGES.length - 1, deal.stage + 1);
    const label = `Moved to ${STAGES[stage].toLowerCase()}`;
    nextId.current += 1;
    const id = `new-${nextId.current}`;
    updateDeal((current) => ({
      ...current,
      stage,
      activity: [{ id, title: label, meta: 'Just now, Tom Rowe' }, ...current.activity],
    }));
    showToast(label);
  };

  const toggleTask = (index: number, done: boolean) => {
    updateDeal((current) => {
      const tasks = current.tasks.map((task, taskIndex) =>
        taskIndex === index ? { ...task, done, due: done ? 'Done today' : task.due } : task
      );
      return {
        ...current,
        tasks,
        late: done ? tasks.some((task) => task.late && !task.done) : current.late,
      };
    });
  };

  const saveCall = (call: CallLog) => {
    addActivity({
      title: `Call, ${call.length}`,
      meta: 'Just now, Tom Rowe',
      body: `${call.outcome}. ${call.notes}`,
    });
    setCallOpened(false);
    setTab('overview');
    showToast('Call saved');
  };

  return (
    <div className={classes.root} data-show-detail={showDetail || undefined}>
      <Rail />

      <DealList
        deals={filterDeals(deals, filter, query)}
        selected={selected}
        onSelect={(id) => {
          setSelected(id);
          setTab('overview');
          setShowDetail(true);
        }}
        filter={filter}
        onFilterChange={setFilter}
        query={query}
        onQueryChange={setQuery}
      />

      <DealDetail
        deal={deal}
        tab={tab}
        onTabChange={setTab}
        onBack={() => setShowDetail(false)}
        onAdvance={advance}
        onLogCall={() => setCallOpened(true)}
        onAddNote={(note) => {
          addActivity({
            title: 'Note from Tom Rowe',
            meta: 'Just now',
            body: note,
            note: true,
          });
          showToast('Note added');
        }}
        onToggleTask={toggleTask}
      />

      <LogCallModal opened={callOpened} onClose={() => setCallOpened(false)} onSave={saveCall} />

      <Transition mounted={toast !== null} transition="pop" duration={140} keepMounted={false}>
        {(styles) => (
          <div className={classes.toast} style={styles} role="status">
            <ThemeIcon color="green" radius="xl" size={22}>
              <IconCheck size={14} stroke={2.5} />
            </ThemeIcon>
            {toast}
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Benchbook() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <App />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
