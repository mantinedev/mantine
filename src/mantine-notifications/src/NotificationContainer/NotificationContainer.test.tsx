import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { Notification } from '../Notification/Notification';
import NotificationContainer from './NotificationContainer';

const defaultProps = {
  notification: { id: 'test', message: 'test-message' },
  onHide: () => {},
  autoClose: false,
} as const;

describe('@mantine/notifications/NotificationContainer', () => {
  itSupportsStyle(NotificationContainer, defaultProps);
  itSupportsClassName(NotificationContainer, defaultProps);

  it('has correct displayName', () => {
    expect(NotificationContainer.displayName).toEqual(
      '@mantine/notifications/NotificationContainer'
    );
  });

  it('passes notification prop to Notification component', () => {
    const element = shallow(
      <NotificationContainer
        {...defaultProps}
        notification={{
          ...defaultProps.notification,
          title: 'test-title',
          message: 'test-message',
          color: 'gray',
          icon: '$',
          loading: true,
          disallowClose: true,
        }}
      />
    );

    const notification = element.find(Notification);

    expect(notification.prop('children')).toBe('test-message');
    expect(notification.prop('title')).toBe('test-title');
    expect(notification.prop('color')).toBe('gray');
    expect(notification.prop('icon')).toBe('$');
    expect(notification.prop('loading')).toBe(true);
    expect(notification.prop('disallowClose')).toBe(true);
  });
});
