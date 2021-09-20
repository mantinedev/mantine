import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { DEFAULT_THEME } from '@mantine/styles';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { Swatches } from './Swatches';
import { parseColor } from '../converters';

const defaultProps = {
  data: [...DEFAULT_THEME.colors.red],
  onSelect: () => {},
};

describe('@mantine/core/Swatches', () => {
  checkAccessibility([mount(<Swatches {...defaultProps} />)]);

  it('calls onSelect when color is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<Swatches {...defaultProps} onSelect={spy} />);
    element.find(ColorSwatch).at(4).simulate('click');
    expect(spy).toHaveBeenCalledWith(parseColor(defaultProps.data[4]));
  });

  it('sets swatch tabIndex to -1 if component is not focusable', () => {
    const focusable = shallow(<Swatches {...defaultProps} focusable />);
    const notFocusable = shallow(<Swatches {...defaultProps} focusable={false} />);
    expect(focusable.find(ColorSwatch).at(0).prop('tabIndex')).toBe(0);
    expect(notFocusable.find(ColorSwatch).at(0).prop('tabIndex')).toBe(-1);
  });

  it('has correct displayName', () => {
    expect(Swatches.displayName).toEqual('@mantine/core/Swatches');
  });
});
