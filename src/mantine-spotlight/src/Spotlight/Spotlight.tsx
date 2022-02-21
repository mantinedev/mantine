import React from 'react';
import {
  OptionalPortal,
  GroupedTransition,
  MantineTransition,
  Overlay,
  Paper,
  DefaultProps,
  ClassNames,
  MantineShadow,
} from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import type { SpotlightAction } from '../types';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = ClassNames<typeof useStyles>;

export interface InnerSpotlightProps
  extends DefaultProps<SpotlightStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  withinPortal?: boolean;
  transition?: MantineTransition;
  transitionDuration?: number;
  overlayColor?: string;
  overlayOpacity?: number;
  shadow?: MantineShadow;
  center?: boolean;
  maxWidth?: number;
}

interface SpotlightProps extends InnerSpotlightProps {
  actions: SpotlightAction[];
  onClose(): void;
  opened: boolean;
}

export function Spotlight({
  actions,
  onClose,
  opened,
  withinPortal,
  transition = 'pop',
  transitionDuration = 150,
  classNames,
  styles,
  overlayColor = '#000',
  overlayOpacity = 0.65,
  shadow = 'md',
  center = false,
  maxWidth = 600,
  className,
  ...others
}: SpotlightProps) {
  const { classes, theme, cx } = useStyles(
    { center, maxWidth },
    { classNames, styles, name: 'Spotlight' }
  );
  const _overlayColor =
    overlayColor || theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white;
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
        {(transitionStyles) => (
          <div className={cx(classes.root, className)} {...others}>
            <div className={classes.inner}>
              <Paper
                style={transitionStyles.spotlight}
                className={classes.spotlight}
                shadow={shadow}
              >
                spotlight
              </Paper>

              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  zIndex={1}
                  onMouseDown={onClose}
                  color={_overlayColor}
                  opacity={overlayOpacity}
                />
              </div>
            </div>
          </div>
        )}
      </GroupedTransition>
    </OptionalPortal>
  );
}

Spotlight.displayName = '@mantine/spotlight/Spotlight';
