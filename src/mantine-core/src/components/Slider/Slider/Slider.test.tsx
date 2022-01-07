import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Slider, SliderProps } from './Slider';

const defaultProps: SliderProps = {
  thumbLabel: 'test-label',
};

const getInput = (container: HTMLElement) => container.querySelector('input[type="hidden"]');
const clickMark = (markLabel: string) => userEvent.click(screen.getByText(markLabel));

const expectInputValue = (value: string, container: HTMLElement) =>
  expect(getInput(container)).toHaveValue(value);

const pressArrow = (kind: 'right' | 'left') =>
  userEvent.type(screen.getByRole('slider'), kind === 'right' ? '{arrowright}' : '{arrowleft}');

describe('@mantine/core/Slider', () => {
  checkAccessibility([<Slider {...defaultProps} />]);
  itSupportsSystemProps({
    component: Slider,
    props: defaultProps,
    displayName: '@mantine/core/Slider',
    refType: HTMLDivElement,
  });

  it('provides name and value to hidden input', () => {
    const { container } = render(<Slider name="test-input" value={50} />);
    expectInputValue('50', container);
    expect(getInput(container)).toHaveAttribute('name', 'test-input');
  });

  it('can be controlled with right/left arrows', () => {
    const spy = jest.fn();
    render(<Slider value={50} step={10} onChange={spy} />);
    pressArrow('right');
    expect(spy).toHaveBeenLastCalledWith(60);
    pressArrow('left');
    expect(spy).toHaveBeenLastCalledWith(40);
  });

  it('supports uncontrolled state', () => {
    const { container } = render(<Slider defaultValue={50} step={10} />);
    expectInputValue('50', container);
    pressArrow('right');
    expectInputValue('60', container);
    pressArrow('right');
    expectInputValue('70', container);
    pressArrow('left');
    expectInputValue('60', container);
    pressArrow('left');
    expectInputValue('50', container);
  });

  it('does not allow to set value greater than max', () => {
    const { container } = render(<Slider defaultValue={115} step={10} max={120} />);
    expectInputValue('115', container);
    pressArrow('right');
    expectInputValue('120', container);
  });

  it('does not allow to set value smaller than min', () => {
    const { container } = render(<Slider defaultValue={50} step={10} min={45} />);
    expectInputValue('50', container);
    pressArrow('left');
    expectInputValue('45', container);
  });

  it('sets slider value to clicked mark value', () => {
    const { container } = render(
      <Slider
        defaultValue={50}
        marks={[
          { value: 15, label: 'test-mark-15' },
          { value: 85, label: 'test-mark-85' },
        ]}
      />
    );

    expectInputValue('50', container);
    clickMark('test-mark-15');
    expectInputValue('15', container);
    clickMark('test-mark-85');
    expectInputValue('85', container);
  });

  it('shows label on hover', () => {
    render(<Slider label="test-label" labelTransitionDuration={0} />);
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
    userEvent.hover(screen.getByRole('slider'));
    expect(screen.getByText('test-label')).toBeInTheDocument();
    userEvent.unhover(screen.getByRole('slider'));
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
  });

  it('renders label with current value based on callback', () => {
    render(
      <Slider
        defaultValue={50}
        step={10}
        label={(val) => `test-label-${val}`}
        labelTransitionDuration={0}
        labelAlwaysOn
      />
    );
    expect(screen.getByText('test-label-50')).toBeInTheDocument();
    pressArrow('left');
    expect(screen.getByText('test-label-40')).toBeInTheDocument();
    pressArrow('right');
    pressArrow('right');
    expect(screen.getByText('test-label-60')).toBeInTheDocument();
  });

  it('clamps initial value based on min prop', () => {
    const { container } = render(<Slider defaultValue={60} min={100} />);
    expectInputValue('100', container);
  });

  it('clamps initial value based on max prop', () => {
    const { container } = render(<Slider defaultValue={120} max={100} />);
    expectInputValue('100', container);
  });
});
