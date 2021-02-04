import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import useStyles, { ElementsGroupPosition } from './ElementsGroup.styles';

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  position?: ElementsGroupPosition;
  noWrap?: boolean;
  grow?: boolean;
  spacing?: number;
}

export default function ElementsGroup({
  className,
  position = 'left',
  children,
  noWrap = false,
  grow = false,
  spacing = 10,
  ...others
}: ElementsGroupProps) {
  const classes = useStyles({ grow, noWrap, spacing, position });

  return (
    <div className={cx(classes.elementsGroup, className)} {...others}>
      {children}
    </div>
  );
}

ElementsGroup.displayName = '@mantine/core/ElementsGroup';
