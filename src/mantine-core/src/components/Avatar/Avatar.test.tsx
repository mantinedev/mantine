import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Avatar } from './Avatar';

const defaultProps = { src: './test-image' };

describe('@mantine/core/Avatar', () => {
  checkAccessibility([
    mount(<Avatar {...defaultProps} alt="It's me!" />),
    mount(<Avatar src={null} alt="It's me!" />),
  ]);

  itSupportsClassName(Avatar, defaultProps);
  itSupportsMargins(Avatar, defaultProps);
  itSupportsOthers(Avatar, defaultProps);
  itSupportsStyle(Avatar, defaultProps);
  itIsPolymorphic(Avatar, defaultProps, { dive: 1 });
  itSupportsRef(Avatar, defaultProps, HTMLDivElement);

  itSupportsStylesApi(Avatar, defaultProps, ['root', 'image'], 'Avatar', 'with-image');
  itSupportsStylesApi(
    Avatar,
    { src: null },
    ['root', 'placeholder', 'placeholderIcon'],
    'Avatar',
    'with-placeholder'
  );

  it('passes src and alt to image', () => {
    const element = shallow(<Avatar {...defaultProps} alt="test-alt" />)
      .render()
      .find('img');
    expect(element.attr('src')).toBe(defaultProps.src);
    expect(element.attr('alt')).toBe('test-alt');
  });

  it('renders placeholder if src was not provided', () => {
    const element = shallow(<Avatar src={null} alt="no-image-test" />);
    expect(element.render().find('.mantine-Avatar-placeholder')).toHaveLength(1);
    expect(element.render().find('.mantine-Avatar-placeholder').attr('title')).toBe(
      'no-image-test'
    );
  });

  it('renders children if src was not given', () => {
    const element = shallow(
      <Avatar src={null} alt="no-image-test">
        <span className="test">test-placeholder</span>
      </Avatar>
    );

    expect(element.render().find('.mantine-Avatar-placeholder').find('.test').text()).toBe(
      'test-placeholder'
    );
  });

  it('has correct displayName', () => {
    expect(Avatar.displayName).toEqual('@mantine/core/Avatar');
  });
});
