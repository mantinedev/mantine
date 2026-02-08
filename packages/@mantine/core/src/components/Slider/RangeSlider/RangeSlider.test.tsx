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
    varsResolver: true,
    displayName: '@mantine/core/RangeSlider',
    stylesApiName: 'RangeSlider',
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

  it('sets data-orientation attribute on root element', () => {
    const { container, rerender } = render(
      <RangeSlider {...defaultProps} orientation="vertical" />
    );
    expect(container.querySelector('.mantine-RangeSlider-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );

    rerender(<RangeSlider {...defaultProps} />);
    expect(container.querySelector('.mantine-RangeSlider-root')).not.toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('provides name and value to hidden inputs', () => {
    const { container } = render(<RangeSlider name="test-input" value={[10, 20]} />);
    expectInputValue('10', container, 0);
    expectInputValue('20', container, 1);
    expect(getInput(container, 0)).toHaveAttribute('name', 'test-input_from');
    expect(getInput(container, 1)).toHaveAttribute('name', 'test-input_to');
  });
});
