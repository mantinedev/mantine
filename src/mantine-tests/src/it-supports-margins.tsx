import React from 'react';
import { shallow } from 'enzyme';
import { DEFAULT_THEME } from '@mantine/styles';

export function itSupportsMargins(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports m, mx, my, mt, mb, mr and ml props', () => {
    const m = shallow(<Component {...requiredProps} m={45} />).render();
    const theme = shallow(<Component {...requiredProps} m="xl" />).render();

    const mx = shallow(<Component {...requiredProps} mx={34} />).render();
    const my = shallow(<Component {...requiredProps} my={22} />).render();

    const mt = shallow(<Component {...requiredProps} mt={13} />).render();
    const mb = shallow(<Component {...requiredProps} mb={43} />).render();
    const mr = shallow(<Component {...requiredProps} mr={98} />).render();
    const ml = shallow(<Component {...requiredProps} ml={11} />).render();

    expect(m.css('margin')).toBe('45px');
    expect(theme.css('margin')).toBe(`${DEFAULT_THEME.spacing.xl}px`);

    expect(mx.css('margin-left')).toBe('34px');
    expect(mx.css('margin-right')).toBe('34px');

    expect(my.css('margin-top')).toBe('22px');
    expect(my.css('margin-bottom')).toBe('22px');

    expect(mt.css('margin-top')).toBe('13px');
    expect(mb.css('margin-bottom')).toBe('43px');
    expect(mr.css('margin-right')).toBe('98px');
    expect(ml.css('margin-left')).toBe('11px');
  });
}
