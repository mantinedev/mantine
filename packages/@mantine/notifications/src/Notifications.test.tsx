import { act } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Notifications, NotificationsProps, NotificationsStylesNames } from './Notifications';
import { notifications } from './notifications.store';

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

  it('calls onOpen when notification is mounted', async () => {
    const onOpen = jest.fn();
    const consoleError = jest.spyOn(console, 'error');

    render(<Notifications />);
    act(() => {
      notifications.show({
        message: 'open test',
        onOpen,
      });
    });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(consoleError).not.toHaveBeenCalledWith(
      expect.stringContaining('Unknown event handler property `onOpen`'),
      expect.anything()
    );
    consoleError.mockRestore();
  });

  it('calls onClose when notification is hidden', async () => {
    const onClose = jest.fn();
    render(<Notifications />);

    let id: string;
    act(() => {
      id = notifications.show({
        message: 'close test',
        onClose,
      });
    });

    expect(screen.getByText('close test')).toBeInTheDocument();
    act(() => {
      notifications.hide(id);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
