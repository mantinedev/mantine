'use client';

import { IconRoute } from '@tabler/icons-react';
import { Button, Checkbox, Paper, Switch, Text } from '@mantine/core';
import { CardHead } from './CardHead';
import { queueStops } from './data';
import { DockPips } from './DockPips';
import classes from './Riverline.module.css';

interface RebalancingQueueProps {
  selected: string[];
  onSelectedChange: (selected: string[]) => void;
  onDispatch: () => void;
}

export function RebalancingQueue({
  selected,
  onSelectedChange,
  onDispatch,
}: RebalancingQueueProps) {
  const count = selected.length;

  return (
    <Paper component="section" aria-labelledby="queue-title" className={classes.listCard}>
      <CardHead id="queue-title" title="Rebalancing queue" description="Soonest to run out first">
        <Switch label="Auto-assign" defaultChecked />
      </CardHead>

      <Checkbox.Group value={selected} onChange={onSelectedChange}>
        <ul className={classes.list}>
          {queueStops.map((stop) => (
            <li key={stop.id} className={classes.stop}>
              <Checkbox
                value={stop.id}
                aria-label={`Select ${stop.name}`}
                className={classes.stopCheck}
              />
              <div>
                <div className={classes.itemName}>{stop.name}</div>
                <Text size="sm">{stop.meta}</Text>
              </div>
              <div className={classes.need}>
                {stop.need}
                <span>{stop.needLabel}</span>
              </div>
              <div className={classes.itemWide}>
                <DockPips docks={stop.docks} bikes={stop.bikes} ebikes={stop.ebikes} />
              </div>
            </li>
          ))}
        </ul>
      </Checkbox.Group>

      <div className={classes.cardFoot}>
        <span>
          {count
            ? `${count} ${count === 1 ? 'stop' : 'stops'} selected`
            : 'Select stops to dispatch'}
        </span>
        <Button
          leftSection={<IconRoute size={18} stroke={1.75} />}
          disabled={count === 0}
          onClick={onDispatch}
        >
          Dispatch van
        </Button>
      </div>
    </Paper>
  );
}
