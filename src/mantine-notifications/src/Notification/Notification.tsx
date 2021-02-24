import React, { useEffect, useRef } from 'react';
import { DefaultProps, Notification } from '@mantine/core';
import { NotificationProps } from '../types';

interface _NotificationProps extends DefaultProps {
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

export default function _Notification({
  className,
  style,
  themeOverride,
  notification,
  autoClose,
  onHide,
}: _NotificationProps) {
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
      hideTimeout.current = window.setTimeout(() => {
        onHide(notification.id);
      }, autoCloseTimeout);
    }
  };

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
      className={className}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
    >
      {notification.message}
    </Notification>
  );
}

_Notification.displayName = '@mantine/notifications/Notification';
