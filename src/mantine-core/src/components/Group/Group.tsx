import React, { Children, forwardRef } from 'react';
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
}

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  (
    {
      className,
      style,
      position = 'left',
      align,
      children,
      noWrap = false,
      grow = false,
      spacing = 'md',
      direction = 'row',
      sx,
      ...others
    }: GroupProps,
    ref
  ) => {
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
      },
      { sx, name: 'Group' }
    );

    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
      React.cloneElement(child, {
        className: cx(classes.child, child.props.className),
      })
    );

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        {items}
      </div>
    );
  }
);

Group.displayName = '@mantine/core/Group';
