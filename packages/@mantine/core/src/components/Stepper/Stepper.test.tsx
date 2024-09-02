import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Stepper, StepperProps, StepperStylesNames } from './Stepper';
import { StepperCompleted } from './StepperCompleted/StepperCompleted';
import { StepperStep } from './StepperStep/StepperStep';

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
  tests.axe([<Stepper {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<StepperProps, StepperStylesNames>({
    component: Stepper,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Stepper',
    stylesApiSelectors: [
      'root',
      'content',
      'separator',
      'step',
      'stepBody',
      'stepCompletedIcon',
      'stepDescription',
      'stepIcon',
      'stepLabel',
      'stepWrapper',
      'steps',
    ],
  });

  it('calls onStepClick with clicked step index', async () => {
    const spy = jest.fn();
    render(<Stepper {...defaultProps} onStepClick={spy} />);
    await userEvent.click(screen.getAllByRole('button')[2]);
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
    expect(Stepper.Step).toBe(StepperStep);
    expect(Stepper.Completed).toBe(StepperCompleted);
  });

  it('allows bidirectional selection between steps by default', async () => {
    const spy = jest.fn();
    render(<Stepper {...defaultProps} onStepClick={spy} />);

    const stepButtons = screen.getAllByRole('button');

    await userEvent.click(stepButtons[3]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(3);

    await userEvent.click(stepButtons[0]);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(0);
  });

  it('only allows selecting previous steps if the allowNextStepsSelect prop is set to false and no truthy allowStepSelectprop is present on any steps', async () => {
    const spy = jest.fn();
    render(<Stepper {...defaultProps} onStepClick={spy} allowNextStepsSelect={false} />);

    const stepButtons = screen.getAllByRole('button');

    await userEvent.click(stepButtons[2]);

    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(stepButtons[0]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0);
  });

  it('allows any steps to be selected if a Step has the allowStepSelect prop set to true even if a falsy allowNextStepsSelect prop is present on the Stepper', async () => {
    const spy = jest.fn();
    render(
      <Stepper onStepClick={spy} allowNextStepsSelect={false} active={0}>
        <Stepper.Step label="0" key="0" description="0">
          test-step-content-0
        </Stepper.Step>

        <Stepper.Step label="1" key="1" description="1">
          test-step-content-1
        </Stepper.Step>

        <Stepper.Step label="2" key="2" description="2" allowStepSelect>
          test-step-content-2
        </Stepper.Step>
      </Stepper>
    );

    const steps = screen.getAllByRole('button');

    await userEvent.click(steps[1]);

    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(steps[2]);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(2);
  });
});
