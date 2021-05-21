import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Divider } from './Divider';

describe('@mantine/core/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});

  it('renders given label in horizontal orientation', () => {
    const withSubheader = shallow(<Divider label="test-label" />);
    expect(withSubheader.find('[data-mantine-label]').dive().text()).toBe('test-label');
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const notSubheader = shallow(<Divider />);
    const vertical = shallow(<Divider label="test-subheader" orientation="vertical" />);
    expect(notSubheader.find('[data-mantine-subheader]')).toHaveLength(0);
    expect(vertical.find('[data-mantine-subheader]')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@mantine/core/Divider');
  });
});
