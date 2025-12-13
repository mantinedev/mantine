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
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
});
