import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itRendersChildren,
} from '@mantine/tests';
import { Chip } from './Chip';
import { CheckboxIcon } from '../../Checkbox/CheckboxIcon';

const defaultProps = {
  children: 'test-chip',
};

describe('@mantine/core/Chip', () => {
  itSupportsClassName(Chip, defaultProps);
  itSupportsOthers(Chip, defaultProps);
  itRendersChildren(Chip, defaultProps);
  itSupportsRef(Chip, defaultProps, HTMLInputElement, 'elementRef');

  it('displays checked icon based on checked prop', () => {
    const checked = shallow(<Chip checked {...defaultProps} />);
    const notChecked = shallow(<Chip checked={false} {...defaultProps} />);

    expect(checked.find(CheckboxIcon)).toHaveLength(1);
    expect(notChecked.find(CheckboxIcon)).toHaveLength(0);
  });

  it('connects label with input with given id', () => {
    const element = shallow(<Chip id="test-chip" {...defaultProps} />);
    expect(element.find('label').prop('htmlFor')).toBe('test-chip');
    expect(element.find('input').prop('id')).toBe('test-chip');
  });

  it('has correct displayName', () => {
    expect(Chip.displayName).toEqual('@mantine/core/Chip');
  });
});
