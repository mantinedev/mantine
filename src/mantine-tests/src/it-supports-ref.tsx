import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', async () => {
    const ref = React.createRef<typeof refType>();
    render(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    expect(ref.current).toBeInstanceOf(refType);
  });
}
