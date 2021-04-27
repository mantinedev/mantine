import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { Loader } from '../Loader/Loader';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { CloseIcon } from '../Modal/CloseIcon';
import useStyles from './Notification.styles';

interface NotificationProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Called when close button is clicked */
  onClose(): void;

  /** Notification line or icon color */
  color?: string;

  /** Notification icon, replaces color line */
  icon?: React.ReactNode;

  /** Notification title, displayed before body */
  title?: React.ReactNode;

  /** Notification body, place main text here */
  children?: React.ReactNode;

  /** Replaces colored line or icon with Loader component */
  loading?: boolean;

  /** Removes close button */
  disallowClose?: boolean;

  /** Props spread to close button */
  closeButtonProps?: Record<string, any>;
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
      shadow="lg"
      padding="sm"
      className={cx(classes.notification, { [classes.withIcon]: icon || loading }, className)}
      role="alert"
      themeOverride={themeOverride}
      {...others}
    >
      {icon && !loading && (
        <div data-mantine-icon className={classes.icon}>
          {icon}
        </div>
      )}

      {loading && <Loader size={28} color={color} className={classes.loader} />}

      <div className={classes.body}>
        {title && (
          <Text
            data-mantine-title
            className={classes.title}
            size="sm"
            weight={500}
            themeOverride={themeOverride}
          >
            {title}
          </Text>
        )}

        <Text
          data-mantine-body
          className={classes.description}
          size="sm"
          themeOverride={themeOverride}
        >
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
          <CloseIcon />
        </ActionIcon>
      )}
    </Paper>
  );
}

Notification.displayName = '@mantine/core/Notification';
