import { useMantineEnv } from '../../core';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransition } from './transitions';
import { useTransition } from './use-transition';

export interface TransitionProps {
  /** If set, the element is not unmounted from the DOM when hidden, `display: none` styles are applied instead */
  keepMounted?: boolean;

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

  if (transitionDuration === 0 || env === 'test') {
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

export namespace Transition {
  export type Props = TransitionProps;
  export type Override = TransitionOverride;
}
