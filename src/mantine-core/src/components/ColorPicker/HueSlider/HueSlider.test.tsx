import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  size: 'sm',
};

describe('@mantine/core/HueSlider', () => {
  checkAccessibility([render(<HueSlider {...defaultProps} aria-label="test-label" />)]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@mantine/core/HueSlider',
    refType: HTMLDivElement,
  });
});
