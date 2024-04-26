import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsOnControlMouseEnter(
  options: Options,
  name = 'supports __onControlMouseEnter'
) {
  it(name, async () => {
    const spy = jest.fn();
    const { container } = render(
      <options.component
        {...options.props}
        __onControlMouseEnter={(_event: any, date: any) => {
          spy(date);
        }}
      />
    );

    await userEvent.hover(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
  });
}
