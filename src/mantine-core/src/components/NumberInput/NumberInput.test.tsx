import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
  defaultInputProps,
} from '@mantine/tests';
import { TextInput } from '../TextInput/TextInput';
import { NumberInput, NumberInputHandlers } from './NumberInput';
import { NumberInput as NumberInputStylesApi } from './styles.api';

const defaultProps = {
  value: 0,
  onChange: () => {},
};

describe('@mantine/core/NumberInput', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  checkAccessibility([
    mount(<NumberInput {...defaultProps} label="test" />),
    mount(<NumberInput {...defaultProps} aria-label="test" />),
  ]);

  itSupportsClassName(NumberInput, defaultProps);
  itSupportsMargins(NumberInput, defaultProps);
  itSupportsStyle(NumberInput, defaultProps);
  itSupportsRef(NumberInput, defaultProps, HTMLInputElement);
  itSupportsStylesApi(
    NumberInput,
    defaultInputProps,
    Object.keys(NumberInputStylesApi),
    'NumberInput'
  );

  it('has correct displayName', () => {
    expect(NumberInput.displayName).toEqual('@mantine/core/NumberInput');
  });

  it('does not render rightSection if input is disabled, variant is unstyled or controls are hidden', () => {
    const regular = shallow(<NumberInput {...defaultProps} />);
    const disabled = shallow(<NumberInput {...defaultProps} disabled />);
    const controlsHidden = shallow(<NumberInput {...defaultProps} hideControls />);
    const unstyled = shallow(<NumberInput {...defaultProps} variant="unstyled" />);

    expect(regular.prop('rightSection')).not.toBe(null);
    expect(disabled.prop('rightSection')).toBe(null);
    expect(controlsHidden.prop('rightSection')).toBe(null);
    expect(unstyled.prop('rightSection')).toBe(null);
  });

  it('increments and decrements value with controls', () => {
    const spy = jest.fn();
    const element = mount(<NumberInput value={0} step={10} onChange={spy} />);

    element.find('.mantine-NumberInput-controlUp').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(10);

    // 1st decrement should get it to 0, 2nd decrement should get it to -10
    element.find('.mantine-NumberInput-controlDown').simulate('mousedown');
    element.find('.mantine-NumberInput-controlDown').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(-10);
  });

  it('does not increment or decrements out of min and max', () => {
    const spy = jest.fn();
    const element = mount(<NumberInput value={5} max={10} min={0} step={6} onChange={spy} />);

    element.find('.mantine-NumberInput-controlUp').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(10);

    // 1st mousedown should get it to 4, second mouse down should get it to 0.
    element.find('.mantine-NumberInput-controlDown').simulate('mousedown');
    element.find('.mantine-NumberInput-controlDown').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('sets variant, disabled, min, max and step props on TextInput', () => {
    const element = mount(
      <NumberInput {...defaultProps} min={-10} max={10} step={5} disabled variant="filled" />
    );
    expect(element.find(TextInput).prop('min')).toBe(-10);
    expect(element.find(TextInput).prop('max')).toBe(10);
    expect(element.find(TextInput).prop('step')).toBe(5);
    expect(element.find(TextInput).prop('disabled')).toBe(true);
    expect(element.find(TextInput).prop('variant')).toBe('filled');
  });

  it('exposes increment/decrement handlers with handlersRef prop', () => {
    const ref = React.createRef<NumberInputHandlers>();
    const spy = jest.fn();
    mount(<NumberInput {...defaultProps} value={10} step={2} onChange={spy} handlersRef={ref} />);

    expect(typeof ref.current.decrement).toBe('function');
    expect(typeof ref.current.increment).toBe('function');

    act(() => {
      ref.current.decrement();
    });

    expect(spy).toHaveBeenLastCalledWith(8);

    act(() => {
      ref.current.increment();
    });

    // should have incremented by 2, from 8 to 10.
    expect(spy).toHaveBeenLastCalledWith(10);
  });

  it('returns undefined when input is empty', () => {
    const spy = jest.fn();
    const element = mount(<NumberInput value={5} max={10} min={0} step={6} onChange={spy} />);

    const input = element.find('input').at(0);
    // should start with a value of 5
    expect(input.getDOMNode().getAttribute('value')).toBe('5');
    // simulate onChange with empty input. like if the user hits backspace clearing the input.
    input.simulate('change', { target: { value: '' } });
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(input.getDOMNode().getAttribute('value')).toBe('');
  });

  it('clears on blur when input is empty and a string is entered', () => {
    const spy = jest.fn();
    const element = mount(
      <NumberInput value={undefined} max={10} min={0} step={6} onChange={spy} />
    );

    const input = element.find('input').at(0);
    // change value to 6 and blur with a string as if a user typed 6 and then selected the value and typed a string
    // and then blurred
    input.simulate('change', { target: { value: '6' } });
    expect(spy).toHaveBeenLastCalledWith(6);
    input.simulate('blur', { target: { value: 'abc' } });
    expect(input.getDOMNode().getAttribute('value')).toBe('6');
    expect(spy).toHaveBeenLastCalledWith(6);

    // clear the value and blur with a string as if a user typed "abc" into an empty input and then blurred.
    input.simulate('change', { target: { value: '' } });
    input.simulate('blur', { target: { value: 'abc' } });
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(input.getDOMNode().getAttribute('value')).toBe('');
  });

  it('sets state to min or 0 if input is empty and is incremented/decremented', () => {
    const spy = jest.fn();
    const element = mount(
      <NumberInput value={undefined} max={10} min={1} step={6} onChange={spy} />
    );

    const input = element.find('input').at(0);
    // Simulate increment when input is empty
    element.find('.mantine-NumberInput-controlUp').simulate('mousedown');
    expect(input.getDOMNode().getAttribute('value')).toBe('1');
    expect(spy).toHaveBeenLastCalledWith(1);

    // reset the input to empty
    input.simulate('change', { target: { value: '' } });
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(input.getDOMNode().getAttribute('value')).toBe('');

    // Simulate decrement when input is empty
    element.find('.mantine-NumberInput-controlDown').simulate('mousedown');
    expect(input.getDOMNode().getAttribute('value')).toBe('1');

    // Simulate increment when input is empty and min is not set
    element.setProps({ min: undefined });
    input.simulate('change', { target: { value: '' } });
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(input.getDOMNode().getAttribute('value')).toBe('');
    element.find('.mantine-NumberInput-controlUp').simulate('mousedown');
    expect(input.getDOMNode().getAttribute('value')).toBe('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});
