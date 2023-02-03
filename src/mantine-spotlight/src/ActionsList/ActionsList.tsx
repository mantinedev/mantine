import React from 'react';
import { DefaultProps, Selectors, Text, MantineNumberSize, MantineColor } from '@mantine/core';
import type { SpotlightAction } from '../types';
import type { DefaultActionProps, DefaultActionStylesNames } from '../DefaultAction/DefaultAction';
import useStyles from './ActionsList.styles';

export type ActionsListStylesNames = Selectors<typeof useStyles> | DefaultActionStylesNames;
type GetGroupOptionsItem<T extends any[]> = { type: 'item'; item: T[number]; index: number };
type GetGroupOptionsLabel = { type: 'label'; label: string };

export interface ActionsListProps
  extends DefaultProps<ActionsListStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  actions: (GetGroupOptionsItem<SpotlightAction[]> | GetGroupOptionsLabel)[];
  actionComponent?: React.FC<DefaultActionProps>;
  hovered: number;
  query: string;
  nothingFoundMessage?: React.ReactNode;
  onActionTrigger(action: SpotlightAction): void;
  highlightQuery: boolean;
  highlightColor: MantineColor;
  radius: MantineNumberSize;
  variant: string;
}

export function ActionsList({
  actions,
  styles,
  classNames,
  actionComponent: Action,
  hovered,
  onActionTrigger,
  query,
  nothingFoundMessage,
  highlightQuery,
  highlightColor,
  radius,
  variant,
  ...others
}: ActionsListProps) {
  const { classes } = useStyles(null, { name: 'Spotlight', classNames, styles, variant });

  const items = actions.map((item) => {
    if (item.type === 'item') {
      return (
        <Action
          query={query}
          key={item.item.id}
          action={item.item}
          hovered={item.index === hovered}
          classNames={classNames}
          styles={styles}
          radius={radius}
          onTrigger={() => onActionTrigger(item.item)}
          highlightQuery={highlightQuery}
          highlightColor={highlightColor}
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
        <div className={classes.actions} {...others}>
          {items.length > 0 ? (
            items
          ) : (
            <Text c="dimmed" className={classes.nothingFound} ta="center" fz="lg" py="md">
              {nothingFoundMessage}
            </Text>
          )}
        </div>
      )}
    </>
  );
}

ActionsList.displayName = '@mantine/spotlight/ActionsList';
