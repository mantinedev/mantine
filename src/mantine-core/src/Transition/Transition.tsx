import React from 'react';
import { Transition as RTGTransition } from 'react-transition-group';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransition, transitions } from './transitions';

export { GroupedTransition } from './GroupedTransition';

export const AVAILABLE_TRANSITIONS = Object.keys(transitions) as Array<keyof typeof transitions>;

export type { MantineTransition };

interface TransitionProps extends Omit<DefaultProps, 'className'> {
  /** Predefined transition name or transition styles */
  transition: MantineTransition;

  /** Transition duration in ms */
  duration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  timingFunction?: string;

  /** When true, component will be mounted */
  mounted: boolean;

  /** Render function with transition styles argument */
  children(styles: React.CSSProperties): React.ReactNode;
}

export function Transition({
  transition,
  duration = 250,
  mounted,
  children,
  themeOverride,
  timingFunction,
}: TransitionProps) {
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();

  return (
    <RTGTransition
      in={mounted}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(transitionState) =>
        children(
          getTransitionStyles({
            transition,
            duration: reduceMotion ? 0 : duration,
            state: transitionState,
            timingFunction: timingFunction || theme.transitionTimingFunction,
          })
        )
      }
    </RTGTransition>
  );
}

Transition.displayName = '@mantine/core/Transition';
