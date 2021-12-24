import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Avatar } from './Avatar';

const defaultProps = { src: './test-image' };

describe('@mantine/core/Avatar', () => {
  checkAccessibility([
    render(<Avatar {...defaultProps} alt="It's me!" />),
    render(<Avatar src={null} alt="It's me!" />),
  ]);

  itSupportsClassName(Avatar, defaultProps);
  itSupportsMargins(Avatar, defaultProps);
  itSupportsOthers(Avatar, defaultProps);
  itSupportsStyle(Avatar, defaultProps);
  itSupportsSx(Avatar, defaultProps);
  itIsPolymorphic(Avatar, defaultProps);
  itSupportsRef(Avatar, defaultProps, HTMLDivElement);

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
