import React from 'react';
import { shallow, mount } from 'enzyme';
import TextareaAutosize from 'react-textarea-autosize';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { Textarea } from './Textarea';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

const getInput = (element: any, input: any) => element.find(Input).dive().find(input);

describe('@mantine/core/Textarea', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  checkAccessibility([
    mount(<Textarea label="test-label" />),
    mount(<Textarea aria-label="test-label" />),
    mount(<Textarea label="test-label" autosize />),
  ]);

  itSupportsStyle(Textarea, {});
  itSupportsClassName(Textarea, {});
  itSupportsMargins(Textarea, {});
  itSupportsRef(Textarea, {}, HTMLTextAreaElement);

  itSupportsStylesApi(
    Textarea,
    {
      icon: '$',
      rightSection: '$',
      label: 'test-label',
      error: 'test-error',
      description: 'test-description',
      required: true,
    },
    Object.keys({ ...InputStylesApi, ...InputWrapperStylesApi }),
    'textarea'
  );

  it('renders correct component based on autosize prop', () => {
    const autosize = shallow(<Textarea autosize />);
    const notAutosize = shallow(<Textarea />);

    expect(getInput(autosize, TextareaAutosize)).toHaveLength(1);
    expect(getInput(notAutosize, 'textarea')).toHaveLength(1);
  });

  it('passes correct props to TextareaAutosize component and textarea element', () => {
    const autosize = shallow(
      <Textarea
        autosize
        required
        maxRows={9}
        minRows={1}
        id="test-id"
        placeholder="test-placeholder"
      />
    );
    const notAutosize = shallow(
      <Textarea required id="test-id" placeholder="test-placeholder" minRows={2} />
    );

    expect(getInput(autosize, TextareaAutosize).prop('aria-required')).toBe(true);
    expect(getInput(autosize, TextareaAutosize).prop('maxRows')).toBe(9);
    expect(getInput(autosize, TextareaAutosize).prop('minRows')).toBe(1);
    expect(getInput(autosize, TextareaAutosize).prop('id')).toBe('test-id');
    expect(getInput(autosize, TextareaAutosize).prop('placeholder')).toBe('test-placeholder');

    expect(getInput(notAutosize, 'textarea').prop('aria-required')).toBe(true);
    expect(getInput(notAutosize, 'textarea').prop('rows')).toBe(2);
    expect(getInput(notAutosize, 'textarea').prop('id')).toBe('test-id');
    expect(getInput(notAutosize, 'textarea').prop('placeholder')).toBe('test-placeholder');
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<Textarea wrapperProps={{ 'data-label': 'test' }} />);
    expect(element.render().attr('data-label')).toBe('test');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <Textarea
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
});
