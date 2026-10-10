import { useState } from 'react';
import { Button, Group, Stepper } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { AccountStep } from './AccountStep';
import { ProfileStep } from './ProfileStep';
import { SummaryStep } from './SummaryStep';
import { WizardValues } from './types';

const STEP_FIELDS: (keyof WizardValues)[][] = [
  ['username', 'password'],
  ['name', 'email'],
];

function createAccount(values: WizardValues) {
  return new Promise<WizardValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function StepperWizard() {
  const [active, setActive] = useState(0);

  const form = useForm<WizardValues>({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '', name: '', email: '' },
    validate: {
      username: hasLength({ min: 3 }, 'Username must be at least 3 characters'),
      password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const nextStep = () => {
    // Validate every field of the current step so all errors are shown at once
    const results = STEP_FIELDS[active].map((field) => form.validateField(field));
    if (!results.some((result) => result.hasError)) {
      setActive((current) => current + 1);
    }
  };

  const prevStep = () => setActive((current) => current - 1);

  const handleSubmit = async (values: WizardValues) => {
    const user = await createAccount(values);
    notifications.show({
      title: 'Account created',
      message: `${user.name} (${user.email}) can now sign in as ${user.username}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stepper active={active} size="sm">
        <Stepper.Step label="Account" description="Username and password">
          <AccountStep form={form} />
        </Stepper.Step>

        <Stepper.Step label="Profile" description="Name and email">
          <ProfileStep form={form} />
        </Stepper.Step>

        <Stepper.Step label="Done" description="Review and submit">
          <SummaryStep form={form} />
        </Stepper.Step>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active > 0 && (
          <Button variant="default" onClick={prevStep} disabled={form.submitting}>
            Back
          </Button>
        )}
        {active < 2 && <Button onClick={nextStep}>Next</Button>}
        {active === 2 && (
          <Button type="submit" loading={form.submitting}>
            Create account
          </Button>
        )}
      </Group>
    </form>
  );
}
