'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Drawer, MantineProvider, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { Chat } from './Chat';
import { CitationsContext, getCitedRefs } from './citations';
import { type Change, changes, fallbackAnswer, type Mode, risks, suggestions } from './data';
import { LeaseDoc } from './LeaseDoc';
import { MattersList } from './MattersList';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import classes from './Clerk.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Commissioner:wght@400;500;600;700&display=swap';

export type Pane = 'chat' | 'doc';
export type ChangeState = 'accepted' | 'rejected';

export interface StreamedAnswer {
  id: number;
  question: string;
  tokens: string[];
  shown: number;
  mode: Mode;
  status: 'streaming' | 'done' | 'stopped';
}

export function visibleText(answer: StreamedAnswer) {
  return answer.tokens.slice(0, answer.shown).join('');
}

function Workspace() {
  const [pane, setPane] = useState<Pane>('chat');
  const [mattersOpened, setMattersOpened] = useState(false);
  const [pinned, setPinned] = useState<string | null>('s7-2');
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrollTarget, setScrollTarget] = useState<{ ref: string; id: number } | null>(null);
  const [changeStates, setChangeStates] = useState<Record<string, ChangeState>>({});
  const [answers, setAnswers] = useState<StreamedAnswer[]>([]);
  const [mode, setMode] = useState<Mode>('Careful review');
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const docRef = useRef<HTMLElement>(null);
  const scrollId = useRef(0);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const scrollToRef = useCallback((ref: string) => {
    scrollId.current += 1;
    setScrollTarget({ ref, id: scrollId.current });
  }, []);

  const pin = useCallback(
    (ref: string | null) => {
      setPinned(ref);
      if (ref) {
        if (docRef.current && getComputedStyle(docRef.current).display === 'none') {
          setPane('doc');
        }
        scrollToRef(ref);
      }
    },
    [scrollToRef]
  );

  const hover = useCallback(
    (ref: string, on: boolean, scroll = true) => {
      setHovered((current) => (on ? ref : current === ref ? null : current));
      if (on && scroll) {
        scrollToRef(ref);
      }
    },
    [scrollToRef]
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => scrollToRef('s7-2'));
    return () => window.cancelAnimationFrame(frame);
  }, [scrollToRef]);

  const streaming = answers.find((answer) => answer.status === 'streaming');

  useEffect(() => {
    if (!streaming) {
      return undefined;
    }
    const timer = window.setInterval(
      () => {
        setAnswers((current) =>
          current.map((answer) => {
            if (answer.id !== streaming.id) {
              return answer;
            }
            const shown = Math.min(answer.shown + 2, answer.tokens.length);
            return {
              ...answer,
              shown,
              status: shown >= answer.tokens.length ? 'done' : 'streaming',
            };
          })
        );
      },
      streaming.mode === 'Quick answer' ? 22 : 38
    );
    return () => window.clearInterval(timer);
  }, [streaming?.id, streaming?.mode]);

  const ask = (question: string, answer?: string) => {
    if (streaming) {
      return;
    }
    setAnswers((current) => [
      ...current,
      {
        id: current.length + 1,
        question,
        tokens: (answer ?? fallbackAnswer).split(/(\s+)/),
        shown: 0,
        mode,
        status: 'streaming',
      },
    ]);
  };

  const submit = (value: string) => {
    const match = suggestions.find(
      (suggestion) => suggestion.question.toLowerCase() === value.toLowerCase()
    );
    ask(value, match?.answer);
  };

  const stop = () => {
    setAnswers((current) =>
      current.map((answer) =>
        answer.status === 'streaming' ? { ...answer, status: 'stopped' } : answer
      )
    );
  };

  const setChangeState = (change: Change, state: ChangeState | null) => {
    setChangeStates((current) => {
      const next = { ...current };
      if (state) {
        next[change.id] = state;
      } else {
        delete next[change.id];
      }
      return next;
    });
    if (state === 'accepted') {
      pin(change.ref);
      showToast(`Clause ${change.clause} updated in the draft`);
    }
  };

  const cited = useMemo(() => {
    const map = new Map<string, boolean>();
    const add = (ref: string, risk = false) => map.set(ref, (map.get(ref) ?? false) || risk);
    risks.forEach((risk) => {
      add(risk.ref, risk.severity === 'high');
      getCitedRefs(risk.body).forEach((ref) => add(ref));
      getCitedRefs(risk.fix).forEach((ref) => add(ref));
    });
    answers.forEach((answer) => getCitedRefs(visibleText(answer)).forEach((ref) => add(ref)));
    return map;
  }, [answers]);

  const amended = useMemo(
    () => changes.filter((change) => changeStates[change.id] === 'accepted'),
    [changeStates]
  );

  const citations = useMemo(() => ({ pinned, hovered, pin, hover }), [pinned, hovered, pin, hover]);

  const selectMatter = (index: number) => {
    if (index !== 0) {
      showToast('Only the Crumb & Co matter is loaded in this preview');
    }
    setMattersOpened(false);
  };

  return (
    <CitationsContext value={citations}>
      <div className={classes.root}>
        <TopBar
          pane={pane}
          onPaneChange={setPane}
          mattersOpened={mattersOpened}
          onOpenMatters={() => setMattersOpened(true)}
        />

        <div className={classes.main} data-pane={pane}>
          <aside className={classes.matters} aria-label="Matters">
            <MattersList onSelect={selectMatter} />
          </aside>

          <Chat
            answers={answers}
            streaming={!!streaming}
            mode={mode}
            onModeChange={setMode}
            changeStates={changeStates}
            onChangeState={setChangeState}
            onAsk={ask}
            onSubmit={submit}
            onStop={stop}
            onToast={showToast}
          />

          <LeaseDoc
            ref={docRef}
            cited={cited}
            amended={amended}
            pane={pane}
            scrollTarget={scrollTarget}
          />
        </div>

        <Drawer
          opened={mattersOpened}
          onClose={() => setMattersOpened(false)}
          withinPortal={false}
          lockScroll={false}
          withCloseButton={false}
          size={260}
          padding={0}
          aria-label="Matters"
        >
          <MattersList onSelect={selectMatter} />
        </Drawer>

        <Transition mounted={toast !== null} transition="fade" duration={140}>
          {(styles) => (
            <div className={classes.toastAnchor}>
              <div className={classes.toast} role="status" style={styles}>
                {toast}
              </div>
            </div>
          )}
        </Transition>
      </div>
    </CitationsContext>
  );
}

export function Clerk() {
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
