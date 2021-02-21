import React from 'react';
import { shallow } from '@mantine/tests';
import { Hr } from './Hr';

describe('@mantine/core/Hr', () => {
  it('has correct displayName', () => {
    expect(Hr.displayName).toEqual('@mantine/core/Hr');
  });

  it('accepts className from props', () => {
    const element = shallow(<Hr className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('support ...others props', () => {
    const element = shallow(<Hr data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });

  it('accepts style property', () => {
    const element = shallow(<Hr style={{ border: '1px solid red', lineHeight: 1 }} />).render();
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('passes variant to borderTopStyle', () => {
    const solid = shallow(<Hr variant="solid" />).render();
    const dashed = shallow(<Hr variant="dashed" />).render();
    const dotted = shallow(<Hr variant="dotted" />).render();

    expect(solid.css('border-top-style')).toBe('solid');
    expect(dashed.css('border-top-style')).toBe('dashed');
    expect(dotted.css('border-top-style')).toBe('dotted');
  });
});
