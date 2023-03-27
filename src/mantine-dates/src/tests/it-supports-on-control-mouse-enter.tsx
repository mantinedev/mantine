import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface ComponentTestProps {
  __onControlMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
}

export function itSupportsOnControlMouseEnter(
  Component: React.FC<ComponentTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports __onControlMouseEnter', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        __onControlMouseEnter={(_event, date) => {
          spy(date);
        }}
      />
    );

    await userEvent.hover(container.querySelector('table button'));
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
  });
}
