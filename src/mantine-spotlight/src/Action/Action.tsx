import React from 'react';
import { DefaultProps, ClassNames, Text, UnstyledButton, Group, Center } from '@mantine/core';
import type { SpotlightAction } from '../types';
import useStyles from './Action.styles';

export type ActionStylesNames = ClassNames<typeof useStyles>;

interface ActionProps
  extends DefaultProps<ActionStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  action: SpotlightAction;
  hovered: boolean;
  onTrigger(): void;
}

export function Action({ action, styles, classNames, hovered, onTrigger, ...others }: ActionProps) {
  const { classes, cx } = useStyles(null, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={cx(classes.action, { [classes.actionHovered]: hovered })}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
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
