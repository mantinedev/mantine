'use client';

import { IconCheck, IconX } from '@tabler/icons-react';
import { Button, Paper } from '@mantine/core';
import { useCitations } from './citations';
import type { ChangeState } from './Clerk';
import { type Change, changes } from './data';
import classes from './Clerk.module.css';

interface RedlinesProps {
  states: Record<string, ChangeState>;
  onChangeState: (change: Change, state: ChangeState | null) => void;
}

export function Redlines({ states, onChangeState }: RedlinesProps) {
  const { pin } = useCitations();
  const accepted = changes.filter((change) => states[change.id] === 'accepted').length;
  const rejected = changes.filter((change) => states[change.id] === 'rejected').length;

  return (
    <Paper component="section" className={classes.redlines} aria-labelledby="clerk-redlines">
      <div className={classes.redlinesHead}>
        <b id="clerk-redlines">Proposed changes to Draft 3</b>
        <span>
          {accepted} accepted, {rejected} rejected, {changes.length - accepted - rejected} to review
        </span>
      </div>

      {changes.map((change) => {
        const state = states[change.id];
        return (
          <div key={change.id} className={classes.change}>
            <div className={classes.changeTop}>
              <b>Clause {change.clause}</b>
              {state && (
                <span className={classes.state} data-state={state}>
                  {state === 'accepted' ? <IconCheck stroke={1.7} /> : <IconX stroke={1.7} />}
                  {state === 'accepted' ? 'Accepted' : 'Rejected'}
                </span>
              )}
            </div>
            <div className={classes.diff}>
              <del>{change.del}</del> <ins>{change.ins}</ins>
            </div>
            <div className={classes.changeActions}>
              {state ? (
                <Button variant="default" size="xs" onClick={() => onChangeState(change, null)}>
                  Undo
                </Button>
              ) : (
                <>
                  <Button
                    size="xs"
                    leftSection={<IconCheck stroke={1.7} />}
                    onClick={() => onChangeState(change, 'accepted')}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="default"
                    size="xs"
                    onClick={() => onChangeState(change, 'rejected')}
                  >
                    Reject
                  </Button>
                </>
              )}
              <Button variant="default" size="xs" onClick={() => pin(change.ref)}>
                Show in lease
              </Button>
            </div>
          </div>
        );
      })}
    </Paper>
  );
}
