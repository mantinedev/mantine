import React from 'react';
import { render } from '@testing-library/react';

export function itFiltersChildren<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  childSelector: string,
  children: React.ReactElement[]
) {
  it('filters out unexpected children', () => {
    const dirtyChildren = [
      <p className="unexpected" key="1">
        Unexpected child 1
      </p>,
      ...children.map((child) => React.cloneElement(child, { key: Math.random().toString() })),
      <div className="unexpected" key="1">
        Unexpected child 1
      </div>,
    ];

    const { container } = render(<Component {...requiredProps}>{dirtyChildren}</Component>);
    expect(container.querySelectorAll(childSelector)).toHaveLength(children.length);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });
}
