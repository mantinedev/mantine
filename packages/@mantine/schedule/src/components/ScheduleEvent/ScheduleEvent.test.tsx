import { render, screen, tests } from '@mantine-tests/core';
import { ScheduleEvent, ScheduleEventProps, ScheduleEventStylesNames } from './ScheduleEvent';

const defaultProps: ScheduleEventProps = {
  event: {
    id: '1',
    title: 'Test event',
    color: 'blue',
    start: `2024-01-01 10:00:00`,
    end: `2024-01-01 11:00:00`,
    payload: {},
  },
};

describe('@mantine/schedule/ScheduleEvent', () => {
  tests.itSupportsSystemProps<ScheduleEventProps, ScheduleEventStylesNames>({
    component: ScheduleEvent,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/schedule/ScheduleEvent',
    stylesApiSelectors: ['event', 'eventInner'],
  });

  it('renders event title', () => {
    render(<ScheduleEvent {...defaultProps} />);
    expect(screen.getByText('Test event')).toBeInTheDocument();
  });

  it('supports renderEventBody prop', () => {
    render(
      <ScheduleEvent
        {...defaultProps}
        renderEventBody={(event) => (
          <div>
            <strong>{event.title}</strong>
            <div>Custom body</div>
          </div>
        )}
      />
    );

    expect(screen.getByText('Test event')).toBeInTheDocument();
    expect(screen.getByText('Custom body')).toBeInTheDocument();
  });

  it('sets data-nowrap attribute when nowrap prop is true', () => {
    const { rerender, container } = render(<ScheduleEvent {...defaultProps} nowrap />);
    expect(container.querySelector('.mantine-ScheduleEvent-eventInner')).toHaveAttribute(
      'data-nowrap'
    );

    rerender(<ScheduleEvent {...defaultProps} />);
    expect(container.querySelector('.mantine-ScheduleEvent-eventInner')).not.toHaveAttribute(
      'data-nowrap'
    );
  });

  it('sets data-auto-size attribute when autoSize prop is true', () => {
    const { rerender, container } = render(<ScheduleEvent {...defaultProps} autoSize />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).toHaveAttribute(
      'data-auto-size'
    );

    rerender(<ScheduleEvent {...defaultProps} />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).not.toHaveAttribute(
      'data-auto-size'
    );
  });

  it('sets correct title attribute', () => {
    render(<ScheduleEvent {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('title', 'Test event');
  });

  it('sets data-hanging attribute to hanging prop value', () => {
    const { container } = render(<ScheduleEvent {...defaultProps} hanging="start" />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).toHaveAttribute(
      'data-hanging',
      'start'
    );
  });

  it('supports renderEvent prop for full customization', () => {
    render(
      <ScheduleEvent
        {...defaultProps}
        renderEvent={(event, props) => (
          <button data-testid="custom-event" {...props}>
            <span>Fully custom render</span>
            <span>Event: {event.title}</span>
            {props.children}
          </button>
        )}
      />
    );

    expect(screen.getByTestId('custom-event')).toBeInTheDocument();
    expect(screen.getByText('Fully custom render')).toBeInTheDocument();
    expect(screen.getByText('Event: Test event')).toBeInTheDocument();
    expect(screen.getByText('Test event')).toBeInTheDocument();
  });
});
