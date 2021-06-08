import React from 'react';
import {
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStylesApi,
} from '@mantine/tests';
import { shallow } from 'enzyme';
import { MenuButton } from './MenuButton';
import { MenuItem as MenuItemStylesApi } from '../styles.api';

const defaultProps = {
  onHover: () => {},
  hovered: false,
  elementRef: () => {},
};

describe('@mantine/core/MenuButton', () => {
  itSupportsClassName(MenuButton, defaultProps);
  itSupportsStyle(MenuButton, defaultProps);
  itSupportsOthers(MenuButton, defaultProps);
  itSupportsRef(MenuButton, defaultProps, HTMLButtonElement, 'elementRef');
  itRendersChildren(MenuButton, defaultProps);
  itSupportsStylesApi(
    MenuButton,
    { ...defaultProps, hovered: true, icon: '$', rightSection: 'test' },
    Object.keys(MenuItemStylesApi).filter((item) => item !== 'hovered'),
    'menu-item'
  );

  it('has correct displayName', () => {
    expect(MenuButton.displayName).toEqual('@mantine/core/MenuButton');
  });

  it('sets disabled attribute based on disabled prop', () => {
    const disabled = shallow(
      <MenuButton {...defaultProps} disabled>
        test
      </MenuButton>
    );
    const notDisabled = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });

  it('trigger onHover function on mouse enter', () => {
    const spy = jest.fn();

    const element = shallow(
      <MenuButton {...defaultProps} onHover={spy}>
        test
      </MenuButton>
    );

    element.simulate('mouseenter');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders icon based on icon prop', () => {
    const withoutIcon = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    const withIcon = shallow(
      <MenuButton {...defaultProps} icon="$$$">
        test
      </MenuButton>
    );

    expect(withoutIcon.render().find('[data-mantine-icon]')).toHaveLength(0);
    expect(withIcon.render().find('[data-mantine-icon]').text()).toBe('$$$');
  });

  it('renders given right section', () => {
    const withoutCmd = shallow(<MenuButton {...defaultProps}>test</MenuButton>);
    const withCmd = shallow(
      <MenuButton {...defaultProps} rightSection={<span data-mantine-cmd>$$$</span>}>
        test
      </MenuButton>
    );

    expect(withoutCmd.render().find('[data-mantine-cmd]')).toHaveLength(0);
    expect(withCmd.render().find('[data-mantine-cmd]').text()).toBe('$$$');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <MenuButton component={'a' as const} href="https://mantine.dev" {...defaultProps}>
        test
      </MenuButton>
    );
    const withComponent = shallow(
      <MenuButton<typeof TestComponent> component={TestComponent} {...defaultProps}>
        test
      </MenuButton>
    );

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
});
