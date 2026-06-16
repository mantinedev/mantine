import { Activity } from 'react';
import { useMantineEnv } from '../../core';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransition } from './transitions';
import { useTransition } from './use-transition';

export interface TransitionProps {
  /** If set, the element is kept in the DOM when hidden. React 19 `Activity` is used to preserve state while the element is not visible. */
  keepMounted?: boolean;

  /**
   * Controls how the element is hidden when `keepMounted` is set:
   * `'activity'` – hidden with React 19 `Activity` component,
   * `'display-none'` – hidden with `display: none` styles
   * @default 'activity'
   */
  keepMountedMode?: 'activity' | 'display-none';

  /** Transition name or object */
  transition?: MantineTransition;

  /** Transition duration in ms @default 250 */
  duration?: number;

  /** Exit transition duration in ms @default 250 */
  exitDuration?: number;

  /** Transition timing function @default theme.transitionTimingFunction */
  timingFunction?: string;

  /** Determines whether component should be mounted to the DOM */
  mounted: boolean;

  /** Render function with transition styles argument */
  children: (styles: React.CSSProperties) => React.JSX.Element;

  /** Called when exit transition ends */
  onExited?: () => void;

  /** Called when exit transition starts */
  onExit?: () => void;

  /** Called when enter transition starts */
  onEnter?: () => void;

  /** Called when enter transition ends */
  onEntered?: () => void;

  /** Delay in ms before enter transition starts */
  enterDelay?: number;

  /** Delay in ms before exit transition starts */
  exitDelay?: number;
}

export type TransitionOverride = Partial<Omit<TransitionProps, 'mounted'>>;

export function Transition({
  keepMounted,
  keepMountedMode = 'activity',
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
  enterDelay,
  exitDelay,
}: TransitionProps) {
  const env = useMantineEnv();
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay,
  });

  if (env === 'test') {
    return mounted ? <>{children({})}</> : keepMounted ? children({ display: 'none' }) : null;
  }

  if (transitionDuration === 0) {
    if (keepMounted) {
      if (keepMountedMode === 'display-none') {
        return mounted ? <>{children({})}</> : children({ display: 'none' });
      }

      return <Activity mode={mounted ? 'visible' : 'hidden'}>{children({})}</Activity>;
    }
    return mounted ? <>{children({})}</> : null;
  }

  const isExited = transitionStatus === 'exited';

  if (keepMounted) {
    const keepMountedChildren = children(
      isExited
        ? keepMountedMode === 'display-none'
          ? { display: 'none' }
          : {}
        : getTransitionStyles({
            transition,
            duration: transitionDuration,
            state: transitionStatus,
            timingFunction: transitionTimingFunction,
          })
    );

    if (keepMountedMode === 'display-none') {
      return keepMountedChildren;
    }

    return <Activity mode={isExited ? 'hidden' : 'visible'}>{keepMountedChildren}</Activity>;
  }

  return isExited ? null : (
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

export namespace Transition {
  export type Props = TransitionProps;
  export type Override = TransitionOverride;
}
