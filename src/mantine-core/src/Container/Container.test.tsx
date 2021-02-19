import React from 'react';
import { shallow } from '@mantine/tests';
import { Container } from './Container';

describe('@mantine/core/Container', () => {
  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@mantine/core/Container');
  });

  it('accepts className from props', () => {
    const element = shallow(<Container className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('renders children', () => {
    const element = shallow(
      <Container>
        <span className="test-children">test-children</span>
      </Container>
    );
    expect(element.render().find('.test-children')).toHaveLength(1);
  });

  it('accepts style property', () => {
    const element = shallow(
      <Container style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();

    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('support ...others props', () => {
    const element = shallow(<Container data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
});
