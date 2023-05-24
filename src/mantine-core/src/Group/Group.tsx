import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { filterFalsyChildren } from './filter-falsy-children/filter-falsy-children';
import useStyles, { GroupPosition } from './Group.styles';

export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: MantineNumberSize;

  /** Defines align-items css property */
  align?: React.CSSProperties['alignItems'];
}

const defaultProps: Partial<GroupProps> = {
  position: 'left',
  spacing: 'md',
};

export const Group = forwardRef<HTMLDivElement, GroupProps>((props: GroupProps, ref) => {
  const {
    className,
    position,
    align,
    children,
    noWrap,
    grow,
    spacing,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('Group', defaultProps, props);

  const filteredChildren = filterFalsyChildren(children);
  const { classes, cx } = useStyles(
    {
      align,
      grow,
      noWrap,
      spacing,
      position,
      count: filteredChildren.length,
    },
    { unstyled, name: 'Group', variant }
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {filteredChildren}
    </Box>
  );
});

Group.displayName = '@mantine/core/Group';
