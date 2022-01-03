import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { renderWithAct } from './render-with-act';

export function itSupportsMargins(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports m, mx, my, mt, mb, mr and ml props', async () => {
    const { container: m } = await renderWithAct(<Component {...requiredProps} m={45} />);
    const { container: theme } = await renderWithAct(<Component {...requiredProps} m="xl" />);
    const { container: mx } = await renderWithAct(<Component {...requiredProps} mx={34} />);
    const { container: my } = await renderWithAct(<Component {...requiredProps} my={22} />);
    const { container: mt } = await renderWithAct(<Component {...requiredProps} mt={13} />);
    const { container: mb } = await renderWithAct(<Component {...requiredProps} mb={43} />);
    const { container: mr } = await renderWithAct(<Component {...requiredProps} mr={98} />);
    const { container: ml } = await renderWithAct(<Component {...requiredProps} ml={11} />);

    expect(m.firstChild).toHaveStyle({ margin: '45px' });
    expect(theme.firstChild).toHaveStyle({ margin: `${DEFAULT_THEME.spacing.xl}px` });
    expect(mx.firstChild).toHaveStyle({ marginLeft: '34px', marginRight: '34px' });
    expect(my.firstChild).toHaveStyle({ marginTop: '22px', marginBottom: '22px' });
    expect(mt.firstChild).toHaveStyle({ marginTop: '13px' });
    expect(mb.firstChild).toHaveStyle({ marginBottom: '43px' });
    expect(mr.firstChild).toHaveStyle({ marginRight: '98px' });
    expect(ml.firstChild).toHaveStyle({ marginLeft: '11px' });
  });
}
