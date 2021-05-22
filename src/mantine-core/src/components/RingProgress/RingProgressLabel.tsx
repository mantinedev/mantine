import React from 'react';
import { DefaultProps, useMantineTheme } from '../../theme';
import cx from 'clsx';
import useStyles from './RingProgress.styles';

interface RingProgressLabelProps extends DefaultProps, React.ComponentProps<'div'> {}

export function RingProgressLabel(props: RingProgressLabelProps) {
  const { children, className, themeOverride, ...rest } = props;
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <div className={cx(classes.labelDiv, className)} {...rest}>
      {children}
    </div>
  );
}
