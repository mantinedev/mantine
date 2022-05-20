import React, { forwardRef } from 'react';
import { useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { RadioIcon } from './RadioIcon';
import useStyles from './Radio.styles';

export type RadioStylesNames = Selectors<typeof useStyles>;

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

  /** Replace default icon */
  icon?: React.FC<React.ComponentPropsWithoutRef<'svg'>>;

  /** Animation duration in ms */
  transitionDuration?: number;

  /** Props spread to root element */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<RadioProps> = {
  icon: RadioIcon,
  transitionDuration: 100,
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
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
    sx,
    icon: Icon,
    transitionDuration,
    wrapperProps,
    ...others
  } = useMantineDefaultProps('Radio', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, size, transitionDuration },
    { classNames, styles, name: 'Radio' }
  );

  const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useUuid(id);

  return (
    <Box
      className={cx(classes.radioWrapper, className)}
      style={style}
      title={title}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div className={classes.inner}>
        <input
          ref={ref}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          {...rest}
        />
        <Icon className={classes.icon} aria-hidden />
      </div>

      {label && (
        <label data-disabled={disabled} className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Radio.displayName = '@mantine/core/Radio';
