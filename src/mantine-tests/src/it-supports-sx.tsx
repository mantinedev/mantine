import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsSx(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports sx', () => {
    const styles = { border: '1px solid aquamarine', background: 'beige' };
    const fn = () => styles;
    const { container: withFunction } = render(<Component {...requiredProps} sx={fn} />);
    const { container: withObject } = render(<Component {...requiredProps} sx={styles} />);

    expect(withFunction.firstChild).toHaveStyle(styles);
    expect(withObject.firstChild).toHaveStyle(styles);
  });
}
