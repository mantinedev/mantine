import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
  itIsPolymorphic,
} from '@mantine/tests';
import { Badge } from './Badge';

describe('@mantine/core/Badge', () => {
  checkAccessibility([mount(<Badge>this is badge</Badge>)]);
  itSupportsOthers(Badge, {});
  itSupportsClassName(Badge, {});
  itRendersChildren(Badge, {});
  itSupportsStyle(Badge, {});
  itSupportsMargins(Badge, {});
  itIsPolymorphic(Badge, {});
  itSupportsRef(Badge, {}, HTMLDivElement);
  itSupportsStylesApi(
    Badge,
    { children: 'test', leftSection: 'l', rightSection: 'r' },
    ['root', 'inner', 'leftSection', 'rightSection'],
    'Badge'
  );

  it('renders given left and right section', () => {
    const element = shallow(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(element.render().find('.mantine-Badge-rightSection').text()).toBe('test-right');
    expect(element.render().find('.mantine-Badge-leftSection').text()).toBe('test-left');
  });

  it('has correct displayName', () => {
    expect(Badge.displayName).toEqual('@mantine/core/Badge');
  });
});
