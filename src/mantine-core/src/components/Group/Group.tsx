import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize, mergeStyles } from '../../theme';
import useStyles, { GroupPosition } from './Group.styles';

export interface GroupProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
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

export type { GroupPosition };

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
  themeOverride,
  classNames,
  styles,
  ...others
}: GroupProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles(
    {
      theme,
      align,
      grow,
      noWrap,
      spacing,
      position,
      direction,
    },
    classNames
  );
  const _styles = mergeStyles(classes, styles);

  const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
    React.cloneElement(child, {
      className: cx(classes.child, child.props.className),
      style: { ...child.props.style, ..._styles.child },
    })
  );

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {items}
    </div>
  );
}

Group.displayName = '@mantine/core/Group';
