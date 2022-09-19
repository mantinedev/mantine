import React, { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useDidUpdate, mergeRefs } from '@mantine/hooks';

function getAutoHeightDuration(height: number | string) {
  if (!height || typeof height === 'string') {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

export function getElementHeight(
  el: React.RefObject<HTMLElement> | { current?: { scrollHeight: number } }
) {
  return el?.current ? el.current.scrollHeight : 'auto';
}

export function getElementWidth(
  el: React.RefObject<HTMLElement> | { current?: { scrollWidth: number } }
) {
  return el?.current ? el.current.scrollWidth : 'auto';
}

const raf = typeof window !== 'undefined' && window.requestAnimationFrame;

interface UseCollapse {
  axis: 'x' | 'y';
  opened: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  onTransitionEnd?: () => void;
}

interface GetCollapseProps {
  [key: string]: unknown;
  style?: React.CSSProperties;
  onTransitionEnd?: (e: TransitionEvent) => void;
  refKey?: string;
  ref?: React.MutableRefObject<HTMLDivElement> | ((node: HTMLDivElement) => void);
}

export function useCollapse({
  transitionDuration,
  transitionTimingFunction = 'ease',
  onTransitionEnd = () => {},
  opened,
  axis,
}: UseCollapse): (props: GetCollapseProps) => Record<string, any> {
  const el = useRef<HTMLElement | null>(null);
  const collapsedHeight = '0px';
  const [styles, setStylesRaw] = useState<React.CSSProperties>({});

  const setStyles = (newStyles: {} | ((oldStyles: {}) => {})): void => {
    flushSync(() => setStylesRaw(newStyles));
  };

  const mergeStyles = (newStyles: {}): void => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };

  function getTransitionStyles(height: number | string): {
    transition?: string;
    transitionProperty?: string;
    transitionDuration?: string;
    transitionTimingFunction?: string;
  } {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transitionProperty: `${axis === 'x' ? 'width' : 'height'}`,
      transitionDuration: `${_duration}ms`,
      transitionTimingFunction: `${transitionTimingFunction}`,
    };
  }

  const getDefaultSizes = () => {
    const oldStyles = styles;
    setStyles({});
    const sizes = { width: getElementWidth(el), height: getElementHeight(el) };
    setStyles(oldStyles);
    return sizes;
  };

  const getCollapsedStyles = () => {
    const { height } = getDefaultSizes();
    return {
      x: { height, width: '0px', overflow: 'hidden' },
      y: { display: 'none', height: '0px', overflow: 'hidden' },
    };
  };

  useEffect(() => {
    raf(() => {
      const { x, y } = getCollapsedStyles();
      if (axis === 'x' && !opened) {
        setStyles({ ...x });
      } else if (axis === 'y' && !opened) {
        setStyles({ ...y });
      }
    });
  }, []);

  // y axis
  useDidUpdate(() => {
    if (axis === 'x') return;

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
  }, [opened]);

  // x axis
  useDidUpdate(() => {
    if (axis === 'y') return;

    if (opened) {
      raf(() => {
        const { width } = getDefaultSizes();
        mergeStyles({
          display: 'block',
          overflow: 'hidden',
          willChange: 'width',
          flexShrink: 0,
        });
        raf(() => {
          mergeStyles({ ...getTransitionStyles(width), width });
        });
      });
    } else {
      raf(() => {
        const { width, height } = getDefaultSizes();
        mergeStyles({
          ...getTransitionStyles(width),
          flexShrink: 0,
          willChange: 'width',
          width,
          height,
        });
        raf(() => mergeStyles({ width: '0px', overflow: 'hidden' }));
      });
    }
  }, [opened]);

  const handleTransitionEnd = (e: React.TransitionEvent): void => {
    if (e.target !== el.current || !(e.propertyName === 'width' || 'height')) {
      return;
    }

    const { height, width } = getDefaultSizes();

    if (opened) {
      if (width === styles.width || height === styles.height) {
        setStyles({});
      }

      onTransitionEnd();
    } else if (styles.width === '0px' || styles.height === '0px') {
      const { x, y } = getCollapsedStyles();

      if (axis === 'x') setStyles(x);
      else setStyles(y);

      onTransitionEnd();
    }
  };

  function getCollapseProps({ style = {}, refKey = 'ref', ...rest }: GetCollapseProps = {}) {
    const theirRef: any = rest[refKey];
    return {
      'aria-hidden': !opened,
      ...rest,
      [refKey]: mergeRefs(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: 'border-box', ...style, ...styles },
    };
  }

  return getCollapseProps;
}
