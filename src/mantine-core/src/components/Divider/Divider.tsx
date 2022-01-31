import React, { forwardRef } from 'react';
import { useMantineTheme, DefaultProps, MantineNumberSize, MantineColor } from '@mantine/styles';
import useStyles from './Divider.styles';
import { Text } from '../Text';
import { Box } from '../Box';

export type DividerStylesNames = 'label';

export interface DividerProps
  extends DefaultProps<DividerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
  color?: MantineColor;

  /** Line orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and width in vertical */
  size?: MantineNumberSize;

  /** Adds text after line in horizontal orientation */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props spread to Text component in label */
  labelProps?: Record<string, any>;

  /** Divider borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      color,
      orientation = 'horizontal',
      size = 'xs',
      label,
      labelPosition = 'left',
      labelProps,
      variant = 'solid',
      styles,
      classNames,
      ...others
    }: DividerProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const _color = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
    const { classes, cx } = useStyles(
      { color: _color, size, variant },
      { classNames, styles, name: 'Divider' }
    );

    const vertical = orientation === 'vertical';
    const horizontal = !vertical;
    const withLabel = !!label && horizontal;

    return (
      <Box
        ref={ref}
        className={cx(
          {
            [classes.vertical]: vertical,
            [classes.horizontal]: horizontal,
            [classes.withLabel]: withLabel,
          },
          className
        )}
        {...others}
      >
        {!!label && horizontal && (
          <Text
            {...labelProps}
            color={_color}
            size={labelProps?.size || 'xs'}
            sx={{ marginTop: 2 }}
            className={cx(classes.label, classes[labelPosition])}
          >
            {label}
          </Text>
        )}
      </Box>
    );
  }
);

Divider.displayName = '@mantine/core/Divider';
