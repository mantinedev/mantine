import React, { useEffect, useRef } from 'react';
import { Notification, DefaultProps } from '@mantine/core';
import getAutoClose from './get-auto-close/get-auto-close';
import { NotificationProps } from '../types';

export interface NotificationContainerProps extends DefaultProps {
  notification: NotificationProps;
  onHide(id: string): void;
  autoClose: false | number;
}

export default function NotificationContainer({
  className,
  sx,
  notification,
  autoClose,
  onHide,
}: NotificationContainerProps) {
  const autoCloseTimeout = getAutoClose(autoClose, notification);
  const hideTimeout = useRef<number>();

  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };

  useEffect(() => {
    if (typeof notification.onOpen === 'function') {
      notification.onOpen(notification);
    }
  }, []);

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);

  return (
    <Notification
      sx={sx}
      className={className}
      title={notification.title}
      onClose={handleHide}
      color={notification.color}
      radius={notification.radius}
      icon={notification.icon}
      loading={notification.loading}
      disallowClose={notification.disallowClose}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
    >
      {notification.message}
    </Notification>
  );
}

NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
