import React, { useState } from 'react';
import {
  DefaultProps,
  Selectors,
  TextInput,
  getDefaultZIndex,
  MantineColor,
  TextInputProps,
  Modal,
  ModalProps,
  ModalStylesNames,
  useComponentDefaultProps,
} from '@mantine/core';
import { getGroupedOptions } from '@mantine/utils';
import { useDidUpdate } from '@mantine/hooks';
import { DefaultAction, DefaultActionProps } from '../DefaultAction/DefaultAction';
import { ActionsList, ActionsListStylesNames } from '../ActionsList/ActionsList';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';

export type SpotlightStylesNames =
  | Selectors<typeof useStyles>
  | Exclude<ModalStylesNames, 'close' | 'header' | 'title'>
  | ActionsListStylesNames;

export interface InnerSpotlightProps
  extends Omit<
      ModalProps,
      'styles' | 'classNames' | 'title' | 'withCloseButton' | 'opened' | 'onClose'
    >,
    DefaultProps<SpotlightStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

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

  /** Should user query be highlighted in actions title */
  highlightQuery?: boolean;

  /** The highlight color */
  highlightColor?: MantineColor;

  /** Props spread to search input */
  searchInputProps?: TextInputProps;
}

interface SpotlightProps extends InnerSpotlightProps {
  actions: SpotlightAction[];
  onClose(): void;
  opened: boolean;
  query: string;
  onQueryChange(query: string): void;
}

const defaultProps: Partial<SpotlightProps> = {
  closeOnActionTrigger: true,
  highlightQuery: false,
  size: 600,
  yOffset: 120,
  filter: filterActions,
  limit: 10,
  actionComponent: DefaultAction,
  actionsWrapperComponent: 'div',
  zIndex: getDefaultZIndex('max'),
  overlayProps: { opacity: 0.2, blur: 7 },
};

export function Spotlight(props: SpotlightProps) {
  const {
    query,
    onQueryChange,
    actions,
    onClose,
    opened,
    classNames,
    styles,
    closeOnActionTrigger,
    highlightQuery,
    highlightColor,
    className,
    searchPlaceholder,
    searchIcon,
    filter,
    nothingFoundMessage,
    limit,
    actionComponent,
    actionsWrapperComponent: ActionsWrapper,
    searchInputProps,
    variant,
    target,
    radius,
    ...others
  } = useComponentDefaultProps('Spotlight', defaultProps, props);

  const [hovered, setHovered] = useState(-1);
  const [IMEOpen, setIMEOpen] = useState(false);
  const { classes } = useStyles(null, { name: 'Spotlight', classNames, styles, variant });

  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };

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
    if (IMEOpen) {
      return;
    }

    switch (event.key) {
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
        if ((action?.closeOnTrigger ?? closeOnActionTrigger) && action?.onTrigger) {
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
    <Modal
      opened={opened}
      onClose={handleClose}
      padding={0}
      radius={radius}
      classNames={classNames}
      styles={styles}
      withCloseButton={false}
      {...others}
    >
      <TextInput
        size="lg"
        {...searchInputProps}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onCompositionStart={() => setIMEOpen(true)}
        onCompositionEnd={() => setIMEOpen(false)}
        classNames={{ input: classes.searchInput }}
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
          onActionHover={() => setHovered(-1)}
          onActionTrigger={(action) => {
            action.onTrigger(action);
            (action.closeOnTrigger ?? closeOnActionTrigger) && handleClose();
          }}
          styles={styles}
          classNames={classNames}
          radius={radius}
          variant={variant}
        />
      </ActionsWrapper>
    </Modal>
  );
}

Spotlight.displayName = '@mantine/spotlight/Spotlight';
