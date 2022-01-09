import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { filterFalsyChildren } from '../../utils';
import { Box } from '../Box';
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
      position = 'left',
      align,
      children,
      noWrap = false,
      grow = false,
      spacing = 'md',
      direction = 'row',
      classNames,
      styles,
      ...others
    }: GroupProps,
    ref
  ) => {
    const filteredChildren = filterFalsyChildren(children);
    const { classes, cx } = useStyles(
      {
        align,
        grow,
        noWrap,
        spacing,
        position,
        direction,
        count: filteredChildren.length,
      },
      { classNames, styles, name: 'Group' }
    );

    const items = filteredChildren.map((child) =>
      React.cloneElement(child, {
        className: cx(classes.child, child.props.className),
      })
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {items}
      </Box>
    );
  }
);

Group.displayName = '@mantine/core/Group';
