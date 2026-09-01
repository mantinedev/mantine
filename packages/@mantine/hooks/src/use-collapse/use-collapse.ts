import React, { CSSProperties, useEffectEvent, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { mergeRefs } from '../use-merged-ref/use-merged-ref';

function getAutoHeightDuration(height: number | string) {
  if (!height || typeof height === 'string') {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export function getElementHeight(elementRef: React.RefObject<HTMLElement | null>) {
  return elementRef.current ? elementRef.current.scrollHeight : 'auto';
}

export function isMeasured(size: number | string): size is number {
  return typeof size === 'number' && size > 0;
}

export interface UseCollapseInput {
  /** Expanded state  */
  expanded: boolean;

  /** Transition duration in milliseconds, by default calculated based on content height */
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

interface GetCollapsePropsInput {
  style?: CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

interface GetCollapsePropsReturnValue {
  'aria-hidden': boolean;
  inert: boolean;
  ref: React.RefCallback<HTMLDivElement>;
  onTransitionEnd: (event: React.TransitionEvent<Element>) => void;
  style: React.CSSProperties;
}

export type UseCollapseState = 'entering' | 'entered' | 'exiting' | 'exited';

export interface UseCollapseReturnValue {
  /** Current transition state */
  state: UseCollapseState;

  /** Props to pass down to the collapsible element */
  getCollapseProps: (input?: GetCollapsePropsInput) => GetCollapsePropsReturnValue;
}

export function useCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd,
  onTransitionStart,
  expanded,
  keepMounted,
}: UseCollapseInput): UseCollapseReturnValue {
  const collapsedStyles = {
    height: 0,
    overflow: 'hidden',
    ...(keepMounted ? {} : { display: 'none' }),
  };

  const onTransitionStartEvent = useEffectEvent(() => onTransitionStart?.());
  const onTransitionEndEvent = useEffectEvent(() => onTransitionEnd?.());

  const elementRef = useRef<HTMLElement>(null);
  const [styles, setStylesRaw] = useState<CSSProperties>(expanded ? {} : collapsedStyles);
  const [state, setState] = useState<UseCollapseState>(expanded ? 'entered' : 'exited');
  const setStyles = (newStyles: React.SetStateAction<CSSProperties>) => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: CSSProperties) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };

  const getTransitionStyles = (height: number | string) => {
    const duration = transitionDuration ?? getAutoHeightDuration(height);
    return {
      transition: `height ${duration}ms ${transitionTimingFunction}, opacity ${duration}ms ${transitionTimingFunction}`,
    };
  };

  const transitionRef = useRef(0);

  useDidUpdate(() => {
    transitionRef.current += 1;
    const transitionId = transitionRef.current;
    const isCurrentTransition = () => transitionRef.current === transitionId;
    const shouldTransition = transitionDuration !== 0;

    if (shouldTransition) {
      onTransitionStartEvent();
    }

    if (expanded) {
      window.requestAnimationFrame(() => {
        if (!isCurrentTransition() || !elementRef.current) {
          return;
        }

        flushSync(() => setState('entering'));
        mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          if (!isCurrentTransition() || !elementRef.current) {
            return;
          }

          const height = getElementHeight(elementRef);

          if (!isMeasured(height)) {
            setStyles({});
            setState('entered');
            onTransitionEndEvent();
            return;
          }

          mergeStyles({ ...getTransitionStyles(height), height });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        if (!isCurrentTransition() || !elementRef.current) {
          return;
        }

        flushSync(() => setState('exiting'));
        const height = getElementHeight(elementRef);

        if (!isMeasured(height)) {
          setStyles(collapsedStyles);
          setState('exited');
          onTransitionEndEvent();
          return;
        }

        mergeStyles({ ...getTransitionStyles(height), willChange: 'height', height });
        window.requestAnimationFrame(() => {
          if (!isCurrentTransition() || !elementRef.current) {
            return;
          }

          mergeStyles({ height: 0, overflow: 'hidden' });
        });
      });
    }
  }, [expanded]);

  const handleTransitionEnd = (event: React.TransitionEvent): void => {
    if (event.target !== elementRef.current || event.propertyName !== 'height') {
      return;
    }

    if (expanded) {
      const height = getElementHeight(elementRef);

      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }

      setState('entered');
      onTransitionEndEvent();
    } else if (styles.height === 0) {
      setStyles(collapsedStyles);
      setState('exited');
      onTransitionEndEvent();
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

export namespace useCollapse {
  export type Input = UseCollapseInput;
  export type ReturnValue = UseCollapseReturnValue;
  export type State = UseCollapseState;
}
