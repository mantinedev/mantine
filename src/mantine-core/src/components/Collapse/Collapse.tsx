import React, { useState, useRef, useEffect } from 'react';
import type { TransitionEvent } from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';

import { useMantineTheme } from '../../theme';

export interface CollapseProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Any valid JSX Element */
  children: React.ReactNode;

  /** Controlled state (controls if Collapse is opened or closed) */
  in: boolean;

  /** Callback invoked when animation finish */
  onTransitionEnd?: () => void;

  /** Transition duration for collapse transitions in ms */
  transitionDuration?: number;

  /** Transition timing function for collapse transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export function Collapse({
  children,
  in: isOpened,
  transitionDuration = 300,
  transitionTimingFunction,
  className,
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
    if (onTransitionEnd && event.propertyName === 'height') {
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
        className={className}
        role="region"
        ref={collapseRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          ...style,
          overflow: 'hidden',
          transition: `height ${reduceMotion ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
          height: isOpened ? height : '0px',
        }}
        {...others}
      >
        <div
          style={{
            opacity: isOpened ? 1 : 0,
            transition: `opacity ${reduceMotion ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
          }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
   );
}

Collapse.displayName = '@mantine/core/Collapse';
