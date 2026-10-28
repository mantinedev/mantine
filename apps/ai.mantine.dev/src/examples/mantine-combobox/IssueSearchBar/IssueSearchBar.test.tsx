import { render, screen, userEvent, within } from '@test-utils';
import { IssueSearchBar, RECENT_STORAGE_KEY } from './IssueSearchBar';

// Wednesday: this week is Oct 26 – Nov 1, next week is Nov 2 – Nov 8
const TODAY = new Date(2026, 9, 28, 12);

function setup() {
  const user = userEvent.setup();
  const view = render(<IssueSearchBar />);
  return { user, ...view };
}

const input = () => screen.getByLabelText('Search issues');
const option = (name: string | RegExp) => screen.getByRole('option', { name });
const optionNames = () => screen.queryAllByRole('option').map((item) => item.textContent);
const removeButton = (token: string) => screen.getByRole('button', { name: `Remove ${token}` });
const tokenRemoveButtons = () => screen.queryAllByRole('button', { name: /^Remove / });
const issueNumbers = () =>
  within(screen.getByRole('list', { name: 'Issues' }))
    .getAllByRole('listitem')
    .map((item) => Number(/^#(\d+)/.exec(item.getAttribute('aria-label')!)![1]));

async function search(user: ReturnType<typeof userEvent.setup>, query: string) {
  await user.clear(input());
  await user.type(input(), `${query}{Enter}`);
}

beforeEach(() => {
  // Only Date is faked: floating-ui positions the dropdown with real timers
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
  window.localStorage.clear();
});

describe('suggestions', () => {
  it('lists the filter keys with descriptions when the empty input is focused', async () => {
    const { user } = setup();
    await user.click(input());

    expect(optionNames()).toEqual([
      'status:Open, in progress or closed',
      'author:Team member who opened the issue',
      'assignee:Team member working on the issue',
      'label:Issue label',
      'priority:Urgent, high, medium or low',
      'due:Due date relative to today',
    ]);
  });

  it('lists up to 3 recent searches under the keys of the empty input', async () => {
    const { user } = setup();
    for (const query of ['crash', 'login', 'docs', 'slow']) {
      await search(user, query);
    }
    await user.clear(input());
    await user.click(input());

    const recent = within(screen.getByRole('group', { name: 'Recent searches' }));
    expect(recent.getAllByRole('option').map((item) => item.textContent)).toEqual([
      'slow',
      'docs',
      'login',
    ]);
  });

  it('suggests the keys that start with the typed word', async () => {
    const { user } = setup();
    await user.type(input(), 'a');

    expect(optionNames()).toEqual([
      'author:Team member who opened the issue',
      'assignee:Team member working on the issue',
    ]);
  });

  it('shows no suggestions for a word that is not the start of a key', async () => {
    const { user } = setup();
    await user.type(input(), 'crash');

    expect(screen.queryAllByRole('option')).toHaveLength(0);
  });

  it('inserts the key and suggests its values when a key is picked', async () => {
    const { user } = setup();
    await user.type(input(), 'pri');
    await user.click(option(/^priority:/));

    expect(input()).toHaveValue('priority:');
    expect(optionNames()).toEqual(['Urgent', 'High', 'Medium', 'Low']);
  });

  it('highlights the first value after a key is picked, so Enter picks it', async () => {
    const { user } = setup();
    await user.type(input(), 'sta');
    await user.keyboard('{ArrowDown}{Enter}');
    await user.keyboard('{Enter}');

    expect(removeButton('status:open')).toBeInTheDocument();
  });

  it('filters the values by the text after the colon', async () => {
    const { user } = setup();
    await user.type(input(), 'priority:h');

    expect(optionNames()).toEqual(['High']);
  });

  it('matches team members by name', async () => {
    const { user } = setup();
    await user.type(input(), 'author:grace');

    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(option(/Grace Hopper/)).toBeInTheDocument();
  });

  it('matches team members by username', async () => {
    const { user } = setup();
    await user.type(input(), 'author:aturi');

    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(option(/Alan Turing/)).toBeInTheDocument();
  });

  it('offers none as an assignee', async () => {
    const { user } = setup();
    await user.type(input(), 'assignee:no');

    expect(optionNames()).toEqual(['No assignee']);
  });

  it('turns key:value into a token when a value is picked', async () => {
    const { user } = setup();
    await user.type(input(), 'crash status:');
    await user.click(option('Closed'));

    expect(removeButton('status:closed')).toBeInTheDocument();
    expect(input()).toHaveValue('crash ');
  });

  it('keeps the dropdown open with the keys after a value is picked', async () => {
    const { user } = setup();
    await user.type(input(), 'status:');
    await user.click(option('Open'));

    expect(option(/^label:/)).toBeInTheDocument();
  });
});

describe('typed tokens', () => {
  it('creates a token from a complete key:value followed by a space', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug ');

    expect(removeButton('label:bug')).toBeInTheDocument();
    expect(input()).toHaveValue('');
  });

  it('keeps an unknown value as plain text', async () => {
    const { user } = setup();
    await user.type(input(), 'status:done ');

    expect(tokenRemoveButtons()).toHaveLength(0);
    expect(input()).toHaveValue('status:done ');
  });

  it('keeps an unknown key as plain text', async () => {
    const { user } = setup();
    await user.type(input(), 'milestone:v2 ');

    expect(tokenRemoveButtons()).toHaveLength(0);
    expect(input()).toHaveValue('milestone:v2 ');
  });

  it('replaces the token of a key that allows one value', async () => {
    const { user } = setup();
    await user.type(input(), 'priority:high priority:low ');

    expect(tokenRemoveButtons().map((button) => button.getAttribute('aria-label'))).toEqual([
      'Remove priority:low',
    ]);
  });

  it('keeps several tokens of a key that can repeat', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug label:ui ');

    expect(tokenRemoveButtons().map((button) => button.getAttribute('aria-label'))).toEqual([
      'Remove label:bug',
      'Remove label:ui',
    ]);
  });

  it('does not suggest a value that is already used by a repeatable key', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug label:');

    expect(optionNames()).not.toContain('bug');
    expect(optionNames()).toContain('ui');
  });
});

describe('editing', () => {
  it('removes the last token when Backspace is pressed at the start of the text', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug status:open ');
    await user.keyboard('{Backspace}');

    expect(tokenRemoveButtons().map((button) => button.getAttribute('aria-label'))).toEqual([
      'Remove label:bug',
    ]);
  });

  it('removes a token with its remove button', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug status:open ');
    await user.click(removeButton('label:bug'));

    expect(tokenRemoveButtons().map((button) => button.getAttribute('aria-label'))).toEqual([
      'Remove status:open',
    ]);
  });

  it('removes the whole query with the clear button', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug crash');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));

    expect(tokenRemoveButtons()).toHaveLength(0);
    expect(input()).toHaveValue('');
  });

  it('closes the dropdown and keeps the text when Escape is pressed', async () => {
    const { user } = setup();
    await user.type(input(), 'sta');
    await user.keyboard('{Escape}');

    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(input()).toHaveValue('sta');
  });

  it('runs the search when Enter is pressed with no active suggestion', async () => {
    const { user } = setup();
    await user.type(input(), 'login{Enter}');

    expect(issueNumbers()).toEqual([101, 109, 130]);
  });
});

describe('recent searches', () => {
  it('lists recent searches newest first without duplicates', async () => {
    const { user } = setup();
    await search(user, 'crash');
    await search(user, 'login');
    await search(user, 'crash');
    await user.clear(input());
    await user.click(input());

    const recent = within(screen.getByRole('group', { name: 'Recent searches' }));
    expect(recent.getAllByRole('option').map((item) => item.textContent)).toEqual([
      'crash',
      'login',
    ]);
  });

  it('keeps at most 5 recent searches', async () => {
    const { user } = setup();
    for (const query of ['one', 'two', 'three', 'four', 'five', 'six']) {
      await search(user, query);
    }

    const stored = JSON.parse(window.localStorage.getItem(RECENT_STORAGE_KEY)!);
    expect(stored.map((item: { text: string }) => item.text)).toEqual([
      'six',
      'five',
      'four',
      'three',
      'two',
    ]);
  });

  it('restores the tokens and text of a picked recent search', async () => {
    const { user } = setup();
    await user.type(input(), 'label:bug login{Enter}');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    await user.click(option('label:bug login'));

    expect(removeButton('label:bug')).toBeInTheDocument();
    expect(input()).toHaveValue('login');
  });
});

describe('results', () => {
  it('shows the count of matches and lists at most 10 issues', async () => {
    setup();

    expect(screen.getByText('30 issues')).toBeInTheDocument();
    expect(issueNumbers()).toHaveLength(10);
  });

  it('filters the issues while the query is typed', async () => {
    const { user } = setup();
    await user.type(input(), 'login');

    expect(issueNumbers()).toEqual([101, 109, 130]);
  });

  it('filters the issues as soon as a token is added', async () => {
    const { user } = setup();
    await user.type(input(), 'status:clo');
    await user.keyboard('{ArrowDown}{Enter}');

    expect(issueNumbers()).toEqual([105, 111, 114, 118, 122, 127]);
  });

  it('ignores a key:value that is still being typed', async () => {
    const { user } = setup();
    await user.type(input(), 'status:op');

    expect(screen.getByText('30 issues')).toBeInTheDocument();
  });

  it('requires every key to match', async () => {
    const { user } = setup();
    await user.type(input(), 'status:open label:bug {Enter}');

    expect(issueNumbers()).toEqual([101, 106, 109, 116, 120, 125]);
  });

  it('combines repeated labels with OR', async () => {
    const { user } = setup();
    await user.type(input(), 'label:docs label:tests {Enter}');

    expect(issueNumbers()).toEqual([103, 108, 114, 120, 122, 126, 128]);
  });

  it('searches the free text in issue titles', async () => {
    const { user } = setup();
    await user.type(input(), 'status:open login{Enter}');

    expect(issueNumbers()).toEqual([101, 109]);
  });

  it('finds issues due today', async () => {
    const { user } = setup();
    await user.type(input(), 'due:today {Enter}');

    expect(issueNumbers()).toEqual([106, 118, 123]);
  });

  it('finds open issues that are past their due date', async () => {
    const { user } = setup();
    await user.type(input(), 'due:overdue {Enter}');

    expect(issueNumbers()).toEqual([101, 113, 116]);
  });

  it('finds issues due next week', async () => {
    const { user } = setup();
    await user.type(input(), 'due:next-week {Enter}');

    expect(issueNumbers()).toEqual([102, 112, 119, 121, 126, 128]);
  });

  it('finds issues without an assignee', async () => {
    const { user } = setup();
    await user.type(input(), 'assignee:none {Enter}');

    expect(issueNumbers()).toEqual([103, 110, 116, 121, 126]);
  });
});
