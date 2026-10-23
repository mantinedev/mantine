import type {
  Address,
  BillingValues,
  ChannelSettings,
  NotificationsValues,
  OrganizationValues,
  ProfileValues,
} from './types';

const emptyAddress: Address = { street: '', city: '', postalCode: '', country: null, region: '' };

const channelsOff: ChannelSettings = { email: false, push: false, sms: false };

// Placeholders until the settings are loaded and passed to form.initialize
export const EMPTY_PROFILE: ProfileValues = {
  fullName: '',
  displayName: '',
  email: '',
  jobTitle: '',
  bio: '',
  language: null,
  timezone: null,
};

export const EMPTY_ORGANIZATION: OrganizationValues = {
  name: '',
  legalName: '',
  website: '',
  taxId: '',
  address: emptyAddress,
};

export const EMPTY_BILLING: BillingValues = {
  billingEmail: '',
  sameAsOrganization: false,
  address: emptyAddress,
  invoiceNotes: '',
};

export const EMPTY_NOTIFICATIONS: NotificationsValues = {
  events: {
    comments: channelsOff,
    mentions: channelsOff,
    weeklyDigest: channelsOff,
    securityAlerts: { ...channelsOff, email: true },
    productUpdates: channelsOff,
  },
  digestDay: null,
};
