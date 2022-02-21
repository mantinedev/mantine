import React from 'react';
import { DefaultProps, ClassNames, Text, UnstyledButton, Group, Center } from '@mantine/core';
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
      <Group noWrap>
        {action.icon && <Center className={classes.actionIcon}>{action.icon}</Center>}

        <div className={classes.actionBody}>
          <Text>{action.title}</Text>

          {action.description && (
            <Text color="dimmed" size="xs">
              {action.description}
            </Text>
          )}
        </div>
      </Group>
    </UnstyledButton>
  );
}

Action.displayName = '@mantine/spotlight/Action';
