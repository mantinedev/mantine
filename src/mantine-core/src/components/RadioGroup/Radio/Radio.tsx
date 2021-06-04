import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../../theme';
import useStyles from './Radio.styles';

export interface RadioProps
  extends DefaultProps<typeof useStyles>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
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
  style,
  themeOverride,
  id,
  children,
  size,
  elementRef,
  title,
  disabled,
  color,
  classNames,
  styles,
  ...others
}: RadioProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, size, theme }, classNames);
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);

  return (
    <div
      data-mantine-radio
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      title={title}
    >
      <label
        className={cx(classes.label, { [classes.labelDisabled]: disabled })}
        htmlFor={uuid}
        style={{ ..._styles.label, ...(disabled ? _styles.labelDisabled : null) }}
      >
        <input
          ref={elementRef}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          style={_styles.radio}
          {...others}
        />
        <span>{children}</span>
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';
