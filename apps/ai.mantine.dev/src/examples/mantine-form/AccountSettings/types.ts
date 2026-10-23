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
  billingEmail: string;
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

export type ChannelSettings = Record<NotificationChannel, boolean>;

export interface NotificationsValues {
  events: Record<NotificationEvent, ChannelSettings>;
  digestDay: string | null;
}

export interface AccountSettingsData {
  profile: ProfileValues;
  organization: OrganizationValues;
  billing: BillingValues;
  notifications: NotificationsValues;
}

export type SectionKey = keyof AccountSettingsData;

export type ProfileFormType = UseFormReturnType<ProfileValues>;
export type OrganizationFormType = UseFormReturnType<OrganizationValues>;
export type BillingFormType = UseFormReturnType<BillingValues>;
export type NotificationsFormType = UseFormReturnType<NotificationsValues>;
export type AddressFormType = UseFormReturnType<{ address: Address }>;
