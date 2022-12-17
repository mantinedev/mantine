import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Marks, MarksProps } from './Marks';

const defaultProps: MarksProps = {
  marks: [
    { value: 50, label: 'test-1' },
    { value: 80, label: 'test-2' },
  ],
  size: 10,
  color: 'blue',
  min: 0,
  max: 100,
  value: 80,
  onChange: () => {},
  disabled: false,
  variant: '',
};

describe('@mantine/core/Slider/Marks', () => {
  it('renders correct marks labels', () => {
    const { container } = render(<Marks {...defaultProps} />);
    const labels = container.querySelectorAll('.mantine-Slider-markLabel');
    expect(container.querySelectorAll('.mantine-Slider-markWrapper')).toHaveLength(2);
    expect(labels[0].textContent).toBe('test-1');
    expect(labels[1].textContent).toBe('test-2');
  });

  it('calls onChange with mark value when mark label is pressed', async () => {
    const spy = jest.fn();
    const { container } = render(<Marks {...defaultProps} onChange={spy} />);
    await userEvent.click(container.querySelectorAll('.mantine-Slider-markLabel')[0]);
    expect(spy).toHaveBeenLastCalledWith(50);
    await userEvent.click(container.querySelectorAll('.mantine-Slider-markLabel')[1]);
    expect(spy).toHaveBeenLastCalledWith(80);
  });

  it('sets mark left property based on mark value', () => {
    const { container } = render(
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

    const marks = container.querySelectorAll('.mantine-Slider-markWrapper');
    expect(marks[0]).toHaveStyle({ left: '25%' });
    expect(marks[1]).toHaveStyle({ left: '50%' });
  });

  it('has correct displayName', () => {
    expect(Marks.displayName).toStrictEqual('@mantine/core/SliderMarks');
  });
});
