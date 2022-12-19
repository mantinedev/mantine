import React from 'react';
import lodash from 'lodash';
import { render, screen } from '@testing-library/react';
import { PickerControl, PickerControlProps } from './PickerControl';

const defaultProps: PickerControlProps = {};

function validateDataAttribute(prop: string) {
  const attr = `data-${lodash.kebabCase(prop)}`;
  it(`sets ${attr} prop when ${prop} prop is set`, () => {
    const { rerender } = render(<PickerControl {...defaultProps} />);
    expect(screen.getByRole('button')).not.toHaveAttribute(attr);

    rerender(<PickerControl {...defaultProps} {...{ [prop]: true }} />);
    expect(screen.getByRole('button')).toHaveAttribute(attr);

    rerender(<PickerControl {...defaultProps} {...{ [prop]: true }} disabled />);
    expect(screen.getByRole('button')).not.toHaveAttribute(attr);
  });
}

describe('@mantine/dates/PickerControl', () => {
  validateDataAttribute('inRange');
  validateDataAttribute('firstInRange');
  validateDataAttribute('lastInRange');

  it('sets correct attributes when disabled prop is set', () => {
    const { rerender } = render(<PickerControl {...defaultProps} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');

    rerender(<PickerControl {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('correctly handles selected attribute', () => {
    const { rerender } = render(<PickerControl {...defaultProps} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-selected');

    rerender(<PickerControl {...defaultProps} selected />);
    expect(screen.getByRole('button')).toHaveAttribute('data-selected');

    rerender(<PickerControl {...defaultProps} selected disabled />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-selected');
  });

  it('has correct default __staticSelector', () => {
    render(<PickerControl {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveClass('mantine-PickerControl-pickerControl');
  });

  it('supports custom __staticSelector', () => {
    render(<PickerControl {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByRole('button')).toHaveClass('mantine-Calendar-pickerControl');
  });

  it('supports styles api (styles)', () => {
    render(
      <PickerControl {...defaultProps} styles={{ pickerControl: { borderColor: '#999124' } }} />
    );

    expect(screen.getByRole('button')).toHaveStyle({ borderColor: '#999124' });
  });

  it('supports styles api (classNames)', () => {
    render(<PickerControl {...defaultProps} classNames={{ pickerControl: 'test-control' }} />);

    expect(screen.getByRole('button')).toHaveClass('test-control');
  });
});
