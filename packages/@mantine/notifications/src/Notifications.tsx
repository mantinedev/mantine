import { useEffect, useRef } from 'react';
import {
  Transition as _Transition,
  TransitionGroup,
  TransitionStatus,
} from 'react-transition-group';
import {
  BasePortalProps,
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  OptionalPortal,
  rem,
  RemoveScroll,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import {
  getGroupedNotifications,
  positions,
} from './get-grouped-notifications/get-grouped-notifications';
import { getNotificationStateStyles } from './get-notification-state-styles';
import { NotificationContainer } from './NotificationContainer';
import {
  hideNotification,
  NotificationPosition,
  notifications,
  NotificationsStore,
  notificationsStore,
  useNotifications,
} from './notifications.store';
import classes from './Notifications.module.css';

const Transition: any = _Transition;

export type NotificationsStylesNames = 'root' | 'notification';
export type NotificationsCssVariables = {
  root: '--notifications-z-index' | '--notifications-container-width';
};

export interface NotificationsProps
  extends BoxProps,
    StylesApiProps<NotificationsFactory>,
    ElementProps<'div'> {
  /** Notifications default position @default `'bottom-right'` */
  position?: NotificationPosition;

  /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function @default `4000` */
  autoClose?: number | false;

  /** Notification transition duration in ms @default `250` */
  transitionDuration?: number;

  /** Notification width, cannot exceed 100% @default `440` */
  containerWidth?: number | string;

  /** Notification `max-height`, used for transitions @default `200` */
  notificationMaxHeight?: number | string;

  /** Maximum number of notifications displayed at a time, other new notifications will be added to queue @default `5` */
  limit?: number;

  /** Notifications container z-index @default `400` */
  zIndex?: string | number;

  /** Props passed down to the `Portal` component */
  portalProps?: BasePortalProps;

  /** Store for notifications state, can be used to create multiple instances of notifications system in your application */
  store?: NotificationsStore;

  /** Determines whether notifications container should be rendered inside `Portal` @default `true` */
  withinPortal?: boolean;
}

export type NotificationsFactory = Factory<{
  props: NotificationsProps;
  ref: HTMLDivElement;
  stylesNames: NotificationsStylesNames;
  vars: NotificationsCssVariables;
  staticComponents: {
    show: typeof notifications.show;
    hide: typeof notifications.hide;
    update: typeof notifications.update;
    clean: typeof notifications.clean;
    cleanQueue: typeof notifications.cleanQueue;
    updateState: typeof notifications.updateState;
  };
}>;

const defaultProps = {
  position: 'bottom-right',
  autoClose: 4000,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: getDefaultZIndex('overlay'),
  store: notificationsStore,
  withinPortal: true,
} satisfies Partial<NotificationsProps>;

const varsResolver = createVarsResolver<NotificationsFactory>((_, { zIndex, containerWidth }) => ({
  root: {
    '--notifications-z-index': zIndex?.toString(),
    '--notifications-container-width': rem(containerWidth),
  },
}));

export const Notifications = factory<NotificationsFactory>((_props, ref) => {
  const props = useProps('Notifications', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    position,
    autoClose,
    transitionDuration,
    containerWidth,
    notificationMaxHeight,
    limit,
    zIndex,
    store,
    portalProps,
    withinPortal,
    ...others
  } = props;

  const theme = useMantineTheme();
  const data = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);

  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;

  const getStyles = useStyles<NotificationsFactory>({
    name: 'Notifications',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  useEffect(() => {
    store?.updateState((current) => ({
      ...current,
      limit: limit || 5,
      defaultPosition: position,
    }));
  }, [limit, position]);

  useDidUpdate(() => {
    if (data.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data.notifications.length;
  }, [data.notifications]);

  const grouped = getGroupedNotifications(data.notifications, position);
  const groupedComponents = positions.reduce(
    (acc, pos) => {
      acc[pos] = grouped[pos].map(({ style: notificationStyle, ...notification }) => (
        <Transition
          key={notification.id}
          timeout={duration}
          onEnter={() => refs.current[notification.id!].offsetHeight}
          nodeRef={{ current: refs.current[notification.id!] }}
        >
          {(state: TransitionStatus) => (
            <NotificationContainer
              ref={(node) => {
                if (node) {
                  refs.current[notification.id!] = node;
                }
              }}
              data={notification}
              onHide={(id) => hideNotification(id, store)}
              autoClose={autoClose}
              {...getStyles('notification', {
                style: {
                  ...getNotificationStateStyles({
                    state,
                    position: pos,
                    transitionDuration: duration,
                    maxHeight: notificationMaxHeight,
                  }),
                  ...notificationStyle,
                },
              })}
            />
          )}
        </Transition>
      ));

      return acc;
    },
    {} as Record<NotificationPosition, React.ReactNode>
  );

  return (
    <OptionalPortal withinPortal={withinPortal} {...portalProps}>
      {positions.map((pos, index) => {
        const hasNotifications = grouped[pos].length > 0;
        if (!hasNotifications) return null;

        const isFullWidth = pos === 'top-right' || pos === 'bottom-right';
        const isFirstContainer = index === 0;

        return (
          <Box
            key={pos}
            {...getStyles('root', {
              className: isFullWidth ? RemoveScroll.classNames.fullWidth : undefined,
            })}
            data-position={pos}
            ref={isFirstContainer ? ref : undefined}
            {...others}
          >
            <TransitionGroup>{groupedComponents[pos]}</TransitionGroup>
          </Box>
        );
      })}
    </OptionalPortal>
  );
});

Notifications.classes = classes;
Notifications.displayName = '@mantine/notifications/Notifications';
Notifications.show = notifications.show;
Notifications.hide = notifications.hide;
Notifications.update = notifications.update;
Notifications.clean = notifications.clean;
Notifications.cleanQueue = notifications.cleanQueue;
Notifications.updateState = notifications.updateState;
