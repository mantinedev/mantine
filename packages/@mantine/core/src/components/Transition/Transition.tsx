import React from 'react';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransition } from './transitions';
import { useTransition } from './use-transition';

export interface TransitionProps {
  /** If set element will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
  keepMounted?: boolean;

  /** Transition name or object */
  transition?: MantineTransition;

  /** Transition duration in ms, `250` by default */
  duration?: number;

  /** Exit transition duration in ms, `250` by default */
  exitDuration?: number;

  /** Transition timing function, `theme.transitionTimingFunction` by default */
  timingFunction?: string;

  /** Determines whether component should be mounted to the DOM */
  mounted: boolean;

  /** Render function with transition styles argument */
  children: (styles: React.CSSProperties) => JSX.Element;

  /** Called when exit transition ends */
  onExited?: () => void;

  /** Called when exit transition starts */
  onExit?: () => void;

  /** Called when enter transition starts */
  onEnter?: () => void;

  /** Called when enter transition ends */
  onEntered?: () => void;
}

export type TransitionOverride = Partial<Omit<TransitionProps, 'mounted'>>;

export function Transition({
  keepMounted,
  transition = 'fade',
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = 'ease',
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
    return mounted ? <>{children({})}</> : keepMounted ? children({ display: 'none' }) : null;
  }

  return transitionStatus === 'exited' ? (
    keepMounted ? (
      children({ display: 'none' })
    ) : null
  ) : (
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
