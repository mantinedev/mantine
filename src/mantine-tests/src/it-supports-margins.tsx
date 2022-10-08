import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
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
