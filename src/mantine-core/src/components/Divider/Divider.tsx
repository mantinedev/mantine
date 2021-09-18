import React from 'react';
import cx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  mergeStyles,
  MantineColor,
} from '../../theme';
import useStyles, { sizes } from './Divider.styles';
import { Text } from '../Text/Text';

export const DIVIDER_SIZES = sizes;

export type DividerStylesNames = 'label' | 'root';

export interface DividerProps
  extends DefaultProps<DividerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
  color?: MantineColor;

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
  className,
  style,
  color,
  orientation = 'horizontal',
  size = 'xs',
  label,
  labelPosition = 'left',
  labelProps,
  variant = 'solid',
  margins = 0,
  styles,
  classNames,
  ...others
}: DividerProps) {
  const theme = useMantineTheme();
  const _color = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
  const classes = useStyles(
    {
      color: _color,
      theme,
      margins,
      size,
      variant,
    },
    classNames,
    'divider'
  );
  const _styles = mergeStyles(classes, styles);

  const vertical = orientation === 'vertical';
  const horizontal = !vertical;
  const withLabel = !!label && horizontal;

  return (
    <div
      className={cx(
        {
          [classes.vertical]: vertical,
          [classes.horizontal]: horizontal,
          [classes.withLabel]: withLabel,
        },
        className
      )}
      style={{
        ...style,
        ...(horizontal ? _styles.horizontal : _styles.vertical),
        ...(withLabel ? _styles.withLabel : null),
      }}
      {...others}
    >
      {!!label && horizontal && (
        <Text
          {...labelProps}
          color={_color}
          size={labelProps?.size || 'xs'}
          style={{ marginTop: 2, ..._styles.label, ..._styles[labelPosition] }}
          className={cx(classes.label, classes[labelPosition])}
        >
          {label}
        </Text>
      )}
    </div>
  );
}

Divider.displayName = '@mantine/core/Divider';
