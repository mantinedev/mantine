import React from 'react';
import { DefaultProps, MantineColor, useMantineTheme } from '@mantine/theme';
import Text from '../Text/Text';
import useStyles from './Alert.styles';

interface AlertProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  color?: MantineColor;
}

export default function Alert({
  className,
  title,
  children,
  themeOverride,
  color,
  ...others
}: AlertProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <div className={className} {...others}>
      {title && (
        <Text bold className={classes.title} size="sm">
          {title}
        </Text>
      )}

      <div className={classes.body}>{children}</div>
    </div>
  );
}

Alert.displayName = '@mantine/core/Alert';
