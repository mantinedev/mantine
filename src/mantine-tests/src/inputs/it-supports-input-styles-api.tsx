import React from 'react';
import { screen, render } from '@testing-library/react';

export function itSupportsInputStylesApi<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports input Styles API: classNames', async () => {
    const { container } = render(
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

  it('supports input Styles API: styles', async () => {
    const { container } = render(
      <Component
        {...requiredProps}
        id="test-input"
        label="test-label"
        styles={{ label: { lineHeight: 1.946 }, input: { background: 'cyan' } }}
      />
    );

    expect(screen.getByText('test-label')).toHaveStyle({ lineHeight: 1.946 });
    expect(container.querySelector('#test-input')).toHaveStyle({ background: 'cyan' });
  });
}
