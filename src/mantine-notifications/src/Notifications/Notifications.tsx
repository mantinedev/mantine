import React, { useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { DefaultProps, Portal, getDefaultZIndex, Box, PortalProps, rem } from '@mantine/core';
import { useReducedMotion, useForceUpdate, useDidUpdate } from '@mantine/hooks';
import { NotificationsPositioning } from '../types';
import {
  notifications as GlobalNotifications,
  NotificationsEvents,
  useNotificationsEvents,
} from '../events';
import getPositionStyles from './get-position-styles/get-position-styles';
import getNotificationStateStyles from './get-notification-state-styles/get-notification-state-styles';
import NotificationContainer from '../NotificationContainer/NotificationContainer';
import useStyles from './Notifications.styles';
import useNotificationsState from './use-notifications-state/use-notifications-state';

const POSITIONS = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center',
] as const;

type NotificationsStaticMethods = NotificationsEvents;

export interface NotificationsProps
  extends Omit<DefaultProps, 'style'>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Notifications position */
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';

  /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by notifications.show function */
  autoClose?: number | false;

  /** Notification transitions duration, 0 to turn transitions off */
  transitionDuration?: number;

  /** Notification width, cannot exceed 100% */
  containerWidth?: number | string;

  /** Notification max-height, used for transitions */
  notificationMaxHeight?: number | string;

  /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
  limit?: number;

  /** Notifications container z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Target element of Portal component */
  target?: PortalProps['target'];
}

export const Notifications: React.FC<NotificationsProps> & NotificationsStaticMethods = ({
  className,
  position = 'bottom-right',
  autoClose = 4000,
  transitionDuration = 250,
  containerWidth = rem(440),
  notificationMaxHeight = rem(200),
  limit = 5,
  zIndex = getDefaultZIndex('overlay'),
  style,
  children,
  target,
  ...others
}) => {
  const forceUpdate = useForceUpdate();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);
  const {
    notifications,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState({ limit });

  const { classes, cx, theme } = useStyles({ zIndex });
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split(
    '-'
  ) as NotificationsPositioning;

  useDidUpdate(() => {
    if (notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = notifications.length;
  }, [notifications]);

  useNotificationsEvents({
    show: showNotification,
    hide: hideNotification,
    update: updateNotification,
    clean,
    cleanQueue,
  });

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
          sx={[
            {
              ...getNotificationStateStyles({
                state,
                positioning,
                transitionDuration: duration,
                maxHeight: notificationMaxHeight,
              }),
            },
            ...(Array.isArray(notification.sx) ? notification.sx : [notification.sx]),
          ]}
        />
      )}
    </Transition>
  ));

  return (
    <Portal target={target}>
      <Box
        className={cx(classes.notifications, className)}
        style={style}
        sx={{
          maxWidth: containerWidth,
          ...getPositionStyles(positioning, theme.spacing.md),
        }}
        {...others}
      >
        <TransitionGroup>{items}</TransitionGroup>
      </Box>
    </Portal>
  );
};

Notifications.displayName = '@mantine/notifications/Notifications';
Notifications.show = GlobalNotifications.show;
Notifications.hide = GlobalNotifications.hide;
Notifications.update = GlobalNotifications.update;
Notifications.clean = GlobalNotifications.clean;
Notifications.cleanQueue = GlobalNotifications.cleanQueue;
