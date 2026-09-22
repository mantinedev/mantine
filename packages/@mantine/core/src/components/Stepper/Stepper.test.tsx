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
    varsResolver: true,
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
      'stepIconContent',
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

  it('supports uncontrolled state with defaultActive', async () => {
    render(<Stepper {...defaultProps} active={undefined} defaultActive={1} />);
    expect(screen.getByText('test-step-content-1')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[3]);
    expect(screen.getByText('test-step-content-3')).toBeInTheDocument();
  });

  it('calls onActiveChange when a step is clicked', async () => {
    const spy = jest.fn();
    render(<Stepper {...defaultProps} active={1} onActiveChange={spy} />);

    await userEvent.click(screen.getAllByRole('button')[2]);
    expect(spy).toHaveBeenCalledWith(2);
    expect(screen.getByText('test-step-content-1')).toBeInTheDocument();
  });

  it('does not allow selecting steps when active is set without onStepClick or onActiveChange', async () => {
    render(<Stepper {...defaultProps} active={1} />);

    await userEvent.click(screen.getAllByRole('button')[3]);
    expect(screen.getByText('test-step-content-1')).toBeInTheDocument();
  });

  it('honours a step prop declared on Stepper.Step', () => {
    render(
      <Stepper active={1}>
        <Stepper.Step label="a" step={5}>
          content-a
        </Stepper.Step>
        <Stepper.Step label="b">content-b</Stepper.Step>
      </Stepper>
    );

    const steps = screen.getAllByRole('button');
    expect(steps[0]).toHaveTextContent('6a');
    expect(steps[0]).not.toHaveAttribute('data-completed');
    expect(steps[1]).toHaveAttribute('data-progress');
  });

  it('honours a state prop declared on Stepper.Step', () => {
    render(
      <Stepper active={0}>
        <Stepper.Step label="a">content-a</Stepper.Step>
        <Stepper.Step label="b" state="stepCompleted">
          content-b
        </Stepper.Step>
      </Stepper>
    );

    expect(screen.getAllByRole('button')[1]).toHaveAttribute('data-completed');
  });

  it('supports a wrapped Stepper.Step that declares its step', async () => {
    function WrappedStep(_props: { children?: React.ReactNode }) {
      return <Stepper.Step label="wrapped" step={1} />;
    }

    const spy = jest.fn();
    render(
      <Stepper active={1} onStepClick={spy}>
        <Stepper.Step label="a">content-a</Stepper.Step>
        <WrappedStep>content-wrapped</WrappedStep>
        <Stepper.Step label="c">content-c</Stepper.Step>
      </Stepper>
    );

    const steps = screen.getAllByRole('button');
    expect(steps[1]).toHaveTextContent('2wrapped');
    expect(steps[1]).toHaveAttribute('data-progress');
    expect(screen.getByText('content-wrapped')).toBeInTheDocument();

    await userEvent.click(steps[2]);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('renders a wrapped Stepper.Step that declares no step as inert', () => {
    function WrappedStep(_props: { children?: React.ReactNode }) {
      return <Stepper.Step label="wrapped" />;
    }

    render(
      <Stepper active={1} onStepClick={() => {}}>
        <Stepper.Step label="a">content-a</Stepper.Step>
        <WrappedStep>content-wrapped</WrappedStep>
      </Stepper>
    );

    const wrapped = screen.getAllByRole('button')[1];
    expect(wrapped).not.toHaveAttribute('data-allow-click');
    expect(wrapped).toHaveAttribute('tabindex', '-1');
    expect(wrapped).not.toHaveAttribute('data-progress');
    expect(wrapped).not.toHaveAttribute('data-completed');
  });

  it('calls onClick declared on Stepper.Step in addition to selecting the step', async () => {
    const onClick = jest.fn();
    const onStepClick = jest.fn();
    render(
      <Stepper active={0} onStepClick={onStepClick}>
        <Stepper.Step label="a">content-a</Stepper.Step>
        <Stepper.Step label="b" onClick={onClick}>
          content-b
        </Stepper.Step>
      </Stepper>
    );

    await userEvent.click(screen.getAllByRole('button')[1]);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onStepClick).toHaveBeenCalledWith(1);
  });

  it('honours allowStepClick declared on Stepper.Step', () => {
    render(
      <Stepper active={1} onStepClick={() => {}}>
        <Stepper.Step label="a" allowStepClick={false}>
          content-a
        </Stepper.Step>
        <Stepper.Step label="b">content-b</Stepper.Step>
      </Stepper>
    );

    expect(screen.getAllByRole('button')[0]).not.toHaveAttribute('data-allow-click');
  });

  it('does not select a step that sets allowStepClick to false', async () => {
    const onStepClick = jest.fn();
    render(
      <Stepper active={1} onStepClick={onStepClick}>
        <Stepper.Step label="a" allowStepClick={false}>
          content-a
        </Stepper.Step>
        <Stepper.Step label="b">content-b</Stepper.Step>
      </Stepper>
    );

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(onStepClick).not.toHaveBeenCalled();
    expect(screen.getByText('content-b')).toBeInTheDocument();
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
