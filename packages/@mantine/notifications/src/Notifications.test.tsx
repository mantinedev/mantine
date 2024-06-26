import { tests } from '@mantine-tests/core';
import { Notifications, NotificationsProps, NotificationsStylesNames } from './Notifications';

const defaultProps: NotificationsProps = {
  withinPortal: false,
};

describe('@mantine/core/Notifications', () => {
  tests.itSupportsSystemProps<NotificationsProps, NotificationsStylesNames>({
    component: Notifications,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/notifications/Notifications',
    stylesApiSelectors: ['root'],
  });
});
