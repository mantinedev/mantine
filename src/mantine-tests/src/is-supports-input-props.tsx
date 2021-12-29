import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsWrapperProps } from './it-supports-wrapper-props';
import { itConnectsLabelAndInput } from './it-connects-label-and-input';
import { itSupportsInputIcon } from './it-supports-input-icon';
import { itSupportsInputRightSection } from './it-supports-input-right-section';

export function itSupportsInputProps(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  name: string
) {
  itSupportsWrapperProps(Component, requiredProps);
  itConnectsLabelAndInput(Component, requiredProps);
  itSupportsInputIcon(Component, requiredProps);
  itSupportsInputRightSection(Component, requiredProps);

  it('handles required attribute correctly', () => {
    const { container } = render(
      <Component {...requiredProps} required id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector(`.mantine-${name}-required`)).toBeInTheDocument();
    expect(container.querySelector('#secret-test-id')).toHaveAttribute('aria-required', 'true');
  });

  it('handles error and invalid state', () => {
    const { container: invalid } = render(
      <Component {...requiredProps} required id="invalid-test-id" error />
    );
    const { container: withError } = render(
      <Component {...requiredProps} required id="error-test-id" error="Test error" />
    );

    expect(invalid.querySelector('#invalid-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(withError.querySelector('#error-test-id')).toHaveAttribute('aria-invalid', 'true');
    expect(invalid.querySelectorAll(`.mantine-${name}-error`)).toHaveLength(0);
    expect(withError.querySelector(`.mantine-${name}-error`)).toBeInTheDocument();
    expect(withError.querySelector(`.mantine-${name}-error`).textContent).toBe('Test error');
  });

  it('renders input description', () => {
    const { getByText } = render(<Component {...requiredProps} description="Test description" />);
    expect(getByText('Test description')).toBeInTheDocument();
  });

  it('sets border-radius on input', () => {
    const { container } = render(<Component {...requiredProps} radius={43} id="secret-test-id" />);
    expect(container.querySelector('#secret-test-id')).toHaveStyle({ borderRadius: '43px' });
  });
}
