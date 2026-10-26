'use client';

import { Fragment, useEffect, useRef } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { Button, ScrollArea, Title } from '@mantine/core';
import { Answer } from './Answer';
import { type CiteCounter, renderRich } from './citations';
import { type ChangeState, type StreamedAnswer, visibleText } from './Clerk';
import { Composer } from './Composer';
import { type Change, firstQuestion, type Mode } from './data';
import { Redlines } from './Redlines';
import { RiskAnswer } from './RiskAnswer';
import classes from './Clerk.module.css';

interface ChatProps {
  answers: StreamedAnswer[];
  streaming: boolean;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  changeStates: Record<string, ChangeState>;
  onChangeState: (change: Change, state: ChangeState | null) => void;
  onAsk: (question: string, answer?: string) => void;
  onSubmit: (value: string) => void;
  onStop: () => void;
  onToast: (message: string) => void;
}

function StreamedAnswerBody({ answer }: { answer: StreamedAnswer }) {
  const counter: CiteCounter = new Map();
  const paragraphs = visibleText(answer).split('\n\n');

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {renderRich(paragraph, counter, `${answer.id}-${index}`)}
          {answer.status === 'streaming' && index === paragraphs.length - 1 && (
            <span className={classes.caret} />
          )}
        </p>
      ))}
      {answer.status === 'stopped' && (
        <div className={classes.stopped}>Stopped. The answer above is incomplete.</div>
      )}
    </>
  );
}

export function Chat({
  answers,
  streaming,
  mode,
  onModeChange,
  changeStates,
  onChangeState,
  onAsk,
  onSubmit,
  onStop,
  onToast,
}: ChatProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport && answers.length > 0) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }, [answers]);

  return (
    <section className={classes.chat} aria-label="Conversation">
      <div className={classes.chatHead}>
        <div>
          <Title order={1}>Crumb &amp; Co, lease of Unit 2</Title>
          <div className={classes.chatSub}>
            14 Constitution Street, Leith. Call with the client on Thursday.
          </div>
        </div>
        <span className={classes.spacer} />
        <Button
          variant="default"
          size="xs"
          className={classes.newQuestion}
          leftSection={<IconPlus stroke={1.7} />}
          onClick={() => {
            promptRef.current?.focus();
            onToast('Ask a new question. The lease stays loaded');
          }}
        >
          New question
        </Button>
      </div>

      <ScrollArea className={classes.threadScroll} viewportRef={viewportRef}>
        <div className={classes.thread} aria-live="polite">
          <div className={classes.userMessage}>{firstQuestion}</div>
          <RiskAnswer onToast={onToast} />
          <Redlines states={changeStates} onChangeState={onChangeState} />
          {answers.map((answer) => (
            <Fragment key={answer.id}>
              <div className={classes.userMessage}>{answer.question}</div>
              <Answer
                mode={answer.mode}
                time="now"
                withActions={answer.status !== 'streaming'}
                onToast={onToast}
              >
                <StreamedAnswerBody answer={answer} />
              </Answer>
            </Fragment>
          ))}
        </div>
      </ScrollArea>

      <Composer
        promptRef={promptRef}
        streaming={streaming}
        mode={mode}
        onModeChange={onModeChange}
        onAsk={onAsk}
        onSubmit={onSubmit}
        onStop={onStop}
        onToast={onToast}
      />
    </section>
  );
}
