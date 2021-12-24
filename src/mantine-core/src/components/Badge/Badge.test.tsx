import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Badge } from './Badge';

const defaultProps = {};

describe('@mantine/core/Badge', () => {
  checkAccessibility([render(<Badge>this is badge</Badge>)]);
  itSupportsOthers(Badge, defaultProps);
  itSupportsClassName(Badge, defaultProps);
  itRendersChildren(Badge, defaultProps);
  itSupportsStyle(Badge, defaultProps);
  itSupportsSx(Badge, defaultProps);
  itSupportsMargins(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsRef(Badge, defaultProps, HTMLDivElement);

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
