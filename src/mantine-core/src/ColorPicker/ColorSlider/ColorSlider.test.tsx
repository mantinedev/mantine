import { itSupportsSystemProps } from '@mantine/tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('@mantine/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@mantine/core/ColorSlider',
    refType: HTMLDivElement,
  });
});
