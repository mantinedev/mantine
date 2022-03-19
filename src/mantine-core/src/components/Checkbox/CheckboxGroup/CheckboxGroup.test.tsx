import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsInputWrapperProps,
  itSupportsSystemProps,
  itFiltersChildren,
} from '@mantine/tests';
import { CheckboxGroup, Checkbox, CheckboxGroupProps } from '../index';

const defaultProps: CheckboxGroupProps = {
  children: [
    <Checkbox value="test-value-1" label="test-label-1" />,
    <Checkbox value="test-value-2" label="test-label-2" />,
    <Checkbox value="test-value-3" label="test-label-3" />,
  ],
};

describe('@mantine/core/CheckboxGroup', () => {
  itSupportsInputWrapperProps(CheckboxGroup, defaultProps, 'CheckboxGroup');
  itSupportsSystemProps({
    component: CheckboxGroup,
    props: defaultProps,
    displayName: '@mantine/core/CheckboxGroup',
    excludeOthers: true,
    refType: HTMLDivElement,
  });

  checkAccessibility([
    <CheckboxGroup>
      <Checkbox value="test-1" label="test-1" />
      <Checkbox value="test-2" label="test-2" />
      <Checkbox value="test-3" label="test-3" />
    </CheckboxGroup>,
  ]);

  itFiltersChildren(CheckboxGroup, defaultProps, '.mantine-CheckboxGroup-input', [
    <Checkbox value="test-value-1" label="test-label-1" />,
    <Checkbox value="test-value-2" label="test-label-2" />,
  ]);

  it('supports uncontrolled state', () => {
    render(<CheckboxGroup {...defaultProps} defaultValue={['test-value-1']} />);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<CheckboxGroup {...defaultProps} value={['test-value-2']} onChange={spy} />);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith(['test-value-2', 'test-value-1']);
  });
});
