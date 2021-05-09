import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Hr.styles';
import { Text, TextProps } from '../Text/Text';

export const HR_SIZES = sizes;

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Line color from theme */
  color?: string;

  /** Line orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and with in vertical */
  size?: MantineNumberSize;

  /** Adds text after line in horizontal orientation */
  subHeader?: string;

  /** Props spread to Text component in subHeader */
  subHeaderProps?: TextProps;

  /** Hr borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Top and bottom margins for horizontal variant, left and right for vertical, xs, sm, md, lg, xl for value from theme.spacing, number for margins in px */
  margins?: MantineNumberSize;
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
  margins = 0,
  ...others
}: HrProps) {
  const classes = useStyles({
    theme: useMantineTheme(themeOverride),
    margins,
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
      {!!subHeader && orientation === 'horizontal' && (
        <Text
          data-mantine-subheader
          color={color}
          {...subHeaderProps}
          size={subHeaderProps?.size || 'xs'}
          style={{ marginTop: 2 }}
        >
          {subHeader}
        </Text>
      )}
    </div>
  );
}

Hr.displayName = '@mantine/core/Hr';
