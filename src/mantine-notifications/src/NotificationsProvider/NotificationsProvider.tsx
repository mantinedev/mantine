import React, { useState } from 'react';
import cx from 'clsx';
import { nanoid } from 'nanoid';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, useMantineTheme } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { NotificationsContext } from '../Notifications.context';
import { NotificationProps, NotificationsProviderPositioning } from '../types';
import getPositionStyles from './get-position-styles/get-position-styles';
import getNotificationStateStyles from './get-notification-state-styles/get-notification-state-styles';
import Notification from '../Notification/Notification';
import useStyles from './NotificationsProvider.styles';

const POSITIONS = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center',
] as const;

interface NotificationProviderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  position?: typeof POSITIONS[number];
  autoClose?: number | false;
  duration?: number;
  containerWidth?: number;
  notificationMaxHeight?: number;
}

export function NotificationsProvider({
  className,
  position = 'bottom-right',
  themeOverride,
  autoClose = 4000,
  duration = 250,
  containerWidth = 440,
  notificationMaxHeight = 200,
  style,
  children,
  ...others
}: NotificationProviderProps) {
  const reduceMotion = useReducedMotion();
  const transitionDuration = reduceMotion ? 1 : duration;
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split(
    '-'
  ) as NotificationsProviderPositioning;

  const showNotification = (notification: NotificationProps) =>
    setNotifications((currentNotifications) => [
      ...currentNotifications,
      { ...notification, id: notification.id || nanoid() },
    ]);

  const hideNotification = (id: string) =>
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.id !== id)
    );

  const items = notifications.map((notification) => (
    <Transition
      key={notification.id}
      timeout={transitionDuration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <Notification
          notification={notification}
          onHide={hideNotification}
          className={classes.notification}
          autoClose={autoClose}
          style={{
            ...getNotificationStateStyles({
              state,
              positioning,
              transitionDuration,
              maxHeight: notificationMaxHeight,
            }),
          }}
        />
      )}
    </Transition>
  ));

  return (
    <NotificationsContext.Provider value={{ notifications, showNotification, hideNotification }}>
      <div
        className={cx(classes.notifications, className)}
        style={{
          maxWidth: containerWidth,
          ...getPositionStyles(positioning, containerWidth, theme.spacing.md),
          ...style,
        }}
        {...others}
      >
        <TransitionGroup>{items}</TransitionGroup>
      </div>

      {children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.displayName = '@mantine/notifications/NotificationsProvider';
