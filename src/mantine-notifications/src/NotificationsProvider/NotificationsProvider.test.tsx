import { itSupportsOthers, itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { NotificationsProvider } from './NotificationsProvider';

describe('@mantine/notifications/NotificationsProvider', () => {
  itSupportsClassName(NotificationsProvider, {});
  itSupportsOthers(NotificationsProvider, {});
  itSupportsStyle(NotificationsProvider, {});
});
