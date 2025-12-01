import React, { CSSProperties, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { mergeRefs } from '../use-merged-ref/use-merged-ref';

function getAutoWidthDuration(width: number | string) {
  if (!width || typeof width === 'string') {
    return 0;
  }
  const constant = width / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export function getElementWidth(elementRef: React.RefObject<HTMLElement | null>) {
  return elementRef.current ? elementRef.current.scrollWidth : 'auto';
}

export interface UseHorizontalCollapseInput {
  /** Expanded state  */
  expanded: boolean;

  /** Transition duration in milliseconds, by default calculated based on content width */
  transitionDuration?: number;

  /** Transition timing function, `ease` by default */
  transitionTimingFunction?: string;

  /** Called when transition ends */
  onTransitionEnd?: () => void;

  /** Called when transition starts */
  onTransitionStart?: () => void;

  /** If true, collapsed content is kept in the DOM and hidden with `display: none` styles */
  keepMounted?: boolean;
}

interface GetHorizontalCollapsePropsInput {
  style?: CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

interface GetHorizontalCollapsePropsReturnValue {
  'aria-hidden': boolean;
  inert: boolean;
  ref: React.RefCallback<HTMLDivElement>;
  onTransitionEnd: (event: React.TransitionEvent<Element>) => void;
  style: React.CSSProperties;
}

export type UseHorizontalCollapseState = 'entering' | 'entered' | 'exiting' | 'exited';

export interface UseHorizontalCollapseReturnValue {
  /** Current transition state */
  state: UseHorizontalCollapseState;

  /** Props to pass down to the collapsible element */
  getCollapseProps: (
    input?: GetHorizontalCollapsePropsInput
  ) => GetHorizontalCollapsePropsReturnValue;
}

export function useHorizontalCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd,
  onTransitionStart,
  expanded,
  keepMounted,
}: UseHorizontalCollapseInput): UseHorizontalCollapseReturnValue {
  const collapsedStyles = {
    width: 0,
    overflow: 'hidden',
    ...(keepMounted ? {} : { display: 'none' }),
  };

  const elementRef = useRef<HTMLElement>(null);
  const [styles, setStylesRaw] = useState<CSSProperties>(expanded ? {} : collapsedStyles);
  const [state, setState] = useState<UseHorizontalCollapseState>(expanded ? 'entered' : 'exited');
  const setStyles = (newStyles: React.SetStateAction<CSSProperties>) => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: CSSProperties) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };

  const getTransitionStyles = (width: number | string) => {
    const duration = transitionDuration || getAutoWidthDuration(width);
    return {
      transition: `width ${duration}ms ${transitionTimingFunction}, opacity ${duration}ms ${transitionTimingFunction}`,
    };
  };

  useDidUpdate(() => {
    const shouldTransition = transitionDuration !== 0;

    if (shouldTransition) {
      onTransitionStart?.();
    }

    if (expanded) {
      window.requestAnimationFrame(() => {
        flushSync(() => setState('entering'));
        mergeStyles({ willChange: 'width', display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          const width = getElementWidth(elementRef);
          mergeStyles({ ...getTransitionStyles(width), width });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        flushSync(() => setState('exiting'));
        const width = getElementWidth(elementRef);
        mergeStyles({ ...getTransitionStyles(width), willChange: 'width', width });
        window.requestAnimationFrame(() => mergeStyles({ width: 0, overflow: 'hidden' }));
      });
    }
  }, [expanded, onTransitionStart]);

  const handleTransitionEnd = (event: React.TransitionEvent): void => {
    if (event.target !== elementRef.current || event.propertyName !== 'width') {
      return;
    }

    if (expanded) {
      const width = getElementWidth(elementRef);

      if (width === styles.width) {
        setStyles({});
      } else {
        mergeStyles({ width });
      }

      setState('entered');
      onTransitionEnd?.();
    } else if (styles.width === 0) {
      setStyles(collapsedStyles);
      setState('exited');
      onTransitionEnd?.();
    }
  };

  return {
    state,
    getCollapseProps: (input) => ({
      'aria-hidden': !expanded,
      inert: !expanded,
      ref: mergeRefs(elementRef, input?.ref),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: 'border-box', ...input?.style, ...styles },
    }),
  };
}
