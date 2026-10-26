'use client';

import { useState } from 'react';
import { Button, Checkbox, NativeSelect, TextInput, Title } from '@mantine/core';
import { titleRanges } from './data';
import classes from './Demo.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DemoForm() {
  const [shop, setShop] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [sentFor, setSentFor] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailError(true);
      event.currentTarget.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
      return;
    }
    setSentFor(shop.trim() || 'your shop');
  };

  if (sentFor !== null) {
    return (
      <div className={classes.form} role="status">
        <div className={classes.sent}>
          <Title order={3} className={classes.sentTitle}>
            Demo request sent
          </Title>
          <span>
            We’ll email you within one working day to pick a time. Have your stock list for{' '}
            {sentFor} ready to send.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextInput
        label="Shop name"
        placeholder="Paper Lantern"
        value={shop}
        onChange={(event) => setShop(event.currentTarget.value)}
      />
      <TextInput
        label="Email"
        type="email"
        placeholder="you@yourshop.co.uk"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        error={emailError ? 'Enter an email address like name@yourshop.co.uk' : undefined}
      />
      <NativeSelect label="Titles in stock" data={titleRanges} defaultValue={titleRanges[1]} />
      <Checkbox defaultChecked label="Send me the monthly bookseller newsletter" />
      <Button type="submit">Book my demo</Button>
    </form>
  );
}
