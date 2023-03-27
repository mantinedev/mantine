import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsInputWrapperProps,
  itSupportsInputAsterisk,
  itSupportsSystemProps,
} from '@mantine/tests';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import { Checkbox } from '../Checkbox';

const defaultProps: CheckboxGroupProps = {
  children: [
    <Checkbox value="test-value-1" label="test-label-1" key={1} />,
    <Checkbox value="test-value-2" label="test-label-2" key={2} />,
    <Checkbox value="test-value-3" label="test-label-3" key={3} />,
  ],
};

describe('@mantine/core/CheckboxGroup', () => {
  itSupportsInputWrapperProps(CheckboxGroup, defaultProps, 'CheckboxGroup');
  itSupportsInputAsterisk(CheckboxGroup, defaultProps, 'CheckboxGroup');
  itSupportsSystemProps({
    component: CheckboxGroup,
    props: defaultProps,
    displayName: '@mantine/core/CheckboxGroup',
    refType: HTMLDivElement,
    providerName: 'CheckboxGroup',
  });

  checkAccessibility([
    <CheckboxGroup>
      <Checkbox value="test-1" label="test-1" />
      <Checkbox value="test-2" label="test-2" />
      <Checkbox value="test-3" label="test-3" />
    </CheckboxGroup>,
  ]);

  it('supports uncontrolled state', async () => {
    render(<CheckboxGroup {...defaultProps} defaultValue={['test-value-1']} />);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<CheckboxGroup {...defaultProps} value={['test-value-2']} onChange={spy} />);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith(['test-value-2', 'test-value-1']);
  });
});
