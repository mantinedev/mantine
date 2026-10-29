import { render, screen, userEvent, within } from '@test-utils';
import { notifications, Notifications } from '@mantine/notifications';
import { MeetingRoomBooking } from './MeetingRoomBooking';

// Thursday, October 29, 2026, 10:00
const NOW = new Date(2026, 9, 29, 10, 0);

function setup() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <MeetingRoomBooking />
    </>
  );
  return user;
}

function slot(room: string, time: string, day = 'October 29, 2026') {
  return screen.getByRole('button', { name: `Resource time slot ${room} ${day} ${time}` });
}

function ownBookingsJson() {
  return JSON.parse(screen.getByText(/"organizer": "Alex Kim"/).textContent ?? '[]') as {
    title: string;
    exceptions?: string[];
  }[];
}

async function setTime(
  user: ReturnType<typeof userEvent.setup>,
  prefix: 'Start' | 'End',
  hours: string,
  minutes: string
) {
  const dialog = screen.getByRole('dialog');
  const hoursInput = within(dialog).getByRole('spinbutton', { name: `${prefix} hours` });
  await user.clear(hoursInput);
  await user.type(hoursInput, hours);
  const minutesInput = within(dialog).getByRole('spinbutton', { name: `${prefix} minutes` });
  await user.clear(minutesInput);
  await user.type(minutesInput, minutes);
}

async function submit(
  user: ReturnType<typeof userEvent.setup>,
  name: 'Book room' | 'Save changes'
) {
  await user.click(screen.getByRole('button', { name }));
}

async function fillNewBooking(
  user: ReturnType<typeof userEvent.setup>,
  title: string,
  attendees: string
) {
  const dialog = screen.getByRole('dialog');
  await user.type(within(dialog).getByRole('textbox', { name: 'Title' }), title);
  await user.type(within(dialog).getByRole('textbox', { name: 'Attendees' }), attendees);
}

beforeEach(() => {
  // Only the clock is fake: dropdowns position themselves in promises that need real timers to settle
  jest.useFakeTimers({
    now: NOW,
    doNotFake: [
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      'setImmediate',
      'clearImmediate',
      'queueMicrotask',
      'nextTick',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'requestIdleCallback',
      'cancelIdleCallback',
    ],
  });
});

afterEach(() => {
  notifications.clean();
  jest.useRealTimers();
});

describe('MeetingRoomBooking calendar', () => {
  it('opens the day view on today', () => {
    setup();
    expect(screen.getByRole('button', { name: 'October 29, 2026' })).toBeInTheDocument();
  });

  it('groups the rooms by floor', () => {
    setup();
    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Floor 2')).toBeInTheDocument();
    expect(screen.getByText('Floor 3')).toBeInTheDocument();
  });

  it('shows the capacity and equipment of every room', () => {
    setup();
    expect(screen.getByText('12 seats · Screen · Video · Whiteboard')).toBeInTheDocument();
    expect(screen.getByText('2 seats')).toBeInTheDocument();
  });

  it('shows the title and the organizer of a booking', () => {
    setup();
    const booking = screen.getByRole('button', { name: /Lunch & learn/ });
    expect(booking).toHaveTextContent('Maria Lopez');
  });
});

describe('MeetingRoomBooking new booking', () => {
  it('opens the booking form with the room and the 30 minutes of a clicked slot', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { name: 'Book a room' })).toBeInTheDocument();
    expect(within(dialog).getByRole('combobox', { name: 'Room' })).toHaveValue('Atrium · 12 seats');
    expect(within(dialog).getByRole('spinbutton', { name: 'Start hours' })).toHaveValue('11');
    expect(within(dialog).getByRole('spinbutton', { name: 'End hours' })).toHaveValue('11');
    expect(within(dialog).getByRole('spinbutton', { name: 'End minutes' })).toHaveValue('30');
  });

  it('does not open the form for a slot outside office hours', async () => {
    const user = setup();
    await user.click(slot('Atrium', '07:00 - 07:30'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('Office closed')).toBeInTheDocument();
  });

  it('adds the booking to the calendar after it is booked', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    await fillNewBooking(user, 'Kickoff', '4');
    await submit(user, 'Book room');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kickoff/ })).toBeInTheDocument();
  });

  it('shows a notification after a room is booked', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    await fillNewBooking(user, 'Kickoff', '4');
    await submit(user, 'Book room');

    expect(screen.getByText('Room booked')).toBeInTheDocument();
    expect(screen.getByText('Kickoff · Atrium · Thu, Oct 29 · 11:00–11:30')).toBeInTheDocument();
  });

  it('adds the new booking to the JSON of the current user bookings', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    await fillNewBooking(user, 'Kickoff', '4');
    await submit(user, 'Book room');

    expect(ownBookingsJson().map((booking) => booking.title)).toContain('Kickoff');
  });

  it('requires a title and the number of attendees', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    await submit(user, 'Book room');

    expect(screen.getByText('Enter a title')).toBeInTheDocument();
    expect(screen.getByText('Enter the number of attendees')).toBeInTheDocument();
  });

  it('shows the booking that overlaps the selected time', async () => {
    const user = setup();
    await user.click(slot('Harbor', '11:00 - 11:30'));
    await fillNewBooking(user, 'Planning', '3');
    await setTime(user, 'End', '12', '30');
    await submit(user, 'Book room');

    expect(
      screen.getByText('Harbor is booked Thu, Oct 29 12:00–13:00 (Lunch & learn)')
    ).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('rejects a booking that ends after office hours', async () => {
    const user = setup();
    await user.click(slot('Atrium', '18:30 - 19:00'));
    await fillNewBooking(user, 'Late call', '3');
    await setTime(user, 'End', '19', '30');
    await submit(user, 'Book room');

    expect(screen.getByText('Office hours are 08:00–19:00')).toBeInTheDocument();
  });

  it('rejects more attendees than the room seats', async () => {
    const user = setup();
    await user.click(slot('Cedar', '11:00 - 11:30'));
    await fillNewBooking(user, 'Review', '5');
    await submit(user, 'Book room');

    expect(screen.getByText('Cedar seats 4 people')).toBeInTheDocument();
  });

  it('shows the repeat end date only when the booking repeats', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    expect(screen.queryByRole('spinbutton', { name: 'Repeat until day' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('checkbox', { name: 'Repeat weekly' }));
    expect(screen.getByRole('spinbutton', { name: 'Repeat until day' })).toBeInTheDocument();
  });

  it('requires the repeat end date of a weekly booking', async () => {
    const user = setup();
    await user.click(slot('Atrium', '11:00 - 11:30'));
    await fillNewBooking(user, 'Kickoff', '4');
    await user.click(screen.getByRole('checkbox', { name: 'Repeat weekly' }));
    await submit(user, 'Book room');

    expect(screen.getByText('Enter the last date')).toBeInTheDocument();
  });
});

describe('MeetingRoomBooking existing bookings', () => {
  it('shows the details of a colleague booking read-only', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: /Lunch & learn/ }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { name: 'Booking details' })).toBeInTheDocument();
    expect(within(dialog).getByText('Maria Lopez')).toBeInTheDocument();
    expect(within(dialog).getByText('Thursday, October 29 · 12:00–13:00')).toBeInTheDocument();
    expect(within(dialog).getByText('Harbor · Floor 1')).toBeInTheDocument();
    expect(within(dialog).queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('opens the edit form for a booking of the current user', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: /Architecture sync/ }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { name: 'Edit booking' })).toBeInTheDocument();
    expect(within(dialog).getByRole('textbox', { name: 'Title' })).toHaveValue('Architecture sync');
    expect(within(dialog).getByRole('textbox', { name: 'Attendees' })).toHaveValue('7');
  });

  it('saves changes to a booking of the current user', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: /Architecture sync/ }));
    const title = screen.getByRole('textbox', { name: 'Title' });
    await user.clear(title);
    await user.type(title, 'Architecture deep dive');
    await submit(user, 'Save changes');

    expect(screen.getByText('Booking updated')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Architecture deep dive/ })).toBeInTheDocument();
  });

  it('cancels a one-off booking without asking', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: /Architecture sync/ }));
    await user.click(screen.getByRole('button', { name: 'Cancel booking' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('Booking cancelled')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Architecture sync/ })).not.toBeInTheDocument();
  });

  it('removes a cancelled booking from the JSON', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: /Architecture sync/ }));
    await user.click(screen.getByRole('button', { name: 'Cancel booking' }));

    expect(ownBookingsJson().map((booking) => booking.title)).not.toContain('Architecture sync');
  });
});

describe('MeetingRoomBooking repeating bookings', () => {
  async function openTeamSync(user: ReturnType<typeof userEvent.setup>) {
    for (let i = 0; i < 3; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Previous' }));
    }
    await user.click(screen.getByRole('button', { name: /Team sync/ }));
    await user.click(screen.getByRole('button', { name: 'Cancel booking' }));
  }

  it('asks whether to cancel one booking or the whole series', async () => {
    const user = setup();
    await openTeamSync(user);

    expect(screen.getByRole('heading', { name: 'Cancel recurring booking' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Only this booking (Mon, Oct 26)' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'All bookings in the series' })).not.toBeChecked();
  });

  it('keeps the series when only one booking is cancelled', async () => {
    const user = setup();
    await openTeamSync(user);
    const choice = screen.getAllByRole('dialog').at(-1)!;
    await user.click(within(choice).getByRole('button', { name: 'Cancel booking' }));

    const teamSync = ownBookingsJson().find((booking) => booking.title === 'Team sync');
    expect(teamSync?.exceptions).toEqual(['2026-10-26 10:00:00']);
    expect(screen.getByText('Booking cancelled')).toBeInTheDocument();
  });

  it('removes the series when the whole series is cancelled', async () => {
    const user = setup();
    await openTeamSync(user);
    await user.click(screen.getByRole('radio', { name: 'All bookings in the series' }));
    const choice = screen.getAllByRole('dialog').at(-1)!;
    await user.click(within(choice).getByRole('button', { name: 'Cancel booking' }));

    expect(ownBookingsJson().map((booking) => booking.title)).not.toContain('Team sync');
    expect(screen.getByText('Series cancelled')).toBeInTheDocument();
  });
});

describe('MeetingRoomBooking JSON', () => {
  it('lists only the bookings of the current user', () => {
    setup();
    const titles = ownBookingsJson().map((booking) => booking.title);

    expect(titles).toContain('Architecture sync');
    expect(titles).not.toContain('Lunch & learn');
  });
});
