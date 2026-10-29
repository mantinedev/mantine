import { render, screen, userEvent, within } from '@test-utils';
import { ConferenceProgram } from './ConferenceProgram';
import { AGENDA_STORAGE_KEY } from './use-agenda';

// Today is Thursday, October 29: the conference runs Friday 30 and Saturday 31
const NOW = new Date(2026, 9, 29, 12, 0, 0);

function renderProgram() {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const view = render(<ConferenceProgram />);
  return { user, ...view };
}

function talk(title: string) {
  return screen.getByRole('button', { name: (name) => name.startsWith(`${title},`) });
}

function queryTalk(title: string) {
  return screen.queryByRole('button', { name: (name) => name.startsWith(`${title},`) });
}

function agenda() {
  return screen.getByRole('region', { name: 'My agenda' });
}

function seedAgenda(talkIds: string[]) {
  window.localStorage.setItem(AGENDA_STORAGE_KEY, JSON.stringify(talkIds));
}

async function openTalk(user: ReturnType<typeof userEvent.setup>, title: string) {
  await user.click(talk(title));
  return screen.getByRole('dialog');
}

beforeEach(() => {
  jest.useFakeTimers({ now: NOW, advanceTimers: true });
});

afterEach(() => {
  jest.useRealTimers();
  window.localStorage.clear();
});

describe('program', () => {
  it('shows the four stages', () => {
    renderProgram();
    ['Main hall', 'Workshop room', 'Room A', 'Room B'].forEach((stage) =>
      expect(screen.getByText(stage)).toBeInTheDocument()
    );
  });

  it('opens on the first day of the conference, tomorrow', () => {
    renderProgram();
    expect(screen.getByRole('button', { name: 'Day 1 · Fri, Oct 30' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(talk('Opening keynote: The web in 2027')).toBeInTheDocument();
  });

  it('shows the talks of the second day when Day 2 is selected', async () => {
    const { user } = renderProgram();
    await user.click(screen.getByRole('button', { name: 'Day 2 · Sat, Oct 31' }));

    expect(talk('Keynote: Building with AI responsibly')).toBeInTheDocument();
    expect(queryTalk('Opening keynote: The web in 2027')).not.toBeInTheDocument();
  });

  it('shows lunch on every stage', () => {
    renderProgram();
    expect(screen.getAllByText('Lunch')).toHaveLength(4);
  });

  it('shows the initials of every speaker on a talk', () => {
    renderProgram();
    const card = talk('Shipping LLM features without regret');
    expect(within(card).getByText('NH')).toBeInTheDocument();
    expect(within(card).getByText('OG')).toBeInTheDocument();
  });

  it('shows the track on a talk', () => {
    renderProgram();
    expect(
      within(talk('Postgres is all you need, mostly')).getByText('Backend')
    ).toBeInTheDocument();
  });

  it('does not let talks be dragged', () => {
    renderProgram();
    expect(talk('Postgres is all you need, mostly')).not.toHaveAttribute('draggable', 'true');
  });
});

describe('track filter', () => {
  it('dims the talks of an unchecked track', async () => {
    const { user } = renderProgram();
    await user.click(screen.getByRole('checkbox', { name: 'Backend' }));
    expect(talk('Postgres is all you need, mostly')).toHaveAttribute('data-dimmed');
  });

  it('keeps the talks of checked tracks highlighted', async () => {
    const { user } = renderProgram();
    await user.click(screen.getByRole('checkbox', { name: 'Backend' }));
    expect(talk('Opening keynote: The web in 2027')).not.toHaveAttribute('data-dimmed');
  });
});

describe('talk details', () => {
  it('opens the talk with its abstract when it is clicked', async () => {
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');

    expect(
      within(dialog).getByRole('heading', { name: 'Postgres is all you need, mostly' })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Queues, search and caching inside one database/)
    ).toBeInTheDocument();
  });

  it('lists the speakers with their companies', async () => {
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Shipping LLM features without regret');

    expect(within(dialog).getByText('Nadia Haddad')).toBeInTheDocument();
    expect(within(dialog).getByText('Hugging Face')).toBeInTheDocument();
    expect(within(dialog).getByText('Oliver Grant')).toBeInTheDocument();
    expect(within(dialog).getByText('GitHub')).toBeInTheDocument();
  });

  it('shows the day, time, stage and level', async () => {
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Shipping LLM features without regret');

    expect(within(dialog).getByText('Fri, Oct 30, 11:30–12:15')).toBeInTheDocument();
    expect(within(dialog).getByText('Main hall')).toBeInTheDocument();
    expect(within(dialog).getByText('Intermediate')).toBeInTheDocument();
  });

  it('turns the add button into a remove button once the talk is added', async () => {
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');
    await user.click(within(dialog).getByRole('button', { name: 'Add to my agenda' }));

    expect(
      within(dialog).getByRole('button', { name: 'Remove from my agenda' })
    ).toBeInTheDocument();
  });

  it('offers to remove a talk that is already in the agenda', async () => {
    seedAgenda(['day1-main-1000']);
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');

    expect(
      within(dialog).getByRole('button', { name: 'Remove from my agenda' })
    ).toBeInTheDocument();
  });
});

describe('my agenda', () => {
  it('lists a talk added from its details', async () => {
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');
    await user.click(within(dialog).getByRole('button', { name: 'Add to my agenda' }));

    expect(within(agenda()).getByText('Postgres is all you need, mostly')).toBeInTheDocument();
  });

  it('drops a talk removed from its details', async () => {
    seedAgenda(['day1-main-1000']);
    const { user } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');
    await user.click(within(dialog).getByRole('button', { name: 'Remove from my agenda' }));

    expect(
      within(agenda()).queryByText('Postgres is all you need, mostly')
    ).not.toBeInTheDocument();
  });

  it('drops a talk removed from the agenda list', async () => {
    seedAgenda(['day1-main-1000']);
    const { user } = renderProgram();
    await user.click(
      within(agenda()).getByRole('button', {
        name: 'Remove Postgres is all you need, mostly from my agenda',
      })
    );

    expect(
      within(agenda()).queryByText('Postgres is all you need, mostly')
    ).not.toBeInTheDocument();
  });

  it('keeps the added talks after a page reload', async () => {
    const { user, unmount } = renderProgram();
    const dialog = await openTalk(user, 'Postgres is all you need, mostly');
    await user.click(within(dialog).getByRole('button', { name: 'Add to my agenda' }));
    unmount();

    renderProgram();
    expect(within(agenda()).getByText('Postgres is all you need, mostly')).toBeInTheDocument();
  });

  it('groups the talks by day', () => {
    seedAgenda(['day2-main-0900', 'day1-main-1000']);
    renderProgram();

    expect(
      within(screen.getByRole('region', { name: 'Fri, Oct 30' })).getByText(
        'Postgres is all you need, mostly'
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole('region', { name: 'Sat, Oct 31' })).getByText(
        'Keynote: Building with AI responsibly'
      )
    ).toBeInTheDocument();
  });

  it('sorts the talks of a day by time', () => {
    seedAgenda(['day1-main-1630', 'day1-room-b-0900', 'day1-main-1130']);
    renderProgram();

    const items = within(screen.getByRole('region', { name: 'Fri, Oct 30' })).getAllByRole(
      'listitem'
    );

    expect(items.map((item) => item.textContent)).toEqual([
      expect.stringContaining('Typography for developers'),
      expect.stringContaining('Shipping LLM features without regret'),
      expect.stringContaining('AI pair programming: a field report'),
    ]);
  });

  it('warns when two talks in the agenda overlap', () => {
    seedAgenda(['day1-main-0900', 'day1-room-b-0900']);
    renderProgram();

    expect(
      within(agenda()).getByText('Overlaps with Typography for developers')
    ).toBeInTheDocument();
    expect(
      within(agenda()).getByText('Overlaps with Opening keynote: The web in 2027')
    ).toBeInTheDocument();
  });

  it('does not warn about talks that follow each other', () => {
    seedAgenda(['day1-main-0900', 'day1-main-1000']);
    renderProgram();

    expect(within(agenda()).queryByText(/Overlaps with/)).not.toBeInTheDocument();
  });
});
