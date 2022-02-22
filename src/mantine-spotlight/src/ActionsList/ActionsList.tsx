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

function getGroupedData<T extends any[]>(data: T) {
  type Item = { type: 'item'; item: T[number]; index: number };
  type Label = { type: 'label'; label: string };

  const unGrouped: Item[] = [];
  const grouped: (Item | Label)[] = [];
  let groupName = null;

  data.forEach((item, index) => {
    if (!item.group) {
      unGrouped.push({ type: 'item', item, index });
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        grouped.push({ type: 'label', label: groupName });
      }
      grouped.push({ type: 'item', item, index });
    }
  });

  return {
    grouped,
    unGrouped,
    items: [...grouped, ...unGrouped],
    hasItems: grouped.length > 0 || unGrouped.length > 0,
  };
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
  const grouped = getGroupedData(actions);
  const { classes } = useStyles(null, { classNames, styles, name: 'Spotlight' });
  const items = grouped.items.map((item) => {
    if (item.type === 'item') {
      return (
        <Action
          key={item.item.id}
          action={item.item}
          hovered={item.index === hovered}
          onMouseEnter={() => onActionHover(item.index)}
          classNames={classNames}
          styles={styles}
          onTrigger={() => onActionTrigger(item.item)}
        />
      );
    }

    return (
      <Text className={classes.actionsGroup} color="dimmed" key={item.label}>
        {item.label}
      </Text>
    );
  });

  const shouldRenderActions =
    items.length > 0 || (!!nothingFoundMessage && query.trim().length > 0);

  return (
    <>
      {shouldRenderActions && (
        <div className={classes.actions}>
          {items.length > 0 ? (
            items
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
