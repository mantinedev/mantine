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
