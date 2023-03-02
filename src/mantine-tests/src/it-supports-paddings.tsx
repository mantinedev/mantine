import React from 'react';
import { DEFAULT_THEME, rem } from '@mantine/styles';
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

    expect(p.firstChild).toHaveStyle({ padding: rem(45) });
    expect(theme.firstChild).toHaveStyle({ padding: `${DEFAULT_THEME.spacing.xl}` });
    expect(px.firstChild).toHaveStyle({ paddingLeft: rem(34), paddingRight: rem(34) });
    expect(py.firstChild).toHaveStyle({ paddingTop: rem(22), paddingBottom: rem(22) });
    expect(pt.firstChild).toHaveStyle({ paddingTop: rem(13) });
    expect(pb.firstChild).toHaveStyle({ paddingBottom: rem(43) });
    expect(pr.firstChild).toHaveStyle({ paddingRight: rem(98) });
    expect(pl.firstChild).toHaveStyle({ paddingLeft: rem(11) });
  });
}
