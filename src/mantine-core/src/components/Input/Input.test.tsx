import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { Input } from './Input';

const defaultProps = {};

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

  itSupportsClassName(Input, defaultProps);
  itSupportsMargins(Input, defaultProps);
  itSupportsSx(Input, defaultProps);
  itSupportsStyle(Input, defaultProps);
  itSupportsRef(Input, defaultProps, HTMLInputElement);

  it('spread wrapperProps to root element', () => {
    const element = shallow(<Input wrapperProps={{ 'aria-label': 'test-input' }} />);
    expect(element.render().attr('aria-label')).toBe('test-input');
  });

  it('renders icon it it was provided', () => {
    const withIcon = shallow(<Input icon="$" />);
    const withoutIcon = shallow(<Input />);

    expect(withIcon.render().find('.mantine-Input-icon').text()).toBe('$');
    expect(withoutIcon.render().find('.mantine-Input-icon')).toHaveLength(0);
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

  it('renders given right section', () => {
    const withRightSection = shallow(<Input rightSection="test-right-section" />);
    const withoutRightSection = shallow(<Input />);

    expect(withoutRightSection.render().find('.mantine-Input-rightSection')).toHaveLength(0);
    expect(withRightSection.render().find('.mantine-Input-rightSection').text()).toBe(
      'test-right-section'
    );
  });

  it('accepts input component from component prop', () => {
    const TestComponent = (props: any) => <select data-test-prop {...props} />;
    const withTag = shallow(<Input<'button'> component="button" />);
    const withComponent = shallow(<Input<typeof TestComponent> component={TestComponent} />);

    expect(withTag.find('.mantine-Input-input').type()).toBe('button');
    expect(withComponent.find('.mantine-Input-input').type()).toBe(TestComponent);
    expect(withComponent.render().find('.mantine-Input-input').attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(Input.displayName).toEqual('@mantine/core/Input');
  });
});
