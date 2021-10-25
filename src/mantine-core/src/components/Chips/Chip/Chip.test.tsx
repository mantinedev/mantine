import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Chip } from './Chip';
import { CheckboxIcon } from '../../Checkbox';
import { Chip as ChipStylesApi } from './styles.api';

const defaultProps = {
  value: 'test-value',
  checked: true,
  disabled: true,
  children: 'test-chip',
};

describe('@mantine/core/Chip', () => {
  itSupportsClassName(Chip, defaultProps);
  itRendersChildren(Chip, defaultProps);
  itSupportsRef(Chip, defaultProps, HTMLInputElement);

  itSupportsStylesApi(
    Chip,
    defaultProps,
    Object.keys(ChipStylesApi).filter((key) => key !== 'disabled'),
    'Chip'
  );

  it('displays checked icon based on checked prop', () => {
    const checked = shallow(<Chip {...defaultProps} checked />);
    const notChecked = shallow(<Chip {...defaultProps} checked={false} />);

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
