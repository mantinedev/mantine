import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles from './Radio.styles';

interface RadioProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Radio label */
  children: React.ReactNode;

  /** Radio value */
  value: string;

  /** Radio width, height and border-radius */
  size?: MantineNumberSize;
}

export function Radio({
  className,
  themeOverride,
  id,
  children,
  style,
  size,
  ...others
}: RadioProps) {
  const classes = useStyles({ size, theme: useMantineTheme(themeOverride) });
  const uuid = useId(id);

  return (
    <div data-mantine-radio className={cx(classes.wrapper, className)} style={style}>
      <input className={classes.radio} type="radio" id={uuid} {...others} />
      <label className={classes.label} htmlFor={uuid}>
        {children}
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';
