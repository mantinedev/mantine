import {
  hasLength,
  isEmail,
  isNotEmpty,
  isUrl,
  when,
  type FormRulesRecord,
  type FormValidateInput,
} from '@mantine/form';
import { BIO_MAX_LENGTH } from './data';
import type {
  Address,
  BillingValues,
  NotificationsValues,
  OrganizationValues,
  ProfileValues,
} from './types';

export const profileRules: FormValidateInput<ProfileValues> = {
  fullName: isNotEmpty('Enter your full name'),
  email: isEmail('Enter a valid email address'),
  bio: hasLength({ max: BIO_MAX_LENGTH }, `Bio must be ${BIO_MAX_LENGTH} characters or fewer`),
};

function addressRules<Values>(
  applies: (values: Values) => boolean = () => true
): FormRulesRecord<Address, Values> {
  return {
    street: when(applies, isNotEmpty('Enter a street')),
    city: when(applies, isNotEmpty('Enter a city')),
    postalCode: when(applies, isNotEmpty('Enter a postal code')),
    country: when(applies, isNotEmpty('Pick a country')),
  };
}

const optionalUrl = isUrl(
  { protocols: ['http', 'https'] },
  'Enter a valid URL, like https://acme.com'
);

export const organizationRules: FormValidateInput<OrganizationValues> = {
  name: isNotEmpty('Enter the organization name'),
  website: (value) => (value.trim() === '' ? null : optionalUrl(value)),
  address: addressRules(),
};

export const billingRules: FormValidateInput<BillingValues> = {
  email: isEmail('Enter a valid billing email'),
  address: addressRules<BillingValues>((values) => !values.sameAsOrganization),
};

export const hasDigestChannel = (values: NotificationsValues) =>
  Object.values(values.events.weeklyDigest).some(Boolean);

export const notificationsRules: FormValidateInput<NotificationsValues> = {
  digestDay: when(hasDigestChannel, isNotEmpty('Pick a day for the digest')),
};
