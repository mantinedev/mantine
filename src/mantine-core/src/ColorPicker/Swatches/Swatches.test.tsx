import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_THEME } from '@mantine/styles';
import { Swatches, SwatchesProps } from './Swatches';

const defaultProps: SwatchesProps = {
  data: [...DEFAULT_THEME.colors.red],
  setValue: () => {},
};

describe('@mantine/core/Swatches', () => {
  it('calls onSelect when color is clicked', async () => {
    const spy = jest.fn();
    render(<Swatches {...defaultProps} setValue={spy} />);
    await userEvent.click(screen.getAllByRole('button')[4]);
    expect(spy).toHaveBeenCalledWith(defaultProps.data[4]);
  });

  it('sets swatch tabIndex to -1 if component is not focusable', () => {
    const { container: focusable } = render(<Swatches {...defaultProps} focusable />);
    const { container: notFocusable } = render(<Swatches {...defaultProps} focusable={false} />);
    expect(focusable.querySelector('button')).toHaveAttribute('tabindex', '0');
    expect(notFocusable.querySelector('button')).toHaveAttribute('tabindex', '-1');
  });

  it('has correct displayName', () => {
    expect(Swatches.displayName).toStrictEqual('@mantine/core/Swatches');
  });
});
