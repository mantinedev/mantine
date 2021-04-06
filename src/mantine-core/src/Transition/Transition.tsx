import React from 'react';
import { Transition as RTGTransition } from 'react-transition-group';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { MantineTransitionName, MantineTransition } from './transitions';

interface TransitionProps extends Omit<DefaultProps, 'className'> {
  transition: MantineTransitionName | MantineTransition;
  duration?: number;
  timingFunction?: string;
  mounted: boolean;
  children(animation: ReturnType<typeof getTransitionStyles>): React.ReactNode;
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
