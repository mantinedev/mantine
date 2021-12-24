import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Title } from './Title';

const defaultProps = {};

describe('@mantine/core/Title', () => {
  checkAccessibility([
    render(<Title>default title</Title>),
    render(<Title order={2}>h2 title</Title>),
  ]);

  itRendersChildren(Title, defaultProps);
  itSupportsOthers(Title, defaultProps);
  itSupportsStyle(Title, defaultProps);
  itSupportsSx(Title, defaultProps);
  itSupportsMargins(Title, defaultProps);
  itSupportsClassName(Title, defaultProps);
  itSupportsRef(Title, defaultProps, HTMLHeadingElement);

  it('has correct displayName', () => {
    expect(Title.displayName).toEqual('@mantine/core/Title');
  });

  it('uses order prop to set tag name', () => {
    ([1, 2, 3, 4, 5, 6] as const).forEach((order) => {
      const element = shallow(<Title order={order} />);
      expect(element.dive().type()).toBe(`h${order}`);
    });
  });
});
