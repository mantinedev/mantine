import React, { useState } from 'react';
import {
  OptionalPortal,
  GroupedTransition,
  MantineTransition,
  Overlay,
  Paper,
  DefaultProps,
  Selectors,
  MantineShadow,
  TextInput,
  getDefaultZIndex,
  getGroupedOptions,
  MantineNumberSize,
  MantineColor,
} from '@mantine/core';
import { useScrollLock, useFocusTrap, useDidUpdate, useFocusReturn } from '@mantine/hooks';
import { DefaultAction, DefaultActionProps } from '../DefaultAction/DefaultAction';
import { ActionsList, ActionsListStylesNames } from '../ActionsList/ActionsList';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames = Selectors<typeof useStyles> | ActionsListStylesNames;

export interface InnerSpotlightProps
  extends DefaultProps<SpotlightStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Should spotlight be rendered within Portal */
  withinPortal?: boolean;

  /** Premade transition or transition object */
  transition?: MantineTransition;

  /** Transition duration in ms, set to 0 to disable all transitions */
  transitionDuration?: number;

  /** Backdrop overlay color, e.g. #000 */
  overlayColor?: string;

  /** Backdrop overlay opacity (0-1), e.g. 0.65 */
  overlayOpacity?: number;

  /** Backdrop overlay blur in px */
  overlayBlur?: number;

  /** Value from theme.shadows or any valid css box-shadow value */
  shadow?: MantineShadow;

  /** Radius from theme.radius, or number to set border-radius in px, defaults to theme.defaultRadius */
  radius?: MantineNumberSize;

  /** Should spotlight be rendered in the center of the screen */
  centered?: boolean;

  /** Max spotlight width */
  maxWidth?: number;

  /** Top offset when spotlight is not centered */
  topOffset?: number;

  /** Search input placeholder */
  searchPlaceholder?: string;

  /** Search input icon */
  searchIcon?: React.ReactNode;

  /** Function used to determine how actions will be filtered based on user input */
  filter?(query: string, actions: SpotlightAction[]): SpotlightAction[];

  /** Message displayed when actions were not found */
  nothingFoundMessage?: React.ReactNode;

  /** Number of actions displayed at a time */
  limit?: number;

  /** Should spotlight be closed when action is triggered */
  closeOnActionTrigger?: boolean;

  /** Component that is used to render actions */
  actionComponent?: React.FC<DefaultActionProps>;

  /** Component that is used to wrap actions list */
  actionsWrapperComponent?: React.FC<{ children: React.ReactNode }> | string;

  /** Spotlight z-index */
  zIndex?: number;

  /** Should user query be highlighted in actions title */
  highlightQuery?: boolean;

  /** The highlight color */
  highlightColor?: MantineColor;
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
  transitionDuration,
  classNames,
  styles,
  overlayColor = '#000',
  overlayOpacity = 0.25,
  overlayBlur = 3,
  shadow = 'md',
  radius = 'sm',
  centered = false,
  closeOnActionTrigger = true,
  highlightQuery = false,
  highlightColor,
  maxWidth = 600,
  topOffset = 120,
  className,
  searchPlaceholder,
  searchIcon,
  filter = filterActions,
  nothingFoundMessage,
  limit = 10,
  actionComponent = DefaultAction,
  actionsWrapperComponent: ActionsWrapper = 'div',
  zIndex = getDefaultZIndex('modal'),
  ...others
}: SpotlightProps) {
  const [hovered, setHovered] = useState(-1);
  const { classes, cx } = useStyles(
    { centered, maxWidth, topOffset, radius },
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
  const groupedWithLabels = getGroupedOptions(filteredActions).items;
  const groupedActions = groupedWithLabels
    .map((item) => (item.type === 'item' ? item.item : undefined))
    .filter((item) => item);

  useDidUpdate(() => {
    if (groupedActions.length - 1 < hovered) {
      setHovered(groupedActions.length - 1);
    }
  }, [groupedActions.length]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < groupedActions.length - 1 ? current + 1 : 0));
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : groupedActions.length - 1));
        break;
      }

      case 'Enter': {
        event.preventDefault();
        const action = groupedActions[hovered];
        action?.onTrigger?.(action);
        if (closeOnActionTrigger && action?.onTrigger) {
          handleClose();
        }
        break;
      }

      case 'Escape': {
        event.preventDefault();
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
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex}>
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
                radius={radius}
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
                    highlightQuery={highlightQuery}
                    highlightColor={highlightColor}
                    actions={groupedWithLabels}
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
                    radius={radius}
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
                  blur={overlayBlur}
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
