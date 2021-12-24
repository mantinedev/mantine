import React from 'react';
import { render } from '@testing-library/react';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', () => {
    const { queryAllByText } = render(
      <Component {...requiredProps}>
        <span className="test-children">test-children</span>
      </Component>
    );
    expect(queryAllByText('test-children')).toHaveLength(1);
  });
}
