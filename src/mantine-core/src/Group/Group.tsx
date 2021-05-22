import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '../theme';
import useStyles, { GroupPosition } from './Group.styles';

export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: MantineNumberSize;

  /** Defines flex-direction property, row for horizontal, column for vertical */
  direction?: 'row' | 'column';
}

export type { GroupPosition };

export function Group({
  className,
  position = 'left',
  children,
  noWrap = false,
  grow = false,
  spacing = 'md',
  direction = 'row',
  themeOverride,
  ...others
}: GroupProps) {
  const classes = useStyles({
    theme: useMantineTheme(themeOverride),
    grow,
    noWrap,
    spacing,
    position,
    direction,
  });

  const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
    React.cloneElement(child, { className: cx(classes.child, child.props.className) })
  );

  return (
    <div className={className} {...others}>
      <div className={classes.group}>{items}</div>
    </div>
  );
}

Group.displayName = '@mantine/core/Group';
