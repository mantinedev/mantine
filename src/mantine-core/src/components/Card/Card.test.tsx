import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Paper } from '../Paper/Paper';
import { Card } from './Card';

describe('@mantine/core/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement);
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});
  itSupportsMargins(Card, {});
  itIsPolymorphic(Card, {}, { dive: true });

  it('passes padding and radius to Paper component', () => {
    const element = shallow(
      <Card radius="xl" padding={29}>
        test-card
      </Card>
    );
    expect(element.find(Paper).prop('padding')).toBe(29);
    expect(element.find(Paper).prop('radius')).toBe('xl');
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@mantine/core/Card');
  });
});
