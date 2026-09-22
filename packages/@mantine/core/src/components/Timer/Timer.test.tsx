import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Timer, TimerProps, TimerStylesNames } from './Timer';
import { useTimer } from './use-timer';

const defaultProps: TimerProps = {};

describe('@mantine/core/Timer', () => {
  tests.axe([<Timer />]);

  tests.itSupportsSystemProps<TimerProps, TimerStylesNames>({
    component: Timer,
    props: defaultProps,
    displayName: '@mantine/core/Timer',
    stylesApiSelectors: ['root', 'value'],
  });

  it('renders the default readout using the format prop', () => {
    render(<Timer countdown startMs={90 * 1000} format="mm:ss" />);
    expect(screen.getByText('01:30')).toBeInTheDocument();
  });

  it('defaults to an HH:mm:ss stopwatch at zero', () => {
    render(<Timer />);
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
  });

  it('sets role="timer" and aria-live=polite for second resolution', () => {
    render(<Timer />);
    const root = screen.getByRole('timer');
    expect(root).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-live=off for fast intervals', () => {
    render(<Timer interval={100} />);
    expect(screen.getByRole('timer')).toHaveAttribute('aria-live', 'off');
  });

  it('renders default controls with withControls and toggles start/pause', () => {
    render(<Timer withControls />);
    fireEvent.click(screen.getByRole('button', { name: 'Start' }));
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument();
  });

  it('renders compound segments and separator', () => {
    render(
      <Timer countdown startMs={90 * 1000}>
        <Timer.Segment type="minutes" />
        <Timer.Separator>:</Timer.Separator>
        <Timer.Segment type="seconds" />
      </Timer>
    );

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText(':')).toBeInTheDocument();
  });

  it('sets data-segment attribute on Timer.Segment', () => {
    const { container } = render(
      <Timer startMs={0}>
        <Timer.Segment type="minutes" />
      </Timer>
    );
    expect(container.querySelector('[data-segment="minutes"]')).toBeInTheDocument();
  });

  it('sets data-action attribute on Timer.Control', () => {
    render(
      <Timer startMs={0}>
        <Timer.Control action="reset">reset</Timer.Control>
      </Timer>
    );
    expect(screen.getByText('reset')).toHaveAttribute('data-action', 'reset');
  });

  it('Timer.Control invokes the bound controller action', () => {
    function ControlTest() {
      const controller = useTimer({ startMs: 0 });
      return (
        <div>
          <span data-testid="state">{controller.running ? 'running' : 'stopped'}</span>
          <Timer controller={controller}>
            <Timer.Control action="start">start</Timer.Control>
            <Timer.Control action="pause">pause</Timer.Control>
          </Timer>
        </div>
      );
    }

    render(<ControlTest />);
    expect(screen.getByTestId('state')).toHaveTextContent('stopped');

    fireEvent.click(screen.getByText('start'));
    expect(screen.getByTestId('state')).toHaveTextContent('running');

    fireEvent.click(screen.getByText('pause'));
    expect(screen.getByTestId('state')).toHaveTextContent('stopped');
  });

  it('binds to an external controller', () => {
    function Wrapper() {
      const controller = useTimer({ countdown: true, startMs: 5000 });
      return <Timer controller={controller} format="mm:ss" />;
    }

    render(<Wrapper />);
    expect(screen.getByText('00:05')).toBeInTheDocument();
  });

  it('derives aria-live from the controller interval when controlled', () => {
    function Wrapper() {
      const controller = useTimer({ interval: 50 });
      return <Timer controller={controller} />;
    }

    render(<Wrapper />);
    expect(screen.getByRole('timer')).toHaveAttribute('aria-live', 'off');
  });

  it('does not run the internal timer when a controller is provided', () => {
    const onComplete = jest.fn();

    function Wrapper() {
      const controller = useTimer({ countdown: true, startMs: 5000 });
      return (
        <Timer controller={controller} countdown startMs={0} autoStart onComplete={onComplete} />
      );
    }

    render(<Wrapper />);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('exposes the parse static method', () => {
    expect(Timer.parse({ minutes: 2 })).toBe(120_000);
  });
});
