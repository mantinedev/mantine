import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Divider } from './Divider';

describe('@mantine/core/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});
  itSupportsStylesApi(Divider, { label: 'test' }, ['label'], 'divider');

  it('renders given label in horizontal orientation', () => {
    const withSubheader = shallow(<Divider label="test-label" />);
    expect(withSubheader.find('.mantine-divider-label').dive().text()).toBe('test-label');
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const noLabel = shallow(<Divider />);
    const vertical = shallow(<Divider label="test-label" orientation="vertical" />);
    expect(noLabel.find('.mantine-divider-label')).toHaveLength(0);
    expect(vertical.find('.mantine-divider-label')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@mantine/core/Divider');
  });
});
