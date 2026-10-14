import React, { CSSProperties, useEffectEvent, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { mergeRefs } from '../use-merged-ref/use-merged-ref';

function getAutoSizeDuration(size: number) {
  if (!size) {
    return 0;
  }
  const constant = size / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export type CollapseDimension = 'height' | 'width';

type ExplicitSize = CSSProperties['height'] | CSSProperties['width'];

function getOffsetSize(element: HTMLElement, dimension: CollapseDimension) {
  return dimension === 'height' ? element.offsetHeight : element.offsetWidth;
}

function isTransitionRunning(element: HTMLElement, dimension: CollapseDimension) {
  return (
    element
      .getAnimations?.()
      .some((animation) => (animation as CSSTransition).transitionProperty === dimension) ?? false
  );
}

function measureSize(element: HTMLElement, dimension: CollapseDimension, value: string) {
  const inline = element.style[dimension];
  element.style[dimension] = value;
  const size = getOffsetSize(element, dimension);
  element.style[dimension] = inline;
  element.getBoundingClientRect();
  return size;
}

function getExpandedSize(
  element: HTMLElement,
  dimension: CollapseDimension,
  explicitSize: ExplicitSize,
  lastSize: number | null
) {
  if (lastSize !== null && isTransitionRunning(element, dimension)) {
    return lastSize;
  }

  const value =
    explicitSize === undefined || explicitSize === null
      ? 'auto'
      : typeof explicitSize === 'number'
        ? `${explicitSize}px`
        : explicitSize;

  return measureSize(element, dimension, value);
}

function getCollapseStartSize(element: HTMLElement, dimension: CollapseDimension) {
  return isTransitionRunning(element, dimension) ? null : getOffsetSize(element, dimension);
}

function isMeasured(size: number) {
  return size > 0;
}

export interface UseCollapseInput {
  /** Expanded state  */
  expanded: boolean;

  /** Transition duration in milliseconds, by default calculated based on content size */
  transitionDuration?: number;

  /** Transition timing function, `ease` by default */
  transitionTimingFunction?: string;

  /** Called when transition ends */
  onTransitionEnd?: () => void;

  /** Called when transition starts */
  onTransitionStart?: () => void;

  /** If set, the collapsed element is hidden with zero size (`height: 0` or `width: 0`) and `overflow: hidden` only. By default, `display: none` is also applied. Content always stays in the DOM. @default false */
  keepMounted?: boolean;
}

export interface GetCollapsePropsInput {
  style?: CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

export interface GetCollapsePropsReturnValue {
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

export function useCollapseTransition(
  {
    transitionDuration,
    transitionTimingFunction = 'ease',
    onTransitionEnd,
    onTransitionStart,
    expanded,
    keepMounted,
  }: UseCollapseInput,
  dimension: CollapseDimension
): UseCollapseReturnValue {
  const collapsedStyles: CSSProperties = {
    [dimension]: 0,
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

  const getTransitionStyles = (size: number) => {
    const duration = transitionDuration ?? getAutoSizeDuration(size);
    return {
      transition: `${dimension} ${duration}ms ${transitionTimingFunction}, opacity ${duration}ms ${transitionTimingFunction}`,
    };
  };

  const transitionRef = useRef(0);
  const lastSizeRef = useRef<number | null>(null);
  const explicitSizeRef = useRef<ExplicitSize>(undefined);

  useDidUpdate(() => {
    transitionRef.current += 1;
    const transitionId = transitionRef.current;
    const isCurrentTransition = () => transitionRef.current === transitionId;
    const shouldTransition = transitionDuration !== 0;

    if (shouldTransition) {
      onTransitionStartEvent();
    }

    if (!shouldTransition || !elementRef.current) {
      setStylesRaw(expanded ? {} : collapsedStyles);
      setState(expanded ? 'entered' : 'exited');
      return;
    }

    if (expanded) {
      window.requestAnimationFrame(() => {
        if (!isCurrentTransition() || !elementRef.current) {
          return;
        }

        mergeStyles({ willChange: dimension, display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          if (!isCurrentTransition() || !elementRef.current) {
            return;
          }

          flushSync(() => setState('entering'));
          const element = elementRef.current;
          const isRunning = isTransitionRunning(element, dimension);
          const renderedSize = getOffsetSize(element, dimension);
          const size = getExpandedSize(
            element,
            dimension,
            explicitSizeRef.current,
            isRunning ? lastSizeRef.current : null
          );
          lastSizeRef.current = size;

          if (!isMeasured(size) || (!isRunning && renderedSize === size)) {
            setStyles({});
            setState('entered');
            onTransitionEndEvent();
            return;
          }

          mergeStyles({ ...getTransitionStyles(size), [dimension]: size });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        if (!isCurrentTransition() || !elementRef.current) {
          return;
        }

        flushSync(() => setState('exiting'));
        const size = getCollapseStartSize(elementRef.current, dimension);

        if (size !== null) {
          if (!isMeasured(size)) {
            setStyles(collapsedStyles);
            setState('exited');
            onTransitionEndEvent();
            return;
          }

          lastSizeRef.current = size;
          mergeStyles({ ...getTransitionStyles(size), willChange: dimension, [dimension]: size });
        }

        window.requestAnimationFrame(() => {
          if (!isCurrentTransition() || !elementRef.current) {
            return;
          }

          mergeStyles({ [dimension]: 0, overflow: 'hidden' });
        });
      });
    }
  }, [expanded]);

  const handleTransitionEnd = (event: React.TransitionEvent): void => {
    if (event.target !== elementRef.current || event.propertyName !== dimension) {
      return;
    }

    if (expanded) {
      const size = getExpandedSize(elementRef.current, dimension, explicitSizeRef.current, null);
      lastSizeRef.current = size;

      if (size === styles[dimension]) {
        setStyles({});
      } else {
        mergeStyles({ [dimension]: size });
      }

      setState('entered');
      onTransitionEndEvent();
    } else if (styles[dimension] === 0) {
      setStyles(collapsedStyles);
      setState('exited');
      onTransitionEndEvent();
    }
  };

  return {
    state,
    getCollapseProps: (input) => {
      explicitSizeRef.current = input?.style?.[dimension];
      return {
        'aria-hidden': !expanded,
        inert: !expanded,
        ref: mergeRefs(elementRef, input?.ref),
        onTransitionEnd: handleTransitionEnd,
        style: { boxSizing: 'border-box', ...input?.style, ...styles },
      };
    },
  };
}
