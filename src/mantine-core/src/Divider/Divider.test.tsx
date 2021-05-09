import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Divider } from './Divider';

describe('@mantine/core/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});

  it('renders subHeader based on subHeader prop', () => {
    const withSubheader = shallow(<Divider subHeader="test-subheader" />);
    expect(withSubheader.find('[data-mantine-subheader]').dive().text()).toBe('test-subheader');
  });

  it('does not render subHeader if subHeader prop is not set or orientation is set to vertical', () => {
    const notSubheader = shallow(<Divider />);
    const vertical = shallow(<Divider subHeader="test-subheader" orientation="vertical" />);
    expect(notSubheader.find('[data-mantine-subheader]')).toHaveLength(0);
    expect(vertical.find('[data-mantine-subheader]')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@mantine/core/Divider');
  });
});
