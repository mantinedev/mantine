import { screen, within } from '@test-utils';
import { notifications } from '@mantine/notifications';
import {
  action,
  conditionsFieldset,
  fillRuleFields,
  fillValidRule,
  nestedGroup,
  pick,
  renderForm,
  select,
  setAction,
  setCondition,
  submit,
  summary,
  textbox,
} from './test-helpers';

afterEach(() => {
  notifications.clean();
});

describe('rule fields', () => {
  it('starts with one empty condition and one empty action', () => {
    renderForm();

    expect(select('Condition 1 field')).toHaveValue('');
    expect(screen.queryByRole('combobox', { name: 'Condition 2 field' })).not.toBeInTheDocument();
    expect(select('Action 1 type')).toHaveValue('');
    expect(screen.queryByRole('group', { name: 'Action 2' })).not.toBeInTheDocument();
  });

  it('has no enabled switch', () => {
    renderForm();

    expect(screen.queryByRole('switch')).not.toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('hides the status fields until Status changed is picked', () => {
    renderForm();

    expect(screen.queryByRole('combobox', { name: 'From status' })).not.toBeInTheDocument();
    expect(screen.queryByRole('combobox', { name: 'To status' })).not.toBeInTheDocument();
  });

  it('shows From status and To status when Status changed is picked', async () => {
    const { user } = renderForm();

    await pick(user, select('Event'), 'Status changed');

    expect(select('From status')).toBeInTheDocument();
    expect(select('To status')).toBeInTheDocument();
  });

  it('submits without from and to statuses when they are left empty', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await pick(user, select('Event'), 'Status changed');

    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        trigger: { event: 'status_changed', fromStatus: null, toStatus: null },
      })
    );
  });

  it('clears the statuses when the event changes away from Status changed', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await pick(user, select('Event'), 'Status changed');
    await pick(user, select('To status'), 'Done');
    await pick(user, select('Event'), 'Comment added');

    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        trigger: { event: 'comment_added', fromStatus: null, toStatus: null },
      })
    );
  });
});

describe('submit', () => {
  it('shows the name and event errors when submitted empty', async () => {
    const { user } = renderForm();

    await submit(user);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Pick an event')).toBeInTheDocument();
  });

  it('focuses the name field when submitted empty', async () => {
    const { user } = renderForm();

    await submit(user);

    expect(textbox('Name')).toHaveFocus();
  });

  it('focuses the first invalid condition when the rule fields are valid', async () => {
    const { user } = renderForm();
    await fillRuleFields(user);

    await submit(user);

    expect(select('Condition 1 field')).toHaveFocus();
  });

  it('focuses the first invalid action parameter when everything above is valid', async () => {
    const { user } = renderForm();
    await fillRuleFields(user);
    await setCondition(user, { field: 'Is blocked', operator: 'is true' });
    await setAction(user, 1, 'Set priority');

    await submit(user);

    expect(select('Priority', action(1))).toHaveFocus();
  });

  it('does not submit an invalid rule', async () => {
    const { user, onSubmit } = renderForm();

    await submit(user);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('clears the name error when the name is typed', async () => {
    const { user } = renderForm();
    await submit(user);

    await user.type(textbox('Name'), 'E');

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('submits the rule enabled, with conditions and actions', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidRule(user);
    await user.type(textbox('Description'), 'High priority bugs go to Ada');

    await submit(user);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toMatchObject({
      name: 'Escalate bugs',
      description: 'High priority bugs go to Ada',
      enabled: true,
      trigger: { event: 'issue_created' },
      conditions: {
        combinator: 'and',
        conditions: [{ field: 'priority', operator: 'any_of', value: ['high'] }],
        groups: [],
      },
      actions: [{ type: 'assign_member', params: { memberId: 'ada' } }],
    });
  });

  it('shows a notification with the rule name and trigger', async () => {
    const { user } = renderForm();
    await fillValidRule(user);

    await submit(user);

    expect(await screen.findByText('Rule created')).toBeInTheDocument();
    expect(screen.getByText('Escalate bugs · Issue created')).toBeInTheDocument();
  });

  it('shows the rule JSON under the form', async () => {
    const { user } = renderForm();
    await fillValidRule(user);

    await submit(user);

    const json = screen.getByText(/"name": "Escalate bugs"/);
    expect(json).toHaveTextContent('"enabled": true');
    expect(json).toHaveTextContent('"memberId": "ada"');
  });

  it('keeps the form values after submit', async () => {
    const { user } = renderForm();
    await fillValidRule(user);

    await submit(user);

    expect(textbox('Name')).toHaveValue('Escalate bugs');
    expect(select('Event')).toHaveValue('Issue created');
    expect(select('Member', action(1))).toHaveValue('Ada Lovelace');
  });
});

describe('summary', () => {
  it('asks for an event until one is picked', () => {
    renderForm();

    expect(summary()).toHaveTextContent('Pick an event to see what this rule does.');
  });

  it('describes the event, then the conditions, then the actions', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await user.click(screen.getByRole('button', { name: 'Add condition' }));
    await setCondition(user, { field: 'Labels', operator: 'is any of', number: 2 });
    await pick(user, select('Condition 2 value'), 'bug');
    await user.click(screen.getByRole('button', { name: 'Add action' }));
    await setAction(user, 2, 'Post comment');

    expect(within(summary()).getByText('When an issue is created')).toBeInTheDocument();
    expect(within(summary()).getByText('If all of the following:')).toBeInTheDocument();
    expect(
      within(summary())
        .getAllByRole('listitem')
        .map((item) => item.textContent)
    ).toEqual([
      'Priority is High',
      'Labels include bug',
      'Assign to Ada Lovelace',
      'Post a comment',
    ]);
  });

  it('says any when the root group matches any condition', async () => {
    const { user } = renderForm();
    await fillValidRule(user);

    await pick(user, select('Match'), 'any');

    expect(within(summary()).getByText('If any of the following:')).toBeInTheDocument();
  });

  it('includes the from and to statuses of a status change', async () => {
    const { user } = renderForm();
    await pick(user, select('Event'), 'Status changed');
    await pick(user, select('From status'), 'In progress');
    await pick(user, select('To status'), 'Done');

    expect(
      within(summary()).getByText('When the status changes from In progress to Done')
    ).toBeInTheDocument();
  });

  it('lists the conditions of a nested group under its own heading', async () => {
    const { user } = renderForm();
    await fillValidRule(user);
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await pick(user, select('Group 1 match'), 'any');
    await setCondition(user, {
      field: 'Story points',
      operator: 'greater than',
      scope: nestedGroup('Group 1'),
    });
    await user.type(textbox('Condition 1 value', nestedGroup('Group 1')), '5');

    const nested = within(summary())
      .getByText(/any of the following:/)
      .closest('li') as HTMLElement;
    expect(within(nested).getByRole('listitem')).toHaveTextContent(
      'Story points is greater than 5'
    );
  });

  it('updates as the user types a condition value', async () => {
    const { user } = renderForm();
    await fillRuleFields(user);
    await setCondition(user, { field: 'Title', operator: 'contains' });

    await user.type(textbox('Condition 1 value', conditionsFieldset()), 'crash');

    expect(within(summary()).getByText('Title contains "crash"')).toBeInTheDocument();
  });
});
