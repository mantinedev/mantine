import React, { forwardRef } from 'react';
import { useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  ClassNames,
  extractMargins,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './Radio.styles';

export type RadioStylesNames = Exclude<ClassNames<typeof useStyles>, 'labelDisabled'>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children?: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Static selector base */
  __staticSelector?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      style,
      id,
      children,
      size,
      title,
      disabled,
      color,
      classNames,
      styles,
      __staticSelector = 'Radio',
      sx,
      ...others
    }: RadioProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { color, size },
      { classNames, styles, name: __staticSelector }
    );
    const { margins, rest } = extractMargins(others);
    const uuid = useUuid(id);

    return (
      <Box
        className={cx(classes.radioWrapper, className)}
        style={style}
        title={title}
        sx={sx}
        {...margins}
      >
        <label className={cx(classes.label, { [classes.labelDisabled]: disabled })} htmlFor={uuid}>
          <input
            ref={ref}
            className={classes.radio}
            type="radio"
            id={uuid}
            disabled={disabled}
            {...rest}
          />
          {children && <span>{children}</span>}
        </label>
      </Box>
    );
  }
);

Radio.displayName = '@mantine/core/Radio';
