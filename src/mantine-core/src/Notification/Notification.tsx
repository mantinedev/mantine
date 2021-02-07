import React from 'react';
import cx from 'clsx';
import { Cross2Icon } from '@modulz/radix-icons';
import { DefaultProps, MantineColor, useMantineTheme } from '@mantine/theme';
import Text from '../Text/Text';
import ActionIcon from '../ActionIcon/ActionIcon';
import useStyles from './Notification.styles';

interface NotificationProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  color?: MantineColor;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  onClose(): void;
}

export default function Notification({
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
    <div className={cx(classes.notification, { [classes.withIcon]: icon }, className)} {...others}>
      {icon && <div className={classes.icon}>{icon}</div>}

      <div className={classes.body}>
        {title && (
          <Text className={classes.title} size="sm" semibold themeOverride={themeOverride}>
            {title}
          </Text>
        )}

        <Text className={classes.description} size="sm" themeOverride={themeOverride}>
          {children}
        </Text>
      </div>

      <ActionIcon onClick={onClose} themeOverride={themeOverride}>
        <Cross2Icon />
      </ActionIcon>
    </div>
  );
}

Notification.displayName = '@mantine/core/Notification';
