import React from 'react';
import {
  OptionalPortal,
  GroupedTransition,
  MantineTransition,
  Overlay,
  DefaultProps,
  ClassNames,
} from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import type { SpotlightAction } from '../types';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = ClassNames<typeof useStyles>;

interface SpotlightProps extends DefaultProps<SpotlightStylesNames> {
  withinPortal: boolean;
  actions: SpotlightAction[];
  onClose(): void;
  opened: boolean;
  transition: MantineTransition;
  transitionDuration: number;
}

export function Spotlight({
  actions,
  onClose,
  opened,
  withinPortal,
  transition,
  transitionDuration,
  classNames,
  styles,
}: SpotlightProps) {
  const { classes } = useStyles(null, { classNames, styles, name: 'Spotlight' });
  const [, lockScroll] = useScrollLock();

  return (
    <OptionalPortal withinPortal={withinPortal}>
      <GroupedTransition
        onExited={() => lockScroll(false)}
        onEntered={() => lockScroll(true)}
        mounted={opened}
        transitions={{
          spotlight: {
            duration: transitionDuration,
            transition,
            timingFunction: 'ease',
          },
          overlay: {
            duration: transitionDuration / 2,
            transition: 'fade',
            timingFunction: 'ease',
          },
        }}
      >
        {(styles) => (
          <div style={styles.spotlight} className={classes.spotlight}>
            spotlight
          </div>
        )}
      </GroupedTransition>
    </OptionalPortal>
  );
}

Spotlight.displayName = '@mantine/spotlight/Spotlight';
