import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/theme';
import { Input } from './Input';

describe('@mantine/core/Input', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  checkAccessibility([
    mount(<Input aria-label="test-input" />),
    mount(<Input placeholder="test-input" />),
    mount(<Input placeholder="test-input" invalid />),
  ]);

  itSupportsClassName(Input, {});
  itSupportsStyle(Input, {});
  itSupportsRef(Input, {}, HTMLInputElement, 'elementRef');

  it('spread wrapperProps to root element', () => {
    const element = shallow(<Input wrapperProps={{ 'aria-label': 'test-input' }} />);
    expect(element.render().attr('aria-label')).toBe('test-input');
  });

  it('renders icon it it was provided', () => {
    const withIcon = shallow(<Input icon="$" />);
    const withoutIcon = shallow(<Input />);

    expect(withIcon.render().find('[data-mantine-icon]').text()).toBe('$');
    expect(withoutIcon.render().find('[data-mantine-icon]')).toHaveLength(0);
  });

  it('sets aria-required attribute on input if required prop is true', () => {
    const required = shallow(<Input required />);
    const notRequired = shallow(<Input />);

    expect(required.render().find('input').attr('aria-required')).toBe('true');
    expect(notRequired.render().find('input').attr('aria-required')).toBe('false');
  });

  it('sets aria-invalid attribute on input if required prop is true', () => {
    const invalid = shallow(<Input invalid />);
    const valid = shallow(<Input />);

    expect(invalid.render().find('input').attr('aria-invalid')).toBe('true');
    expect(valid.render().find('input').attr('aria-invalid')).toBe('false');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabled = shallow(<Input disabled />);
    const notDisabled = shallow(<Input />);

    expect(disabled.render().find('input').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('input').attr('disabled')).toBe(undefined);
  });

  it('sets input className with inputClassName prop', () => {
    const element = shallow(<Input inputClassName="test-class-name" />);
    expect(element.render().find('input').hasClass('test-class-name')).toBe(true);
  });

  it('sets input style with inputStyle prop', () => {
    const element = shallow(<Input inputStyle={{ border: '1px solid red', lineHeight: 1 }} />)
      .render()
      .find('input');
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('renders given right section', () => {
    const withRightSection = shallow(<Input rightSection="test-right-section" />);
    const withoutRightSection = shallow(<Input />);

    expect(withoutRightSection.render().find('[data-mantine-input-section]')).toHaveLength(0);
    expect(withRightSection.render().find('[data-mantine-input-section]').text()).toBe(
      'test-right-section'
    );
  });

  it('sets input paddingRight based on given rightSectionWidth value', () => {
    const withRightSection = shallow(
      <Input rightSection="test-right-section" rightSectionWidth={47} />
    );
    const withoutRightSection = shallow(<Input />);

    expect(withRightSection.render().find('input').css('padding-right')).toBe('47px');
    expect(withoutRightSection.render().find('input').css('padding-right')).toBe(
      `${DEFAULT_THEME.spacing.md}px`
    );
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <select data-test-prop {...props} />;
    const withTag = shallow(<Input<'button'> component="button" />);
    const withComponent = shallow(<Input<typeof TestComponent> component={TestComponent} />);

    expect(withTag.find('[data-mantine-input]').type()).toBe('button');
    expect(withComponent.find('[data-mantine-input]').type()).toBe(TestComponent);
    expect(withComponent.render().find('[data-mantine-input]').attr('data-test-prop')).toBe('true');
  });
});
