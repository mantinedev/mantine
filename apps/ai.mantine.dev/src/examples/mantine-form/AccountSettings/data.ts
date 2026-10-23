import type {
  AccountSettingsData,
  Address,
  BillingValues,
  Member,
  NotificationChannel,
  NotificationEvent,
  NotificationsValues,
  OrganizationValues,
  ProfileValues,
} from './types';

export const BIO_MAX_LENGTH = 200;

export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
];

export const TIMEZONES = [
  { value: 'Pacific/Honolulu', label: 'Honolulu' },
  { value: 'America/Los_Angeles', label: 'Los Angeles' },
  { value: 'America/Denver', label: 'Denver' },
  { value: 'America/Chicago', label: 'Chicago' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Berlin', label: 'Berlin' },
  { value: 'Europe/Moscow', label: 'Moscow' },
  { value: 'Asia/Dubai', label: 'Dubai' },
  { value: 'Asia/Tokyo', label: 'Tokyo' },
  { value: 'Australia/Sydney', label: 'Sydney' },
];

export const COUNTRIES = [
  { value: 'AU', label: 'Australia' },
  { value: 'BR', label: 'Brazil' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IN', label: 'India' },
  { value: 'JP', label: 'Japan' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'ES', label: 'Spain' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
];

export const NOTIFICATION_EVENTS: { value: NotificationEvent; label: string }[] = [
  { value: 'comments', label: 'Comments' },
  { value: 'mentions', label: 'Mentions' },
  { value: 'weeklyDigest', label: 'Weekly digest' },
  { value: 'securityAlerts', label: 'Security alerts' },
  { value: 'productUpdates', label: 'Product updates' },
];

export const NOTIFICATION_CHANNELS: { value: NotificationChannel; label: string }[] = [
  { value: 'email', label: 'Email' },
  { value: 'push', label: 'Push' },
  { value: 'sms', label: 'SMS' },
];

export const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
].map((day) => ({ value: day.toLowerCase(), label: day }));

export const MEMBERS: Member[] = [
  { value: 'ada', label: 'Ada Lovelace' },
  { value: 'grace', label: 'Grace Hopper' },
  { value: 'alan', label: 'Alan Turing' },
  { value: 'linus', label: 'Linus Torvalds' },
  { value: 'margaret', label: 'Margaret Hamilton' },
];

export const emptyAddress: Address = {
  street: '',
  city: '',
  postalCode: '',
  country: null,
  region: '',
};

export const emptyProfile: ProfileValues = {
  fullName: '',
  displayName: '',
  email: '',
  jobTitle: '',
  bio: '',
  language: null,
  timezone: null,
};

export const emptyOrganization: OrganizationValues = {
  name: '',
  legalName: '',
  website: '',
  taxId: '',
  address: emptyAddress,
};

export const emptyBilling: BillingValues = {
  email: '',
  sameAsOrganization: false,
  address: emptyAddress,
  invoiceNotes: '',
};

const channels = (email: boolean, push: boolean, sms: boolean) => ({ email, push, sms });

export const emptyNotifications: NotificationsValues = {
  events: {
    comments: channels(false, false, false),
    mentions: channels(false, false, false),
    weeklyDigest: channels(false, false, false),
    securityAlerts: channels(true, false, false),
    productUpdates: channels(false, false, false),
  },
  digestDay: null,
};

export const SAVED_SETTINGS: AccountSettingsData = {
  profile: {
    fullName: 'Jane Cooper',
    displayName: 'Jane',
    email: 'jane@acme.com',
    jobTitle: 'Head of Operations',
    bio: 'Keeps the lights on and the invoices paid.',
    language: 'en',
    timezone: 'Europe/Berlin',
  },
  organization: {
    name: 'Acme',
    legalName: 'Acme GmbH',
    website: 'https://acme.com',
    taxId: 'DE123456789',
    address: {
      street: 'Torstraße 1',
      city: 'Berlin',
      postalCode: '10119',
      country: 'DE',
      region: '',
    },
  },
  billing: {
    email: 'billing@acme.com',
    sameAsOrganization: false,
    address: {
      street: 'Mainzer Landstraße 50',
      city: 'Frankfurt',
      postalCode: '60325',
      country: 'DE',
      region: 'Hesse',
    },
    invoiceNotes: '',
  },
  notifications: {
    events: {
      comments: channels(true, true, false),
      mentions: channels(true, true, true),
      weeklyDigest: channels(true, false, false),
      securityAlerts: channels(true, true, false),
      productUpdates: channels(false, false, false),
    },
    digestDay: 'monday',
  },
  ownerId: 'jane',
};
