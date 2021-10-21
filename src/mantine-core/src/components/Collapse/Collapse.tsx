import React from 'react';
import { useReducedMotion } from '@mantine/hooks';
import { useExtractedMargins } from '@mantine/styles';
import { useCollapse } from './use-collapse';

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

  /** Should opacity be animated */
  animateOpacity?: boolean;
}

export function Collapse({
  children,
  in: opened,
  transitionDuration = 200,
  transitionTimingFunction = 'ease',
  style,
  onTransitionEnd,
  animateOpacity = true,
  ...others
}: CollapseProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
  });

  return (
    <div {...getCollapseProps({ style: mergedStyles, ...rest })}>
      <div
        style={{
          opacity: opened ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
}

Collapse.displayName = '@mantine/core/Collapse';
