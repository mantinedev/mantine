import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  useComponentDefaultProps,
} from '@mantine/styles';
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
    { color, size, variant },
    { classNames, styles, unstyled, name: 'Divider' }
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
          sx={{ marginTop: 2 }}
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
