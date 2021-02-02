import React from 'react';
import cx from 'clsx';
import { Cross2Icon } from '@modulz/radix-icons';
import { DefaultProps, Theme } from '@mantine/types';
import Text from '../Text/Text';
import ActionIcon from '../ActionIcon/ActionIcon';
import useStyles from './Notification.styles';

interface NotificationProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  theme?: Theme;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  onClose(): void;
}

export default function Notification({
  className,
  theme = 'muted',
  title,
  icon,
  children,
  onClose,
  ...others
}: NotificationProps) {
  const classes = useStyles();

  return (
    <div
      className={cx(classes.notification, { [classes.withIcon]: icon }, classes[theme], className)}
      {...others}
    >
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.body}>
        {title && (
          <Text className={classes.title} size="sm">
            {title}
          </Text>
        )}

        <Text className={classes.description} size="sm">
          {children}
        </Text>
      </div>
      <ActionIcon onClick={onClose}>
        <Cross2Icon />
      </ActionIcon>
    </div>
  );
}

Notification.displayName = '@mantine/core/Notification';
