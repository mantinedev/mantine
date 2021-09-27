import React, { Children } from 'react';
import { DefaultProps, MantineNumberSize, useExtractedMargins } from '@mantine/styles';
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

  /** Defines align-items css property */
  align?: React.CSSProperties['alignItems'];

  /** Defines padding for the root component */
  withGutter?: boolean;
}

export function Group({
  className,
  style,
  position = 'left',
  align,
  children,
  noWrap = false,
  grow = false,
  spacing = 'md',
  direction = 'row',
  withGutter = false,
  ...others
}: GroupProps) {
  const count = Children.count(children);
  const { classes, cx } = useStyles(
    {
      align,
      grow,
      noWrap,
      spacing,
      position,
      direction,
      count,
      withGutter,
    },
    null,
    'group'
  );

  const { mergedStyles, rest } = useExtractedMargins({ others, style });

  const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
    React.cloneElement(child, {
      className: cx(classes.child, child.props.className),
    })
  );

  return (
    <div className={cx(classes.root, className)} style={mergedStyles} {...rest}>
      {items}
    </div>
  );
}

Group.displayName = '@mantine/core/Group';
