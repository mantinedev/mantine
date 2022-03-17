import React, { useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, Portal, MantineStyleSystemSize, getDefaultZIndex, Box } from '@mantine/core';
import { useReducedMotion, useForceUpdate, useDidUpdate } from '@mantine/hooks';
import { NotificationsContext } from '../Notifications.context';
import { NotificationsProviderPositioning } from '../types';
import { useNotificationsEvents } from '../events';
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
  extends Omit<DefaultProps, MantineStyleSystemSize>,
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
  autoClose = 4000,
  transitionDuration = 250,
  containerWidth = 440,
  notificationMaxHeight = 200,
  limit = 5,
  zIndex = getDefaultZIndex('overlay'),
  style,
  children,
  ...others
}: NotificationProviderProps) {
  const forceUpdate = useForceUpdate();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);
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
  const { classes, cx, theme } = useStyles();
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split(
    '-'
  ) as NotificationsProviderPositioning;

  const ctx = {
    notifications,
    queue,
    showNotification,
    hideNotification,
    updateNotification,
    clean,
    cleanQueue,
  };

  useDidUpdate(() => {
    if (notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = notifications.length;
  }, [notifications]);

  useNotificationsEvents(ctx);

  const items = notifications.map((notification) => (
    <Transition
      key={notification.id}
      timeout={duration}
      onEnter={() => refs.current[notification.id].offsetHeight}
      nodeRef={{ current: refs.current[notification.id] }}
    >
      {(state) => (
        <NotificationContainer
          innerRef={(node) => {
            refs.current[notification.id] = node;
          }}
          notification={notification}
          onHide={hideNotification}
          className={classes.notification}
          autoClose={autoClose}
          sx={{
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
    <NotificationsContext.Provider value={ctx}>
      <Portal zIndex={zIndex}>
        <Box
          className={cx(classes.notifications, className)}
          style={style}
          sx={{
            maxWidth: containerWidth,
            ...getPositionStyles(positioning, containerWidth, theme.spacing.md),
          }}
          {...others}
        >
          <TransitionGroup>{items}</TransitionGroup>
        </Box>
      </Portal>

      {children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.displayName = '@mantine/notifications/NotificationsProvider';
