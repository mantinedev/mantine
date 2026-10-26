'use client';

import type { CSSProperties, ReactNode } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';
import { SparkIcon } from './BrandIcons';
import classes from './Pipeline.module.css';

export type StepState = 'done' | 'active' | 'pending';

interface AnswerProps {
  subtitle: string;
  progress: number;
  resultsOnly: boolean;
  actions: ReactNode;
  children: ReactNode;
}

export function Answer({ subtitle, progress, resultsOnly, actions, children }: AnswerProps) {
  return (
    <article className={classes.answer} data-results-only={resultsOnly || undefined}>
      <div className={classes.head}>
        <span className={classes.bot}>
          <SparkIcon />
        </span>
        <span>
          <b>Quarry</b>
          <br />
          <span className={classes.headSub}>{subtitle}</span>
        </span>
      </div>
      <ol className={classes.pipe} style={{ '--progress': `${progress}%` } as CSSProperties}>
        {children}
      </ol>
      <div className={classes.actions}>{actions}</div>
    </article>
  );
}

interface PipeStepProps {
  icon: ReactNode;
  title: string;
  meta?: string;
  state: StepState;
  tech?: boolean;
  expanded: boolean;
  onToggle: () => void;
  children?: ReactNode;
}

export function PipeStep({
  icon,
  title,
  meta,
  state,
  tech,
  expanded,
  onToggle,
  children,
}: PipeStepProps) {
  return (
    <li className={classes.step} data-state={state} data-tech={tech || undefined}>
      <span className={classes.node}>{icon}</span>
      <div className={classes.stepMain}>
        <UnstyledButton className={classes.stepHead} aria-expanded={expanded} onClick={onToggle}>
          <span className={classes.stepTitle}>{title}</span>
          {meta !== undefined && <span className={classes.stepMeta}>{meta}</span>}
          <IconChevronDown size={16} stroke={1.8} className={classes.chevron} />
        </UnstyledButton>
        {expanded && children && <div className={classes.stepBody}>{children}</div>}
      </div>
    </li>
  );
}

export function TableChip({ children }: { children: ReactNode }) {
  return <span className={classes.tableChip}>{children}</span>;
}

export function TableChips({ names }: { names: string[] }) {
  return (
    <div className={classes.chips}>
      {names.map((name) => (
        <TableChip key={name}>{name}</TableChip>
      ))}
    </div>
  );
}

interface FindingProps {
  confidence: string;
  children: ReactNode;
  caveats?: string[];
}

export function Finding({ confidence, children, caveats }: FindingProps) {
  return (
    <div className={classes.finding}>
      <span className={classes.confidence}>{confidence}</span>
      <p>{children}</p>
      {caveats && (
        <ul className={classes.caveats}>
          {caveats.map((caveat) => (
            <li key={caveat}>{caveat}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
