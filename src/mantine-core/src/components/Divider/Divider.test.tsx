import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Divider } from './Divider';

const defaultProps = {};

describe('@mantine/core/Divider', () => {
  itSupportsClassName(Divider, defaultProps);
  itSupportsStyle(Divider, defaultProps);
  itSupportsOthers(Divider, defaultProps);
  itSupportsMargins(Divider, defaultProps);
  itSupportsSx(Divider, defaultProps);
  itSupportsRef(Divider, defaultProps, HTMLDivElement);

  it('renders given label in horizontal orientation', () => {
    const withSubheader = shallow(<Divider label="test-label" />);
    expect(withSubheader.find('.mantine-Divider-label').dive().text()).toBe('test-label');
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const noLabel = shallow(<Divider />);
    const vertical = shallow(<Divider label="test-label" orientation="vertical" />);
    expect(noLabel.find('.mantine-Divider-label')).toHaveLength(0);
    expect(vertical.find('.mantine-Divider-label')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@mantine/core/Divider');
  });
});
