import React from 'react';
import {
  DefaultProps,
  ClassNames,
  Text,
  getGroupedOptions,
  MantineNumberSize,
} from '@mantine/core';
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
  highlightQuery: boolean;
  radius: MantineNumberSize;
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
  highlightQuery,
  radius,
}: ActionsListProps) {
  const { classes } = useStyles(null, { classNames, styles, name: 'Spotlight' });

  const items = getGroupedOptions(actions).items.map((item) => {
    if (item.type === 'item') {
      return (
        <Action
          query={query}
          key={item.item.id}
          action={item.item}
          hovered={item.index === hovered}
          onMouseEnter={() => onActionHover(item.index)}
          classNames={classNames}
          styles={styles}
          radius={radius}
          onTrigger={() => onActionTrigger(item.item)}
          highlightQuery={highlightQuery}
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
