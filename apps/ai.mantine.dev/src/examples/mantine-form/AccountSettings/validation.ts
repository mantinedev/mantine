import { hasLength, isEmail, isNotEmpty, isUrl, when } from '@mantine/form';
import { BIO_MAX_LENGTH } from './constants';
import type { BillingValues, NotificationsValues } from './types';

const requiredEmail = (requiredError: string) => (value: string) =>
  value.trim() === '' ? requiredError : isEmail('Enter a valid email address')(value.trim());

const optionalUrl = (value: string) =>
  value.trim() === ''
    ? null
    : isUrl('Enter a valid URL, for example https://example.com')(value.trim());

export const addressRules = {
  street: isNotEmpty('Enter a street'),
  city: isNotEmpty('Enter a city'),
  postalCode: isNotEmpty('Enter a postal code'),
  country: isNotEmpty('Select a country'),
};

export const profileRules = {
  fullName: isNotEmpty('Enter your full name'),
  email: requiredEmail('Enter your email'),
  bio: hasLength({ max: BIO_MAX_LENGTH }, `Bio must be ${BIO_MAX_LENGTH} characters or fewer`),
};

export const organizationRules = {
  name: isNotEmpty('Enter the organization name'),
  website: optionalUrl,
  address: addressRules,
};

const ownBillingAddress = (values: BillingValues) => !values.sameAsOrganization;

export const billingRules = {
  billingEmail: requiredEmail('Enter a billing email'),
  address: {
    street: when(ownBillingAddress, addressRules.street),
    city: when(ownBillingAddress, addressRules.city),
    postalCode: when(ownBillingAddress, addressRules.postalCode),
    country: when(ownBillingAddress, addressRules.country),
  },
};

export const hasDigestChannel = (values: NotificationsValues) =>
  Object.values(values.events.weeklyDigest).some(Boolean);

export const notificationsRules = {
  digestDay: when(hasDigestChannel, isNotEmpty('Select a digest day')),
};
