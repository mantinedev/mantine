import React from 'react';
import {
  DefaultProps,
  Selectors,
  Highlight,
  UnstyledButton,
  Group,
  Center,
  Text,
  MantineNumberSize,
  MantineColor,
} from '@mantine/core';
import type { SpotlightAction } from '../types';
import useStyles from './DefaultAction.styles';

export type DefaultActionStylesNames = Selectors<typeof useStyles>;

export interface DefaultActionProps
  extends DefaultProps<DefaultActionStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  action: SpotlightAction;
  hovered: boolean;
  onTrigger(): void;
  highlightQuery: boolean;
  highlightColor: MantineColor;
  query: string;
  radius: MantineNumberSize;
}

export function DefaultAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  highlightQuery,
  highlightColor,
  query,
  radius,
  ...others
}: DefaultActionProps) {
  const { classes } = useStyles({ radius }, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.icon && (
          <Center className={classes.actionIcon} data-hovered={hovered || undefined}>
            {action.icon}
          </Center>
        )}

        <div className={classes.actionBody}>
          <Highlight
            highlightColor={highlightColor}
            className={classes.actionHighlight}
            highlight={highlightQuery ? query : null}
          >
            {action.title}
          </Highlight>

          {action.description && (
            <Text
              size="xs"
              className={classes.actionDescription}
              data-hovered={hovered || undefined}
            >
              {action.description}
            </Text>
          )}
        </div>
      </Group>
    </UnstyledButton>
  );
}

DefaultAction.displayName = '@mantine/spotlight/DefaultAction';
