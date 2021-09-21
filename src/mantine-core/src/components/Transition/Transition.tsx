import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { useTransition } from './use-transition';
import { MantineTransition, transitions } from './transitions';

export { GroupedTransition } from './GroupedTransition';
export type { GroupedTransitionProps } from './GroupedTransition';

export const AVAILABLE_TRANSITIONS = Object.keys(transitions) as Array<keyof typeof transitions>;

export type { MantineTransition };

export interface TransitionProps extends Omit<DefaultProps, 'className'> {
  /** Predefined transition name or transition styles */
  transition: MantineTransition;

  /** Transition duration in ms */
  duration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  timingFunction?: string;

  /** When true, component will be mounted */
  mounted: boolean;

  /** Render function with transition styles argument */
  children(styles: React.CSSProperties): React.ReactElement<any, any>;

  /** Calls when exit transition ends */
  onExited?: () => void;

  /** Calls when exit transition starts */
  onExit?: () => void;

  /** Calls when enter transition starts */
  onEnter?: () => void;

  /** Calls when enter transition ends */
  onEntered?: () => void;
}

export function Transition({
  transition,
  duration = 250,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited,
}: TransitionProps) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
  });

  if (transitionDuration === 0) {
    return mounted ? <>{children({})}</> : null;
  }

  return transitionStatus === 'exited' ? null : (
    <>
      {children(
        getTransitionStyles({
          transition,
          duration: transitionDuration,
          state: transitionStatus,
          timingFunction: transitionTimingFunction,
        })
      )}
    </>
  );
}

Transition.displayName = '@mantine/core/Transition';
