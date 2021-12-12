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
  itSupportsSx,
} from '@mantine/tests';
import { Badge } from './Badge';

const defaultProps = {};

describe('@mantine/core/Badge', () => {
  checkAccessibility([mount(<Badge>this is badge</Badge>)]);
  itSupportsOthers(Badge, defaultProps);
  itSupportsClassName(Badge, defaultProps);
  itRendersChildren(Badge, defaultProps);
  itSupportsStyle(Badge, defaultProps);
  itSupportsSx(Badge, defaultProps);
  itSupportsMargins(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps, { dive: 1 });
  itSupportsRef(Badge, defaultProps, HTMLDivElement);
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
