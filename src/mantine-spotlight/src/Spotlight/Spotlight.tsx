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
  TextInput,
  Text,
} from '@mantine/core';
import { useScrollLock, useFocusTrap } from '@mantine/hooks';
import { Action, ActionStylesNames } from '../Action/Action';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = ClassNames<typeof useStyles> | ActionStylesNames;

export interface InnerSpotlightProps
  extends DefaultProps<SpotlightStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  withinPortal?: boolean;
  transition?: MantineTransition;
  transitionDuration?: number;
  overlayColor?: string;
  overlayOpacity?: number;
  shadow?: MantineShadow;
  centered?: boolean;
  maxWidth?: number;
  topOffset?: number;
  searchPlaceholder?: string;
  searchIcon?: React.ReactNode;
  filter?(query: string, actions: SpotlightAction[]): SpotlightAction[];
  nothingFoundMessage?: React.ReactNode;
  limit?: number;
}

interface SpotlightProps extends InnerSpotlightProps {
  actions: SpotlightAction[];
  onClose(): void;
  opened: boolean;
  query: string;
  onQueryChange(query: string): void;
}

export function Spotlight({
  query,
  onQueryChange,
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
  centered = false,
  maxWidth = 600,
  topOffset = 120,
  className,
  searchPlaceholder,
  searchIcon,
  filter = filterActions,
  nothingFoundMessage,
  limit = 10,
  ...others
}: SpotlightProps) {
  const { classes, cx } = useStyles(
    { centered, maxWidth, topOffset },
    { classNames, styles, name: 'Spotlight' }
  );

  const [, lockScroll] = useScrollLock();
  const focusTrapRef = useFocusTrap(opened);

  const items = filter(query, actions)
    .slice(0, limit)
    .map((action) => (
      <Action key={action.id} action={action} classNames={classNames} styles={styles} />
    ));

  const shouldRenderActions = items.length > 0 || !!nothingFoundMessage;

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
            <div className={classes.inner} ref={focusTrapRef}>
              <Paper
                style={transitionStyles.spotlight}
                className={classes.spotlight}
                shadow={shadow}
              >
                <TextInput
                  value={query}
                  onChange={(event) => onQueryChange(event.currentTarget.value)}
                  classNames={{ input: classes.searchInput }}
                  size="lg"
                  placeholder={searchPlaceholder}
                  icon={searchIcon}
                />

                {shouldRenderActions && (
                  <div className={classes.actions}>
                    {items.length > 0 ? (
                      items
                    ) : (
                      <Text
                        color="dimmed"
                        className={classes.nothingFound}
                        align="center"
                        size="lg"
                        py="md"
                      >
                        {nothingFoundMessage}
                      </Text>
                    )}
                  </div>
                )}
              </Paper>

              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  zIndex={1}
                  onMouseDown={onClose}
                  color={overlayColor}
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
