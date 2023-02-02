import React, { useEffect, useState } from 'react';
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
  onMouseEnter,
  ...others
}: DefaultActionProps) {
  const { classes } = useStyles({ radius }, { styles, classNames, name: 'Spotlight' });
  // extra logic for hover state is required to prevent spotlight from showing
  // multiple hovered items when it was opened with keyboard and user's mouse
  // was over one of the spotlight items
  const [shouldBeHovered, setShouldBeHovered] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShouldBeHovered(true), 300);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || isMouseOver || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      onMouseEnter={(event) => {
        onMouseEnter?.(event);
        shouldBeHovered && setIsMouseOver(true);
      }}
      onMouseLeave={() => setIsMouseOver(false)}
      {...others}
    >
      <Group noWrap>
        {action.icon && <Center className={classes.actionIcon}>{action.icon}</Center>}

        <div className={classes.actionBody}>
          <Highlight highlightColor={highlightColor} highlight={highlightQuery ? query : null}>
            {action.title}
          </Highlight>

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

DefaultAction.displayName = '@mantine/spotlight/DefaultAction';
