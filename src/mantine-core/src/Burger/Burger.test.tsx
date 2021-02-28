import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Burger } from './Burger';

describe('@mantine/core/Burger', () => {
  checkAccessibility([mount(<Burger opened title="Close navigation" />)]);
  itSupportsOthers(Burger, {});
  itSupportsClassName(Burger, {});
  itSupportsStyle(Burger, {});
});
