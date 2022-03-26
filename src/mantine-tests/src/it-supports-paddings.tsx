import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { renderWithAct } from './render-with-act';

export function itSupportsPaddings<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports p, px, py, pt, pb, pr and pl props', async () => {
    const { container: p } = await renderWithAct(<Component {...requiredProps} p={45} />);
    const { container: theme } = await renderWithAct(<Component {...requiredProps} p="xl" />);
    const { container: px } = await renderWithAct(<Component {...requiredProps} px={34} />);
    const { container: py } = await renderWithAct(<Component {...requiredProps} py={22} />);
    const { container: pt } = await renderWithAct(<Component {...requiredProps} pt={13} />);
    const { container: pb } = await renderWithAct(<Component {...requiredProps} pb={43} />);
    const { container: pr } = await renderWithAct(<Component {...requiredProps} pr={98} />);
    const { container: pl } = await renderWithAct(<Component {...requiredProps} pl={11} />);

    expect(p.firstChild).toHaveStyle({ padding: '45px' });
    expect(theme.firstChild).toHaveStyle({ padding: `${DEFAULT_THEME.spacing.xl}px` });
    expect(px.firstChild).toHaveStyle({ paddingLeft: '34px', paddingRight: '34px' });
    expect(py.firstChild).toHaveStyle({ paddingTop: '22px', paddingBottom: '22px' });
    expect(pt.firstChild).toHaveStyle({ paddingTop: '13px' });
    expect(pb.firstChild).toHaveStyle({ paddingBottom: '43px' });
    expect(pr.firstChild).toHaveStyle({ paddingRight: '98px' });
    expect(pl.firstChild).toHaveStyle({ paddingLeft: '11px' });
  });
}
