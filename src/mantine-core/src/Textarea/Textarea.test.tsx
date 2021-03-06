import React from 'react';
import { shallow, mount } from 'enzyme';
import TextareaAutosize from 'react-textarea-autosize';
import { checkAccessibility, itSupportsStyle, itSupportsClassName } from '@mantine/tests';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Textarea } from './Textarea';

describe('@mantine/core/Textarea', () => {
  checkAccessibility([
    mount(<Textarea label="test-label" />),
    mount(<Textarea aria-label="test-label" />),
    mount(<Textarea label="test-label" autosize />),
  ]);

  itSupportsStyle(Textarea, {});
  itSupportsClassName(Textarea, {});

  it('renders correct component based on autosize prop', () => {
    const autosize = shallow(<Textarea autosize />);
    const notAutosize = shallow(<Textarea />);

    expect(autosize.find(TextareaAutosize)).toHaveLength(1);
    expect(autosize.find('textarea')).toHaveLength(0);
    expect(notAutosize.find(TextareaAutosize)).toHaveLength(0);
    expect(notAutosize.find('textarea')).toHaveLength(1);
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
        inputStyle={{ border: '1px solid red' }}
        inputClassName="test-class"
      />
    );
    const notAutosize = shallow(
      <Textarea
        required
        id="test-id"
        placeholder="test-placeholder"
        minRows={2}
        inputStyle={{ border: '1px solid red' }}
        inputClassName="test-class"
      />
    );

    expect(autosize.find(TextareaAutosize).prop('aria-required')).toBe(true);
    expect(autosize.find(TextareaAutosize).prop('maxRows')).toBe(9);
    expect(autosize.find(TextareaAutosize).prop('minRows')).toBe(1);
    expect(autosize.find(TextareaAutosize).prop('id')).toBe('test-id');
    expect(autosize.find(TextareaAutosize).prop('placeholder')).toBe('test-placeholder');
    expect(autosize.find(TextareaAutosize).prop('style').border).toBe('1px solid red');
    expect(autosize.find(TextareaAutosize).hasClass('test-class')).toBe(true);

    expect(notAutosize.find('textarea').prop('aria-required')).toBe(true);
    expect(notAutosize.find('textarea').prop('rows')).toBe(2);
    expect(notAutosize.find('textarea').prop('id')).toBe('test-id');
    expect(notAutosize.find('textarea').prop('placeholder')).toBe('test-placeholder');
    expect(notAutosize.find('textarea').prop('style').border).toBe('1px solid red');
    expect(notAutosize.find('textarea').hasClass('test-class')).toBe(true);
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<Textarea wrapperProps={{ 'aria-label': 'test' }} />);
    expect(element.render().attr('aria-label')).toBe('test');
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
