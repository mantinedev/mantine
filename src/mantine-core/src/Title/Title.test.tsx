import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
} from '@mantine/tests';
import { Title } from './Title';

describe('@mantine/core/Title', () => {
  checkAccessibility([
    mount(<Title>default title</Title>),
    mount(<Title order={2}>h2 title</Title>),
  ]);

  itRendersChildren(Title, {});
  itSupportsOthers(Title, {});
  itSupportsStyle(Title, {});
  itSupportsClassName(Title, {});

  it('has correct displayName', () => {
    expect(Title.displayName).toEqual('@mantine/core/Title');
  });

  it('uses order prop to set tag name', () => {
    ([1, 2, 3, 4, 5, 6] as const).forEach((order) => {
      const element = shallow(<Title order={order} />);
      expect(element.type()).toBe(`h${order}`);
    });
  });
});
