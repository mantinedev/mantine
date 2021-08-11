import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { ColorSlider } from './ColorSlider';
import { ColorSlider as ColorSliderStylesApi } from './styles.api';
import { Thumb } from '../Thumb/Thumb';

const defaultProps = {
  value: 25,
  onChange: () => {},
  size: 'sm' as const,
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('@mantine/core/ColorSlider', () => {
  itSupportsClassName(ColorSlider, defaultProps);
  itSupportsOthers(ColorSlider, defaultProps);
  itSupportsStyle(ColorSlider, defaultProps);
  itSupportsStylesApi(
    ColorSlider,
    defaultProps,
    Object.keys(ColorSliderStylesApi).filter((key) => key !== 'slider'),
    'color-slider'
  );

  it('provides thumbColor and size to Thumb component', () => {
    const element = shallow(<ColorSlider {...defaultProps} thumbColor="#FEFCDE" size="xl" />);
    expect(element.find(Thumb).prop('style').backgroundColor).toBe('#FEFCDE');
    expect(element.find(Thumb).prop('size')).toBe('xl');
  });

  it('has correct displayName', () => {
    expect(ColorSlider.displayName).toEqual('@mantine/core/ColorSlider');
  });
});
