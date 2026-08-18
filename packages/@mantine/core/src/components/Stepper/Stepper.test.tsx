import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { renderToString } from 'react-dom/server';
import { MantineProvider } from '../../core';
import { Stepper, StepperProps, StepperStylesNames } from './Stepper';
import { StepperCompleted } from './StepperCompleted/StepperCompleted';
import { StepperContent } from './StepperContent/StepperContent';
import { StepperRoot, StepperRootProps } from './StepperRoot/StepperRoot';
import { StepperStep } from './StepperStep/StepperStep';
import { StepperSteps } from './StepperSteps/StepperSteps';
import { useStepperContext } from './Stepper.context';

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

function StepCount() {
  const { stepsCount } = useStepperContext();
  return <div data-testid="steps-count">{stepsCount}</div>;
}

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

  it('sets stepsCount in context', () => {
    render(
      <Stepper active={0}>
        <Stepper.Step label="0">
          <StepCount />
        </Stepper.Step>
        <Stepper.Step label="1" />
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
    );

    expect(screen.getByTestId('steps-count')).toHaveTextContent('2');
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

describe('@mantine/core/Stepper compound components', () => {
  const getCompound = (props: Partial<StepperRootProps> = {}) => (
    <Stepper.Root active={1} {...props}>
      <Stepper.Steps>
        <Stepper.Step label="0" description="0" />
        <Stepper.Step label="1" description="1" />
        <Stepper.Step label="2" description="2" />
      </Stepper.Steps>
      <Stepper.Content step={0}>test-step-content-0</Stepper.Content>
      <Stepper.Content step={1}>test-step-content-1</Stepper.Content>
      <Stepper.Content step={2}>test-step-content-2</Stepper.Content>
      <Stepper.Completed step={3}>test-step-completed</Stepper.Completed>
    </Stepper.Root>
  );

  tests.axe([getCompound()]);

  it('exposes Stepper.Root, Stepper.Steps and Stepper.Content components', () => {
    expect(Stepper.Root).toBe(StepperRoot);
    expect(Stepper.Steps).toBe(StepperSteps);
    expect(Stepper.Content).toBe(StepperContent);
  });

  it('renders content of active step', () => {
    const { rerender } = render(getCompound({ active: 1 }));
    expect(screen.getByText('test-step-content-1')).toBeInTheDocument();
    expect(screen.queryByText('test-step-content-0')).not.toBeInTheDocument();
    expect(screen.queryByText('test-step-completed')).not.toBeInTheDocument();

    rerender(getCompound({ active: 2 }));
    expect(screen.getByText('test-step-content-2')).toBeInTheDocument();
    expect(screen.queryByText('test-step-content-1')).not.toBeInTheDocument();
  });

  it('renders completed content when active is beyond the last step', () => {
    const { rerender } = render(getCompound({ active: 3 }));
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();

    rerender(getCompound({ active: 100 }));
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();

    rerender(getCompound({ active: 1 }));
    expect(screen.queryByText('test-step-completed')).not.toBeInTheDocument();
  });

  it('renders completed content during server-side rendering', () => {
    const html = renderToString(<MantineProvider>{getCompound({ active: 3 })}</MantineProvider>);
    expect(html).toContain('test-step-completed');
  });

  it('sets stepsCount in context', () => {
    render(
      <Stepper.Root active={0}>
        <StepCount />
        <Stepper.Steps>
          <Stepper.Step label="0" />
          <Stepper.Step label="1" />
          <Stepper.Completed>Completed</Stepper.Completed>
        </Stepper.Steps>
      </Stepper.Root>
    );

    expect(screen.getByTestId('steps-count')).toHaveTextContent('2');
  });

  it('updates stepsCount when steps change', () => {
    const { rerender } = render(
      <Stepper.Root active={0}>
        <StepCount />
        <Stepper.Steps>
          <Stepper.Step label="0" />
        </Stepper.Steps>
      </Stepper.Root>
    );

    expect(screen.getByTestId('steps-count')).toHaveTextContent('1');

    rerender(
      <Stepper.Root active={0}>
        <StepCount />
        <Stepper.Steps>
          <Stepper.Step label="0" />
          <Stepper.Step label="1" />
        </Stepper.Steps>
      </Stepper.Root>
    );

    expect(screen.getByTestId('steps-count')).toHaveTextContent('2');
  });

  it('supports stepsCount during server-side rendering', () => {
    const compoundHtml = renderToString(
      <MantineProvider>
        <Stepper.Root active={0} stepsCount={2}>
          <StepCount />
          <Stepper.Steps>
            <Stepper.Step label="0" />
            <Stepper.Step label="1" />
          </Stepper.Steps>
        </Stepper.Root>
      </MantineProvider>
    );
    const stepperHtml = renderToString(
      <MantineProvider>
        <Stepper active={0}>
          <Stepper.Step label="0">
            <StepCount />
          </Stepper.Step>
          <Stepper.Step label="1" />
        </Stepper>
      </MantineProvider>
    );

    expect(compoundHtml).toContain('>2<');
    expect(stepperHtml).toContain('>2<');
  });

  it('renders nothing when Stepper.Completed is used outside Stepper', () => {
    render(<Stepper.Completed>test-step-completed</Stepper.Completed>);
    expect(screen.queryByText('test-step-completed')).not.toBeInTheDocument();
  });

  it('calls onStepClick with clicked step index', async () => {
    const spy = jest.fn();
    render(getCompound({ onStepClick: spy }));
    await userEvent.click(screen.getAllByRole('button')[2]);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('only allows selecting previous steps when allowNextStepsSelect is false', async () => {
    const spy = jest.fn();
    render(getCompound({ onStepClick: spy, allowNextStepsSelect: false }));

    const stepButtons = screen.getAllByRole('button');

    await userEvent.click(stepButtons[2]);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(stepButtons[0]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0);
  });

  it('supports Styles API selectors through Stepper.Root classNames', () => {
    const { container } = render(
      getCompound({
        classNames: {
          steps: 'test-steps',
          separator: 'test-separator',
          step: 'test-step',
          content: 'test-content',
        },
      })
    );

    expect(container.querySelector('.test-steps')).toBeInTheDocument();
    expect(container.querySelector('.test-separator')).toBeInTheDocument();
    expect(container.querySelector('.test-step')).toBeInTheDocument();
    expect(container.querySelector('.test-content')).toBeInTheDocument();
  });

  it('supports steps rendered inside custom wrapper elements', () => {
    render(
      <Stepper.Root active={2}>
        <div data-testid="sticky-wrapper">
          <Stepper.Steps>
            <Stepper.Step label="0" />
            <Stepper.Step label="1" />
          </Stepper.Steps>
        </div>
        <div data-testid="scroll-wrapper">
          <Stepper.Content step={0}>test-step-content-0</Stepper.Content>
          <Stepper.Content step={1}>test-step-content-1</Stepper.Content>
          <Stepper.Completed step={2}>test-step-completed</Stepper.Completed>
        </div>
      </Stepper.Root>
    );

    expect(screen.getByText('test-step-completed')).toBeInTheDocument();
    expect(screen.queryByText('test-step-content-0')).not.toBeInTheDocument();
  });
});
