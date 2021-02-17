import React from 'react';
import cx from 'clsx';
import { Cross2Icon } from '@modulz/radix-icons';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import useStyles from './Notification.styles';

interface NotificationProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  color?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  onClose(): void;
}

export function Notification({
  className,
  color = 'blue',
  title,
  icon,
  children,
  onClose,
  themeOverride,
  ...others
}: NotificationProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <Paper
      shadow="sm"
      padding="sm"
      className={cx(classes.notification, { [classes.withIcon]: icon }, className)}
      {...others}
    >
      {icon && <div className={classes.icon}>{icon}</div>}

      <div className={classes.body}>
        {title && (
          <Text className={classes.title} size="sm" weight={500} themeOverride={themeOverride}>
            {title}
          </Text>
        )}

        <Text className={classes.description} size="sm" themeOverride={themeOverride}>
          {children}
        </Text>
      </div>

      <ActionIcon color="gray" onClick={onClose} themeOverride={themeOverride}>
        <Cross2Icon />
      </ActionIcon>
    </Paper>
  );
}

Notification.displayName = '@mantine/core/Notification';
