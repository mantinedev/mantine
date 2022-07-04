import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputWrapperOrder<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  it('supports inputWrapperOrder prop', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        id="invalid-test-id"
        error="test-error"
        description="test-description"
        label="test-label"
        inputWrapperOrder={['description', 'error', 'input', 'label']}
      />
    );
    const children = container.firstChild.childNodes;
    expect(children[0]).toBe(container.querySelector(`.mantine-${name}-description`));
    expect(children[1]).toBe(container.querySelector(`.mantine-${name}-error`));
    expect(children[children.length - 1]).toBe(container.querySelector(`.mantine-${name}-label`));
  });
}
