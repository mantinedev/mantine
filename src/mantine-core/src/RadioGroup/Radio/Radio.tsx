import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize } from '@mantine/theme';
import useStyles from './Radio.styles';

interface RadioProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color */
  color?: string;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Radio({
  className,
  themeOverride,
  id,
  children,
  style,
  size,
  elementRef,
  title,
  disabled,
  color,
  ...others
}: RadioProps) {
  const classes = useStyles({ color, size, theme: useMantineTheme(themeOverride) });
  const uuid = useId(id);

  return (
    <div data-mantine-radio className={cx(classes.wrapper, className)} style={style} title={title}>
      <label className={cx(classes.label, { [classes.labelDisabled]: disabled })} htmlFor={uuid}>
        <input
          ref={elementRef}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          {...others}
        />
        <span>{children}</span>
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';
