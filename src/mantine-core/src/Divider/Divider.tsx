import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  useComponentDefaultProps,
  Variants,
  rem,
} from '@mantine/styles';
import useStyles from './Divider.styles';
import { Text } from '../Text';
import { Box } from '../Box';

export type DividerStylesNames = 'label';

export interface DividerProps
  extends DefaultProps<DividerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Key of theme.colors, defaults to "gray" in light color scheme and to "dark" in dark color scheme */
  color?: MantineColor;

  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height when orientation="horizontal" and width when orientation="vertical" */
  size?: MantineNumberSize;

  /** Text inside the divider, only applicable when orientation="horizontal" */
  label?: React.ReactNode;

  /** Label position, only applicable when orientation="horizontal" */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props added to the label element */
  labelProps?: Record<string, any>;

  /** Controls appearance */
  variant?: Variants<'solid' | 'dashed' | 'dotted'>;
}

const defaultProps: Partial<DividerProps> = {
  orientation: 'horizontal',
  size: 'xs',
  labelPosition: 'left',
  variant: 'solid',
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props: DividerProps, ref) => {
  const {
    className,
    color,
    orientation,
    size,
    label,
    labelPosition,
    labelProps,
    variant,
    styles,
    classNames,
    unstyled,
    ...others
  } = useComponentDefaultProps('Divider', defaultProps, props);

  const { classes, cx } = useStyles(
    { color },
    { classNames, styles, unstyled, name: 'Divider', variant, size }
  );

  const vertical = orientation === 'vertical';
  const horizontal = orientation === 'horizontal';
  const withLabel = !!label && horizontal;

  const useLabelDefaultStyles = !labelProps?.color;

  return (
    <Box
      ref={ref}
      className={cx(
        classes.root,
        {
          [classes.vertical]: vertical,
          [classes.horizontal]: horizontal,
          [classes.withLabel]: withLabel,
        },
        className
      )}
      role="separator"
      {...others}
    >
      {withLabel && (
        <Text
          {...labelProps}
          size={labelProps?.size || 'xs'}
          mt={rem(2)}
          className={cx(classes.label, classes[labelPosition], {
            [classes.labelDefaultStyles]: useLabelDefaultStyles,
          })}
        >
          {label}
        </Text>
      )}
    </Box>
  );
});

Divider.displayName = '@mantine/core/Divider';
