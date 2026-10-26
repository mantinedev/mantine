'use client';

import { IconPlus } from '@tabler/icons-react';
import { ActionIcon, NavLink, ScrollArea } from '@mantine/core';
import { matters } from './data';
import classes from './Clerk.module.css';

interface MattersListProps {
  onSelect: (index: number) => void;
}

export function MattersList({ onSelect }: MattersListProps) {
  return (
    <>
      <div className={classes.mattersHead}>
        <b>Matters</b>
        <ActionIcon variant="subtle" aria-label="New matter">
          <IconPlus size={18} stroke={1.7} />
        </ActionIcon>
      </div>
      <ScrollArea className={classes.matterScroll} scrollbars="y">
        <ul className={classes.matterList}>
          {matters.map((matter, index) => (
            <li key={matter.client}>
              <NavLink
                component="button"
                type="button"
                active={index === 0}
                aria-current={index === 0 ? 'true' : undefined}
                label={matter.client}
                description={
                  <>
                    <span className={classes.matterName}>{matter.matter}</span>
                    <small className={classes.matterDate}>{matter.updated}</small>
                  </>
                }
                onClick={() => onSelect(index)}
              />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
}
