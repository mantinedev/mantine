import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsOnControlClick(options: Options, name = 'supports __onControlClick') {
  it(name, async () => {
    const spy = jest.fn();
    const { container } = render(
      <options.component
        {...options.props}
        __onControlClick={(_event: any, date: any) => {
          spy(date);
        }}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
  });
}
