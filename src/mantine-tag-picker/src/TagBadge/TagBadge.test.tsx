import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/core';
import TagBadge from './TagBadge';

const data = {
  id: 'test-id',
  color: '#FFFFFF',
  name: 'test-tag',
};

describe('@mantine/tag-picker/TagBadge', () => {
  itSupportsOthers(TagBadge, { data });
  itSupportsClassName(TagBadge, { data });
  itSupportsStyle(TagBadge, { data });
  checkAccessibility([mount(<TagBadge data={data} />)]);

  it('has correct displayName', () => {
    expect(TagBadge.displayName).toEqual('@mantine/tag-picker/TagBadge');
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
});
