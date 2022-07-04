import React from 'react';
import { renderWithAct } from './render-with-act';

export function itFiltersChildren<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  childSelector: string,
  children: React.ReactElement[]
) {
  it('filters out unexpected children', async () => {
    const dirtyChildren = [
      <p className="unexpected" key="1">
        Unexpected child 1
      </p>,
      ...children.map((child) => React.cloneElement(child, { key: Math.random().toString() })),
      <div className="unexpected" key="1">
        Unexpected child 1
      </div>,
    ];

    const { container } = await renderWithAct(
      <Component {...requiredProps}>{dirtyChildren}</Component>
    );

    expect(container.querySelectorAll(childSelector)).toHaveLength(children.length);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });
}
