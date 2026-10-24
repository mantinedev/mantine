import { screen, within } from '@test-utils';
import {
  fillValidRule,
  nestedGroup,
  pick,
  renderForm,
  select,
  setCondition,
  textbox,
  type User,
} from '../test-helpers';

// Only Date is faked: the sample issue is compared with today, popover timers stay real
beforeEach(() => {
  jest.useFakeTimers({
    now: new Date(2026, 9, 24, 12),
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

const setup = () => renderForm();

async function openTest(user: User) {
  await user.click(screen.getByRole('button', { name: 'Test rule' }));
  return screen.getByRole('dialog', { name: 'Test rule' });
}

const result = (dialog: HTMLElement, name: string) =>
  within(dialog).getByRole('listitem', { name });

describe('sample issue', () => {
  it('shows the sample issue values', async () => {
    const { user } = setup();

    const dialog = await openTest(user);

    expect(
      within(dialog).getByText('Checkout button does not respond on Safari')
    ).toBeInTheDocument();
    expect(within(dialog).getByText('In progress')).toBeInTheDocument();
    expect(within(dialog).getByText('Ada Lovelace')).toBeInTheDocument();
    expect(within(dialog).getByText('bug, frontend')).toBeInTheDocument();
    expect(within(dialog).getByText('Oct 30, 2026')).toBeInTheDocument();
  });

  it('shows the sample issue as text, not as inputs', async () => {
    const { user } = setup();

    const dialog = await openTest(user);

    expect(within(dialog).queryByRole('textbox')).not.toBeInTheDocument();
    expect(within(dialog).queryByRole('combobox')).not.toBeInTheDocument();
  });
});

describe('conditions', () => {
  it('marks a condition the sample issue meets as matched', async () => {
    const { user } = setup();
    await fillValidRule(user);

    const dialog = await openTest(user);

    expect(result(dialog, 'Priority is High: Matched')).toBeInTheDocument();
  });

  it('marks a condition the sample issue does not meet as not matched', async () => {
    const { user } = setup();
    await setCondition(user, { field: 'Is blocked', operator: 'is true' });

    const dialog = await openTest(user);

    expect(result(dialog, 'The issue is blocked: Not matched')).toBeInTheDocument();
  });

  it('marks a condition without a value as incomplete', async () => {
    const { user } = setup();
    await setCondition(user, { field: 'Title', operator: 'contains' });

    const dialog = await openTest(user);

    expect(result(dialog, 'Title contains …: Incomplete')).toBeInTheDocument();
  });

  it.each([
    ['7', 'Matched'],
    ['5', 'Not matched'],
  ])('compares the due date with today for within the next %s days', async (days, status) => {
    const { user } = setup();
    await setCondition(user, { field: 'Due date', operator: 'within the next N days' });
    await user.type(textbox('Condition 1 value'), days);

    const dialog = await openTest(user);

    expect(
      result(dialog, `Due date is within the next ${days} days: ${status}`)
    ).toBeInTheDocument();
  });

  it('matches a group of any when one of its conditions matches', async () => {
    const { user } = setup();
    await setCondition(user, { field: 'Story points', operator: 'less than' });
    await user.type(textbox('Condition 1 value'), '5');
    await user.click(screen.getByRole('button', { name: 'Add group' }));
    await pick(user, select('Group 1 match'), 'any');
    await setCondition(user, {
      field: 'Is blocked',
      operator: 'is true',
      scope: nestedGroup('Group 1'),
    });
    await user.click(within(nestedGroup('Group 1')).getByRole('button', { name: 'Add condition' }));
    await setCondition(user, {
      field: 'Title',
      operator: 'contains',
      number: 2,
      scope: nestedGroup('Group 1'),
    });
    await user.type(textbox('Condition 2 value', nestedGroup('Group 1')), 'safari');

    const dialog = await openTest(user);

    expect(
      within(dialog).getByText('The sample issue matches the conditions.')
    ).toBeInTheDocument();
  });
});

describe('actions', () => {
  it('lists the actions that would run when the conditions match', async () => {
    const { user } = setup();
    await fillValidRule(user);

    const dialog = await openTest(user);

    const list = within(dialog).getByRole('list', { name: 'Actions that would run' });
    expect(
      within(list)
        .getAllByRole('listitem')
        .map((item) => item.textContent)
    ).toEqual(['Assign to Ada Lovelace']);
  });

  it('runs no actions when the conditions do not match', async () => {
    const { user } = setup();
    await fillValidRule(user);
    await pick(user, select('Condition 1 operator'), 'is none of');
    await pick(user, select('Condition 1 value'), 'High');

    const dialog = await openTest(user);

    expect(within(dialog).getByText('No actions would run.')).toBeInTheDocument();
  });
});
