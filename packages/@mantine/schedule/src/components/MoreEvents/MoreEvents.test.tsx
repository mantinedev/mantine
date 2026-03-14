import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from './MoreEvents';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: new Date(2025, 11, 13, 9, 0),
    end: new Date(2025, 11, 13, 10, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Standup',
    start: new Date(2025, 11, 13, 10, 30),
    end: new Date(2025, 11, 13, 11, 0),
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Client Meeting',
    start: new Date(2025, 11, 13, 14, 0),
    end: new Date(2025, 11, 13, 15, 30),
    color: 'red',
    payload: {},
  },
  {
    id: 4,
    title: 'Code Review',
    start: new Date(2025, 11, 13, 16, 0),
    end: new Date(2025, 11, 13, 17, 0),
    color: 'purple',
    payload: {},
  },
];

const defaultProps: MoreEventsProps = {
  events,
  moreEventsCount: 2,
};

describe('@mantine/schedule/MoreEvents', () => {
  tests.itSupportsSystemProps<MoreEventsProps, MoreEventsStylesNames>({
    component: MoreEvents,
    props: { ...defaultProps, popoverProps: { opened: true } },
    polymorphic: true,
    displayName: '@mantine/schedule/MoreEvents',
    stylesApiSelectors: ['moreEventsButton', 'moreEventsList'],
  });

  it('renders correct more events count', () => {
    render(<MoreEvents {...defaultProps} moreEventsCount={50} />);
    expect(screen.getByText('+50 more')).toBeInTheDocument();
  });

  it('opens popover with events on click', async () => {
    render(<MoreEvents {...defaultProps} />);
    await userEvent.click(screen.getByRole('button', { name: '+2 more' }));

    events.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    });
  });

  it('calls onDropdownClose when popover is closed', async () => {
    const spy = jest.fn();
    render(<MoreEvents {...defaultProps} onDropdownClose={spy} />);
    await userEvent.click(screen.getByRole('button', { name: '+2 more' }));
    await userEvent.click(document.body);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('opens modal when dropdownType is set to modal', async () => {
    render(<MoreEvents {...defaultProps} dropdownType="modal" modalTitle="Test title" />);
    await userEvent.click(screen.getByRole('button', { name: '+2 more' }));

    expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument();
    events.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    });
  });

  it('calls onDropdownClose when modal is closed', async () => {
    const spy = jest.fn();
    render(<MoreEvents {...defaultProps} dropdownType="modal" onDropdownClose={spy} />);
    await userEvent.click(screen.getByRole('button', { name: '+2 more' }));
    await userEvent.click(document.querySelector('.mantine-CloseButton-root')!);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('supports renderEventBody prop', async () => {
    render(
      <MoreEvents
        {...defaultProps}
        moreEventsCount={4}
        dropdownType="modal"
        modalTitle="March 13, 2025 events"
        renderEventBody={(event) => (
          <div>
            <strong>{event.title}</strong>
            <div>Custom body</div>
          </div>
        )}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: '+4 more' }));

    events.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getAllByText('Custom body')).toHaveLength(events.length);
    });
  });
});
