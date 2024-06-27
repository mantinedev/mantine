import lodash from 'lodash';
import { render, screen, tests } from '@mantine-tests/core';
import { PickerControl, PickerControlProps, PickerControlStylesNames } from './PickerControl';

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
  tests.itSupportsSystemProps<PickerControlProps, PickerControlStylesNames>({
    component: PickerControl,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/PickerControl',
    stylesApiSelectors: ['pickerControl'],
  });

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
});
