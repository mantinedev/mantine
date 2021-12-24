import React from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Loader } from '../Loader/Loader';
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

describe('@mantine/core/Notification', () => {
  itSupportsOthers(Notification, defaultProps);
  itSupportsStyle(Notification, defaultProps);
  itSupportsClassName(Notification, defaultProps);
  itSupportsMargins(Notification, defaultProps);
  itRendersChildren(Notification, defaultProps);
  itSupportsSx(Notification, defaultProps);
  itSupportsRef(Notification, defaultProps, HTMLDivElement);
  checkAccessibility([render(<Notification {...defaultProps} />)]);

  it('does not render close button if disallowClose is true', () => {
    const allowClose = shallow(<Notification {...defaultProps} disallowClose={false} />);
    const disallowClose = shallow(<Notification {...defaultProps} disallowClose />);

    expect(allowClose.find(CloseButton)).toHaveLength(1);
    expect(disallowClose.find(CloseButton)).toHaveLength(0);
  });

  it('renders given icon', () => {
    const withIcon = shallow(<Notification {...defaultProps} icon="$$$" />);
    const withoutIcon = shallow(<Notification {...defaultProps} icon={null} />);

    expect(withIcon.find('.mantine-Notification-icon').text()).toBe('$$$');
    expect(withoutIcon.find('.mantine-Notification-icon')).toHaveLength(0);
  });

  it('displays loader when loading prop is true', () => {
    const loading = shallow(<Notification {...defaultProps} loading icon="$$$" />);
    const notLoading = shallow(<Notification {...defaultProps} loading={false} icon="$$$" />);

    expect(loading.find(Loader)).toHaveLength(1);
    expect(loading.find('.mantine-Notification-icon')).toHaveLength(0);

    expect(notLoading.find(Loader)).toHaveLength(0);
    expect(notLoading.find('.mantine-Notification-icon')).toHaveLength(1);
    expect(notLoading.find('.mantine-Notification-icon').text()).toBe('$$$');
  });

  it('renders given title', () => {
    const withTitle = shallow(<Notification {...defaultProps} title="test-title" />);
    const withoutTitle = shallow(<Notification {...defaultProps} title={null} />);

    expect(withTitle.find('.mantine-Notification-title').prop('children')).toBe('test-title');
    expect(withoutTitle.find('.mantine-Notification-title')).toHaveLength(0);
  });

  it('spreads closeButtonProps to close button', () => {
    const element = shallow(
      <Notification
        {...defaultProps}
        closeButtonProps={{ 'data-test-prop': true, style: { color: 'red' } }}
      />
    );
    expect(element.find(CloseButton).prop('data-test-prop')).toBe(true);
    expect(element.find(CloseButton).prop('style')).toEqual({ color: 'red' });
  });

  it('has correct displayName', () => {
    expect(Notification.displayName).toEqual('@mantine/core/Notification');
  });
});
