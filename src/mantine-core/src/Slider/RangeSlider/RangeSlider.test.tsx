import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { RangeSlider } from './RangeSlider';

const defaultProps = {
  thumbFromLabel: 'test-label',
  thumbToLabel: 'test-label',
};

const getInput = (container: HTMLElement, index: 0 | 1) =>
  container.querySelectorAll('input[type="hidden"]')[index];

const expectInputValue = (value: string, container: HTMLElement, index: 0 | 1) =>
  expect(getInput(container, index)).toHaveValue(value);

describe('@mantine/core/RangeSlider', () => {
  checkAccessibility([<RangeSlider {...defaultProps} />]);
  itSupportsProviderVariant(RangeSlider, defaultProps, 'Slider');
  itSupportsProviderSize(RangeSlider, defaultProps, 'Slider');
  itSupportsSystemProps({
    component: RangeSlider,
    props: defaultProps,
    displayName: '@mantine/core/RangeSlider',
    refType: HTMLDivElement,
    providerName: 'RangeSlider',
  });
  itDisablesInputInsideDisabledFieldset(RangeSlider, defaultProps);

  it('provides name and value to hidden inputs', () => {
    const { container } = render(<RangeSlider name="test-input" value={[10, 20]} />);
    expectInputValue('10', container, 0);
    expectInputValue('20', container, 1);
    expect(getInput(container, 0)).toHaveAttribute('name', 'test-input_from');
    expect(getInput(container, 1)).toHaveAttribute('name', 'test-input_to');
  });
});
