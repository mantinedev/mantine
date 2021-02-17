import React from 'react';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles, { ElementsGroupPosition } from './ElementsGroup.styles';

interface ElementsGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  position?: ElementsGroupPosition;
  noWrap?: boolean;
  grow?: boolean;
  spacing?: MantineNumberSize;
}

export function ElementsGroup({
  className,
  position = 'left',
  children,
  noWrap = false,
  grow = false,
  spacing = 'md',
  themeOverride,
  ...others
}: ElementsGroupProps) {
  const classes = useStyles({
    grow,
    noWrap,
    spacing,
    position,
    theme: useMantineTheme(themeOverride),
  });

  return (
    <div className={className} {...others}>
      <div className={classes.elementsGroup}>{children}</div>
    </div>
  );
}

ElementsGroup.displayName = '@mantine/core/ElementsGroup';
