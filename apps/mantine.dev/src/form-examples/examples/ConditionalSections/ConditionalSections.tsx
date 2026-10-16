import { Button, Group, Radio, Stack } from '@mantine/core';
import { FormErrors, isNotEmpty, matches, useForm, when } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { CompanyFields } from './CompanyFields';
import { PersonalFields } from './PersonalFields';
import { AccountType, AccountValues } from './types';

const personalFields = ['firstName', 'lastName', 'birthDate'] as const;
const companyFields = ['name', 'vatNumber', 'contactPerson'] as const;

const isType = (type: AccountType) => (values: AccountValues) => values.accountType === type;

export function ConditionalSections() {
  const form = useForm<AccountValues>({
    initialValues: {
      accountType: 'personal',
      personal: {
        firstName: '',
        lastName: '',
        birthDate: null,
      },
      company: {
        name: '',
        vatNumber: '',
        contactPerson: '',
      },
    },
    validate: {
      personal: {
        firstName: when(isType('personal'), isNotEmpty('First name is required')),
        lastName: when(isType('personal'), isNotEmpty('Last name is required')),
        birthDate: when(isType('personal'), isNotEmpty('Birth date is required')),
      },
      company: {
        name: when(isType('company'), isNotEmpty('Company name is required')),
        vatNumber: when(
          isType('company'),
          matches(/^[A-Z]{2}\d{8,12}$/, 'VAT number must be 2 uppercase letters and 8–12 digits')
        ),
        contactPerson: when(isType('company'), isNotEmpty('Contact person is required')),
      },
    },
  });

  const accountType = form.useWatchValue('accountType');

  form.watch('accountType', ({ value }) => {
    if (value === 'personal') {
      companyFields.forEach((field) => form.clearFieldError(`company.${field}`));
    } else {
      personalFields.forEach((field) => form.clearFieldError(`personal.${field}`));
    }
  });

  const handleSubmit = (values: AccountValues) => {
    const name =
      values.accountType === 'personal'
        ? `${values.personal.firstName} ${values.personal.lastName}`
        : values.company.name;
    notifications.show({
      title: 'Account created',
      message: `Account created for ${name}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const node = form.getInputNode(Object.keys(errors)[0]);
    (node?.querySelector('input') ?? node)?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <Radio.Group
          size="md"
          label="Account type"
          withAsterisk
          {...form.getInputProps('accountType')}
        >
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
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Create account
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
