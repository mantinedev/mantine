import { DEFAULT_AUTO_CLOSE_DURATION_MS } from '../Notifications';
import { NotificationData } from '../notifications.store';
import { getAutoClose } from './get-auto-close';

describe('@mantine/notifications/get-auto-close', () => {
  const autoClose = (data: NotificationData) => {
    if (data.color === 'red') return false;

    return DEFAULT_AUTO_CLOSE_DURATION_MS;
  };
  const notificationData: NotificationData = {
    message: (() => 'test')(),
  };

  it('prioritizes notification autoClose prop', () => {
    expect(getAutoClose(false, { ...notificationData, autoClose: 10 })).toBe(10);
    expect(getAutoClose(400, { ...notificationData, autoClose: 10 })).toBe(10);
    expect(getAutoClose(400, { ...notificationData, autoClose: false })).toBe(false);
    expect(getAutoClose(400, { ...notificationData, autoClose })).toBe(4000);
  });

  it('returns provider value if notification does not have autoClose prop', () => {
    expect(getAutoClose(false, { ...notificationData, autoClose: undefined }!)).toBe(false);
    expect(getAutoClose(400, { ...notificationData, autoClose: undefined }!)).toBe(400);
    expect(getAutoClose(autoClose, { ...notificationData, autoClose: undefined }!)).toBe(4000);

    const autoClose2 = (data: NotificationData) => {
      if (data.color === 'red') return false;

      return 5000;
    };
    expect(getAutoClose(autoClose, { ...notificationData, autoClose: autoClose2 })).toBe(
      5000
    );
  });
});
