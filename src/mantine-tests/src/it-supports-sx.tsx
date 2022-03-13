import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsSx<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports sx', async () => {
    const styles = { border: '1px solid aquamarine', background: 'beige' };
    const fn = () => styles;
    const { container: withFunction } = await renderWithAct(
      <Component {...requiredProps} sx={fn} />
    );
    const { container: withObject } = await renderWithAct(
      <Component {...requiredProps} sx={styles} />
    );

    expect(withFunction.firstChild).toHaveStyle(styles);
    expect(withObject.firstChild).toHaveStyle(styles);
  });
}
