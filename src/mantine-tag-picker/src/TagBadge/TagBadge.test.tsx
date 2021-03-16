import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/theme';
import TagBadge from './TagBadge';

const data = {
  id: 'test-id',
  background: '#FFFFFF',
  name: 'test-tag',
};

describe('@mantine/tag-picker/TagBadge', () => {
  itSupportsOthers(TagBadge, { data });
  itSupportsClassName(TagBadge, { data });
  itSupportsStyle(TagBadge, { data });
  checkAccessibility([mount(<TagBadge data={data} />)]);

  it('has correct displayName', () => {
    expect(TagBadge.displayName).toBe('@mantine/tag-picker/TagBadge');
  });

  it('has correct default color contrast', () => {
    const white = shallow(<TagBadge data={{ ...data, background: '#FFFFFF' }} />);
    const black = shallow(<TagBadge data={{ ...data, background: '#000000' }} />);

    expect(white.render().css('color')).toBe(DEFAULT_THEME.black);
    expect(black.render().css('color')).toBe(DEFAULT_THEME.white);
  });

  it('sets correct background color', () => {
    const element = shallow(<TagBadge data={{ ...data, background: '#CECDCE' }} />);
    expect(element.render().css('background-color')).toBe('#CECDCE');
  });

  it('allows to force color', () => {
    const element = shallow(
      <TagBadge data={{ ...data, background: '#FFFFFF', color: '#FFFFFF' }} />
    );
    expect(element.render().css('color')).toBe('#FFFFFF');
  });

  it('renders name', () => {
    const element = shallow(<TagBadge data={data} />);
    expect(element.render().text()).toBe(data.name);
  });
});
