import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export interface MonthTestProps {
  month: Date;
  __onDayKeyDown?(
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: {
      rowIndex: number;
      cellIndex: number;
      date: Date;
    }
  ): void;
}

export function itSupportsOnDayKeydown(
  Component: React.FC<MonthTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports __onDayKeyDown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        month={new Date(2022, 3, 11)}
        __onDayKeyDown={(event, payload) => {
          spy(payload);
        }}
      />
    );

    await userEvent.type(container.querySelector('table button'), '{space}');
    expect(spy).toHaveBeenCalledWith({ rowIndex: 0, cellIndex: 0, date: new Date(2022, 2, 28) });
  });
}
