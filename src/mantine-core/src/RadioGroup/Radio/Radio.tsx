import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Radio.styles';

interface RadioProps extends DefaultProps, React.ComponentPropsWithoutRef<'input'> {
  children: React.ReactNode;
  value: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  checked?: boolean;
}

export function Radio({ className, themeOverride, name, id, children, ...others }: RadioProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const uuid = useId(id);

  return (
    <div className={cx(classes.wrapper, className)}>
      <input className={classes.radio} type="radio" id={uuid} {...others} />
      <label className={classes.label} htmlFor={uuid}>
        {children}
      </label>
    </div>
  );
}

Radio.displayName = '@mantine/core/Radio';
