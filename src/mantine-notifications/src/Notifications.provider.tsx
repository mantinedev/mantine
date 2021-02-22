import React, { useState } from 'react';
import cx from 'clsx';
import { nanoid } from 'nanoid';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, useMantineTheme } from '@mantine/core';
import { NotificationsContext, NotificationProps } from './Notifications.context';
import getPositionStyles, { Position } from './get-position-styles';
import Notification from './Notification';
import useStyles from './Notification.provider.styles';

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
  duration?: number;
  containerWidth?: number;
  notificationMaxHeight?: number;
}

const inState = {
  opacity: 1,
  transform: 'translateX(0)',
};

const outState = {
  opacity: 0,
  maxHeight: 0,
  transform: 'translateX(100%)',
};

const transitionStyles = {
  entering: inState,
  entered: inState,
  exiting: outState,
  exited: outState,
};

export function NotificationsProvider({
  className,
  position = 'bottom-right',
  themeOverride,
  duration = 250,
  containerWidth = 440,
  notificationMaxHeight = 200,
  style,
  children,
  ...others
}: NotificationProviderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split(
    '-'
  ) as Position;

  const notificationStyles: React.CSSProperties = {
    opacity: 0,
    maxHeight: notificationMaxHeight,
    transform: 'translateX(-100%)',
    transitionDuration: `${duration}ms, ${duration}ms, ${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

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
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <Notification
          notification={notification}
          onHide={hideNotification}
          className={classes.notification}
          style={{ ...notificationStyles, ...transitionStyles[state] }}
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
