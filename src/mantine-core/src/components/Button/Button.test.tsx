import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Button } from './Button';

const defaultProps = {};

describe('@mantine/core/Button', () => {
  checkAccessibility([render(<Button>Mantine button</Button>)]);
  itSupportsOthers(Button, defaultProps);
  itRendersChildren(Button, defaultProps);
  itIsPolymorphic(Button, defaultProps);
  itSupportsStyle(Button, defaultProps);
  itSupportsSx(Button, defaultProps);
  itSupportsRef(Button, defaultProps, HTMLButtonElement);
  itSupportsClassName(Button, defaultProps);
  itSupportsMargins(Button, defaultProps);

  it('passes type to button component', () => {
    const element = shallow(<Button type="submit" />);
    expect(element.render().attr('type')).toBe('submit');
  });

  it('renders left and right icons if they are provided', () => {
    const leftIcon = shallow(<Button leftIcon="$">left-icon-test</Button>);
    const rightIcon = shallow(<Button rightIcon="%">right-icon-test</Button>);
    const bothIcons = shallow(
      <Button rightIcon="%" leftIcon="$">
        both-icon-test
      </Button>
    );

    expect(leftIcon.render().find('.mantine-Button-leftIcon').text()).toBe('$');
    expect(rightIcon.render().find('.mantine-Button-rightIcon').text()).toBe('%');
    expect(bothIcons.render().find('.mantine-Button-leftIcon').text()).toBe('$');
    expect(bothIcons.render().find('.mantine-Button-rightIcon').text()).toBe('%');

    expect(leftIcon.render().find('.mantine-Button-label').text()).toBe('left-icon-test');
    expect(rightIcon.render().find('.mantine-Button-label').text()).toBe('right-icon-test');
    expect(bothIcons.render().find('.mantine-Button-label').text()).toBe('both-icon-test');
  });

  it('sets disabled attribute based on prop', () => {
    const disabled = shallow(<Button disabled />);
    const notDisabled = shallow(<Button />);

    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });

  it('has correct displayName', () => {
    expect(Button.displayName).toEqual('@mantine/core/Button');
  });
});
