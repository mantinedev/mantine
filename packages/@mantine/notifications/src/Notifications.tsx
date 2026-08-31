import { useCallback, useEffect, useRef, useState } from 'react';
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
  SequencedNotificationData,
  useNotifications,
} from './notifications.store';
import classes from './Notifications.module.css';

const Transition: any = _Transition;

/** Vertical gap between notifications of an expanded stack, in px */
const STACK_EXPANDED_GAP = 16;

/** Offset step used for a notification that has not been measured yet, in px */
const FALLBACK_NOTIFICATION_HEIGHT = 80;

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

  /** Custom render function that replaces the default notification, can be overridden per notification */
  renderNotification?: (notification: NotificationData) => React.ReactNode;

  /** Controls how notifications are positioned in the stack, `'default'` – standard vertical list, `'stacked'` – only first notification is fully visible, rest are stacked behind @default 'default' */
  layout?: 'default' | 'stacked';
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
  layout: 'default',
} satisfies Partial<NotificationsProps>;

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
    renderNotification,
    layout,
    ...others
  } = props;

  const theme = useMantineTheme();
  const data = useNotifications(store);
  const forceUpdate = useForceUpdate();
  const shouldReduceMotion = useReducedMotion();
  const refs = useRef<Record<string, HTMLDivElement>>({});
  const previousLength = useRef<number>(0);
  // Every position renders its own stack, so hover, expansion and pinning are tracked per
  // position – a single shared flag made hovering one corner expand all six of them.
  const [hoveredCounts, setHoveredCounts] = useState<Partial<Record<NotificationPosition, number>>>(
    {}
  );
  const [expandedPositions, setExpandedPositions] = useState<
    Partial<Record<NotificationPosition, boolean>>
  >({});
  const [hoveredGroups, setHoveredGroups] = useState<
    Partial<Record<NotificationPosition, boolean>>
  >({});
  const [pinnedPosition, setPinnedPosition] = useState<NotificationPosition | null>(null);
  const collapseTimeouts = useRef<Partial<Record<NotificationPosition, number>>>({});

  // `pauseResetOnHover="all"` is documented as pausing every notification when any one of
  // them is hovered, so this stays global while the stack state above does not.
  const hoveredCount =
    Object.values(hoveredCounts).reduce((acc, count) => acc + (count ?? 0), 0) +
    Object.values(hoveredGroups).filter(Boolean).length;

  const handleHoverStart = useCallback(
    (pos: NotificationPosition) =>
      setHoveredCounts((current) => ({ ...current, [pos]: (current[pos] ?? 0) + 1 })),
    []
  );

  const handleHoverEnd = useCallback(
    (pos: NotificationPosition) =>
      setHoveredCounts((current) => ({ ...current, [pos]: Math.max(0, (current[pos] ?? 0) - 1) })),
    []
  );

  // A stacked stack is also tracked on the group element that wraps it, not only on the
  // individual notifications. When the hovered notification unmounts, React does not deliver
  // `onMouseEnter` to the one that slides under a stationary pointer: the browser dispatches
  // only a `mouseover` for the new target (no `mouseout`, the old node is gone), and the
  // enter/leave plugin drops it because its `relatedTarget` still resolves to a React
  // instance. The group is hovered throughout, so its state needs no event to stay correct
  // and the stack stays open until the pointer really leaves.
  // Kept apart from the notification counter above so that it can be released on its own –
  // the group has no unmount hook to fall back on the way a notification does.
  const getGroupHoverProps = useCallback(
    (pos: NotificationPosition) =>
      layout === 'stacked'
        ? {
            onMouseEnter: () => setHoveredGroups((current) => ({ ...current, [pos]: true })),
            onMouseLeave: () => setHoveredGroups((current) => ({ ...current, [pos]: false })),
          }
        : {},
    [layout]
  );

  // Touch devices have no hover, so tapping the stack pins it open until the next tap
  // outside of it. Without this the notifications behind the first one are unreachable.
  const handleExpandRequest = useCallback(
    (pos: NotificationPosition) => setPinnedPosition(pos),
    []
  );

  useEffect(() => {
    if (layout !== 'stacked') {
      return undefined;
    }

    const timeouts = collapseTimeouts.current;

    positions.forEach((pos) => {
      if ((hoveredCounts[pos] ?? 0) > 0 || hoveredGroups[pos] || pinnedPosition === pos) {
        window.clearTimeout(timeouts[pos]);
        setExpandedPositions((current) => (current[pos] ? current : { ...current, [pos]: true }));
      } else {
        timeouts[pos] = window.setTimeout(() => {
          setExpandedPositions((current) =>
            current[pos] ? { ...current, [pos]: false } : current
          );
        }, 200);
      }
    });

    return () => positions.forEach((pos) => window.clearTimeout(timeouts[pos]));
  }, [hoveredCounts, hoveredGroups, pinnedPosition, layout]);

  useEffect(() => {
    if (!pinnedPosition) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      const insideStack =
        target !== null && Object.values(refs.current).some((element) => element?.contains(target));

      if (!insideStack) {
        setPinnedPosition(null);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [pinnedPosition]);

  const grouped = getGroupedNotifications(data.notifications, position);
  const pinnedCount = pinnedPosition ? grouped[pinnedPosition].length : 0;

  useEffect(() => {
    if (layout !== 'stacked' || (pinnedPosition !== null && pinnedCount === 0)) {
      setPinnedPosition(null);
    }
  }, [pinnedCount, pinnedPosition, layout]);

  // The group element outlives the notifications inside it, and loses its handlers entirely
  // when `layout` stops being `stacked`, so neither case is guaranteed to produce the
  // `mouseleave` that would release it. A stack that is empty or no longer stacked cannot be
  // hovered, so it is released explicitly – otherwise it would keep auto close paused for
  // every notification shown after it.
  const releasedGroups = positions
    .filter((pos) => layout !== 'stacked' || grouped[pos].length === 0)
    .join(' ');

  useEffect(() => {
    setHoveredGroups((current) => {
      const next = { ...current };
      let changed = false;

      releasedGroups.split(' ').forEach((pos) => {
        if (next[pos as NotificationPosition]) {
          next[pos as NotificationPosition] = false;
          changed = true;
        }
      });

      return changed ? next : current;
    });
  }, [releasedGroups]);

  // Expanded stack offsets need the height of every notification. Measuring during render
  // would force a layout pass on every hover, focus and store update, so heights are cached
  // here and refreshed from the ResizeObserver – which also covers a notification that grows
  // after mount (image loads, async content, viewport reflow) and would otherwise leave the
  // ones after it overlapping or gapped until something else triggered a render.
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const measuredHeights = useRef<Record<string, number>>({});
  const observedIds = useRef(new WeakMap<Element, string>());

  const measureNotification = useCallback((id: string, element: HTMLElement) => {
    const height = element.offsetHeight;

    if (measuredHeights.current[id] === height) {
      return false;
    }

    measuredHeights.current[id] = height;
    return true;
  }, []);

  useEffect(() => {
    if (layout !== 'stacked' || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      let changed = false;

      entries.forEach((entry) => {
        const id = observedIds.current.get(entry.target);

        if (id && measureNotification(id, entry.target as HTMLElement)) {
          changed = true;
        }
      });

      if (changed) {
        forceUpdate();
      }
    });

    resizeObserver.current = observer;
    Object.values(refs.current).forEach((element) => element && observer.observe(element));

    return () => {
      observer.disconnect();
      resizeObserver.current = null;
    };
  }, [layout, forceUpdate, measureNotification]);

  const refCallbacks = useRef<Record<string, (node: HTMLDivElement | null) => void>>({});

  const getNotificationRef = useCallback(
    (id: string) => {
      if (!refCallbacks.current[id]) {
        refCallbacks.current[id] = (node: HTMLDivElement | null) => {
          const previous = refs.current[id];

          if (previous && previous !== node) {
            resizeObserver.current?.unobserve(previous);
            observedIds.current.delete(previous);
          }

          if (node) {
            refs.current[id] = node;
            observedIds.current.set(node, id);
            // Measured here rather than during render – the commit phase is where a layout
            // read is already paid for, and the ResizeObserver keeps the value fresh after.
            measureNotification(id, node);
            resizeObserver.current?.observe(node);
          } else {
            delete refs.current[id];
            delete refCallbacks.current[id];
            delete measuredHeights.current[id];
          }
        };
      }

      return refCallbacks.current[id];
    },
    [measureNotification]
  );

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
    attributes,
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

  const groupedComponents = positions.reduce(
    (acc, pos) => {
      const groupLength = grouped[pos].length;
      const expandedOffsets: number[] = new Array(groupLength).fill(0);
      const stackExpanded = layout === 'stacked' && !!expandedPositions[pos];

      // `grouped[pos]` is sorted by priority descending, with equal priorities in insertion
      // order. A stack is rendered front to back, so `stackOrder[0]` is the notification in
      // front: the most urgent one, and the newest among equal priorities – only the
      // tie-break is reversed here. Taking the front from the end of the priority-sorted
      // array instead would put the *lowest* priority notification in front and leave an
      // urgent one inert behind it.
      // Rendering front first also keeps DOM order matching the visual stack – otherwise a
      // forward Tab from the front notification (the only focusable one while collapsed)
      // skips past the ones it just un-inerted and leaves the region. Placement is
      // unaffected: stacked notifications share one grid cell and are positioned by
      // transform and an explicit z-index.
      const stackOrder =
        layout === 'stacked'
          ? [...(grouped[pos] as SequencedNotificationData[])].sort(
              (a, b) =>
                (b.priority ?? 0) - (a.priority ?? 0) || (b.__sequence ?? 0) - (a.__sequence ?? 0)
            )
          : grouped[pos];

      if (stackExpanded && groupLength > 0) {
        const direction = pos.startsWith('top') ? 1 : -1;
        let cumOffset = 0;

        for (let i = 0; i < groupLength; i += 1) {
          expandedOffsets[i] = cumOffset * direction;
          cumOffset +=
            (measuredHeights.current[stackOrder[i].id!] || FALLBACK_NOTIFICATION_HEIGHT) +
            STACK_EXPANDED_GAP;
        }
      }

      acc[pos] = stackOrder.map((item, stackIndex) => {
        const { style: notificationStyle, ...notification } = item;

        return (
          <Transition
            key={notification.id}
            timeout={duration}
            onEnter={() => refs.current[notification.id!].offsetHeight}
            nodeRef={{ current: refs.current[notification.id!] }}
          >
            {(state: TransitionStatus) => (
              <NotificationContainer
                ref={getNotificationRef(notification.id!)}
                data={notification}
                onHide={(id) => hideNotification(id, store)}
                autoClose={autoClose}
                transitionDuration={duration}
                allowDragDismiss={allowDragDismiss}
                allowScrollDismiss={allowScrollDismiss}
                paused={
                  (pauseResetOnHover === 'all' ? hoveredCount > 0 : false) ||
                  (layout === 'stacked' && !stackExpanded && stackIndex > 0)
                }
                onHoverStart={() => handleHoverStart(pos)}
                onHoverEnd={() => handleHoverEnd(pos)}
                onExpandRequest={() => handleExpandRequest(pos)}
                renderNotification={
                  'renderNotification' in notification
                    ? notification.renderNotification
                    : renderNotification
                }
                layout={layout}
                stackIndex={stackIndex}
                stackSize={groupLength}
                stackPosition={pos}
                stackExpanded={stackExpanded}
                stackExpandedOffset={expandedOffsets[stackIndex]}
                transitionState={state}
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
        );
      });

      return acc;
    },
    {} as Record<NotificationPosition, React.ReactNode>
  );

  return (
    <OptionalPortal withinPortal={withinPortal} {...portalProps}>
      <Box {...getStyles('root')} data-position="top-center" data-layout={layout} {...others}>
        <TransitionGroup {...getGroupHoverProps('top-center')}>
          {groupedComponents['top-center']}
        </TransitionGroup>
      </Box>

      <Box {...getStyles('root')} data-position="top-left" data-layout={layout} {...others}>
        <TransitionGroup {...getGroupHoverProps('top-left')}>
          {groupedComponents['top-left']}
        </TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', { className: RemoveScroll.classNames.fullWidth })}
        data-position="top-right"
        data-layout={layout}
        {...others}
      >
        <TransitionGroup {...getGroupHoverProps('top-right')}>
          {groupedComponents['top-right']}
        </TransitionGroup>
      </Box>

      <Box
        {...getStyles('root', { className: RemoveScroll.classNames.fullWidth })}
        data-position="bottom-right"
        data-layout={layout}
        {...others}
      >
        <TransitionGroup {...getGroupHoverProps('bottom-right')}>
          {groupedComponents['bottom-right']}
        </TransitionGroup>
      </Box>

      <Box {...getStyles('root')} data-position="bottom-left" data-layout={layout} {...others}>
        <TransitionGroup {...getGroupHoverProps('bottom-left')}>
          {groupedComponents['bottom-left']}
        </TransitionGroup>
      </Box>

      <Box {...getStyles('root')} data-position="bottom-center" data-layout={layout} {...others}>
        <TransitionGroup {...getGroupHoverProps('bottom-center')}>
          {groupedComponents['bottom-center']}
        </TransitionGroup>
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
