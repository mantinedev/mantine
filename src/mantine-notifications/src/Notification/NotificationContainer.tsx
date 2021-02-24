import React, { useEffect, useRef } from 'react';
import { DefaultProps } from '@mantine/core';
import { Notification } from './Notification';
import { NotificationProps } from '../types';

interface NotificationContainerProps extends DefaultProps {
  notification: NotificationProps;
  onHide(id: string): void;
  autoClose: false | number;
}

function getAutoClose(autoClose: boolean | number, notification: NotificationProps) {
  if (typeof notification.autoClose === 'number') {
    return notification.autoClose;
  }

  if (notification.autoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}

export default function NotificationContainer({
  className,
  style,
  themeOverride,
  notification,
  autoClose,
  onHide,
}: NotificationContainerProps) {
  const autoCloseTimeout = getAutoClose(autoClose, notification);
  const hideTimeout = useRef<number>();

  const handleHide = () => {
    typeof notification.onClose === 'function' && notification.onClose(notification);
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
      style={style}
      title={notification.title}
      themeOverride={themeOverride}
      onClose={handleHide}
      color={notification.color}
      icon={notification.icon}
      loading={notification.loading}
      disallowClose={notification.disallowClose}
      className={className}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
    >
      {notification.message}
    </Notification>
  );
}

NotificationContainer.displayName = '@mantine/notifications/Notification';
