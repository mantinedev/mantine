import React, { useState, useRef, useEffect } from 'react';
import type { TransitionEvent } from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';

import { useMantineTheme } from '@mantine/theme';

export interface CollapseProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Content that should be collapsed */
  children: React.ReactNode;

  /** Opened state */
  in: boolean;

  /** Called each time transition ends */
  onTransitionEnd?: () => void;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Transition timing function */
  transitionTimingFunction?: string;
}

export function Collapse({
  children,
  in: isOpened,
  transitionDuration = 200,
  transitionTimingFunction = 'ease',
  style,
  onTransitionEnd,
  ...others
}: CollapseProps) {
  const forceUpdate = useForceUpdate();
  const theme = useMantineTheme();
  const reduceMotion = useReducedMotion();

  const collapseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<`${number}px` | 'auto'>('auto');

  useWindowEvent('resize', forceUpdate);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (typeof onTransitionEnd === 'function' && event.propertyName === 'height') {
      onTransitionEnd();
    }
  };

  useEffect(() => {
    const content = contentRef?.current;

    if (content) {
      const { height: boundingHeight } = content.getBoundingClientRect();
      setHeight(`${boundingHeight}px`);
    }
  }, [children]);

  return (
    <div
      ref={collapseRef}
      onTransitionEnd={handleTransitionEnd}
      style={{
        ...style,
        overflow: 'hidden',
        transition: `height ${reduceMotion ? 0 : transitionDuration}ms ${
          transitionTimingFunction || theme.transitionTimingFunction
        }`,
        height: isOpened ? height : '0px',
      }}
      {...others}
    >
      <div
        ref={contentRef}
        style={{
          opacity: isOpened ? 1 : 0,
          transition: `opacity ${reduceMotion ? 0 : transitionDuration}ms ${
            transitionTimingFunction || theme.transitionTimingFunction
          }`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

Collapse.displayName = '@mantine/core/Collapse';
