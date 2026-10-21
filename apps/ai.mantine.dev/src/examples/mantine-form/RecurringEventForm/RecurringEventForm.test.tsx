import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { RecurringEventForm } from './RecurringEventForm';

type User = ReturnType<typeof userEvent.setup>;

function mockBrowserTimezone(timeZone: string) {
  const options = new Intl.DateTimeFormat().resolvedOptions();
  vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions').mockReturnValue({
    ...options,
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

const textbox = (name: string) => screen.getByRole('textbox', { name });
const spinbutton = (name: string) => screen.getByRole('spinbutton', { name });
const timezoneSelect = () => screen.getByRole('combobox', { name: 'Timezone' });

/** Types `DDMMYYYY` or `DDMMYYYYHHmm` into a masked date input, starting at its day field */
async function typeDate(user: User, label: string, digits: string) {
  await user.type(spinbutton(`${label} day`), digits);
}

async function retype(user: User, name: string, digits: string) {
  await user.click(spinbutton(name));
  await user.keyboard(digits);
}

/** Error under a field, not its copy in the error summary */
function inlineError(message: string) {
  return screen.queryAllByText(message).find((element) => !element.closest('[role="alert"]'));
}

async function fillEvent(user: User) {
  await user.type(textbox('Title'), 'Team sync');
  // Wednesday, October 21, 2026, 10:00
  await typeDate(user, 'Start', '211020261000');
}

async function chooseRepeat(user: User, name: string) {
  await user.click(screen.getByRole('radio', { name }));
}

async function skipDate(user: User, name: string) {
  await user.click(screen.getByRole('button', { name: /Exceptions/ }));
  await user.click(await screen.findByRole('button', { name }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
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
  mockBrowserTimezone('Europe/Berlin');
});

afterEach(() => {
  notifications.clean();
  vi.restoreAllMocks();
});

describe('event details', () => {
  it('preselects the browser timezone when it is in the list', () => {
    renderForm();
    expect(timezoneSelect()).toHaveValue('Berlin');
  });

  it('preselects UTC when the browser timezone is not in the list', () => {
    vi.restoreAllMocks();
    mockBrowserTimezone('America/Denver');
    renderForm();
    expect(timezoneSelect()).toHaveValue('UTC');
  });

  it('sets the end one hour after the start', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261000');
    expect(spinbutton('End day')).toHaveValue('21');
    expect(spinbutton('End hours')).toHaveValue('11');
  });

  it('moves the end with the start while the end is not edited', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261000');
    await retype(user, 'Start hours', '14');
    expect(spinbutton('End hours')).toHaveValue('15');
  });

  it('keeps an edited end when the start changes', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261000');
    await retype(user, 'End hours', '16');
    await retype(user, 'Start hours', '12');
    expect(spinbutton('End hours')).toHaveValue('16');
  });

  it('hides the time parts when All day is on', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(screen.queryByRole('spinbutton', { name: 'Start hours' })).not.toBeInTheDocument();
    expect(screen.queryByRole('spinbutton', { name: 'End hours' })).not.toBeInTheDocument();
  });

  it('restores the times when All day is turned off', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Start', '211020261000');
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    expect(spinbutton('Start hours')).toHaveValue('10');
  });
});

describe('validation', () => {
  it('shows the required errors when submitted empty', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(inlineError('Enter a title')).toBeInTheDocument();
    expect(inlineError('Enter a start date and time')).toBeInTheDocument();
    expect(inlineError('Enter an end date and time')).toBeInTheDocument();
  });

  it('focuses the first invalid field', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(textbox('Title')).toHaveFocus();
  });

  it('focuses the start when the title is filled', async () => {
    const { user } = renderForm();
    await user.type(textbox('Title'), 'Team sync');
    await submit(user);
    expect(spinbutton('Start day')).toHaveFocus();
  });

  it('rejects an end earlier on the same day as the start', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await retype(user, 'End hours', '09');
    await submit(user);
    expect(inlineError('End must be after the start')).toBeInTheDocument();
  });

  it('accepts an end at an earlier time on a later day', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await retype(user, 'End day', '22');
    await retype(user, 'End hours', '09');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('rejects an all-day end date before the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await retype(user, 'End day', '20');
    await submit(user);
    expect(inlineError('End must be after the start')).toBeInTheDocument();
  });

  it('removes the error when the field is fixed', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.type(textbox('Title'), 'Team sync');
    expect(inlineError('Enter a title')).toBeUndefined();
  });

  it('lists the errors in a summary above the form', async () => {
    const { user } = renderForm();
    await submit(user);
    const summary = screen.getByRole('alert', { name: 'There is a problem' });
    expect(within(summary).getByRole('button', { name: 'Enter a title' })).toBeInTheDocument();
    expect(
      within(summary).getByRole('button', { name: 'Enter a start date and time' })
    ).toBeInTheDocument();
  });

  it('focuses a field from its entry in the error summary', async () => {
    const { user } = renderForm();
    await submit(user);
    const summary = screen.getByRole('alert', { name: 'There is a problem' });
    await user.click(within(summary).getByRole('button', { name: 'Enter an end date and time' }));
    expect(spinbutton('End day')).toHaveFocus();
  });
});

describe('repeat', () => {
  it('shows no recurrence fields when the event does not repeat', () => {
    renderForm();
    expect(screen.queryByRole('textbox', { name: 'Repeat every' })).not.toBeInTheDocument();
    expect(screen.queryByRole('radiogroup', { name: 'Ends' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Exceptions/ })).not.toBeInTheDocument();
  });

  it('shows the interval with the unit of the selected repeat', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Monthly');
    expect(textbox('Repeat every')).toHaveValue('1');
    expect(screen.getByText('months')).toBeInTheDocument();
  });

  it('rejects an empty interval', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.clear(textbox('Repeat every'));
    await submit(user);
    expect(inlineError('Enter a number from 1 to 99')).toBeInTheDocument();
  });

  it('does not accept an interval above 99', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Daily');
    await user.clear(textbox('Repeat every'));
    await user.type(textbox('Repeat every'), '150');
    expect(textbox('Repeat every')).toHaveValue('15');
  });

  it('preselects the weekday of the start for weekly events', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    expect(screen.getByRole('checkbox', { name: 'Wed' })).toBeChecked();
  });

  it('requires at least one weekday', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await submit(user);
    expect(inlineError('Pick at least one day')).toBeInTheDocument();
  });

  it('offers the day and the weekday of the start for monthly events', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    expect(screen.getByRole('radio', { name: 'Day 21 of the month' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'The third Wednesday' })).toBeInTheDocument();
  });

  it('hides the weekdays when another repeat is selected', async () => {
    const { user } = renderForm();
    await chooseRepeat(user, 'Weekly');
    await chooseRepeat(user, 'Daily');
    expect(screen.queryByRole('checkbox', { name: 'Wed' })).not.toBeInTheDocument();
  });
});

describe('series end', () => {
  it('rejects an empty number of occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await user.clear(textbox('Occurrences'));
    await submit(user);
    expect(inlineError('Enter a number from 1 to 500')).toBeInTheDocument();
  });

  it('rejects an end date that is not after the start date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await typeDate(user, 'Ends on', '21102026');
    await submit(user);
    expect(inlineError('Enter a date after the start date')).toBeInTheDocument();
  });
});

describe('preview', () => {
  it('shows the next five occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    expect(previewItems()).toEqual([
      'Wed, Oct 21, 2026, 10:00',
      'Wed, Oct 28, 2026, 10:00',
      'Wed, Nov 4, 2026, 10:00',
      'Wed, Nov 11, 2026, 10:00',
      'Wed, Nov 18, 2026, 10:00',
    ]);
  });

  it('follows the interval and the weekday of the month', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'The third Wednesday' }));
    await user.clear(textbox('Repeat every'));
    await user.type(textbox('Repeat every'), '2');
    expect(previewItems()).toEqual([
      'Wed, Oct 21, 2026, 10:00',
      'Wed, Dec 16, 2026, 10:00',
      'Wed, Feb 17, 2027, 10:00',
      'Wed, Apr 21, 2027, 10:00',
      'Wed, Jun 16, 2027, 10:00',
    ]);
  });

  it('stops after the number of occurrences', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Daily');
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await user.clear(textbox('Occurrences'));
    await user.type(textbox('Occurrences'), '2');
    expect(previewItems()).toEqual(['Wed, Oct 21, 2026, 10:00', 'Thu, Oct 22, 2026, 10:00']);
  });

  it('leaves out skipped dates', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    expect(previewItems()).not.toContain('Wed, Oct 28, 2026, 10:00');
  });

  it('shows No occurrences when the rule produces none', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    expect(screen.getByText('No occurrences')).toBeInTheDocument();
  });
});

describe('exceptions', () => {
  it('shows a skipped date as a pill', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    expect(screen.getByText('Wed, Oct 28, 2026')).toBeInTheDocument();
  });

  it('removes a skipped date', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    await user.click(screen.getByLabelText('Remove Wed, Oct 28, 2026'));
    expect(screen.queryByText('Wed, Oct 28, 2026')).not.toBeInTheDocument();
  });

  it('offers only dates of the series', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('button', { name: /Exceptions/ }));
    expect(await screen.findByRole('button', { name: '29 October 2026' })).toBeDisabled();
  });

  it('does not offer a date that is already skipped', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    await user.click(screen.getByRole('button', { name: /Exceptions/ }));
    expect(await screen.findByRole('button', { name: '28 October 2026' })).toBeDisabled();
  });

  it('rejects a skipped date that left the series after the rule changed', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    await user.click(screen.getByRole('checkbox', { name: 'Thu' }));
    await user.click(screen.getByRole('checkbox', { name: 'Wed' }));
    await submit(user);
    expect(inlineError('Skipped dates must be dates of the series')).toBeInTheDocument();
  });
});

describe('submit', () => {
  it('submits a weekly event with only the fields that apply', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.type(textbox('Location'), 'Room 4');
    await chooseRepeat(user, 'Weekly');
    await user.click(screen.getByRole('checkbox', { name: 'Fri' }));
    await user.click(screen.getByRole('radio', { name: 'After a number of occurrences' }));
    await skipDate(user, '28 October 2026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Team sync',
      description: '',
      start: '2026-10-21T10:00:00+02:00',
      end: '2026-10-21T11:00:00+02:00',
      allDay: false,
      timezone: 'Europe/Berlin',
      location: 'Room 4',
      recurrence: {
        frequency: 'weekly',
        interval: 1,
        weekdays: ['WE', 'FR'],
        ends: { type: 'after', count: 10 },
      },
      exceptions: ['2026-10-28'],
    });
  });

  it('submits the start and end in the selected timezone', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.click(timezoneSelect());
    await user.click(screen.getByRole('option', { name: 'Tokyo' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        start: '2026-10-21T10:00:00+09:00',
        end: '2026-10-21T11:00:00+09:00',
        timezone: 'Asia/Tokyo',
      })
    );
  });

  it('submits dates without times for an all-day event', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await user.click(screen.getByRole('switch', { name: 'All day' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ start: '2026-10-21', end: '2026-10-21', allDay: true })
    );
  });

  it('submits the weekday of the month for a monthly event', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Monthly');
    await user.click(screen.getByRole('radio', { name: 'The third Wednesday' }));
    await user.click(screen.getByRole('radio', { name: 'On a date' }));
    await typeDate(user, 'Ends on', '31122026');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        recurrence: {
          frequency: 'monthly',
          interval: 1,
          monthly: { type: 'weekdayOfMonth', week: 3, weekday: 'WE' },
          ends: { type: 'on', date: '2026-12-31' },
        },
      })
    );
  });

  it('leaves out the recurrence of an event that does not repeat', async () => {
    const { user, onSubmit } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '28 October 2026');
    await chooseRepeat(user, 'Does not repeat');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ recurrence: null, exceptions: [] })
    );
  });

  it('shows a notification with the title and the first occurrence', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await submit(user);
    expect(await screen.findByText('Event created')).toBeInTheDocument();
    expect(screen.getByText('Team sync · Wed, Oct 21, 2026, 10:00')).toBeInTheDocument();
  });

  it('names the first date that is not skipped in the notification', async () => {
    const { user } = renderForm();
    await fillEvent(user);
    await chooseRepeat(user, 'Weekly');
    await skipDate(user, '21 October 2026');
    await submit(user);
    expect(await screen.findByText('Team sync · Wed, Oct 28, 2026, 10:00')).toBeInTheDocument();
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
    expect(textbox('Title')).toHaveValue('Team sync');
  });
});
