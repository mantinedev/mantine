import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
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
  itSupportsRef(Burger, defaultProps, HTMLButtonElement, 'elementRef');
  itSupportsStylesApi(Burger, defaultProps, Object.keys(BurgerStylesApi), 'burger');

  it('has correct displayName', () => {
    expect(Burger.displayName).toEqual('@mantine/core/Burger');
  });
});
