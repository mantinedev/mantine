import React from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
} from '@mantine/tests';
import { ActionIcon } from '../ActionIcon/ActionIcon';
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
  itRendersChildren(Notification, defaultProps);
  checkAccessibility([mount(<Notification {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Notification.displayName).toEqual('@mantine/core/Notification');
  });

  it('does not render close button if disallowClose is true', () => {
    const allowClose = shallow(<Notification {...defaultProps} disallowClose={false} />);
    const disallowClose = shallow(<Notification {...defaultProps} disallowClose />);

    expect(allowClose.find(ActionIcon)).toHaveLength(1);
    expect(disallowClose.find(ActionIcon)).toHaveLength(0);
  });

  it('renders given icon', () => {
    const withIcon = shallow(<Notification {...defaultProps} icon="$$$" />);
    const withoutIcon = shallow(<Notification {...defaultProps} icon={null} />);

    expect(withIcon.find('[data-mantine-icon]').text()).toBe('$$$');
    expect(withoutIcon.find('[data-mantine-icon]')).toHaveLength(0);
  });

  it('displays loader when loading prop is true', () => {
    const loading = shallow(<Notification {...defaultProps} loading icon="$$$" />);
    const notLoading = shallow(<Notification {...defaultProps} loading={false} icon="$$$" />);

    expect(loading.find(Loader)).toHaveLength(1);
    expect(loading.find('[data-mantine-icon]')).toHaveLength(0);

    expect(notLoading.find(Loader)).toHaveLength(0);
    expect(notLoading.find('[data-mantine-icon]')).toHaveLength(1);
    expect(notLoading.find('[data-mantine-icon]').text()).toBe('$$$');
  });

  it('renders given title', () => {
    const withTitle = shallow(<Notification {...defaultProps} title="test-title" />);
    const withoutTitle = shallow(<Notification {...defaultProps} title={null} />);

    expect(withTitle.find('[data-mantine-title]').prop('children')).toBe('test-title');
    expect(withoutTitle.find('[data-mantine-title]')).toHaveLength(0);
  });

  it('spreads closeButtonProps to close button', () => {
    const element = shallow(
      <Notification
        {...defaultProps}
        closeButtonProps={{ 'data-test-prop': true, style: { color: 'red' } }}
      />
    );
    expect(element.find(ActionIcon).prop('data-test-prop')).toBe(true);
    expect(element.find(ActionIcon).prop('style')).toEqual({ color: 'red' });
  });
});
