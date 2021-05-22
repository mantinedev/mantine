import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
} from '@mantine/tests';
import { Paper } from '../Paper/Paper';
import { Card } from './Card';

describe('@mantine/core/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement, 'elementRef');
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@mantine/core/Card');
  });

  it('passes padding and radius to Paper component', () => {
    const element = shallow(<Card radius="xl" padding={29} />);
    expect(element.find(Paper).prop('padding')).toBe(29);
    expect(element.find(Paper).prop('radius')).toBe('xl');
  });
});
