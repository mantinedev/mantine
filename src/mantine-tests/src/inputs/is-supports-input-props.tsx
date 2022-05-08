import React from 'react';
import { itConnectsLabelAndInput } from '../it-connects-label-and-input';
import { itSupportsInputIcon } from './it-supports-input-icon';
import { itSupportsInputRightSection } from './it-supports-input-right-section';
import { itSupportsInputWrapperProps } from './it-supports-input-wrapper-props';
import { renderWithAct } from '../render-with-act';

export function itSupportsInputProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  itSupportsInputWrapperProps(Component, requiredProps, name);
  itConnectsLabelAndInput(Component, requiredProps);
  itSupportsInputIcon(Component, requiredProps);
  itSupportsInputRightSection(Component, requiredProps);

  it('handles error and invalid state', async () => {
    const { container: invalid } = await renderWithAct(
      <Component {...requiredProps} required id="invalid-test-id" error />
    );
    const { container: withError } = await renderWithAct(
      <Component {...requiredProps} required id="error-test-id" error="Test error" />
    );

    expect(invalid.querySelector('#invalid-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(withError.querySelector('#error-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(invalid.querySelectorAll(`.mantine-${name}-error`)).toHaveLength(0);
    expect(withError.querySelector(`.mantine-${name}-error`)).toBeInTheDocument();
    expect(withError.querySelector(`.mantine-${name}-error`).textContent).toBe('Test error');
  });

  it('sets border-radius on input', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} radius={43} id="secret-test-id" />
    );
    expect(container.querySelector('#secret-test-id')).toHaveStyle({ borderRadius: '43px' });
  });
}
