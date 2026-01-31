import { tests } from '@mantine-tests/core';
import { Notifications, NotificationsProps, NotificationsStylesNames } from './Notifications';

const defaultProps: NotificationsProps = {
  withinPortal: false,
};

describe('@mantine/core/Notifications', () => {
  tests.itSupportsSystemProps<NotificationsProps, NotificationsStylesNames>({
    component: Notifications,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/notifications/Notifications',
    stylesApiSelectors: ['root'],
  });
});
