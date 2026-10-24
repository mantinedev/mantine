import { screen, within } from '@test-utils';
import {
  action,
  conditionsFieldset,
  fillRuleFields,
  nestedGroup,
  pick,
  renderForm,
  select,
  setAction,
  setCondition,
  submit,
  summary,
  textbox,
  type User,
} from '../test-helpers';

async function fillAction(user: User) {
  await setAction(user, 1, 'Set priority');
  await pick(user, select('Priority', action(1)), 'High');
}

async function operatorOptions(user: User, field: string) {
  await setCondition(user, { field });
  await user.click(select('Condition 1 operator'));
  return screen.getAllByRole('option').map((option) => option.textContent);
}

const addCondition = (user: User, scope: HTMLElement = conditionsFieldset()) =>
  user.click(within(scope).getAllByRole('button', { name: 'Add condition' }).at(-1)!);

describe('operators', () => {
  it.each([
    ['Title', ['contains', 'does not contain', 'equals', 'is empty']],
    ['Story points', ['equals', 'not equals', 'greater than', 'less than', 'between']],
    ['Due date', ['before', 'after', 'within the next N days', 'is empty']],
    ['Assignee', ['is any of', 'is none of']],
    ['Is blocked', ['is true', 'is false']],
  ])('lists the operators of the %s field type', async (field, operators) => {
    const { user } = renderForm();

    expect(await operatorOptions(user, field)).toEqual(operators);
  });

  it('disables the operator until a field is picked', () => {
    renderForm();

    expect(select('Condition 1 operator')).toBeDisabled();
  });
});

describe('value input', () => {
  it('shows a text input for a text operator', async () => {
    const { user } = renderForm();

    await setCondition(user, { field: 'Title', operator: 'contains' });

    expect(textbox('Condition 1 value')).toHaveValue('');
  });

  it('shows minimum and maximum inputs for between', async () => {
    const { user } = renderForm();

    await setCondition(user, { field: 'Story points', operator: 'between' });

    expect(textbox('Condition 1 value minimum')).toBeInTheDocument();
    expect(textbox('Condition 1 value maximum')).toBeInTheDocument();
  });

  it('shows a date input for before', async () => {
    const { user } = renderForm();

    await setCondition(user, { field: 'Due date', operator: 'before' });

    expect(screen.getByLabelText('Condition 1 value day')).toBeInTheDocument();
    expect(screen.getByLabelText('Condition 1 value month')).toBeInTheDocument();
    expect(screen.getByLabelText('Condition 1 value year')).toBeInTheDocument();
  });

  it('shows a number of days input for within the next N days', async () => {
    const { user } = renderForm();

    await setCondition(user, { field: 'Due date', operator: 'within the next N days' });

    expect(textbox('Condition 1 value')).toHaveAttribute('placeholder', 'Days, 1 to 365');
  });

  it('offers the options of the field for is any of', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Priority', operator: 'is any of' });

    await user.click(select('Condition 1 value'));

    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Low',
      'Medium',
      'High',
      'Urgent',
    ]);
  });

  it.each([
    ['Description', 'is empty'],
    ['Is blocked', 'is true'],
    ['Is blocked', 'is false'],
  ])('shows no value input for %s %s', async (field, operator) => {
    const { user } = renderForm();

    await setCondition(user, { field, operator });

    expect(screen.queryByRole('textbox', { name: 'Condition 1 value' })).not.toBeInTheDocument();
    expect(screen.queryByRole('combobox', { name: 'Condition 1 value' })).not.toBeInTheDocument();
  });
});

describe('resetting', () => {
  it('resets the operator when the field changes', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Title', operator: 'contains' });

    await setCondition(user, { field: 'Description' });

    expect(select('Condition 1 operator')).toHaveValue('');
  });

  it('resets the value when the field changes', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Title', operator: 'contains' });
    await user.type(textbox('Condition 1 value'), 'crash');

    await setCondition(user, { field: 'Description', operator: 'contains' });

    expect(textbox('Condition 1 value')).toHaveValue('');
  });

  it('keeps the value when the new operator takes the same kind of value', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Title', operator: 'contains' });
    await user.type(textbox('Condition 1 value'), 'crash');

    await pick(user, select('Condition 1 operator'), 'equals');

    expect(textbox('Condition 1 value')).toHaveValue('crash');
  });

  it('resets the value when the new operator takes a different kind of value', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Story points', operator: 'greater than' });
    await user.type(textbox('Condition 1 value'), '5');

    await pick(user, select('Condition 1 operator'), 'between');
    await pick(user, select('Condition 1 operator'), 'less than');

    expect(textbox('Condition 1 value')).toHaveValue('');
  });
});

describe('validation', () => {
  it('requires a field', async () => {
    const { user } = renderForm();

    await submit(user);

    expect(within(conditionsFieldset()).getByText('Pick a field')).toBeInTheDocument();
  });

  it('requires an operator', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Title' });

    await submit(user);

    expect(screen.getByText('Pick an operator')).toBeInTheDocument();
  });

  it('requires a value when the operator needs one', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Title', operator: 'contains' });

    await submit(user);

    expect(screen.getByText('Enter a value')).toBeInTheDocument();
  });

  it('requires at least one option for is any of', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Labels', operator: 'is any of' });

    await submit(user);

    expect(screen.getByText('Pick at least one option')).toBeInTheDocument();
  });

  it('requires a date for before', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Created at', operator: 'before' });

    await submit(user);

    expect(screen.getByText('Pick a date')).toBeInTheDocument();
  });

  it('submits a condition whose operator needs no value', async () => {
    const { user, onSubmit } = renderForm();
    await fillRuleFields(user);
    await fillAction(user);
    await setCondition(user, { field: 'Description', operator: 'is empty' });

    await submit(user);

    expect(onSubmit.mock.calls[0][0].conditions.conditions).toMatchObject([
      { field: 'description', operator: 'is_empty', value: null },
    ]);
  });

  it('requires the minimum of between to be lower than the maximum', async () => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Story points', operator: 'between' });
    await user.type(textbox('Condition 1 value minimum'), '8');
    await user.type(textbox('Condition 1 value maximum'), '8');

    await submit(user);

    expect(screen.getByText('Must be greater than the minimum')).toBeInTheDocument();
  });

  it('submits between as a minimum and maximum', async () => {
    const { user, onSubmit } = renderForm();
    await fillRuleFields(user);
    await fillAction(user);
    await setCondition(user, { field: 'Story points', operator: 'between' });
    await user.type(textbox('Condition 1 value minimum'), '2');
    await user.type(textbox('Condition 1 value maximum'), '8');

    await submit(user);

    expect(onSubmit.mock.calls[0][0].conditions.conditions[0]).toMatchObject({
      field: 'storyPoints',
      operator: 'between',
      value: { min: 2, max: 8 },
    });
  });

  it.each(['0', '366'])('rejects %s days for within the next N days', async (days) => {
    const { user } = renderForm();
    await setCondition(user, { field: 'Due date', operator: 'within the next N days' });
    await user.type(textbox('Condition 1 value'), days);

    await submit(user);

    expect(screen.getByText('Enter 1 to 365 days')).toBeInTheDocument();
  });

  it('accepts 365 days for within the next N days', async () => {
    const { user, onSubmit } = renderForm();
    await fillRuleFields(user);
    await fillAction(user);
    await setCondition(user, { field: 'Due date', operator: 'within the next N days' });
    await user.type(textbox('Condition 1 value'), '365');

    await submit(user);

    expect(onSubmit.mock.calls[0][0].conditions.conditions[0].value).toBe(365);
  });

  it('requires at least one condition in the root group', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Remove condition 1' }));

    await submit(user);

    expect(
      within(conditionsFieldset()).getByText('Add at least one condition')
    ).toBeInTheDocument();
  });

  it('focuses Add condition when the root group has no conditions', async () => {
    const { user } = renderForm();
    await fillRuleFields(user);
    await user.click(screen.getByRole('button', { name: 'Remove condition 1' }));

    await submit(user);

    expect(screen.getByRole('button', { name: 'Add condition' })).toHaveFocus();
  });

  it('rejects a nested group without conditions', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await user.click(
      within(nestedGroup('Group 1')).getByRole('button', { name: 'Remove condition 1' })
    );

    await submit(user);

    expect(
      within(nestedGroup('Group 1')).getByText('Add a condition to this group or remove it')
    ).toBeInTheDocument();
  });

  it('shows no errors on a newly added condition', async () => {
    const { user } = renderForm();
    await submit(user);

    await addCondition(user);

    expect(within(conditionsFieldset()).getAllByText('Pick a field')).toHaveLength(1);
  });
});

describe('groups', () => {
  it('adds a condition to the root group', async () => {
    const { user } = renderForm();

    await addCondition(user);

    expect(select('Condition 2 field')).toBeInTheDocument();
  });

  it('removes a condition', async () => {
    const { user } = renderForm();
    await addCondition(user);
    await setCondition(user, { field: 'Title', number: 2 });

    await user.click(screen.getByRole('button', { name: 'Remove condition 1' }));

    expect(select('Condition 1 field')).toHaveValue('Title');
    expect(screen.queryByRole('combobox', { name: 'Condition 2 field' })).not.toBeInTheDocument();
  });

  it('adds a nested group with one empty condition', async () => {
    const { user } = renderForm();

    await user.click(screen.getByRole('button', { name: 'Add group' }));

    expect(select('Condition 1 field', nestedGroup('Group 1'))).toHaveValue('');
    expect(select('Group 1 match')).toHaveValue('all');
  });

  it('allows nesting groups two levels deep', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));

    await user.click(within(nestedGroup('Group 1')).getByRole('button', { name: 'Add group' }));

    expect(nestedGroup('Group 1.1')).toBeInTheDocument();
    expect(
      within(nestedGroup('Group 1.1')).queryByRole('button', { name: 'Add group' })
    ).not.toBeInTheDocument();
  });

  it('removes a nested group', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add group' }));

    await user.click(screen.getByRole('button', { name: 'Remove group 1' }));

    expect(screen.queryByRole('group', { name: 'Group 1' })).not.toBeInTheDocument();
  });

  it('submits nested groups with their own combinator', async () => {
    const { user, onSubmit } = renderForm();
    await fillRuleFields(user);
    await fillAction(user);
    await setCondition(user, { field: 'Is blocked', operator: 'is true' });
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await pick(user, select('Group 1 match'), 'any');
    await setCondition(user, {
      field: 'Is blocked',
      operator: 'is false',
      scope: nestedGroup('Group 1'),
    });

    await submit(user);

    expect(onSubmit.mock.calls[0][0].conditions).toMatchObject({
      combinator: 'and',
      conditions: [{ field: 'isBlocked', operator: 'is_true' }],
      groups: [
        {
          combinator: 'or',
          conditions: [{ field: 'isBlocked', operator: 'is_false' }],
          groups: [],
        },
      ],
    });
  });

  it('describes a typed date in the summary', async () => {
    const { user } = renderForm();
    await fillRuleFields(user);
    await setCondition(user, { field: 'Due date', operator: 'before' });

    await user.type(screen.getByLabelText('Condition 1 value day'), '20');
    await user.type(screen.getByLabelText('Condition 1 value month'), '11');
    await user.type(screen.getByLabelText('Condition 1 value year'), '2026');

    expect(within(summary()).getByText('Due date is before Nov 20, 2026')).toBeInTheDocument();
  });
});
