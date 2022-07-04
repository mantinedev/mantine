import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsInputWrapperProps,
  itSupportsSystemProps,
  itFiltersChildren,
} from '@mantine/tests';
import { RadioGroup, Radio, RadioGroupProps } from './index';

const defaultProps: RadioGroupProps = {
  children: [
    <Radio value="test-value-1" label="test-label-1" />,
    <Radio value="test-value-2" label="test-label-2" />,
    <Radio value="test-value-3" label="test-label-3" />,
  ],
};

describe('@mantine/core/RadioGroup', () => {
  itSupportsInputWrapperProps(RadioGroup, defaultProps, 'RadioGroup');
  itSupportsSystemProps({
    component: RadioGroup,
    props: defaultProps,
    displayName: '@mantine/core/RadioGroup',
    excludeOthers: true,
    refType: HTMLDivElement,
  });

  checkAccessibility([
    <RadioGroup>
      <Radio value="test-1" label="test-1" />
      <Radio value="test-2" label="test-2" />
      <Radio value="test-3" label="test-3" />
    </RadioGroup>,
  ]);

  itFiltersChildren(RadioGroup, defaultProps, '.mantine-RadioGroup-radio', [
    <Radio value="test-value-1" label="test-label-1" />,
    <Radio value="test-value-2" label="test-label-2" />,
  ]);

  it('passes correct name to Radio components', () => {
    const { container: withoutName } = render(<RadioGroup {...defaultProps} />);
    const { container: withName } = render(<RadioGroup {...defaultProps} name="test-name" />);

    expect(
      withoutName.querySelector('input[type="radio"]').getAttribute('name').includes('mantine-')
    ).toBe(true);
    expect(withName.querySelector('input[type="radio"]').getAttribute('name')).toBe('test-name');
  });

  it('has an accessible label', () => {
    const radioGroup = render(
      <RadioGroup label="Select a Framework">
        <Radio value="mantine" label="Mantine" />
        <Radio value="mui" label="MUI" />
        <Radio value="chakra" label="ChakraUI" />
      </RadioGroup>
    );

    expect(radioGroup.queryByLabelText('Select a Framework')).not.toEqual(null);
  });

  it('supports uncontrolled state', () => {
    render(<RadioGroup {...defaultProps} defaultValue="test-value-1" />);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<RadioGroup {...defaultProps} value="test-value-2" onChange={spy} />);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith('test-value-1');
  });
});
