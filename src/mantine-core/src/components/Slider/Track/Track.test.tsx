import React from 'react';
import { render } from '@testing-library/react';
import { Track, TrackProps } from './Track';

const defaultProps: TrackProps = {
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
  it('sets left and width bar styles based on filled and offset props', () => {
    const { container } = render(<Track {...defaultProps} filled={34} offset={12} />);
    expect(container.querySelector('.mantine-Slider-bar')).toHaveStyle({
      left: '12%',
      width: '34%',
    });
  });

  it('has correct displayName', () => {
    expect(Track.displayName).toEqual('@mantine/core/SliderTrack');
  });
});
