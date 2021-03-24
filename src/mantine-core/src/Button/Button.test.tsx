import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
  isHasComposableAttribute,
} from '@mantine/tests';
import { Button } from './Button';

describe('@mantine/core/Button', () => {
  checkAccessibility([mount(<Button>Mantine button</Button>)]);
  itSupportsOthers(Button, {});
  itRendersChildren(Button, {});
  itSupportsStyle(Button, {});
  itSupportsRef(Button, {}, HTMLButtonElement, 'elementRef');
  itSupportsClassName(Button, {});
  isHasComposableAttribute(Button, {});

  it('has correct displayName', () => {
    expect(Button.displayName).toEqual('@mantine/core/Button');
  });

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

    expect(leftIcon.render().find('[data-mantine-left-icon]').text()).toBe('$');
    expect(rightIcon.render().find('[data-mantine-right-icon]').text()).toBe('%');
    expect(bothIcons.render().find('[data-mantine-left-icon]').text()).toBe('$');
    expect(bothIcons.render().find('[data-mantine-right-icon]').text()).toBe('%');

    expect(leftIcon.render().find('[data-mantine-label]').text()).toBe('left-icon-test');
    expect(rightIcon.render().find('[data-mantine-label]').text()).toBe('right-icon-test');
    expect(bothIcons.render().find('[data-mantine-label]').text()).toBe('both-icon-test');
  });

  it('sets disabled attribute based on prop', () => {
    const disabled = shallow(<Button disabled />);
    const notDisabled = shallow(<Button />);

    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });
});
