import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Hr.styles';
import { Text, TextProps } from '../Text/Text';

export const HR_SIZES = sizes;

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Hr color */
  color?: string;

  /** Applies orientation to the Hr */
  orientation?: 'horizontal' | 'vertical';

  /** Hr height */
  size?: MantineNumberSize;

  /** Applies SubHeader Text to the Hr */
  subHeader?: string;

  /** SubHeader component Props */
  subHeaderProps?: TextProps;

  /** Hr borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';
}

export function Hr({
  color = 'gray',
  className,
  orientation = 'horizontal',
  size = 'xs',
  subHeader,
  subHeaderProps,
  themeOverride,
  variant = 'solid',
  ...others
}: HrProps) {
  const classes = useStyles({
    color,
    size,
    theme: useMantineTheme(themeOverride),
    variant,
    orientation,
    subHeaderProps,
  });

  return (
    <div
      data-mantine-hr
      className={cx(orientation === 'vertical' ? classes.hrVertical : classes.hr, className)}
      {...others}
    >
      {subHeader && (
        <Text {...subHeaderProps} className={cx(classes.subHeader, subHeaderProps?.className)}>
          {subHeader}
        </Text>
      )}
    </div>
  );
}

Hr.displayName = '@mantine/core/Hr';
