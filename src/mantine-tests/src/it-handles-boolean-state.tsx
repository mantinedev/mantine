import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function itHandlesBooleanState<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('correctly handles uncontrolled state', () => {
    render(<Component {...requiredProps} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('correctly handles controlled state', () => {
    const spy = jest.fn();
    render(<Component {...requiredProps} checked={false} onChange={spy} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    userEvent.click(screen.getByRole('checkbox'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
}
