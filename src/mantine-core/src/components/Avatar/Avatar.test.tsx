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
} from '@mantine/tests';
import { Avatar } from './Avatar';

const img =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

describe('@mantine/core/Avatar', () => {
  checkAccessibility([
    mount(<Avatar src={img} alt="It's me!" />),
    mount(<Avatar src={null} alt="It's me!" />),
  ]);

  itSupportsClassName(Avatar, { src: img });
  itSupportsMargins(Avatar, { src: img });
  itSupportsOthers(Avatar, { src: img });
  itSupportsStyle(Avatar, { src: img });
  itSupportsRef(Avatar, { src: img }, HTMLDivElement, 'elementRef');

  itSupportsStylesApi(Avatar, { src: img }, ['root', 'image'], 'avatar', 'with-image');
  itSupportsStylesApi(
    Avatar,
    { src: null },
    ['root', 'placeholder', 'placeholderIcon'],
    'avatar',
    'with-placeholder'
  );

  it('passes src and alt to image', () => {
    const element = shallow(<Avatar src={img} alt="test-alt" />)
      .render()
      .find('img');
    expect(element.attr('src')).toBe(img);
    expect(element.attr('alt')).toBe('test-alt');
  });

  it('renders placeholder if src was not provided', () => {
    const element = shallow(<Avatar src={null} alt="no-image-test" />);
    expect(element.render().find('.mantine-avatar-placeholder')).toHaveLength(1);
    expect(element.render().find('.mantine-avatar-placeholder').attr('title')).toBe(
      'no-image-test'
    );
  });

  it('renders children if src was not given', () => {
    const element = shallow(
      <Avatar src={null} alt="no-image-test">
        <span className="test">test-placeholder</span>
      </Avatar>
    );

    expect(element.render().find('.mantine-avatar-placeholder').find('.test').text()).toBe(
      'test-placeholder'
    );
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Avatar<'a'> component="a" href="https://mantine.dev" />);
    const withComponent = shallow(<Avatar<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(Avatar.displayName).toEqual('@mantine/core/Avatar');
  });
});
