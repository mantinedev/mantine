import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { Burger } from './Burger';
import { Burger as BurgerStylesApi } from './styles.api';

const defaultProps = {
  opened: true,
  title: 'Close navigation',
};

describe('@mantine/core/Burger', () => {
  checkAccessibility([mount(<Burger {...defaultProps} />)]);
  itSupportsOthers(Burger, defaultProps);
  itSupportsClassName(Burger, defaultProps);
  itSupportsStyle(Burger, defaultProps);
  itSupportsMargins(Burger, defaultProps);
  itSupportsSx(Burger, defaultProps);
  itSupportsRef(Burger, defaultProps, HTMLButtonElement);
  itSupportsStylesApi(Burger, defaultProps, Object.keys(BurgerStylesApi), 'Burger');

  it('renders cross when opened prop is true', () => {
    const opened = shallow(<Burger opened />);
    const closed = shallow(<Burger opened={false} />);
    expect(opened.find('.mantine-Burger-opened')).toHaveLength(1);
    expect(closed.find('.mantine-Burger-opened')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Burger.displayName).toEqual('@mantine/core/Burger');
  });
});
