import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Hr.styles';

export const HR_SIZES = sizes;

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Hr borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Hr height */
  size?: MantineNumberSize;

  /** Hr color */
  color?: string;
}

export function Hr({
  size = 'xs',
  className,
  variant = 'dashed',
  themeOverride,
  color = 'gray',
  ...others
}: HrProps) {
  const classes = useStyles({ color, variant, size, theme: useMantineTheme(themeOverride) });
  return <hr data-mantine-hr className={cx(classes.hr, className)} {...others} />;
}

Hr.displayName = '@mantine/core/Hr';
