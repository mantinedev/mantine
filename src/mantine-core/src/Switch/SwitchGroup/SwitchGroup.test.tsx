import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsInputWrapperProps,
  itSupportsInputAsterisk,
  itSupportsSystemProps,
} from '@mantine/tests';
import { SwitchGroup, SwitchGroupProps } from './SwitchGroup';
import { Switch } from '../Switch';

const defaultProps: SwitchGroupProps = {
  children: [
    <Switch value="test-value-1" label="test-label-1" key={1} />,
    <Switch value="test-value-2" label="test-label-2" key={2} />,
    <Switch value="test-value-3" label="test-label-3" key={3} />,
  ],
};

describe('@mantine/core/SwitchGroup', () => {
  itSupportsInputWrapperProps(SwitchGroup, defaultProps, 'SwitchGroup');
  itSupportsInputAsterisk(SwitchGroup, defaultProps, 'SwitchGroup');
  itSupportsSystemProps({
    component: SwitchGroup,
    props: defaultProps,
    displayName: '@mantine/core/SwitchGroup',
    refType: HTMLDivElement,
    providerName: 'SwitchGroup',
  });

  checkAccessibility([
    <SwitchGroup>
      <Switch value="test-1" label="test-1" />
      <Switch value="test-2" label="test-2" />
      <Switch value="test-3" label="test-3" />
    </SwitchGroup>,
  ]);

  it('supports uncontrolled state', async () => {
    render(<SwitchGroup {...defaultProps} defaultValue={['test-value-1']} />);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<SwitchGroup {...defaultProps} value={['test-value-2']} onChange={spy} />);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith(['test-value-2', 'test-value-1']);
  });
});
