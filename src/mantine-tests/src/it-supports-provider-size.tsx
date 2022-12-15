import React from 'react';
import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/styles';

export function itSupportsProviderSize<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  componentName: string,
  selector = 'root'
) {
  it('supports size on MantineProvider', () => {
    const { container } = render(
      <MantineProvider
        theme={{
          components: {
            [componentName]: {
              sizes: (_theme, size) => {
                if (size === 'provider-size') {
                  return { [selector]: { backgroundColor: 'tomato' } };
                }

                return null;
              },
            },
          },
        }}
      >
        <Component {...requiredProps} size="provider-size" />
      </MantineProvider>
    );

    expect(container.querySelector(`.mantine-${componentName}-${selector}`)).toHaveStyle({
      backgroundColor: 'tomato',
    });
  });
}
