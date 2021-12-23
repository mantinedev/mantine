import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Group } from './Group';

const defaultProps = {};

describe('@mantine/core/Group', () => {
  itSupportsOthers(Group, defaultProps);
  itSupportsClassName(Group, defaultProps);
  itSupportsStyle(Group, defaultProps);
  itRendersChildren(Group, defaultProps);
  itSupportsMargins(Group, defaultProps);
  itSupportsSx(Group, defaultProps);
  itSupportsRef(Group, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Group.displayName).toEqual('@mantine/core/Group');
  });

  it('has no falsy children', () => {
    const children = [undefined, null, <div key="1" />];
    const wrapper = shallow(<Group>{children}</Group>);
    expect(wrapper.find('.mantine-Group-child').length).toBe(1);
  });
});
