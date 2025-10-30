import React, { CSSProperties, useRef, useState } from 'react';
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

export interface UseCollapseInput {
  /** Expanded state  */
  expanded: boolean;

  /** Transition duration in milliseconds, by default calculated based on content height */
  transitionDuration?: number;

  /** Transition timing function, `ease` by default */
  transitionTimingFunction?: string;

  /** Called when transition ends */
  onTransitionEnd?: () => void;

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

export interface UseCollapseReturnValue {
  isTransitioning: boolean;
  getCollapseProps: (input?: GetCollapsePropsInput) => GetCollapsePropsReturnValue;
}

export function useCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd = () => {},
  expanded,
  keepMounted = false,
}: UseCollapseInput): UseCollapseReturnValue {
  const collapsedStyles = {
    height: 0,
    overflow: 'hidden',
    ...(keepMounted ? {} : { display: 'none' }),
  };

  const elementRef = useRef<HTMLElement>(null);
  const [styles, setStylesRaw] = useState<CSSProperties>(expanded ? {} : collapsedStyles);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const setStyles = (newStyles: React.SetStateAction<CSSProperties>) => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: CSSProperties) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };

  const getTransitionStyles = (height: number | string) => {
    const duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${duration}ms ${transitionTimingFunction}, opacity ${duration}ms ${transitionTimingFunction}`,
    };
  };

  useDidUpdate(() => {
    if (expanded) {
      window.requestAnimationFrame(() => {
        setIsTransitioning(true);
        mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          const height = getElementHeight(elementRef);
          mergeStyles({ ...getTransitionStyles(height), height });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        setIsTransitioning(true);
        const height = getElementHeight(elementRef);
        mergeStyles({ ...getTransitionStyles(height), willChange: 'height', height });
        window.requestAnimationFrame(() => mergeStyles({ height: 0, overflow: 'hidden' }));
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

      setIsTransitioning(false);
      onTransitionEnd();
    } else if (styles.height === 0) {
      setStyles(collapsedStyles);
      setIsTransitioning(false);
      onTransitionEnd();
    }
  };

  return {
    isTransitioning,
    getCollapseProps: (input) => ({
      'aria-hidden': !expanded,
      inert: !expanded,
      ref: mergeRefs(elementRef, input?.ref),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: 'border-box', ...input?.style, ...styles },
    }),
  };
}
