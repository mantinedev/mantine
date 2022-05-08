import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithAct } from '../render-with-act';

export function itSupportsInputStylesApi<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports input Styles API', async () => {
    const { container } = await renderWithAct(
      <Component
        {...requiredProps}
        id="test-input"
        label="test-label"
        classNames={{ label: 'secret-test-label', input: 'secret-test-input' }}
      />
    );

    expect(screen.getByText('test-label')).toHaveClass('secret-test-label');
    expect(container.querySelector('#test-input')).toHaveClass('secret-test-input');
  });
}
