import { render, tests } from '@mantine-tests/core';
import { SliderStylesNames } from '../Slider.context';
import { RangeSlider, RangeSliderProps } from './RangeSlider';

const defaultProps: RangeSliderProps = {
  marks: [{ value: 0, label: 'test-mark' }],
  labelAlwaysOn: true,
  labelTransitionProps: { duration: 0 },
  thumbFromLabel: 'test-label',
  thumbToLabel: 'test-label',
};

const getInput = (container: HTMLElement, index: 0 | 1) =>
  container.querySelectorAll('input[type="hidden"]')[index];

const expectInputValue = (value: string, container: HTMLElement, index: 0 | 1) =>
  expect(getInput(container, index)).toHaveValue(value);

describe('@mantine/core/RangeSlider', () => {
  tests.axe([<RangeSlider {...defaultProps} key="1" />]);
  tests.itSupportsSystemProps<RangeSliderProps, SliderStylesNames>({
    component: RangeSlider,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/RangeSlider',
    stylesApiName: 'Slider',
    stylesApiSelectors: [
      'root',
      'bar',
      'label',
      'mark',
      'markLabel',
      'markWrapper',
      'thumb',
      'track',
      'trackContainer',
    ],
  });

  it('provides name and value to hidden inputs', () => {
    const { container } = render(<RangeSlider name="test-input" value={[10, 20]} />);
    expectInputValue('10', container, 0);
    expectInputValue('20', container, 1);
    expect(getInput(container, 0)).toHaveAttribute('name', 'test-input_from');
    expect(getInput(container, 1)).toHaveAttribute('name', 'test-input_to');
  });
});
