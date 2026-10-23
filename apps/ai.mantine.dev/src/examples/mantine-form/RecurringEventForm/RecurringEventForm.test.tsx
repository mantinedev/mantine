import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { RecurringEventForm } from './RecurringEventForm';

type User = ReturnType<typeof userEvent.setup>;

const resolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;

function mockBrowserTimezone(timeZone: string) {
  jest.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockImplementation(function (
    this: Intl.DateTimeFormat
  ) {
    return { ...resolvedOptions.call(this), timeZone };
  });
}

function renderForm(onSubmit = jest.fn()) {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <RecurringEventForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

/** Pastes a `YYYY-MM-DD` or `YYYY-MM-DD HH:mm` value into a masked date input */
async function enterDate(user: User, label: string, value: string) {
  await user.click(screen.getByLabelText(`${label} day`));
  await user.paste(value);
}

async function fillEvent(user: User, start = '2026-10-20 10:00') {
  await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Team sync');
  await enterDate(user, 'Start', start);
}

async function chooseRepeat(user: User, label: string) {
  await user.click(screen.getByRole('radio', { name: label }));
}

async function setNumber(user: User, label: string, value: string) {
  const field = screen.getByRole('textbox', { name: label });
  await user.clear(field);
  await user.type(field, value);
}

async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create event' }));
}

function previewItems() {
  return within(screen.getByRole('list', { name: 'Next occurrences' }))
    .getAllByRole('listitem')
    .map((item) => item.textContent);
}

// The form never compares dates with today (the exceptions calendar opens on the start month),
// so the clock is not faked
beforeEach(() => {
  mockBrowserTimezone('Europe/Berlin');
});

afterEach(() => {
  notifications.clean();
  jest.restoreAllMocks();
});

describe('event fields', () => {
  it('shows required errors for the title, start and end when submitted empty', async () => {
    const { user, onSubmit } = renderForm();
    await submit(user);

    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Start is required')).toBeInTheDocument();
    expect(screen.getByText('End is required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('focuses the title when submitted empty', async () => {
    const { user } = renderForm();
    await submit(user);

    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveFocus();
  });

  it('focuses the start when it is the first invalid field', async () => {
    const { user } = renderForm();
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Team sync');
    await submit(user);

    expect(screen.getByLabelText('Start day')).toHaveFocus();
  });

  it('clears the title error when a title is typed', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Team sync');

    expect(screen.queryByText('Title is required')).not.toBeInTheDocument();
  });

  it('sets the end to one hour after the start', async () => {
    const { user } = renderForm();
    await enterDate(user, 'Start', '2026-10-20 10:00');

    expect(screen.getByLabelText('End day')).toHaveValue('20');
    expect(screen.getByLabelText('End hours')).toHaveValue('11');
    expect(screen.getByLabelText('End minutes')).toHaveValue('00');
  });

  it('keeps an edited end when the start changes', async () => {
    const { user } = renderForm();
    await enterDate(user, 'Start', '2026-10-20 10:00');
    await enterDate(user, 'End', '2026-10-20 15:30');
    await enterDate(user, 'Start', '2026-10-21 10:00');

    expect(screen.getByLabelText('End day')).toHaveValue('20');
    expect(screen.getByLabelText('End hours')).toHaveValue('15');
  });

  it('rejects an end earlier on the same day as the start', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await enterDate(user, 'End', '2026-10-20 09:30');
    await submit(user);

    expect(screen.getByText('End must be after the start')).toBeInTheDocument();
  });

  it('rejects an end on a day before the start', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await enterDate(user, 'End', '2026-10-19 12:00');
    await submit(user);

    expect(screen.getByText('End must be after the start')).toBeInTheDocument();
  });

  it('hides the time parts when All day is on', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));

    expect(screen.queryByLabelText('Start hours')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('End minutes')).not.toBeInTheDocument();
  });

  it('accepts an all-day event that ends on the day it starts', async () => {
    const { user, onSubmit } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await fillEvent(user, '2026-10-20');
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ allDay: true, start: '2026-10-20', end: '2026-10-20' })
    );
  });

  it('defaults the timezone to the browser timezone', () => {
    renderForm();
    expect(screen.getByRole('combobox', { name: 'Timezone' })).toHaveValue('Berlin');
  });

  it('defaults the timezone to UTC when the browser timezone is not in the list', () => {
    mockBrowserTimezone('Antarctica/Troll');
    renderForm();

    expect(screen.getByRole('combobox', { name: 'Timezone' })).toHaveValue('UTC');
  });
});

describe('recurrence fields', () => {
  it('shows no recurrence fields when the event does not repeat', () => {
    renderForm();

    expect(screen.getByRole('radio', { name: 'Does not repeat' })).toBeChecked();
    expect(screen.queryByLabelText('Repeat every')).not.toBeInTheDocument();
    expect(screen.queryByRole('radiogroup', { name: 'Ends' })).not.toBeInTheDocument();
    expect(screen.queryByText('Exceptions')).not.toBeInTheDocument();
  });

  it('shows the interval in the unit of the selected repeat option', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Weekly');
    await setNumber(user, 'Repeat every', '2');

    expect(screen.getByText('weeks')).toBeInTheDocument();
  });

  it('limits the interval to 99', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Daily');
    await setNumber(user, 'Repeat every', '150');
    await user.tab();

    expect(screen.getByRole('textbox', { name: 'Repeat every' })).toHaveValue('99');
  });

  it('rejects an empty interval', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(screen.getByRole('textbox', { name: 'Repeat every' }));
    await submit(user);

    expect(screen.getByText('Interval must be between 1 and 99')).toBeInTheDocument();
  });

  it('preselects the weekday of the start date for a weekly repeat', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');

    expect(screen.getByRole('checkbox', { name: 'Tuesday' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Monday' })).not.toBeChecked();
  });

  it('requires at least one weekday for a weekly repeat and focuses the weekdays', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Tuesday' }));
    await submit(user);

    expect(screen.getByText('Pick at least one weekday')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Monday' })).toHaveFocus();
  });

  it('offers the day of the month and the weekday of the month of the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Monthly');

    expect(screen.getByRole('radio', { name: 'Day 20' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'The third Tuesday' })).toBeInTheDocument();
  });

  it('limits the occurrences to 500', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await setNumber(user, 'Occurrences', '501');
    await user.tab();

    expect(screen.getByRole('textbox', { name: 'Occurrences' })).toHaveValue('500');
  });

  it('rejects an empty number of occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await user.clear(screen.getByRole('textbox', { name: 'Occurrences' }));
    await submit(user);

    expect(screen.getByText('Occurrences must be between 1 and 500')).toBeInTheDocument();
  });

  it('rejects an end date that is not after the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await enterDate(user, 'End date', '2026-10-20');
    await submit(user);

    expect(screen.getByText('End date must be after the start date')).toBeInTheDocument();
  });

  it('requires an end date when the series ends on a date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await submit(user);

    expect(screen.getByText('End date is required')).toBeInTheDocument();
  });
});

describe('exceptions', () => {
  async function addException(user: User, day: string) {
    await user.click(screen.getByRole('textbox', { name: 'Exceptions' }));
    await user.click(await screen.findByRole('button', { name: day }));
    await user.click(screen.getByRole('button', { name: 'Save' }));
  }

  it('does not allow picking a date outside the series', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('textbox', { name: 'Exceptions' }));

    expect(await screen.findByRole('button', { name: '21 October 2026' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '27 October 2026' })).toBeEnabled();
  });

  it('skips an exception in the preview', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await addException(user, '27 October 2026');

    expect(previewItems()).toEqual([
      'Tue, Oct 20, 2026, 10:00',
      'Tue, Nov 3, 2026, 10:00',
      'Tue, Nov 10, 2026, 10:00',
      'Tue, Nov 17, 2026, 10:00',
      'Tue, Nov 24, 2026, 10:00',
    ]);
  });

  it('removes an exception with the remove button of its pill', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await addException(user, '27 October 2026');
    await user.click(screen.getByLabelText('Remove Oct 27, 2026'));

    expect(previewItems()[1]).toBe('Tue, Oct 27, 2026, 10:00');
  });

  it('rejects an exception that is no longer in the series after the rule changes', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await addException(user, '27 October 2026');
    await setNumber(user, 'Repeat every', '2');
    await submit(user);

    expect(screen.getByText('Tue, Oct 27, 2026 is not a date of the series')).toBeInTheDocument();
  });
});

describe('occurrences preview', () => {
  it('asks for a start before showing occurrences', () => {
    renderForm();
    expect(screen.getByText('Set the start to see the occurrences')).toBeInTheDocument();
  });

  it('shows the single occurrence of an event that does not repeat', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');

    expect(previewItems()).toEqual(['Tue, Oct 20, 2026, 10:00']);
  });

  it('shows the next five occurrences of a weekly rule with an interval', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await setNumber(user, 'Repeat every', '2');
    await user.click(screen.getByRole('checkbox', { name: 'Thursday' }));

    expect(previewItems()).toEqual([
      'Tue, Oct 20, 2026, 10:00',
      'Thu, Oct 22, 2026, 10:00',
      'Tue, Nov 3, 2026, 10:00',
      'Thu, Nov 5, 2026, 10:00',
      'Tue, Nov 17, 2026, 10:00',
    ]);
  });

  it('shows monthly occurrences on the weekday of the month', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'The third Tuesday' }));

    expect(previewItems()).toEqual([
      'Tue, Oct 20, 2026, 10:00',
      'Tue, Nov 17, 2026, 10:00',
      'Tue, Dec 15, 2026, 10:00',
      'Tue, Jan 19, 2027, 10:00',
      'Tue, Feb 16, 2027, 10:00',
    ]);
  });

  it('stops at the occurrence count', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await setNumber(user, 'Occurrences', '2');

    expect(previewItems()).toEqual(['Tue, Oct 20, 2026, 10:00', 'Wed, Oct 21, 2026, 10:00']);
  });

  it('shows "No occurrences" when every date of the series is an exception', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await setNumber(user, 'Occurrences', '1');
    await user.click(screen.getByRole('textbox', { name: 'Exceptions' }));
    await user.click(await screen.findByRole('button', { name: '20 October 2026' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(screen.getByText('No occurrences')).toBeInTheDocument();
  });
});

describe('submit', () => {
  it('submits a single event with ISO dates in the selected timezone', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await user.type(screen.getByLabelText('Location'), 'Room 4');
    await user.type(screen.getByLabelText('Description'), 'Weekly planning');
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Team sync',
      description: 'Weekly planning',
      start: '2026-10-20T10:00:00+02:00',
      end: '2026-10-20T11:00:00+02:00',
      allDay: false,
      timezone: 'Europe/Berlin',
      location: 'Room 4',
      recurrence: null,
      exceptions: [],
    });
  });

  it('uses the offset of the timezone picked in the select', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await user.click(screen.getByRole('combobox', { name: 'Timezone' }));
    await user.click(screen.getByRole('option', { name: 'Tokyo' }));
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ timezone: 'Asia/Tokyo', start: '2026-10-20T10:00:00+09:00' })
    );
  });

  it('submits only the recurrence fields of a weekly rule', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Monday' }));
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await setNumber(user, 'Occurrences', '6');
    await submit(user);

    expect(onSubmit.mock.calls[0][0].recurrence).toEqual({
      frequency: 'weekly',
      interval: 1,
      weekdays: ['MO', 'TU'],
      ends: 'after',
      count: 6,
    });
  });

  it('submits the weekday-of-month rule of a monthly repeat', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'The third Tuesday' }));
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await enterDate(user, 'End date', '2027-06-30');
    await submit(user);

    expect(onSubmit.mock.calls[0][0].recurrence).toEqual({
      frequency: 'monthly',
      interval: 1,
      monthly: { by: 'weekdayOfMonth', weekday: 'TU', week: 3 },
      ends: 'on',
      until: '2027-06-30',
    });
  });

  it('does not submit the values of fields hidden by the repeat option', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await chooseRepeat(user, 'Weekly');
    await chooseRepeat(user, 'Daily');
    await submit(user);

    expect(onSubmit.mock.calls[0][0].recurrence).toEqual({
      frequency: 'daily',
      interval: 1,
      ends: 'never',
    });
  });

  it('does not block submit with an invalid value in a hidden field', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(screen.getByRole('textbox', { name: 'Repeat every' }));
    await chooseRepeat(user, 'Does not repeat');
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ recurrence: null }));
  });

  it('submits all-day events as dates', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ allDay: true, start: '2026-10-20', end: '2026-10-20' })
    );
  });

  it('shows a notification with the title and the first occurrence', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await submit(user);

    expect(await screen.findByText('Event created')).toBeInTheDocument();
    expect(screen.getByText('Team sync · Tue, Oct 20, 2026, 10:00')).toBeInTheDocument();
  });

  it('shows the submitted event as JSON under the form', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await submit(user);

    expect(screen.getByLabelText('Submitted event')).toHaveTextContent(
      '"start": "2026-10-20T10:00:00+02:00"'
    );
  });

  it('keeps the values after submit', async () => {
    const { user } = renderForm();
    await fillEvent(user, '2026-10-20 10:00');
    await submit(user);

    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveValue('Team sync');
  });
});
