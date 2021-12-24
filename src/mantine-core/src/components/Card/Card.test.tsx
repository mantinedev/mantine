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
  itSupportsSx,
} from '@mantine/tests';
import { Paper } from '../Paper/Paper';
import { Card } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps = {};

describe('@mantine/core/Card', () => {
  itSupportsOthers(Card, defaultProps);
  itSupportsSx(Card, defaultProps);
  itSupportsClassName(Card, defaultProps);
  itSupportsRef(Card, defaultProps, HTMLDivElement);
  itRendersChildren(Card, defaultProps);
  itSupportsStyle(Card, defaultProps);
  itSupportsMargins(Card, defaultProps);
  itIsPolymorphic(Card, defaultProps);

  it('passes padding and radius to Paper component', () => {
    const element = shallow(
      <Card radius="xl" padding={29}>
        test-card
      </Card>
    );
    expect(element.find(Paper).prop('padding')).toBe(29);
    expect(element.find(Paper).prop('radius')).toBe('xl');
  });

  it('exposes CardSection as Card.Section', () => {
    expect(Card.Section).toBe(CardSection);
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@mantine/core/Card');
  });
});
