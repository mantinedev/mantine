import React from 'react';
import { DefaultProps, ClassNames, Text, UnstyledButton } from '@mantine/core';
import type { SpotlightAction } from '../types';
import useStyles from './Action.styles';

export type ActionStylesNames = ClassNames<typeof useStyles>;

interface ActionProps extends DefaultProps<ActionStylesNames> {
  action: SpotlightAction;
}

export function Action({ action, styles, classNames }: ActionProps) {
  const { classes } = useStyles(null, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton className={classes.action}>
      <Text>{action.title}</Text>

      {action.description && (
        <Text color="dimmed" size="sm">
          {action.description}
        </Text>
      )}
    </UnstyledButton>
  );
}

Action.displayName = '@mantine/spotlight/Action';
