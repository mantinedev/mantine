import { useEffect, useRef, useState } from 'react';
import { Notification, NotificationProps } from '@mantine/core';
import { getAutoClose } from './get-auto-close/get-auto-close';
import { NotificationData } from './notifications.store';

interface NotificationContainerProps extends NotificationProps {
  data: NotificationData;
  onHide: (id: string) => void;
  autoClose: number | false;
  paused: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function NotificationContainer({
  data,
  onHide,
  autoClose,
  paused,
  onHoverStart,
  onHoverEnd,
  ...others
}: NotificationContainerProps) {
  const { autoClose: _autoClose, message, onOpen: _onOpen, ...notificationProps } = data;
  const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
  const autoCloseTimeout = useRef<number>(-1);
  const [hovered, setHovered] = useState(false);

  const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);

  const handleHide = () => {
    onHide(data.id!);
    cancelAutoClose();
  };

  const handleAutoClose = () => {
    cancelAutoClose();
    if (typeof autoCloseDuration === 'number') {
      autoCloseTimeout.current = window.setTimeout(handleHide, autoCloseDuration);
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onHoverEnd?.();
  };

  useEffect(() => {
    data.onOpen?.(data);
  }, []);

  useEffect(() => {
    handleAutoClose();
    return cancelAutoClose;
  }, [autoCloseDuration]);

  useEffect(() => {
    if (paused || hovered) {
      cancelAutoClose();
    } else {
      handleAutoClose();
    }

    return cancelAutoClose;
  }, [paused, hovered]);

  return (
    <Notification
      {...others}
      {...notificationProps}
      onClose={handleHide}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {message}
    </Notification>
  );
}

NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
