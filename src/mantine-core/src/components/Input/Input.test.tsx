import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/tss';
import { Input } from './Input';
import { Input as InputStylesApi } from './styles.api';

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
  itSupportsStylesApi(
    Input,
    {
      invalid: true,
      icon: '$',
      rightSection: 'test',
    },
    Object.keys(InputStylesApi),
    'input'
  );

  itSupportsStylesApi(
    Input,
    { invalid: true, icon: '$', rightSection: 'test', __staticSelector: 'test-input' },
    Object.keys(InputStylesApi),
    'test-input',
    'static selector'
  );

  it('spread wrapperProps to root element', () => {
    const element = shallow(<Input wrapperProps={{ 'aria-label': 'test-input' }} />);
    expect(element.render().attr('aria-label')).toBe('test-input');
  });

  it('renders icon it it was provided', () => {
    const withIcon = shallow(<Input icon="$" />);
    const withoutIcon = shallow(<Input />);

    expect(withIcon.render().find('.mantine-input-icon').text()).toBe('$');
    expect(withoutIcon.render().find('.mantine-input-icon')).toHaveLength(0);
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

    expect(withoutRightSection.render().find('.mantine-input-rightSection')).toHaveLength(0);
    expect(withRightSection.render().find('.mantine-input-rightSection').text()).toBe(
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

    expect(withTag.find('.mantine-input-input').type()).toBe('button');
    expect(withComponent.find('.mantine-input-input').type()).toBe(TestComponent);
    expect(withComponent.render().find('.mantine-input-input').attr('data-test-prop')).toBe('true');
  });
});
