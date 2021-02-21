import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import useStyles from './Hr.styles';

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  variant?: 'solid' | 'dashed' | 'dotted';
}

export function Hr({ className, variant = 'dashed', style, themeOverride, ...others }: HrProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <hr
      className={cx(classes.hr, className)}
      style={{ ...style, borderTopStyle: variant }}
      {...others}
    />
  );
}

Hr.displayName = '@mantine/core/Hr';
