import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsOnControlKeydown(options: Options, name = 'supports __onControlKeyDown') {
  it(name, async () => {
    const spy = jest.fn();
    const { container } = render(
      <options.component
        {...options.props}
        __onControlKeyDown={(_event: any, payload: any) => {
          spy(payload);
        }}
      />
    );

    await userEvent.type(container.querySelector('table button')!, '{space}');
    expect(spy).toHaveBeenCalledWith({ rowIndex: 0, cellIndex: 0, date: expect.any(Date) });
  });
}
