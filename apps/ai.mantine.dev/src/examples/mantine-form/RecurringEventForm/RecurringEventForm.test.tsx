import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { RecurringEventForm } from './RecurringEventForm';

type User = ReturnType<typeof userEvent.setup>;

const browserOptions = new Intl.DateTimeFormat().resolvedOptions();

function mockBrowserTimezone(timeZone: string) {
  vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockReturnValue({
    ...browserOptions,
    timeZone,
  });
}

function renderForm(onSubmit = vi.fn()) {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <RecurringEventForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

// The asterisk of a required label is part of the label text
const field = (label: string) => screen.getByLabelText(new RegExp(`^${label}( \\*)?$`));
const timezoneInput = () => screen.getByRole('combobox', { name: 'Timezone' });
const dateButton = (label: string) => screen.getByRole('button', { name: new RegExp(`^${label}`) });

async function pickDate(user: User, label: string, day: string) {
  await user.click(dateButton(label));
  const drawer = screen.getByRole('dialog');
  await user.click(within(drawer).getByRole('button', { name: day }));
  await user.click(within(drawer).getByRole('button', { name: 'Save' }));
}

async function typeTime(user: User, label: string, time: string) {
  await user.clear(field(label));
  await user.type(field(label), time);
}

async function fillEvent(user: User) {
  await user.type(field('Title'), 'Team sync');
  await pickDate(user, 'Start date', '21 October 2026');
  await typeTime(user, 'Start time', '09:00');
}

async function chooseRepeat(user: User, repeat: string) {
  await user.click(screen.getByRole('radio', { name: repeat }));
}

async function chooseSeriesEnd(user: User, option: string) {
  await user.click(screen.getByRole('radio', { name: option }));
}

async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create event' }));
}

function previewItems() {
  return within(screen.getByRole('list', { name: 'Next occurrences' }))
    .getAllByRole('listitem')
    .map((item) => item.textContent);
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date(2026, 9, 17, 12));
  mockBrowserTimezone('Europe/Berlin');
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  notifications.clean();
});

describe('event fields', () => {
  it('defaults the timezone to the browser timezone when it is in the list', () => {
    renderForm();
    expect(timezoneInput()).toHaveValue('Berlin');
  });

  it('defaults the timezone to UTC when the browser timezone is not in the list', () => {
    mockBrowserTimezone('Europe/Moscow');
    renderForm();
    expect(timezoneInput()).toHaveValue('UTC');
  });

  it('sets the end to one hour after the start', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    expect(dateButton('End date')).toHaveTextContent('October 21, 2026');
    expect(field('End time')).toHaveValue('10:00');
  });

  it('moves the end with the start while the end was not edited', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await typeTime(user, 'Start time', '23:30');
    expect(dateButton('End date')).toHaveTextContent('October 22, 2026');
    expect(field('End time')).toHaveValue('00:30');
  });

  it('keeps an edited end when the start changes', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await typeTime(user, 'End time', '12:00');
    await typeTime(user, 'Start time', '10:00');
    expect(field('End time')).toHaveValue('12:00');
  });

  it('hides the time inputs when All day is on', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(screen.queryByLabelText('Start time')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('End time')).not.toBeInTheDocument();
  });
});

describe('validation', () => {
  it('shows the required errors when submitted empty', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Start date is required')).toBeInTheDocument();
    expect(screen.getByText('Start time is required')).toBeInTheDocument();
    expect(screen.getByText('End date is required')).toBeInTheDocument();
    expect(screen.getByText('End time is required')).toBeInTheDocument();
  });

  it('focuses the title when submitted empty', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(field('Title')).toHaveFocus();
  });

  it('requires a timezone', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await user.click(timezoneInput());
    await user.click(screen.getByRole('option', { name: 'Berlin' }));
    await submit(user);
    expect(screen.getByText('Timezone is required')).toBeInTheDocument();
  });

  it('rejects an end time before the start time on the same day', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await typeTime(user, 'End time', '08:00');
    await submit(user);
    expect(screen.getByText('End must be after the start')).toBeInTheDocument();
    expect(field('End time')).toHaveFocus();
  });

  it('accepts an earlier end time when the end is on a later day', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await pickDate(user, 'End date', '22 October 2026');
    await typeTime(user, 'End time', '08:00');
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('rejects an end date before the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await pickDate(user, 'End date', '23 October 2026');
    await pickDate(user, 'Start date', '25 October 2026');
    await submit(user);
    expect(screen.getByText('End must be after the start')).toBeInTheDocument();
    expect(dateButton('End date')).toHaveFocus();
  });

  it('accepts an all-day event that starts and ends on the same day', async () => {
    const { user, onSubmit } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await user.type(field('Title'), 'Offsite');
    await pickDate(user, 'Start date', '21 October 2026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('clears the time errors when All day is turned on', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(screen.queryByText('Start time is required')).not.toBeInTheDocument();
  });

  it('clears the title error when a title is typed', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.type(field('Title'), 'Team sync');
    expect(screen.queryByText('Title is required')).not.toBeInTheDocument();
  });

  it('rejects an interval above 99', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(field('Repeat every'));
    await user.type(field('Repeat every'), '100');
    await submit(user);
    expect(screen.getByText('Enter a number from 1 to 99')).toBeInTheDocument();
    expect(field('Repeat every')).toHaveFocus();
  });

  it('rejects an empty interval', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(field('Repeat every'));
    await submit(user);
    expect(screen.getByText('Enter a number from 1 to 99')).toBeInTheDocument();
  });

  it('requires at least one weekday for a weekly event', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await submit(user);
    expect(screen.getByText('Pick at least one day')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Mon' })).toHaveFocus();
  });

  it('rejects an occurrences count above 500', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await chooseSeriesEnd(user, 'After a number of occurrences');
    await user.clear(field('Occurrences'));
    await user.type(field('Occurrences'), '501');
    await submit(user);
    expect(screen.getByText('Enter a number from 1 to 500')).toBeInTheDocument();
  });

  it('requires a series end date when the series ends on a date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await chooseSeriesEnd(user, 'On a date');
    await submit(user);
    expect(screen.getByText('Series end date is required')).toBeInTheDocument();
  });

  it('rejects a series end date that is not after the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await chooseSeriesEnd(user, 'On a date');
    await pickDate(user, 'Series end date', '24 October 2026');
    await pickDate(user, 'End date', '26 October 2026');
    await pickDate(user, 'Start date', '26 October 2026');
    await submit(user);
    expect(screen.getByText('Must be after the start date')).toBeInTheDocument();
  });

  it('does not validate the hidden recurrence fields', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(field('Repeat every'));
    await chooseRepeat(user, 'Does not repeat');
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });
});

describe('recurrence fields', () => {
  it('shows no recurrence fields when the event does not repeat', () => {
    renderForm();
    expect(screen.queryByLabelText('Repeat every')).not.toBeInTheDocument();
    expect(screen.queryByRole('radiogroup', { name: 'Ends' })).not.toBeInTheDocument();
  });

  it('shows the interval unit of the selected repeat', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Monthly');
    await user.clear(field('Repeat every'));
    await user.type(field('Repeat every'), '3');
    expect(screen.getByText('months')).toBeInTheDocument();
  });

  it('defaults the weekly days to the weekday of the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    expect(screen.getByRole('checkbox', { name: 'Wed' })).toBeChecked();
  });

  it('follows the start date with the default weekday', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await pickDate(user, 'Start date', '23 October 2026');
    expect(screen.getByRole('checkbox', { name: 'Fri' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Wed' })).not.toBeChecked();
  });

  it('shows the weekdays only for a weekly event', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Daily');
    expect(screen.queryByRole('checkbox', { name: 'Mon' })).not.toBeInTheDocument();
  });

  it('derives the monthly options from the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    expect(screen.getByRole('radio', { name: 'On day 21' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'On the third Wednesday' })).toBeInTheDocument();
  });

  it('shows the occurrences input only when the series ends after a number of occurrences', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Daily');
    expect(screen.queryByLabelText('Occurrences')).not.toBeInTheDocument();
    await chooseSeriesEnd(user, 'After a number of occurrences');
    expect(field('Occurrences')).toHaveValue('10');
  });
});

describe('preview', () => {
  it('shows the single occurrence of an event that does not repeat', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    expect(previewItems()).toEqual(['Wed, October 21, 2026, 09:00']);
  });

  it('shows No occurrences without a start date', () => {
    renderForm();
    expect(screen.getByText('No occurrences')).toBeInTheDocument();
  });

  it('lists the next 5 occurrences of a daily event with an interval', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(field('Repeat every'));
    await user.type(field('Repeat every'), '2');
    expect(previewItems()).toEqual([
      'Wed, October 21, 2026, 09:00',
      'Fri, October 23, 2026, 09:00',
      'Sun, October 25, 2026, 09:00',
      'Tue, October 27, 2026, 09:00',
      'Thu, October 29, 2026, 09:00',
    ]);
  });

  it('lists weekly occurrences on every selected weekday', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Mon' }));
    expect(previewItems()).toEqual([
      'Wed, October 21, 2026, 09:00',
      'Mon, October 26, 2026, 09:00',
      'Wed, October 28, 2026, 09:00',
      'Mon, November 2, 2026, 09:00',
      'Wed, November 4, 2026, 09:00',
    ]);
  });

  it('lists monthly occurrences on the same weekday of the month', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'On the third Wednesday' }));
    expect(previewItems()).toEqual([
      'Wed, October 21, 2026, 09:00',
      'Wed, November 18, 2026, 09:00',
      'Wed, December 16, 2026, 09:00',
      'Wed, January 20, 2027, 09:00',
      'Wed, February 17, 2027, 09:00',
    ]);
  });

  it('lists yearly occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Yearly');
    expect(previewItems()[1]).toBe('Thu, October 21, 2027, 09:00');
  });

  it('stops after the number of occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await chooseSeriesEnd(user, 'After a number of occurrences');
    await user.clear(field('Occurrences'));
    await user.type(field('Occurrences'), '2');
    expect(previewItems()).toEqual([
      'Wed, October 21, 2026, 09:00',
      'Thu, October 22, 2026, 09:00',
    ]);
  });

  it('shows dates without time for an all-day event', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(previewItems()).toEqual(['Wed, October 21, 2026']);
  });

  it('shows No occurrences when every occurrence is skipped', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await chooseSeriesEnd(user, 'After a number of occurrences');
    await user.clear(field('Occurrences'));
    await user.type(field('Occurrences'), '1');
    await pickDate(user, 'Exceptions', '21 October 2026');
    expect(screen.getByText('No occurrences')).toBeInTheDocument();
  });
});

describe('exceptions', () => {
  it('adds a picked date to the skipped dates', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    const list = screen.getByRole('list', { name: 'Skipped dates' });
    expect(within(list).getByText('October 22, 2026')).toBeInTheDocument();
  });

  it('leaves a skipped date out of the preview', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    expect(previewItems()).not.toContain('Thu, October 22, 2026, 09:00');
  });

  it('removes a skipped date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    await user.click(screen.getByRole('button', { name: 'Remove October 22, 2026' }));
    expect(screen.queryByRole('list', { name: 'Skipped dates' })).not.toBeInTheDocument();
  });

  it('rejects a date that is already skipped', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    await pickDate(user, 'Exceptions', '22 October 2026');
    expect(screen.getByText('October 22, 2026 is already skipped')).toBeInTheDocument();
    expect(
      within(screen.getByRole('list', { name: 'Skipped dates' })).getAllByRole('listitem')
    ).toHaveLength(1);
  });

  it('disables the days that are not in the series', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(dateButton('Exceptions'));
    expect(screen.getByRole('button', { name: '22 October 2026' })).toBeDisabled();
  });

  it('rejects a skipped date that is no longer in the series', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    await chooseRepeat(user, 'Weekly');
    await submit(user);
    expect(screen.getByText('October 22, 2026 is not in the series')).toBeInTheDocument();
  });
});

describe('submit', () => {
  it('submits a weekly event with only the weekly recurrence fields', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.type(field('Description'), 'Weekly planning');
    await user.type(field('Location'), 'Room 4');
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Mon' }));
    await chooseSeriesEnd(user, 'After a number of occurrences');
    await pickDate(user, 'Exceptions', '26 October 2026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Team sync',
      description: 'Weekly planning',
      start: '2026-10-21T09:00:00+02:00',
      end: '2026-10-21T10:00:00+02:00',
      allDay: false,
      timezone: 'Europe/Berlin',
      location: 'Room 4',
      recurrence: {
        repeat: 'weekly',
        interval: 1,
        weekdays: ['MO', 'WE'],
        ends: { type: 'after', count: 10 },
      },
      exceptions: ['2026-10-26'],
    });
  });

  it('submits a monthly event with the monthly option and the series end date', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'On the third Wednesday' }));
    await chooseSeriesEnd(user, 'On a date');
    await pickDate(user, 'Series end date', '31 October 2026');
    await submit(user);
    expect(onSubmit.mock.calls[0][0].recurrence).toEqual({
      repeat: 'monthly',
      interval: 1,
      monthlyOn: 'weekdayOfMonth',
      ends: { type: 'on', date: '2026-10-31' },
    });
  });

  it('submits no recurrence and no exceptions when the event does not repeat', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await pickDate(user, 'Exceptions', '22 October 2026');
    await chooseRepeat(user, 'Does not repeat');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ recurrence: null, exceptions: [] })
    );
  });

  it('submits dates without time for an all-day event', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ start: '2026-10-21', end: '2026-10-21', allDay: true })
    );
  });

  it('shows a notification with the title and the first occurrence', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(await screen.findByText('Event created')).toBeInTheDocument();
    expect(screen.getByText('Team sync · Wed, October 21, 2026, 09:00')).toBeInTheDocument();
  });

  it('shows the event JSON under the form', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(screen.getByLabelText('Submitted event')).toHaveTextContent('"title": "Team sync"');
  });

  it('keeps the values after submit', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(field('Title')).toHaveValue('Team sync');
  });
});
