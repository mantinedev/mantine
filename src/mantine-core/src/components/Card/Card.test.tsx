import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
  itSupportsMargins,
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

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withComponent = shallow(<Card component={TestComponent}>Card</Card>);
    const withTag = shallow(
      <Card component="a" href="https://mantine.dev">
        Card
      </Card>
    );

    expect(withTag.dive().type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.dive().type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

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
