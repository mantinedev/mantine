import type { UseFormReturnType } from '@mantine/form';

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string | null;
  region: string;
}

export interface ProfileValues {
  fullName: string;
  displayName: string;
  email: string;
  jobTitle: string;
  bio: string;
  language: string | null;
  timezone: string | null;
}

export interface OrganizationValues {
  name: string;
  legalName: string;
  website: string;
  taxId: string;
  address: Address;
}

export interface BillingValues {
  email: string;
  sameAsOrganization: boolean;
  address: Address;
  invoiceNotes: string;
}

export type NotificationEvent =
  | 'comments'
  | 'mentions'
  | 'weeklyDigest'
  | 'securityAlerts'
  | 'productUpdates';

export type NotificationChannel = 'email' | 'push' | 'sms';

export type NotificationMatrix = Record<NotificationEvent, Record<NotificationChannel, boolean>>;

export interface NotificationsValues {
  events: NotificationMatrix;
  digestDay: string | null;
}

export interface Member {
  value: string;
  label: string;
}

export interface AccountSettingsData {
  profile: ProfileValues;
  organization: OrganizationValues;
  billing: BillingValues;
  notifications: NotificationsValues;
  ownerId: string;
}

export type SectionId = 'profile' | 'organization' | 'billing' | 'notifications';

export type ProfileFormType = UseFormReturnType<ProfileValues>;
export type OrganizationFormType = UseFormReturnType<OrganizationValues>;
export type BillingFormType = UseFormReturnType<BillingValues>;
export type NotificationsFormType = UseFormReturnType<NotificationsValues>;
