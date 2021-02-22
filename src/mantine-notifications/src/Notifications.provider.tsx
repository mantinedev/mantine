import React, { useState } from 'react';
import cx from 'clsx';
import { nanoid } from 'nanoid';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, useMantineTheme } from '@mantine/core';
import { NotificationsContext, NotificationProps } from './Notifications.context';
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
}

const inState = {
  opacity: 1,
  transform: 'translateX(0)',
};

const outState = {
  opacity: 0,
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
  children,
  ...others
}: NotificationProviderProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const notificationStyles: React.CSSProperties = {
    opacity: 0,
    transform: 'translateX(-100%)',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
    transitionProperty: 'opacity, transform',
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
      <div className={cx(classes.notifications, className)} {...others}>
        <TransitionGroup>{items}</TransitionGroup>
      </div>

      {children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.displayName = '@mantine/notifications/NotificationsProvider';
