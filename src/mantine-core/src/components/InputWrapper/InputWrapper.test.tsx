import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { InputWrapper } from './InputWrapper';
import { InputWrapper as InputWrapperStylesApi } from './styles.api';

const defaultProps = {
  id: 'test-id',
  required: true,
  children: 'test',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
};

describe('@mantine/core/InputWrapper', () => {
  itSupportsOthers(InputWrapper, defaultProps);
  itSupportsMargins(InputWrapper, defaultProps);
  itSupportsStyle(InputWrapper, defaultProps);
  itSupportsClassName(InputWrapper, defaultProps);
  itSupportsRef(InputWrapper, defaultProps, HTMLDivElement);
  itRendersChildren(InputWrapper, { id: 'test-id' });
  itSupportsStylesApi(
    InputWrapper,
    defaultProps,
    Object.keys(InputWrapperStylesApi),
    'InputWrapper'
  );

  itSupportsStylesApi(
    InputWrapper,
    { ...defaultProps, __staticSelector: 'test-input-wrapper' },
    Object.keys(InputWrapperStylesApi),
    'test-input-wrapper',
    'static selector'
  );

  it('renders correct error, description and label', () => {
    const withProps = shallow(
      <InputWrapper
        id="test-id"
        label="test-label"
        error="test-error"
        description="test-description"
      >
        test-children
      </InputWrapper>
    );

    const withoutProps = shallow(<InputWrapper id="test-id">test-children</InputWrapper>);

    expect(withProps.render().find('label').text()).toBe('test-label');
    expect(withProps.render().find('.mantine-InputWrapper-description').text()).toBe(
      'test-description'
    );
    expect(withProps.render().find('.mantine-InputWrapper-error').text()).toBe('test-error');

    expect(withoutProps.render().find('label')).toHaveLength(0);
    expect(withoutProps.render().find('.mantine-InputWrapper-description')).toHaveLength(0);
    expect(withoutProps.render().find('.mantine-InputWrapper-error')).toHaveLength(0);
  });

  it('does not render error if error prop is boolean', () => {
    const element = shallow(
      <InputWrapper id="test-id" error>
        test-children
      </InputWrapper>
    );
    expect(element.render().find('.mantine-InputWrapper-error')).toHaveLength(0);
  });

  it('renders required asterisk with required prop is true', () => {
    const required = shallow(
      <InputWrapper id="test-id" required label="test-label">
        test-children
      </InputWrapper>
    );
    const notRequired = shallow(<InputWrapper id="test-id">test-children</InputWrapper>);

    expect(required.render().find('.mantine-InputWrapper-required').text()).toBe(' *');
    expect(notRequired.render().find('.mantine-InputWrapper-required')).toHaveLength(0);
  });

  it('passes id to label htmlFor prop', () => {
    const element = shallow(
      <InputWrapper id="test-id" label="test-label">
        test-children
      </InputWrapper>
    );

    expect(element.render().find('label').attr('for')).toBe('test-id');
  });

  it('spreads props to label, description and error', () => {
    const element = shallow(
      <InputWrapper
        id="test-id"
        label="test-label"
        description="test-description"
        error="test-error"
        labelProps={{ 'data-test-label': true }}
        descriptionProps={{ 'data-test-description': true }}
        errorProps={{ 'data-test-error': true }}
      >
        test-children
      </InputWrapper>
    );

    expect(element.render().find('.mantine-InputWrapper-label').attr('data-test-label')).toBe(
      'true'
    );
    expect(
      element.render().find('.mantine-InputWrapper-description').attr('data-test-description')
    ).toBe('true');
    expect(element.render().find('.mantine-InputWrapper-error').attr('data-test-error')).toBe(
      'true'
    );
  });

  it('sets label element based on labelElement prop', () => {
    const label = shallow(
      <InputWrapper id="test-id" label="test-label" labelElement="label">
        test-children
      </InputWrapper>
    );

    const div = shallow(
      <InputWrapper id="test-id" label="test-label" labelElement="div">
        test-children
      </InputWrapper>
    );

    expect(label.find('.mantine-InputWrapper-label').type()).toBe('label');
    expect(label.find('.mantine-InputWrapper-label').prop('htmlFor')).toBe('test-id');
    expect(div.find('.mantine-InputWrapper-label').type()).toBe('div');
    expect(div.find('.mantine-InputWrapper-label').prop('htmlFor')).toBe(undefined);
  });
});
