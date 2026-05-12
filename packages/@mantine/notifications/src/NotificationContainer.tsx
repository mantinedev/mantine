import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { getStyleObject, Notification, NotificationProps, useMantineTheme } from '@mantine/core';
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
  ref?: React.Ref<HTMLDivElement>;
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
  ref,
  style,
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
    onOpen: _onOpen,
    ...notificationProps
  } = data;
  const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
  const autoCloseTimeout = useRef<number>(-1);
  const hideTimeout = useRef<number>(-1);
  const scrollDismissTimeout = useRef<number>(-1);
  const notificationRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const offsetRef = useRef(0);
  const isCloseDisabled = allowClose === false;

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

  const handleAutoClose = () => {
    if (
      dismissed ||
      active ||
      paused ||
      hoveredRef.current ||
      typeof autoCloseDuration !== 'number'
    ) {
      return;
    }

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
  const notificationStyle = {
    ...baseStyle,
    ['--notifications-state-transform' as string]:
      typeof baseStyle.transform === 'string' ? baseStyle.transform : 'translateX(0)',
    ['--notifications-state-opacity' as string]: String(baseOpacity),
    ['--notifications-swipe-offset' as string]: `${offset}px`,
    ['--notifications-swipe-opacity' as string]: String(swipeOpacity),
    transform:
      'var(--notifications-state-transform) translate3d(var(--notifications-swipe-offset), 0, 0)',
    opacity: 'calc(var(--notifications-state-opacity) * var(--notifications-swipe-opacity))',
    transitionDuration:
      active || scrollDismissActive ? '0ms, 0ms, 0ms' : resolvedTransitionDuration,
    cursor: 'default',
    touchAction: 'pan-y',
  } as React.CSSProperties;

  const handleMouseEnter = () => {
    hoveredRef.current = true;
    cancelAutoClose();
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    if (!scrollDismissActive) {
      resetSwipe();
      handleAutoClose();
    }
    onHoverEnd?.();
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

  return (
    <Notification
      ref={mergedRef}
      {...others}
      style={notificationStyle}
      {...notificationProps}
      withCloseButton={isCloseDisabled ? false : withCloseButton}
      onClose={handleHide}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {message}
    </Notification>
  );
}

NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
