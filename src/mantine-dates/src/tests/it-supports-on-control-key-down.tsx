import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export interface MonthTestProps {
  __onControlKeyDown?(
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: {
      rowIndex: number;
      cellIndex: number;
      date: Date;
    }
  ): void;
}

export function itSupportsOnControlKeydown(
  Component: React.FC<MonthTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports __onControlKeyDown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        __onControlKeyDown={(_event, payload) => {
          spy(payload);
        }}
      />
    );

    await userEvent.type(container.querySelector('table button'), '{space}');
    expect(spy).toHaveBeenCalledWith({ rowIndex: 0, cellIndex: 0, date: expect.any(Date) });
  });
}
