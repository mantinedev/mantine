import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, MantineSize, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import useStyles from './Paper.styles';

interface PaperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  padding?: MantineNumberSize;
  shadow?: MantineSize;
  radius?: MantineNumberSize;
}

export const Paper = forwardRef(
  (
    {
      className,
      children,
      padding = 0,
      radius = 'sm',
      shadow,
      themeOverride,
      ...others
    }: PaperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const classes = useStyles({ radius, shadow, padding, theme: useMantineTheme(themeOverride) });

    return (
      <div className={cx(classes.paper, className)} ref={ref} {...others}>
        {children}
      </div>
    );
  }
);

Paper.displayName = '@mantine/core/Paper';
