'use client';

import { createContext, use } from 'react';
import { refLabels } from './data';
import classes from './Clerk.module.css';

interface CitationsContextValue {
  pinned: string | null;
  hovered: string | null;
  pin: (ref: string | null) => void;
  hover: (ref: string, on: boolean, scroll?: boolean) => void;
}

export const CitationsContext = createContext<CitationsContextValue | null>(null);

export function useCitations() {
  const ctx = use(CitationsContext);
  if (!ctx) {
    throw new Error('CitationsContext is missing');
  }
  return ctx;
}

const CITE_PATTERN = /\[\[(s[\d-]+)\]\]/g;

export function getCitedRefs(text: string) {
  return Array.from(text.matchAll(CITE_PATTERN), (match) => match[1]);
}

export type CiteCounter = Map<string, number>;

interface CiteProps {
  citeRef: string;
  number: number;
}

function Cite({ citeRef, number }: CiteProps) {
  const { pinned, pin, hover } = useCitations();

  return (
    <button
      type="button"
      className={classes.cite}
      data-on={pinned === citeRef || undefined}
      aria-label={`Citation ${number}, clause ${refLabels[citeRef]}`}
      onClick={() => pin(citeRef)}
      onMouseEnter={() => hover(citeRef, true)}
      onMouseLeave={() => hover(citeRef, false)}
      onFocus={() => hover(citeRef, true)}
      onBlur={() => hover(citeRef, false)}
    >
      {number}
    </button>
  );
}

export function renderRich(text: string, counter: CiteCounter, keyPrefix: string) {
  return text.split(/(\[\[s[\d-]+\]\])/).map((part, index) => {
    const match = /^\[\[(s[\d-]+)\]\]$/.exec(part);
    if (!match) {
      return part;
    }
    const ref = match[1];
    if (!counter.has(ref)) {
      counter.set(ref, counter.size + 1);
    }
    return <Cite key={`${keyPrefix}-${index}`} citeRef={ref} number={counter.get(ref)!} />;
  });
}
