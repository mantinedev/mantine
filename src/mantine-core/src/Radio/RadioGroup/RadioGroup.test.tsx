import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsInputWrapperProps,
  itSupportsInputAsterisk,
  itSupportsSystemProps,
} from '@mantine/tests';
import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { Radio } from '../Radio';

const defaultProps: RadioGroupProps = {
  children: (
    <>
      <Radio value="test-value-1" label="test-label-1" />
      <Radio value="test-value-2" label="test-label-2" />
      <Radio value="test-value-3" label="test-label-3" />
    </>
  ),
};

describe('@mantine/core/RadioGroup', () => {
  itSupportsInputWrapperProps(RadioGroup, defaultProps, 'RadioGroup');
  itSupportsInputAsterisk(RadioGroup, defaultProps, 'RadioGroup');
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

  it('supports uncontrolled state', async () => {
    render(<RadioGroup {...defaultProps} defaultValue="test-value-1" />);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[1]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<RadioGroup {...defaultProps} value="test-value-2" onChange={spy} />);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith('test-value-1');
  });

  it('sets given name to all radio inputs', () => {
    render(<RadioGroup {...defaultProps} name="test-name" />);
    screen.getAllByRole('radio').forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'test-name');
    });
  });

  it('generates unique name if name prop was not set', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getAllByRole('radio')[1].getAttribute('name').includes('mantine-')).toBe(true);
  });
});
