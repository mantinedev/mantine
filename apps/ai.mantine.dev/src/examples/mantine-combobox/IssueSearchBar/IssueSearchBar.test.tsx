import { render, screen, userEvent, within } from '@test-utils';
import { IssueSearchBar } from './IssueSearchBar';

// Monday, October 26 2026: this week is Oct 26 – Nov 1, next week is Nov 2 – Nov 8
const TODAY = new Date(2026, 9, 26, 12);

function setup() {
  const user = userEvent.setup();
  render(<IssueSearchBar />);
  return { user, input: screen.getByLabelText('Search issues') };
}

const optionNames = () => screen.queryAllByRole('option').map((option) => option.textContent);
const pill = (token: string) => screen.queryByLabelText(`Remove ${token}`);
const resultCount = () => screen.getByText(/^\d+ issues?$/).textContent;
const resultTitles = () =>
  within(screen.getByRole('list', { name: 'Issues' }))
    .getAllByRole('heading')
    .map((heading) => heading.textContent);

async function search(user: ReturnType<typeof userEvent.setup>, input: HTMLElement, query: string) {
  await user.clear(input);
  await user.type(input, `${query}{Enter}`);
}

beforeEach(() => {
  // Only Date is faked: fake timers delay the dropdown's position updates past act()
  jest.useFakeTimers({
    now: TODAY,
    doNotFake: [
      'hrtime',
      'nextTick',
      'performance',
      'queueMicrotask',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'requestIdleCallback',
      'cancelIdleCallback',
      'setImmediate',
      'clearImmediate',
      'setInterval',
      'clearInterval',
      'setTimeout',
      'clearTimeout',
    ],
  });
});

afterEach(() => {
  jest.useRealTimers();
});

describe('suggestions', () => {
  it('lists the filter keys with descriptions when the empty input is focused', async () => {
    const { user, input } = setup();
    await user.click(input);

    expect(optionNames()).toEqual([
      'status:Open, in progress or closed',
      'author:Who created the issue',
      'assignee:Who works on the issue',
      'label:Issue labels',
      'priority:Urgent, high, medium or low',
      'due:Due date relative to today',
    ]);
  });

  it('lists the 3 newest recent searches under the keys of the empty input', async () => {
    const { user, input } = setup();
    for (const query of ['bug', 'csv', 'login', 'modal']) {
      await search(user, input, query);
    }

    await user.click(screen.getByLabelText('Clear search'));

    const recent = within(screen.getByRole('group', { name: 'Recent searches' })).getAllByRole(
      'option'
    );
    expect(recent.map((option) => option.textContent)).toEqual(['modal', 'login', 'csv']);
  });

  it('suggests the keys that start with the typed word', async () => {
    const { user, input } = setup();
    await user.type(input, 'a');

    expect(optionNames()).toEqual([
      'author:Who created the issue',
      'assignee:Who works on the issue',
    ]);
  });

  it('inserts the key and suggests its values when a key is picked', async () => {
    const { user, input } = setup();
    await user.type(input, 'pri');
    await user.click(screen.getByRole('option', { name: /^priority:/ }));

    expect(input).toHaveValue('priority:');
    expect(optionNames()).toEqual(['Urgent', 'High', 'Medium', 'Low']);
  });

  it('filters the values by the text after the colon', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:per');

    expect(optionNames()).toEqual(['performance']);
  });

  it('finds members by name', async () => {
    const { user, input } = setup();
    await user.type(input, 'author:lovel');

    expect(optionNames()).toEqual(['ALAda Lovelacealovelace']);
  });

  it('finds members by username', async () => {
    const { user, input } = setup();
    await user.type(input, 'author:ghop');

    expect(optionNames()).toEqual(['GHGrace Hopperghopper']);
  });

  it('offers no assignee as an assignee value', async () => {
    const { user, input } = setup();
    await user.type(input, 'assignee:no');

    expect(optionNames()).toEqual(['No assignee']);
  });

  it('turns the picked value into a token', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:bu');
    await user.click(screen.getByRole('option', { name: 'bug' }));

    expect(pill('label:bug')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('does not suggest a label that is already used', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:bug label:');

    expect(optionNames()).not.toContain('bug');
    expect(optionNames()).toContain('ui');
  });

  it('closes the dropdown and keeps the text on Escape', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:');
    await user.keyboard('{Escape}');

    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(input).toHaveValue('label:');
  });
});

describe('typed tokens', () => {
  it('creates a token from a complete key:value followed by a space', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:open ');

    expect(pill('status:open')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('creates an author token from a member first name', async () => {
    const { user, input } = setup();
    await user.type(input, 'author:ada ');

    expect(pill('author:alovelace')).toBeInTheDocument();
  });

  it('keeps an unknown key as plain text', async () => {
    const { user, input } = setup();
    await user.type(input, 'milestone:v2 ');

    expect(input).toHaveValue('milestone:v2 ');
    expect(pill('milestone:v2')).not.toBeInTheDocument();
  });

  it('keeps an unknown value as plain text', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:done ');

    expect(input).toHaveValue('status:done ');
    expect(pill('status:done')).not.toBeInTheDocument();
  });

  it('replaces the status token with a new one', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:open status:closed ');

    expect(pill('status:open')).not.toBeInTheDocument();
    expect(pill('status:closed')).toBeInTheDocument();
  });

  it('replaces the author token with a new one', async () => {
    const { user, input } = setup();
    await user.type(input, 'author:ghopper author:tbl ');

    expect(pill('author:ghopper')).not.toBeInTheDocument();
    expect(pill('author:tbl')).toBeInTheDocument();
  });

  it('keeps several label tokens', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:bug label:ui ');

    expect(pill('label:bug')).toBeInTheDocument();
    expect(pill('label:ui')).toBeInTheDocument();
  });
});

describe('editing', () => {
  it('turns the last token back into text on Backspace at the start of the text', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:open label:bug ');
    await user.keyboard('{Backspace}');

    expect(pill('label:bug')).not.toBeInTheDocument();
    expect(pill('status:open')).toBeInTheDocument();
    expect(input).toHaveValue('label:bug');
  });

  it('removes a token with its remove button', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:open label:bug ');
    await user.click(screen.getByLabelText('Remove status:open'));

    expect(pill('status:open')).not.toBeInTheDocument();
    expect(pill('label:bug')).toBeInTheDocument();
  });

  it('removes the whole query with the clear button', async () => {
    const { user, input } = setup();
    await user.type(input, 'status:open crash');
    await user.click(screen.getByLabelText('Clear search'));

    expect(pill('status:open')).not.toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});

describe('running a search', () => {
  it('runs the search on Enter when no suggestion is highlighted', async () => {
    const { user, input } = setup();
    await user.type(input, 'csv{Enter}');

    expect(resultTitles()).toEqual(['Export reports as CSV', 'Add CSV import for contacts']);
  });

  it('picks the highlighted suggestion on Enter instead of searching', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:bug');
    await user.keyboard('{ArrowDown}{Enter}');

    expect(pill('label:bug')).toBeInTheDocument();
    expect(resultCount()).toBe('30 issues');
  });

  it('turns typed filters into tokens when the search runs', async () => {
    const { user, input } = setup();
    await user.type(input, 'priority:urgent{Enter}');

    expect(pill('priority:urgent')).toBeInTheDocument();
    expect(resultCount()).toBe('4 issues');
  });

  it('saves a repeated search once, as the newest', async () => {
    const { user, input } = setup();
    for (const query of ['bug', 'csv', 'bug']) {
      await search(user, input, query);
    }

    await user.click(screen.getByLabelText('Clear search'));

    const recent = within(screen.getByRole('group', { name: 'Recent searches' })).getAllByRole(
      'option'
    );
    expect(recent.map((option) => option.textContent)).toEqual(['bug', 'csv']);
  });

  it('restores the tokens and text of a picked recent search', async () => {
    const { user, input } = setup();
    await user.type(input, 'label:security login{Enter}');
    await user.click(screen.getByLabelText('Clear search'));
    await user.click(screen.getByRole('option', { name: 'label:security login' }));

    expect(pill('label:security')).toBeInTheDocument();
    expect(input).toHaveValue('login');
    expect(resultTitles()).toEqual([
      'Login form crashes on empty password',
      'Two-factor login with hardware keys',
    ]);
  });
});

describe('results', () => {
  it('lists all 30 issues before a search runs', () => {
    setup();

    expect(resultCount()).toBe('30 issues');
    expect(resultTitles()).toHaveLength(30);
  });

  it('matches free text against the issue title', async () => {
    const { user, input } = setup();
    await search(user, input, 'password');

    expect(resultTitles()).toEqual([
      'Login form crashes on empty password',
      'Session token is not rotated after password change',
      'Rate limit the password reset endpoint',
    ]);
  });

  it('combines tokens of the same key with OR', async () => {
    const { user, input } = setup();
    await search(user, input, 'label:bug label:ui');

    expect(resultCount()).toBe('12 issues');
  });

  it('combines tokens of different keys with AND', async () => {
    const { user, input } = setup();
    await search(user, input, 'label:bug status:open');

    expect(resultCount()).toBe('7 issues');
  });

  it('finds issues without an assignee', async () => {
    const { user, input } = setup();
    await search(user, input, 'assignee:none');

    expect(resultCount()).toBe('7 issues');
  });

  it('finds issues due today', async () => {
    const { user, input } = setup();
    await search(user, input, 'due:today');

    expect(resultTitles()).toEqual([
      'Login form crashes on empty password',
      'Modal closes when selecting text inside it',
    ]);
  });

  it('finds issues due from Monday to Sunday of the current week', async () => {
    const { user, input } = setup();
    await search(user, input, 'due:this-week');

    expect(resultCount()).toBe('8 issues');
  });

  it('finds issues due next week', async () => {
    const { user, input } = setup();
    await search(user, input, 'due:next-week');

    expect(resultCount()).toBe('5 issues');
  });

  it('finds unfinished issues past their due date', async () => {
    const { user, input } = setup();
    await search(user, input, 'due:overdue');

    expect(resultTitles()).toEqual([
      'Dashboard loads slowly with many projects',
      'Rate limit the password reset endpoint',
      'Charts flicker on window resize',
      'Payment page shows wrong currency',
      'Infinite scroll for the activity feed',
    ]);
  });

  it('finds issues without a due date', async () => {
    const { user, input } = setup();
    await search(user, input, 'due:none');

    expect(resultCount()).toBe('6 issues');
  });

  it('shows a message when nothing matches', async () => {
    const { user, input } = setup();
    await search(user, input, 'nonexistent');

    expect(resultCount()).toBe('0 issues');
    expect(screen.getByText('No issues match this search')).toBeInTheDocument();
  });

  it('updates the results when a token is removed', async () => {
    const { user, input } = setup();
    await search(user, input, 'label:bug status:open');
    await user.click(screen.getByLabelText('Remove status:open'));

    expect(resultCount()).toBe('8 issues');
  });
});
