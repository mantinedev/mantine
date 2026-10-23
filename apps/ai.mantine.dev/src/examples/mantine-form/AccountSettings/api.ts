import type { FormErrors } from '@mantine/form';
import { SAVED_SETTINGS } from './data';
import { delay } from './delay';
import type { AccountSettingsData, SectionId } from './types';

export const TAKEN_EMAIL = 'taken@example.com';

export class ServerValidationError extends Error {
  errors: FormErrors;

  constructor(errors: FormErrors) {
    super('Validation failed');
    this.errors = errors;
  }
}

export async function fetchAccountSettings(): Promise<AccountSettingsData> {
  await delay(800);
  return structuredClone(SAVED_SETTINGS);
}

export async function saveSection<Values>(section: SectionId, values: Values): Promise<Values> {
  await delay(600 + Math.random() * 400);
  if (section === 'profile' && (values as { email?: string }).email === TAKEN_EMAIL) {
    throw new ServerValidationError({ email: 'This email is already used by another account' });
  }
  return structuredClone(values);
}

export async function transferOwnership(_memberId: string) {
  await delay(600);
}

export async function deleteOrganization() {
  await delay(600);
}
