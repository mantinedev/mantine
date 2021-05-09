import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Hr.styles';
import { Text, TextProps } from '../Text/Text';

export const HR_SIZES = sizes;

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Hr color */
  color?: string;

  /** Set line orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and with in vertical */
  size?: MantineNumberSize;

  /** Adds text after line in horizontal orientation */
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
    theme: useMantineTheme(themeOverride),
    color,
    size,
    variant,
    orientation,
  });

  return (
    <div
      data-mantine-hr
      className={cx(orientation === 'vertical' ? classes.vertical : classes.horizontal, className)}
      {...others}
    >
      {subHeader && orientation === 'horizontal' && (
        <Text color={color} {...subHeaderProps} className={cx(subHeaderProps?.className)}>
          {subHeader}
        </Text>
      )}
    </div>
  );
}

Hr.displayName = '@mantine/core/Hr';
