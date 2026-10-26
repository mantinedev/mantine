'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { IconLayoutSidebarRight, IconMenu2, IconUpload } from '@tabler/icons-react';
import { CodeHighlightAdapterProvider } from '@mantine/code-highlight';
import {
  ActionIcon,
  Button,
  Overlay,
  ScrollArea,
  SegmentedControl,
  Title,
  Transition,
} from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { Composer } from './Composer';
import { AUTO_QUESTION, FOLLOW_UP, type HistoryItem, initialHistory } from './data';
import { FirstAnswer } from './FirstAnswer';
import { quarryHighlightAdapter } from './highlight-adapter';
import { RANGES, RunPanel } from './RunPanel';
import { Sidebar } from './Sidebar';
import { StreamingAnswer, type StreamStatus } from './StreamingAnswer';
import { cssVariablesResolver, theme } from './theme';
import classes from './Quarry.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap';

interface Stream {
  id: number;
  question: string;
  status: StreamStatus;
  endedAt?: number;
}

function streamHistory(stream: Stream): HistoryItem[] {
  if (stream.endedAt === undefined) {
    return [];
  }
  return stream.status === 'done'
    ? [{ id: stream.endedAt, query: 'Lapsed customers by region', time: '2.6 s', status: 'ok' }]
    : [{ id: stream.endedAt, query: stream.question.slice(0, 34), time: '—', status: 'stop' }];
}

function Workspace() {
  const [sideOpen, setSideOpen] = useState(false);
  const [runOpen, setRunOpen] = useState(false);
  const [view, setView] = useState('sql');
  const [compare, setCompare] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [range, setRange] = useState(RANGES[0]);
  const [running, setRunning] = useState(false);
  const [duration, setDuration] = useState('1.8 s');
  const [budget, setBudget] = useState(31);
  const [pinned, setPinned] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);
  const [streams, setStreams] = useState<Stream[]>([]);
  const [ask, setAsk] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const nextId = useRef(100);
  const toastTimer = useRef<number>(undefined);
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const scrollToEnd = useCallback(() => {
    const thread = threadRef.current;
    if (thread) {
      thread.scrollTop = thread.scrollHeight;
    }
  }, []);

  const closeDrawers = () => {
    setSideOpen(false);
    setRunOpen(false);
  };

  useWindowEvent('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDrawers();
    }
  });

  const stopStream = useCallback(() => {
    nextId.current += 1;
    const endedAt = nextId.current;
    setStreams((current) =>
      current.map((stream) =>
        stream.status === 'running' ? { ...stream, status: 'stopped', endedAt } : stream
      )
    );
  }, []);

  const startQuestion = useCallback(
    (question: string) => {
      stopStream();
      nextId.current += 1;
      const id = nextId.current;
      setStreams((current) => [...current, { id, question, status: 'running' }]);
    },
    [stopStream]
  );

  const finishStream = useCallback((id: number) => {
    nextId.current += 1;
    const endedAt = nextId.current;
    setStreams((current) =>
      current.map((stream) => (stream.id === id ? { ...stream, status: 'done', endedAt } : stream))
    );
  }, []);

  const stopWithToast = () => {
    stopStream();
    showToast('Stopped');
  };

  useEffect(() => {
    const timer = window.setTimeout(() => startQuestion(AUTO_QUESTION), 900);
    return () => window.clearTimeout(timer);
  }, [startQuestion]);

  useEffect(() => {
    scrollToEnd();
  }, [streams.length, scrollToEnd]);

  const runCount = useRef(0);
  const rerun = () => {
    setRunning(true);
    const next = `${(1.6 + Math.random() * 0.6).toFixed(1)} s`;
    window.setTimeout(() => {
      runCount.current += 1;
      setRunning(false);
      setDuration(next);
      setBudget(31 + runCount.current * 0.4);
      nextId.current += 1;
      const id = nextId.current;
      setHistory((current) => [
        { id, query: 'Repeat rate by week (re-run)', time: next, status: 'ok' },
        ...current,
      ]);
      showToast('Query finished, same 28 rows');
    }, 1400);
  };

  const copySql = (sql: string) => {
    navigator.clipboard
      .writeText(sql)
      .then(() => showToast('SQL copied'))
      .catch(() => showToast('Select the query and press Cmd+C to copy'));
  };

  const busy = streams.some((stream) => stream.status === 'running');
  const resultsOnly = view === 'results';

  return (
    <div className={classes.app}>
      <Sidebar
        opened={sideOpen}
        onNewQuestion={() => {
          closeDrawers();
          inputRef.current?.focus();
          showToast('Ask a new question below');
        }}
        onOpenSaved={(title) => showToast(`Opening “${title}”`)}
        onAskAboutTable={(table) => {
          setAsk(`In ${table}, `);
          closeDrawers();
          inputRef.current?.focus();
        }}
      />

      <section className={classes.main} aria-label="Conversation">
        <div className={classes.head}>
          <ActionIcon
            className={classes.sideToggle}
            onClick={() => setSideOpen(true)}
            aria-label="Show analyses and data"
          >
            <IconMenu2 size={18} stroke={1.8} />
          </ActionIcon>
          <Title order={1} className={classes.title}>
            Repeat orders, September
          </Title>
          <SegmentedControl
            value={view}
            onChange={setView}
            aria-label="Detail level"
            data={[
              { value: 'sql', label: 'Show SQL' },
              { value: 'results', label: 'Results only' },
            ]}
          />
          <Button
            variant="default"
            leftSection={<IconUpload />}
            className={classes.share}
            onClick={() => showToast('Link copied for the Growth team')}
          >
            Share
          </Button>
          <ActionIcon
            className={classes.runToggle}
            onClick={() => setRunOpen(true)}
            aria-label="Show run details"
          >
            <IconLayoutSidebarRight size={18} stroke={1.8} />
          </ActionIcon>
        </div>

        <ScrollArea className={classes.threadScroll} scrollbars="y" viewportRef={threadRef}>
          <div className={classes.thread}>
            <div className={classes.question}>Why did repeat orders drop in September?</div>
            <div className={classes.questionMeta}>Nadia, today at 09:14</div>

            <FirstAnswer
              resultsOnly={resultsOnly}
              compare={compare}
              running={running}
              duration={duration}
              pinned={pinned}
              onTogglePin={() => {
                showToast(pinned ? 'Removed from the dashboard' : 'Pinned to the Growth dashboard');
                setPinned(!pinned);
              }}
              onCopy={copySql}
              onRerun={rerun}
              onFollowUp={() => startQuestion(FOLLOW_UP)}
            />

            {streams.map((stream) => (
              <div key={stream.id} className={classes.exchange}>
                <div className={classes.question}>{stream.question}</div>
                <div className={classes.questionMeta}>Nadia, just now</div>
                <StreamingAnswer
                  id={stream.id}
                  status={stream.status}
                  resultsOnly={resultsOnly}
                  onDone={finishStream}
                  onStop={stopWithToast}
                  onProgress={scrollToEnd}
                />
              </div>
            ))}
          </div>
        </ScrollArea>

        <Composer
          value={ask}
          onChange={setAsk}
          busy={busy}
          onAsk={startQuestion}
          onStop={stopWithToast}
          inputRef={inputRef}
        />
      </section>

      <RunPanel
        opened={runOpen}
        onClose={closeDrawers}
        duration={duration}
        budget={budget}
        range={range}
        onRangeChange={(value) => {
          setRange(value);
          rerun();
        }}
        compare={compare}
        onCompareChange={setCompare}
        weekly={weekly}
        onWeeklyChange={(value) => {
          setWeekly(value);
          showToast(value ? 'Will re-run every Monday at 07:00' : 'Weekly re-run turned off');
        }}
        history={[...history, ...streams.flatMap(streamHistory)].sort((a, b) => b.id - a.id)}
      />

      {(sideOpen || runOpen) && (
        <Overlay
          fixed={false}
          zIndex={25}
          color="#0d1017"
          backgroundOpacity={0.4}
          onClick={closeDrawers}
        />
      )}

      <Transition mounted={toast !== null} transition="fade" duration={150}>
        {(styles) => (
          <div className={classes.toast} style={styles} role="status">
            {toast}
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Quarry() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <CodeHighlightAdapterProvider adapter={quarryHighlightAdapter}>
          <PresetFrame>
            <Workspace />
          </PresetFrame>
        </CodeHighlightAdapterProvider>
      </PresetProvider>
    </>
  );
}
