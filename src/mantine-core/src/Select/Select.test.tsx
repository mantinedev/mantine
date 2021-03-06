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
  checkAccessibility([mount(<Select data={TEST_DATA} label="test-label" />)]);
  itSupportsClassName(Select, { data: TEST_DATA });
  itSupportsStyle(Select, { data: TEST_DATA });
  itSupportsRef(Select, { data: TEST_DATA }, HTMLSelectElement);

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

    expect(element.find('select').prop('id')).toBe('test-id');
    expect(element.find('select').prop('aria-required')).toBe(true);
    expect(element.find('select').prop('style')).toEqual({ border: '1px solid red' });
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
    const element = shallow(<Select data={TEST_DATA} wrapperProps={{ 'aria-label': 'test' }} />);
    expect(element.render().attr('aria-label')).toBe('test');
  });

  it('sets disabled attribute on select based on disabled prop', () => {
    const disabled = shallow(<Select data={TEST_DATA} disabled />);
    const notDisabled = shallow(<Select data={TEST_DATA} />);

    expect(disabled.render().find('select').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('select').attr('disabled')).toBe(undefined);
  });

  it('renders icon it it was provided', () => {
    const withIcon = shallow(<Select data={TEST_DATA} icon="$" />);
    const withoutIcon = shallow(<Select data={TEST_DATA} />);

    expect(withIcon.render().find('[data-mantine-icon]').text()).toBe('$');
    expect(withoutIcon.render().find('[data-mantine-icon]')).toHaveLength(0);
  });

  it('renders correct amount of options', () => {
    const withoutPlaceholder = shallow(<Select data={TEST_DATA} />);
    const withPlaceholder = shallow(<Select data={TEST_DATA} placeholder="placeholder" />);

    expect(withoutPlaceholder.render().find('option')).toHaveLength(TEST_DATA.length);
    expect(withPlaceholder.render().find('option')).toHaveLength(TEST_DATA.length + 1);
  });
});
