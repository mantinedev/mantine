import React from 'react';
import cx from 'clsx';
import { Cross2Icon } from '@modulz/radix-icons';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper, Text, Loader, ActionIcon } from '@mantine/core';
import useStyles from './Notification.styles';

interface NotificationProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  color?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  loading?: boolean;
  disallowClose?: boolean;
  onClose(): void;
  closeButtonProps?: React.ComponentPropsWithoutRef<typeof ActionIcon>;
}

export function Notification({
  className,
  color = 'blue',
  loading = false,
  disallowClose = false,
  title,
  icon,
  children,
  onClose,
  closeButtonProps,
  themeOverride,
  ...others
}: NotificationProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <Paper
      shadow="sm"
      padding="sm"
      className={cx(classes.notification, { [classes.withIcon]: icon || loading }, className)}
      role="alert"
      {...others}
    >
      {icon && !loading && <div className={classes.icon}>{icon}</div>}
      {loading && <Loader size={28} color={color} className={classes.loader} />}

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

      {!disallowClose && (
        <ActionIcon
          {...closeButtonProps}
          color="gray"
          onClick={onClose}
          themeOverride={themeOverride}
        >
          <Cross2Icon />
        </ActionIcon>
      )}
    </Paper>
  );
}

Notification.displayName = '@mantine/notifications/Notification';
