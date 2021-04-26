import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from './NumberInput';

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
  itSupportsStyle(NumberInput, defaultProps);
  itSupportsRef(NumberInput, defaultProps, HTMLInputElement, 'elementRef');

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

    element.find('[data-mantine-increment]').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(10);

    element.find('[data-mantine-decrement]').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(-10);
  });

  it('does not increment or decrements out of min and max', () => {
    const spy = jest.fn();
    const element = mount(<NumberInput value={5} max={10} min={0} step={6} onChange={spy} />);

    element.find('[data-mantine-increment]').simulate('mousedown');
    expect(spy).toHaveBeenLastCalledWith(10);

    element.find('[data-mantine-decrement]').simulate('mousedown');
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
});
