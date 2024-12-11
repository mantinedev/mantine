import { forwardRef, useEffect, useRef } from 'react';
import { Notification, NotificationProps } from '@mantine/core';
import { getAutoClose } from './get-auto-close/get-auto-close';
import { NotificationData } from './notifications.store';

interface NotificationContainerProps extends NotificationProps {
  data: NotificationData;
  onHide: (id: string) => void;
  autoClose: number | false;
}

export const NotificationContainer = forwardRef<HTMLDivElement, NotificationContainerProps>(
  ({ data, onHide, autoClose, ...others }, ref) => {
    const { autoClose: _autoClose, message, ...notificationProps } = data;
    const autoCloseDuration = getAutoClose(autoClose, data.autoClose);
    const autoCloseTimeout = useRef<number>(-1);

    const cancelAutoClose = () => window.clearTimeout(autoCloseTimeout.current);

    const handleHide = () => {
      onHide(data.id!);
      cancelAutoClose();
    };

    const handleAutoClose = () => {
      if (typeof autoCloseDuration === 'number') {
        autoCloseTimeout.current = window.setTimeout(handleHide, autoCloseDuration);
      }
    };

    useEffect(() => {
      data.onOpen?.(data);
    }, []);

    useEffect(() => {
      handleAutoClose();
      return cancelAutoClose;
    }, [autoCloseDuration]);

    return (
      <Notification
        {...others}
        {...notificationProps}
        onClose={handleHide}
        ref={ref}
        onMouseEnter={cancelAutoClose}
        onMouseLeave={handleAutoClose}
      >
        {message}
      </Notification>
    );
  }
);

NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
