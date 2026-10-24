import { render, screen, userEvent, within } from '@test-utils';
import { Notifications } from '@mantine/notifications';
import { AutomationRuleForm } from './AutomationRuleForm';

export type User = ReturnType<typeof userEvent.setup>;

export function renderForm() {
  const onSubmit = jest.fn();
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <AutomationRuleForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

type Scope = HTMLElement | typeof screen;
const queries = (scope: Scope) => (scope === screen ? screen : within(scope as HTMLElement));

export const select = (name: string, scope: Scope = screen) =>
  queries(scope).getByRole('combobox', { name });
export const textbox = (name: string, scope: Scope = screen) =>
  queries(scope).getByRole('textbox', { name });

export async function pick(user: User, input: HTMLElement, option: string) {
  await user.click(input);
  await user.click(screen.getByRole('option', { name: option }));
}

export const conditionsFieldset = () => screen.getByRole('group', { name: 'Conditions' });
export const actionsFieldset = () => screen.getByRole('group', { name: 'Actions' });
export const nestedGroup = (name: string) => screen.getByRole('group', { name });
export const action = (number: number) => screen.getByRole('group', { name: `Action ${number}` });
export const summary = () => screen.getByRole('region', { name: 'Rule summary' });
export const submit = (user: User) =>
  user.click(screen.getByRole('button', { name: 'Create rule' }));

export async function setCondition(
  user: User,
  {
    field,
    operator,
    number = 1,
    scope = conditionsFieldset(),
  }: { field: string; operator?: string; number?: number; scope?: HTMLElement }
) {
  await pick(user, select(`Condition ${number} field`, scope), field);
  if (operator) {
    await pick(user, select(`Condition ${number} operator`, scope), operator);
  }
}

export async function setAction(user: User, number: number, type: string) {
  await pick(user, select(`Action ${number} type`, action(number)), type);
}

export async function fillRuleFields(user: User) {
  await user.type(textbox('Name'), 'Escalate bugs');
  await pick(user, select('Event'), 'Issue created');
}

export async function fillValidRule(user: User) {
  await fillRuleFields(user);
  await setCondition(user, { field: 'Priority', operator: 'is any of' });
  await pick(user, select('Condition 1 value'), 'High');
  await setAction(user, 1, 'Assign to member');
  await pick(user, select('Member', action(1)), 'Ada Lovelace');
}
