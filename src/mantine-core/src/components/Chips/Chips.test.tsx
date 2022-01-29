import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Chips } from './Chips';
import { Chip } from './Chip/Chip';

const defaultProps = {
  children: [
    <Chip value="test-1">test-1</Chip>,
    <Chip value="test-2">test-2</Chip>,
    <Chip value="test-3">test-3</Chip>,
  ],
};

const queries = {
  getChip: (index: number, type: 'radio' | 'checkbox') => screen.getAllByRole(type)[index],
  clickChip: (index: number, type: 'radio' | 'checkbox') =>
    userEvent.click(queries.getChip(index, type)),
};

describe('@mantine/core/Chips', () => {
  checkAccessibility([<Chips {...defaultProps} />]);
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

  it('supports uncontrolled state when multiple prop is false', () => {
    render(<Chips {...defaultProps} />);
    expect(
      screen.getAllByRole('radio').every((chip) => chip.getAttribute('checked') === null)
    ).toBe(true);

    queries.clickChip(0, 'radio');
    expect(queries.getChip(0, 'radio')).toBeChecked();

    queries.clickChip(1, 'radio');
    expect(queries.getChip(1, 'radio')).toBeChecked();
    expect(queries.getChip(0, 'radio')).not.toBeChecked();
  });

  it('supports uncontrolled state when multiple prop is true', () => {
    render(<Chips {...defaultProps} multiple />);
    expect(
      screen.getAllByRole('checkbox').every((chip) => chip.getAttribute('checked') === null)
    ).toBe(true);

    queries.clickChip(0, 'checkbox');
    expect(queries.getChip(0, 'checkbox')).toBeChecked();

    queries.clickChip(1, 'checkbox');
    expect(queries.getChip(1, 'checkbox')).toBeChecked();
    expect(queries.getChip(0, 'checkbox')).toBeChecked();

    queries.clickChip(1, 'checkbox');
    expect(queries.getChip(1, 'checkbox')).not.toBeChecked();
    expect(queries.getChip(0, 'checkbox')).toBeChecked();
  });

  it('supports controlled state when multiple prop is false', () => {
    const spy = jest.fn();
    render(<Chips {...defaultProps} value="test-1" onChange={spy} />);
    queries.clickChip(1, 'radio');
    expect(spy).toHaveBeenLastCalledWith('test-2');
    queries.clickChip(2, 'radio');
    expect(spy).toHaveBeenLastCalledWith('test-3');
  });

  it('supports controlled state when multiple prop is true', () => {
    const spy = jest.fn();
    render(<Chips {...defaultProps} multiple onChange={spy} />);
    queries.clickChip(1, 'checkbox');
    expect(spy).toHaveBeenLastCalledWith(['test-2']);
    queries.clickChip(2, 'checkbox');
    expect(spy).toHaveBeenLastCalledWith(['test-2', 'test-3']);
    queries.clickChip(2, 'checkbox');
    expect(spy).toHaveBeenLastCalledWith(['test-2']);
  });
});
