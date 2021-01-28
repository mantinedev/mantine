import oc from 'open-color';
import React from 'react';
import cx from 'clsx';
import { DefaultProps, OpenColorTheme } from '@mantine/types';
import classes from './Pill.styles.less';

interface PillProps extends DefaultProps {
  theme?: OpenColorTheme;
  children: React.ReactNode;
}

export default function Pill({ className, theme = 'blue', children, style, ...others }: PillProps) {
  const openColorTheme = theme in oc ? oc[theme] : oc.blue;
  return (
    <div
      {...others}
      data-composable
      className={cx(classes.pill, className)}
      style={{
        ...style,
        backgroundColor: openColorTheme[6],
        textShadow: `1px 1px 0 ${openColorTheme[8]}`,
      }}
    >
      {children}
    </div>
  );
}

Pill.displayName = '@mantine/core/Pill';
