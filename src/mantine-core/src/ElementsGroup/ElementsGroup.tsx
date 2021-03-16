import React from 'react';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles, { ElementsGroupPosition } from './ElementsGroup.styles';

interface ElementsGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: ElementsGroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: MantineNumberSize;
}

export type { ElementsGroupPosition };

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
