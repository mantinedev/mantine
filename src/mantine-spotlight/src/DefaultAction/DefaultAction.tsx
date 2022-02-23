import React from 'react';
import { DefaultProps, ClassNames, Highlight, UnstyledButton, Group, Center } from '@mantine/core';
import type { SpotlightAction } from '../types';
import useStyles from './DefaultAction.styles';

export type DefaultActionStylesNames = ClassNames<typeof useStyles>;

export interface DefaultActionProps
  extends DefaultProps<DefaultActionStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  action: SpotlightAction;
  hovered: boolean;
  onTrigger(): void;
  highlightQuery: boolean;
  query: string;
}

export function DefaultAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  highlightQuery,
  query,
  ...others
}: DefaultActionProps) {
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
          <Highlight highlight={highlightQuery ? query : null}>{action.title}</Highlight>

          {action.description && (
            <Highlight color="dimmed" size="xs" highlight={highlightQuery ? query : null}>
              {action.description}
            </Highlight>
          )}
        </div>
      </Group>
    </UnstyledButton>
  );
}

DefaultAction.displayName = '@mantine/spotlight/DefaultAction';
