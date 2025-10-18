import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { mergeRefs, useDidUpdate } from '@mantine/hooks';
import { CSSProperties } from '../../core';

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

interface UseCollapseInput {
  expanded: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  onTransitionEnd?: () => void;
  keepMounted?: boolean;
}

interface GetCollapsePropsInput {
  style?: CSSProperties;
  refKey?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export function useCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd = () => {},
  expanded,
  keepMounted = false,
}: UseCollapseInput): (input?: GetCollapsePropsInput) => Record<string, any> {
  const collapsedStyles = {
    height: 0,
    overflow: 'hidden',
    ...(keepMounted ? {} : { display: 'none' }),
  };

  const elementRef = useRef<HTMLElement>(null);
  const [styles, setStylesRaw] = useState<CSSProperties>(expanded ? {} : collapsedStyles);
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
        mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          const height = getElementHeight(elementRef);
          mergeStyles({ ...getTransitionStyles(height), height });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
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

      onTransitionEnd();
    } else if (styles.height === 0) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };

  return (input?: GetCollapsePropsInput) => ({
    'aria-hidden': !expanded,
    inert: !expanded,
    [input?.refKey || 'ref']: mergeRefs(elementRef, input?.ref),
    onTransitionEnd: handleTransitionEnd,
    style: { boxSizing: 'border-box', ...input?.style, ...styles },
  });
}
