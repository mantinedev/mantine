import { MANTINE_COLORS } from '@mantine/styles';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Flag } from 'tabler-icons-react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Step } from '../Stepper/Step/Step';
import { StepCompleted } from '../Stepper/StepCompleted/StepCompleted';
import { StepperProgress, StepperProgressProps } from './StepperProgress';

const defaultProps: StepperProgressProps = {
  active: 1,
  activeContent: 0,
  children: [
    <StepperProgress.Step label="0" key="0" description="0">
      <div>test-step-0-content-0</div>
      <div>test-step-0-content-1</div>
      <div>test-step-0-content-2</div>
    </StepperProgress.Step>,
    <StepperProgress.Step label="1" key="1" description="1">
      <div>test-step-1-content-0</div>
      <div>test-step-1-content-1</div>
      <div>test-step-1-content-2</div>
    </StepperProgress.Step>,
    <StepperProgress.Step label="2" key="2" description="2">
      <div>test-step-2-content-0</div>
      <div>test-step-2-content-1</div>
      <div>test-step-2-content-2</div>
    </StepperProgress.Step>,
    <StepperProgress.Step label="3" key="3" description="3">
      <div>test-step-3-content-0</div>
      <div>test-step-3-content-1</div>
      <div>test-step-3-content-2</div>
    </StepperProgress.Step>,
    <StepperProgress.Completed key="4">test-step-completed</StepperProgress.Completed>,
  ],
};

describe('@mantine/core/StepperProgress', () => {
  checkAccessibility([<StepperProgress {...defaultProps} />]);
  itSupportsSystemProps({
    component: StepperProgress,
    props: defaultProps,
    displayName: '@mantine/core/StepperProgress',
    refType: HTMLDivElement,
  });

  it('calls onStepClick with clicked step index', () => {
    const spy = jest.fn();
    render(<StepperProgress {...defaultProps} onStepClick={spy} />);
    userEvent.click(screen.getAllByRole('button')[2]);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('renders content of active step', () => {
    const { rerender } = render(<StepperProgress {...defaultProps} active={1} />);
    expect(screen.getByText('test-step-1-content-0')).toBeInTheDocument();
    rerender(<StepperProgress {...defaultProps} active={2} activeContent={1} />);
    expect(screen.getByText('test-step-2-content-1')).toBeInTheDocument();
    rerender(<StepperProgress {...defaultProps} active={3} activeContent={100} />);
    expect(screen.getByText('test-step-3-content-2')).toBeInTheDocument();
    rerender(<StepperProgress {...defaultProps} active={4} />);
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();
    rerender(<StepperProgress {...defaultProps} active={100} activeContent={100} />);
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();
  });

  it('exposes Stepper.Step and Stepper.Completed components', () => {
    expect(StepperProgress.Step).toBe(Step);
    expect(StepperProgress.Completed).toBe(StepCompleted);
  });

  it('render previous or next button disabled', () => {
    const { rerender } = render(<StepperProgress {...defaultProps} active={0} activeContent={0} />);
    expect(screen.getByRole('button', { name: /previous/i })).toHaveAttribute('disabled');

    rerender(<StepperProgress {...defaultProps} active={100} />);
    userEvent.click(screen.getByRole('button', { name: /finish/i }));
    expect(screen.getByRole('button', { name: /next/i })).toHaveAttribute('disabled');
  });

  it('render control prop', () => {
    render(
      <StepperProgress
        {...defaultProps}
        active={0}
        control={
          <Group>
            <Button>Anterior</Button>
            <Button>Próximo</Button>
          </Group>
        }
      />
    );

    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();

    expect(screen.getByRole('button', { name: /anterior/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /próximo/i })).toBeInTheDocument();
  });

  it('render group button props', () => {
    const { rerender } = render(
      <StepperProgress
        {...defaultProps}
        groupButtonProps={{
          group: {
            spacing: 'lg',
          },
          prev: {
            color: 'grape',
          },
          next: {
            radius: 'xl',
          },
        }}
      />
    );

    expect(screen.getByRole('button', { name: /previous/i }).parentElement).toHaveStyle({
      gap: '20px',
    });
    expect(screen.getByRole('button', { name: /previous/i })).toHaveStyle({
      backgroundColor: MANTINE_COLORS.find((color) => color === 'grape'),
    });
    expect(screen.getByRole('button', { name: /next/i })).toHaveStyle({
      borderRadius: '32px',
    });

    rerender(
      <StepperProgress
        {...defaultProps}
        active={100}
        groupButtonProps={{
          finish: {
            variant: 'outline',
          },
        }}
      />
    );
    expect(screen.getByRole('button', { name: /finish/i })).toHaveStyle({
      backgroundColor: 'transparent',
    });
  });

  it('render previous or next or finish button with label props', () => {
    const { rerender } = render(
      <StepperProgress {...defaultProps} prevBtnLabel="Anterior" nextBtnLabel="Próximo" />
    );
    expect(screen.getByText(/anterior/i)).toBeInTheDocument();
    expect(screen.getByText(/próximo/i)).toBeInTheDocument();

    rerender(<StepperProgress {...defaultProps} active={100} finishBtnLabel="Finalizar" />);
    expect(screen.getByText(/finalizar/i)).toBeInTheDocument();
  });

  it('render finish step icon', () => {
    render(
      <StepperProgress
        {...defaultProps}
        finishStepIcon={<Flag size={18} data-testid="finish-step-icon" />}
      />
    );
    expect(screen.getByTestId('finish-step-icon')).toBeInTheDocument();
  });

  it('does something on finish prop', () => {
    const onFinish = jest.fn();
    render(<StepperProgress {...defaultProps} active={100} onFinish={onFinish} />);
    userEvent.click(screen.getByRole('button', { name: /finish/i }));
    expect(onFinish).toHaveBeenCalled();
  });
});
