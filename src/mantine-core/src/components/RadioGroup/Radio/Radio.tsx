import React, { forwardRef } from 'react';
import { useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  ClassNames,
  extractMargins,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './Radio.styles';

export type RadioStylesNames = Exclude<ClassNames<typeof useStyles>, 'labelDisabled'>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  label?: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Static selector base */
  __staticSelector?: string;
}

const defaultProps: Partial<RadioProps> = {
  __staticSelector: 'Radio',
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref) => {
  const {
    className,
    style,
    id,
    label,
    size,
    title,
    disabled,
    color,
    classNames,
    styles,
    __staticSelector,
    sx,
    ...others
  } = useMantineDefaultProps('Radio', defaultProps, props);

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
        {label && <span>{label}</span>}
      </label>
    </Box>
  );
});

Radio.displayName = '@mantine/core/Radio';
