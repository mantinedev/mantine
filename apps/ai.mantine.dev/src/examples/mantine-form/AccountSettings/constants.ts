import type { NotificationChannel, NotificationEvent } from './types';

export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
];

export const TIMEZONES = [
  { value: 'America/Los_Angeles', label: 'Los Angeles' },
  { value: 'America/Denver', label: 'Denver' },
  { value: 'America/Chicago', label: 'Chicago' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Berlin', label: 'Berlin' },
  { value: 'Europe/Paris', label: 'Paris' },
  { value: 'Asia/Dubai', label: 'Dubai' },
  { value: 'Asia/Kolkata', label: 'Mumbai' },
  { value: 'Asia/Tokyo', label: 'Tokyo' },
  { value: 'Australia/Sydney', label: 'Sydney' },
];

export const COUNTRIES = [
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'JP', label: 'Japan' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'ES', label: 'Spain' },
  { value: 'SE', label: 'Sweden' },
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
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

export const MEMBERS = [
  { value: 'member-1', label: 'Grace Hopper' },
  { value: 'member-2', label: 'Alan Turing' },
  { value: 'member-3', label: 'Katherine Johnson' },
  { value: 'member-4', label: 'Linus Torvalds' },
  { value: 'member-5', label: 'Margaret Hamilton' },
];

export const SECTION_LABELS = {
  profile: 'Profile',
  organization: 'Organization',
  billing: 'Billing',
  notifications: 'Notifications',
} as const;

export const BIO_MAX_LENGTH = 200;

export const TAKEN_EMAIL = 'taken@example.com';
