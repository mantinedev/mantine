import { tests } from '@mantine-tests/core';
import { AngleSlider, AngleSliderProps, AngleSliderStylesNames } from './AngleSlider';

const defaultProps: AngleSliderProps = {};

describe('@mantine/core/AngleSlider', () => {
  tests.itSupportsSystemProps<AngleSliderProps, AngleSliderStylesNames>({
    component: AngleSlider,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AngleSlider',
    stylesApiSelectors: ['root'],
  });
});
