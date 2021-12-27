import React from 'react';
import { render, screen } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Chips, ChipsProps } from './Chips';
import { Chip } from './Chip/Chip';

const defaultProps: ChipsProps<false> = {
  value: '1',
  children: [
    <Chip value="1">test-1</Chip>,
    <Chip value="2" disabled>
      test-2
    </Chip>,
    <Chip value="2">test-3</Chip>,
  ],
};

describe('@mantine/core/Chips', () => {
  checkAccessibility([render(<Chips {...defaultProps} />)]);
  itSupportsSystemProps({
    component: Chips,
    props: defaultProps,
    displayName: '@mantine/core/Chips',
    excludeOthers: true,
  });

  it('sets chip type based on multiple prop', () => {
    const { container: multiple } = render(<Chips multiple {...defaultProps} value={['1']} />);
    const { container: single } = render(<Chips multiple={false} {...defaultProps} />);
    expect(multiple.querySelector('input')).toHaveAttribute('type', 'checkbox');
    expect(single.querySelector('input')).toHaveAttribute('type', 'radio');
  });

  it('sets name on all inputs', () => {
    render(<Chips multiple {...defaultProps} name="test-name" />);
    expect(
      screen.getAllByRole('checkbox').every((chip) => chip.getAttribute('name') === 'test-name')
    ).toBe(true);
  });
});
