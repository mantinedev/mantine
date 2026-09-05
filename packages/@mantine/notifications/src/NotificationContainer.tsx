import { useEffect, useEffectEvent, useRef, useState } from 'react';
import {
  extractStyleProps,
  getStyleObject,
  Notification,
  NotificationProps,
  useMantineTheme,
} from '@mantine/core';
import { useDrag, useMergedRef } from '@mantine/hooks';
import { getAutoClose } from './get-auto-close/get-auto-close';
import { NotificationData } from './notifications.store';

const SCROLL_DISMISS_RESET_TIMEOUT = 120;

interface NotificationContainerProps extends NotificationProps {
  data: NotificationData;
  onHide: (id: string) => void;
  autoClose: number | false;
  transitionDuration: number;
  allowDragDismiss: boolean;
  allowScrollDismiss: boolean;
  paused: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onExpandRequest?: () => void;
  ref?: React.Ref<HTMLDivElement>;
  renderNotification?: ((notification: NotificationData) => React.ReactNode) | null;
  layout?: 'default' | 'stacked';
  stackIndex?: number;
  stackSize?: number;
  stackPosition?: string;
  stackExpanded?: boolean;
  stackExpandedOffset?: number;
  transitionState?: string;
}

const MAX_VISIBLE_STACK_DEPTH = 4;

/**
 * Props that belong to the default `Notification` rendering or to the Styles API and must
 * not reach the plain `div` used for custom rendering. Everything else is a valid div prop
 * and is forwarded – an allow list would silently drop supported props like `onClick`,
 * `dir`, `lang` or `hidden`.
 */
const NON_DOM_PROPS = new Set([
  'classNames',
  'styles',
  'unstyled',
  'vars',
  'attributes',
  'variant',
  'color',
  'radius',
  'icon',
  'title',
  'loading',
  'withBorder',
  'withCloseButton',
  'closeButtonProps',
  'className',
  'style',
  'role',
  'ref',
  'children',
  'mod',
]);

function pickDomProps(props: Record<string, any>) {
  // Mantine style props (`mt`, `bg`, `w`, …) are valid `NotificationProps` but are not DOM
  // attributes, so they are separated out rather than leaked onto the element.
  const { rest } = extractStyleProps(props);

  return Object.fromEntries(
    Object.entries(rest).filter(([key, value]) => !NON_DOM_PROPS.has(key) && value !== undefined)
  );
}

export function NotificationContainer({
  data,
  onHide,
  autoClose,
  transitionDuration,
  allowDragDismiss,
  allowScrollDismiss,
  paused,
  onHoverStart,
  onHoverEnd,
  onExpandRequest,
  ref,
  style,
  renderNotification,
  layout,
  stackIndex,
  stackSize,
  stackPosition,
  stackExpanded,
  stackExpandedOffset,
  transitionState,
  ...others
}: NotificationContainerProps) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [dismissDirection, setDismissDirection] = useState<-1 | 1>(1);
  const [scrollDismissActive, setScrollDismissActive] = useState(false);
  const theme = useMantineTheme();
  const {
    autoClose: _autoClose,
    message,
    allowClose,
    position: _position,
    style: dataStyle,
    withCloseButton,
    renderNotification: _renderNotification,
    onOpen: _onOpen,
    priority: _priority,
    __sequence: _sequence,
    ...notificationProps
  } = data as NotificationData & { __sequence?: number };
  const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
  const autoCloseTimeout = useRef<number>(-1);
  const hideTimeout = useRef<number>(-1);
  const scrollDismissTimeout = useRef<number>(-1);
  const notificationRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);

  // Hover and focus both keep the notification "active". The contribution to the parent
  // counter is tracked so it can be released on unmount – a notification dismissed while
  // hovered or focused never fires `mouseleave` or `blur`, which would otherwise leave the
  // stack expanded and auto close paused forever.
  const contributedActiveRef = useRef(false);
  const offsetRef = useRef(0);
  const isCloseDisabled = allowClose === false;

  const syncActive = () => {
    const shouldContribute = hoveredRef.current || focusedRef.current;

    if (shouldContribute && !contributedActiveRef.current) {
      contributedActiveRef.current = true;
      onHoverStart?.();
    } else if (!shouldContribute && contributedActiveRef.current) {
      contributedActiveRef.current = false;
      onHoverEnd?.();
    }
  };

  const releaseActive = useEffectEvent(() => {
    if (contributedActiveRef.current) {
      contributedActiveRef.current = false;
      onHoverEnd?.();
    }
  });

  useEffect(() => () => releaseActive(), []);

  const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);
  const cancelHide = () => window.clearTimeout(hideTimeout.current);
  const cancelScrollDismissReset = () => window.clearTimeout(scrollDismissTimeout.current);

  const setSwipeOffset = (value: number) => {
    offsetRef.current = value;
    setOffset(value);
  };

  const handleHide = () => {
    onHide(data.id!);
    cancelAutoClose();
    cancelHide();
    cancelScrollDismissReset();
  };

  // `handleAutoClose` is also called from timeouts scheduled in earlier renders, so the
  // latest `paused` is read through a ref. Written in an effect rather than during render –
  // this effect is declared before every effect that calls `handleAutoClose`, so it is
  // always up to date by the time they run.
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  });

  const handleAutoClose = () => {
    if (
      dismissed ||
      active ||
      hoveredRef.current ||
      focusedRef.current ||
      pausedRef.current ||
      typeof autoCloseDuration !== 'number'
    ) {
      return;
    }

    cancelAutoClose();
    autoCloseTimeout.current = window.setTimeout(handleHide, autoCloseDuration);
  };

  const getExitOffset = (direction: -1 | 1) => {
    const width = notificationRef.current?.offsetWidth ?? 440;
    return direction * (width + 40);
  };

  const shouldDismiss = (movement: number, velocity: number) => {
    const width = notificationRef.current?.offsetWidth ?? 440;
    return Math.abs(movement) > width * 0.35 || velocity > 0.5;
  };

  const resetSwipe = () => {
    cancelScrollDismissReset();
    setScrollDismissActive(false);
    setSwipeOffset(0);
  };

  const dismissNotification = (direction: -1 | 1) => {
    setDismissDirection(direction);
    setDismissed(true);
    setScrollDismissActive(false);
    setSwipeOffset(getExitOffset(direction));
    cancelAutoClose();
    cancelHide();
    cancelScrollDismissReset();
    hideTimeout.current = window.setTimeout(handleHide, transitionDuration);
  };

  const scheduleScrollDismissReset = () => {
    cancelScrollDismissReset();
    scrollDismissTimeout.current = window.setTimeout(() => {
      setScrollDismissActive(false);
      setSwipeOffset(0);
      handleAutoClose();
    }, SCROLL_DISMISS_RESET_TIMEOUT);
  };

  const { ref: dragRef, active } = useDrag<HTMLDivElement>(
    (state) => {
      if (dismissed) {
        return;
      }

      if (state.first) {
        cancelAutoClose();
      }

      if (state.last) {
        if (state.tap || state.canceled) {
          setSwipeOffset(0);
          handleAutoClose();
          return;
        }

        const movement = state.movement[0];
        const direction =
          movement === 0 ? (state.direction[0] === -1 ? -1 : 1) : movement > 0 ? 1 : -1;

        if (shouldDismiss(movement, state.velocity[0])) {
          dismissNotification(direction);
        } else {
          setSwipeOffset(0);
          handleAutoClose();
        }
      } else {
        setSwipeOffset(state.movement[0]);
      }
    },
    {
      axis: 'x',
      threshold: 5,
      filterTaps: true,
      enabled: allowDragDismiss && !isCloseDisabled && !dismissed,
    }
  );

  const mergedRef = useMergedRef(ref, notificationRef, dragRef);
  const resolvedStyle = getStyleObject(style, theme);
  const resolvedDataStyle = getStyleObject(dataStyle, theme);
  const baseStyle = { ...resolvedStyle, ...resolvedDataStyle };
  const baseOpacity = typeof baseStyle.opacity === 'number' ? baseStyle.opacity : 1;
  const swipeOpacity = dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6;
  const resolvedTransitionDuration =
    baseStyle.transitionDuration ??
    `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`;

  const isStackedLayout = layout === 'stacked';
  const isStacked = isStackedLayout && stackIndex !== undefined && stackIndex > 0;
  const isCollapsed = isStacked && !stackExpanded;
  const isExiting = transitionState === 'exiting' || transitionState === 'exited';
  const stackDirection = stackPosition?.startsWith('top') ? 1 : -1;

  // Only a few layers are visible behind the front notification – without a cap the scale
  // below reaches 0 at 34 stacked notifications and inverts beyond that, which `limit` can
  // easily exceed.
  const stackDepth = Math.min(stackIndex ?? 0, MAX_VISIBLE_STACK_DEPTH);
  const collapsedOffset = isCollapsed ? stackDepth * 10 * stackDirection : 0;
  const staggerDelay = isStackedLayout ? (stackIndex || 0) * 30 : 0;
  const isDragging = active || scrollDismissActive;

  const getStackedTransform = () => {
    if (!isStackedLayout) {
      return 'var(--notifications-state-transform) translate3d(var(--notifications-swipe-offset), 0, 0)';
    }

    if (isExiting) {
      const exitOffset = stackExpanded ? stackExpandedOffset || 0 : collapsedOffset;
      return `translateY(${exitOffset}px) var(--notifications-state-transform) translate3d(var(--notifications-swipe-offset), 0, 0)`;
    }

    if (stackExpanded) {
      return `translateY(${stackExpandedOffset || 0}px) translate3d(var(--notifications-swipe-offset), 0, 0)`;
    }

    if (isStacked) {
      return `scale(${1 - stackDepth * 0.03}) translateY(${collapsedOffset}px)`;
    }

    return 'var(--notifications-state-transform) translate3d(var(--notifications-swipe-offset), 0, 0)';
  };

  const notificationStyle = {
    ...baseStyle,
    ...(isStackedLayout ? { maxHeight: undefined } : {}),
    ['--notifications-state-transform' as string]:
      typeof baseStyle.transform === 'string' ? baseStyle.transform : 'translateX(0)',
    ['--notifications-state-opacity' as string]: String(baseOpacity),
    ['--notifications-swipe-offset' as string]: `${offset}px`,
    ['--notifications-swipe-opacity' as string]: String(swipeOpacity),
    transform: getStackedTransform(),
    opacity: 'calc(var(--notifications-state-opacity) * var(--notifications-swipe-opacity))',
    transitionDuration: isDragging ? '0ms, 0ms, 0ms' : resolvedTransitionDuration,
    cursor: 'default',
    touchAction: 'pan-y',
    ...(isStackedLayout
      ? {
          gridArea: '1 / 1' as const,
          // `z-index` is not animatable, so it must not depend on `stackExpanded` – flipping
          // the stack to a single layer on hover repaints every notification in front of the
          // first one a frame before the reveal transform has moved anything.
          zIndex: (stackSize || 5) - (stackIndex ?? 0),
          pointerEvents: isCollapsed ? ('none' as const) : undefined,
          alignSelf: stackDirection === 1 ? ('start' as const) : ('end' as const),
          transitionProperty: isDragging ? 'none' : 'transform, opacity',
          transitionDuration: `${transitionDuration}ms`,
          transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), ease',
          transitionDelay: isDragging || isExiting ? '0ms' : `${staggerDelay}ms`,
        }
      : {}),
  } as React.CSSProperties;

  const handleMouseEnter = () => {
    hoveredRef.current = true;
    cancelAutoClose();
    syncActive();
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    if (!scrollDismissActive) {
      resetSwipe();
      handleAutoClose();
    }
    syncActive();
  };

  // Keyboard users never trigger the hover handlers, and touch devices have no hover at
  // all – both need a way to expand a collapsed stack. Scoped to the stacked layout: its
  // only purpose is keeping the stack expanded, and applying it everywhere would silently
  // change the default layout, where a notification that merely contains the focused
  // element (an action button the user just clicked) would stop auto closing.
  const handleFocusCapture = isStackedLayout
    ? () => {
        focusedRef.current = true;
        cancelAutoClose();
        syncActive();
      }
    : undefined;

  const handleBlurCapture = isStackedLayout
    ? () => {
        focusedRef.current = false;
        if (!scrollDismissActive) {
          handleAutoClose();
        }
        syncActive();
      }
    : undefined;

  const handlePointerDownCapture = (event: React.PointerEvent) => {
    // Explicitly opt in for touch and pen: hover already covers the mouse, and an unknown
    // pointer type should not pin the stack open.
    if (isStackedLayout && (event.pointerType === 'touch' || event.pointerType === 'pen')) {
      onExpandRequest?.();
    }
  };

  const handleWheel = useEffectEvent((event: WheelEvent) => {
    if (dismissed || active) {
      return;
    }

    const isDocumentEvent = event.currentTarget === document;
    if (!isDocumentEvent && !hoveredRef.current) {
      return;
    }

    const { deltaX, deltaY } = event;
    if (Math.abs(deltaX) <= Math.abs(deltaY) || deltaX === 0) {
      return;
    }

    if (!allowScrollDismiss || isCloseDisabled) {
      return;
    }

    if (!isDocumentEvent) {
      event.preventDefault();
      event.stopPropagation();
    }

    cancelAutoClose();
    setScrollDismissActive(true);

    const nextOffset = offsetRef.current - deltaX;
    const direction = nextOffset > 0 ? 1 : -1;

    if (shouldDismiss(nextOffset, 0)) {
      dismissNotification(direction);
      return;
    }

    setSwipeOffset(nextOffset);
    scheduleScrollDismissReset();
  });

  useEffect(() => {
    if (!scrollDismissActive) {
      return undefined;
    }

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel, { passive: false } as any);
  }, [scrollDismissActive]);

  useEffect(() => {
    const handleResize = () => {
      if (dismissed) {
        setSwipeOffset(getExitOffset(dismissDirection));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dismissDirection, dismissed]);

  useEffect(() => {
    const node = notificationRef.current;
    if (!node) {
      return undefined;
    }

    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel, { passive: false } as any);
  }, []);

  useEffect(() => {
    return () => {
      cancelHide();
      cancelScrollDismissReset();
    };
  }, []);

  useEffect(() => {
    data.onOpen?.(data);
  }, []);

  useEffect(() => {
    handleAutoClose();
    return cancelAutoClose;
  }, [autoCloseDuration, active, dismissed]);

  useEffect(() => {
    if (paused) {
      cancelAutoClose();
    } else {
      handleAutoClose();
    }

    return cancelAutoClose;
  }, [paused]);

  const consumerProps: Record<string, any> = { ...others, ...notificationProps };

  // The interaction handlers below are internal, but the same events are part of the public
  // props of both `Notifications` and every notification – they are composed with whatever
  // the consumer passed instead of replacing it.
  const interactionProps = {
    style: notificationStyle,
    // A collapsed notification is hidden behind the one in front of it – `pointer-events`
    // alone does not take its controls out of the tab order or hide them from a screen
    // reader, so it is fully inert until the stack is expanded.
    inert: isCollapsed,
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => {
      consumerProps.onMouseEnter?.(event);
      handleMouseEnter();
    },
    onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => {
      consumerProps.onMouseLeave?.(event);
      handleMouseLeave();
    },
    onFocusCapture: (event: React.FocusEvent<HTMLDivElement>) => {
      consumerProps.onFocusCapture?.(event);
      handleFocusCapture?.();
    },
    onBlurCapture: (event: React.FocusEvent<HTMLDivElement>) => {
      consumerProps.onBlurCapture?.(event);
      handleBlurCapture?.();
    },
    onPointerDownCapture: (event: React.PointerEvent<HTMLDivElement>) => {
      consumerProps.onPointerDownCapture?.(event);
      handlePointerDownCapture(event);
    },
  };

  if (renderNotification) {
    const classNames = [others.className, notificationProps.className].filter(Boolean).join(' ');

    return (
      <div
        ref={mergedRef}
        role={notificationProps.role || others.role || 'alert'}
        {...pickDomProps(consumerProps)}
        className={classNames || undefined}
        {...interactionProps}
      >
        {renderNotification(data)}
      </div>
    );
  }

  return (
    <Notification
      ref={mergedRef}
      {...others}
      {...notificationProps}
      {...interactionProps}
      withCloseButton={isCloseDisabled ? false : withCloseButton}
      onClose={handleHide}
    >
      {message}
    </Notification>
  );
}

NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
