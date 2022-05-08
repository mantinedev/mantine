import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { renderWithAct } from './render-with-act';

export function itSupportsProviderDefaultProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string,
  selector?: string
) {
  it('supports default props on MantineProvider', async () => {
    const { container } = await renderWithAct(
      <MantineProvider defaultProps={{ [name]: { 'data-provider-prop': 'test-provider-prop' } }}>
        <Component {...requiredProps} />
      </MantineProvider>
    );

    const target = selector ? container.querySelector(selector) : container.firstChild;
    expect(target).toHaveAttribute('data-provider-prop', 'test-provider-prop');
  });
}
