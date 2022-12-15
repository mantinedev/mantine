import React from 'react';
import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/styles';

export function itSupportsProviderVariant<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  componentName: string,
  selector = 'root'
) {
  it('supports variants on MantineProvider', () => {
    const { container } = render(
      <MantineProvider
        theme={{
          components: {
            [componentName]: {
              variants: (_theme, variant) => {
                if (variant === 'provider-variant') {
                  return { [selector]: { backgroundColor: 'pink' } };
                }

                return null;
              },
            },
          },
        }}
      >
        <Component {...requiredProps} variant="provider-variant" />
      </MantineProvider>
    );

    expect(container.querySelector(`.mantine-${componentName}-${selector}`)).toHaveStyle({
      backgroundColor: 'pink',
    });
  });
}
