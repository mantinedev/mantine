import React from 'react';
import { Transition } from 'react-transition-group';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { MantineTransition } from './transitions';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';

interface GroupedTransitionItem {
  duration: number;
  timingFunction?: React.CSSProperties['transitionTimingFunction'];
  transition: MantineTransition;
}

interface GroupedTransitionProps extends Omit<DefaultProps, 'className'> {
  /** Transitions group */
  transitions: Record<string, GroupedTransitionItem>;

  /** When true, component will ne mounted */
  mounted: boolean;

  /** Render function with transition group styles argument */
  children(styles: Record<string, React.CSSProperties>): React.ReactNode;
}

export function GroupedTransition({
  transitions,
  mounted,
  children,
  themeOverride,
}: GroupedTransitionProps) {
  const theme = useMantineTheme(themeOverride);

  const duration = Math.max(
    ...Object.keys(transitions).map((transition) => transitions[transition].duration)
  );

  return (
    <Transition
      in={mounted}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(transitionState) => {
        const transitionsStyles = Object.keys(transitions).reduce((acc, transition) => {
          acc[transition] = getTransitionStyles({
            duration: transitions[transition].duration,
            transition: transitions[transition].transition,
            timingFunction:
              transitions[transition].timingFunction || theme.transitionTimingFunction,
            state: transitionState,
          });

          return acc;
        }, {});

        return children(transitionsStyles);
      }}
    </Transition>
  );
}

GroupedTransition.displayName = '@mantine/core/GroupedTransition';
