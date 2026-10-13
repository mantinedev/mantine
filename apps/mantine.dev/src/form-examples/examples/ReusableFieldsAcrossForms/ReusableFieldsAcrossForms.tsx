import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { CheckoutForm } from './CheckoutForm';
import { NewsletterForm } from './NewsletterForm';
import { SignupForm } from './SignupForm';

const FORMS = [
  { value: 'signup', label: 'Sign up' },
  { value: 'checkout', label: 'Checkout' },
  { value: 'newsletter', label: 'Newsletter' },
];

export function ReusableFieldsAcrossForms() {
  const [activeForm, setActiveForm] = useState('signup');

  return (
    <Stack maw={420} mx="auto">
      <SegmentedControl size="md" data={FORMS} value={activeForm} onChange={setActiveForm} />

      {activeForm === 'signup' && <SignupForm />}
      {activeForm === 'checkout' && <CheckoutForm />}
      {activeForm === 'newsletter' && <NewsletterForm />}
    </Stack>
  );
}
