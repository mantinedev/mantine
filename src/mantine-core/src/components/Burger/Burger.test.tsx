import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@mantine/tests';
import { Burger } from './Burger';

describe('@mantine/core/Burger', () => {
  checkAccessibility([mount(<Burger opened title="Close navigation" />)]);
  itSupportsOthers(Burger, { opened: true });
  itSupportsClassName(Burger, { opened: true });
  itSupportsStyle(Burger, { opened: true });
  itSupportsRef(Burger, { opened: true }, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Burger.displayName).toEqual('@mantine/core/Burger');
  });
});
