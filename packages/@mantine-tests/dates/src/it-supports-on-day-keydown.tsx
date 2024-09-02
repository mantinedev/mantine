import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsOnDayKeydown(options: Options, name = 'supports __onDayKeyDown') {
  it(name, async () => {
    const spy = jest.fn();
    const { container } = render(
      <options.component
        {...options.props}
        month={new Date(2022, 3, 11)}
        __onDayKeyDown={(_event: any, payload: any) => {
          spy(payload);
        }}
      />
    );

    await userEvent.type(container.querySelector('table button')!, '{space}');
    expect(spy).toHaveBeenCalledWith({ rowIndex: 0, cellIndex: 0, date: new Date(2022, 2, 28) });
  });
}
