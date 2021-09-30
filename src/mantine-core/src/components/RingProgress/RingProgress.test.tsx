import React from 'react';
import {
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { shallow } from 'enzyme';
import { Curve } from './Curve/Curve';
import { RingProgress } from './RingProgress';
import { RingProgress as RingProgressStylesApi } from './styles.api';

const defaultProps = {
  sections: [{ value: 50, color: 'blue' }],
  label: 'test',
};

describe('@mantine/core/RingProgress', () => {
  itSupportsClassName(RingProgress, defaultProps);
  itSupportsMargins(RingProgress, defaultProps);
  itSupportsStyle(RingProgress, defaultProps);
  itSupportsOthers(RingProgress, defaultProps);
  itSupportsStylesApi(
    RingProgress,
    defaultProps,
    Object.keys(RingProgressStylesApi),
    'ring-progress'
  );

  it('renders given amount of curves', () => {
    const element = shallow(
      <RingProgress
        sections={[
          { value: 10, color: 'blue' },
          { value: 15, color: 'red' },
          { value: 10, color: 'green' },
        ]}
      />
    );

    // 3 sections + 1 root element
    expect(element.find(Curve)).toHaveLength(4);
  });

  it('renders given label', () => {
    const element = shallow(<RingProgress {...defaultProps} label="test-label" />);
    expect(element.render().find('.mantine-ring-progress-label').text()).toBe('test-label');
  });

  it('has correct displayName', () => {
    expect(RingProgress.displayName).toEqual('@mantine/core/RingProgress');
  });
});
