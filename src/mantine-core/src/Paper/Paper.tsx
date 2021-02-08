import React, { forwardRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles, { PaperPadding } from './Paper.styles';

interface PaperProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  children: React.ReactNode;
  padding?: PaperPadding;
}

const Paper = forwardRef(
  (
    { className, children, padding = 0, themeOverride, ...others }: PaperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const classes = useStyles({ padding, theme: useMantineTheme(themeOverride) });

    return (
      <div data-composable className={cx(classes.paper, className)} ref={ref} {...others}>
        {children}
      </div>
    );
  }
);

Paper.displayName = '@mantine/core/Paper';

export default Paper;
