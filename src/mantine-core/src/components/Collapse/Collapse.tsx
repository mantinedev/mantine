import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { useReducedMotion, useMergedRef } from '@mantine/hooks';
import { useMantineTheme, useExtractedMargins } from '@mantine/styles';

export interface CollapseProps extends React.ComponentPropsWithoutRef<'div'> {
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

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      children,
      in: isOpened,
      transitionDuration = 200,
      transitionTimingFunction = 'ease',
      style,
      onTransitionEnd,
      ...others
    }: CollapseProps,
    ref
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const theme = useMantineTheme();
    const reduceMotion = useReducedMotion();
    const collapseRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<`${number}px` | 'auto'>('auto');
    const duration = reduceMotion ? 0 : transitionDuration;
    const timingFunction = transitionTimingFunction || theme.transitionTimingFunction;

    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
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
        ref={useMergedRef(collapseRef, ref)}
        onTransitionEnd={handleTransitionEnd}
        style={{
          ...mergedStyles,
          overflow: 'hidden',
          transition: `height ${duration}ms ${timingFunction}`,
          willChange: 'contents',
          height: isOpened ? height : '0px',
        }}
        {...rest}
      >
        <div
          ref={contentRef}
          style={{
            opacity: isOpened ? 1 : 0,
            transition: `opacity ${duration}ms ${timingFunction}`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

Collapse.displayName = '@mantine/core/Collapse';
