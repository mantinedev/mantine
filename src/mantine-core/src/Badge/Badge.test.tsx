import React from 'react';
import {
  mount,
  checkAccessibility,
  isHasComposableAttribute,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Badge } from './Badge';

describe('@mantine/core/Badge', () => {
  checkAccessibility([mount(<Badge>this is badge</Badge>)]);
  itSupportsOthers(Badge, {});
  itSupportsClassName(Badge, {});
  itRendersChildren(Badge, {});
  itSupportsStyle(Badge, {});
  isHasComposableAttribute(Badge, {});
});
