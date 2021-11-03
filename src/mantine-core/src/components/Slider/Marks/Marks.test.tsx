import React from 'react';
import { itSupportsStylesApi } from '@mantine/tests';
import { shallow } from 'enzyme';
import { Marks } from './Marks';

const defaultProps = {
  marks: [{ value: 50, label: 'test' }],
  size: 10,
  color: 'blue',
  min: 0,
  max: 100,
  value: 80,
  onChange: () => {},
};

describe('@mantine/core/Slider/Marks', () => {
  itSupportsStylesApi(
    Marks,
    defaultProps,
    ['markWrapper', 'mark', 'markFilled', 'markLabel'],
    'Slider'
  );

  it('renders correct marks labels', () => {
    const element = shallow(
      <Marks
        {...defaultProps}
        marks={[
          { value: 50, label: 'test-1' },
          { value: 80, label: 'test-2' },
        ]}
      />
    );

    expect(element.find('.mantine-Slider-markWrapper')).toHaveLength(2);
    expect(element.find('.mantine-Slider-markLabel').at(0).text()).toBe('test-1');
    expect(element.find('.mantine-Slider-markLabel').at(1).text()).toBe('test-2');
  });

  it('calls onChange with mark value when mark label is pressed', () => {
    const spy = jest.fn();
    const element = shallow(
      <Marks
        {...defaultProps}
        onChange={spy}
        marks={[
          { value: 50, label: 'test-1' },
          { value: 80, label: 'test-2' },
        ]}
      />
    );

    element
      .find('.mantine-Slider-markLabel')
      .at(0)
      .simulate('mousedown', new MouseEvent('mousedown'));
    expect(spy).toHaveBeenLastCalledWith(50);

    element
      .find('.mantine-Slider-markLabel')
      .at(1)
      .simulate('touchstart', new TouchEvent('touchstart'));
    expect(spy).toHaveBeenLastCalledWith(80);
  });

  it('sets mark left property based on mark value', () => {
    const element = shallow(
      <Marks
        {...defaultProps}
        min={0}
        max={200}
        marks={[
          { value: 50, label: 'test-1' },
          { value: 100, label: 'test-2' },
        ]}
      />
    );

    expect(element.find('.mantine-Slider-markWrapper').at(0).prop('style').left).toBe('25%');
    expect(element.find('.mantine-Slider-markWrapper').at(1).prop('style').left).toBe('50%');
  });

  it('has correct displayName', () => {
    expect(Marks.displayName).toEqual('@mantine/core/SliderMarks');
  });
});
