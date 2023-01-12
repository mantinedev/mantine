import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsSx<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports sx', async () => {
    const styles = { border: '1rem solid aquamarine', background: 'beige' };
    const fn = () => styles;

    const { container: withFunction } = render(<Component {...requiredProps} sx={fn} />);
    const { container: withObject } = render(<Component {...requiredProps} sx={styles} />);

    expect(withFunction.firstChild).toHaveStyle(styles);
    expect(withObject.firstChild).toHaveStyle(styles);
  });
}
