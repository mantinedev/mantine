import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Hr } from './Hr';

describe('@mantine/core/Hr', () => {
  itSupportsClassName(Hr, {});
  itSupportsStyle(Hr, {});
  itSupportsOthers(Hr, {});

  it('renders subHeader based on subHeader prop', () => {
    const withSubheader = shallow(<Hr subHeader="test-subheader" />);
    expect(withSubheader.find('[data-mantine-subheader]').dive().text()).toBe('test-subheader');
  });

  it('does not render subHeader if subHeader prop is not set or orientation is set to vertical', () => {
    const notSubheader = shallow(<Hr />);
    const vertical = shallow(<Hr subHeader="test-subheader" orientation="vertical" />);
    expect(notSubheader.find('[data-mantine-subheader]')).toHaveLength(0);
    expect(vertical.find('[data-mantine-subheader]')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Hr.displayName).toEqual('@mantine/core/Hr');
  });
});
