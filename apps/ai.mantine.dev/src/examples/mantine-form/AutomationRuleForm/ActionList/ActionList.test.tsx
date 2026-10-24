import { act, screen, within } from '@test-utils';
import {
  action,
  actionsFieldset,
  fillRuleFields,
  pick,
  renderForm,
  select,
  setAction,
  setCondition,
  submit,
  textbox,
  type User,
} from '../test-helpers';

const addAction = (user: User) => user.click(screen.getByRole('button', { name: 'Add action' }));

async function fillConditionAndRule(user: User) {
  await fillRuleFields(user);
  await setCondition(user, { field: 'Is blocked', operator: 'is true' });
}

const ROW_HEIGHT = 100;

// jsdom has no layout: give each action row its own vertical slot so dnd-kit's
// keyboard coordinates can find the row below
function mockActionRowLayout() {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function rect(
    this: HTMLElement
  ) {
    if (!this.matches('[role="group"][aria-label^="Action "]')) {
      return DOMRect.fromRect();
    }
    const rows = Array.from(document.querySelectorAll('[role="group"][aria-label^="Action "]'));
    const top = rows.indexOf(this) * ROW_HEIGHT;
    return DOMRect.fromRect({ x: 0, y: top, width: 600, height: ROW_HEIGHT - 10 });
  });
}

beforeEach(() => {
  mockActionRowLayout();
});

afterEach(() => {
  jest.restoreAllMocks();
});

async function moveDown(user: User, number: number) {
  act(() => screen.getByRole('button', { name: `Reorder action ${number}` }).focus());
  await user.keyboard('[Space]');
  await user.keyboard('[ArrowDown]');
  await user.keyboard('[Space]');
}

const actionTypes = () =>
  screen
    .getAllByRole('combobox', { name: /^Action \d type$/ })
    .map((input) => (input as HTMLInputElement).value);

describe('action types', () => {
  it.each([
    ['Assign to member', 'combobox', 'Member'],
    ['Set priority', 'combobox', 'Priority'],
    ['Add labels', 'combobox', 'Labels'],
    ['Move to status', 'combobox', 'Status'],
    ['Post comment', 'textbox', 'Comment'],
    ['Set due date', 'textbox', 'Days from now'],
  ])('shows the parameters of %s', async (type, role, label) => {
    const { user } = renderForm();

    await setAction(user, 1, type);

    expect(within(action(1)).getByRole(role, { name: label })).toBeInTheDocument();
  });

  it('shows a channel and a message for Send Slack message', async () => {
    const { user } = renderForm();

    await setAction(user, 1, 'Send Slack message');

    expect(select('Channel', action(1))).toBeInTheDocument();
    expect(textbox('Message', action(1))).toBeInTheDocument();
  });

  it('mentions the comment placeholders', async () => {
    const { user } = renderForm();

    await setAction(user, 1, 'Post comment');

    expect(
      within(action(1)).getByText('You can use {{issue.title}} and {{issue.assignee}}')
    ).toBeInTheDocument();
  });

  it('clears the parameters when the type changes', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set priority');
    await pick(user, select('Priority', action(1)), 'High');

    await setAction(user, 1, 'Move to status');
    await setAction(user, 1, 'Set priority');

    expect(select('Priority', action(1))).toHaveValue('');
  });

  it('does not offer a type that another action already uses', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set priority');
    await addAction(user);

    await user.click(select('Action 2 type', action(2)));

    expect(screen.getByRole('option', { name: 'Set priority' })).toHaveAttribute(
      'data-combobox-disabled',
      'true'
    );
  });

  it.each(['Add labels', 'Post comment'])('offers %s more than once', async (type) => {
    const { user } = renderForm();
    await setAction(user, 1, type);
    await addAction(user);

    await setAction(user, 2, type);

    expect(select('Action 2 type', action(2))).toHaveValue(type);
  });
});

describe('list', () => {
  it('adds an empty action', async () => {
    const { user } = renderForm();

    await addAction(user);

    expect(select('Action 2 type', action(2))).toHaveValue('');
  });

  it('removes an action', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set priority');
    await addAction(user);
    await setAction(user, 2, 'Post comment');

    await user.click(screen.getByRole('button', { name: 'Remove action 1' }));

    expect(actionTypes()).toEqual(['Post comment']);
  });

  it('disables Add action at five actions', async () => {
    const { user } = renderForm();

    for (let count = 1; count < 5; count += 1) {
      await addAction(user);
    }

    expect(screen.getByRole('button', { name: 'Add action' })).toBeDisabled();
    expect(screen.getByText('A rule can have up to 5 actions')).toBeInTheDocument();
  });

  it('requires at least one action', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Remove action 1' }));

    await submit(user);

    expect(within(actionsFieldset()).getByText('Add at least one action')).toBeInTheDocument();
  });

  it('focuses Add action when there are no actions', async () => {
    const { user } = renderForm();
    await fillConditionAndRule(user);
    await user.click(screen.getByRole('button', { name: 'Remove action 1' }));

    await submit(user);

    expect(screen.getByRole('button', { name: 'Add action' })).toHaveFocus();
  });

  it('reorders actions with the keyboard', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set priority');
    await addAction(user);
    await setAction(user, 2, 'Post comment');

    await moveDown(user, 1);

    expect(actionTypes()).toEqual(['Post comment', 'Set priority']);
  });

  it('keeps the parameters of a moved action', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set priority');
    await pick(user, select('Priority', action(1)), 'Urgent');
    await addAction(user);
    await setAction(user, 2, 'Post comment');

    await moveDown(user, 1);

    expect(select('Priority', action(2))).toHaveValue('Urgent');
  });

  it('submits actions in display order', async () => {
    const { user, onSubmit } = renderForm();
    await fillConditionAndRule(user);
    await setAction(user, 1, 'Set priority');
    await pick(user, select('Priority', action(1)), 'Urgent');
    await addAction(user);
    await setAction(user, 2, 'Post comment');
    await user.type(textbox('Comment', action(2)), 'Escalated');
    await moveDown(user, 1);

    await submit(user);

    expect(onSubmit.mock.calls[0][0].actions).toMatchObject([
      { type: 'post_comment', params: { body: 'Escalated' } },
      { type: 'set_priority', params: { priority: 'urgent' } },
    ]);
  });
});

describe('validation', () => {
  it('requires an action type', async () => {
    const { user } = renderForm();

    await submit(user);

    expect(within(action(1)).getByText('Pick an action')).toBeInTheDocument();
  });

  it.each([
    ['Assign to member', 'Pick a member'],
    ['Set priority', 'Pick a priority'],
    ['Add labels', 'Pick at least one label'],
    ['Move to status', 'Pick a status'],
    ['Post comment', 'Enter a comment'],
    ['Set due date', 'Enter a number of days'],
  ])('requires the parameter of %s', async (type, message) => {
    const { user } = renderForm();
    await setAction(user, 1, type);

    await submit(user);

    expect(within(action(1)).getByText(message)).toBeInTheDocument();
  });

  it('requires a channel and a message for Send Slack message', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Send Slack message');

    await submit(user);

    expect(within(action(1)).getByText('Pick a channel')).toBeInTheDocument();
    expect(within(action(1)).getByText('Enter a message')).toBeInTheDocument();
  });

  it('rejects an unknown placeholder in a comment', async () => {
    const { user } = renderForm();
    await setAction(user, 1, 'Post comment');
    await user.type(textbox('Comment', action(1)), 'Ping {{{{issue.reporter}}');

    await submit(user);

    expect(screen.getByText('Unknown placeholder {{issue.reporter}}')).toBeInTheDocument();
  });

  it('accepts the supported placeholders in a comment', async () => {
    const { user, onSubmit } = renderForm();
    await fillConditionAndRule(user);
    await setAction(user, 1, 'Post comment');
    await user.type(textbox('Comment', action(1)), '{{{{issue.assignee}}, see {{{{issue.title}}');

    await submit(user);

    expect(onSubmit.mock.calls[0][0].actions[0].params).toEqual({
      body: '{{issue.assignee}}, see {{issue.title}}',
    });
  });

  it.each(['0', '366'])('rejects %s days for Set due date', async (days) => {
    const { user } = renderForm();
    await setAction(user, 1, 'Set due date');
    await user.type(textbox('Days from now', action(1)), days);

    await submit(user);

    expect(within(action(1)).getByText('Enter 1 to 365 days')).toBeInTheDocument();
  });
});
