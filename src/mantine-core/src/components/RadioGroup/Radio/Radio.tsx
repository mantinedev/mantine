import React from 'react';
import { useId } from '@mantine/hooks';
import { mergeStyles, DefaultProps, MantineSize, MantineColor } from '@mantine/styles';
import useStyles from './Radio.styles';

export type RadioStylesNames = Exclude<
  keyof ReturnType<typeof useStyles>['classes'],
  'labelDisabled'
>;

export interface RadioProps
  extends DefaultProps<RadioStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children: React.ReactNode;

  /** Radio value */
  value: string;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Radio({
  className,
  style,
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
  const { classes, cx } = useStyles({ color, size }, classNames, 'radio-group');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);

  return (
    <div
      className={cx(classes.radioWrapper, className)}
      style={{ ...style, ..._styles.radioWrapper }}
      title={title}
    >
      <label
        className={cx(classes.label, { [classes.labelDisabled]: disabled })}
        htmlFor={uuid}
        style={_styles.label}
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
