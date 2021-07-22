import React from 'react';
import cx from 'clsx';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, useMantineTheme, Portal } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { NotificationsContext } from '../Notifications.context';
import { NotificationsProviderPositioning } from '../types';
import getPositionStyles from './get-position-styles/get-position-styles';
import getNotificationStateStyles from './get-notification-state-styles/get-notification-state-styles';
import NotificationContainer from '../NotificationContainer/NotificationContainer';
import useStyles from './NotificationsProvider.styles';
import useNotificationsState from './use-notifications-state/use-notifications-state';

const POSITIONS = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center',
] as const;

export interface NotificationProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Notifications position */
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';

  /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function */
  autoClose?: number | false;

  /** Notification transitions duration, 0 to turn transitions off */
  transitionDuration?: number;

  /** Notification width in px, cannot exceed 100% */
  containerWidth?: number;

  /** Notification max-height in px, used for transitions */
  notificationMaxHeight?: number;

  /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
  limit?: number;

  /** Notifications container z-index */
  zIndex?: number;
}

export function NotificationsProvider({
  className,
  position = 'bottom-right',
  themeOverride,
  autoClose = 4000,
  transitionDuration = 250,
  containerWidth = 440,
  notificationMaxHeight = 200,
  limit = 5,
  zIndex = 5000,
  style,
  children,
  ...others
}: NotificationProviderProps) {
  const {
    notifications,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState({ limit });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split(
    '-'
  ) as NotificationsProviderPositioning;

  const items = notifications.map((notification) => (
    <Transition
      key={notification.id}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node: any) => node.offsetHeight}
    >
      {(state) => (
        <NotificationContainer
          notification={notification}
          onHide={hideNotification}
          className={classes.notification}
          autoClose={autoClose}
          style={{
            ...getNotificationStateStyles({
              state,
              positioning,
              transitionDuration: duration,
              maxHeight: notificationMaxHeight,
            }),
          }}
        />
      )}
    </Transition>
  ));

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        queue,
        showNotification,
        hideNotification,
        updateNotification,
        clean,
        cleanQueue,
      }}
    >
      <Portal zIndex={zIndex}>
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
      </Portal>

      {children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.displayName = '@mantine/notifications/NotificationsProvider';
