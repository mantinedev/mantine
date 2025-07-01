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

const raf = typeof window !== 'undefined' && window.requestAnimationFrame;

interface UseCollapse {
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
  ref?: React.ForwardedRef<HTMLDivElement>;
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
}: UseCollapse): (props: GetCollapseProps) => Record<string, any> {
  const el = useRef<HTMLElement | null>(null);
  const collapsedStyles = getCollapsedStyles(keepMounted);
  const [styles, setStylesRaw] = useState<CSSProperties>(opened ? {} : collapsedStyles);
  const setStyles = (newStyles: {} | ((oldStyles: {}) => {})): void => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: {}): void => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };

  function getTransitionStyles(height: number | string): {
    transition: string;
  } {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}, opacity ${_duration}ms ${transitionTimingFunction}`,
    };
  }

  useDidUpdate(() => {
    if (typeof raf === 'function') {
      if (opened) {
        raf(() => {
          mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles({ ...getTransitionStyles(height), height });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles({ ...getTransitionStyles(height), willChange: 'height', height });
          raf(() => mergeStyles({ height: collapsedHeight, overflow: 'hidden' }));
        });
      }
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

  function getCollapseProps({ style = {}, refKey = 'ref', ...rest }: GetCollapseProps = {}) {
    const theirRef: any = rest[refKey];
    const props: any = {
      'aria-hidden': !opened,
      ...rest,
      [refKey]: mergeRefs(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: 'border-box', ...style, ...styles },
    };

    // Handle inert attribute based on React version
    if (React.version.startsWith('18')) {
      // React 18: Use empty string for inert=true, undefined for inert=false
      if (!opened) {
        props.inert = '';
      }
      // Don't set inert property when opened=true (leave it undefined)
    } else {
      // React 19+: Use boolean values
      props.inert = !opened;
    }

    return props;
  }

  return getCollapseProps;
}
