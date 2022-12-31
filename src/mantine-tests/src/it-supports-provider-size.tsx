import React from 'react';
import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/styles';

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export function itSupportsProviderSize<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  componentName: string,
  selector: string | string[] = 'root'
) {
  it('supports size on MantineProvider', () => {
    const selectors = Array.isArray(selector) ? selector : [selector];
    const colors = Array(selectors.length)
      .fill(0)
      .map(() => randomColor());

    const { container } = render(
      <MantineProvider
        theme={{
          components: {
            [componentName]: {
              sizes: {
                'provider-size': () =>
                  selectors.reduce((acc, part, index) => {
                    acc[part] = { borderRightColor: colors[index] };
                    return acc;
                  }, {}),
              },
            },
          },
        }}
      >
        <Component {...requiredProps} size="provider-size" />
      </MantineProvider>
    );

    selectors.forEach((part, index) => {
      expect(container.querySelector(`.mantine-${componentName}-${part}`)).toHaveStyle({
        borderRightColor: colors[index],
      });
    });
  });
}
