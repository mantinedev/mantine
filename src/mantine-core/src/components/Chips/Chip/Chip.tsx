import React from 'react';
import cx from 'clsx';
import {
  DefaultProps,
  useMantineTheme,
  MantineNumberSize,
  MantineSize,
  mergeStyles,
} from '../../../theme';
import useStyles from './Chip.styles';

export type ChipStylesNames = keyof ReturnType<typeof useStyles>;

export interface ChipProps
  extends DefaultProps<ChipStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Chip radius from theme or number to set value in px */
  radius?: MantineNumberSize;

  /** Predefined chip size */
  size?: MantineSize;

  /** Chip input type */
  type?: 'radio' | 'checkbox';

  /** Chip label */
  children: React.ReactNode;
}

export function Chip({
  radius = 'xl',
  type = 'checkbox',
  size = 'sm',
  children,
  className,
  classNames,
  style,
  styles,
  themeOverride,
  ...others
}: ChipProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, radius, size }, classNames, 'chip');
  const _styles = mergeStyles(classes, styles);

  return (
    // Rule is broken
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cx(classes.root, className)} style={{ ...style, ..._styles.root }}>
      <input type={type} className={classes.input} style={_styles.input} {...others} />
      {children}
    </label>
  );
}
