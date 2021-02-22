import React, { useEffect, useRef } from 'react';
import { DefaultProps, Notification } from '@mantine/core';
import { NotificationProps } from './Notifications.context';

interface _NotificationProps extends DefaultProps {
  notification: NotificationProps;
  onHide(id: string): void;
}

export default function _Notification({
  className,
  style,
  themeOverride,
  notification,
  onHide,
}: _NotificationProps) {
  const hideTimeout = useRef<number>();

  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    hideTimeout.current = window.setTimeout(() => {
      onHide(notification.id);
    }, 4000);
  };

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, []);

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
