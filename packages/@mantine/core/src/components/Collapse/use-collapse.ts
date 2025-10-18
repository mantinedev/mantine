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

export function getElementHeight(
  el: React.RefObject<HTMLElement | null> | { current?: { scrollHeight: number } }
) {
  return el?.current ? el.current.scrollHeight : 'auto';
}

interface UseCollapseInput {
  opened: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  onTransitionEnd?: () => void;
  keepMounted?: boolean;
}

interface GetCollapseProps {
  [key: string]: unknown;

  style?: CSSProperties;
  onTransitionEnd?: (e: TransitionEvent) => void;
  refKey?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const collapsedHeight = 0;
const getCollapsedStyles = (keepMounted: boolean): CSSProperties => ({
  height: 0,
  overflow: 'hidden',
  ...(keepMounted ? {} : { display: 'none' }),
});

export function useCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd = () => {},
  opened,
  keepMounted = false,
}: UseCollapseInput): (props: GetCollapseProps) => Record<string, any> {
  const el = useRef<HTMLElement | null>(null);
  const collapsedStyles = getCollapsedStyles(keepMounted);
  const [styles, setStylesRaw] = useState<CSSProperties>(opened ? {} : collapsedStyles);
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
    if (opened) {
      window.requestAnimationFrame(() => {
        mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
        window.requestAnimationFrame(() => {
          const height = getElementHeight(el);
          mergeStyles({ ...getTransitionStyles(height), height });
        });
      });
    } else {
      window.requestAnimationFrame(() => {
        const height = getElementHeight(el);
        mergeStyles({ ...getTransitionStyles(height), willChange: 'height', height });
        window.requestAnimationFrame(() =>
          mergeStyles({ height: collapsedHeight, overflow: 'hidden' })
        );
      });
    }
  }, [opened]);

  const handleTransitionEnd = (e: React.TransitionEvent): void => {
    if (e.target !== el.current || e.propertyName !== 'height') {
      return;
    }

    if (opened) {
      const height = getElementHeight(el);

      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }

      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };

  const getCollapseProps = ({ style = {}, refKey = 'ref', ...rest }: GetCollapseProps = {}) => {
    return {
      'aria-hidden': !opened,
      inert: !opened,
      ...rest,
      [refKey]: mergeRefs(el, rest[refKey] as any),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: 'border-box', ...style, ...styles },
    };
  };

  return getCollapseProps;
}
