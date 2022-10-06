import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider';

const defaultProps: AlphaSliderProps = {
  value: 0.5,
  onChange: () => {},
  onChangeEnd: () => {},
  color: '#FF00FF',
  size: 'sm',
};

describe('@mantine/core/AlphaSlider', () => {
  checkAccessibility([<AlphaSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: AlphaSlider,
    props: defaultProps,
    displayName: '@mantine/core/AlphaSlider',
    refType: HTMLDivElement,
  });
});
