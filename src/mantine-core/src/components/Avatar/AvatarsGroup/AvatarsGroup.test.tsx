import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
} from '@mantine/tests';
import { AvatarsGroup } from './AvatarsGroup';
import { Avatar } from '../Avatar';
import { AvatarsGroup as AvatarsGroupStylesApi } from './styles.api';

const defaultProps = {
  children: [<Avatar>M</Avatar>, <Avatar>K</Avatar>, <Avatar>L</Avatar>, <Avatar>L</Avatar>],
};

describe('@mantine/core/AvatarsGroup', () => {
  itSupportsOthers(AvatarsGroup, {});
  itSupportsClassName(AvatarsGroup, {});
  itSupportsStyle(AvatarsGroup, {});
  itSupportsStylesApi(
    AvatarsGroup,
    defaultProps,
    Object.keys(AvatarsGroupStylesApi),
    'AvatarsGroup'
  );

  it('renders avatars based on limit prop', () => {
    const limit2 = shallow(<AvatarsGroup {...defaultProps} limit={2} />);
    const limit3 = shallow(<AvatarsGroup {...defaultProps} limit={3} />);
    const limit10 = shallow(<AvatarsGroup {...defaultProps} limit={10} />);

    expect(limit2.find(Avatar)).toHaveLength(3);
    expect(limit3.find(Avatar)).toHaveLength(4);
    expect(limit10.find(Avatar)).toHaveLength(4);
  });

  it('renders the truncated length properly', () => {
    const total = mount(<AvatarsGroup {...defaultProps} limit={4} total={50} />);
    const limit = mount(<AvatarsGroup {...defaultProps} limit={3} />);

    let elementsArray = total.find(Avatar);
    expect(elementsArray.at(elementsArray.length - 1).text()).toBe('+46');

    elementsArray = limit.find(Avatar);
    expect(elementsArray.at(elementsArray.length - 1).text()).toBe('+1');
  });

  it('has correct displayName', () => {
    expect(AvatarsGroup.displayName).toEqual('@mantine/core/AvatarsGroup');
  });
});
