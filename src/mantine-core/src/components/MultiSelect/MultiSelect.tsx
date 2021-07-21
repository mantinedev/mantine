import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
import useStyles from './MultiSelect.styles';

interface MultiSelectProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function MultiSelect({ className, themeOverride }: MultiSelectProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  return <div className={cx(classes.wrapper, className)}>MultiSelect</div>;
}

MultiSelect.displayName = '@mantine/core/MultiSelect';
