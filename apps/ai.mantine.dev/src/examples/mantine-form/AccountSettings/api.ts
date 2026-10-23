import type { FormErrors } from '@mantine/form';
import { MEMBERS, TAKEN_EMAIL } from './constants';
import type { AccountSettingsData, SectionKey } from './types';

export const LOAD_DELAY = 800;
export const SAVE_DELAY = 600;

const SETTINGS: AccountSettingsData = {
  profile: {
    fullName: 'Ada Lovelace',
    displayName: 'Ada',
    email: 'ada@example.com',
    jobTitle: 'Head of Engineering',
    bio: 'Building analytical engines since 1843.',
    language: 'en',
    timezone: 'Europe/London',
  },
  organization: {
    name: 'Analytical Engines',
    legalName: 'Analytical Engines Ltd.',
    website: 'https://analytical-engines.example.com',
    taxId: 'GB123456789',
    address: {
      street: '12 Marylebone Road',
      city: 'London',
      postalCode: 'NW1 5LR',
      country: 'GB',
      region: '',
    },
  },
  billing: {
    billingEmail: 'billing@example.com',
    sameAsOrganization: false,
    address: {
      street: '1 Finance Street',
      city: 'Manchester',
      postalCode: 'M1 1AA',
      country: 'GB',
      region: 'Greater Manchester',
    },
    invoiceNotes: '',
  },
  notifications: {
    events: {
      comments: { email: true, push: true, sms: false },
      mentions: { email: true, push: true, sms: false },
      weeklyDigest: { email: true, push: false, sms: false },
      securityAlerts: { email: true, push: false, sms: true },
      productUpdates: { email: false, push: false, sms: false },
    },
    digestDay: 'monday',
  },
};

export class ServerValidationError extends Error {
  constructor(public errors: FormErrors) {
    super('Server validation failed');
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchSettings(): Promise<AccountSettingsData> {
  await delay(LOAD_DELAY);
  return JSON.parse(JSON.stringify(SETTINGS));
}

export async function saveSection<Values>(section: SectionKey, values: Values): Promise<Values> {
  await delay(SAVE_DELAY);

  if (
    section === 'profile' &&
    (values as AccountSettingsData['profile']).email.trim().toLowerCase() === TAKEN_EMAIL
  ) {
    throw new ServerValidationError({ email: 'This email is already used by another account' });
  }

  return values;
}

export async function transferOwnership(memberId: string) {
  await delay(SAVE_DELAY);
  return MEMBERS.find((member) => member.value === memberId)!;
}

export async function deleteOrganization() {
  await delay(SAVE_DELAY);
}
