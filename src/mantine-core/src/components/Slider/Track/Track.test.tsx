import React from 'react';
import { itSupportsStylesApi } from '@mantine/tests';
import { shallow } from 'enzyme';
import { Track } from './Track';

const defaultProps = {
  filled: 30,
  size: 10,
  color: 'blue',
  max: 100,
  min: 0,
  value: 30,
  marks: [],
  radius: 2,
  children: <div />,
  offset: 0,
  onChange: () => {},
};

describe('@mantine/core/Slider/Track', () => {
  itSupportsStylesApi(Track, defaultProps, ['bar'], 'Slider');

  it('sets left and width bar styles based on filled and offset props', () => {
    const element = shallow(<Track {...defaultProps} filled={34} offset={12} />);
    const bar = element.find('.mantine-Slider-bar');
    expect(bar.prop('style').left).toBe('12%');
    expect(bar.prop('style').width).toBe('34%');
  });

  it('has correct displayName', () => {
    expect(Track.displayName).toEqual('@mantine/core/SliderTrack');
  });
});
