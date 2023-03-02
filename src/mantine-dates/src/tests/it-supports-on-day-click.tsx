import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface ComponentTestProps {
  __onDayClick?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
}

export function itSupportsOnDayClick(
  Component: React.FC<ComponentTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports __onDayClick', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        __onDayClick={(_event, date) => {
          spy(date);
        }}
      />
    );

    await userEvent.click(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
  });
}
