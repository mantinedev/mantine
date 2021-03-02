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
import { Button, LinkButton, MantineButton } from './Button';

describe('@mantine/core/MantineButton', () => {
  checkAccessibility([mount(<MantineButton>Mantine button</MantineButton>)]);
  itSupportsOthers(MantineButton, {});
  itRendersChildren(MantineButton, {});
  itSupportsStyle(MantineButton, {});
  itSupportsClassName(MantineButton, {});
  isHasComposableAttribute(MantineButton, {});

  it('has correct displayName', () => {
    expect(MantineButton.displayName).toEqual('@mantine/core/MantineButton');
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

describe('@mantine/core/Button', () => {
  checkAccessibility([mount(<Button>Mantine button</Button>)]);
  itSupportsOthers(Button, {});
  itRendersChildren(Button, {});
  itSupportsStyle(Button, {});
  itSupportsClassName(Button, {});
  itSupportsRef(Button, {}, HTMLButtonElement);

  it('has correct displayName', () => {
    expect(Button.displayName).toEqual('@mantine/core/Button');
  });
});

describe('@mantine/core/LinkButton', () => {
  checkAccessibility([
    mount(
      <LinkButton href="https://mantine.dev" target="_blank">
        Mantine button
      </LinkButton>
    ),
  ]);
  itSupportsOthers(LinkButton, {});
  itRendersChildren(LinkButton, {});
  itSupportsStyle(LinkButton, {});
  itSupportsClassName(LinkButton, {});
  itSupportsRef(LinkButton, {}, HTMLAnchorElement);

  it('has correct displayName', () => {
    expect(LinkButton.displayName).toEqual('@mantine/core/LinkButton');
  });
});
