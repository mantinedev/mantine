import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function itHandlesSwitchCheckboxState<P>(
  Component: React.ComponentType<P>,
  requiredProps: P
) {
  it('correctly handles uncontrolled state', async () => {
    render(<Component {...requiredProps} />);
    expect(screen.getByRole('switch')).not.toBeChecked();
    await userEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('correctly handles controlled state', async () => {
    const spy = jest.fn();
    render(<Component {...requiredProps} checked={false} onChange={spy} />);
    expect(screen.getByRole('switch')).not.toBeChecked();
    await userEvent.click(screen.getByRole('switch'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('switch')).not.toBeChecked();
  });
}
