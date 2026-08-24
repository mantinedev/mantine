import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  NotificationData,
  NotificationPosition,
  notifications,
  NotificationsStore,
  notificationsStore,
  updateNotificationsState,
  useNotifications,
} from './notifications.store';
import classes from './Notifications.module.css';

const Transition: any = _Transition;
const STACKED_NOTIFICATION_OFFSET = 8;
const STACKED_NOTIFICATION_GAP = 14;
const STACKED_NOTIFICATION_SCALE_STEP = 0.05;
const STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS = 3;
const STACKED_NOTIFICATION_FALLBACK_HEIGHT = 80;
const STACKED_NOTIFICATION_TRANSITION_DURATION = 400;
const STACKED_NOTIFICATIONS_LIMIT = Number.MAX_SAFE_INTEGER;

export type NotificationsStylesNames = 'root' | 'notification';
export type NotificationsCssVariables = {
  root: '--notifications-z-index' | '--notifications-container-width';
};

export interface NotificationsProps
  extends BoxProps, StylesApiProps<NotificationsFactory>, ElementProps<'div'> {
  /** Notifications default position @default 'bottom-right' */
  position?: NotificationPosition;

  /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function @default 4000 */
  autoClose?: number | false;

  /** Notification transition duration in ms @default 250 */
  transitionDuration?: number;

  /** Determines whether notifications can be dismissed by dragging left or right @default true */
  allowDragDismiss?: boolean;

  /** Determines whether notifications can be dismissed with horizontal scroll gesture while hovered @default true */
  allowScrollDismiss?: boolean;

  /** Notification width, cannot exceed 100% @default 440 */
  containerWidth?: number | string;

  /** Notification `max-height`, used for transitions @default 200 */
  notificationMaxHeight?: number | string;

  /** Maximum number of notifications displayed at a time, other new notifications will be added to queue @default 5 */
  limit?: number;

  /** Notifications container z-index @default 400 */
  zIndex?: string | number;

  /** Props passed down to the `Portal` component */
  portalProps?: BasePortalProps;

  /** Store for notifications state, can be used to create multiple instances of notifications system in your application */
  store?: NotificationsStore;

  /** Determines whether notifications container should be rendered inside `Portal` @default true */
  withinPortal?: boolean;

  /** Determines which notifications should pause auto close on hover, `'all'` – pauses auto close for all notifications when any notification is hovered, `'notification'` – pauses auto close only for the hovered notification @default 'all' */
  pauseResetOnHover?: 'all' | 'notification';

  /** Determines whether notifications should be stacked and expanded on hover/focus @default false */
  stacked?: boolean;
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
  allowDragDismiss: true,
  allowScrollDismiss: true,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: getDefaultZIndex('overlay'),
  store: notificationsStore,
  withinPortal: true,
  pauseResetOnHover: 'all',
  stacked: false,
} satisfies Partial<NotificationsProps>;

interface SequencedNotificationData extends NotificationData {
  __sequence?: number;
}

function isTopPosition(position: NotificationPosition) {
  return position.startsWith('top');
}

function getStackedNotifications(notifications: NotificationData[]) {
  return [...(notifications as SequencedNotificationData[])].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0) || (b.__sequence ?? 0) - (a.__sequence ?? 0)
  );
}

function getNotificationHeight(
  heights: Record<string, number>,
  notification: NotificationData | undefined
) {
  if (!notification?.id) {
    return STACKED_NOTIFICATION_FALLBACK_HEIGHT;
  }

  return heights[notification.id] || STACKED_NOTIFICATION_FALLBACK_HEIGHT;
}

function getExpandedOffset(
  notifications: NotificationData[],
  heights: Record<string, number>,
  index: number
) {
  return notifications
    .slice(0, index)
    .reduce(
      (acc, notification) =>
        acc + getNotificationHeight(heights, notification) + STACKED_NOTIFICATION_GAP,
      0
    );
}

function getStackedNotificationStateStyles({
  state,
  maxHeight,
  position,
  transitionDuration,
}: {
  state: TransitionStatus;
  maxHeight: number | string;
  position: NotificationPosition;
  transitionDuration: number;
}) {
  const transform = isTopPosition(position) ? 'translateY(-100%)' : 'translateY(100%)';
  const commonStyles: React.CSSProperties = {
    opacity: 0,
    maxHeight,
    transform,
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.21,1.02,.73,1), cubic-bezier(.21,1.02,.73,1), linear',
    transitionProperty: 'opacity, transform, max-height',
  };
  const inState: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0)',
  };
  const outState: React.CSSProperties = {
    opacity: 0,
    maxHeight: 0,
    transform,
  };
  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...commonStyles, ...transitionStyles[state as keyof typeof transitionStyles] };
}

function getStackHeight(
  notifications: NotificationData[],
  heights: Record<string, number>,
  expanded: boolean
) {
  if (notifications.length === 0) {
    return 0;
  }

  if (!expanded) {
    return (
      getNotificationHeight(heights, notifications[0]) +
      Math.min(notifications.length - 1, STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS) *
        STACKED_NOTIFICATION_OFFSET
    );
  }

  const visibleNotifications = notifications.slice(
    0,
    STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS + 1
  );

  return (
    visibleNotifications.reduce(
      (acc, notification) => acc + getNotificationHeight(heights, notification),
      0
    ) +
    (visibleNotifications.length - 1) * STACKED_NOTIFICATION_GAP
  );
}

function getStackedNotificationStyle({
  notifications,
  heights,
  index,
  position,
  expanded,
  transitionDuration,
}: {
  notifications: NotificationData[];
  heights: Record<string, number>;
  index: number;
  position: NotificationPosition;
  expanded: boolean;
  transitionDuration: number;
}) {
  const direction = isTopPosition(position) ? 1 : -1;
  const visiblePreviewIndex = Math.min(index, STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS + 1);
  const collapsedOffset = visiblePreviewIndex * STACKED_NOTIFICATION_OFFSET;
  const expandedOffset = getExpandedOffset(notifications, heights, index);
  const offset = expanded ? expandedOffset : collapsedOffset;
  const frontNotificationHeight = getNotificationHeight(heights, notifications[0]);
  const scale =
    expanded || index > STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS
      ? 1
      : 1 - visiblePreviewIndex * STACKED_NOTIFICATION_SCALE_STEP;
  const isVisible = index <= STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS;

  return {
    ['--notifications-stack-transform' as string]: `translate3d(0, ${
      direction * offset
    }px, 0) scale(${scale})`,
    ['--notifications-stack-opacity' as string]: isVisible ? '1' : '0',
    ['--notifications-stack-content-opacity' as string]:
      (expanded && isVisible) || index === 0 ? '1' : '0',
    zIndex: notifications.length - index,
    pointerEvents: isVisible && (index === 0 || expanded) ? 'auto' : 'none',
    height: !expanded && index > 0 ? frontNotificationHeight : undefined,
    overflow: !expanded && index > 0 ? 'hidden' : undefined,
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.21,1.02,.73,1), cubic-bezier(.21,1.02,.73,1), linear',
  } as React.CSSProperties;
}

const varsResolver = createVarsResolver<NotificationsFactory>((_, { zIndex, containerWidth }) => ({
  root: {
    '--notifications-z-index': zIndex?.toString(),
    '--notifications-container-width': rem(containerWidth),
  },
}));

export const Notifications = factory<NotificationsFactory>((_props) => {
  const props = useProps('Notifications', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    position,
    autoClose,
    transitionDuration,
    allowDragDismiss,
    allowScrollDismiss,
    containerWidth,
    notificationMaxHeight,
    limit,
    zIndex,
    store,
    portalProps,
    withinPortal,
    pauseResetOnHover,
    stacked,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...others
  } = props;

  const theme = useMantineTheme();
  const data = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);
  const [hoveredCount, setHoveredCount] = useState(0);
  const [notificationHeights, setNotificationHeights] = useState<Record<string, number>>({});
  const [expandedPositions, setExpandedPositions] = useState<Record<NotificationPosition, boolean>>(
    {} as Record<NotificationPosition, boolean>
  );

  const handleHoverStart = useCallback(() => setHoveredCount((c) => c + 1), []);
  const handleHoverEnd = useCallback(() => setHoveredCount((c) => Math.max(0, c - 1)), []);
  const handleHeightChange = useCallback((id: string, height: number | null) => {
    setNotificationHeights((current) => {
      if (height === null) {
        const next = { ...current };
        delete next[id];
        return next;
      }

      if (current[id] === height) {
        return current;
      }

      return { ...current, [id]: height };
    });
  }, []);

  const setPositionExpanded = useCallback((pos: NotificationPosition, expanded: boolean) => {
    setExpandedPositions((current) => {
      if ((current[pos] ?? false) === expanded) {
        return current;
      }

      return { ...current, [pos]: expanded };
    });
  }, []);

  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 1 : transitionDuration;
  const isStacked = stacked;
  const stackDuration = reduceMotion
    ? 1
    : Math.max(duration, STACKED_NOTIFICATION_TRANSITION_DURATION);

  const getStyles = useStyles<NotificationsFactory>({
    name: 'Notifications',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  useEffect(() => {
    const nextLimit = isStacked ? STACKED_NOTIFICATIONS_LIMIT : limit || 5;
    const shouldRedistribute = store?.getState().limit !== nextLimit;

    store?.updateState((current) => ({
      ...current,
      limit: nextLimit,
      defaultPosition: position,
    }));

    if (store && shouldRedistribute) {
      updateNotificationsState(store, (current) => current);
    }
  }, [isStacked, limit, position, store]);

  useDidUpdate(() => {
    if (data.notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0);
    }
    previousLength.current = data.notifications.length;
  }, [data.notifications]);

  const grouped = getGroupedNotifications(data.notifications, position);
  const expandedStackCount = useMemo(
    () => Object.values(expandedPositions).filter(Boolean).length,
    [expandedPositions]
  );
  const groupedComponents = positions.reduce(
    (acc, pos) => {
      const currentGroup = isStacked ? getStackedNotifications(grouped[pos]) : grouped[pos];
      const stackExpanded = expandedPositions[pos] ?? false;

      acc[pos] = currentGroup.map(({ style: notificationStyle, ...notification }, index) => {
        const hiddenFromAccessibility =
          isStacked &&
          (stackExpanded ? index > STACKED_NOTIFICATION_MAX_VISIBLE_PREVIEWS : index > 0);

        return (
          <Transition
            key={notification.id}
            timeout={isStacked ? stackDuration : duration}
            onEnter={() => refs.current[notification.id!].offsetHeight}
            nodeRef={{ current: refs.current[notification.id!] }}
          >
            {(state: TransitionStatus) => (
              <NotificationContainer
                ref={(node) => {
                  if (node) {
                    refs.current[notification.id!] = node;
                  } else {
                    delete refs.current[notification.id!];
                  }
                }}
                data={notification}
                onHide={(id) => hideNotification(id, store)}
                autoClose={autoClose}
                transitionDuration={isStacked ? stackDuration : duration}
                allowDragDismiss={allowDragDismiss}
                allowScrollDismiss={allowScrollDismiss}
                paused={
                  pauseResetOnHover === 'all'
                    ? hoveredCount > 0 || (isStacked && expandedStackCount > 0)
                    : false
                }
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                onHeightChange={isStacked ? handleHeightChange : undefined}
                {...getStyles('notification', {
                  style: {
                    ...getNotificationStateStyles({
                      state,
                      position: pos,
                      transitionDuration: duration,
                      maxHeight: notificationMaxHeight,
                    }),
                    ...(isStacked
                      ? getStackedNotificationStateStyles({
                          state,
                          position: pos,
                          transitionDuration: stackDuration,
                          maxHeight: notificationMaxHeight,
                        })
                      : null),
                    ...(isStacked
                      ? getStackedNotificationStyle({
                          notifications: currentGroup,
                          heights: notificationHeights,
                          index,
                          position: pos,
                          expanded: stackExpanded,
                          transitionDuration: stackDuration,
                        })
                      : null),
                    ...notificationStyle,
                  },
                })}
                data-stack-preview={isStacked && !stackExpanded && index > 0 ? true : undefined}
                aria-hidden={hiddenFromAccessibility ? true : undefined}
                inert={hiddenFromAccessibility ? true : undefined}
              />
            )}
          </Transition>
        );
      });

      return acc;
    },
    {} as Record<NotificationPosition, React.ReactNode>
  );

  const getRootProps = (pos: NotificationPosition) => {
    const stackExpanded = expandedPositions[pos] ?? false;

    return {
      ...(isStacked
        ? {
            'data-stacked': true,
            'data-expanded': stackExpanded || undefined,
          }
        : null),
      onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => {
        onMouseEnter?.(event);
        if (isStacked) {
          setPositionExpanded(pos, true);
        }
      },
      onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => {
        onMouseLeave?.(event);
        if (
          isStacked &&
          !event.currentTarget.contains(event.currentTarget.ownerDocument.activeElement)
        ) {
          setPositionExpanded(pos, false);
        }
      },
      onFocus: (event: React.FocusEvent<HTMLDivElement>) => {
        onFocus?.(event);
        if (isStacked) {
          setPositionExpanded(pos, true);
        }
      },
      onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
        onBlur?.(event);
        if (isStacked && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPositionExpanded(pos, false);
        }
      },
    };
  };

  const getRootStyle = (pos: NotificationPosition) => {
    if (!isStacked) {
      return undefined;
    }

    const currentGroup = getStackedNotifications(grouped[pos]);
    const stackExpanded = expandedPositions[pos] ?? false;

    return {
      ['--notifications-stack-height' as string]: `${getStackHeight(
        currentGroup,
        notificationHeights,
        stackExpanded
      )}px`,
      ['--notifications-stack-transition-duration' as string]: `${stackDuration}ms`,
    } as React.CSSProperties;
  };

  return (
    <OptionalPortal withinPortal={withinPortal} {...portalProps}>
      <Box
        {...getStyles('root', { style: getRootStyle('top-center') })}
        data-position="top-center"
        {...getRootProps('top-center')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['top-center']}</TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', { style: getRootStyle('top-left') })}
        data-position="top-left"
        {...getRootProps('top-left')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['top-left']}</TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', {
          className: RemoveScroll.classNames.fullWidth,
          style: getRootStyle('top-right'),
        })}
        data-position="top-right"
        {...getRootProps('top-right')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['top-right']}</TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', {
          className: RemoveScroll.classNames.fullWidth,
          style: getRootStyle('bottom-right'),
        })}
        data-position="bottom-right"
        {...getRootProps('bottom-right')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['bottom-right']}</TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', { style: getRootStyle('bottom-left') })}
        data-position="bottom-left"
        {...getRootProps('bottom-left')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['bottom-left']}</TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', { style: getRootStyle('bottom-center') })}
        data-position="bottom-center"
        {...getRootProps('bottom-center')}
        {...others}
      >
        <TransitionGroup>{groupedComponents['bottom-center']}</TransitionGroup>
      </Box>
    </OptionalPortal>
  );
});

Notifications.classes = classes;
Notifications.varsResolver = varsResolver;
Notifications.displayName = '@mantine/notifications/Notifications';
Notifications.show = notifications.show;
Notifications.hide = notifications.hide;
Notifications.update = notifications.update;
Notifications.clean = notifications.clean;
Notifications.cleanQueue = notifications.cleanQueue;
Notifications.updateState = notifications.updateState;
