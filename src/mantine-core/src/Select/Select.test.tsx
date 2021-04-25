import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Select } from './Select';

const TEST_DATA = [
  { label: 'test-data-1', value: 'test-data-1' },
  { label: 'test-data-2', value: 'test-data-2' },
  { label: 'test-data-3', value: 'test-data-3' },
];

describe('@mantine/core/Select', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  checkAccessibility([
    mount(<Select data={TEST_DATA} label="test-label" />),
    mount(<Select data={TEST_DATA} aria-label="test-label" />),
  ]);

  itSupportsClassName(Select, { data: TEST_DATA });
  itSupportsStyle(Select, { data: TEST_DATA });
  itSupportsRef(Select, { data: TEST_DATA }, HTMLSelectElement, 'elementRef');

  it('passes required, inputStyle, inputClassName and id props to select element', () => {
    const element = shallow(
      <Select
        data={TEST_DATA}
        required
        id="test-id"
        inputStyle={{ border: '1px solid red' }}
        inputClassName="test-input-class"
      />
    );

    expect(element.render().find('select').attr('id')).toBe('test-id');
    expect(element.render().find('select').attr('aria-required')).toBe('true');
    expect(element.render().find('select').css('border')).toBe('1px solid red');
    expect(element.render().find('select').hasClass('test-input-class')).toBe(true);
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <Select
        data={TEST_DATA}
        id="test-id"
        required
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(element.find(InputWrapper).prop('id')).toBe('test-id');
    expect(element.find(InputWrapper).prop('required')).toBe(true);
    expect(element.find(InputWrapper).prop('label')).toBe('test-label');
    expect(element.find(InputWrapper).prop('error')).toBe('test-error');
    expect(element.find(InputWrapper).prop('description')).toBe('test-description');
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<Select data={TEST_DATA} wrapperProps={{ 'data-label': 'test' }} />);
    expect(element.render().attr('data-label')).toBe('test');
  });

  it('renders correct amount of options', () => {
    const withoutPlaceholder = shallow(<Select data={TEST_DATA} />);
    const withPlaceholder = shallow(<Select data={TEST_DATA} placeholder="placeholder" />);

    expect(withoutPlaceholder.render().find('option')).toHaveLength(TEST_DATA.length);
    expect(withPlaceholder.render().find('option')).toHaveLength(TEST_DATA.length + 1);
  });
});
