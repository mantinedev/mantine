'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IconFileText, IconX } from '@tabler/icons-react';
import { ActionIcon, ScrollArea, Title } from '@mantine/core';
import { useCitations } from './citations';
import type { Pane } from './Clerk';
import { type Change, lease, refLabels, type Sentence } from './data';
import classes from './LeaseDoc.module.css';

interface Mark {
  ref: string;
  risk: boolean;
  y: number;
}

interface Thumb {
  top: number;
  height: number;
}

interface LeaseDocProps {
  ref: React.Ref<HTMLElement>;
  cited: Map<string, boolean>;
  amended: Change[];
  pane: Pane;
  scrollTarget: { ref: string; id: number } | null;
}

function SentenceText({ sentence, change }: { sentence: Sentence; change?: Change }) {
  const { pinned, hovered } = useCitations();
  const index = change ? sentence.text.indexOf(change.del) : -1;

  return (
    <span
      className={classes.sentence}
      data-sentence={sentence.ref}
      data-pin={pinned === sentence.ref || undefined}
      data-hl={(hovered === sentence.ref && pinned !== sentence.ref) || undefined}
    >
      {change && index >= 0 ? (
        <>
          {sentence.text.slice(0, index)}
          <ins>{change.ins}</ins>
          {sentence.text.slice(index + change.del.length)}
        </>
      ) : (
        sentence.text
      )}
    </span>
  );
}

function getSentenceOffset(viewport: HTMLElement, element: Element) {
  return (
    element.getBoundingClientRect().top - viewport.getBoundingClientRect().top + viewport.scrollTop
  );
}

export function LeaseDoc({ ref, cited, amended, pane, scrollTarget }: LeaseDocProps) {
  const { pinned, hovered, pin, hover } = useCitations();
  const viewportRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const [marks, setMarks] = useState<Mark[]>([]);
  const [thumb, setThumb] = useState<Thumb | null>(null);

  const syncThumb = useCallback(() => {
    const viewport = viewportRef.current;
    const strip = stripRef.current;
    if (!viewport || !strip || !strip.clientHeight) {
      return;
    }
    const height = strip.clientHeight;
    const scrollHeight = viewport.scrollHeight || 1;
    setThumb({
      top: (viewport.scrollTop / scrollHeight) * height,
      height: Math.max(24, (viewport.clientHeight / scrollHeight) * height),
    });
  }, []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const strip = stripRef.current;
    if (!viewport || !strip || !strip.clientHeight) {
      return;
    }
    const height = strip.clientHeight;
    const scrollHeight = viewport.scrollHeight || 1;
    const next: Mark[] = [];
    cited.forEach((risk, citeRef) => {
      const element = viewport.querySelector(`[data-sentence="${citeRef}"]`);
      if (!element) {
        return;
      }
      const center =
        getSentenceOffset(viewport, element) + element.getBoundingClientRect().height / 2;
      next.push({
        ref: citeRef,
        risk,
        y: Math.min(height - 10, Math.max(10, (center / scrollHeight) * height)),
      });
    });
    setMarks(next);
    syncThumb();
  }, [cited, syncThumb]);

  useLayoutEffect(() => {
    measure();
  }, [measure, amended, pane]);

  useEffect(() => {
    const observer = new ResizeObserver(() => measure());
    if (stripRef.current) {
      observer.observe(stripRef.current);
    }
    if (sheetRef.current) {
      observer.observe(sheetRef.current);
    }
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!scrollTarget || !viewport) {
      return;
    }
    const element = viewport.querySelector(`[data-sentence="${scrollTarget.ref}"]`);
    if (!element) {
      return;
    }
    const top = getSentenceOffset(viewport, element) - viewport.clientHeight * 0.3;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    viewport.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [scrollTarget, pane]);

  const changeFor = (sentence: Sentence) => amended.find((change) => change.ref === sentence.ref);

  return (
    <section ref={ref} className={classes.root} aria-label="Lease">
      <div className={classes.head}>
        <IconFileText size={18} stroke={1.7} className={classes.headIcon} />
        <div className={classes.headText}>
          <div className={classes.title}>Lease, Unit 2, 14 Constitution Street</div>
          <div className={classes.sub}>Draft 3 from Hollis Property, 34 pages</div>
        </div>
        <ActionIcon
          variant="subtle"
          aria-label="Clear highlight"
          title="Clear highlight"
          onClick={() => pin(null)}
        >
          <IconX size={18} stroke={1.7} />
        </ActionIcon>
      </div>

      <div className={classes.body}>
        <ScrollArea
          className={classes.scroll}
          viewportRef={viewportRef}
          onScrollPositionChange={syncThumb}
        >
          <div className={classes.scrollInner}>
            <article ref={sheetRef} className={classes.sheet}>
              <Title order={2} className={classes.sheetTitle}>
                Lease
              </Title>
              <div className={classes.between}>
                between Hollis Property Ltd (the Landlord) and Crumb &amp; Co Ltd (the Tenant)
              </div>
              {lease.map((clause) => (
                <div key={clause.number}>
                  {clause.page && (
                    <hr className={classes.pageBreak} data-page={`Page ${clause.page}`} />
                  )}
                  <section className={classes.clause}>
                    <Title order={4} className={classes.clauseTitle}>
                      <span>{clause.number}.</span>
                      {clause.heading}
                    </Title>
                    {clause.sentences.map((sentence) => (
                      <p key={sentence.ref}>
                        <span className={classes.number}>{sentence.label}</span>
                        <SentenceText sentence={sentence} change={changeFor(sentence)} />
                      </p>
                    ))}
                  </section>
                </div>
              ))}
            </article>
          </div>
        </ScrollArea>

        <div ref={stripRef} className={classes.strip} aria-label="Cited clauses">
          {thumb && (
            <div className={classes.thumb} style={{ top: thumb.top, height: thumb.height }} />
          )}
          {marks.map((mark) => (
            <button
              key={mark.ref}
              type="button"
              className={classes.mark}
              data-risk={mark.risk || undefined}
              data-on={hovered === mark.ref || pinned === mark.ref || undefined}
              style={{ top: mark.y }}
              aria-label={`Go to clause ${refLabels[mark.ref]}`}
              onClick={() => pin(mark.ref)}
              onMouseEnter={() => hover(mark.ref, true, false)}
              onMouseLeave={() => hover(mark.ref, false)}
            >
              {refLabels[mark.ref]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
