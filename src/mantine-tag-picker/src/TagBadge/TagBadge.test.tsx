import React from 'react';
import { shallow } from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/core';
import TagBadge from './TagBadge';

const data = {
  id: 'test-id',
  color: '#FFFFFF',
  name: 'test-tag',
};

describe('@mantine/tag-picker/TagBadge', () => {
  it('has correct displayName', () => {
    expect(TagBadge.displayName).toEqual('@mantine/tag-picker/TagBadge');
  });

  it('accepts className from props', () => {
    const element = shallow(<TagBadge data={data} className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('has correct color contrast', () => {
    const white = shallow(<TagBadge data={{ ...data, color: '#FFFFFF' }} />);
    const black = shallow(<TagBadge data={{ ...data, color: '#000000' }} />);

    expect(white.render().css('color')).toEqual(DEFAULT_THEME.black);
    expect(black.render().css('color')).toEqual(DEFAULT_THEME.white);
  });

  it('renders name', () => {
    const element = shallow(<TagBadge data={data} />);
    expect(element.render().text()).toBe(data.name);
  });

  it('accepts style property', () => {
    const element = shallow(
      <TagBadge data={data} style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();

    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('support ...others props', () => {
    const element = shallow(<TagBadge data={data} data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
});
