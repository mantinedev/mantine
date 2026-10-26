'use client';

import { useState } from 'react';
import { IconCheck, IconPin } from '@tabler/icons-react';
import { Button, Loader } from '@mantine/core';
import { SparkIcon } from './BrandIcons';
import { FIRST_SQL } from './data';
import { Answer, Finding, PipeStep, TableChip, TableChips } from './Pipeline';
import { RefillTable } from './RefillTable';
import { RepeatChart } from './RepeatChart';
import { SqlBlock } from './SqlBlock';
import { STEP_ICONS } from './step-icons';
import classes from './Thread.module.css';

interface FirstAnswerProps {
  resultsOnly: boolean;
  compare: boolean;
  running: boolean;
  duration: string;
  pinned: boolean;
  onTogglePin: () => void;
  onCopy: (sql: string) => void;
  onRerun: () => void;
  onFollowUp: () => void;
}

const STEP_ICON_PROPS = { size: 16, stroke: 1.8 };

export function FirstAnswer({
  resultsOnly,
  compare,
  running,
  duration,
  pinned,
  onTogglePin,
  onCopy,
  onRerun,
  onFollowUp,
}: FirstAnswerProps) {
  const [sql, setSql] = useState(FIRST_SQL);
  const [expanded, setExpanded] = useState([false, false, true, true, true, true]);
  const toggle = (index: number) =>
    setExpanded((current) => current.map((value, i) => (i === index ? !value : value)));

  const step = (index: number) => {
    const Icon = STEP_ICONS[index];
    return {
      icon: <Icon {...STEP_ICON_PROPS} />,
      state: 'done' as const,
      expanded: expanded[index],
      onToggle: () => toggle(index),
    };
  };

  return (
    <Answer
      subtitle="Answered in 14 seconds, 2 queries"
      progress={100}
      resultsOnly={resultsOnly}
      actions={
        <>
          <Button
            variant="default"
            aria-pressed={pinned}
            leftSection={<IconPin />}
            onClick={onTogglePin}
          >
            {pinned ? 'Pinned to Growth dashboard' : 'Pin to dashboard'}
          </Button>
          <Button variant="default" leftSection={<SparkIcon size={16} />} onClick={onFollowUp}>
            Break down by order type
          </Button>
        </>
      }
    >
      <PipeStep {...step(0)} tech title="Understood the question" meta="0.4 s">
        <p>
          A <b>repeat order</b> is any order from a customer who had ordered before. I compared the
          weekly share of repeat orders with the same weeks last year.
        </p>
      </PipeStep>
      <PipeStep {...step(1)} tech title="Found 3 tables" meta="0.6 s">
        <TableChips names={['orders', 'customers', 'refills']} />
        <p>
          Skipped <TableChip>subscriptions</TableChip>: renewals already appear in orders.
        </p>
      </PipeStep>
      <PipeStep {...step(2)} tech title="Wrote the query" meta="2.1 s">
        <SqlBlock
          fileName="repeat_rate_by_week.sql"
          code={sql}
          actions={{
            onCopy,
            onRerun,
            onSave: (next) => {
              setSql(next);
              onRerun();
            },
            onCancel: () => setSql(FIRST_SQL),
          }}
        />
      </PipeStep>
      <PipeStep
        {...step(3)}
        tech
        title="Ran it on Hopwell prod"
        meta={running ? 'running' : duration}
      >
        <div className={classes.runline}>
          {running ? (
            <span className={classes.running}>
              <Loader type="oval" />
              Running on Hopwell prod
            </span>
          ) : (
            <>
              <span className={classes.ok}>
                <IconCheck size={15} stroke={2.4} />
                Finished
              </span>
              <span>
                Duration <b>{duration}</b>
              </span>
              <span>
                Rows scanned <b>2,418,903</b>
              </span>
              <span>
                Returned <b>28 rows</b>
              </span>
            </>
          )}
        </div>
      </PipeStep>
      <PipeStep {...step(4)} title="Checked the results" meta="14 weeks, 8 refills">
        <RepeatChart compare={compare} />
        <RefillTable />
      </PipeStep>
      <PipeStep {...step(5)} title="What I found">
        <Finding
          confidence="High confidence"
          caveats={[
            'Subscription renewals count as repeat orders. 3% of September renewals failed on payment and may still be retried.',
            'The week of 5 October is incomplete: data runs to 8 October.',
          ]}
        >
          Repeat orders fell from about 41% to 33% of all orders in the week of 31 August and
          haven’t recovered. The drop is almost entirely in the two refills whose price went up on 1
          September: washing-up liquid (−27%) and dishwasher tabs (−26%). Refills with unchanged
          prices held steady, and the same weeks last year rose slightly, so the season doesn’t
          explain it.
        </Finding>
      </PipeStep>
    </Answer>
  );
}
