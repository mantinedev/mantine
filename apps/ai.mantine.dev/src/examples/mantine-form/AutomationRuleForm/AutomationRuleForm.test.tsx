import { act, render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { AutomationRuleForm } from './AutomationRuleForm';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit = jest.fn()) {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <AutomationRuleForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

async function pick(user: User, input: HTMLElement, option: string) {
  await user.click(input);
  await user.click(screen.getByRole('option', { name: option }));
}

const rootGroup = () => screen.getByRole('group', { name: 'Conditions' });
const conditionGroup = (name: string) => screen.getByRole('group', { name });
const actionRow = (index: number) => screen.getByRole('group', { name: `Action ${index}` });

// Text and number inputs are textboxes, selects are comboboxes
function input(scope: HTMLElement, name: string) {
  return (
    within(scope).queryByRole('textbox', { name }) ?? within(scope).getByRole('combobox', { name })
  );
}

// Nested groups repeat the names of their conditions: the scope's own rows come first
function condition(index = 1, scope = rootGroup()) {
  return within(scope).getAllByRole('group', { name: `Condition ${index}` })[0];
}

async function setCondition(user: User, row: HTMLElement, field: string, operator?: string) {
  await pick(user, within(row).getByRole('combobox', { name: 'Field' }), field);
  if (operator) {
    await pick(user, within(row).getByRole('combobox', { name: 'Operator' }), operator);
  }
}

async function pickValues(user: User, row: HTMLElement, ...values: string[]) {
  for (const value of values) {
    await pick(user, input(row, 'Values'), value);
  }
  await user.keyboard('{Escape}');
}

async function setActionType(user: User, index: number, type: string) {
  await pick(user, within(actionRow(index)).getByRole('combobox', { name: 'Action type' }), type);
}

async function addAction(user: User, type: string) {
  await user.click(screen.getByRole('button', { name: 'Add action' }));
  const index = screen.getAllByRole('group', { name: /^Action \d$/ }).length;
  await setActionType(user, index, type);
}

async function fillValidRule(user: User) {
  await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Triage bugs');
  await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Issue created');
  await setCondition(user, condition(1), 'Priority', 'Is any of');
  await pickValues(user, condition(1), 'High');
  await setActionType(user, 1, 'Assign to member');
  await pick(user, within(actionRow(1)).getByRole('combobox', { name: 'Member' }), 'Ada Lovelace');
}

async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create rule' }));
}

function summary() {
  return within(screen.getByRole('region', { name: 'Summary' })).getByText(/./, {
    selector: 'p',
  }).textContent;
}

async function openTest(user: User) {
  await user.click(screen.getByRole('button', { name: 'Test rule' }));
  return screen.getByRole('dialog');
}

function operatorOptions() {
  return screen.getAllByRole('option').map((option) => option.textContent);
}

// jsdom has no layout: dnd-kit's keyboard sensor needs rows stacked by their DOM position
function mockListLayout() {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function getRect(
    this: HTMLElement
  ) {
    const siblings = this.parentElement ? Array.from(this.parentElement.children) : [this];
    const top = siblings.indexOf(this) * 50;
    return {
      x: 0,
      y: top,
      top,
      left: 0,
      right: 400,
      bottom: top + 40,
      width: 400,
      height: 40,
      toJSON: () => ({}),
    };
  });
}

afterEach(() => {
  notifications.clean();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

describe('rule details', () => {
  it('starts with the rule enabled', () => {
    renderForm();
    expect(screen.getByRole('switch', { name: /Enabled/ })).toBeChecked();
  });

  it('shows an error when the name is left empty', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('textbox', { name: 'Name' }));
    await user.tab();
    expect(screen.getByText('Enter a rule name')).toBeInTheDocument();
  });

  it('focuses the name when an empty form is submitted', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveFocus();
  });

  it('requires a trigger event', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Select a trigger event')).toBeInTheDocument();
  });
});

describe('trigger', () => {
  it('shows the status selects only for the status changed event', async () => {
    const { user } = renderForm();
    const event = screen.getByRole('combobox', { name: 'Event' });

    await pick(user, event, 'Issue updated');
    expect(screen.queryByRole('combobox', { name: 'From status' })).not.toBeInTheDocument();

    await pick(user, event, 'Status changed');
    expect(screen.getByRole('combobox', { name: 'From status' })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'To status' })).toBeInTheDocument();
  });

  it('accepts a status change without from and to statuses', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Status changed');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        trigger: { event: 'status_changed', fromStatus: null, toStatus: null },
      })
    );
  });
});

describe('condition rows', () => {
  it.each([
    ['Title', ['Contains', 'Does not contain', 'Equals', 'Is empty']],
    ['Story points', ['Equals', 'Not equals', 'Greater than', 'Less than', 'Between']],
    ['Due date', ['Before', 'After', 'Within the next N days', 'Is empty']],
    ['Labels', ['Is any of', 'Is none of']],
    ['Is blocked', ['Is true', 'Is false']],
  ])('offers the operators of the %s field type', async (field, operators) => {
    const { user } = renderForm();
    await setCondition(user, condition(1), field);
    await user.click(within(condition(1)).getByRole('combobox', { name: 'Operator' }));
    expect(operatorOptions()).toEqual(operators);
  });

  it.each([
    ['Title', 'Contains', ['Value']],
    ['Story points', 'Greater than', ['Value']],
    ['Story points', 'Between', ['Minimum', 'Maximum']],
    ['Due date', 'Within the next N days', ['Number of days']],
    ['Priority', 'Is none of', ['Values']],
  ])('shows the value inputs for %s %s', async (field, operator, inputs) => {
    const { user } = renderForm();
    await setCondition(user, condition(1), field, operator);
    for (const name of inputs) {
      expect(input(condition(1), name)).toBeInTheDocument();
    }
  });

  it('shows a date input for a before condition', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Created at', 'Before');
    expect(within(condition(1)).getByLabelText('Date day')).toBeInTheDocument();
  });

  it.each([
    ['Description', 'Is empty'],
    ['Is blocked', 'Is true'],
  ])('shows no value input for %s %s', async (field, operator) => {
    const { user } = renderForm();
    await setCondition(user, condition(1), field, operator);
    expect(within(condition(1)).queryAllByRole('textbox')).toHaveLength(0);
  });

  it('resets the operator and the value when the field changes', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Title', 'Contains');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Value' }), 'login');

    await setCondition(user, condition(1), 'Description');

    expect(within(condition(1)).getByRole('combobox', { name: 'Operator' })).toHaveValue('');
    expect(within(condition(1)).queryByRole('textbox', { name: 'Value' })).not.toBeInTheDocument();
  });

  it('keeps the value when the new operator takes the same kind of value', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Title', 'Contains');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Value' }), 'login');

    await pick(user, within(condition(1)).getByRole('combobox', { name: 'Operator' }), 'Equals');

    expect(within(condition(1)).getByRole('textbox', { name: 'Value' })).toHaveValue('login');
  });

  it('resets the value when the new operator takes a different kind of value', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Story points', 'Greater than');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Value' }), '5');

    await pick(user, within(condition(1)).getByRole('combobox', { name: 'Operator' }), 'Between');
    await pick(user, within(condition(1)).getByRole('combobox', { name: 'Operator' }), 'Equals');

    expect(within(condition(1)).getByRole('textbox', { name: 'Value' })).toHaveValue('');
  });

  it('adds and removes conditions', async () => {
    const { user } = renderForm();
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    expect(within(rootGroup()).getAllByRole('group', { name: /^Condition/ })).toHaveLength(2);

    await user.click(within(condition(2)).getByRole('button', { name: 'Remove condition 2' }));
    expect(within(rootGroup()).getAllByRole('group', { name: /^Condition/ })).toHaveLength(1);
  });
});

describe('condition groups', () => {
  it('nests groups two levels deep', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await user.click(within(conditionGroup('Group 1')).getByRole('button', { name: 'Add group' }));

    expect(
      within(conditionGroup('Group 1.1')).queryByRole('button', { name: 'Add group' })
    ).not.toBeInTheDocument();
  });

  it('removes a nested group', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await user.click(screen.getByRole('button', { name: 'Remove group 1' }));
    expect(screen.queryByRole('group', { name: 'Group 1' })).not.toBeInTheDocument();
  });

  it('has no remove action on the root group', () => {
    renderForm();
    expect(screen.queryByRole('button', { name: 'Remove conditions' })).not.toBeInTheDocument();
  });

  it('combines conditions with OR when the toggle is switched', async () => {
    const { user } = renderForm();
    await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Issue created');
    await setCondition(user, condition(1), 'Is blocked', 'Is true');
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    await setCondition(user, condition(2), 'Description', 'Is empty');

    await user.click(within(rootGroup()).getAllByRole('radio', { name: 'OR' })[0]);

    expect(summary()).toBe(
      'When an issue is created, if the issue is blocked or description is empty'
    );
  });
});

describe('condition validation', () => {
  it('requires at least one condition in the root group', async () => {
    const { user } = renderForm();
    await user.click(within(condition(1)).getByRole('button', { name: 'Remove condition 1' }));
    await submit(user);
    expect(screen.getByText('Add at least one condition')).toBeInTheDocument();
  });

  it('focuses Add condition when the rule has no conditions', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await user.click(within(condition(1)).getByRole('button', { name: 'Remove condition 1' }));
    await submit(user);
    expect(screen.getByRole('button', { name: 'Add condition' })).toHaveFocus();
  });

  it('requires an operator', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Title');
    await submit(user);
    expect(within(condition(1)).getByText('Select an operator')).toBeInTheDocument();
  });

  it('requires a value when the operator needs one', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Title', 'Contains');
    await submit(user);
    expect(within(condition(1)).getByText('Enter a value')).toBeInTheDocument();
  });

  it('does not require a value for is empty', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await setCondition(user, condition(1), 'Description', 'Is empty');
    await submit(user);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('requires the minimum of between to be lower than the maximum', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Story points', 'Between');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Minimum' }), '8');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Maximum' }), '3');
    await submit(user);
    expect(within(condition(1)).getByText('Must be greater than the minimum')).toBeInTheDocument();
  });

  it.each(['0', '366'])('rejects %s days for within the next N days', async (days) => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Due date', 'Within the next N days');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Number of days' }), days);
    await submit(user);
    expect(within(condition(1)).getByText('Enter 1 to 365 days')).toBeInTheDocument();
  });

  it('shows an error on a nested group without conditions', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await user.click(
      within(conditionGroup('Group 1')).getByRole('button', { name: 'Remove condition 1' })
    );
    await submit(user);
    expect(
      within(conditionGroup('Group 1')).getByText('Add at least one condition to this group')
    ).toBeInTheDocument();
  });

  it('focuses the first invalid condition input', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    await setCondition(user, condition(2), 'Title', 'Contains');
    await submit(user);
    expect(within(condition(2)).getByRole('textbox', { name: 'Value' })).toHaveFocus();
  });
});

describe('actions', () => {
  it.each([
    ['Assign to member', ['Member']],
    ['Set priority', ['Priority']],
    ['Add labels', ['Labels']],
    ['Move to status', ['Status']],
    ['Post comment', ['Comment']],
    ['Send Slack message', ['Channel', 'Message']],
    ['Set due date', ['Days from now']],
  ])('shows the parameters of %s', async (type, inputs) => {
    const { user } = renderForm();
    await setActionType(user, 1, type);
    for (const name of inputs) {
      expect(input(actionRow(1), name)).toBeInTheDocument();
    }
  });

  it('disables a single-use action type that another action already uses', async () => {
    const { user } = renderForm();
    await setActionType(user, 1, 'Set priority');
    await user.click(screen.getByRole('button', { name: 'Add action' }));
    await user.click(within(actionRow(2)).getByRole('combobox', { name: 'Action type' }));
    expect(screen.getByRole('option', { name: 'Set priority' })).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('allows add labels and post comment more than once', async () => {
    const { user } = renderForm();
    await setActionType(user, 1, 'Add labels');
    await addAction(user, 'Post comment');
    await user.click(screen.getByRole('button', { name: 'Add action' }));
    await user.click(within(actionRow(3)).getByRole('combobox', { name: 'Action type' }));
    expect(screen.getByRole('option', { name: 'Add labels' })).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
    expect(screen.getByRole('option', { name: 'Post comment' })).not.toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('stops adding actions at five', async () => {
    const { user } = renderForm();
    for (let i = 0; i < 4; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Add action' }));
    }
    expect(screen.getByRole('button', { name: 'Add action' })).toBeDisabled();
    expect(screen.getByText('A rule can run up to 5 actions')).toBeInTheDocument();
  });

  it('requires at least one action', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Remove action 1' }));
    await submit(user);
    expect(screen.getByText('Add at least one action')).toBeInTheDocument();
  });

  it('requires the parameters of the action type', async () => {
    const { user } = renderForm();
    await setActionType(user, 1, 'Send Slack message');
    await submit(user);
    expect(within(actionRow(1)).getByText('Select a channel')).toBeInTheDocument();
    expect(within(actionRow(1)).getByText('Enter a message')).toBeInTheDocument();
  });

  it('rejects unknown placeholders in a comment', async () => {
    const { user } = renderForm();
    await setActionType(user, 1, 'Post comment');
    await user.type(
      within(actionRow(1)).getByRole('textbox', { name: 'Comment' }),
      'Due {{{{issue.due}}'
    );
    await submit(user);
    expect(within(actionRow(1)).getByText('Unknown placeholder {{issue.due}}')).toBeInTheDocument();
  });

  it('reorders actions with the keyboard', async () => {
    const { user } = renderForm();
    await setActionType(user, 1, 'Set priority');
    await addAction(user, 'Post comment');
    mockListLayout();

    act(() => screen.getByRole('button', { name: 'Reorder action 1' }).focus());
    await user.keyboard('[Space]');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('[Space]');

    expect(within(actionRow(1)).getByRole('combobox', { name: 'Action type' })).toHaveValue(
      'Post comment'
    );
    expect(within(actionRow(2)).getByRole('combobox', { name: 'Action type' })).toHaveValue(
      'Set priority'
    );
  });
});

describe('summary', () => {
  it('describes the rule in plain language', async () => {
    const { user } = renderForm();
    await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Issue created');
    await setCondition(user, condition(1), 'Priority', 'Is any of');
    await pickValues(user, condition(1), 'High');
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    await setCondition(user, condition(2), 'Labels', 'Is any of');
    await pickValues(user, condition(2), 'bug');
    await setActionType(user, 1, 'Assign to member');
    await pick(
      user,
      within(actionRow(1)).getByRole('combobox', { name: 'Member' }),
      'Ada Lovelace'
    );
    await addAction(user, 'Post comment');

    expect(summary()).toBe(
      'When an issue is created, if priority is High and labels include bug, then assign to Ada Lovelace and post a comment'
    );
  });

  it('describes the statuses of a status change', async () => {
    const { user } = renderForm();
    await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Status changed');
    await pick(user, screen.getByRole('combobox', { name: 'To status' }), 'Done');
    expect(summary()).toBe('When the status of an issue changes to Done');
  });

  it('wraps nested groups in parentheses', async () => {
    const { user } = renderForm();
    await pick(user, screen.getByRole('combobox', { name: 'Event' }), 'Comment added');
    await setCondition(user, condition(1), 'Is blocked', 'Is false');
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    const group = conditionGroup('Group 1');
    await setCondition(user, condition(1, group), 'Story points', 'Greater than');
    await user.type(within(condition(1, group)).getByRole('textbox', { name: 'Value' }), '5');
    await user.click(within(group).getByRole('button', { name: 'Add condition' }));
    await setCondition(user, condition(2, group), 'Title', 'Contains');
    await user.type(within(condition(2, group)).getByRole('textbox', { name: 'Value' }), 'crash');
    await user.click(within(group).getByRole('radio', { name: 'OR' }));

    expect(summary()).toBe(
      'When a comment is added, if the issue is not blocked and (story points is greater than 5 or title contains "crash")'
    );
  });
});

describe('test rule', () => {
  // The sample issue is due on Oct 28, 2026; only Date is faked so Mantine's timers stay real
  beforeEach(() => {
    jest.useFakeTimers({
      now: new Date(2026, 9, 23, 12),
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

  it('shows the sample issue as read-only values', async () => {
    const { user } = renderForm();
    const dialog = await openTest(user);
    const sample = within(dialog).getByLabelText('Sample issue');
    expect(within(sample).getByText('Checkout button does nothing in Safari')).toBeInTheDocument();
    expect(within(sample).getByText('bug, frontend')).toBeInTheDocument();
    expect(within(dialog).queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('marks each condition as matched or not matched', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Priority', 'Is any of');
    await pickValues(user, condition(1), 'High');
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    await setCondition(user, condition(2), 'Is blocked', 'Is true');

    const dialog = await openTest(user);
    const items = within(within(dialog).getByRole('list', { name: 'Conditions' })).getAllByRole(
      'listitem'
    );

    expect(items.map((item) => item.textContent)).toEqual([
      'priority is HighMatched',
      'the issue is blockedNot matched',
    ]);
  });

  it('marks a condition without a value as incomplete', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Title', 'Contains');

    const dialog = await openTest(user);
    const list = within(dialog).getByRole('list', { name: 'Conditions' });

    expect(within(list).getByRole('listitem')).toHaveTextContent(
      'Condition 1 is not filled inIncomplete'
    );
  });

  it('lists the actions that would run when the sample matches', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Labels', 'Is any of');
    await pickValues(user, condition(1), 'bug');
    await setActionType(user, 1, 'Move to status');
    await pick(user, within(actionRow(1)).getByRole('combobox', { name: 'Status' }), 'In review');
    await addAction(user, 'Post comment');
    await user.type(
      within(actionRow(2)).getByRole('textbox', { name: 'Comment' }),
      '{{{{issue.assignee}} is on it'
    );

    const dialog = await openTest(user);
    const actions = within(dialog).getByRole('list', { name: 'Actions that would run' });

    expect(
      within(actions)
        .getAllByRole('listitem')
        .map((item) => item.textContent)
    ).toEqual(['Move to In review', 'Post a commentAda Lovelace is on it']);
  });

  it('runs no actions when the sample does not match', async () => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Priority', 'Is any of');
    await pickValues(user, condition(1), 'Low');
    await setActionType(user, 1, 'Set priority');

    const dialog = await openTest(user);

    expect(
      within(dialog).getByText(
        'The sample issue does not match the conditions, no actions would run'
      )
    ).toBeInTheDocument();
  });

  it.each([
    ['5', 'due date is within the next 5 daysMatched'],
    ['4', 'due date is within the next 4 daysNot matched'],
  ])('counts %s days from today for within the next N days', async (days, result) => {
    const { user } = renderForm();
    await setCondition(user, condition(1), 'Due date', 'Within the next N days');
    await user.type(within(condition(1)).getByRole('textbox', { name: 'Number of days' }), days);

    const dialog = await openTest(user);
    const list = within(dialog).getByRole('list', { name: 'Conditions' });

    expect(within(list).getByRole('listitem')).toHaveTextContent(result);
  });
});

describe('submit', () => {
  it('shows a notification with the rule name and trigger', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await submit(user);
    expect(await screen.findByText('Rule created')).toBeInTheDocument();
    expect(screen.getByText('Triage bugs · Issue created')).toBeInTheDocument();
  });

  it('shows the rule JSON under the form', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await submit(user);
    const json = within(screen.getByRole('region', { name: 'Submitted rule' })).getByText(
      /"name": "Triage bugs"/
    );
    expect(json).toBeInTheDocument();
  });

  it('keeps the values after submit', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveValue('Triage bugs');
  });

  it('submits the rule with typed values', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await user.click(within(rootGroup()).getAllByRole('button', { name: 'Add condition' })[0]);
    await setCondition(user, condition(2), 'Story points', 'Between');
    await user.type(within(condition(2)).getByRole('textbox', { name: 'Minimum' }), '2');
    await user.type(within(condition(2)).getByRole('textbox', { name: 'Maximum' }), '8');
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await setCondition(user, condition(1, conditionGroup('Group 1')), 'Is blocked', 'Is true');
    await addAction(user, 'Set due date');
    await user.type(within(actionRow(2)).getByRole('textbox', { name: 'Days from now' }), '3');

    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Triage bugs',
      description: '',
      enabled: true,
      trigger: { event: 'issue_created' },
      conditions: {
        combinator: 'and',
        conditions: [
          { field: 'priority', operator: 'is_any_of', value: ['high'] },
          { field: 'storyPoints', operator: 'between', value: { min: 2, max: 8 } },
        ],
        groups: [
          {
            combinator: 'and',
            conditions: [{ field: 'isBlocked', operator: 'is_true' }],
            groups: [],
          },
        ],
      },
      actions: [
        { type: 'assign_member', memberId: 'ada' },
        { type: 'set_due_date', daysFromNow: 3 },
      ],
    });
  });

  it('submits a date condition as a YYYY-MM-DD string', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await setCondition(user, condition(1), 'Created at', 'After');
    await user.click(within(condition(1)).getByLabelText('Date day'));
    await user.paste('2026-10-01');
    await submit(user);
    expect(onSubmit.mock.calls[0][0].conditions.conditions[0]).toEqual({
      field: 'createdAt',
      operator: 'after',
      value: '2026-10-01',
    });
  });

  it('leaves the status filters out of other events', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    const event = screen.getByRole('combobox', { name: 'Event' });
    await pick(user, event, 'Status changed');
    await pick(user, screen.getByRole('combobox', { name: 'To status' }), 'Done');
    await pick(user, event, 'Comment added');
    await submit(user);
    expect(onSubmit.mock.calls[0][0].trigger).toEqual({ event: 'comment_added' });
  });

  it('does not submit an invalid rule', async () => {
    const { user, onSubmit } = renderForm();
    await submit(user);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
