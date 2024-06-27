import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsGetDayRef(options: Options, name = 'supports __getDayRef') {
  it(name, () => {
    const daysRefs: Record<string, HTMLButtonElement> = {};
    render(
      <options.component
        {...options.props}
        __getDayRef={(rowIndex: number, cellIndex: number, node: HTMLButtonElement) => {
          daysRefs[`${rowIndex}.${cellIndex}`] = node;
        }}
      />
    );

    expect(Object.keys(daysRefs)).toHaveLength(35);
    expect(daysRefs['0.0']).toBeInstanceOf(HTMLButtonElement);
  });
}
