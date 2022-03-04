import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsRef<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  refType: any,
  refProp: string = 'ref'
) {
  // eslint-disable-next-line jest/valid-title
  it(refProp ? `supports getting ref with ${refProp} prop` : 'supports ref', async () => {
    const ref = React.createRef<typeof refType>();
    await renderWithAct(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    expect(ref.current).toBeInstanceOf(refType);
  });
}
