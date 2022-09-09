import React, { forwardRef } from 'react';
import { useId } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  MantineColor,
  Selectors,
  extractSystemStyles,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { Box } from '../Box';
import { RadioIcon } from './RadioIcon';
import { useRadioGroupContext } from './RadioGroup.context';
import { RadioGroup } from './RadioGroup/RadioGroup';
import useStyles, { RadioStylesParams } from './Radio.styles';

export type RadioStylesNames = Selectors<typeof useStyles>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames, RadioStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
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
  size: 'sm',
};

type RadioComponent = ForwardRefWithStaticComponents<RadioProps, { Group: typeof RadioGroup }>;

export const Radio: RadioComponent = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
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
    unstyled,
    ...others
  } = useComponentDefaultProps('Radio', defaultProps, props);
  const ctx = useRadioGroupContext();

  const { classes, cx } = useStyles(
    { color, size: ctx?.size || size, transitionDuration },
    { classNames, styles, unstyled, name: 'Radio' }
  );

  const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value === rest.value,
        name: rest.name ?? ctx.name,
        onChange: ctx.onChange,
      }
    : {};

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
          {...contextProps}
        />
        <Icon className={classes.icon} aria-hidden />
      </div>

      {label && (
        <label data-disabled={disabled || undefined} className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
}) as any;

Radio.displayName = '@mantine/core/Radio';
Radio.Group = RadioGroup;
