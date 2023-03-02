import React from 'react';
import { DEFAULT_THEME, rem } from '@mantine/styles';
import { render } from '@testing-library/react';

export function itSupportsMargins<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports m, mx, my, mt, mb, mr and ml props', async () => {
    const { container: m } = render(<Component {...requiredProps} m={45} />);
    const { container: theme } = render(<Component {...requiredProps} m="xl" />);
    const { container: mx } = render(<Component {...requiredProps} mx={34} />);
    const { container: my } = render(<Component {...requiredProps} my={22} />);
    const { container: mt } = render(<Component {...requiredProps} mt={13} />);
    const { container: mb } = render(<Component {...requiredProps} mb={43} />);
    const { container: mr } = render(<Component {...requiredProps} mr={98} />);
    const { container: ml } = render(<Component {...requiredProps} ml={11} />);

    expect(m.firstChild).toHaveStyle({ margin: rem(45) });
    expect(theme.firstChild).toHaveStyle({ margin: `${DEFAULT_THEME.spacing.xl}` });
    expect(mx.firstChild).toHaveStyle({ marginLeft: rem(34), marginRight: rem(34) });
    expect(my.firstChild).toHaveStyle({ marginTop: rem(22), marginBottom: rem(22) });
    expect(mt.firstChild).toHaveStyle({ marginTop: rem(13) });
    expect(mb.firstChild).toHaveStyle({ marginBottom: rem(43) });
    expect(mr.firstChild).toHaveStyle({ marginRight: rem(98) });
    expect(ml.firstChild).toHaveStyle({ marginLeft: rem(11) });
  });
}
