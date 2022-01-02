import React from 'react';
import { renderWithAct } from './render-with-act';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', async () => {
    const { queryAllByText } = await renderWithAct(
      <Component {...requiredProps}>
        <span className="test-children">test-children</span>
      </Component>
    );
    expect(queryAllByText('test-children')).toHaveLength(1);
  });
}
