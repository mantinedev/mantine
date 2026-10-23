import { render, screen, userEvent, within } from '@test-utils';
import { notifications, Notifications } from '@mantine/notifications';
import { RecurringEventForm } from './RecurringEventForm';

type User = ReturnType<typeof userEvent.setup>;

const machineOptions = new Intl.DateTimeFormat().resolvedOptions();

function mockBrowserTimezone(timeZone: string) {
  vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockReturnValue({
    ...machineOptions,
    timeZone,
  });
}

function renderForm() {
  const user = userEvent.setup();
  const onSubmit = vi.fn();
  render(
    <>
      <Notifications />
      <RecurringEventForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

/** Types into a masked date input: `21102026` for a date, `211020261030` with the time */
async function typeDate(user: User, label: string, digits: string) {
  await user.click(screen.getByLabelText(`${label} day`));
  await user.keyboard(digits);
  await user.tab();
}

const partValues = (label: string) =>
  ['day', 'month', 'year', 'hours', 'minutes'].map(
    (part) => (screen.queryByLabelText(`${label} ${part}`) as HTMLInputElement | null)?.value
  );

const submit = (user: User) => user.click(screen.getByRole('button', { name: 'Create event' }));

async function fillEvent(user: User) {
  await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Team sync');
  await typeDate(user, 'Start', '211020261030');
}

async function repeatWeekly(user: User) {
  await user.click(screen.getByRole('switch', { name: 'Repeat' }));
}

async function chooseFrequency(user: User, unit: string) {
  await user.selectOptions(screen.getByRole('combobox', { name: 'Frequency' }), unit);
}

async function addException(user: User, day: string) {
  await user.click(screen.getByRole('textbox', { name: 'Exceptions' }));
  await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: day }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

const previewItems = () =>
  within(screen.getByRole('list', { name: 'Next occurrences' }))
    .getAllByRole('listitem')
    .map((item) => item.textContent);

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date(2026, 9, 15, 12));
  mockBrowserTimezone('Europe/Berlin');
});

afterEach(() => {
  notifications.clean();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('event fields', () => {
  it('defaults the timezone to the browser timezone when it is in the list', () => {
    renderForm();
    expect(screen.getByRole('combobox', { name: 'Timezone' })).toHaveValue('Berlin');
  });

  it('defaults the timezone to UTC when the browser timezone is not in the list', () => {
    mockBrowserTimezone('Africa/Cairo');
    renderForm();
    expect(screen.getByRole('combobox', { name: 'Timezone' })).toHaveValue('UTC');
  });

  it('sets the end to one hour after the start', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261030');
    expect(partValues('End')).toEqual(['21', '10', '2026', '11', '30']);
  });

  it('keeps an edited end when the start changes', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261030');
    await typeDate(user, 'End', '211020261500');
    await typeDate(user, 'Start', '211020260900');
    expect(partValues('End')).toEqual(['21', '10', '2026', '15', '00']);
  });

  it('hides the time parts of start and end when All day is on', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(screen.queryByLabelText('Start hours')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('End hours')).not.toBeInTheDocument();
  });

  it('restores the times when All day is turned off again', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261030');
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(partValues('Start')).toEqual(['21', '10', '2026', '10', '30']);
  });
});

describe('recurrence fields', () => {
  it('shows no recurrence fields when the event does not repeat', () => {
    renderForm();
    expect(screen.queryByRole('textbox', { name: 'Repeat every' })).not.toBeInTheDocument();
    expect(screen.queryByRole('radiogroup', { name: 'Ends' })).not.toBeInTheDocument();
  });

  it('shows the interval when the event repeats', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    expect(screen.getByRole('textbox', { name: 'Repeat every' })).toHaveValue('1');
  });

  it('preselects the weekday of the start date for weekly events', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    expect(screen.getByRole('checkbox', { name: 'Wed' })).toBeChecked();
  });

  it('follows the start date with the preselected weekday', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await typeDate(user, 'Start', '221020261030');
    expect(screen.getByRole('checkbox', { name: 'Thu' })).toBeChecked();
  });

  it('hides the weekdays for other repeat options', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    await chooseFrequency(user, 'days');
    expect(screen.queryByRole('checkbox', { name: 'Mon' })).not.toBeInTheDocument();
  });

  it('derives the monthly options from the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await chooseFrequency(user, 'months');
    expect(screen.getByRole('radio', { name: 'On day 21' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'On the third Wednesday' })).toBeInTheDocument();
  });

  it('shows the occurrences count when the series ends after a number of occurrences', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    expect(screen.getByRole('textbox', { name: 'Occurrences' })).toBeInTheDocument();
  });

  it('shows the end date when the series ends on a date', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    expect(screen.getByLabelText('End date day')).toBeInTheDocument();
  });

  it('shows added exceptions as removable pills', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await addException(user, '28 October 2026');
    expect(screen.getByLabelText('Remove Oct 28, 2026')).toBeInTheDocument();
  });

  it('offers only dates of the series as exceptions', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('textbox', { name: 'Exceptions' }));
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('button', { name: '27 October 2026' })).toBeDisabled();
    expect(within(dialog).getByRole('button', { name: '28 October 2026' })).toBeEnabled();
  });
});

describe('occurrences preview', () => {
  it('lists the next 5 occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    expect(previewItems()).toEqual([
      'Wed, Oct 21, 2026, 10:30',
      'Wed, Oct 28, 2026, 10:30',
      'Wed, Nov 4, 2026, 10:30',
      'Wed, Nov 11, 2026, 10:30',
      'Wed, Nov 18, 2026, 10:30',
    ]);
  });

  it('follows the interval', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.clear(screen.getByRole('textbox', { name: 'Repeat every' }));
    await user.type(screen.getByRole('textbox', { name: 'Repeat every' }), '3');
    await chooseFrequency(user, 'days');
    expect(previewItems().slice(0, 3)).toEqual([
      'Wed, Oct 21, 2026, 10:30',
      'Sat, Oct 24, 2026, 10:30',
      'Tue, Oct 27, 2026, 10:30',
    ]);
  });

  it('repeats monthly on the same weekday of the month', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await chooseFrequency(user, 'months');
    await user.click(screen.getByRole('radio', { name: 'On the third Wednesday' }));
    expect(previewItems()).toEqual([
      'Wed, Oct 21, 2026, 10:30',
      'Wed, Nov 18, 2026, 10:30',
      'Wed, Dec 16, 2026, 10:30',
      'Wed, Jan 20, 2027, 10:30',
      'Wed, Feb 17, 2027, 10:30',
    ]);
  });

  it('stops after the number of occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await user.clear(screen.getByRole('textbox', { name: 'Occurrences' }));
    await user.type(screen.getByRole('textbox', { name: 'Occurrences' }), '2');
    expect(previewItems()).toHaveLength(2);
  });

  it('skips exceptions', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await addException(user, '28 October 2026');
    expect(previewItems()).not.toContain('Wed, Oct 28, 2026, 10:30');
  });

  it('shows "No occurrences" when the rule produces none', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    expect(screen.getByText('No occurrences')).toBeInTheDocument();
  });
});

describe('validation', () => {
  it('shows the required errors when submitted empty', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getAllByText('Title is required')).not.toHaveLength(0);
    expect(screen.getAllByText('Start is required')).not.toHaveLength(0);
    expect(screen.getAllByText('End is required')).not.toHaveLength(0);
  });

  it('focuses the first invalid field on submit', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveFocus();
  });

  it('lists the errors in a summary above the form', async () => {
    const { user } = renderForm();
    await submit(user);
    const summary = screen.getByRole('alert');
    expect(within(summary).getByRole('button', { name: 'Start is required' })).toBeInTheDocument();
  });

  it('focuses the field when its error in the summary is clicked', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.click(
      within(screen.getByRole('alert')).getByRole('button', { name: 'Start is required' })
    );
    expect(screen.getByLabelText('Start day')).toHaveFocus();
  });

  it('removes the title error once a title is typed', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Team sync');
    expect(screen.queryByText('Title is required')).not.toBeInTheDocument();
  });

  it('rejects an end before the start on the same day', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await typeDate(user, 'End', '211020260900');
    await submit(user);
    expect(screen.getAllByText('End must be after start')).not.toHaveLength(0);
  });

  it('rejects an end equal to the start of a timed event', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await typeDate(user, 'End', '211020261030');
    await submit(user);
    expect(screen.getAllByText('End must be after start')).not.toHaveLength(0);
  });

  it('accepts an all-day event that ends on its start date', async () => {
    const { user, onSubmit } = renderForm();
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Offsite');
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await typeDate(user, 'Start', '21102026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('requires an interval', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    await user.clear(screen.getByRole('textbox', { name: 'Repeat every' }));
    await user.tab();
    expect(screen.getByText('Interval must be from 1 to 99')).toBeInTheDocument();
  });

  it('requires at least one weekday for weekly events', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await submit(user);
    expect(screen.getAllByText('Pick at least one weekday')).not.toHaveLength(0);
  });

  it('requires the occurrences count', async () => {
    const { user } = renderForm();
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await user.clear(screen.getByRole('textbox', { name: 'Occurrences' }));
    await user.tab();
    expect(screen.getByText('Occurrences must be from 1 to 500')).toBeInTheDocument();
  });

  it('requires an end date when the series ends on a date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await submit(user);
    expect(screen.getAllByText('Pick the date the series ends on')).not.toHaveLength(0);
  });

  it('rejects an end date that is not after the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await typeDate(user, 'End date', '30102026');
    await typeDate(user, 'Start', '301020261030');
    await submit(user);
    expect(screen.getAllByText('End date must be after the start date')).not.toHaveLength(0);
  });

  it('rejects an exception that is no longer in the series', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await addException(user, '28 October 2026');
    await user.click(screen.getByRole('checkbox', { name: 'Thu' }));
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await submit(user);
    expect(screen.getAllByText('Oct 28, 2026 is not an occurrence of the series')).not.toHaveLength(
      0
    );
  });

  it('does not validate hidden recurrence fields', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await repeatWeekly(user);
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });
});

describe('submit', () => {
  it('shows a notification with the title and the first occurrence', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(await screen.findByText('Event created')).toBeInTheDocument();
    expect(screen.getByText('Team sync · Wed, Oct 21, 2026, 10:30')).toBeInTheDocument();
  });

  it('names the first occurrence that is not an exception in the notification', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await addException(user, '21 October 2026');
    await submit(user);
    expect(await screen.findByText('Team sync · Wed, Oct 28, 2026, 10:30')).toBeInTheDocument();
  });

  it('submits a single event with times in the event timezone', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.type(screen.getByRole('textbox', { name: 'Location' }), 'Room 4');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Team sync',
      description: null,
      start: '2026-10-21T10:30:00+02:00',
      end: '2026-10-21T11:30:00+02:00',
      allDay: false,
      timezone: 'Europe/Berlin',
      location: 'Room 4',
      recurrence: { repeat: 'none' },
    });
  });

  it('converts the times with the selected timezone', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.click(screen.getByRole('combobox', { name: 'Timezone' }));
    await user.click(screen.getByRole('option', { name: 'New York' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        start: '2026-10-21T10:30:00-04:00',
        timezone: 'America/New_York',
      })
    );
  });

  it('submits dates only for all-day events', async () => {
    const { user, onSubmit } = renderForm();
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Offsite');
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await typeDate(user, 'Start', '21102026');
    await typeDate(user, 'End', '23102026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ start: '2026-10-21', end: '2026-10-23', allDay: true })
    );
  });

  it('submits a weekly recurrence with its weekdays and exceptions', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await user.click(screen.getByRole('checkbox', { name: 'Fri' }));
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await addException(user, '28 October 2026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        recurrence: {
          repeat: 'weekly',
          interval: 1,
          weekdays: ['WE', 'FR'],
          ends: { type: 'after', count: 10 },
        },
        exceptions: ['2026-10-28'],
      })
    );
  });

  it('submits only the fields of the selected repeat option', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await chooseFrequency(user, 'months');
    await user.click(screen.getByRole('radio', { name: 'On the third Wednesday' }));
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await typeDate(user, 'End date', '31122026');
    await submit(user);
    expect(onSubmit.mock.calls[0][0].recurrence).toEqual({
      repeat: 'monthly',
      interval: 1,
      monthlyOn: { type: 'weekday', weekday: 'WE', week: 3 },
      ends: { type: 'on', until: '2026-12-31' },
    });
  });

  it('does not submit recurrence values when the event does not repeat', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await repeatWeekly(user);
    await addException(user, '28 October 2026');
    await repeatWeekly(user);
    await submit(user);
    expect(onSubmit.mock.calls[0][0]).not.toHaveProperty('exceptions');
  });

  it('shows the event JSON under the form', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(screen.getByLabelText('Event JSON')).toHaveTextContent(
      '"start": "2026-10-21T10:30:00+02:00"'
    );
  });

  it('keeps the form values after submit', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveValue('Team sync');
  });
});
