import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { render } from '@testing-library/react';

export function itSupportsPaddings<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports p, px, py, pt, pb, pr and pl props', () => {
    const { container: p } = render(<Component {...requiredProps} p={45} />);
    const { container: theme } = render(<Component {...requiredProps} p="xl" />);
    const { container: px } = render(<Component {...requiredProps} px={34} />);
    const { container: py } = render(<Component {...requiredProps} py={22} />);
    const { container: pt } = render(<Component {...requiredProps} pt={13} />);
    const { container: pb } = render(<Component {...requiredProps} pb={43} />);
    const { container: pr } = render(<Component {...requiredProps} pr={98} />);
    const { container: pl } = render(<Component {...requiredProps} pl={11} />);

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
