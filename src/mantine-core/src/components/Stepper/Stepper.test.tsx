import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Step } from './Step/Step';
import { StepCompleted } from './StepCompleted/StepCompleted';
import { Stepper, StepperProps } from './Stepper';

const defaultProps: StepperProps = {
  active: 1,
  children: [
    <Stepper.Step label="0" key="0" description="0">
      test-step-content-0
    </Stepper.Step>,
    <Stepper.Step label="1" key="1" description="1">
      test-step-content-1
    </Stepper.Step>,
    <Stepper.Step label="2" key="2" description="2">
      test-step-content-2
    </Stepper.Step>,
    <Stepper.Step label="3" key="3" description="3">
      test-step-content-3
    </Stepper.Step>,
    <Stepper.Completed key="4">test-step-completed</Stepper.Completed>,
  ],
};

describe('@mantine/core/Stepper', () => {
  checkAccessibility([<Stepper {...defaultProps} />]);
  itSupportsSystemProps({
    component: Stepper,
    props: defaultProps,
    displayName: '@mantine/core/Stepper',
    refType: HTMLDivElement,
  });

  it('calls onStepClick with clicked step index', () => {
    const spy = jest.fn();
    render(<Stepper {...defaultProps} onStepClick={spy} />);
    userEvent.click(screen.getAllByRole('button')[2]);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('renders content of active step', () => {
    const { rerender } = render(<Stepper {...defaultProps} active={1} />);
    expect(screen.getByText('test-step-content-1')).toBeInTheDocument();
    rerender(<Stepper {...defaultProps} active={3} />);
    expect(screen.getByText('test-step-content-3')).toBeInTheDocument();
    rerender(<Stepper {...defaultProps} active={4} />);
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();
    rerender(<Stepper {...defaultProps} active={100} />);
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();
  });

  it('exposes Stepper.Step and Stepper.Completed components', () => {
    expect(Stepper.Step).toBe(Step);
    expect(Stepper.Completed).toBe(StepCompleted);
  });
});
