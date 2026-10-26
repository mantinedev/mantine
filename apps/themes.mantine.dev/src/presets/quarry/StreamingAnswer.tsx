'use client';

import { useEffect, useState } from 'react';
import { IconPin, IconPlayerStop } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { STREAM_SQL } from './data';
import { Answer, Finding, PipeStep, type StepState, TableChips } from './Pipeline';
import { LapsedTable } from './RefillTable';
import { SqlBlock } from './SqlBlock';
import { STEP_ICONS } from './step-icons';
import pipelineClasses from './Pipeline.module.css';

export type StreamStatus = 'running' | 'done' | 'stopped';

interface StreamingAnswerProps {
  id: number;
  status: StreamStatus;
  resultsOnly: boolean;
  onDone: (id: number) => void;
  onStop: () => void;
  onProgress: () => void;
}

const DELAYS = [500, 700, 0, 1300, 900, 900];
const STEP_COUNT = 6;
const STEP_ICON_PROPS = { size: 16, stroke: 1.8 };

const TITLES: [string, string][] = [
  ['Understood the question', 'Understood the question'],
  ['Found 2 tables', 'Found 2 tables'],
  ['Writing the query', 'Wrote the query'],
  ['Run', 'Ran it on Hopwell prod'],
  ['Check the results', 'Checked the results'],
  ['Explain', 'What I found'],
];

const META = ['0.3 s', '0.5 s', '1.9 s', '2.6 s', '5 regions', undefined];

export function StreamingAnswer({
  id,
  status,
  resultsOnly,
  onDone,
  onStop,
  onProgress,
}: StreamingAnswerProps) {
  const [current, setCurrent] = useState(0);
  const [chars, setChars] = useState(0);
  const [expanded, setExpanded] = useState([false, false, true, false, false, false]);
  const running = status === 'running';

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    if (current >= STEP_COUNT) {
      onDone(id);
      return undefined;
    }

    if (current === 2) {
      const typed = chars < STREAM_SQL.length;
      const timer = window.setTimeout(
        () => (typed ? setChars((value) => value + 3) : setCurrent(3)),
        typed ? 30 : 300
      );
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      if (current === 4 || current === 5) {
        setExpanded((value) => value.map((item, index) => (index === current ? true : item)));
      }
      setCurrent((value) => value + 1);
    }, DELAYS[current]);
    return () => window.clearTimeout(timer);
  }, [running, current, chars, onDone, id]);

  useEffect(() => {
    onProgress();
  }, [current, chars, onProgress]);

  const stateOf = (index: number): StepState =>
    index < current ? 'done' : index === current && running ? 'active' : 'pending';

  const titleOf = (index: number) => TITLES[index][index < current ? 1 : 0];

  const progress =
    status === 'done' ? 100 : Math.min(100, (Math.min(current, STEP_COUNT - 1) / 5) * 100);

  const step = (index: number) => {
    const Icon = STEP_ICONS[index];
    return {
      icon: <Icon {...STEP_ICON_PROPS} />,
      title: titleOf(index),
      meta: index < current ? (META[index] ?? '') : '',
      state: stateOf(index),
      tech: index < 4,
      expanded: expanded[index],
      onToggle: () => setExpanded((value) => value.map((item, i) => (i === index ? !item : item))),
    };
  };

  const subtitle =
    status === 'running'
      ? 'Working on it'
      : status === 'done'
        ? 'Answered in 9 seconds, 1 query'
        : 'Stopped';

  const actions =
    status === 'running' ? (
      <Button variant="default" leftSection={<IconPlayerStop />} onClick={onStop}>
        Stop
      </Button>
    ) : status === 'done' ? (
      <Button variant="default" leftSection={<IconPin />}>
        Pin to dashboard
      </Button>
    ) : (
      <span className={pipelineClasses.stopped}>
        Stopped at “{current < STEP_COUNT ? titleOf(current).toLowerCase() : 'the last step'}”.
        Nothing was run.
      </span>
    );

  return (
    <Answer subtitle={subtitle} progress={progress} resultsOnly={resultsOnly} actions={actions}>
      <PipeStep {...step(0)} />
      <PipeStep {...step(1)}>
        {current > 1 && <TableChips names={['orders', 'customers']} />}
      </PipeStep>
      <PipeStep {...step(2)}>
        <SqlBlock
          fileName="lapsed_customers.sql"
          code={STREAM_SQL.slice(0, chars)}
          typing={running && current === 2}
        />
      </PipeStep>
      <PipeStep {...step(3)} />
      <PipeStep {...step(4)}>{current > 4 && <LapsedTable />}</PipeStep>
      <PipeStep {...step(5)}>
        {current > 5 && (
          <Finding confidence="Medium confidence">
            1,284 customers who ordered before 1 September haven’t ordered since. Most of them are
            in the South West and London, where washing-up liquid is the most common first refill.
          </Finding>
        )}
      </PipeStep>
    </Answer>
  );
}
