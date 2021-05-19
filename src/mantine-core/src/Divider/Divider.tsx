import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Divider.styles';
import { Text } from '../Text/Text';

export const DIVIDER_SIZES = sizes;

export interface DividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
  color?: string;

  /** Line orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and with in vertical */
  size?: MantineNumberSize;

  /** Adds text after line in horizontal orientation */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props spread to Text component in label */
  labelProps?: Record<string, any>;

  /** Divider borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Top and bottom margins for horizontal variant, left and right for vertical, xs, sm, md, lg, xl for value from theme.spacing, number for margins in px */
  margins?: MantineNumberSize;
}

export function Divider({
  color,
  className,
  orientation = 'horizontal',
  size = 'xs',
  label,
  labelPosition = 'left',
  labelProps,
  themeOverride,
  variant = 'solid',
  margins = 0,
  ...others
}: DividerProps) {
  const theme = useMantineTheme(themeOverride);
  const _color = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
  const classes = useStyles({
    color: _color,
    theme,
    margins,
    size,
    variant,
  });

  return (
    <div
      data-mantine-hr
      className={cx(
        {
          [classes.vertical]: orientation === 'vertical',
          [classes.horizontal]: orientation === 'horizontal',
          [classes.withLabel]: !!label && orientation === 'horizontal',
        },
        className
      )}
      {...others}
    >
      {!!label && orientation === 'horizontal' && (
        <Text
          data-mantine-label
          {...labelProps}
          color={_color}
          size={labelProps?.size || 'xs'}
          style={{ marginTop: 2 }}
          className={cx(classes.label, classes[labelPosition])}
        >
          {label}
        </Text>
      )}
    </div>
  );
}

Divider.displayName = '@mantine/core/Divider';
