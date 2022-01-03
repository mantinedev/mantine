import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', async () => {
    const ref = React.createRef<typeof refType>();
    await renderWithAct(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    expect(ref.current).toBeInstanceOf(refType);
  });
}
