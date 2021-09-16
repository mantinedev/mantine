import React from 'react';
import { mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { AvatarsGroup } from './AvatarsGroup';
import { Avatar } from '../Avatar';
import { AvatarsGroup as AvatarsGroupStylesApi } from './styles.api';

const defaultProps = {
  children: [
    <Avatar>M</Avatar>,
    <Avatar>K</Avatar>,
    <Avatar>L</Avatar>,
  ],
};

describe('@mantine/core/AvatarsGroup', () => {
  itSupportsOthers(AvatarsGroup, {});
  itSupportsClassName(AvatarsGroup, {});
  itSupportsStyle(AvatarsGroup, {});
  itSupportsStylesApi(AvatarsGroup, defaultProps, Object.keys(AvatarsGroupStylesApi), 'avatars-group');
  checkAccessibility([mount(<AvatarsGroup {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(AvatarsGroup.displayName).toEqual('@mantine/core/AvatarsGroup');
  });
});
