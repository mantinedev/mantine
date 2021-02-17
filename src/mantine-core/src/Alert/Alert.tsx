import React from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import useStyles from './Alert.styles';

interface AlertProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: React.ReactNode;
  color?: string;
}

export function Alert({ className, title, children, themeOverride, color, ...others }: AlertProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <div className={className} {...others}>
      {title && (
        <Text weight={700} className={classes.title} size="sm">
          {title}
        </Text>
      )}

      <div className={classes.body}>{children}</div>
    </div>
  );
}

Alert.displayName = '@mantine/core/Alert';
