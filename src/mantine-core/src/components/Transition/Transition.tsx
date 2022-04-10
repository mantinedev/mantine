import React from 'react';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { useTransition } from './use-transition';
import { MantineTransition } from './transitions';

export interface TransitionProps {
  /** Predefined transition name or transition styles */
  transition: MantineTransition;

  /** Transition duration in ms */
  duration?: number;

  /** Exit transition duration in ms */
  exitDuration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  timingFunction?: string;

  /** When true, component will be mounted */
  mounted: boolean;

  /** When true, component will never unmounted */
  stayMounted?: boolean;

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
  exitDuration = duration,
  mounted,
  stayMounted = false,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited,
}: TransitionProps) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
  });

  if (transitionDuration === 0) {
    return mounted || stayMounted ? <>{children({})}</> : null;
  }

  return transitionStatus === 'exited' && !stayMounted ? null : (
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
