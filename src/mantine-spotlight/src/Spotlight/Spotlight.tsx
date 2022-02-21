import React, { useState } from 'react';
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
import { useScrollLock, useFocusTrap, useDidUpdate, useFocusReturn } from '@mantine/hooks';
import {
  DefaultSpotlightAction,
  DefaultSpotlightActionStylesNames,
  DefaultSpotlightActionProps,
} from '../DefaultSpotlightAction/DefaultSpotlightAction';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = ClassNames<typeof useStyles> | DefaultSpotlightActionStylesNames;

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
  closeOnActionTrigger?: boolean;
  actionComponent?: React.FC<DefaultSpotlightActionProps>;
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
  closeOnActionTrigger = true,
  maxWidth = 600,
  topOffset = 120,
  className,
  searchPlaceholder,
  searchIcon,
  filter = filterActions,
  nothingFoundMessage,
  limit = 10,
  actionComponent: Action = DefaultSpotlightAction,
  ...others
}: SpotlightProps) {
  const [hovered, setHovered] = useState(-1);
  const { classes, cx } = useStyles(
    { centered, maxWidth, topOffset },
    { classNames, styles, name: 'Spotlight' }
  );

  const [, lockScroll] = useScrollLock();
  const focusTrapRef = useFocusTrap(opened);

  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };

  useFocusReturn({ transitionDuration: 0, opened });

  const filteredActions = filter(query, actions).slice(0, limit);

  useDidUpdate(() => {
    if (filteredActions.length - 1 < hovered) {
      setHovered(filteredActions.length - 1);
    }
  }, [filteredActions.length]);

  const items = filteredActions.map((action, index) => (
    <Action
      key={action.id}
      action={action}
      hovered={index === hovered}
      onMouseEnter={() => setHovered(index)}
      classNames={classNames}
      styles={styles}
      onTrigger={() => {
        action.onTrigger(action);
        closeOnActionTrigger && handleClose();
      }}
    />
  ));

  const shouldRenderActions =
    items.length > 0 || (!!nothingFoundMessage && query.trim().length > 0);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'ArrowDown': {
        setHovered((current) => (current < actions.length - 1 ? current + 1 : 0));
        break;
      }

      case 'ArrowUp': {
        setHovered((current) => (current > 0 ? current - 1 : actions.length - 1));
        break;
      }

      case 'Enter': {
        const action = actions[hovered];
        action?.onTrigger?.(action);
        if (closeOnActionTrigger && action?.onTrigger) {
          handleClose();
        }
        break;
      }

      case 'Escape': {
        handleClose();
      }
    }
  };

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
                onMouseLeave={resetHovered}
              >
                <TextInput
                  value={query}
                  onChange={(event) => onQueryChange(event.currentTarget.value)}
                  onKeyDown={handleInputKeyDown}
                  classNames={{ input: classes.searchInput }}
                  size="lg"
                  placeholder={searchPlaceholder}
                  icon={searchIcon}
                  onMouseEnter={resetHovered}
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
                  onMouseDown={handleClose}
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
