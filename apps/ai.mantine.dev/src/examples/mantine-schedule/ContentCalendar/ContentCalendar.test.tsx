import { act, fireEvent, render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ContentCalendar } from './ContentCalendar';

// Thursday, October 29 2026: October posts before today are published, the newsletter goes
// out on Tuesdays (Oct 6, 13, 20, 27 published, Nov 3 onwards scheduled)
const NOW = new Date(2026, 9, 29, 12, 0, 0);

interface PostJson {
  id: string;
  title: string;
  channel: string;
  author: string;
  status: string;
  start: string;
  seriesId?: string;
}

function setup() {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(
    <>
      <Notifications />
      <ContentCalendar />
    </>
  );
  return user;
}

function getPosts(): PostJson[] {
  return JSON.parse(screen.getByLabelText('Posts in view').textContent!);
}

function findPost(title: string) {
  return getPosts().find((post) => post.title === title);
}

function getEvent(title: string) {
  return screen.getByRole('button', { name: new RegExp(`^${title},`) });
}

function getDrafts() {
  return screen.getByRole('region', { name: 'Unscheduled drafts' });
}

function createDataTransfer() {
  const data: Record<string, string> = {};
  return {
    dropEffect: 'none',
    effectAllowed: 'all',
    get types() {
      return Object.keys(data);
    },
    setData: (type: string, value: string) => {
      data[type] = value;
    },
    getData: (type: string) => data[type] ?? '',
    clearData: () => {},
  };
}

function drag(source: HTMLElement, target: HTMLElement) {
  const dataTransfer = createDataTransfer();
  act(() => {
    fireEvent.dragStart(source, { dataTransfer });
  });
  act(() => {
    fireEvent.dragOver(target, { dataTransfer });
  });
  act(() => {
    fireEvent.drop(target, { dataTransfer });
  });
  act(() => {
    fireEvent.dragEnd(source, { dataTransfer });
  });
}

async function saveForm(user: ReturnType<typeof userEvent.setup>, buttonName = 'Save changes') {
  await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: buttonName }));
}

async function replaceTitle(user: ReturnType<typeof userEvent.setup>, title: string) {
  const field = within(screen.getByRole('dialog')).getByRole('textbox', { name: 'Title' });
  await user.clear(field);
  await user.type(field, title);
}

async function chooseScope(user: ReturnType<typeof userEvent.setup>, scope: string) {
  const dialog = screen.getByRole('dialog', { name: 'Change newsletter issue' });
  await user.click(within(dialog).getByRole('radio', { name: scope }));
  await user.click(within(dialog).getByRole('button', { name: 'Apply' }));
}

beforeAll(() => {
  // jsdom has no scrolling; the week view scrolls its grid to startScrollTime
  Element.prototype.scrollTo = () => {};
});

beforeEach(() => {
  jest.useFakeTimers({ now: NOW, advanceTimers: true });
});

afterEach(() => {
  act(() => notifications.clean());
  jest.useRealTimers();
});

describe('ContentCalendar', () => {
  describe('calendar', () => {
    it('opens on the current month', () => {
      setup();
      expect(screen.getByText('October 2026')).toBeInTheDocument();
    });

    it('shows the title, channel and status of each post', () => {
      setup();
      expect(getEvent('Q4 product roadmap')).toHaveAccessibleName(
        'Q4 product roadmap, Blog, Published'
      );
    });

    it('moves to the next month with the next button', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(screen.getByText('November 2026')).toBeInTheDocument();
    });

    it('shows the week range in the week view', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Week' }));
      expect(screen.getByText('Oct 26 – Nov 1, 2026')).toBeInTheDocument();
    });

    it('returns to the current month with the today button', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      await user.click(screen.getByRole('button', { name: 'Today' }));
      expect(screen.getByText('October 2026')).toBeInTheDocument();
    });

    it('lists the posts of the month in the agenda view', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Agenda' }));
      expect(
        screen.getByRole('button', { name: 'Conference recap, LinkedIn, Published' })
      ).toBeInTheDocument();
    });

    it('does not let published posts be dragged', () => {
      setup();
      expect(getEvent('Q4 product roadmap')).toHaveAttribute('draggable', 'false');
    });

    it('lets scheduled posts be dragged', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(getEvent('Release notes 4.2')).toHaveAttribute('draggable', 'true');
    });
  });

  describe('posts of the visible range', () => {
    it('shows the posts of the visible range as JSON', () => {
      setup();
      expect(findPost('Q4 product roadmap')).toEqual({
        id: 'post-1',
        title: 'Q4 product roadmap',
        channel: 'blog',
        author: 'Maya Chen',
        status: 'published',
        start: '2026-10-02 09:00:00',
      });
    });

    it('includes newsletter issues generated by the series', () => {
      setup();
      expect(getPosts().find((post) => post.start === '2026-11-03 10:00:00')).toMatchObject({
        title: 'Weekly newsletter',
        seriesId: 'newsletter',
        status: 'scheduled',
      });
    });

    it('leaves out posts after the visible range', () => {
      setup();
      expect(findPost('Security practices we follow')).toBeUndefined();
    });

    it('updates the JSON when the range changes', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(findPost('Security practices we follow')).toMatchObject({ status: 'draft' });
    });
  });

  describe('sidebar', () => {
    it('lists the unscheduled drafts', () => {
      setup();
      expect(within(getDrafts()).getAllByRole('button')).toHaveLength(6);
    });

    it('hides posts of unchecked channels from the calendar', async () => {
      const user = setup();
      await user.click(screen.getByRole('checkbox', { name: 'Blog' }));
      expect(
        screen.queryByRole('button', { name: /^Q4 product roadmap,/ })
      ).not.toBeInTheDocument();
    });

    it('hides posts of unchecked channels from the JSON', async () => {
      const user = setup();
      await user.click(screen.getByRole('checkbox', { name: 'Blog' }));
      expect(getPosts().some((post) => post.channel === 'blog')).toBe(false);
    });

    it('hides drafts of unchecked channels', async () => {
      const user = setup();
      await user.click(screen.getByRole('checkbox', { name: 'Instagram' }));
      expect(within(getDrafts()).queryByText('Customer quote cards')).not.toBeInTheDocument();
    });

    it('keeps posts of several checked channels', async () => {
      const user = setup();
      await user.click(screen.getByRole('checkbox', { name: 'Instagram' }));
      await user.click(screen.getByRole('checkbox', { name: 'Newsletter' }));
      expect(new Set(getPosts().map((post) => post.channel))).toEqual(
        new Set(['blog', 'linkedin'])
      );
    });
  });

  describe('post form', () => {
    it('opens the post with its values when it is clicked', async () => {
      const user = setup();
      await user.click(getEvent('Conference recap'));
      const dialog = screen.getByRole('dialog', { name: 'Edit post' });
      expect(within(dialog).getByRole('textbox', { name: 'Title' })).toHaveValue(
        'Conference recap'
      );
    });

    it('saves the edited title', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      await user.click(getEvent('Release notes 4.2'));
      await replaceTitle(user, 'Release notes 4.2.1');
      await saveForm(user);
      expect(findPost('Release notes 4.2.1')).toMatchObject({
        id: 'post-12',
        start: '2026-11-02 09:00:00',
      });
    });

    it('saves the edited status', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      await user.click(getEvent('Release notes 4.2'));
      await user.click(within(screen.getByRole('dialog')).getByRole('radio', { name: 'Draft' }));
      await saveForm(user);
      expect(findPost('Release notes 4.2')).toMatchObject({ status: 'draft' });
    });

    it('shows a notification after a post is saved', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      await user.click(getEvent('Release notes 4.2'));
      await saveForm(user);
      expect(screen.getByText('Post updated')).toBeInTheDocument();
    });

    it('does not let the date of a published post change', async () => {
      const user = setup();
      await user.click(getEvent('Conference recap'));
      expect(screen.getByText('Published posts cannot be moved')).toBeInTheDocument();
    });

    it('opens an empty form with New post', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'New post' }));
      const dialog = screen.getByRole('dialog', { name: 'New post' });
      expect(within(dialog).getByRole('textbox', { name: 'Title' })).toHaveValue('');
    });

    it('requires a title', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'New post' }));
      await saveForm(user, 'Create post');
      expect(screen.getByText('Enter a title')).toBeInTheDocument();
    });

    it('requires a date for a scheduled post', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'New post' }));
      await user.click(screen.getByRole('radio', { name: 'Scheduled' }));
      await saveForm(user, 'Create post');
      // the error under the date input makes its popover reposition on a timer
      await act(() => jest.runOnlyPendingTimersAsync());
      expect(screen.getByText('Pick a date, or save the post as a draft')).toBeInTheDocument();
    });

    it('adds a new post without a date to the unscheduled drafts', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'New post' }));
      await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Launch checklist');
      await user.click(screen.getByRole('combobox', { name: 'Channel' }));
      await user.click(await screen.findByRole('option', { name: 'Blog' }));
      await saveForm(user, 'Create post');
      expect(within(getDrafts()).getByText('Launch checklist')).toBeInTheDocument();
    });

    it('creates a post on the clicked day', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'October 30, 2026' }));
      await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Halloween reel');
      await user.click(screen.getByRole('combobox', { name: 'Channel' }));
      await user.click(await screen.findByRole('option', { name: 'Instagram' }));
      await saveForm(user, 'Create post');
      expect(findPost('Halloween reel')).toMatchObject({
        channel: 'instagram',
        status: 'draft',
        start: '2026-10-30 09:00:00',
      });
    });
  });

  describe('newsletter series', () => {
    async function editFirstUpcomingIssue(user: ReturnType<typeof userEvent.setup>, title: string) {
      const issues = screen.getAllByRole('button', { name: /^Weekly newsletter,/ });
      await user.click(issues[0]);
      await replaceTitle(user, title);
      await saveForm(user);
    }

    it('asks whether an edit applies to the issue or the series', async () => {
      const user = setup();
      await editFirstUpcomingIssue(user, 'Black Friday issue');
      expect(screen.getByRole('dialog', { name: 'Change newsletter issue' })).toBeInTheDocument();
    });

    it('changes only the edited issue', async () => {
      const user = setup();
      await editFirstUpcomingIssue(user, 'Black Friday issue');
      await chooseScope(user, 'This issue only');
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(getPosts().filter((post) => post.title === 'Black Friday issue')).toEqual([
        expect.objectContaining({ start: '2026-11-03 10:00:00', seriesId: 'newsletter' }),
      ]);
    });

    it('changes every generated issue of the series', async () => {
      const user = setup();
      await editFirstUpcomingIssue(user, 'Weekly digest');
      await chooseScope(user, 'The whole series');
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(getPosts().find((post) => post.start === '2026-11-17 10:00:00')).toMatchObject({
        title: 'Weekly digest',
      });
    });

    it('keeps the titles of issues that have their own title when the series changes', async () => {
      const user = setup();
      await editFirstUpcomingIssue(user, 'Weekly digest');
      await chooseScope(user, 'The whole series');
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(getPosts().find((post) => post.start === '2026-11-10 10:00:00')).toMatchObject({
        title: 'Issue: Release 4.2 is here',
      });
    });

    it('leaves the series unchanged when the question is cancelled', async () => {
      const user = setup();
      await editFirstUpcomingIssue(user, 'Black Friday issue');
      await user.click(
        within(screen.getByRole('dialog', { name: 'Change newsletter issue' })).getByRole(
          'button',
          { name: 'Cancel' }
        )
      );
      expect(findPost('Black Friday issue')).toBeUndefined();
    });

    it('asks whether a moved issue moves alone or with the series', async () => {
      setup();
      const [issue] = screen.getAllByRole('button', { name: /^Weekly newsletter,/ });
      drag(issue, screen.getByRole('button', { name: 'November 4, 2026' }));
      expect(screen.getByRole('dialog', { name: 'Change newsletter issue' })).toBeInTheDocument();
    });

    it('moves the whole series to the new weekday', async () => {
      const user = setup();
      const [issue] = screen.getAllByRole('button', { name: /^Weekly newsletter,/ });
      drag(issue, screen.getByRole('button', { name: 'November 4, 2026' }));
      await chooseScope(user, 'The whole series');
      await user.click(screen.getByRole('button', { name: 'Next' }));
      expect(getPosts().find((post) => post.start === '2026-11-18 10:00:00')).toMatchObject({
        title: 'Weekly newsletter',
      });
    });
  });

  describe('drag and drop', () => {
    it('moves a scheduled post to the day it is dropped on', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      drag(getEvent('Release notes 4.2'), screen.getByRole('button', { name: 'November 4, 2026' }));
      expect(findPost('Release notes 4.2')).toMatchObject({ start: '2026-11-04 09:00:00' });
    });

    it('shows a notification after a post is moved', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      drag(getEvent('Release notes 4.2'), screen.getByRole('button', { name: 'November 4, 2026' }));
      expect(screen.getByText('Post moved')).toBeInTheDocument();
    });

    it('schedules an unscheduled draft on the day it is dropped on', () => {
      setup();
      drag(
        within(getDrafts()).getByRole('button', { name: /Interview with our CTO/ }),
        screen.getByRole('button', { name: 'October 30, 2026' })
      );
      expect(findPost('Interview with our CTO')).toMatchObject({
        status: 'draft',
        start: '2026-10-30 09:00:00',
      });
    });

    it('removes a scheduled draft from the sidebar', () => {
      setup();
      drag(
        within(getDrafts()).getByRole('button', { name: /Interview with our CTO/ }),
        screen.getByRole('button', { name: 'October 30, 2026' })
      );
      expect(within(getDrafts()).queryByText('Interview with our CTO')).not.toBeInTheDocument();
    });

    it('unschedules a draft dropped on the sidebar', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      drag(getEvent('Security practices we follow'), getDrafts());
      expect(within(getDrafts()).getByText('Security practices we follow')).toBeInTheDocument();
    });

    it('removes an unscheduled draft from the calendar', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      drag(getEvent('Security practices we follow'), getDrafts());
      expect(findPost('Security practices we follow')).toBeUndefined();
    });

    it('does not unschedule a scheduled post dropped on the sidebar', async () => {
      const user = setup();
      await user.click(screen.getByRole('button', { name: 'Next' }));
      drag(getEvent('Release notes 4.2'), getDrafts());
      expect(findPost('Release notes 4.2')).toMatchObject({ status: 'scheduled' });
    });
  });
});
