import React from 'react';
import { DefaultProps, ClassNames, Text } from '@mantine/core';
import type { SpotlightAction } from '../types';
import type { DefaultActionProps, DefaultActionStylesNames } from '../DefaultAction/DefaultAction';
import useStyles from './ActionsList.styles';

export type ActionsListStylesNames = ClassNames<typeof useStyles> | DefaultActionStylesNames;

export interface ActionsListProps extends DefaultProps<ActionsListStylesNames> {
  actions: SpotlightAction[];
  actionComponent?: React.FC<DefaultActionProps>;
  hovered: number;
  query: string;
  nothingFoundMessage?: React.ReactNode;
  onActionHover(index: number): void;
  onActionTrigger(action: SpotlightAction): void;
}

export function ActionsList({
  actions,
  styles,
  classNames,
  actionComponent: Action,
  hovered,
  onActionHover,
  onActionTrigger,
  query,
  nothingFoundMessage,
}: ActionsListProps) {
  const { classes } = useStyles(null, { classNames, styles, name: 'Spotlight' });
  const items = actions.map((action, index) => (
    <Action
      key={action.id}
      action={action}
      hovered={index === hovered}
      onMouseEnter={() => onActionHover(index)}
      classNames={classNames}
      styles={styles}
      onTrigger={() => onActionTrigger(action)}
    />
  ));

  const shouldRenderActions =
    items.length > 0 || (!!nothingFoundMessage && query.trim().length > 0);

  const getAction = (action: SpotlightAction, index: number) => (
    <Action
      key={action.id}
      action={action}
      hovered={index === hovered}
      onMouseEnter={() => onActionHover(index)}
      onMouseLeave={() => onActionHover(-1)}
      classNames={classNames}
      styles={styles}
      onTrigger={() => onActionTrigger(action)}
    />
  );

  const unGroupedItems: React.ReactElement<any>[] = [];
  const groupedItems: React.ReactElement<any>[] = [];
  let groupName = null;

  actions.forEach((item, index) => {
    if (!item.group) {
      unGroupedItems.push(getAction(item, index));
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(
          <Text className={classes.actionsGroup} color="dimmed">
            {item.group}
          </Text>
        );
      }
      groupedItems.push(getAction(item, index));
    }
  });

  return (
    <>
      {shouldRenderActions && (
        <div className={classes.actions}>
          {groupedItems.length > 0 || unGroupedItems.length > 0 ? (
            <>
              {groupedItems}
              {unGroupedItems}
            </>
          ) : (
            <Text color="dimmed" className={classes.nothingFound} align="center" size="lg" py="md">
              {nothingFoundMessage}
            </Text>
          )}
        </div>
      )}
    </>
  );
}

ActionsList.displayName = '@mantine/spotlight/ActionsList';
