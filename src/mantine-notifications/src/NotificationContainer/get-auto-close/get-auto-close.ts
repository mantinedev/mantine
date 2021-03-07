import { NotificationProps } from '../../types';

export default function getAutoClose(autoClose: boolean | number, notification: NotificationProps) {
  if (typeof notification.autoClose === 'number') {
    return notification.autoClose;
  }

  if (notification.autoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}
