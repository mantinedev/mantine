import React from 'react';
import {
  mount,
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
