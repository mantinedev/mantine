import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: [
    { label: 'test-label-1', value: 'test-value-1' },
    { label: 'test-label-2', value: 'test-value-2' },
    { label: 'test-label-3', value: 'test-value-3' },
  ],
};

describe('@mantine/core/SegmentedControl', () => {
  checkAccessibility([<SegmentedControl {...defaultProps} />]);
  itSupportsSystemProps({
    component: SegmentedControl,
    props: defaultProps,
    displayName: '@mantine/core/SegmentedControl',
    refType: HTMLDivElement,
  });

  it('supports uncontrolled state', () => {
    render(<SegmentedControl {...defaultProps} />);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} value="test-value-2" onChange={spy} />);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith('test-value-1');
  });
});
