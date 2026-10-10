import { ReactNode } from 'react';
import { Button, Group, Radio, Stack } from '@mantine/core';
import { isNotEmpty, matches, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { CompanyFields } from './CompanyFields';
import { PersonalFields } from './PersonalFields';
import { AccountType, Values } from './types';

const personalFields = ['firstName', 'lastName', 'birthDate'] as const;
const companyFields = ['name', 'vatNumber', 'contactPerson'] as const;

function whenType<T>(type: AccountType, rule: (value: T) => ReactNode) {
  return (value: T, values: Values) => (values.accountType === type ? rule(value) : null);
}

export function ConditionalSections() {
  const form = useForm<Values>({
    mode: 'uncontrolled',
    initialValues: {
      accountType: 'personal',
      personal: { firstName: '', lastName: '', birthDate: null },
      company: { name: '', vatNumber: '', contactPerson: '' },
    },
    validate: {
      personal: {
        firstName: whenType('personal', isNotEmpty('First name is required')),
        lastName: whenType('personal', isNotEmpty('Last name is required')),
        birthDate: whenType('personal', isNotEmpty('Birth date is required')),
      },
      company: {
        name: whenType('company', isNotEmpty('Company name is required')),
        vatNumber: whenType(
          'company',
          matches(/^[A-Z]{2}\d{8,12}$/, 'VAT number must be 2 uppercase letters and 8–12 digits')
        ),
        contactPerson: whenType('company', isNotEmpty('Contact person is required')),
      },
    },
  });

  const accountType = form.useWatchValue('accountType');

  form.watch('accountType', ({ value }) => {
    if (value === 'personal') {
      companyFields.forEach((field) => form.resetField(`company.${field}`));
    } else {
      personalFields.forEach((field) => form.resetField(`personal.${field}`));
    }
  });

  const handleSubmit = (values: Values) => {
    const name =
      values.accountType === 'personal'
        ? `${values.personal.firstName} ${values.personal.lastName}`
        : values.company.name;
    notifications.show({ title: 'Account created', message: `Account created for ${name}` });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Radio.Group label="Account type" withAsterisk {...form.getInputProps('accountType')}>
          <Group mt="xs">
            <Radio value="personal" label="Personal" />
            <Radio value="company" label="Company" />
          </Group>
        </Radio.Group>
        {accountType === 'personal' ? (
          <PersonalFields form={form} />
        ) : (
          <CompanyFields form={form} />
        )}
        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
          <Button type="submit">Create account</Button>
        </Group>
      </Stack>
    </form>
  );
}
