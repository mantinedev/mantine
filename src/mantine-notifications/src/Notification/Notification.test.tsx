import React from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import {
  mount,
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Notification } from './Notification';

const defaultProps = {
  color: 'blue',
  icon: <Cross1Icon />,
  title: 'Test notification',
  loading: false,
  disallowClose: false,
  onClose: () => {},
  closeButtonProps: { title: 'Close notification' },
};

describe('@mantine/notifications/Notification', () => {
  itSupportsOthers(Notification, defaultProps);
  itSupportsStyle(Notification, defaultProps);
  itSupportsClassName(Notification, defaultProps);
  checkAccessibility([mount(<Notification {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Notification.displayName).toEqual('@mantine/notifications/Notification');
  });
});
