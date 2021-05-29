import React from 'react';
import { itSupportsStyle, itSupportsOthers, itSupportsClassName } from '@mantine/tests';
import { shallow } from 'enzyme';
import { Curve } from './Curve/Curve';
import { RingProgress } from './RingProgress';

const defaultProps = {
  sections: [{ value: 50, color: 'blue' }],
};

describe('@mantine/core/RingProgress', () => {
  itSupportsClassName(RingProgress, defaultProps);
  itSupportsStyle(RingProgress, defaultProps);
  itSupportsOthers(RingProgress, defaultProps);

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

  it('has correct displayName', () => {
    expect(RingProgress.displayName).toEqual('@mantine/core/RingProgress');
  });
});
