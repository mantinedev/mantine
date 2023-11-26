import { NotificationData } from '../notifications.store';

export function getAutoClose(
  autoClose: number | false | ((data: NotificationData) => number | false) | undefined,
  notificationData: NotificationData
) {
  const _autoClose = notificationData.autoClose ?? autoClose;

  if (typeof _autoClose === 'number') {
    return _autoClose;
  }

  if (_autoClose === false) {
    return false;
  }

  return _autoClose?.(notificationData);
}
