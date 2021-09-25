import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Input } from '../Input/Input';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { MultiSelect } from './MultiSelect';
import { MultiSelect as MultiSelectStylesApi } from './styles.api';

const defaultProps = {
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
};

describe('@mantine/core/MultiSelect', () => {
  itSupportsClassName(MultiSelect, defaultProps);
  itSupportsStyle(MultiSelect, defaultProps);
  itSupportsRef(MultiSelect, defaultProps, HTMLInputElement, 'elementRef');
  itSupportsStylesApi(
    MultiSelect,
    {
      ...defaultProps,
      initiallyOpened: true,
      icon: '$',
      label: 'test-label',
      description: 'test-description',
      error: 'test-error',
      required: true,
    },
    Object.keys(MultiSelectStylesApi).filter((key) =>
      key !== 'hovered' && key !== 'nothingFound' && key !== 'disabled' && key !== 'seperator' && key !== 'seperatorLabel'),
    'multi-select'
  );

  checkAccessibility([
    mount(<MultiSelect {...defaultProps} label="test-label" />),
    mount(<MultiSelect {...defaultProps} label="test-label" defaultValue={[]} />),
    mount(<MultiSelect {...defaultProps} label="test-label" initiallyOpened />),
    mount(
      <MultiSelect
        {...defaultProps}
        aria-label="test-label"
        clearable
        clearButtonLabel="Clear field"
      />
    ),
  ]);

  it('passes required, invalid, icon and radius props to Input component', () => {
    const element = shallow(
      <MultiSelect data={defaultProps.data} required error="test-error" icon="$" radius="sm" />
    );

    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <MultiSelect
        data={defaultProps.data}
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

  it('has correct displayName', () => {
    expect(MultiSelect.displayName).toEqual('@mantine/core/MultiSelect');
  });
});
