import React from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { shallow, mount, checkAccessibility } from '@mantine/tests';
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
  checkAccessibility([mount(<Notification {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Notification.displayName).toEqual('@mantine/notifications/Notification');
  });

  it('accepts className from props', () => {
    const element = shallow(<Notification {...defaultProps} className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('accepts style property', () => {
    const element = shallow(
      <Notification {...defaultProps} style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('support ...others props', () => {
    const element = shallow(<Notification {...defaultProps} data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
});
