export const fileTreeCode = [
  {
    fileName: 'JobApplicationForm.tsx',
    language: 'tsx',
    code: `import { Button, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AddressStep } from './steps/address/AddressStep';
import { PersonalStep } from './steps/PersonalStep';
import { validation } from './validation';
import type { JobApplicationValues } from './types';
import classes from './JobApplicationForm.module.css';

export function JobApplicationForm() {
  const form = useForm<JobApplicationValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', street: '', city: '', country: '' },
    validate: validation,
  });

  return (
    <form className={classes.root} onSubmit={form.onSubmit(console.log)}>
      <Stepper active={0}>
        <Stepper.Step label="Personal">
          <PersonalStep form={form} />
        </Stepper.Step>
        <Stepper.Step label="Address">
          <AddressStep form={form} />
        </Stepper.Step>
      </Stepper>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}`,
  },
  {
    fileName: 'JobApplicationForm.module.css',
    language: 'scss',
    code: `.root {
  max-width: rem(480px);
  padding: var(--mantine-spacing-md);
  border: 1px solid var(--mantine-color-border);
  border-radius: var(--mantine-radius-md);
}`,
  },
  {
    fileName: 'steps/PersonalStep.tsx',
    language: 'tsx',
    code: `import { TextInput } from '@mantine/core';
import type { StepProps } from '../types';
import classes from './PersonalStep.module.css';

export function PersonalStep({ form }: StepProps) {
  return (
    <div className={classes.root}>
      <TextInput label="Name" {...form.getInputProps('name')} />
      <TextInput label="Email" {...form.getInputProps('email')} />
    </div>
  );
}`,
  },
  {
    fileName: 'steps/PersonalStep.module.css',
    language: 'scss',
    code: `.root {
  display: flex;
  flex-direction: column;
  gap: var(--mantine-spacing-sm);
}`,
  },
  {
    fileName: 'steps/address/AddressStep.tsx',
    language: 'tsx',
    code: `import { Select, TextInput } from '@mantine/core';
import type { StepProps } from '../../types';
import countries from './countries.json';

export function AddressStep({ form }: StepProps) {
  return (
    <>
      <TextInput label="Street" {...form.getInputProps('street')} />
      <TextInput label="City" mt="sm" {...form.getInputProps('city')} />
      <Select label="Country" mt="sm" data={countries} {...form.getInputProps('country')} />
    </>
  );
}`,
  },
  {
    fileName: 'steps/address/countries.json',
    language: 'json',
    code: `[
  { "value": "de", "label": "Germany" },
  { "value": "fr", "label": "France" },
  { "value": "nl", "label": "Netherlands" },
  { "value": "pl", "label": "Poland" }
]`,
  },
  {
    fileName: 'assets/logo.svg',
    language: 'html',
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
  <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" />
</svg>`,
  },
  {
    fileName: 'types.ts',
    language: 'tsx',
    code: `import type { UseFormReturnType } from '@mantine/form';

export interface JobApplicationValues {
  name: string;
  email: string;
  street: string;
  city: string;
  country: string;
}

export interface StepProps {
  form: UseFormReturnType<JobApplicationValues>;
}`,
  },
  {
    fileName: 'validation.ts',
    language: 'tsx',
    code: `import { isEmail, isNotEmpty } from '@mantine/form';

export const validation = {
  name: isNotEmpty('Name is required'),
  email: isEmail('Invalid email'),
  street: isNotEmpty('Street is required'),
  city: isNotEmpty('City is required'),
  country: isNotEmpty('Country is required'),
};`,
  },
  {
    fileName: 'README.md',
    language: 'text',
    code: `# Job application form

Two-step form built with @mantine/form.
Run the tests with \`npm test\`.`,
  },
  {
    fileName: 'JobApplicationForm.test.tsx',
    language: 'tsx',
    code: `import { render, screen } from '@testing-library/react';
import { JobApplicationForm } from './JobApplicationForm';

it('renders the first step', () => {
  render(<JobApplicationForm />);
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
});`,
  },
];
