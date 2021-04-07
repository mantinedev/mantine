import React from 'react';
import { Transition as RTGTransition } from 'react-transition-group';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransition } from './transitions';

export { GroupedTransition } from './GroupedTransition';

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
            duration,
            state: transitionState,
            timingFunction: timingFunction || theme.transitionTimingFunction,
          })
        )
      }
    </RTGTransition>
  );
}

Transition.displayName = '@mantine/theme/Transition';
