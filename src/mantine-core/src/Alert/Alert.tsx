import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import useStyles from './Alert.styles';

interface AlertProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Optional alert title */
  title?: React.ReactNode;

  /** Alert message */
  children: React.ReactNode;

  /** Alert title and line colors from theme */
  color?: string;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: string;
}

export function Alert({
  className,
  title,
  children,
  themeOverride,
  color,
  shadow = 'sm',
  ...others
}: AlertProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <Paper
      shadow={shadow}
      className={cx(classes.alert, className)}
      themeOverride={themeOverride}
      {...others}
    >
      {title && (
        <Text
          themeOverride={themeOverride}
          data-mantine-alert-title
          weight={700}
          className={classes.title}
        >
          {title}
        </Text>
      )}

      <div data-mantine-alert-body className={classes.body}>
        {children}
      </div>
    </Paper>
  );
}

Alert.displayName = '@mantine/core/Alert';
