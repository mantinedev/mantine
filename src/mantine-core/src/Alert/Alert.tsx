import React from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import useStyles from './Alert.styles';

interface AlertProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: React.ReactNode;
  color?: string;

  /** Alert body content */
  children: React.ReactNode;
}

export function Alert({ className, title, children, themeOverride, color, ...others }: AlertProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <div className={className} {...others}>
      {title && (
        <Text<'h6'>
          component="h6"
          data-mantine-alert-title
          weight={700}
          className={classes.title}
          size="sm"
        >
          {title}
        </Text>
      )}

      <div data-mantine-alert-body className={classes.body}>
        {children}
      </div>
    </div>
  );
}

Alert.displayName = '@mantine/core/Alert';
