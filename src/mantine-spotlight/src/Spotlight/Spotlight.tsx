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
  groupOptions,
} from '@mantine/core';
import { useScrollLock, useFocusTrap, useDidUpdate, useFocusReturn } from '@mantine/hooks';
import {
  DefaultSpotlightAction,
  DefaultSpotlightActionProps,
} from '../DefaultSpotlightAction/DefaultSpotlightAction';
import { ActionsList, ActionsListStylesNames } from '../ActionsList/ActionsList';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = ClassNames<typeof useStyles> | ActionsListStylesNames;

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
  actionsWrapperComponent?: React.FC<{ children: React.ReactNode }> | string;
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
  actionComponent = DefaultSpotlightAction,
  actionsWrapperComponent: ActionsWrapper = 'div',
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

  const groupedActions: SpotlightAction[] = groupOptions({ data: actions });
  const filteredActions = filter(query, groupedActions).slice(0, limit);

  useDidUpdate(() => {
    if (filteredActions.length - 1 < hovered) {
      setHovered(filteredActions.length - 1);
    }
  }, [filteredActions.length]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'ArrowDown': {
        setHovered((current) => (current < filteredActions.length - 1 ? current + 1 : 0));
        break;
      }

      case 'ArrowUp': {
        setHovered((current) => (current > 0 ? current - 1 : filteredActions.length - 1));
        break;
      }

      case 'Enter': {
        const action = filteredActions[hovered];
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.currentTarget.value);
    if (hovered === -1) {
      setHovered(0);
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
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  classNames={{ input: classes.searchInput }}
                  size="lg"
                  placeholder={searchPlaceholder}
                  icon={searchIcon}
                  onMouseEnter={resetHovered}
                />
                <ActionsWrapper>
                  <ActionsList
                    actions={filteredActions}
                    actionComponent={actionComponent}
                    hovered={hovered}
                    query={query}
                    nothingFoundMessage={nothingFoundMessage}
                    onActionHover={setHovered}
                    onActionTrigger={(action) => {
                      action.onTrigger(action);
                      closeOnActionTrigger && handleClose();
                    }}
                    styles={styles}
                    classNames={classNames}
                  />
                </ActionsWrapper>
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
